import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* ── CTA Banner ── */}
      <div className="bg-teal/10 border-b border-white/10">
        <div className="section-container py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="eyebrow text-teal mb-2">Join the Community</p>
            <h2 className="heading-lg text-white">
              Together, We Are Stronger.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/becomeamember" className="btn btn-yellow">
              Become a Member
            </Link>
            <Link href="/contactus" className="btn btn-outline-white">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* ── Main columns ── */}
      <div className="section-container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* ── Col 1: Brand ── */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/mountainwestchamber-logo.webp"
                alt="Mountain West Chamber of Commerce"
                width={180}
                height={60}
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="font-body text-sm text-white/70 leading-relaxed mb-6 max-w-xs">
              Strengthening the community through local advocacy, education,
              partnership, and promotion of local businesses since 1997.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/MountainWestChamber"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-teal transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/mountainwestchamber"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-teal transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    ry="5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/mountain-west-chamber-of-commerce"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-teal transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── Col 2: Contact ── */}
          <div className="lg:col-span-1">
            <h3 className="font-accent text-xs font-700 tracking-widest uppercase text-teal mb-5">
              Contact Us
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:Info@mountainwestchamber.org"
                className="flex items-start gap-3 text-sm text-white/70 hover:text-white transition-colors"
              >
                <svg
                  className="w-4 h-4 shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>Info@mountainwestchamber.org</span>
              </a>
              <a
                href="tel:8012800595"
                className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors"
              >
                <svg
                  className="w-4 h-4 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>801-280-0595</span>
              </a>
              <address className="not-italic flex items-start gap-3 text-sm text-white/70">
                <svg
                  className="w-4 h-4 shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <p>4168 South 12600 South</p>
                  <p>Riverton, UT 84065</p>
                  <p className="text-white/60 text-xs mt-1">
                    First Floor — First Utah Bank Bldg
                    <br />
                    Office Hours Vary
                  </p>
                </div>
              </address>
            </div>
          </div>

          {/* ── Col 3: Quick Links ── */}
          <div className="lg:col-span-1">
            <h3 className="font-accent text-xs font-700 tracking-widest uppercase text-teal mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5 mb-8">
              {[
                { label: "About the Chamber", href: "/aboutus" },
                { label: "Why Join?", href: "/why-become-a-member" },
                { label: "Member Directory", href: "/members" },
                { label: "Calendar & Events", href: "/calendar" },
                { label: "Blog", href: "/blogarticles" },
                { label: "Contact Us", href: "/contactus" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Programs + CTA ── */}
          <div className="lg:col-span-1">
            <h3 className="font-accent text-xs font-700 tracking-widest uppercase text-teal mb-5">
              Programs
            </h3>
            <ul className="space-y-2.5 mb-8">
              {[
                { label: "Golf Tournament", href: "/golf-tournament" },
                { label: "Knight of Heroes", href: "/knight-of-heroes-event" },
                {
                  label: "Teacher Appreciation",
                  href: "/teacher-appreciation-event",
                },
                {
                  label: "Scholarship Recipients",
                  href: "/scholarship-recipients",
                },
                {
                  label: "Sponsorship Opportunities",
                  href: "/sponsorshipopps",
                },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/becomeamember"
              className="btn btn-yellow btn-sm w-full justify-center"
            >
              Become a Member
            </Link>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/10">
        <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm font-body text-white/60">
          <p>
            © {new Date().getFullYear()} Mountain West Chamber of Commerce. All
            rights reserved.
          </p>
          <p>
            Website by{" "}
            <a
              href="https://www.AmpDM.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Amp Digital Marketing
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
