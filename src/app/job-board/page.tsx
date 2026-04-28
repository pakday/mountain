import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Job Board | Mountain West Chamber of Commerce",
  description:
    "Browse local job openings and post opportunities with the Mountain West Chamber of Commerce — connecting employers and job seekers across Riverton, Herriman, and Bluffdale.",
};

const sampleListings = [
  {
    title: "Office Manager",
    company: "Riverton Family Dental",
    location: "Riverton, UT",
    type: "Full-Time",
    category: "Administration",
    posted: "Apr 22, 2026",
    description:
      "Looking for an experienced office manager to oversee daily operations, scheduling, billing, and patient communications at a growing family practice.",
  },
  {
    title: "Marketing Coordinator",
    company: "Local Realty Group",
    location: "Herriman, UT",
    type: "Part-Time",
    category: "Marketing",
    posted: "Apr 18, 2026",
    description:
      "Help a local real estate team manage social media, email campaigns, listing promotions, and community event presence. Flexible hours available.",
  },
  {
    title: "Event Assistant",
    company: "Mountain West Chamber",
    location: "Riverton, UT",
    type: "Seasonal",
    category: "Events",
    posted: "Apr 15, 2026",
    description:
      "Assist with planning and execution of Chamber events including the Golf Classic, Knight of Heroes Gala, and Teacher Appreciation Luncheon.",
  },
];

const typeColors: Record<string, string> = {
  "Full-Time": "bg-teal/10 text-teal",
  "Part-Time": "bg-primary/10 text-primary",
  Seasonal: "bg-yellow/20 text-primary",
};

export default function Page() {
  return (
    <>
      {/* ── Hero ── */}
      <PageHero
        imageSrc="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1920&q=75"
        imageAlt="Professional shaking hands at a business meeting"
        overlay="absolute inset-0 bg-linear-to-br from-primary/90 via-primary/82 to-slate-blue/75"
        eyebrow="Local Careers"
        title={
          <>
            Job <span className="text-yellow">Board</span>
          </>
        }
        description="Connecting local employers with qualified candidates across Riverton, Herriman, and Bluffdale. Browse open positions or post an opportunity with your community."
        actions={
          <>
            <a href="#listings" className="btn btn-yellow btn-lg">
              Browse Openings
            </a>
            <a href="#post-a-job" className="btn btn-outline-white">
              Post a Job
            </a>
          </>
        }
      />

      {/* ── For Employers / For Job Seekers ── */}
      <section className="py-(--section-l) bg-off-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow mb-3">How It Works</p>
            <h2 className="heading-l text-primary mb-4">
              Built for Our Community
            </h2>
            <div className="section-divider mx-auto mb-5" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Employers */}
            <div className="bg-white rounded-2xl p-8 border border-light-gray shadow-sm flex flex-col gap-5">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="heading-s text-primary">For Employers</h3>
              <p className="font-body text-sm text-ink leading-relaxed">
                Post your open positions directly to the MWCC Job Board and
                reach a community of engaged, local professionals. Chamber
                members receive complimentary listings — non-members may also
                submit for a small fee.
              </p>
              <ul className="flex flex-col gap-2">
                {[
                  "Reach local, pre-qualified candidates",
                  "Free listings for Chamber members",
                  "Listings featured on website &amp; social media",
                  "Simple submission via email or contact form",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg
                      className="w-4 h-4 text-teal mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span
                      className="font-body text-sm text-ink"
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* Job Seekers */}
            <div className="bg-white rounded-2xl p-8 border border-light-gray shadow-sm flex flex-col gap-5">
              <div className="w-11 h-11 rounded-xl bg-teal/10 flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5 text-teal"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="heading-s text-primary">For Job Seekers</h3>
              <p className="font-body text-sm text-ink leading-relaxed">
                Discover jobs with local businesses you already know and trust.
                Every employer listed here is part of the MWCC community —
                businesses that are invested in the Riverton, Herriman, and
                Bluffdale area.
              </p>
              <ul className="flex flex-col gap-2">
                {[
                  "Browse open positions from local employers",
                  "Apply directly to each company",
                  "Connect through Chamber networking events",
                  "Free to browse — no account required",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg
                      className="w-4 h-4 text-teal mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="font-body text-sm text-ink">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Job Listings ── */}
      <section id="listings" className="py-(--section-l) bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow mb-3">Open Positions</p>
            <h2 className="heading-l text-primary mb-4">
              Current Job Listings
            </h2>
            <div className="section-divider mx-auto mb-5" />
            <p className="font-body text-ink text-base leading-relaxed">
              The following positions are currently available with Chamber
              member businesses. Contact each employer directly to apply.
            </p>
          </div>

          <div className="flex flex-col gap-5 max-w-4xl mx-auto">
            {sampleListings.map((job) => (
              <div
                key={job.title + job.company}
                className="bg-off-white rounded-2xl border border-light-gray p-7 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="heading-xs text-primary mb-1">
                      {job.title}
                    </h3>
                    <p className="font-body text-sm text-ink font-semibold">
                      {job.company}
                    </p>
                    <p className="font-body text-sm text-ink/60 mt-0.5">
                      {job.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0 flex-wrap">
                    <span
                      className={`text-xs font-accent font-semibold uppercase tracking-wide px-3 py-1 rounded-full ${
                        typeColors[job.type] ?? "bg-light-gray text-ink"
                      }`}
                    >
                      {job.type}
                    </span>
                    <span className="text-xs font-accent font-semibold uppercase tracking-wide px-3 py-1 rounded-full bg-light-gray text-ink">
                      {job.category}
                    </span>
                  </div>
                </div>
                <p className="font-body text-sm text-ink leading-relaxed mb-5">
                  {job.description}
                </p>
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <span className="font-body text-xs text-ink/50">
                    Posted {job.posted}
                  </span>
                  <Link href="/contactus" className="btn btn-outline btn-sm">
                    Apply / Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center font-body text-sm text-ink/50 mt-10">
            Listings are added as they are submitted by Chamber members.{" "}
            <a href="#post-a-job" className="text-primary hover:underline">
              Post your opening today.
            </a>
          </p>
        </div>
      </section>

      {/* ── Post a Job CTA ── */}
      <section
        id="post-a-job"
        className="py-(--section-xl) bg-primary relative overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative z-10 container">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="eyebrow text-teal mb-4">Hiring Locally</p>
              <h2 className="heading-xl text-white mb-5">
                Post a Job <span className="text-yellow">Opening</span>
              </h2>
              <p className="font-body text-white/75 text-base leading-relaxed mb-8">
                Ready to find your next team member? Submit your listing and
                we&rsquo;ll get it in front of the local community. Chamber
                members post for free — reach out to get started.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contactus" className="btn btn-yellow btn-lg">
                  Submit a Job Listing
                </Link>
                <Link href="/becomeamember" className="btn btn-outline-white">
                  Become a Member
                </Link>
              </div>
            </div>

            <div className="bg-white/10 rounded-2xl p-8 flex flex-col gap-5">
              <h3 className="heading-s text-white mb-1">What to Include</h3>
              {[
                "Job title and department",
                "Full-time, part-time, or seasonal",
                "Brief job description (2–4 sentences)",
                "How to apply (email, link, or phone)",
                "Contact name for the listing",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <svg
                    className="w-4 h-4 text-yellow mt-1 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4"
                    />
                  </svg>
                  <span className="font-body text-white/85 text-sm">
                    {item}
                  </span>
                </div>
              ))}
              <p className="font-body text-white/50 text-xs mt-2">
                Send listings to{" "}
                <a
                  href="mailto:Info@mountainwestchamber.org"
                  className="text-yellow hover:underline"
                >
                  Info@mountainwestchamber.org
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
