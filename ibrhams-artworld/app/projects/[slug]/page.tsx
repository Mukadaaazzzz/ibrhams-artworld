import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/app/lib/projects";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const next = projects[(currentIndex + 1) % projects.length];
  const prev = projects[(currentIndex - 1 + projects.length) % projects.length];

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
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6 md:px-12 py-12 md:py-20">
        {/* Navigation bar */}
        <nav className="flex items-center justify-between mb-20 pb-6 border-b border-black/5">
          <Link
            href="/projects"
            className="group flex items-center gap-2 text-sm font-medium text-black/40 hover:text-black transition-all duration-300"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Projects
          </Link>
          
          <div className="flex items-center gap-4">
            <span className="text-xs font-light text-black/30 tracking-wide">{project.category}</span>
            <span className="w-1 h-1 rounded-full bg-black/20" />
            <span className="text-xs font-light text-black/30">{project.year}</span>
          </div>
        </nav>

        {/* Hero Section - Split layout */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          {/* Left column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono text-black/30">{project.num}</span>
                <div className="w-8 h-px bg-[#C9A84C]" />
              </div>
              
              <h1 
                className="font-bold leading-[1.1] tracking-tight text-black"
                style={{ fontSize: "clamp(48px, 7vw, 84px)" }}
              >
                {project.title}
              </h1>
              
              <p className="text-xl leading-relaxed text-black/50 italic font-light">
                &ldquo;{project.tagline}&rdquo;
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-base leading-relaxed text-black/70">
                {project.description}
              </p>
              
              <div className="space-y-4">
                {project.body.map((para, i) => (
                  <p key={i} className="text-base leading-relaxed text-black/60">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Stats & Info Card */}
          <div className="lg:pl-8">
            <div className="sticky top-32 space-y-8">
              {/* Main info card */}
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-black/5 shadow-sm">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-black/40 mb-6">
                  Project Details
                </h3>
                
                <div className="space-y-5">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-black/30 mb-1">Medium</p>
                    <p className="text-base font-medium text-black/80">{project.medium}</p>
                  </div>
                  
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-black/30 mb-1">Location</p>
                    <p className="text-base font-medium text-black/80">{project.location}</p>
                  </div>
                  
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-black/30 mb-1">Period</p>
                    <p className="text-base font-medium text-black/80">{project.year}</p>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-black/5 text-black/60 hover:bg-black/10 transition-colors duration-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* CTA Card */}
              <div className="bg-gradient-to-br from-[#111] to-[#1a1a1a] rounded-2xl p-8 text-white">
                <div className="space-y-4">
                  <div className="w-12 h-px bg-[#C9A84C]" />
                  <h4 className="text-xl font-semibold leading-tight">
                    Bring your vision to life
                  </h4>
                  <p className="text-sm text-white/60 leading-relaxed">
                    All commissions are open. Let's create something extraordinary together.
                  </p>
                  <a
                    href="https://wa.me/2347089193188"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A84C] text-black font-medium rounded-full hover:bg-[#B8973A] transition-all duration-300 hover:scale-105"
                  >
                    Start a Conversation
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation between projects */}
        <div className="pt-16 border-t border-black/5">
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href={"/projects/" + prev.slug}
              className="group relative p-6 rounded-xl bg-white/40 backdrop-blur-sm border border-black/5 hover:bg-white/60 transition-all duration-300 hover:shadow-md"
            >
              <div className="flex items-center gap-3 text-sm text-black/40 group-hover:text-black/60 mb-3">
                <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="uppercase tracking-wider text-xs">Previous Project</span>
              </div>
              <p className="text-lg font-medium text-black/70 group-hover:text-black transition-colors">
                {prev.title}
              </p>
            </Link>

            <Link
              href={"/projects/" + next.slug}
              className="group relative p-6 rounded-xl bg-white/40 backdrop-blur-sm border border-black/5 hover:bg-white/60 transition-all duration-300 hover:shadow-md text-right"
            >
              <div className="flex items-center justify-end gap-3 text-sm text-black/40 group-hover:text-black/60 mb-3">
                <span className="uppercase tracking-wider text-xs">Next Project</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <p className="text-lg font-medium text-black/70 group-hover:text-black transition-colors">
                {next.title}
              </p>
            </Link>
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-20 pt-8 text-center">
          <p className="text-xs font-light text-black/30 tracking-wide">
            © {new Date().getFullYear()} Ibrhams Artworld — All work is original
          </p>
        </div>
      </div>
    </main>
  );
}