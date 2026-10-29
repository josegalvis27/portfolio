import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "José Galvis — CTO · Fintech, Web3 & Flutter",
  description:
    "CTO de Coco Wallet y Coco Mercado, co-founder de Staff On. Fintech, Web3 y mobile (Flutter) en Latinoamérica.",
  openGraph: {
    title: "José Galvis — CTO · Fintech, Web3 & Flutter",
    description: "CTO at Coco Wallet & Coco Mercado · Co-founder at Staff On",
    images: ["https://avatars.githubusercontent.com/u/62526526?v=4"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
