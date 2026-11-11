import { reasons } from "@/lib/data";
import Section from "./Section";

export default function WhyUs() {
  return (
    <Section id="why" center eyebrow="Why ShebaByte" title="A partner you can rely on" text="The commitments we make to every client.">
      <div className="grid gap-5 sm:grid-cols-2">
        {reasons.map((r) => (
          <div key={r.title} className="flex gap-5 rounded-2xl border border-slate-200 p-7">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600"><r.icon className="h-5 w-5" /></span>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">{r.title}</h3>
              <p className="mt-1 leading-relaxed">{r.text}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
