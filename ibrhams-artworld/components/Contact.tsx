"use client";

import { Phone, Mail, MapPin } from "lucide-react";

const gold = "#C9A84C";

// Custom WhatsApp Icon
const WhatsAppIcon = () => (
  <svg role="img" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.254.625 4.371 1.714 6.197L.191 23.68c-.104.389.293.743.676.639l5.3-1.531C7.62 23.285 9.765 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.084 0-4.041-.591-5.724-1.606l-.374-.223-3.926 1.134 1.194-3.752-.245-.378C2.668 15.566 2 13.84 2 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
  </svg>
);

type ContactItem = {
  icon: React.ComponentType<any> | (() => React.JSX.Element);
  label: string;
  value: string;
  href: string | null;
  details: string;
  iconColor: string;
};

const contactInfo: ContactItem[] = [
  {
    icon: Phone,
    label: "Call Me",
    value: "+234 708 919 3188",
    href: "tel:+2347089193188",
    details: "Available 24/7",
    iconColor: "#34C759",
  },
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: "+234 708 919 3188",
    href: "https://wa.me/2347089193188",
    details: "Available 24/7",
    iconColor: "#25D366",
  },
  {
    icon: Mail,
    label: "Email",
    value: "Ibrahimomoniyi12345@gmail.com",
    href: "mailto:Ibrahimomoniyi12345@gmail.com",
    details: "Available 24/7",
    iconColor: "#007AFF",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lagos, Nigeria",
    href: null,
    details: "Available nationwide",
    iconColor: "#FF3B30",
  },
];

const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/ibrhams001?igsh=MThjMDJpZXViYjd4OQ%3D%3D&utm_source=qr",
    handle: "@ibrhams001",
    color: "#E4405F",
    gradient: "from-[#833AB4] via-[#E4405F] to-[#F56040]",
    icon: (
      <svg role="img" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/ibrhams023?s=11",
    handle: "@ibrhams023",
    color: "#000000",
    gradient: "from-gray-900 to-gray-700",
    icon: (
      <svg role="img" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@ibrhams023?_r=1&_t=ZS-95jMs4RoBFd",
    handle: "@ibrhams023",
    color: "#010101",
    gradient: "from-[#00f2ea] to-[#ff0050]",
    icon: (
      <svg role="img" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v3.03c-1.49-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.76-.08 1.4-.54 2.79-1.35 3.99-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
      </svg>
    ),
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/share/1CZqjS4sJP/?mibextid=wwXIfr",
    handle: "Ibrahim Omoniyi",
    color: "#1877F2",
    gradient: "from-[#1877F2] to-[#0C63D4]",
    icon: (
      <svg role="img" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
];

export default function Contact() {
  const handleContactClick = (href: string | null, label: string) => {
    if (!href) return;
    
    if (label === "WhatsApp") {
      window.open(href, "_blank");
    } else if (label === "Email") {
      window.location.href = href;
    } else if (label === "Call Me") {
      window.location.href = href;
    } else {
      window.open(href, "_blank");
    }
  };

  const renderIcon = (icon: React.ComponentType<any> | (() => React.JSX.Element), color: string) => {
    const IconComponent = icon;
    return <IconComponent />;
  };

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden scroll-mt-20"
      style={{ background: "#FAFAF8", fontFamily: "'Jost', sans-serif" }}
    >
      {/* BG Pattern */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="contact-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(0,0,0,0.03)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#contact-grid)" />
        <circle cx="0" cy="0" r="320" fill="none" stroke="#ece8e2" strokeWidth="0.8" />
        <circle cx="0" cy="0" r="460" fill="none" stroke="#f0ece7" strokeWidth="0.5" />
        <circle cx="100%" cy="100%" r="280" fill="none" stroke="#ece8e2" strokeWidth="0.7" />
        <circle cx="100%" cy="100%" r="420" fill="none" stroke="#f2eeea" strokeWidth="0.4" />
        <line x1="0" y1="42%" x2="100%" y2="52%" stroke="#f0ece8" strokeWidth="0.7" />
        <circle cx="12%" cy="78%" r="2.5" fill="#e0dbd4" />
        <circle cx="14%" cy="82%" r="1.5" fill="#e8e4de" />
        <circle cx="10%" cy="81%" r="1.8" fill="#e4e0da" />
        <line x1="94%" y1="16%" x2="94%" y2="22%" stroke="#dedad4" strokeWidth="0.8" />
        <line x1="91.5%" y1="19%" x2="96.5%" y2="19%" stroke="#dedad4" strokeWidth="0.8" />
      </svg>

      <div className="relative max-w-[1100px] mx-auto px-6 md:px-10 py-20 md:py-24">
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-12">
          <p
            className="text-[10px] tracking-[0.35em] uppercase font-light shrink-0"
            style={{ color: "rgba(0,0,0,0.28)" }}
          >
            Let&apos;s connect
          </p>
          <div className="flex-1 h-px" style={{ background: "rgba(0,0,0,0.07)" }} />
        </div>

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2
            className="font-light leading-[1.1] text-black mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(42px, 6vw, 68px)",
            }}
          >
            Ready to transform<br />your space?
          </h2>
          <div
            className="w-12 h-px mx-auto mb-6"
            style={{ background: gold }}
          />
          <p
            className="font-light"
            style={{ fontSize: "15px", color: "rgba(0,0,0,0.5)" }}
          >
            Whether it&apos;s a residential, commercial, or industrial project —<br />
            let&apos;s create something exceptional together.
          </p>
        </div>

        {/* Contact Grid - 4 items with 24/7 availability */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactInfo.map((item) => (
            <div
              key={item.label}
              onClick={() => item.href && handleContactClick(item.href, item.label)}
              className="group relative p-6 text-center transition-all duration-500 hover:-translate-y-1 cursor-pointer"
              style={{
                border: "1px solid rgba(0,0,0,0.06)",
                background: "rgba(255,255,255,0.8)",
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "rgba(201,168,76,0.02)" }}
              />
              <div
                className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                style={{ background: `${item.iconColor}15` }}
              >
                <span style={{ color: item.iconColor }}>
                  {renderIcon(item.icon, item.iconColor)}
                </span>
              </div>
              <p
                className="text-[9px] uppercase tracking-[0.2em] font-light mb-2"
                style={{ color: "rgba(0,0,0,0.3)" }}
              >
                {item.label}
              </p>
              <p
                className="block font-light"
                style={{ fontSize: "14px", color: "rgba(0,0,0,0.75)" }}
              >
                {item.value}
              </p>
              <p
                className="text-[10px] mt-2 flex items-center justify-center gap-1"
                style={{ color: "rgba(0,0,0,0.45)" }}
              >
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                {item.details}
              </p>
            </div>
          ))}
        </div>

        {/* Social Section */}
        <div className="text-center">
          <p
            className="text-[10px] uppercase tracking-[0.3em] font-light mb-8"
            style={{ color: "rgba(0,0,0,0.3)" }}
          >
            Connect on social
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{
                  border: "1px solid rgba(0,0,0,0.08)",
                  background: "#FAFAF8",
                }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${social.gradient} transition-transform duration-300 scale-x-0 group-hover:scale-x-100 origin-left`}
                />
                <div className="relative z-10 flex items-center gap-4 px-6 py-3">
                  <span
                    className="transition-all duration-300 group-hover:scale-110"
                    style={{ color: social.color }}
                  >
                    {social.icon}
                  </span>
                  <div className="text-left">
                    <p
                      className="text-[9px] uppercase tracking-[0.15em] font-light transition-colors duration-300 group-hover:text-white/80"
                      style={{ color: "rgba(0,0,0,0.35)" }}
                    >
                      {social.name}
                    </p>
                    <p
                      className="text-xs font-light transition-colors duration-300 group-hover:text-white"
                      style={{ color: "rgba(0,0,0,0.6)" }}
                    >
                      {social.handle}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* CTA Line */}
        <div
          className="mt-20 pt-10 text-center"
          style={{ borderTop: "1px solid rgba(0,0,0,0.05)" }}
        >
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12" style={{ background: "rgba(0,0,0,0.1)" }} />
            <p
              className="text-[11px] tracking-[0.2em] uppercase font-light"
              style={{ color: "rgba(0,0,0,0.3)" }}
            >
              Let&apos;s create something timeless
            </p>
            <div className="h-px w-12" style={{ background: "rgba(0,0,0,0.1)" }} />
          </div>
          <div
            className="mt-6 w-12 h-px mx-auto"
            style={{ background: gold }}
          />
        </div>
      </div>
    </section>
  );
}