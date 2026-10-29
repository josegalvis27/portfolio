import { Lato } from "next/font/google";
import Link from "next/link";
import { Github, Linkedin, Mail, MapPin } from "./resume-icons";
import { PrintButton } from "./print-button";
import { resume } from "@/cv";
import { links, type Lang } from "@/content";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700", "900"], style: ["normal", "italic"] });

export function ResumePage({ lang }: { lang: Lang }) {
  const r = resume[lang];
  const L = r.labels;

  return (
    <div className={`${lato.className} cv-root min-h-screen bg-zinc-200 py-8 text-[#1f1f1f] print:bg-white print:py-0`}>
      <div className="mx-auto mb-4 flex max-w-[210mm] flex-wrap items-center justify-between gap-3 px-4 text-sm print:hidden">
        <Link href="/" className="text-zinc-600 hover:text-black">← {L.back}</Link>
        <div className="flex gap-3">
          <Link href={lang === "es" ? "/cv/en" : "/cv"} className="rounded-full border border-zinc-400 px-4 py-1.5 hover:bg-white">
            {L.other}
          </Link>
          <PrintButton label={L.download} />
        </div>
      </div>

      <article className="mx-auto max-w-[210mm] bg-white px-[14mm] py-[12mm] text-[10.5px] leading-[1.45] shadow-xl print:max-w-none print:p-0 print:shadow-none sm:text-[11px]">
        <header className="text-center">
          <h1 className="text-[26px] font-black tracking-wide uppercase sm:text-[30px]">José Gregorio Galvis Rivas</h1>
          <p className="mt-0.5 text-[13px] italic sm:text-[14px]">{r.title}</p>
          <p className="mt-2 flex flex-wrap justify-center gap-x-5 gap-y-1">
            <a href={`mailto:${links.email}`} className="inline-flex items-center gap-1"><Mail /> {links.email}</a>
            <span className="inline-flex items-center gap-1"><MapPin /> {r.location}</span>
            <a href={links.linkedin} className="inline-flex items-center gap-1"><Linkedin /> linkedin.com/in/josegalvisrivas</a>
            <a href={links.github} className="inline-flex items-center gap-1"><Github /> github.com/josegalvis27</a>
          </p>
        </header>

        <Heading>{L.summary}</Heading>
        <p className="text-justify">{r.summary}</p>

        <Heading>{L.experience}</Heading>
        <div className="space-y-4">
          {r.jobs.map((job) => (
            <section key={job.role + job.company}>
              <div className="flex justify-between gap-4 font-bold">
                <span>{job.role}</span>
                <span className="shrink-0">{job.period}</span>
              </div>
              <div className="flex justify-between gap-4 font-bold">
                <span>{job.company}</span>
                <span className="shrink-0 font-normal">{job.place}</span>
              </div>
              {job.context && <p className="mt-1 text-zinc-500">{job.context}</p>}
              {job.groups.map((g, i) => (
                <div key={i} className="mt-1.5 break-inside-avoid">
                  {g.title && <p className="font-bold">{g.title}</p>}
                  <ul className="mt-0.5 list-disc space-y-0.5 pl-5">
                    {g.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
              {job.stack && (
                <p className="mt-1.5">
                  <span className="font-bold">Stack: </span>
                  {job.stack}
                </p>
              )}
            </section>
          ))}
        </div>

        <Heading>{L.education}</Heading>
        <div className="space-y-2">
          {r.education.map((e) => (
            <div key={e.degree}>
              <div className="flex justify-between gap-4 font-bold">
                <span>{e.degree}</span>
                <span className="shrink-0">{e.period}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>{e.school}</span>
                <span className="shrink-0">{e.place}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-x-8 sm:grid-cols-2 print:grid-cols-2">
          <div>
            <Heading>{L.skills}</Heading>
            {r.skills.map((s) => (
              <div key={s.title} className="mb-2">
                <p className="font-bold">{s.title}</p>
                <ul className="list-disc pl-5">
                  {s.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div>
            <Heading>{L.certifications}</Heading>
            <ul className="space-y-1">
              {r.certifications.map((c) => (
                <li key={c.name}>
                  {c.url ? (
                    <a href={c.url} className="font-bold underline decoration-zinc-300 underline-offset-2">
                      {c.name} ↗
                    </a>
                  ) : (
                    <span className="font-bold">{c.name}</span>
                  )}{" "}
                  <span className="text-zinc-600">· {c.issuer}</span>
                </li>
              ))}
            </ul>
            <Heading>{L.awards}</Heading>
            <ul className="space-y-1">
              {r.awards.map((a) => (
                <li key={a.name}>
                  <span className="font-bold">{a.name}</span>
                  <br />
                  <span className="text-zinc-600">{a.issuer}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </div>
  );
}

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-4 mb-2 border-y border-zinc-800 py-0.5 text-center text-[14px] font-bold tracking-wide uppercase sm:text-[15px]">
      {children}
    </h2>
  );
}
