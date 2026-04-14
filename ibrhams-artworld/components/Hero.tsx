"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

const slides = [
  { src: "/hppp.jpg", alt: "Hero 1" },
  { src: "/2.jpg",   alt: "Hero 2" },
  { src: "/090.jpg", alt: "Hero 3" },
];

const DURATION = 6000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev]       = useState<number | null>(null);
  const [progress, setProgress] = useState(0);

  const goTo = useCallback((index: number) => {
    setPrev(current);
    setCurrent(index);
    setProgress(0);
  }, [current]);

  // Auto-advance
  useEffect(() => {
    const id = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, DURATION);
    return () => clearInterval(id);
  }, [current, goTo]);

  // Progress bar
  useEffect(() => {
    setProgress(0);
    const raf = requestAnimationFrame(() => {
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / DURATION, 1);
        setProgress(p * 100);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    return () => cancelAnimationFrame(raf);
  }, [current]);

  // Clear prev after fade
  useEffect(() => {
    if (prev === null) return;
    const id = setTimeout(() => setPrev(null), 1400);
    return () => clearTimeout(id);
  }, [prev]);

  const counterLabel = `${String(current + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;

  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">

      {/* Slides */}
      {slides.map((slide, i) => {
        const isActive = i === current;
        const isExit   = i === prev;
        if (!isActive && !isExit) return null;
        return (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
            style={{ zIndex: isActive ? 1 : 0 }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className={`object-cover transition-transform duration-[8000ms] ease-in-out ${
                isActive ? "scale-100" : "scale-[1.08]"
              }`}
              priority={i === 0}
            />
          </div>
        );
      })}

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/65 z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.5)_100%)] z-10" />

      {/* Slide counter */}
      <div
        className="absolute top-10 right-10 z-20 font-light text-[11px] tracking-widest text-white/40"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        {counterLabel}
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-2xl">
        <p className="uppercase tracking-[0.35em] text-[10px] text-white/50 mb-7 font-light">
          Lagos &nbsp;·&nbsp; Nigeria
        </p>

        <h1
          className="text-[clamp(52px,8vw,90px)] font-light leading-none tracking-tight"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Ibrhams <em className="italic">Artworld</em>
        </h1>

        <div className="w-10 h-[1px] bg-white/40 mx-auto my-7" />

        <p className="text-sm md:text-base text-white/60 leading-relaxed font-light tracking-wide">
          Ibrahim Abubakar — transforming concepts into<br className="hidden md:block" />
          powerful visual experiences through art and design.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/projects"
            className="px-9 py-[13px] bg-white text-black rounded-full text-[11px] font-light tracking-[0.12em] uppercase hover:scale-[1.04] hover:bg-gray-100 transition-all duration-300"
          >
            View Projects
          </a>
          <a
            href="/case-studies"
            className="px-9 py-[13px] border border-white/40 rounded-full text-[11px] font-light tracking-[0.12em] uppercase hover:bg-white hover:text-black hover:scale-[1.04] transition-all duration-300"
          >
            Case Studies
          </a>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-[10px] z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-400 ${
              i === current
                ? "w-5 h-[5px] bg-white"
                : "w-[5px] h-[5px] bg-white/35 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 right-10 flex flex-col items-center gap-2 z-20 text-white/35">
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
        <span
          className="text-[9px] tracking-[0.25em] uppercase font-light"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll
        </span>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-white/60 z-20 transition-none"
        style={{ width: `${progress}%`, transition: "none" }}
      ></div>
    </section>
  );
}