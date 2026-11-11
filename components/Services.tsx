import { pillars } from "@/lib/data";
import Section from "./Section";

export default function Services() {
  return (
    <Section id="services" center eyebrow="What we do" title="Technology built around your business" text="ShebaByte is a technology company. We design and build digital solutions that help businesses work better and grow.">
      <div className="grid gap-6 lg:grid-cols-3">
        {pillars.map((p) => (
          <article key={p.title} className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 transition hover:border-blue-200 hover:shadow-lg hover:shadow-blue-600/5">
            <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-blue-600 text-white"><p.icon className="h-6 w-6" /></span>
            <h3 className="relative mt-6 text-xl font-semibold text-slate-900">{p.title}</h3>
            <p className="relative mt-2 leading-relaxed">{p.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
