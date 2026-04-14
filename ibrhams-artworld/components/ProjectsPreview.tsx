"use client";

import Link from "next/link";

const services = [
  {
    num: "01",
    slug: "wall-murals",
    title: "Wall Murals",
    desc: "Large-scale hand-painted murals for homes, businesses, estates, and public spaces. Interior and exterior. I work with the architecture, not against it.",
    tags: ["Interior", "Exterior", "Commercial", "Residential"],
  },
  {
    num: "02",
    slug: "portrait-painting",
    title: "Portrait Painting",
    desc: "Custom portraits — individuals, families, couples, pets. Oil, acrylic, or charcoal. Commissions taken from photo reference or live sitting.",
    tags: ["Oil", "Acrylic", "Charcoal", "Commission"],
  },
  {
    num: "03",
    slug: "interior-art-direction",
    title: "Interior Art Direction",
    desc: "Helping homes and spaces find their visual identity — wall colour, art placement, custom canvases, and surface treatments that tie a room together.",
    tags: ["Residential", "Colour Consult", "Wall Art", "Styling"],
  },
  {
    num: "04",
    slug: "exterior-facade-work",
    title: "Exterior & Facade Work",
    desc: "Painting, finishing, and decorative treatments for building exteriors, gates, compound walls, and outdoor features. Built to handle Lagos weather.",
    tags: ["Facade", "Gates", "Compound Walls", "Weatherproof"],
  },
  {
    num: "05",
    slug: "digital-illustration-design",
    title: "Digital Illustration & Design",
    desc: "Custom digital artwork — prints, brand visuals, event graphics, social content. Ready for screen or production print.",
    tags: ["Print-Ready", "Branding", "Social", "Digital"],
  },
  {
    num: "06",
    slug: "decorative-finishing-plasterwork",
    title: "Decorative Finishing & Plasterwork",
    desc: "Textured wall finishes, Venetian plaster, stucco, and ornamental plasterwork for spaces that want more than just paint.",
    tags: ["Venetian Plaster", "Texture", "Ornamental", "Luxury Finish"],
  },
];

export default function ProjectsPreview() {
  return (
    <section
      className="relative w-full overflow-hidden bg-white"
      style={{ fontFamily: "'Jost', sans-serif" }}
    >
      {/* SVG background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <path d="M -10 80 Q 60 40 140 90 Q 200 130 160 160" fill="none" stroke="#e4e0db" strokeWidth="18" strokeLinecap="round" opacity="0.6"/>
        <path d="M -10 80 Q 60 40 140 90 Q 200 130 160 160" fill="none" stroke="#ece9e4" strokeWidth="8" strokeLinecap="round" opacity="0.7"/>
        <path d="M 105% 85% Q 88% 92% 80% 80% Q 72% 68% 84% 60%" fill="none" stroke="#e4e0db" strokeWidth="14" strokeLinecap="round" opacity="0.5"/>
        <path d="M 105% 85% Q 88% 92% 80% 80% Q 72% 68% 84% 60%" fill="none" stroke="#ece9e4" strokeWidth="6" strokeLinecap="round" opacity="0.6"/>
        <circle cx="100%" cy="0" r="180" fill="none" stroke="#ece8e2" strokeWidth="0.8"/>
        <circle cx="100%" cy="0" r="240" fill="none" stroke="#f0ece7" strokeWidth="0.6"/>
        <circle cx="100%" cy="0" r="300" fill="none" stroke="#f2efe9" strokeWidth="0.5"/>
        <circle cx="100%" cy="0" r="360" fill="none" stroke="#f4f1ec" strokeWidth="0.4"/>
        <circle cx="0" cy="100%" r="260" fill="none" stroke="#ece8e2" strokeWidth="0.7"/>
        <circle cx="0" cy="100%" r="320" fill="none" stroke="#f0ece7" strokeWidth="0.5"/>
        <circle cx="91%" cy="38%" r="2.5" fill="#e0dbd4"/>
        <circle cx="93%" cy="42%" r="1.5" fill="#e8e4de"/>
        <circle cx="89%" cy="44%" r="3" fill="#e0dbd4"/>
        <circle cx="94%" cy="35%" r="1.8" fill="#ece8e2"/>
        <circle cx="87%" cy="40%" r="1.2" fill="#e4e0da"/>
        <circle cx="92%" cy="47%" r="2" fill="#e8e4de"/>
        <line x1="0" y1="38%" x2="100%" y2="62%" stroke="#f0ece8" strokeWidth="0.7"/>
        <line x1="7%" y1="70%" x2="7%" y2="76%" stroke="#dedad4" strokeWidth="0.8"/>
        <line x1="4.5%" y1="73%" x2="9.5%" y2="73%" stroke="#dedad4" strokeWidth="0.8"/>
        <line x1="88%" y1="18%" x2="88%" y2="23%" stroke="#dedad4" strokeWidth="0.8"/>
        <line x1="85.5%" y1="20.5%" x2="90.5%" y2="20.5%" stroke="#dedad4" strokeWidth="0.8"/>
        <line x1="50%" y1="4%" x2="50%" y2="8%" stroke="#e4e0db" strokeWidth="0.6"/>
        <line x1="48%" y1="6%" x2="52%" y2="6%" stroke="#e4e0db" strokeWidth="0.6"/>
        <path d="M 38 195 Q 160 188 280 196" fill="none" stroke="#e8e3dc" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="3%" y1="20%" x2="3%" y2="80%" stroke="#f2efea" strokeWidth="0.6"/>
      </svg>

      {/* Content */}
      <div className="relative max-w-[900px] mx-auto px-10 py-24">

        <p className="text-[10px] tracking-[0.35em] uppercase font-light text-black/35 mb-5">
          What I do
        </p>

        <h2
          className="font-light leading-[1.05] mb-14 text-black"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(38px, 5vw, 60px)",
          }}
        >
          Art, space &amp; surface —<br />
          <em className="italic text-black/30">from the wall out</em>
        </h2>

        <div className="border-t border-black/[0.08]">
          {services.map((s) => (
            <Link
              key={s.num}
              href={`/projects/${s.slug}`}
              className="group flex items-start gap-8 py-7 border-b border-black/[0.07] transition-colors duration-300 hover:bg-black/[0.015]"
            >
              <span
                className="min-w-[28px] pt-1 text-[11px] font-light text-black/25 transition-colors duration-300 group-hover:text-black/50"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {s.num}
              </span>

              <div className="flex-1">
                <p
                  className="font-light mb-2 text-black transition-all duration-300 group-hover:tracking-wide"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(20px, 2.5vw, 26px)",
                  }}
                >
                  {s.title}
                </p>
                <p className="text-[13px] font-light leading-relaxed max-w-[540px] text-black/50">
                  {s.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[9px] tracking-[0.14em] uppercase font-light text-black/35 border border-black/10 px-2.5 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <span className="text-base pt-1 text-black/20 transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-black/60">
                →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-14 flex items-center justify-between">
          <p className="text-[10px] tracking-[0.22em] uppercase font-light text-black/28">
            Available for commissions
          </p>
          <Link
            href="/projects"
            className="flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase font-light text-black/40 hover:text-black hover:gap-5 transition-all duration-300"
          >
            View all work →
          </Link>
        </div>
      </div>
    </section>
  );
}