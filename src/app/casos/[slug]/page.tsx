import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies } from "@/case-studies";
import { CasePage } from "@/components/case-page";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/casos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const c = caseStudies.find((s) => s.slug === slug);
  return c ? { title: `${c.title.es} · José Galvis`, description: c.metricLabel.es } : {};
}

export default async function Page({ params }: PageProps<"/casos/[slug]">) {
  const { slug } = await params;
  const c = caseStudies.find((s) => s.slug === slug);
  if (!c) notFound();
  return <CasePage study={c} lang="es" />;
}
