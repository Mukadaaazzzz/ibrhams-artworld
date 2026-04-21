"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { featuredItems, type GalleryItem } from "@/app/lib/gallery";
function LightboxModal({
  item,
  onClose,
}: {
  item: GalleryItem;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.92)" }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-8 text-white/50 hover:text-white transition-colors duration-200"
        style={{ fontFamily: "'Jost', sans-serif", fontSize: "12px", letterSpacing: ".2em" }}
      >
        CLOSE
      </button>
      <div
        className="relative"
        style={{ maxWidth: "90vw", maxHeight: "90vh", width: "800px", height: "600px" }}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={item.src}
          alt={item.label}
          fill
          className="object-contain"
          sizes="90vw"
        />
      </div>
      <p
        className="absolute bottom-6 left-1/2 -translate-x-1/2 uppercase tracking-widest text-white/30"
        style={{ fontFamily: "'Jost', sans-serif", fontSize: "10px" }}
      >
        {item.label}
      </p>
    </div>
  );
}

export default function GalleryPreview() {
  const [active, setActive] = useState<GalleryItem | null>(null);

  return (
    <section
      className="relative w-full bg-white overflow-hidden"
      style={{ fontFamily: "'Jost', sans-serif" }}
    >
      {/* BG SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle cx="0" cy="0" r="300" fill="none" stroke="#ece8e2" strokeWidth="0.7" />
        <circle cx="0" cy="0" r="440" fill="none" stroke="#f2eeea" strokeWidth="0.4" />
        <circle cx="100%" cy="100%" r="280" fill="none" stroke="#ece8e2" strokeWidth="0.7" />
        <circle cx="100%" cy="100%" r="420" fill="none" stroke="#f2eeea" strokeWidth="0.4" />
        <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#f4f1ec" strokeWidth="0.5" />
        <line x1="3%" y1="0" x2="3%" y2="100%" stroke="#f4f1ec" strokeWidth="0.5" />
        <circle cx="50%" cy="12%" r="2" fill="#e4e0db" />
        <circle cx="52%" cy="16%" r="1.5" fill="#e8e4de" />
        <circle cx="48%" cy="15%" r="1" fill="#e4e0db" />
      </svg>

      <div className="relative max-w-[960px] mx-auto px-6 md:px-10 py-20 md:py-24">

        {/* Header */}
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="text-[10px] tracking-[0.35em] uppercase text-black/28 font-light mb-3">
              The work
            </p>
            <h2
              className="font-light leading-none text-black"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(36px, 5vw, 58px)",
              }}
            >
              Selected pieces
              <br />
              <em className="italic text-black/28">from the portfolio.</em>
            </h2>
          </div>
          <Link
            href="/gallery"
            className="text-[10px] tracking-[0.22em] uppercase font-light text-black/40 hover:text-black transition-colors duration-300 shrink-0"
          >
            View all work →
          </Link>
        </div>

        {/* Grid — 4 cols desktop, 2 mobile */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-black/[0.06]">
          {featuredItems.map((item, i) => {
            // Make first and last items taller for visual interest
            const isTall = i === 0 || i === 5;
            return (
              <button
                key={item.src}
                onClick={() => setActive(item)}
                className={[
                  "group relative overflow-hidden bg-black/[0.02] cursor-pointer",
                  isTall ? "md:row-span-2" : "",
                ].join(" ")}
                style={{ aspectRatio: isTall ? "auto" : "1/1", minHeight: isTall ? "360px" : "200px" }}
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55), transparent)" }}
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
          })}
        </div>

        {/* Footer */}
        <div className="mt-10 flex items-center justify-between flex-wrap gap-4">
          <p className="text-[11px] tracking-[0.2em] uppercase text-black/25 font-light">
            85 pieces across 4 disciplines
          </p>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase font-light text-black/40 hover:text-black hover:gap-5 transition-all duration-300"
          >
            Explore the full gallery →
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {active && (
        <LightboxModal item={active} onClose={() => setActive(null)} />
      )}
    </section>
  );
}