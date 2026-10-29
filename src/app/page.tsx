"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ArrowUpRight, BadgeCheck, Bot, Briefcase, Download, GitBranch, Lock, Mail, User, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { Aurora, CountUp, GlowCard, Marquee, Reveal } from "@/components/fx";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/icons";
import {
  aiDemo,
  aiStats,
  aiWork,
  arcade,
  arcadeCode,
  cases,
  certificates,
  education,
  experience,
  links,
  moreProjects,
  myResults,
  nav,
  opportunities,
  productScale,
  showcases,
  techMarquee,
  ui,
  workflows,
  type Certificate,
  type Lang,
  type Project,
  type Showcase,
} from "@/content";

export default function Home() {
  const [lang, setLang] = useState<Lang>("es");
  const [cert, setCert] = useState<Certificate | null>(null);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <>
      <Nav lang={lang} onToggle={() => setLang(lang === "es" ? "en" : "es")} />

      <main className="relative isolate overflow-x-clip">
        <Aurora />

        {/* Hero: the full value proposition is readable without waiting for any animation */}
        <section className="mx-auto max-w-6xl px-4 pt-32 pb-16 sm:px-6 sm:pt-40">
          <div className="flex flex-col-reverse gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="font-mono text-xs tracking-wider text-teal-200 uppercase">{ui.meta[lang]}</p>
              <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-6xl">José Galvis</h1>
              <p className="text-gradient mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{ui.headline[lang]}</p>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-200">{ui.intro[lang]}</p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#proyectos" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-300 to-violet-300 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:scale-[1.03]">
                  {ui.seeProjects[lang]} <ArrowRight className="h-4 w-4" />
                </a>
                <a href={links.cv[lang]} className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium transition hover:border-white/50 hover:bg-white/5">
                  <Download className="h-4 w-4" /> {ui.seeCv[lang]}
                </a>
                <Socials />
              </div>
            </div>
            <div className="relative h-36 w-36 shrink-0 sm:h-52 sm:w-52">
              <div className="absolute -inset-1 rounded-full bg-[conic-gradient(from_0deg,#5eead4,#a78bfa,#f0abfc,#5eead4)] opacity-80 blur-sm" />
              <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-[#07070a] bg-zinc-800">
                {/* Tighter crop on the face: the source photo is a full seated shot */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={links.avatar} alt="José Galvis" className="h-full w-full origin-[50%_22%] scale-[1.9] object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Results: product scale vs. results attributable to my work */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-4 lg:grid-cols-2">
            <StatGroup title={ui.mineTitle[lang]} note={ui.mineNote[lang]} stats={myResults} lang={lang} accent />
            <StatGroup title={ui.scaleTitle[lang]} note={ui.scaleNote[lang]} stats={productScale} lang={lang} />
          </div>
        </section>

        <div className="mt-16">
          <Marquee items={techMarquee} />
        </div>

        {/* Main projects */}
        <Section id="proyectos" eyebrow={ui.projects[lang]} title={ui.projectsTitle[lang]}>
          <div className="space-y-8">
            {showcases.map((s, i) => (
              <Reveal key={s.name}>
                <ShowcaseCard showcase={s} lang={lang} flip={i % 2 === 1} />
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Case studies */}
        <Section id="casos" eyebrow={ui.cases[lang]} title={ui.casesTitle[lang]}>
          <div className="grid gap-4 md:grid-cols-2">
            {cases.map((c) => (
              <Reveal key={c.title.en}>
                <GlowCard className="flex h-full flex-col p-7">
                  <div className="flex items-baseline gap-3">
                    <span className="text-gradient text-4xl font-semibold tracking-tight">{c.metric}</span>
                    <span className="text-sm text-zinc-300">{c.metricLabel[lang]}</span>
                  </div>
                  <h3 className="mt-4 text-xl leading-snug font-semibold">{c.title[lang]}</h3>
                  <dl className="mt-4 flex-1 space-y-3 text-sm leading-relaxed">
                    {(["problem", "solution", "result"] as const).map((k) => (
                      <div key={k}>
                        <dt className="font-mono text-[11px] tracking-wider text-teal-200 uppercase">{ui[k][lang]}</dt>
                        <dd className="mt-0.5 text-zinc-200">{c[k][lang]}</dd>
                      </div>
                    ))}
                  </dl>
                  {c.slug && (
                    <Link href={`/casos/${c.slug}${lang === "en" ? "/en" : ""}`} className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-teal-200 hover:underline">
                      {ui.seeCase[lang]} <ArrowRight className="h-4 w-4" />
                    </Link>
                  )}
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section id="experiencia" eyebrow={ui.experience[lang]}>
          <ol className="relative space-y-10 border-l border-white/15 pl-8">
            {experience.map((job) => (
              <li key={job.company} className="relative">
                <span className="absolute top-1.5 -left-[2.4rem] h-3 w-3 rounded-full bg-gradient-to-br from-teal-300 to-violet-400 ring-4 ring-[#07070a]" />
                <span className="font-mono text-xs tracking-wider text-teal-200 uppercase">{job.period[lang]}</span>
                <h3 className="mt-1 text-xl font-semibold">
                  {job.role[lang]} <span className="font-normal text-zinc-300">· {job.company}</span>
                </h3>
                <ul className="mt-3 max-w-3xl list-disc space-y-1.5 pl-5 text-zinc-200 marker:text-zinc-500">
                  {job.points.map((p) => (
                    <li key={p.en} className="leading-relaxed">{p[lang]}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Section>

        {/* AI & automation */}
        <Section id="ia" eyebrow={ui.ai[lang]} title={ui.aiTitle[lang]} intro={ui.aiIntro[lang]}>
          <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <Reveal>
              <ol className="relative space-y-4 rounded-3xl border border-white/10 bg-[#0b0b10]/80 p-6">
                {aiDemo.map((step, i) => {
                  const Icon = step.who === "human" ? User : step.who === "bot" ? Bot : Briefcase;
                  const color = step.who === "human" ? "text-amber-200" : step.who === "bot" ? "text-violet-200" : "text-teal-200";
                  return (
                    <li key={i} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <span className={`grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/5 ${color}`}>
                          <Icon className="h-4 w-4" />
                        </span>
                        {i < aiDemo.length - 1 && <span className="mt-1 w-px flex-1 bg-white/15" />}
                      </div>
                      <div className="pb-2">
                        <p className="font-mono text-xs text-zinc-400">{step.time}</p>
                        <p className="font-semibold">{step.title[lang]}</p>
                        <p className="mt-0.5 text-sm text-zinc-300">{step.detail[lang]}</p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </Reveal>
            <div className="space-y-4">
              {aiStats.map((s) => (
                <Reveal key={s.label.en}>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <div className="text-gradient text-3xl font-semibold">{s.value}</div>
                    <p className="mt-1 text-sm text-zinc-300">{s.label[lang]}</p>
                  </div>
                </Reveal>
              ))}
              <p className="text-xs text-zinc-400">Coco Wallet · 6–13 abr. 2026</p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {aiWork.map((w) => (
              <Reveal key={w.name.en}>
                <GlowCard className="h-full p-6">
                  <h3 className="font-semibold">{w.name[lang]}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-300">{w.description[lang]}</p>
                </GlowCard>
              </Reveal>
            ))}
          </div>

          <h3 className="mt-12 font-mono text-xs tracking-wider text-teal-200 uppercase">{ui.pipelines[lang]}</h3>
          <ul className="mt-4 grid gap-3 md:grid-cols-2">
            {workflows.map((w) => (
              <li key={w.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-sm font-semibold">{w.name}</span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/10 px-2 py-0.5 font-mono text-[11px] text-zinc-300">
                    <GitBranch className="h-3 w-3 text-teal-200" /> {w.trigger}
                  </span>
                </div>
                <p className="mt-1.5 text-sm text-zinc-300">{w.description[lang]}</p>
              </li>
            ))}
          </ul>
        </Section>

        {/* More projects */}
        <Section id="mas" eyebrow={ui.more[lang]}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {moreProjects.map((p) => (
              <Reveal key={p.name}>
                <ProjectCard project={p} lang={lang} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-mono text-xs tracking-wider text-teal-200 uppercase">{ui.arcade[lang]}</h3>
            <a href={arcadeCode} target="_blank" className="inline-flex items-center gap-1 text-sm text-teal-200 hover:underline">
              {ui.code[lang]} <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-5">
            {arcade.map((g) => (
              <figure key={g.slug} className="overflow-hidden rounded-xl border border-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/arcade-${g.slug}.png`} alt={g.name} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                <figcaption className="truncate px-2 py-1.5 text-xs text-zinc-300">{g.name}</figcaption>
              </figure>
            ))}
          </div>
        </Section>

        {/* Education & certificates, kept compact */}
        <Section id="formacion" eyebrow={ui.certs[lang]}>
          <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
            <ul className="space-y-3">
              {education.map((e) => (
                <li key={e.title.en} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="font-semibold">{e.title[lang]}</p>
                  <p className="text-sm text-zinc-300">{e.detail[lang]}</p>
                </li>
              ))}
            </ul>
            <ul className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03]">
              {certificates.map((c) => (
                <li key={c.title} className="flex items-center gap-3 p-3">
                  {c.image ? (
                    <button onClick={() => setCert(c)} className="h-10 w-14 shrink-0 overflow-hidden rounded border border-white/10 bg-white" aria-label={c.title}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={c.image} alt="" loading="lazy" className="h-full w-full object-cover object-top" />
                    </button>
                  ) : (
                    <span className="grid h-10 w-14 shrink-0 place-items-center rounded border border-white/10 text-teal-200">
                      <BadgeCheck className="h-4 w-4" />
                    </span>
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">{c.title}</p>
                    <p className="text-xs text-zinc-400">
                      {c.issuer} · {c.date[lang]}
                    </p>
                  </div>
                  {c.url && (
                    <a href={c.url} target="_blank" className="shrink-0 text-xs text-teal-200 hover:underline">
                      {ui.verify[lang]} ↗
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* Contact */}
        <section id="contacto" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-teal-500/20 via-violet-600/15 to-fuchsia-500/20 p-8 sm:p-14">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">{ui.ctaTitle[lang]}</h2>
            <p className="mt-3 text-lg text-zinc-200">{ui.ctaText[lang]}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {opportunities.map((o) => (
                <li key={o.title.en} className="rounded-2xl border border-white/15 bg-black/30 p-4">
                  <p className="font-semibold">{o.title[lang]}</p>
                  <p className="text-sm text-zinc-300">{o.detail[lang]}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={`mailto:${links.email}`} className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-zinc-950 transition hover:scale-[1.03]">
                <Mail className="h-5 w-5" /> {links.email}
              </a>
              <a href={links.cv[lang]} className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 font-medium hover:bg-white/10">
                <Download className="h-4 w-4" /> {ui.seeCv[lang]}
              </a>
              <Socials />
            </div>
          </div>
          <p className="mt-10 text-center text-sm text-zinc-400">© 2026 José Gregorio Galvis Rivas · Caracas, Venezuela</p>
        </section>
      </main>

      <AnimatePresence>
        {cert && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCert(null)}
          >
            <motion.div
              className="relative w-full max-w-4xl"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={cert.image} alt={cert.title} className="w-full rounded-2xl shadow-2xl" />
              <div className="mt-4 flex items-center justify-between gap-4">
                <p className="font-medium">{cert.title}</p>
                <div className="flex shrink-0 gap-2">
                  {cert.url && (
                    <a href={cert.url} target="_blank" className="inline-flex items-center gap-1 rounded-full bg-teal-300 px-4 py-2 text-sm font-semibold text-zinc-950">
                      <BadgeCheck className="h-4 w-4" /> {ui.verify[lang]}
                    </a>
                  )}
                  <button onClick={() => setCert(null)} className="rounded-full border border-white/20 p-2" aria-label={ui.close[lang]}>
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Nav({ lang, onToggle }: { lang: Lang; onToggle: () => void }) {
  return (
    <header className="fixed inset-x-0 top-4 z-40 px-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border border-white/10 bg-[#0b0b10]/80 py-2 pr-2 pl-5 backdrop-blur-xl">
        <a href="#" className="text-sm font-semibold whitespace-nowrap">
          José Galvis
        </a>
        <div className="hidden gap-6 text-sm text-zinc-300 md:flex">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="transition hover:text-white">
              {n.label[lang]}
            </a>
          ))}
        </div>
        <button onClick={onToggle} className="rounded-full border border-white/20 px-3 py-1.5 font-mono text-xs transition hover:border-teal-200" aria-label="Cambiar idioma / Switch language">
          {lang === "es" ? "EN" : "ES"}
        </button>
      </nav>
    </header>
  );
}

function Section({ id, eyebrow, title, intro, children }: { id: string; eyebrow: string; title?: string; intro?: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-24 px-4 pt-24 sm:px-6">
      <p className="flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-teal-200 uppercase">
        <span className="h-px w-8 bg-teal-200/60" />
        {eyebrow}
      </p>
      {title && <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>}
      {intro && <p className="mt-4 max-w-3xl text-zinc-200">{intro}</p>}
      <div className="mt-10">{children}</div>
    </section>
  );
}

function StatGroup({ title, note, stats, lang, accent }: { title: string; note: string; stats: typeof myResults; lang: Lang; accent?: boolean }) {
  return (
    <div className={`rounded-3xl border p-6 ${accent ? "border-teal-300/30 bg-teal-300/[0.06]" : "border-white/10 bg-white/[0.03]"}`}>
      <p className="font-semibold">{title}</p>
      <p className="text-sm text-zinc-300">{note}</p>
      <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-5">
        {stats.map((m) => (
          <div key={m.label.en}>
            <div className={`text-3xl font-semibold tracking-tight sm:text-4xl ${accent ? "text-gradient" : "text-zinc-100"}`}>
              <CountUp to={m.value} prefix={m.prefix} suffix={m.suffix} locale={lang} />
            </div>
            <div className="mt-1 text-sm leading-snug text-zinc-300">{m.label[lang]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ShowcaseCard({ showcase: s, lang, flip }: { showcase: Showcase; lang: Lang; flip?: boolean }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
      <div className={`grid gap-0 lg:grid-cols-[1.15fr_1fr] ${flip ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <div className="flex items-end justify-center gap-3 bg-gradient-to-br from-teal-500/10 via-transparent to-violet-500/15 px-4 pt-8 pb-6 sm:gap-5">
          {s.screens.map((sc, i) => (
            <figure key={sc.src} className={`w-[30%] max-w-[190px] ${i === 1 ? "sm:-translate-y-4" : ""}`}>
              <div className="overflow-hidden rounded-[1.4rem] border border-white/15 bg-black shadow-2xl shadow-black/50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={sc.src} alt={`${s.name}: ${sc.caption[lang]}`} loading="lazy" className="aspect-[9/19.5] w-full object-cover object-top" />
              </div>
              <figcaption className="mt-2 text-center text-[11px] leading-tight text-zinc-300">{sc.caption[lang]}</figcaption>
            </figure>
          ))}
        </div>
        <div className="flex flex-col p-7">
          <span className="font-mono text-xs text-teal-200">{s.tag[lang]}</span>
          <h3 className="mt-1 text-3xl font-semibold tracking-tight">{s.name}</h3>
          <dl className="mt-5 space-y-4 text-sm leading-relaxed">
            {(["role", "challenge", "result"] as const).map((k) => (
              <div key={k}>
                <dt className="font-mono text-[11px] tracking-wider text-teal-200 uppercase">{ui[k][lang]}</dt>
                <dd className="mt-0.5 text-zinc-200">{s[k][lang]}</dd>
              </div>
            ))}
          </dl>
          <Chips items={s.stack} />
          <div className="mt-6 flex flex-wrap gap-2">
            {s.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition ${
                  l.primary ? "bg-white text-zinc-950 hover:bg-zinc-200" : "border border-white/20 hover:bg-white/10"
                }`}
              >
                {l.label[lang]} <ArrowUpRight className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function Chips({ items }: { items: string[] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-1.5">
      {items.map((s) => (
        <span key={s} className="rounded-full border border-white/15 bg-white/[0.04] px-2.5 py-0.5 font-mono text-[11px] text-zinc-200">
          {s}
        </span>
      ))}
    </div>
  );
}

function Socials() {
  const items = [
    { href: links.github, label: "GitHub", Icon: GithubIcon },
    { href: links.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
    { href: links.x, label: "X", Icon: XIcon },
  ];
  return (
    <div className="flex gap-2">
      {items.map(({ href, label, Icon }) => (
        <a key={label} href={href} target="_blank" aria-label={label} className="rounded-full border border-white/20 p-3 transition hover:border-white/50 hover:bg-white/5">
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}

function ProjectCard({ project: p, lang }: { project: Project; lang: Lang }) {
  return (
    <GlowCard className="flex h-full flex-col">
      {p.image && (
        <div className="aspect-[16/9] overflow-hidden border-b border-white/10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover object-top" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <span className="font-mono text-xs text-teal-200">{p.tag[lang]}</span>
        <h3 className="mt-1 text-lg font-semibold">{p.name}</h3>
        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-zinc-300">{p.description[lang]}</p>
        <Chips items={p.stack} />
        <div className="mt-4 flex gap-4 text-sm">
          {p.live && (
            <a href={p.live} target="_blank" className="inline-flex items-center gap-1 text-teal-200 hover:underline">
              {ui.live[lang]} <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
          {p.code ? (
            <a href={p.code} target="_blank" className="inline-flex items-center gap-1 hover:underline">
              {ui.code[lang]} <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1 text-zinc-400">
              <Lock className="h-3.5 w-3.5" /> {ui.privateCode[lang]}
            </span>
          )}
        </div>
      </div>
    </GlowCard>
  );
}
