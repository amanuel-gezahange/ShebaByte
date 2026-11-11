import { Hammer, Layers, Handshake, BadgeCheck, FileText, KeyRound, Headset, Target, Wallet, ShieldCheck, LifeBuoy, type LucideIcon } from "lucide-react";

export const pillars: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Hammer, title: "Built around you", text: "Every solution is designed for the way your business actually works — not forced into a generic template." },
  { icon: Layers, title: "Modern foundations", text: "Reliable, secure technology that is ready to grow as your business and your needs grow." },
  { icon: Handshake, title: "Like family, for the long run", text: "We treat your business like our own and stay by your side after launch — a team that knows you and picks up the phone." },
];

export const commitments: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Headset, title: "Friendly first chat", text: "Free, no pressure" },
  { icon: FileText, title: "Honest pricing", text: "Clear cost upfront" },
  { icon: KeyRound, title: "You own everything", text: "Code, design and data" },
  { icon: BadgeCheck, title: "Support after launch", text: "We stay with you" },
];

export const steps = [
  { title: "Consultation", text: "We learn about your business and what you need. It's free." },
  { title: "Proposal", text: "You receive a clear scope, timeline and fixed price." },
  { title: "Design & build", text: "We design, build and show you progress along the way." },
  { title: "Launch & support", text: "We launch, train your team and keep supporting you." },
];

export const reasons: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Target, title: "Built for your business", text: "Every project is tailored — no generic templates." },
  { icon: Wallet, title: "Clear pricing", text: "A clear price before we start, explained honestly. No hidden fees." },
  { icon: ShieldCheck, title: "You own it", text: "What we build for you — and your data — belongs to you." },
  { icon: LifeBuoy, title: "Ongoing support", text: "Maintenance and help after launch, by phone or WhatsApp." },
];

export const needs = ["A digital solution for my business", "Not sure yet — let's talk", "Partnership or something else"] as const;

export const site = {
  name: "ShebaByte",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000"),
  description: "ShebaByte is a technology company designing and building modern software and digital solutions for businesses.",
};

export const faqs = [
  { q: "How much does a project cost?", a: "It depends on the size and features. After a free chat we send a clear, fixed price so you know exactly what to expect." },
  { q: "How long will it take?", a: "It depends on the scope. We agree on a clear timeline before starting and keep you updated along the way." },
  { q: "Do I need to be technical?", a: "No. We handle the technical side and explain everything in plain language." },
  { q: "Who owns the finished work?", a: "You do. Code, designs and content are handed over to you." },
  { q: "Do you provide hosting and maintenance?", a: "Yes. We can host, update and support what we build for you after launch." },
];

export const contact = {
  address: "Gelan, Sidama, Awash — Ethiopia",
  phones: ["+251 940 263 748"],
  email: "shebabyte@gmail.com",
  whatsapp: "https://wa.me/251940263748",
  // TODO: add the ShebaByte LinkedIn company page, e.g. "https://www.linkedin.com/company/shebabyte".
  // Must be a public page/profile URL (not linkedin.com/feed). Links stay hidden while empty.
  linkedin: "",
};
