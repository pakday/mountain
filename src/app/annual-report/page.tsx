import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { StatCard } from "@/components/Cards";

export const metadata: Metadata = {
  title: "Annual Report | Mountain West Chamber of Commerce",
  description:
    "Review the Mountain West Chamber of Commerce annual report — a year-in-review of our impact, programs, financials, and community milestones.",
};

const yearStats = [
  { value: "300+", label: "Active Member Businesses" },
  { value: "$85K+", label: "In Scholarships Awarded" },
  { value: "25+", label: "Annual Events Hosted" },
  { value: "27", label: "Years Serving Utah" },
];

const highlights = [
  {
    year: "2024",
    title: "Annual Report",
    description:
      "A full review of 2024 — including event highlights, scholarship awards, community partnerships, and membership growth across Riverton, Herriman, and Bluffdale.",
    status: "available" as const,
    href: "#",
  },
  {
    year: "2023",
    title: "Annual Report",
    description:
      "2023 in review — covering the Knight of Heroes Gala, Golf Classic, Teacher Appreciation Luncheon, and our community give-back milestones.",
    status: "available" as const,
    href: "#",
  },
  {
    year: "2022",
    title: "Annual Report",
    description:
      "Celebrating a milestone year of growth, reconnecting businesses and communities following the challenges of previous years.",
    status: "available" as const,
    href: "#",
  },
];

const keyAccomplishments = [
  {
    title: "Scholarship Awards",
    description:
      "The Annual Scholarship Golf Classic raised funds to award deserving local high school students scholarships to pursue their futures.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
      />
    ),
  },
  {
    title: "Teacher Recognition",
    description:
      "Our annual Teacher Appreciation Luncheon honored 25 outstanding local educators who go above and beyond in their classrooms.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      />
    ),
  },
  {
    title: "Community Partnerships",
    description:
      "Strengthened ties with city governments, schools, and neighboring chambers through the Western Growth Coalition and Legislative Roundup.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
      />
    ),
  },
  {
    title: "Business Growth",
    description:
      "Membership grew with new ribbon cuttings, monthly Connect & Learn events, and a thriving Women in Business program that supported local entrepreneurs.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
      />
    ),
  },
];

export default function Page() {
  return (
    <>
      {/* ── Hero ── */}
      <PageHero
        imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=75"
        imageAlt="Business analytics and charts representing annual report"
        overlay="absolute inset-0 bg-linear-to-br from-primary/92 via-primary/85 to-slate-blue/80"
        eyebrow="Transparency & Impact"
        title={
          <>
            Annual <span className="text-yellow">Report</span>
          </>
        }
        description="A year-in-review of our community impact, signature programs, membership growth, and the businesses that make it all possible."
        actions={
          <>
            <a href="#reports" className="btn btn-yellow btn-lg">
              View Reports
            </a>
            <Link href="/aboutus" className="btn btn-outline-white">
              Our Story
            </Link>
          </>
        }
      />

      {/* ── Year at a Glance ── */}
      <section className="bg-primary py-14">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:divide-x md:divide-white/20">
            {yearStats.map((s) => (
              <StatCard key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Key Accomplishments ── */}
      <section className="py-(--section-l) bg-off-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow mb-3">2024 Highlights</p>
            <h2 className="heading-l text-primary mb-4">
              What We Accomplished Together
            </h2>
            <div className="section-divider mx-auto mb-5" />
            <p className="font-body text-ink text-base leading-relaxed">
              Every event, every scholarship, and every connection made in the
              past year is a reflection of our members&rsquo; commitment to
              community.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyAccomplishments.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-7 border border-light-gray shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-teal/10 flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-teal"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {item.icon}
                  </svg>
                </div>
                <h3 className="heading-xs text-primary">{item.title}</h3>
                <p className="font-body text-sm text-ink leading-relaxed flex-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Annual Reports Archive ── */}
      <section id="reports" className="py-(--section-l) bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow mb-3">Archive</p>
            <h2 className="heading-l text-primary mb-4">
              Download Annual Reports
            </h2>
            <div className="section-divider mx-auto mb-5" />
            <p className="font-body text-ink text-base leading-relaxed">
              Each annual report captures the Chamber&rsquo;s work, financials,
              and community impact for that year.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {highlights.map((report) => (
              <div
                key={report.year}
                className="rounded-2xl border border-light-gray bg-off-white overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                {/* color bar */}
                <div className="h-2 bg-primary w-full" />
                <div className="p-7 flex flex-col gap-4 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="heading-s text-primary font-bold">
                      {report.year}
                    </span>
                    {report.status === "available" ? (
                      <span className="text-xs font-accent font-semibold uppercase tracking-wide text-teal bg-teal/10 px-3 py-1 rounded-full">
                        Available
                      </span>
                    ) : (
                      <span className="text-xs font-accent font-semibold uppercase tracking-wide text-ink/50 bg-light-gray px-3 py-1 rounded-full">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <h3 className="heading-xs text-ink">
                    {report.year} {report.title}
                  </h3>
                  <p className="font-body text-sm text-ink leading-relaxed flex-1">
                    {report.description}
                  </p>
                  <a
                    href={report.href}
                    className="btn btn-outline w-full text-center mt-2"
                    aria-label={`Download ${report.year} Annual Report (PDF)`}
                  >
                    Download PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-(--section-xl) bg-primary relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative z-10 container text-center">
          <p className="eyebrow text-teal mb-4">Together We Are Stronger</p>
          <h2 className="heading-xl text-white mb-5">
            Be Part of Next Year&rsquo;s{" "}
            <span className="text-yellow">Story</span>
          </h2>
          <p className="font-body text-white/75 text-base leading-relaxed max-w-2xl mx-auto mb-10">
            Every membership, sponsorship, and volunteer hour adds to our
            community impact. Join us and help write the next chapter.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/becomeamember" className="btn btn-yellow btn-lg">
              Become a Member
            </Link>
            <Link href="/contactus" className="btn btn-outline-white">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
