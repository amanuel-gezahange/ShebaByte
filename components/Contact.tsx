"use client";
import { useActionState } from "react";
import { CheckCircle2, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { sendContact, type ContactState } from "@/app/actions";
import { contact, needs } from "@/lib/data";
import LinkedInIcon from "./LinkedInIcon";

const initial: ContactState = { ok: false, message: "" };
const iconCls = "mt-0.5 h-5 w-5 shrink-0 text-blue-600";

export default function Contact() {
  const [state, action, pending] = useActionState(sendContact, initial);
  const v = state.values;
  const err = (k: string) => state.errors?.[k] && <span id={`${k}-err`} className="mt-1 block text-xs text-red-600">{state.errors[k]}</span>;
  const inv = (k: string) => ({ "aria-invalid": !!state.errors?.[k], "aria-describedby": state.errors?.[k] ? `${k}-err` : undefined });

  return (
    <section id="contact" className="scroll-mt-16 border-t border-slate-200 bg-slate-50 py-24">
      <div className="mx-auto grid max-w-5xl gap-14 px-5 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Get in touch</h2>
          <p className="mt-4 text-lg leading-relaxed">Tell us about your business and what you&apos;d like to achieve. We read every message personally and reply within one working day.</p>
          <ul className="mt-10 space-y-6">
            <li className="flex gap-4"><MapPin className={iconCls} /><div><b className="block text-slate-900">Address</b>{contact.address}</div></li>
            <li className="flex gap-4"><Phone className={iconCls} /><div><b className="block text-slate-900">Phone</b>{contact.phones.map((p) => (<a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="block py-0.5 hover:text-blue-600">{p}</a>))}</div></li>
            <li className="flex gap-4"><Mail className={iconCls} /><div><b className="block text-slate-900">Email</b><a href={`mailto:${contact.email}`} className="inline-block py-0.5 hover:text-blue-600">{contact.email}</a></div></li>
            <li className="flex gap-4"><MessageCircle className={iconCls} /><div><b className="block text-slate-900">WhatsApp</b><a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-block py-0.5 hover:text-blue-600">Chat with us</a></div></li>
            {contact.linkedin && <li className="flex gap-4"><LinkedInIcon className={iconCls} /><div><b className="block text-slate-900">LinkedIn</b><a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">Follow ShebaByte</a></div></li>}
          </ul>
        </div>
        {state.ok ? (
          <div className="grid place-items-center rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm" role="status">
            <div><CheckCircle2 className="mx-auto mb-3 h-12 w-12 text-green-600" /><h3 className="text-xl font-bold text-slate-900">Message sent</h3><p className="mt-2">{state.message}</p></div>
          </div>
        ) : (
          <form action={action} className="space-y-5 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm" noValidate>
            <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
            <label className="block text-sm font-medium text-slate-900">Name<input name="name" autoComplete="name" maxLength={100} required defaultValue={v?.name} placeholder="What should we call you?" className="input mt-1.5" {...inv("name")} />{err("name")}</label>
            <label className="block text-sm font-medium text-slate-900">Email<input name="email" type="email" autoComplete="email" maxLength={200} required defaultValue={v?.email} placeholder="you@company.com" className="input mt-1.5" {...inv("email")} />{err("email")}</label>
            <label className="block text-sm font-medium text-slate-900">How can we help?
              <select name="need" defaultValue={v?.need ?? needs[0]} className="input mt-1.5">{needs.map((n) => <option key={n}>{n}</option>)}</select>
            </label>
            <label className="block text-sm font-medium text-slate-900">Tell us about your business<textarea name="msg" rows={4} maxLength={5000} required defaultValue={v?.msg} placeholder="What are you working on, and how can we help?" className="input mt-1.5" {...inv("msg")} />{err("msg")}</label>
            <button className="btn w-full !py-3" disabled={pending}>{pending ? "Sending…" : "Send message"}</button>
            {state.message && <p role="alert" className="text-sm text-red-600">{state.message}</p>}
          </form>
        )}
      </div>
    </section>
  );
}
