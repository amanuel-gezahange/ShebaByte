import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="px-5">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-slate-900 px-8 py-16 text-center">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-blue-600/40 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" aria-hidden />
        <div className="relative">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">Let's grow your business together</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">Whether you have a clear idea or just a problem to solve, we're happy to listen. Think of us as the team next door that's here to help.</p>
          <Link href="/#contact" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-blue-50">Say hello <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  );
}
