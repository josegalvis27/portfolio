"use client";

import { AnimatePresence, animate, motion, useInView, useMotionValue, useTransform } from "motion/react";
import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function CountUp({ to, prefix = "", suffix = "" }: { to: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const value = useMotionValue(0);
  const text = useTransform(value, (v) => `${prefix}${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (inView) animate(value, to, { duration: 1.8, ease: "easeOut" });
  }, [inView, to, value]);

  return <motion.span ref={ref}>{text}</motion.span>;
}

export function Rotator({ words }: { words: string[] }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % words.length), 2400);
    return () => clearInterval(id);
  }, [words.length]);

  return (
    <span className="relative inline-grid">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[i % words.length]}
          className="text-gradient"
          initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -16, filter: "blur(6px)" }}
          transition={{ duration: 0.4 }}
        >
          {words[i % words.length]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function Marquee({ items }: { items: string[] }) {
  return (
    <div className="marquee-mask relative overflow-hidden py-2">
      <div className="animate-marquee flex w-max gap-3">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 font-mono text-sm whitespace-nowrap text-zinc-300">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Aurora() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="bg-grid absolute inset-0" />
      <div className="animate-blob absolute -top-40 left-1/4 h-[32rem] w-[32rem] rounded-full bg-teal-500/25 blur-[120px]" />
      <div className="animate-blob absolute top-20 -right-20 h-[28rem] w-[28rem] rounded-full bg-violet-600/25 blur-[120px] [animation-delay:-6s]" />
      <div className="animate-blob absolute top-[28rem] -left-32 h-[24rem] w-[24rem] rounded-full bg-sky-500/15 blur-[120px] [animation-delay:-12s]" />
    </div>
  );
}

/** Card with a light that follows the cursor. */
export function GlowCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  }

  return (
    <div ref={ref} onMouseMove={onMove} className={`glow-card group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] ${className}`}>
      {children}
    </div>
  );
}
