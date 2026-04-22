"use client";

import Link from "next/link";
import Image from "next/image";

const gold = "#C9A84C";

const links = {
  work: [
    { label: "Projects", href: "/projects" },
    { label: "Gallery", href: "/gallery" },
  ],
  connect: [
    { 
      label: "Instagram", 
      href: "https://www.instagram.com/ibrhams001?igsh=MThjMDJpZXViYjd4OQ%3D%3D&utm_source=qr",
      icon: (
        <svg role="img" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      ),
    },
    { 
      label: "TikTok", 
      href: "https://www.tiktok.com/@ibrhams023",
      icon: (
        <svg role="img" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v3.03c-1.49-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.76-.08 1.4-.54 2.79-1.35 3.99-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      ),
    },
    { 
      label: "Facebook", 
      href: "https://www.facebook.com/share/1CZqjS4sJP/?mibextid=wwXIfr",
      icon: (
        <svg role="img" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
    { 
      label: "X (Twitter)", 
      href: "https://x.com/ibrhams023",
      icon: (
        <svg role="img" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
  ],
  contact: [
    { label: "+234 708 919 3188", href: "https://wa.me/2347089193188" },
    { label: "Ibrahimomoniyi12345@gmail.com", href: "mailto:Ibrahimomoniyi12345@gmail.com" },
    { label: "Lagos, Nigeria", href: null },
  ],
};

const disciplines = [
  "Art & Portraiture",
  "Professional Painting",
  "Screeding",
  "Surface Treatment",
  "Decorative Finishing",
  "Interior Art Direction",
  "Exterior & Facade",
  "Paint Production",
  "Digital Illustration",
];

export default function Footer() {
  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{ background: "#0e0e0e", fontFamily: "'Jost', sans-serif" }}
    >
      {/* Colour bar at very top */}
      <div className="flex h-1 w-full">
        <div className="flex-1" style={{ background: "#C9A84C" }} />
        <div className="flex-1" style={{ background: "#E4405F" }} />
        <div className="flex-1" style={{ background: "#1877F2" }} />
        <div className="flex-1" style={{ background: "#25D366" }} />
        <div className="flex-1" style={{ background: "#C9A84C" }} />
      </div>

      {/* BG arcs */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle cx="100%" cy="0" r="300" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
        <circle cx="0" cy="100%" r="260" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
        <line x1="0" y1="55%" x2="100%" y2="55%" stroke="rgba(255,255,255,0.025)" strokeWidth="0.5" />
      </svg>

      <div className="relative max-w-[960px] mx-auto px-6 md:px-10">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1.8fr_1fr_1fr_1.4fr] gap-12 py-16 border-b"
          style={{ borderColor: "rgba(255,255,255,0.07)" }}>

          {/* Brand col */}
          <div>
            <Image
              src="/log.png"
              alt="Ibrhams Artworld"
              width={180}
              height={52}
              className="object-contain h-14 w-auto mb-5 brightness-0 invert"
            />
            <p
              className="font-light leading-relaxed mb-6 max-w-[260px]"
              style={{ fontSize: "12.5px", color: "rgba(255,255,255,0.38)" }}
            >
              Art, surface, and design from Lagos to West Africa.
              Over 10 years of craft applied with intention.
            </p>

            {/* Availability dot */}
            <div className="flex items-center gap-2.5">
              <div
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: "#4ade80" }}
              />
              <p
                className="font-light"
                style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)" }}
              >
                Available for new projects
              </p>
            </div>
          </div>

          {/* Work col */}
          <div>
            <p
              className="uppercase font-light mb-5 tracking-[0.28em]"
              style={{ fontSize: "9px", color: "rgba(255,255,255,0.25)" }}
            >
              Work
            </p>
            <div className="space-y-3">
              {links.work.map((l) => (
                <div key={l.label}>
                  <Link
                    href={l.href}
                    className="font-light hover:opacity-60 transition-opacity duration-200"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "17px",
                      color: "rgba(255,255,255,0.65)",
                      textDecoration: "none",
                    }}
                  >
                    {l.label}
                  </Link>
                </div>
              ))}
              <div>
                <Link
                  href="/#about"
                  className="font-light hover:opacity-60 transition-opacity duration-200"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "17px",
                    color: "rgba(255,255,255,0.65)",
                    textDecoration: "none",
                  }}
                >
                  About
                </Link>
              </div>
              <div>
                <Link
                  href="/#contact"
                  className="font-light hover:opacity-60 transition-opacity duration-200"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "17px",
                    color: "rgba(255,255,255,0.65)",
                    textDecoration: "none",
                  }}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* Socials col */}
          <div>
            <p
              className="uppercase font-light mb-5 tracking-[0.28em]"
              style={{ fontSize: "9px", color: "rgba(255,255,255,0.25)" }}
            >
              Social
            </p>
            <div className="space-y-4">
              {links.connect.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 hover:opacity-70 transition-all duration-300"
                  style={{ textDecoration: "none" }}
                >
                  <span
                    className="transition-transform duration-300 group-hover:scale-110"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {l.icon}
                  </span>
                  <span
                    className="font-light transition-colors duration-300 group-hover:text-white"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "16px",
                      color: "rgba(255,255,255,0.55)",
                    }}
                  >
                    {l.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact col */}
          <div>
            <p
              className="uppercase font-light mb-5 tracking-[0.28em]"
              style={{ fontSize: "9px", color: "rgba(255,255,255,0.25)" }}
            >
              Get in touch
            </p>
            <div className="space-y-3">
              {links.contact.map((l) => (
                <div key={l.label}>
                  {l.href ? (
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-light hover:opacity-60 transition-opacity duration-200 break-all inline-block"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "14px",
                        color: "rgba(255,255,255,0.6)",
                        textDecoration: "none",
                      }}
                    >
                      {l.label}
                    </a>
                  ) : (
                    <p
                      className="font-light"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "14px",
                        color: "rgba(255,255,255,0.4)",
                      }}
                    >
                      {l.label}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            
          </div>
        </div>

        {/* Disciplines ticker */}
        <div className="py-5 border-b overflow-hidden relative"
          style={{ borderColor: "rgba(255,255,255,0.05)" }}>
          <div
            className="absolute left-0 top-0 bottom-0 w-8 pointer-events-none z-10"
            style={{ background: "linear-gradient(to right, #0e0e0e, transparent)" }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-8 pointer-events-none z-10"
            style={{ background: "linear-gradient(to left, #0e0e0e, transparent)" }}
          />
          <div
            className="flex whitespace-nowrap"
            style={{ animation: "footer-ticker 18s linear infinite" }}
          >
            {[...disciplines, ...disciplines].map((d, i) => (
              <span key={i} className="flex items-center">
                <span
                  className="font-light px-6"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.22)",
                  }}
                >
                  {d}
                </span>
                <span
                  className="w-1 h-1 rounded-full shrink-0"
                  style={{ background: gold, opacity: 0.5 }}
                />
              </span>
            ))}
          </div>
          <style>{`
            @keyframes footer-ticker {
              0%   { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="font-light"
            style={{ fontSize: "11px", color: "rgba(255,255,255,0.18)", letterSpacing: ".05em" }}
          >
            © {new Date().getFullYear()} Ibrhams Artworld &nbsp;·&nbsp; Lagos, Nigeria
          </p>
          <p
            className="font-light"
            style={{ fontSize: "11px", color: "rgba(255,255,255,0.15)", letterSpacing: ".05em" }}
          >
            All work is original. All commissions are open.
          </p>
        </div>

      </div>
    </footer>
  );
}