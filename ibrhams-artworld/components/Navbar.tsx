"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/[0.06]">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-2">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/log.png"
            alt="Ibrhams Artworld"
            width={240}
            height={64}
            className="object-contain h-16 w-auto"
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/projects"
            className="text-[11px] tracking-[0.2em] uppercase font-light text-black/60 hover:text-black transition-colors duration-300"
          >
            Projects
          </Link>
          <Link
            href="/case-studies"
            className="text-[11px] tracking-[0.2em] uppercase font-light text-black/60 hover:text-black transition-colors duration-300"
          >
            Case Studies
          </Link>
          <Link
            href="/contact"
            className="text-[11px] tracking-[0.2em] uppercase font-light px-5 py-2 border border-black/20 hover:border-black hover:bg-black hover:text-white transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-[5px] p-1"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-px bg-black transition-all duration-300 origin-center ${
              open ? "rotate-45 translate-y-[6px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-black transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-black transition-all duration-300 origin-center ${
              open ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-48 border-t border-black/[0.06]" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-6 py-5 gap-5">
          <Link
            href="/projects"
            onClick={() => setOpen(false)}
            className="text-[11px] tracking-[0.2em] uppercase font-light text-black/60 hover:text-black transition-colors duration-300"
          >
            Projects
          </Link>
          <Link
            href="/case-studies"
            onClick={() => setOpen(false)}
            className="text-[11px] tracking-[0.2em] uppercase font-light text-black/60 hover:text-black transition-colors duration-300"
          >
            Case Studies
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="text-[11px] tracking-[0.2em] uppercase font-light text-black/60 hover:text-black transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </nav>
  );
}