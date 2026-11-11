import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-5 text-center">
      <div>
        <p className="text-7xl font-bold">404</p>
        <p className="mt-3 text-slate-500">This page doesn&apos;t exist.</p>
        <Link href="/" className="btn mt-6">Back home</Link>
      </div>
    </main>
  );
}
