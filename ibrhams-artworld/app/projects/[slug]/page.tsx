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
      className="relative min-h-screen bg-white overflow-hidden"
      style={{ fontFamily: "'Jost', sans-serif" }}
    >
      {/* BG SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle cx="100%" cy="0" r="280" fill="none" stroke="#ece8e2" strokeWidth="0.7" />
        <circle cx="100%" cy="0" r="400" fill="none" stroke="#f2eeea" strokeWidth="0.4" />
        <circle cx="0" cy="100%" r="240" fill="none" stroke="#ece8e2" strokeWidth="0.6" />
        <line x1="3%" y1="10%" x2="3%" y2="90%" stroke="#f2efea" strokeWidth="0.5" />
        <line x1="0" y1="60%" x2="100%" y2="75%" stroke="#f0ece8" strokeWidth="0.5" />
      </svg>

      <div className="relative max-w-[780px] mx-auto px-10 pt-40 pb-32">

        {/* Back */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase font-light text-black/35 hover:text-black transition-colors duration-300 mb-16"
        >
          ← All projects
        </Link>

        {/* Meta row */}
        <div className="flex items-center gap-4 mb-6">
          <span
            className="text-[11px] font-light text-black/20"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {project.num}
          </span>
          <span className="text-[9px] tracking-[0.2em] uppercase text-black/30 font-light border border-black/10 px-2 py-0.5">
            {project.category}
          </span>
          <span className="text-[10px] text-black/25 font-light">{project.year}</span>
        </div>

        {/* Title */}
        <h1
          className="font-light leading-[1.0] text-black mb-5"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(42px, 6vw, 72px)",
          }}
        >
          {project.title}
        </h1>

        {/* Tagline */}
        <p
          className="text-[18px] font-light italic text-black/35 mb-10 leading-snug"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          "{project.tagline}"
        </p>

        <div className="w-12 h-px bg-black/15 mb-10" />

        {/* Intro paragraph */}
        <p className="text-[15px] font-light text-black/60 leading-relaxed mb-10">
          {project.description}
        </p>

        {/* Body */}
        <div className="space-y-6">
          {project.body.map((para, i) => (
            <p
              key={i}
              className="text-[14px] font-light text-black/55 leading-[1.9]"
            >
              {para}
            </p>
          ))}
        </div>

        {/* Details block */}
        <div className="mt-16 grid grid-cols-3 gap-px bg-black/[0.07] border border-black/[0.07]">
          {[
            { label: "Medium", value: project.medium },
            { label: "Location", value: project.location },
            { label: "Period", value: project.year },
          ].map((d) => (
            <div key={d.label} className="bg-white px-6 py-5">
              <p className="text-[9px] tracking-[0.25em] uppercase text-black/30 font-light mb-1">
                {d.label}
              </p>
              <p className="text-[13px] font-light text-black/70">{d.value}</p>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-8">
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-[9px] tracking-[0.14em] uppercase font-light text-black/35 border border-black/10 px-2.5 py-1"
            >
              {t}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 border border-black/[0.08] flex items-center justify-between gap-6">
          <div>
            <p
              className="font-light text-black mb-1"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(18px, 2vw, 24px)",
              }}
            >
              Interested in this kind of work?
            </p>
            <p className="text-[12px] font-light text-black/45">
              All commissions are open. Let's talk about your project.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-7 py-3 border border-black/20 text-[11px] tracking-[0.2em] uppercase font-light text-black/60 hover:bg-black hover:text-white hover:border-black transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>

        {/* Prev / Next */}
        <div className="mt-16 grid grid-cols-2 gap-px bg-black/[0.07]">
          <Link
            href={`/projects/${prev.slug}`}
            className="group bg-white px-6 py-5 hover:bg-black/[0.018] transition-colors duration-300"
          >
            <p className="text-[9px] tracking-[0.25em] uppercase text-black/25 font-light mb-2">
              ← Previous
            </p>
            <p
              className="font-light text-black/70 group-hover:text-black transition-colors duration-300"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "16px" }}
            >
              {prev.title}
            </p>
          </Link>
          <Link
            href={`/projects/${next.slug}`}
            className="group bg-white px-6 py-5 text-right hover:bg-black/[0.018] transition-colors duration-300"
          >
            <p className="text-[9px] tracking-[0.25em] uppercase text-black/25 font-light mb-2">
              Next →
            </p>
            <p
              className="font-light text-black/70 group-hover:text-black transition-colors duration-300"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "16px" }}
            >
              {next.title}
            </p>
          </Link>
        </div>

      </div>
    </main>
  );
}