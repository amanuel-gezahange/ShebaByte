import { Plus } from "lucide-react";
import { faqs } from "@/lib/data";
import Section from "./Section";

export default function FAQ() {
  return (
    <Section id="faq" center eyebrow="FAQ" title="Frequently asked questions">
      <div className="mx-auto max-w-3xl divide-y divide-slate-200 border-y border-slate-200">
        {faqs.map((f) => (
          <details key={f.q} className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-lg font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
              {f.q}<Plus className="h-5 w-5 shrink-0 text-slate-400 transition group-open:rotate-45" />
            </summary>
            <p className="pb-5 leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
