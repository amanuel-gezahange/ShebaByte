export default function Section({ id, eyebrow, title, text, children, alt, center }: {
  id?: string; eyebrow?: string; title: string; text?: string; children: React.ReactNode; alt?: boolean; center?: boolean;
}) {
  return (
    <section id={id} className={`scroll-mt-16 py-24 ${alt ? "border-y border-slate-200 bg-slate-50" : ""}`}>
      <div className="mx-auto max-w-5xl px-5">
        <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">{title}</h2>
          {text && <p className="mt-4 text-lg leading-relaxed">{text}</p>}
        </div>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}
