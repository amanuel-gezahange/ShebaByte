import { steps } from "@/lib/data";
import Section from "./Section";

export default function Process() {
  return (
    <Section id="process" alt center eyebrow="How it works" title="From first call to launch" text="Clear steps and regular updates, so you always know where your project stands.">
      <ol className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="pointer-events-none absolute top-[2.35rem] right-[12%] left-[12%] hidden h-px bg-slate-300 lg:block" aria-hidden />
        {steps.map((s, i) => (
          <li key={s.title} className="relative rounded-2xl border border-slate-200 bg-white p-6">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-blue-600 text-sm font-bold text-white ring-8 ring-white">{i + 1}</span>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed">{s.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
