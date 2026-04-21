"use client";

import Image from "next/image";
import { useEffect } from "react";

const featuredClients = [
  { name: "Dangote Refineries",       type: "Industrial · Lagos, Nigeria", year: "2023" },
  { name: "Chelsea Dry Gin — IDL",    type: "Brand · Nigeria",              year: "2023" },
  { name: "Pink Flamingo Beach Club", type: "Hospitality · Accra, Ghana",   year: "2022" },
  { name: "Charvet Construction Co.", type: "Construction · Lagos",          year: "2022" },
  { name: "Silverfox Night Club",     type: "Nightlife · Lagos",            year: "2021" },
];

const tickerItems = [
  "Stemdot Academy",
  "Faithland Int'l Schools",
  "50+ Households · Lagos",
  "Residential Estates",
  "Corporate Offices",
  "Hospitality Venues",
];

const stats = [
  { num: "10+", label: "Years" },
  { num: "3",   label: "Countries" },
  { num: "50+", label: "Projects" },
];

const gold = "#C9A84C";

export default function About() {
  const doubled = [...tickerItems, ...tickerItems];

  useEffect(() => {
    const id = "about-ticker-style";
    if (document.getElementById(id)) return;
    const tag = document.createElement("style");
    tag.id = id;
    tag.textContent = `
      @keyframes about-ticker {
        0%   { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `;
    document.head.appendChild(tag);
    return () => { document.getElementById(id)?.remove(); };
  }, []);

  return (
    <section
      id="about"
      className="relative w-full overflow-hidden scroll-mt-20"
      style={{ background: "#FAFAF8", fontFamily: "'Jost', sans-serif" }}
    >
      {/* BG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="about-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(0,0,0,0.03)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#about-grid)" />
        <circle cx="100%" cy="0" r="300" fill="none" stroke="#ece8e2" strokeWidth="0.8" />
        <circle cx="100%" cy="0" r="440" fill="none" stroke="#f0ece7" strokeWidth="0.5" />
        <circle cx="100%" cy="0" r="580" fill="none" stroke="#f4f1ec" strokeWidth="0.35" />
        <circle cx="0" cy="100%" r="260" fill="none" stroke="#ece8e2" strokeWidth="0.7" />
        <circle cx="0" cy="100%" r="380" fill="none" stroke="#f2eeea" strokeWidth="0.4" />
        <line x1="0" y1="38%" x2="100%" y2="58%" stroke="#f0ece8" strokeWidth="0.7" />
        <circle cx="88%" cy="62%" r="2.5" fill="#e0dbd4" />
        <circle cx="90%" cy="66%" r="1.5" fill="#e8e4de" />
        <circle cx="86%" cy="65%" r="1.8" fill="#e4e0da" />
        <line x1="6%" y1="74%" x2="6%" y2="80%" stroke="#dedad4" strokeWidth="0.8" />
        <line x1="3.5%" y1="77%" x2="8.5%" y2="77%" stroke="#dedad4" strokeWidth="0.8" />
        <path d="M 40 480 Q 220 472 380 480" fill="none" stroke="#e8e3dc" strokeWidth="1" strokeLinecap="round" />
        <line x1="3%" y1="12%" x2="3%" y2="88%" stroke="#f2efea" strokeWidth="0.5" />
      </svg>

      <div className="relative max-w-[960px] mx-auto px-6 md:px-10 py-20 md:py-24">

        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-12">
          <p className="text-[10px] tracking-[0.35em] uppercase font-light shrink-0"
            style={{ color: "rgba(0,0,0,0.28)" }}>
            The person behind the work
          </p>
          <div className="flex-1 h-px" style={{ background: "rgba(0,0,0,0.07)" }} />
        </div>

        {/* Hero — row on md+, column on mobile */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-20">

          {/* Photo col — FIXED: constrained on mobile too */}
          <div className="shrink-0" style={{ width: "140px" }}>
            <div
              className="relative overflow-hidden"
              style={{ width: "140px", height: "175px" }}
            >
              <Image
                src="/about.jpeg"
                alt="Ibrahim Abubakar Omoniyi"
                fill
                className="object-cover object-top"
                sizes="140px"
              />
            </div>

            {/* Credential */}
            <div
              className="px-3 py-2 border-l-2"
              style={{ borderColor: gold, background: "rgba(201,168,76,0.05)" }}
            >
              <p
                className="uppercase font-light mb-1"
                style={{ fontSize: "8px", letterSpacing: ".22em", color: "rgba(0,0,0,0.32)" }}
              >
                Schooled at
              </p>
              <p
                className="font-light leading-snug text-black"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "13px" }}
              >
                Igbajo Polytechnic,<br />Osun State
              </p>
            </div>

            {/* Stats */}
            <div
              className="flex mt-4 pt-4 border-t"
              style={{ borderColor: "rgba(0,0,0,0.07)" }}
            >
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className="flex-1"
                  style={{
                    paddingRight: i < 2 ? "10px" : 0,
                    marginRight: i < 2 ? "10px" : 0,
                    borderRight: i < 2 ? "1px solid rgba(0,0,0,0.06)" : "none",
                  }}
                >
                  <p
                    className="font-light text-black leading-none"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px" }}
                  >
                    {s.num}
                  </p>
                  <p
                    className="uppercase font-light mt-1"
                    style={{ fontSize: "8px", letterSpacing: ".16em", color: "rgba(0,0,0,0.3)" }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bio col */}
          <div className="flex-1 min-w-0">
            <h2
              className="font-light leading-none text-black mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(38px, 5.5vw, 66px)",
              }}
            >
              Ibrahim<br />Abubakar<br />
              <em className="italic" style={{ color: "rgba(0,0,0,0.25)" }}>Omoniyi.</em>
            </h2>

            <p
              className="font-light leading-[1.9] mb-3"
              style={{ fontSize: "13px", color: "rgba(0,0,0,0.52)", maxWidth: "480px" }}
            >
              A professional designer and surface specialist based in{" "}
              <span className="text-black font-normal">Lagos, Nigeria</span> — with
              over a decade of hands-on work across residential compounds, corporate
              spaces, hospitality venues, and industrial sites across Nigeria and
              West Africa.
            </p>
            <p
              className="font-light leading-[1.9] mb-6"
              style={{ fontSize: "13px", color: "rgba(0,0,0,0.52)", maxWidth: "480px" }}
            >
              His focus:{" "}
              <span className="text-black font-normal">surface preparation</span>,{" "}
              <span className="text-black font-normal">decorative design</span>, and{" "}
              <span className="text-black font-normal">high-standard paint production</span>
              {" "}— three disciplines treated as one continuous act of care.
            </p>

            <div className="pl-4 border-l-2" style={{ borderColor: gold }}>
              <p
                className="font-light italic leading-relaxed"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "16px",
                  color: "rgba(0,0,0,0.38)",
                }}
              >
                &ldquo;The surface is never just a surface. It is the first thing
                people feel about a space — before anything else.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Past clients label */}
        <div className="flex items-center gap-4 mb-0">
          <p
            className="uppercase font-light shrink-0"
            style={{ fontSize: "10px", letterSpacing: ".32em", color: "rgba(0,0,0,0.28)" }}
          >
            Past clients
          </p>
          <div className="flex-1 h-px" style={{ background: "rgba(0,0,0,0.07)" }} />
        </div>

        {/* Client grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-px"
          style={{ background: "rgba(0,0,0,0.07)", border: "1px solid rgba(0,0,0,0.07)" }}
        >
          {featuredClients.map((c) => (
            <div
              key={c.name}
              className="group px-6 py-6 relative overflow-hidden transition-colors duration-300"
              style={{ background: "#FAFAF8" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#FAFAF8")}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                style={{ background: gold }}
              />
              <p
                className="uppercase mb-2"
                style={{ fontSize: "9px", letterSpacing: ".18em", color: "rgba(0,0,0,0.22)" }}
              >
                {c.year}
              </p>
              <p
                className="font-light text-black mb-1.5"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(17px,2.2vw,23px)" }}
              >
                {c.name}
              </p>
              <p
                className="uppercase font-light"
                style={{ fontSize: "10px", letterSpacing: ".12em", color: "rgba(0,0,0,0.32)" }}
              >
                {c.type}
              </p>
              <div
                className="mt-4 h-px group-hover:w-9 transition-all duration-300"
                style={{ background: gold, width: "20px" }}
              />
            </div>
          ))}

          {/* Last cell */}
          <div
            className="px-6 py-6 flex flex-col justify-center"
            style={{ background: "#FAFAF8" }}
          >
            <p
              className="font-light mb-3"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "16px", color: "rgba(0,0,0,0.35)" }}
            >
              &amp; many more across Lagos
            </p>
            <div className="h-px w-8" style={{ background: gold }} />
          </div>
        </div>

        {/* Ticker */}
        <div
          className="relative overflow-hidden"
          style={{
            border: "1px solid rgba(0,0,0,0.07)",
            borderTop: "none",
            padding: "18px 0",
          }}
        >
          <div
            className="absolute left-0 top-0 bottom-0 w-12 pointer-events-none z-10"
            style={{ background: "linear-gradient(to right, #FAFAF8, transparent)" }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-12 pointer-events-none z-10"
            style={{ background: "linear-gradient(to left, #FAFAF8, transparent)" }}
          />
          <div
            className="flex"
            style={{ width: "max-content", animation: "about-ticker 22s linear infinite" }}
          >
            {doubled.map((item, i) => (
              <div key={i} className="flex items-center gap-6 px-8">
                <span
                  className="font-light whitespace-nowrap"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "15px", color: "rgba(0,0,0,0.5)" }}
                >
                  {item}
                </span>
                <span
                  className="rounded-full shrink-0"
                  style={{ width: "3px", height: "3px", background: gold, display: "inline-block" }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="mt-14 pt-8 flex items-center justify-between flex-wrap gap-4"
          style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}
        >
          <p className="font-light" style={{ fontSize: "13px", color: "rgba(0,0,0,0.4)" }}>
            Ready to start a project?
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-3 uppercase font-light px-6 py-3 transition-all duration-300 hover:gap-5"
            style={{
              fontSize: "11px",
              letterSpacing: ".18em",
              color: gold,
              border: "1px solid rgba(201,168,76,0.35)",
              background: "rgba(201,168,76,0.03)",
            }}
          >
            Request a free estimate →
          </a>
        </div>

      </div>
    </section>
  );
}