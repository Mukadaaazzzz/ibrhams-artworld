import Link from "next/link";
import { projects } from "@/app/lib/projects";

export default function ProjectsPage() {
  return (
    <main
      className="relative min-h-screen bg-white overflow-hidden"
      style={{ fontFamily: "'Jost', sans-serif" }}
    >
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle cx="100%" cy="0" r="300" fill="none" stroke="#ece8e2" strokeWidth="0.8" />
        <circle cx="100%" cy="0" r="420" fill="none" stroke="#f0ece7" strokeWidth="0.5" />
        <circle cx="0" cy="100%" r="260" fill="none" stroke="#ece8e2" strokeWidth="0.7" />
        <circle cx="0" cy="100%" r="380" fill="none" stroke="#f2eeea" strokeWidth="0.4" />
        <line x1="0" y1="42%" x2="100%" y2="58%" stroke="#f0ece8" strokeWidth="0.6" />
        <line x1="3%" y1="15%" x2="3%" y2="85%" stroke="#f2efea" strokeWidth="0.5" />
        <circle cx="91%" cy="55%" r="2.5" fill="#e0dbd4" />
        <circle cx="93%" cy="59%" r="1.5" fill="#e8e4de" />
        <circle cx="89%" cy="57%" r="2" fill="#e4e0da" />
        <line x1="7%" y1="72%" x2="7%" y2="78%" stroke="#dedad4" strokeWidth="0.8" />
        <line x1="4.5%" y1="75%" x2="9.5%" y2="75%" stroke="#dedad4" strokeWidth="0.8" />
      </svg>

      <div className="relative max-w-[960px] mx-auto px-10 pt-40 pb-32">
       <Link
    href="/"
    className="inline-flex items-center gap-2 mb-16 group"
    style={{ color: "rgba(0,0,0,0.35)" }}
  >
    <span className="transition-transform duration-300 group-hover:-translate-x-1">&#8592;</span>
    <span className="text-[10px] uppercase tracking-[0.22em] font-light">Back to home</span>
  </Link>
        <p className="text-[10px] tracking-[0.35em] uppercase text-black/35 font-light mb-6">
          All Work
        </p>

        <h1
          className="font-light leading-[1.0] text-black mb-6"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(48px, 7vw, 80px)",
          }}
        >
          Every project is<br />
          <em className="italic text-black/30">a conversation with a surface.</em>
        </h1>

        <p className="text-[14px] font-light text-black/50 leading-relaxed max-w-[520px] mb-20">
          Nine disciplines. One consistent belief — that art and craft applied
          with intention transforms not just walls, but the way people feel
          inside a space. Browse the work below, or click through to read
          the full story of each.
        </p>

        <div className="border-t border-black/[0.08]">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={"/projects/" + p.slug}
              className="group flex items-start gap-8 py-8 border-b border-black/[0.07] transition-colors duration-300 hover:bg-black/[0.018]"
            >
              <span
                className="text-[11px] font-light text-black/20 min-w-[28px] pt-1.5 group-hover:text-black/45 transition-colors duration-300"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {p.num}
              </span>

              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-4 mb-2 flex-wrap">
                  <p
                    className="font-light text-black transition-all duration-300 group-hover:tracking-wide"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "clamp(20px, 2.5vw, 28px)",
                    }}
                  >
                    {p.title}
                  </p>
                  <span className="text-[9px] tracking-[0.2em] uppercase text-black/30 font-light border border-black/10 px-2 py-0.5">
                    {p.category}
                  </span>
                </div>
                <p className="text-[13px] font-light text-black/45 leading-relaxed mb-3 max-w-[580px]">
                  {p.description}
                </p>
                <p
                  className="text-[12px] font-light italic text-black/30"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  &ldquo;{p.tagline}&rdquo;
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {p.tags.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="text-[9px] tracking-[0.12em] uppercase font-light text-black/30 border border-black/[0.08] px-2 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-end gap-1 pt-1.5 shrink-0">
                <span className="text-[10px] tracking-[0.15em] uppercase text-black/25 font-light">
                  {p.year}
                </span>
                <span className="text-black/20 text-base group-hover:translate-x-1.5 group-hover:text-black/60 transition-all duration-300 mt-2">
                  &#8594;
                </span>
              </div>
            </Link>
          ))}
        </div>

        <p className="mt-16 text-[11px] tracking-[0.2em] uppercase text-black/25 font-light text-center">
          All work is original. All commissions are open.
        </p>
      </div>
    </main>
  );
}