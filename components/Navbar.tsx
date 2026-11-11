"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const links = [
  { href: "/#services", label: "What we do" },
  { href: "/#process", label: "Process" },
  { href: "/#why", label: "Why us" },
  { href: "/#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => ref.current && !ref.current.contains(e.target as Node) && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => { document.removeEventListener("keydown", onKey); document.removeEventListener("mousedown", onClick); };
  }, [open]);
  return (
    <header ref={ref} className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {links.map((l) => (<Link key={l.href} href={l.href} className="py-2 text-slate-600 hover:text-slate-900">{l.label}</Link>))}
          <Link href="/#contact" className="btn">Get in touch</Link>
        </nav>
        <button className="grid h-10 w-10 place-items-center md:hidden" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-slate-200 bg-white md:hidden">
          <div className="flex flex-col px-5 py-3 font-medium text-slate-800">
            {[...links, { href: "/#contact", label: "Get in touch" }].map((l) => (<Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2.5">{l.label}</Link>))}
          </div>
        </nav>
      )}
    </header>
  );
}
