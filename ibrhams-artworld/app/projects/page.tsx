import Link from "next/link";
import { projects } from "@/app/lib/projects";

export default function ProjectsPage() {
  return (
    <main
      className="relative min-h-screen"
      style={{ 
        background: "linear-gradient(135deg, #FFFFFF 0%, #FDFBF7 50%, #FCF9F4 100%)",
        fontFamily: "'Inter', sans-serif" 
      }}
    >
      {/* Modern abstract background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -right-1/3 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#C9A84C]/5 via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-0 -left-1/3 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#C9A84C]/3 via-transparent to-transparent blur-3xl" />
        
        {/* Grid pattern */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(0,0,0,0.02)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-[10%] w-2 h-2 rounded-full bg-[#C9A84C]/30 animate-pulse" />
        <div className="absolute top-2/3 right-[15%] w-3 h-3 rounded-full bg-[#C9A84C]/20 animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/3 left-[20%] w-1.5 h-1.5 rounded-full bg-[#C9A84C]/25 animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 right-[25%] w-1.5 h-1.5 rounded-full bg-[#C9A84C]/15 animate-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6 md:px-12 py-12 md:py-20">
        {/* Navigation */}
        <nav className="flex items-center justify-between mb-20 pb-6 border-b border-black/5">
          <Link
            href="/"
            className="group flex items-center gap-2 text-sm font-medium text-black/40 hover:text-black transition-all duration-300"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          
          <div className="hidden md:flex items-center gap-2">
            <span className="text-xs font-light text-black/30">{projects.length} Projects</span>
            <span className="w-1 h-1 rounded-full bg-black/20" />
            <span className="text-xs font-light text-black/30">Est. 2014</span>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
            <span className="text-[10px] tracking-[0.2em] uppercase font-medium text-black/50">
              Portfolio
            </span>
          </div>
          
          <h1
            className="font-bold leading-[1.1] tracking-tight text-black mb-6"
            style={{ fontSize: "clamp(48px, 8vw, 88px)" }}
          >
            Every project is<br />
            <span className="text-black/40">a conversation with a surface.</span>
          </h1>

          <p className="text-base font-light text-black/50 leading-relaxed max-w-2xl mx-auto">
            Nine disciplines. One consistent belief — that art and craft applied
            with intention transforms not just walls, but the way people feel
            inside a space. Browse the work below, or click through to read
            the full story of each.
          </p>
          
          <div className="flex justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="text-2xl font-light text-black/70">9+</div>
              <div className="text-[10px] uppercase tracking-wider text-black/30 mt-1">Disciplines</div>
            </div>
            <div className="w-px bg-black/10" />
            <div className="text-center">
              <div className="text-2xl font-light text-black/70">10+</div>
              <div className="text-[10px] uppercase tracking-wider text-black/30 mt-1">Years Experience</div>
            </div>
            <div className="w-px bg-black/10" />
            <div className="text-center">
              <div className="text-2xl font-light text-black/70">100%</div>
              <div className="text-[10px] uppercase tracking-wider text-black/30 mt-1">Original Work</div>
            </div>
          </div>
        </div>

        {/* Projects Grid - Modern Card Layout */}
        <div className="space-y-6">
          {projects.map((p, index) => (
            <Link
              key={p.slug}
              href={"/projects/" + p.slug}
              className="group block"
            >
              <div className="relative bg-white/40 backdrop-blur-sm rounded-2xl border border-black/5 hover:border-black/10 transition-all duration-500 hover:shadow-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#C9A84C]/0 via-[#C9A84C]/0 to-[#C9A84C]/0 group-hover:from-[#C9A84C]/5 transition-all duration-700" />
                
                <div className="relative p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Project Number - Large & Decorative */}
                    <div className="hidden md:block min-w-[80px]">
                      <span className="text-5xl font-light text-black/5 group-hover:text-black/10 transition-colors duration-300" 
                            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        {p.num}
                      </span>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 space-y-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <h2 
                          className="text-xl md:text-2xl font-medium text-black/80 group-hover:text-black transition-colors duration-300"
                          style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        >
                          {p.title}
                        </h2>
                        <span className="text-[10px] tracking-[0.2em] uppercase font-medium text-black/40 border border-black/10 px-2.5 py-1 rounded-full">
                          {p.category}
                        </span>
                        <span className="text-xs font-light text-black/30">
                          {p.year}
                        </span>
                      </div>
                      
                      <p className="text-sm leading-relaxed text-black/60 max-w-2xl">
                        {p.description}
                      </p>
                      
                      <p className="text-sm italic text-black/40 leading-relaxed"
                         style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        &ldquo;{p.tagline}&rdquo;
                      </p>
                      
                      <div className="flex flex-wrap gap-2 pt-2">
                        {p.tags.slice(0, 4).map((t) => (
                          <span
                            key={t}
                            className="text-[10px] tracking-[0.1em] uppercase font-medium text-black/40 bg-black/5 px-2.5 py-1 rounded-full hover:bg-black/10 transition-colors duration-200"
                          >
                            {t}
                          </span>
                        ))}
                        {p.tags.length > 4 && (
                          <span className="text-[10px] font-medium text-black/30">
                            +{p.tags.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Arrow Indicator */}
                    <div className="flex items-center justify-end min-w-[40px]">
                      <div className="w-10 h-10 rounded-full bg-black/5 group-hover:bg-black/10 flex items-center justify-center transition-all duration-300 group-hover:translate-x-1">
                        <svg className="w-4 h-4 text-black/40 group-hover:text-black/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 pt-12 text-center border-t border-black/5">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-light text-black/70 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Ready to start your project?
            </h3>
            <p className="text-sm font-light text-black/50 mb-8">
              All commissions are open. Let's create something extraordinary together.
            </p>
            <a
              href="https://wa.me/2347089193188"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#C9A84C] text-black font-medium rounded-full hover:bg-[#B8973A] transition-all duration-300 hover:scale-105"
            >
              Discuss Your Project
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
          
          <p className="mt-12 text-[10px] tracking-[0.2em] uppercase font-light text-black/25">
            © {new Date().getFullYear()} Ibrhams Artworld — All work is original
          </p>
        </div>
      </div>
    </main>
  );
}