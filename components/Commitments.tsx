import { commitments } from "@/lib/data";

export default function Commitments() {
  return (
    <div className="border-b border-slate-200 bg-white">
      <ul className="mx-auto grid max-w-5xl gap-6 px-5 py-8 sm:grid-cols-2 lg:grid-cols-4">
        {commitments.map((c) => (
          <li key={c.title} className="flex items-center gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-blue-50 text-blue-600"><c.icon className="h-5 w-5" /></span>
            <div><b className="block text-sm font-semibold text-slate-900">{c.title}</b><span className="text-sm text-slate-500">{c.text}</span></div>
          </li>
        ))}
      </ul>
    </div>
  );
}
