"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";
import { allItems, type GalleryItem } from "../lib/gallery";
import Link from "next/link";

type Category = "all" | "interior" | "exterior" | "mural" | "portrait";

const tabs: { key: Category; label: string; count: number }[] = [
  { key: "all",      label: "All",      count: allItems.length },
  { key: "interior", label: "Interior", count: 31 },
  { key: "exterior", label: "Exterior", count: 22 },
  { key: "mural",    label: "Murals",   count: 29 },
  { key: "portrait", label: "Portrait", count: 3  },
];

function Lightbox({ item, onClose, onPrev, onNext }: {
  item: GalleryItem;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPrev, onNext]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.94)" }}
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-6 right-8 text-white/40 hover:text-white transition-colors"
        style={{ fontFamily: "'Jost', sans-serif", fontSize: "11px", letterSpacing: ".2em" }}
      >
        CLOSE ✕
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 md:left-10 text-white/40 hover:text-white transition-colors text-2xl font-light"
      >
        ←
      </button>

      {/* Image with lazy loading in lightbox */}
      <div
        className="relative"
        style={{ width: "min(90vw, 900px)", height: "min(85vh, 680px)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={item.src}
          alt={item.label}
          fill
          className="object-contain"
          sizes="90vw"
          priority
          quality={90}
        />
      </div>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 md:right-10 text-white/40 hover:text-white transition-colors text-2xl font-light"
      >
        →
      </button>

      {/* Label */}
      <p
        className="absolute bottom-6 left-1/2 -translate-x-1/2 uppercase tracking-widest text-white/30"
        style={{ fontFamily: "'Jost', sans-serif", fontSize: "10px" }}
      >
        {item.label}
      </p>
    </div>
  );
}

// Lazy loading image component with Intersection Observer
function LazyImage({ item, onClick }: { item: GalleryItem; onClick: () => void }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // Start loading 200px before entering viewport
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <button
      ref={imgRef}
      onClick={onClick}
      className="group relative overflow-hidden bg-black/[0.02] cursor-pointer"
      style={{ aspectRatio: "1/1" }}
    >
      {isInView && (
        <>
          {/* Low quality placeholder */}
          {!isLoaded && (
            <div
              className="absolute inset-0 animate-pulse"
              style={{ background: "rgba(0,0,0,0.05)" }}
            />
          )}
          <Image
            src={item.src}
            alt={item.label}
            fill
            className={`object-cover transition-all duration-700 group-hover:scale-[1.06] ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            quality={85}
          />
        </>
      )}
      {/* Placeholder while loading */}
      {!isLoaded && isInView && (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.03)" }}
        >
          <div
            className="w-6 h-6 border-2 border-black/10 border-t-black/30 rounded-full animate-spin"
          />
        </div>
      )}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)" }}
      >
        <p
          className="text-white uppercase tracking-widest font-light"
          style={{ fontSize: "9px" }}
        >
          {item.label}
        </p>
      </div>
    </button>
  );
}

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<Category>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeTab === "all"
    ? allItems
    : allItems.filter((i) => i.category === activeTab);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const goPrev = useCallback(() => setLightboxIndex((i) => i === null ? null : (i - 1 + filtered.length) % filtered.length), [filtered.length]);
  const goNext = useCallback(() => setLightboxIndex((i) => i === null ? null : (i + 1) % filtered.length), [filtered.length]);

  return (
    <main
      className="min-h-screen bg-white"
      style={{ fontFamily: "'Jost', sans-serif" }}
    >
      <div className="max-w-[1100px] mx-auto px-6 md:px-10 pt-36 pb-24">

        {/* Header */}
        <p className="text-[10px] tracking-[0.35em] uppercase text-black/28 font-light mb-4">
          Portfolio
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-16 group"
          style={{ color: "rgba(0,0,0,0.35)" }}
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
          <span className="text-[10px] uppercase tracking-[0.22em] font-light">Back to home</span>
        </Link>
        <h1
          className="font-light leading-none text-black mb-12"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(42px, 6vw, 72px)",
          }}
        >
          The full body<br />
          <em className="italic text-black/28">of work.</em>
        </h1>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-black/[0.07] pb-6">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => {
                setActiveTab(t.key);
                // Scroll to top when changing tabs
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-2 px-4 py-2 text-[10px] tracking-[0.18em] uppercase font-light transition-all duration-200"
              style={{
                background: activeTab === t.key ? "#111" : "transparent",
                color: activeTab === t.key ? "#fff" : "rgba(0,0,0,0.45)",
                border: "1px solid",
                borderColor: activeTab === t.key ? "#111" : "rgba(0,0,0,0.1)",
              }}
            >
              {t.label}
              <span
                className="font-light"
                style={{ color: activeTab === t.key ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.25)", fontSize: "9px" }}
              >
                {t.count}
              </span>
            </button>
          ))}
        </div>

        {/* Grid with lazy loading */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-black/[0.06]">
          {filtered.map((item, i) => (
            <LazyImage
              key={item.src}
              item={item}
              onClick={() => openLightbox(i)}
            />
          ))}
        </div>

        {/* Count */}
        <p className="mt-8 text-[10px] tracking-[0.2em] uppercase text-black/22 font-light text-center">
          Showing {filtered.length} pieces
        </p>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          item={filtered[lightboxIndex]}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </main>
  );
}