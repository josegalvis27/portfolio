"use client";

export function PrintButton({ label }: { label: string }) {
  return (
    <button onClick={() => window.print()} className="rounded-full bg-black px-4 py-1.5 font-bold text-white hover:bg-zinc-800">
      {label}
    </button>
  );
}
