"use client";

import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight,
  Award,
  BadgeCheck,
  Bot,
  Coins,
  Download,
  GitBranch,
  GraduationCap,
  Lock,
  Mail,
  ShieldCheck,
  TrendingUp,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Aurora, CountUp, GlowCard, Marquee, Reveal, Rotator } from "@/components/fx";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/icons";
import {
  aiFlow,
  aiWork,
  arcade,
  cases,
  certificates,
  education,
  experience,
  featured,
  highlights,
  links,
  metrics,
  nav,
  side,
  techMarquee,
  ui,
  workflows,
  type Certificate,
  type Lang,
  type Project,
} from "@/content";

const highlightIcons = { shield: ShieldCheck, zap: Zap, coins: Coins, bot: Bot, lock: Lock, trending: TrendingUp };

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

        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 pt-32 pb-20 sm:px-6 sm:pt-40">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-3 py-1 text-xs text-teal-200">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400" />
              </span>
              {ui.available[lang]}
            </span>
          </Reveal>

          <div className="mt-8 flex flex-col-reverse gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <Reveal delay={0.05}>
                <p className="text-lg text-zinc-400">{ui.hello[lang]}</p>
                <h1 className="mt-1 text-5xl font-semibold tracking-tight sm:text-7xl">José Galvis</h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-4 text-lg font-medium text-zinc-200 sm:text-xl">{ui.role[lang]}</p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-6 text-2xl font-medium tracking-tight sm:text-4xl">
                  {ui.iBuild[lang]} <Rotator key={lang} words={ui.rotating[lang]} />
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">{ui.tagline[lang]}</p>
              </Reveal>
              <Reveal delay={0.25}>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a href="#contacto" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-400 to-violet-400 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-teal-500/20 transition hover:scale-[1.03]">
                    <Mail className="h-4 w-4" /> {ui.contact[lang]}
                  </a>
                  <a href={links.cv[lang]} className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium transition hover:border-white/40 hover:bg-white/5">
                    <Download className="h-4 w-4" /> {ui.downloadCv[lang]}
                  </a>
                  <Socials />
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1} className="shrink-0">
              <div className="relative h-40 w-40 sm:h-56 sm:w-56">
                <div className="absolute -inset-1 animate-[spin_8s_linear_infinite] rounded-full bg-[conic-gradient(from_0deg,#5eead4,#a78bfa,#f0abfc,#5eead4)] blur-sm" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={links.avatar} alt="José Galvis" className="relative h-full w-full rounded-full border-4 border-[#07070a] object-cover" />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.3}>
            <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 lg:grid-cols-4">
              {metrics.map((m) => (
                <div key={m.label.en} className="bg-[#0b0b10]/90 p-6 backdrop-blur">
                  <div className="text-gradient text-3xl font-semibold tracking-tight sm:text-5xl">
                    <CountUp to={m.value} prefix={m.prefix} suffix={m.suffix} />
                  </div>
                  <div className="mt-2 text-sm text-zinc-400">{m.label[lang]}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <Marquee items={techMarquee} />

        {/* Highlights */}
        <Section id="logros" eyebrow={ui.highlights[lang]}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((h, i) => {
              const Icon = highlightIcons[h.icon];
              return (
                <Reveal key={h.title.en} delay={i * 0.05}>
                  <GlowCard className="h-full p-6">
                    <div className="inline-flex rounded-2xl border border-white/10 bg-gradient-to-br from-teal-400/20 to-violet-500/20 p-3">
                      <Icon className="h-5 w-5 text-teal-200" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold">{h.title[lang]}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">{h.text[lang]}</p>
                  </GlowCard>
                </Reveal>
              );
            })}
          </div>
        </Section>

        {/* Case studies */}
        <Section id="casos" eyebrow={ui.cases[lang]} title={ui.casesTitle[lang]}>
          <div className="grid gap-4 lg:grid-cols-3">
            {cases.map((c, i) => (
              <Reveal key={c.title.en} delay={i * 0.06}>
                <GlowCard className="flex h-full flex-col p-7">
                  <div className="text-gradient text-5xl font-semibold tracking-tight">{c.metric}</div>
                  <p className="mt-1 text-sm text-zinc-400">{c.metricLabel[lang]}</p>
                  <h3 className="mt-6 text-xl font-semibold leading-snug">{c.title[lang]}</h3>
                  <dl className="mt-5 space-y-4 text-sm leading-relaxed">
                    {(["problem", "solution", "result"] as const).map((k) => (
                      <div key={k}>
                        <dt className="font-mono text-[11px] tracking-wider text-teal-300 uppercase">{ui[k][lang]}</dt>
                        <dd className="mt-1 text-zinc-300">{c[k][lang]}</dd>
                      </div>
                    ))}
                  </dl>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section id="experiencia" eyebrow={ui.experience[lang]}>
          <ol className="relative space-y-12 border-l border-white/10 pl-8">
            {experience.map((job, i) => (
              <Reveal key={job.company} delay={i * 0.05}>
                <li className="relative">
                  <span className="absolute top-1.5 -left-[2.4rem] h-3 w-3 rounded-full bg-gradient-to-br from-teal-300 to-violet-400 ring-4 ring-[#07070a]" />
                  <span className="font-mono text-xs tracking-wider text-teal-300 uppercase">{job.period[lang]}</span>
                  <h3 className="mt-1 text-xl font-semibold">
                    {job.role[lang]} <span className="font-normal text-zinc-400">· {job.company}</span>
                  </h3>
                  <ul className="mt-3 max-w-3xl space-y-2 text-zinc-400">
                    {job.points.map((p) => (
                      <li key={p.en} className="leading-relaxed">{p[lang]}</li>
                    ))}
                  </ul>
                </li>
              </Reveal>
            ))}
          </ol>
        </Section>

        {/* AI Engineering */}
        <Section id="ia" eyebrow={ui.ai[lang]} title={ui.aiTitle[lang]} intro={ui.aiIntro[lang]}>
          <Reveal>
            <div className="mb-8 rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-500/10 via-transparent to-teal-500/10 p-6">
              <p className="font-mono text-xs tracking-wider text-violet-300 uppercase">{ui.flow[lang]}</p>
              <ol className="mt-4 grid gap-3 sm:grid-cols-5">
                {aiFlow.map((step, i) => (
                  <li key={step.en} className="relative rounded-2xl border border-white/10 bg-[#0b0b10]/80 p-4">
                    <span className="text-gradient font-mono text-2xl font-semibold">0{i + 1}</span>
                    <p className="mt-2 text-sm text-zinc-300">{step[lang]}</p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {aiWork.map((w, i) => (
              <Reveal key={w.name} delay={i * 0.05}>
                <GlowCard className="flex h-full flex-col p-6">
                  <span className="font-mono text-xs text-violet-300">{w.tag[lang]}</span>
                  <h3 className="mt-2 text-lg font-semibold">{w.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">{w.description[lang]}</p>
                  <Chips items={w.stack} />
                  {w.link && (
                    <a href={w.link} target="_blank" className="mt-4 inline-flex items-center gap-1 text-sm text-teal-300 hover:underline">
                      {ui.code[lang]} <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* CI/CD */}
        <Section id="cicd" eyebrow={ui.devops[lang]} title={ui.devopsTitle[lang]} intro={ui.devopsIntro[lang]}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {workflows.map((w, i) => (
              <Reveal key={w.name} delay={(i % 3) * 0.05}>
                <GlowCard className="flex h-full flex-col p-6">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/40 px-2.5 py-1 font-mono text-[11px] text-zinc-300">
                      <GitBranch className="h-3 w-3 text-teal-300" /> {w.trigger}
                    </span>
                    <span className={`font-mono text-[11px] ${w.mine ? "text-teal-300" : "text-zinc-500"}`}>
                      {w.mine ? ui.created[lang] : ui.contributed[lang]}
                    </span>
                  </div>
                  <h3 className="mt-4 font-mono text-lg font-semibold">{w.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">{w.description[lang]}</p>
                  <Chips items={w.stack} />
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Featured */}
        <Section id="proyectos" eyebrow={ui.featured[lang]}>
          <div className="grid gap-6 lg:grid-cols-2">
            {featured.map((p, i) => (
              <Reveal key={p.name} delay={(i % 2) * 0.08}>
                <ProjectCard project={p} lang={lang} big />
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Side */}
        <Section id="personales" eyebrow={ui.side[lang]}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {side.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 0.05}>
                <ProjectCard project={p} lang={lang} />
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Arcade */}
        <Section id="arcade" eyebrow={ui.arcade[lang]} intro={ui.arcadeIntro[lang]}>
          <a href={ui.arcadeCode} target="_blank" className="-mt-4 mb-6 inline-flex items-center gap-1 text-sm text-teal-300 hover:underline">
            {ui.code[lang]} <ArrowUpRight className="h-4 w-4" />
          </a>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
            {arcade.map((g, i) => (
              <Reveal key={g.slug} delay={i * 0.05}>
                <figure className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                  <div className="overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`/arcade-${g.slug}.png`} alt={g.name} className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-110" />
                  </div>
                  <figcaption className="p-3">
                    <div className="text-sm font-semibold">{g.name}</div>
                    <div className="mt-1 text-xs text-zinc-400">{g.description[lang]}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Certificates */}
        <Section id="certificados" eyebrow={ui.certificates[lang]} intro={ui.certificatesIntro[lang]}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 0.05}>
                <GlowCard className="h-full">
                  {c.image ? (
                    <button onClick={() => setCert(c)} className="block w-full overflow-hidden border-b border-white/10 bg-white" aria-label={c.title}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={c.image} alt={c.title} className="aspect-[4/3] w-full object-cover object-top transition duration-500 group-hover:scale-105" />
                    </button>
                  ) : (
                    <div className="flex aspect-[4/3] items-center justify-center border-b border-white/10 bg-gradient-to-br from-teal-500/10 to-violet-500/10">
                      <Award className="h-12 w-12 text-teal-200/70" />
                    </div>
                  )}
                  <div className="p-5">
                    <p className="font-mono text-xs text-teal-300">{c.issuer}</p>
                    <h3 className="mt-1 font-semibold leading-snug">{c.title}</h3>
                    <div className="mt-3 flex items-center justify-between text-sm text-zinc-400">
                      <span>
                        {c.date[lang]}
                        {c.hours && ` · ${c.hours}`}
                      </span>
                      {c.url && (
                        <a href={c.url} target="_blank" className="inline-flex items-center gap-1 text-teal-300 hover:underline">
                          <BadgeCheck className="h-4 w-4" /> {ui.verify[lang]}
                        </a>
                      )}
                    </div>
                  </div>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Education & awards */}
        <Section id="formacion" eyebrow={ui.education[lang]}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {education.map((e, i) => {
              const Icon = e.kind === "edu" ? GraduationCap : Award;
              return (
                <Reveal key={e.title.en} delay={(i % 3) * 0.05}>
                  <GlowCard className="flex h-full gap-4 p-5">
                    <Icon className={`h-6 w-6 shrink-0 ${e.kind === "edu" ? "text-teal-300" : "text-amber-300"}`} />
                    <div>
                      <h3 className="font-semibold leading-snug">{e.title[lang]}</h3>
                      <p className="mt-1 text-sm text-zinc-400">{e.detail[lang]}</p>
                    </div>
                  </GlowCard>
                </Reveal>
              );
            })}
          </div>
        </Section>

        {/* Contact */}
        <section id="contacto" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-teal-500/20 via-violet-600/15 to-fuchsia-500/20 p-10 text-center sm:p-16">
              <div className="bg-grid absolute inset-0 -z-10 opacity-60" />
              <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">{ui.ctaTitle[lang]}</h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-300">{ui.ctaText[lang]}</p>
              <a href={`mailto:${links.email}`} className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-zinc-950 transition hover:scale-[1.03]">
                <Mail className="h-5 w-5" /> {links.email}
              </a>
              <div className="mt-6 flex justify-center">
                <Socials />
              </div>
            </div>
          </Reveal>
          <p className="mt-10 text-center text-sm text-zinc-500">© 2026 José Gregorio Galvis Rivas · Caracas, Venezuela</p>
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
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={cert.image} alt={cert.title} className="w-full rounded-2xl shadow-2xl" />
              <div className="mt-4 flex items-center justify-between gap-4">
                <p className="font-medium">{cert.title}</p>
                <div className="flex shrink-0 gap-2">
                  {cert.url && (
                    <a href={cert.url} target="_blank" className="inline-flex items-center gap-1 rounded-full bg-teal-400 px-4 py-2 text-sm font-semibold text-zinc-950">
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
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-[#0b0b10]/70 py-2 pr-2 pl-5 backdrop-blur-xl">
        <a href="#" className="font-mono text-sm font-semibold">
          <span className="text-gradient">jg</span>
          <span className="text-zinc-500">.dev</span>
        </a>
        <div className="hidden gap-6 text-sm text-zinc-400 md:flex">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="transition hover:text-white">
              {n.label[lang]}
            </a>
          ))}
        </div>
        <button onClick={onToggle} className="rounded-full border border-white/15 px-3 py-1.5 font-mono text-xs transition hover:border-teal-300" aria-label="Cambiar idioma / Switch language">
          {lang === "es" ? "EN" : "ES"}
        </button>
      </nav>
    </header>
  );
}

function Section({ id, eyebrow, title, intro, children }: { id: string; eyebrow: string; title?: string; intro?: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-24 px-4 pt-28 sm:px-6">
      <Reveal>
        <p className="flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-teal-300 uppercase">
          <span className="h-px w-8 bg-teal-300/60" />
          {eyebrow}
        </p>
        {title && <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>}
        {intro && <p className="mt-4 max-w-3xl text-zinc-400">{intro}</p>}
      </Reveal>
      <div className="mt-10">{children}</div>
    </section>
  );
}

function Chips({ items }: { items: string[] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-1.5">
      {items.map((s) => (
        <span key={s} className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 font-mono text-[11px] text-zinc-300">
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
        <a key={label} href={href} target="_blank" aria-label={label} className="rounded-full border border-white/15 p-3 transition hover:border-white/40 hover:bg-white/5">
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}

function ProjectCard({ project: p, lang, big }: { project: Project; lang: Lang; big?: boolean }) {
  return (
    <GlowCard className="flex h-full flex-col">
      {p.image ? (
        <div className={`overflow-hidden border-b border-white/10 ${big ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={p.image} alt={p.name} className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105" />
        </div>
      ) : big ? (
        <div className="flex aspect-[16/10] items-center justify-center border-b border-white/10 bg-gradient-to-br from-violet-500/20 via-transparent to-teal-500/20">
          <span className="text-gradient text-5xl font-semibold tracking-tight">{p.name}</span>
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-6">
        <span className="font-mono text-xs text-teal-300">{p.tag[lang]}</span>
        <h3 className={`mt-2 font-semibold ${big ? "text-2xl" : "text-lg"}`}>{p.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">{p.description[lang]}</p>
        <Chips items={p.stack} />
        <div className="mt-5 flex gap-4 text-sm">
          {p.live && (
            <a href={p.live} target="_blank" className="inline-flex items-center gap-1 text-teal-300 hover:underline">
              {ui.live[lang]} <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
          {p.code ? (
            <a href={p.code} target="_blank" className="inline-flex items-center gap-1 hover:underline">
              {ui.code[lang]} <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1 text-zinc-500">
              <Lock className="h-3.5 w-3.5" /> {ui.privateCode[lang]}
            </span>
          )}
        </div>
      </div>
    </GlowCard>
  );
}
