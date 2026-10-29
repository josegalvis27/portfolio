import type { Metadata } from "next";
import { ResumePage } from "@/components/resume";

export const metadata: Metadata = {
  title: "CV · José Gregorio Galvis Rivas",
  description: "CTO de Coco Wallet y Coco Mercado · Fintech, Web3 y Flutter",
};

export default function Page() {
  return <ResumePage lang="es" />;
}
