"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);

    // Check if it's a hash link (starts with /#)
    if (href.startsWith("/#")) {
      const elementId = href.replace("/#", "");
      const element = document.getElementById(elementId);
      
      if (element) {
        const offset = 80; // Height of navbar + some padding
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
        
        // Update URL without causing scroll
        window.history.pushState(null, "", `/#${elementId}`);
      }
    } else {
      // Regular navigation to another page
      window.location.href = href;
    }
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/[0.06]">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-2">

        {/* Logo */}
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity duration-300">
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
            onClick={(e) => handleLinkClick(e, "/projects")}
            className="relative text-[11px] tracking-[0.2em] uppercase font-light text-black/60 hover:text-black transition-colors duration-300 group"
          >
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-black/40 transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/gallery"
            onClick={(e) => handleLinkClick(e, "/gallery")}
            className="relative text-[11px] tracking-[0.2em] uppercase font-light text-black/60 hover:text-black transition-colors duration-300 group"
          >
            Gallery
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-black/40 transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/#about"
            onClick={(e) => handleLinkClick(e, "/#about")}
            className="relative text-[11px] tracking-[0.2em] uppercase font-light text-black/60 hover:text-black transition-colors duration-300 group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-black/40 transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/#contact"
            onClick={(e) => handleLinkClick(e, "/#contact")}
            className="relative text-[11px] tracking-[0.2em] uppercase font-light px-5 py-2 border border-black/20 hover:border-black hover:bg-black hover:text-white transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-[5px] p-1 z-50 relative"
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
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-96 border-t border-black/[0.06] bg-white/95 backdrop-blur-md" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-6 py-6 gap-6">
          <Link
            href="/projects"
            onClick={(e) => handleLinkClick(e, "/projects")}
            className="text-[13px] tracking-[0.2em] uppercase font-light text-black/70 hover:text-black transition-colors duration-300 py-2 border-b border-black/5"
          >
            Projects
          </Link>
          <Link
            href="/gallery"
            onClick={(e) => handleLinkClick(e, "/gallery")}
            className="text-[13px] tracking-[0.2em] uppercase font-light text-black/70 hover:text-black transition-colors duration-300 py-2 border-b border-black/5"
          >
            Gallery
          </Link>
          <Link
            href="/#about"
            onClick={(e) => handleLinkClick(e, "/#about")}
            className="text-[13px] tracking-[0.2em] uppercase font-light text-black/70 hover:text-black transition-colors duration-300 py-2 border-b border-black/5"
          >
            About
          </Link>
          <Link
            href="/#contact"
            onClick={(e) => handleLinkClick(e, "/#contact")}
            className="inline-block text-center text-[13px] tracking-[0.2em] uppercase font-light px-6 py-3 mt-2 border border-black/30 hover:border-black hover:bg-black hover:text-white transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </nav>
  );
}