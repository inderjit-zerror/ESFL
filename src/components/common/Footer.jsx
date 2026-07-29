import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const sitemapLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Media", href: "/media" },
    { label: "Career", href: "/career" },
  ];

  const supportLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Use", href: "/terms-of-use" },
    { label: "Quality Policy", href: "/quality-policy" },
  ];

  return (
    <footer className="bg-[#D42E12] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Top row: brand + socials, separated from the link grid */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 py-8 border-b border-white/15">
          <div className="w-[100px]">
            <img
              src="/images/nav/logo.png"
              alt="Empire Spices & Foods Ltd."
              className="w-full object-cover object-center"
            />
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="w-4 h-4"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
              </svg>
            </a>
            <a
              href="mailto:care@esfl.co.in"
              aria-label="Email"
              className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-white/90 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#D42E12"
                strokeWidth="1.8"
                className="w-4 h-4"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </a>
          </div>
        </div>

        {/* Main grid: tagline on its own, links separated by hairline rules on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-10 py-14">
          <div className="md:col-span-4 md:pr-8">
            <p className="Paragraph_Small text-white/90 max-w-xs leading-relaxed">
              Empire Spices &amp; Foods Ltd. is committed to bringing
              authentic, world-class quality to every Indian household.
            </p>
          </div>

          <div className="md:col-span-2 md:pl-8 md:border-l md:border-white/15">
            <h3 className="text-xs font-bold tracking-widest text-white/90 mb-4">
              SITEMAP
            </h3>
            <ul className="space-y-2">
              {sitemapLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="Paragraph_Small hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 md:pl-8 md:border-l md:border-white/15">
            <h3 className="text-xs font-bold tracking-widest text-white/90 mb-4">
              SUPPORT
            </h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="Paragraph_Small hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 md:pl-8 md:border-l md:border-white/15">
            <h3 className="text-xs font-bold tracking-widest text-white/90 mb-4">
              CUSTOMER CARE
            </h3>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <a
                  href="mailto:care@esfl.co.in"
                  className="Paragraph_Small hover:underline"
                >
                  care@esfl.co.in
                </a>
                <p className="text-xs text-white/70 mt-1">
                  Write to us anytime
                </p>
              </div>

              <div>
                <a
                  href="tel:+912240001234"
                  className="Paragraph_Small hover:underline"
                >
                  +91 22 4000 1234
                </a>
                <p className="text-xs text-white/70 mt-1">
                  Mon–Sat, 9am–6pm IST
                </p>
              </div>
            </div>

            <div className="mt-6">
              <p className="Paragraph_Small">
                ESFL House, MIDC Industrial Area
              </p>
              <p className="Paragraph_Small text-white/70 mt-1">
                Andheri East, Mumbai 400093, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/15 py-6 flex justify-center items-center">
          <p className="Paragraph_Small text-white/80 text-center sm:text-left ">
            © 2026 Empire Spices &amp; Foods Ltd. All rights reserved. ·
            esfl.co.in
          </p>
        </div>
      </div>
    </footer>
  );
}