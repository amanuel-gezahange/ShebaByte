import Link from "next/link";
import Logo from "./Logo";
import LinkedInIcon from "./LinkedInIcon";
import { contact } from "@/lib/data";

const cols = [
  { h: "Company", l: [["What we do", "/#services"], ["How it works", "/#process"], ["Why us", "/#why"]] },
  { h: "Resources", l: [["FAQ", "/#faq"], ["Contact", "/#contact"]] },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-sm text-slate-400">
      <div className="mx-auto grid max-w-5xl gap-10 px-5 py-14 md:grid-cols-[1.6fr_1fr_1fr_1.6fr]">
        <div><Logo light /><p className="mt-4 max-w-xs leading-relaxed">Your business is our business. Technology built with care.</p></div>
        {cols.map((c) => (
          <div key={c.h}>
            <h3 className="mb-4 font-semibold text-white">{c.h}</h3>
            <ul className="space-y-1">{c.l.map(([t, h]) => <li key={t}><Link href={h} className="inline-block py-1 hover:text-white">{t}</Link></li>)}</ul>
          </div>
        ))}
        <div>
          <h3 className="mb-4 font-semibold text-white">Contact</h3>
          <ul className="space-y-1">
            <li className="py-1">{contact.address}</li>
            {contact.phones.map((p) => <li key={p}><a href={`tel:${p.replace(/\s/g, "")}`} className="inline-block py-1 hover:text-white">{p}</a></li>)}
            <li><a href={`mailto:${contact.email}`} className="inline-block py-1 hover:text-white">{contact.email}</a></li>
            {contact.linkedin && <li><a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 py-1 hover:text-white"><LinkedInIcon className="h-4 w-4" />LinkedIn</a></li>}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-5xl px-5 py-6 text-xs">© {new Date().getFullYear()} ShebaByte. All rights reserved. · Crown icon from <a href="https://game-icons.net" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">game-icons.net</a> (CC BY 3.0)</p>
      </div>
    </footer>
  );
}
