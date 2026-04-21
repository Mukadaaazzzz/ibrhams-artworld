"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-8 right-8 z-50 flex flex-col items-center gap-1.5 transition-all duration-500"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <div
        className="w-10 h-10 flex items-center justify-center border border-black/15 bg-white/90 backdrop-blur-sm hover:bg-black hover:border-black transition-all duration-300 group"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-colors duration-300 group-hover:stroke-white"
          stroke="rgba(0,0,0,0.5)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 10V2M2 6l4-4 4 4" />
        </svg>
      </div>
      <span
        className="text-[8px] uppercase tracking-[0.2em] font-light"
        style={{ color: "rgba(0,0,0,0.35)" }}
      >
        Top
      </span>
    </button>
  );
}