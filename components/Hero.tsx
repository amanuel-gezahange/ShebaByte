import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

function Visual() {
  return (
    <div className="relative mx-auto w-full max-w-md" aria-hidden>
      {/* browser window */}
      <div className="rounded-xl border border-slate-200 bg-white shadow-xl">
        <div className="flex items-center gap-1.5 border-b border-slate-100 px-4 py-3">
          <i className="h-2.5 w-2.5 rounded-full bg-slate-200" /><i className="h-2.5 w-2.5 rounded-full bg-slate-200" /><i className="h-2.5 w-2.5 rounded-full bg-slate-200" />
          <span className="ml-3 h-5 flex-1 rounded bg-slate-100" />
        </div>
        <div className="space-y-4 p-5">
          <div className="h-3 w-24 rounded bg-blue-600" />
          <div className="h-5 w-4/5 rounded bg-slate-800" />
          <div className="h-5 w-3/5 rounded bg-slate-800" />
          <div className="space-y-2 pt-1"><div className="h-2.5 w-full rounded bg-slate-200" /><div className="h-2.5 w-5/6 rounded bg-slate-200" /></div>
          <div className="flex gap-2 pt-1"><div className="h-8 w-24 rounded-md bg-blue-600" /><div className="h-8 w-20 rounded-md border border-slate-300" /></div>
          <div className="grid grid-cols-3 gap-3 pt-3">
            {[0, 1, 2].map((i) => (<div key={i} className="rounded-lg border border-slate-100 bg-slate-50 p-3"><div className="mb-2 h-6 w-6 rounded bg-blue-100" /><div className="h-2 w-full rounded bg-slate-200" /></div>))}
          </div>
        </div>
      </div>
      {/* dashboard card */}
      <div className="absolute -bottom-8 -left-6 w-52 rounded-xl border border-slate-200 bg-white p-4 shadow-xl sm:-left-10">
        <div className="mb-3 h-2.5 w-20 rounded bg-slate-300" />
        <div className="flex h-20 items-end gap-2">
          {[40, 65, 50, 80, 62, 95].map((h, i) => (<div key={i} className={`flex-1 rounded-t ${i === 5 ? "bg-blue-600" : "bg-blue-200"}`} style={{ height: `${h}%` }} />))}
        </div>
      </div>
      {/* status badge */}
      <div className="absolute -top-4 -right-3 flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-lg sm:-right-6">
        <CheckCircle2 className="h-4 w-4 text-green-600" /> Project launched
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-blue-50/70 to-white pt-32 pb-24">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#2563eb0d_1px,transparent_1px),linear-gradient(to_bottom,#2563eb0d_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      <div className="relative mx-auto grid max-w-5xl items-center gap-16 px-5 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <span className="inline-block rounded-full border border-blue-200 bg-white px-3.5 py-1 text-xs font-semibold tracking-wide text-blue-700">Technology company</span>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]">
            We build software that <span className="text-blue-600">moves your business forward.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-600">
            ShebaByte designs and builds modern digital solutions, tailored to the way you work and ready to grow with you.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/#contact" className="btn !px-6 !py-3">Book a free chat <ArrowRight className="h-4 w-4" /></Link>
            <Link href="/#services" className="btn btn-outline !px-6 !py-3">What we do</Link>
          </div>
        </div>
        <Visual />
      </div>
    </section>
  );
}
