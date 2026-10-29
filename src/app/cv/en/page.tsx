import type { Metadata } from "next";
import { ResumePage } from "@/components/resume";

export const metadata: Metadata = {
  title: "Resume · José Gregorio Galvis Rivas",
  description: "CTO at Coco Wallet & Coco Mercado · Fintech, Web3 and Flutter",
};

export default function Page() {
  return <ResumePage lang="en" />;
}
