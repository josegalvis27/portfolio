import { ArrowDown, ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { caseStudies, type CaseStudy } from "@/case-studies";
import type { Lang } from "@/content";

const L = {
  back: { es: "Volver al portafolio", en: "Back to portfolio" },
  other: { es: "English", en: "Español" },
  context: { es: "Contexto", en: "Context" },
  decisions: { es: "Decisiones y alternativas", en: "Decisions and alternatives" },
  decision: { es: "Decisión", en: "Decision" },
  alternative: { es: "Alternativa descartada", en: "Alternative ruled out" },
  why: { es: "Por qué", en: "Why" },
  contribution: { es: "Mi contribución y la del equipo", en: "My contribution vs. the team's" },
  measurement: { es: "Cómo se midió", en: "How it was measured" },
  outcome: { es: "Resultado", en: "Outcome" },
  next: { es: "Siguiente caso", en: "Next case" },
};

export function CasePage({ study: c, lang }: { study: CaseStudy; lang: Lang }) {
  const home = "/#casos";
  const others = caseStudies.filter((s) => s.slug !== c.slug);

  return (
    <main className="mx-auto max-w-4xl px-4 pt-10 pb-24 sm:px-6">
      <div className="flex items-center justify-between text-sm">
        <Link href={home} className="inline-flex items-center gap-1 text-zinc-300 hover:text-white">
          <ArrowLeft className="h-4 w-4" /> {L.back[lang]}
        </Link>
        <Link href={`/casos/${c.slug}${lang === "es" ? "/en" : ""}`} className="rounded-full border border-white/20 px-3 py-1 font-mono text-xs hover:border-teal-200">
          {L.other[lang]}
        </Link>
      </div>

      <header className="mt-12">
        <p className="font-mono text-xs tracking-wider text-teal-200 uppercase">{c.period[lang]}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{c.title[lang]}</h1>
        <p className="mt-6 flex items-baseline gap-3">
          <span className="text-gradient text-5xl font-semibold">{c.metric}</span>
          <span className="text-zinc-300">{c.metricLabel[lang]}</span>
        </p>
      </header>

      <Block title={L.context[lang]}>
        {c.context.map((p) => (
          <p key={p.en} className="leading-relaxed text-zinc-200">{p[lang]}</p>
        ))}
      </Block>

      {c.baseline && (
        <Block title={c.baseline.title[lang]}>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead className="bg-white/[0.04] text-zinc-300">
                <tr>
                  {c.baseline.columns.map((col) => (
                    <th key={col.en} className="px-4 py-2.5 font-medium">{col[lang]}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {c.baseline.rows.map((row, i) => (
                  <tr key={row[0]} className={i < 2 ? "bg-teal-300/[0.06]" : ""}>
                    <td className="px-4 py-2.5 font-mono text-xs text-zinc-100">{row[0]}</td>
                    <td className="px-4 py-2.5 text-zinc-200">{row[1]}</td>
                    <td className="px-4 py-2.5 text-zinc-200">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="leading-relaxed text-zinc-200">{c.baseline.note[lang]}</p>
        </Block>
      )}

      <Block title={c.architecture.title[lang]}>
        <ol className="space-y-1">
          {c.architecture.steps.map((s, i) => (
            <li key={s.name}>
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3">
                <span className="w-44 shrink-0 font-mono text-sm font-semibold text-teal-100">{s.name}</span>
                <span className="text-sm text-zinc-300">{s.detail[lang]}</span>
              </div>
              {i < c.architecture.steps.length - 1 && <ArrowDown className="mx-auto my-1 h-4 w-4 text-zinc-500" />}
            </li>
          ))}
        </ol>
        {c.architecture.note && <p className="text-sm text-zinc-300">{c.architecture.note[lang]}</p>}
      </Block>

      <Block title={L.decisions[lang]}>
        <div className="space-y-4">
          {c.decisions.map((d) => (
            <div key={d.decision.en} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm leading-relaxed">
              <p className="font-mono text-[11px] tracking-wider text-teal-200 uppercase">{L.decision[lang]}</p>
              <p className="mt-0.5 font-medium text-zinc-100">{d.decision[lang]}</p>
              <p className="mt-3 font-mono text-[11px] tracking-wider text-zinc-400 uppercase">{L.alternative[lang]}</p>
              <p className="mt-0.5 text-zinc-300">{d.alternative[lang]}</p>
              <p className="mt-3 font-mono text-[11px] tracking-wider text-zinc-400 uppercase">{L.why[lang]}</p>
              <p className="mt-0.5 text-zinc-300">{d.why[lang]}</p>
            </div>
          ))}
        </div>
      </Block>

      <div className="grid gap-x-8 sm:grid-cols-2">
        <Block title={L.contribution[lang]}>
          <List items={c.contribution.map((x) => x[lang])} />
        </Block>
        <Block title={L.measurement[lang]}>
          <List items={c.measurement.map((x) => x[lang])} />
        </Block>
      </div>

      <Block title={L.outcome[lang]}>
        <List items={c.outcome.map((x) => x[lang])} />
        <div className="flex flex-wrap gap-1.5 pt-2">
          {c.stack.map((s) => (
            <span key={s} className="rounded-full border border-white/15 px-2.5 py-0.5 font-mono text-[11px] text-zinc-200">{s}</span>
          ))}
        </div>
      </Block>

      {others.map((o) => (
        <Link
          key={o.slug}
          href={`/casos/${o.slug}${lang === "en" ? "/en" : ""}`}
          className="mt-14 block rounded-3xl border border-white/10 bg-gradient-to-br from-teal-500/10 to-violet-500/10 p-6 transition hover:border-teal-200/50"
        >
          <p className="font-mono text-xs tracking-wider text-teal-200 uppercase">{L.next[lang]}</p>
          <p className="mt-1 text-xl font-semibold">{o.title[lang]} →</p>
        </Link>
      ))}
    </main>
  );
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-12 space-y-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      {children}
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 leading-relaxed text-zinc-200 marker:text-teal-300">
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}
