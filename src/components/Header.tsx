"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

const navItems: NavItem[] = [
  {
    label: "About Us",
    children: [
      { label: "Our Story", href: "/aboutus" },
      { label: "Meet The Staff", href: "/meet-the-staff" },
      { label: "Board of Directors", href: "/boardofdirectors" },
      { label: "Utah Strong", href: "/utah-strong" },
      { label: "Get Involved", href: "/get-involved" },
      { label: "Visitor & Relocation Info", href: "/visitor-relocation-info" },
      { label: "Supporting Chambers", href: "/supporting-chambers" },
      { label: "Contact Us", href: "/contactus" },
    ],
  },
  {
    label: "Membership",
    children: [
      { label: "Why Become a Member?", href: "/why-become-a-member" },
      { label: "Member Directory", href: "/members" },
      { label: "Sponsorship Opportunities", href: "/sponsorshipopps" },
      { label: "Renewals", href: "/renew" },
      { label: "Ribbon Cuttings", href: "/ribbon-cuttings" },
    ],
  },
  {
    label: "Member Resources",
    children: [
      { label: "Member Discounts", href: "/for-members" },
      { label: "Annual Report", href: "/annual-report" },
      { label: "Membership Training", href: "/membership-training" },
      { label: "Job Board", href: "/job-board" },
      { label: "Chamber News", href: "/blogarticles" },
      { label: "Renew", href: "/renew" },
    ],
  },
  {
    label: "Get Involved",
    children: [
      { label: "Board of Directors", href: "/boardofdirectors" },
      { label: "Committees", href: "/committees" },
      { label: "Sponsorship", href: "/sponsorship" },
      { label: "Programs", href: "/programs" },
    ],
  },
  {
    label: "Programs",
    children: [
      { label: "Golf Sponsorships", href: "/golf-sponsorships" },
      { label: "Golf Tournament", href: "/golf-tournament" },
      { label: "Local Link Discount", href: "/local-linkdiscounts" },
      { label: "Knight of Heroes Event", href: "/knight-of-heroes-event" },
      { label: "Sponsorship Opportunities", href: "/sponsorshipopps" },
      { label: "Scholarship Recipients", href: "/scholarship-recipients" },
      {
        label: "Teacher Appreciation Event",
        href: "/teacher-appreciation-event",
      },
    ],
  },
  {
    label: "Calendar & Events",
    href: "/calendar",
  },
];

function DropdownMenu({ items }: { items: { label: string; href: string }[] }) {
  return (
    <div
      className="
        absolute top-full left-1/2 -translate-x-1/2 mt-1
        min-w-56 bg-white rounded-lg shadow-xl border border-light-gray
        py-2 z-50
        opacity-0 invisible translate-y-2
        group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
        transition-all duration-200 ease-out
      "
    >
      {items.map((item, idx) => (
        <Link
          key={`${item.href}-${item.label}-${idx}`}
          href={item.href}
          className="
            block px-5 py-2.5
            font-body text-sm font-medium text-primary
            hover:bg-off-white hover:text-teal
            transition-colors duration-150
          "
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
  const mobileRef = useRef<HTMLDivElement>(null);

  // Close mobile menu on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (mobileRef.current && !mobileRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    }
    if (mobileOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [mobileOpen]);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      {/* ── Top bar ── */}
      <div className="bg-primary text-white">
        <div className="section-container flex items-center justify-between py-2 gap-4">
          {/* Contact info */}
          <div className="hidden sm:flex items-center gap-6 text-sm font-body">
            <a
              href="tel:8012800595"
              className="flex items-center gap-1.5 hover:text-bright-teal transition-colors"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              801-280-0595
            </a>
            <a
              href="mailto:Info@mountainwestchamber.org"
              className="flex items-center gap-1.5 hover:text-bright-teal transition-colors"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Info@mountainwestchamber.org
            </a>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-4 ml-auto">
            {/* Social icons */}
            <div className="flex items-center gap-2">
              <a
                href="https://www.facebook.com/MountainWestChamber"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-7 h-7 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <svg
                  className="w-3.5 h-3.5"
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
                className="w-7 h-7 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <svg
                  className="w-3.5 h-3.5"
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
            </div>

            <a
              href="/for-members"
              className="text-sm font-accent font-semibold text-white/90 hover:text-teal transition-colors hidden sm:inline"
            >
              Member Login
            </a>
          </div>
        </div>
      </div>

      {/* ── Main nav bar ── */}
      <div className="section-container">
        <div className="flex items-center justify-between h-24 gap-6">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/mountainwestchamber-logo.webp"
              alt="Mountain West Chamber of Commerce"
              width={200}
              height={70}
              className="h-16 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="group relative">
                {item.children ? (
                  <button
                    className="
                      flex items-center gap-1 px-3 py-2 rounded-md
                      font-accent text-sm font-600 text-primary
                      hover:text-teal hover:bg-off-white
                      transition-colors duration-150
                    "
                  >
                    {item.label}
                    <svg
                      className="w-3.5 h-3.5 mt-0.5 transition-transform duration-200 group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={item.href ?? "#"}
                    className="
                      px-3 py-2 rounded-md
                      font-accent text-sm font-600 text-primary
                      hover:text-teal hover:bg-off-white
                      transition-colors duration-150
                    "
                  >
                    {item.label}
                  </Link>
                )}
                {item.children && <DropdownMenu items={item.children} />}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/becomeamember" className="btn btn-primary btn-sm">
              Become a Member
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md text-primary hover:bg-off-white transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div
          ref={mobileRef}
          className="lg:hidden border-t border-light-gray bg-white"
        >
          <div className="section-px py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenMobileMenu(
                          openMobileMenu === item.label ? null : item.label,
                        )
                      }
                      className="w-full flex items-center justify-between px-3 py-3 rounded-md font-accent text-sm font-semibold text-primary hover:bg-off-white"
                    >
                      {item.label}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${openMobileMenu === item.label ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {openMobileMenu === item.label && (
                      <div className="ml-4 mt-1 space-y-1 border-l-2 border-teal pl-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block py-2 text-sm font-body text-slate-blue hover:text-teal transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href ?? "#"}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-3 rounded-md font-accent text-sm font-semibold text-primary hover:bg-off-white"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-light-gray">
              <Link
                href="/becomeamember"
                className="btn btn-primary w-full justify-center"
                onClick={() => setMobileOpen(false)}
              >
                Become a Member
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
