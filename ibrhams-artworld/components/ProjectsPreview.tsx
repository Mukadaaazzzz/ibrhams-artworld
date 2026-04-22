"use client";

import Link from "next/link";

const services = [
  {
    num: "01",
    slug: "art-portraiture",
    title: "Art & Portraiture",
    desc: "Custom portraits, original paintings, and commissioned artwork — individuals, families, pets, or abstract compositions. Oil, acrylic, charcoal, or mixed media.",
    tags: ["Oil Painting", "Acrylic", "Charcoal", "Mixed Media", "Commission"],
  },
  {
    num: "02",
    slug: "professional-painting",
    title: "Professional Painting",
    desc: "High-standard interior and exterior painting for residential, commercial, and industrial spaces. Flawless finishes, proper surface preparation, and durable results.",
    tags: ["Interior", "Exterior", "Industrial", "Commercial", "Residential"],
  },
  {
    num: "03",
    slug: "screeding-floor-levelling",
    title: "Screeding & Floor Levelling",
    desc: "Professional floor screeding, self-levelling compounds, and substrate preparation. Perfectly flat, smooth surfaces ready for tiling, polishing, or floor finishes.",
    tags: ["Floor Screed", "Self-Levelling", "Substrate Prep", "Concrete Finish"],
  },
  {
    num: "04",
    slug: "surface-treatment",
    title: "Surface Treatment",
    desc: "Comprehensive surface preparation and finishing — cleaning, priming, sealing, and protective coatings for walls, floors, concrete, metal, and wood surfaces.",
    tags: ["Priming", "Sealing", "Protective Coatings", "Restoration"],
  },
  {
    num: "05",
    slug: "decorative-finishing-plasterwork",
    title: "Decorative Finishing & Plasterwork",
    desc: "Textured wall finishes, Venetian plaster, stucco, polished plaster, and ornamental plasterwork for spaces that demand character and craftsmanship.",
    tags: ["Venetian Plaster", "Texture", "Stucco", "Ornamental", "Luxury Finish"],
  },
  {
    num: "06",
    slug: "interior-art-direction",
    title: "Interior Art Direction",
    desc: "Holistic space curation — wall colour consultation, art placement, custom canvases, surface treatments, and visual identity that ties every room together.",
    tags: ["Colour Consult", "Wall Art", "Styling", "Space Curation"],
  },
  {
    num: "07",
    slug: "exterior-facade-work",
    title: "Exterior & Facade Work",
    desc: "Weather-resistant painting, finishing, and decorative treatments for building exteriors, gates, compound walls, and outdoor architectural features.",
    tags: ["Facade", "Gates", "Compound Walls", "Weatherproof"],
  },
  {
    num: "08",
    slug: "paint-production",
    title: "Paint Production & Colour Matching",
    desc: "Custom paint mixing and precise colour matching for any project — residential, commercial, or industrial. The exact colour you envision, made from scratch.",
    tags: ["Custom Mix", "Colour Match", "Bulk Supply", "Commercial"],
  },
  {
    num: "09",
    slug: "digital-illustration-design",
    title: "Digital Illustration & Design",
    desc: "Custom digital artwork — prints, brand visuals, event graphics, and social content. Ready for screen or professional print production.",
    tags: ["Print-Ready", "Branding", "Social Content", "Digital Art"],
  },
];

export default function ProjectsPreview() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: "#FAFAF8", fontFamily: "'Jost', sans-serif" }}
    >
      {/* SVG background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="services-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(0,0,0,0.03)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#services-grid)" />
        <path d="M -10 80 Q 60 40 140 90 Q 200 130 160 160" fill="none" stroke="#e4e0db" strokeWidth="18" strokeLinecap="round" opacity="0.5"/>
        <path d="M -10 80 Q 60 40 140 90 Q 200 130 160 160" fill="none" stroke="#ece9e4" strokeWidth="8" strokeLinecap="round" opacity="0.6"/>
        <path d="M 105% 85% Q 88% 92% 80% 80% Q 72% 68% 84% 60%" fill="none" stroke="#e4e0db" strokeWidth="14" strokeLinecap="round" opacity="0.4"/>
        <path d="M 105% 85% Q 88% 92% 80% 80% Q 72% 68% 84% 60%" fill="none" stroke="#ece9e4" strokeWidth="6" strokeLinecap="round" opacity="0.5"/>
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

      <div className="relative max-w-[1000px] mx-auto px-6 md:px-10 py-20 md:py-24">

        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-8">
          <p
            className="text-[10px] tracking-[0.35em] uppercase font-light shrink-0"
            style={{ color: "rgba(0,0,0,0.28)" }}
          >
            What I do
          </p>
          <div className="flex-1 h-px" style={{ background: "rgba(0,0,0,0.07)" }} />
        </div>

        {/* Heading */}
        <div className="mb-16">
          <h2
            className="font-light leading-[1.1] text-black mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(38px, 5vw, 64px)",
            }}
          >
            Art, space &amp; surface —<br />
            <em className="italic" style={{ color: "rgba(0,0,0,0.25)" }}>
              from the wall out
            </em>
          </h2>
          <div className="w-12 h-px" style={{ background: "#C9A84C" }} />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ background: "rgba(0,0,0,0.06)" }}>
          {services.map((s) => (
            <Link
              key={s.num}
              href={"/projects/" + s.slug}
              className="group relative px-7 py-8 transition-all duration-300"
              style={{ background: "#FAFAF8", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#FAFAF8")}
            >
              {/* Gold top bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400"
                style={{ background: "#C9A84C" }}
              />

              {/* Number */}
              <span
                className="block mb-5 text-[11px] font-light tracking-wider"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "rgba(0,0,0,0.2)",
                }}
              >
                {s.num}
              </span>

              {/* Title */}
              <h3
                className="font-light mb-3 text-black transition-all duration-300 group-hover:tracking-wide"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(18px, 2vw, 22px)",
                }}
              >
                {s.title}
              </h3>

              {/* Desc */}
              <p
                className="text-[12px] font-light leading-relaxed mb-5"
                style={{ color: "rgba(0,0,0,0.52)" }}
              >
                {s.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {s.tags.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="text-[8px] tracking-[0.12em] uppercase font-light px-2 py-0.5"
                    style={{
                      color: "rgba(0,0,0,0.38)",
                      border: "1px solid rgba(0,0,0,0.08)",
                    }}
                  >
                    {t}
                  </span>
                ))}
                {s.tags.length > 3 && (
                  <span
                    className="text-[8px] tracking-[0.12em] uppercase font-light px-2 py-0.5"
                    style={{
                      color: "rgba(0,0,0,0.28)",
                      border: "1px solid rgba(0,0,0,0.06)",
                    }}
                  >
                    +{s.tags.length - 3}
                  </span>
                )}
              </div>

              {/* Bottom CTA line */}
              <div
                className="flex items-center gap-2 pt-4 border-t transition-all duration-300 group-hover:gap-3"
                style={{ borderColor: "rgba(0,0,0,0.06)" }}
              >
                <span
                  className="text-[9px] uppercase tracking-[0.2em] font-light"
                  style={{ color: "rgba(0,0,0,0.28)" }}
                >
                  Learn more
                </span>
                <span
                  className="text-sm transition-transform duration-300 group-hover:translate-x-1"
                  style={{ color: "rgba(0,0,0,0.22)" }}
                >
                  &#8594;
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer CTA */}
        <div
          className="mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
        >
          <p
            className="text-[10px] tracking-[0.22em] uppercase font-light"
            style={{ color: "rgba(0,0,0,0.28)" }}
          >
            Available for commissions &amp; consultations
          </p>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase font-light transition-all duration-300 hover:gap-4"
            style={{ color: "#C9A84C" }}
          >
            View all work &#8594;
          </Link>
        </div>
      </div>
    </section>
  );
}