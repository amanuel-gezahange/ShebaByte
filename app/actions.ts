"use server";
import nodemailer from "nodemailer";
import { headers } from "next/headers";
import { needs } from "@/lib/data";

export type ContactValues = { name: string; email: string; need: string; msg: string };
export type ContactState = { ok: boolean; message: string; errors?: Record<string, string>; values?: ContactValues };

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Simple per-instance rate limit (best-effort spam protection): 5 messages / 10 min per IP.
const hits = new Map<string, number[]>();
function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60_000);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > 5;
}

const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ").trim();

export async function sendContact(_prev: ContactState, form: FormData): Promise<ContactState> {
  // Honeypot: real visitors never fill this hidden field. Pretend success for bots.
  if (String(form.get("website") ?? "").trim()) return { ok: true, message: "Thanks! We'll be in touch shortly." };

  const h = await headers();
  const ip = (h.get("x-forwarded-for") ?? "unknown").split(",")[0].trim();
  if (rateLimited(ip)) return { ok: false, message: "You've sent several messages recently. Please wait a few minutes, or email shebabyte@gmail.com directly." };

  const name = oneLine(String(form.get("name") ?? "")).slice(0, 100);
  const email = oneLine(String(form.get("email") ?? "")).slice(0, 200);
  const needRaw = oneLine(String(form.get("need") ?? ""));
  const need = (needs as readonly string[]).includes(needRaw) ? needRaw : needs[0];
  const msg = String(form.get("msg") ?? "").trim().slice(0, 5000);
  const values: ContactValues = { name, email, need, msg };

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Please enter your name.";
  if (!emailRe.test(email)) errors.email = "Enter a valid email.";
  if (msg.length < 10) errors.msg = "Tell us a little more (10+ characters).";
  if (Object.keys(errors).length) return { ok: false, message: "Please fix the highlighted fields.", errors, values };

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  const to = process.env.CONTACT_TO || "shebabyte@gmail.com";
  const thanks = `Thank you, ${name.split(" ")[0]}! We've got your message and we'll write back to ${email} soon.`;

  if (!user || !pass) {
    if (process.env.NODE_ENV === "production") {
      // Never pretend a message was delivered in production.
      console.error("[contact] GMAIL_USER / GMAIL_APP_PASSWORD are not set — message NOT sent");
      return { ok: false, message: "Sorry, our contact form isn't available right now. Please email shebabyte@gmail.com or call us instead.", values };
    }
    // Local development without email credentials: log instead of sending.
    console.log("[contact:not-sent — set GMAIL_USER and GMAIL_APP_PASSWORD]", values);
    return { ok: true, message: `${thanks} (Dev mode: email not sent — add Gmail credentials to .env.local.)` };
  }

  try {
    const transporter = nodemailer.createTransport({ service: "gmail", auth: { user, pass } });
    await transporter.sendMail({
      from: `"ShebaByte website" <${user}>`,
      to,
      replyTo: `"${name.replace(/"/g, "")}" <${email}>`,
      subject: `New message from ${name} — ${need}`,
      text: `Name: ${name}\nEmail: ${email}\nInterested in: ${need}\n\n${msg}\n`,
    });
    return { ok: true, message: thanks };
  } catch (e) {
    console.error("[contact] send failed", e);
    return { ok: false, message: "Sorry, we couldn't send your message. Please email shebabyte@gmail.com or call us instead.", values };
  }
}
