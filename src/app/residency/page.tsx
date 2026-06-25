import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Business Residency | Mountain West Chamber of Commerce",
  description:
    "The Mountain West Chamber Residency Program provides emerging businesses with the resources, mentorship, and community connections they need to grow in South Utah Valley.",
};

/* ─── Data ──────────────────────────────────────────────────────── */

const features = [
  {
    title: "Dedicated Workspace Access",
    description:
      "Resident businesses gain access to shared workspace, meeting rooms, and a professional address in the heart of the South Utah Valley business community.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    ),
  },
  {
    title: "Mentorship & Coaching",
    description:
      "Connect with experienced Chamber members and local business leaders who offer one-on-one guidance tailored to your industry and growth stage.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
      />
    ),
  },
  {
    title: "Full Chamber Membership",
    description:
      "Residents receive full Chamber membership benefits — including event access, member directory listing, and invitations to monthly networking luncheons.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
      />
    ),
  },
  {
    title: "Peer Network & Community",
    description:
      "Join a cohort of fellow resident businesses. Share challenges, celebrate wins, and build the relationships that carry your business forward long after residency ends.",
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
    title: "Marketing & Visibility",
    description:
      "Get featured in Chamber communications, social media spotlights, and the member directory — putting your brand in front of 300+ active businesses from day one.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
      />
    ),
  },
  {
    title: "Resources & Workshops",
    description:
      "Access curated workshops on topics like business planning, digital marketing, financial literacy, and government affairs — hosted by Chamber partners and subject-matter experts.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    ),
  },
];

const eligibility = [
  {
    label: "Early-stage businesses",
    body: "Startups and businesses in their first three years of operation looking to accelerate their growth.",
  },
  {
    label: "Relocating businesses",
    body: "Companies moving into Riverton, Herriman, or Bluffdale who want to establish roots in the local business community quickly.",
  },
  {
    label: "Sole proprietors & freelancers",
    body: "Independent professionals seeking a professional base, structured support, and peer connections.",
  },
  {
    label: "Community-focused ventures",
    body: "Businesses whose work directly benefits the South Utah Valley community — service-based, retail, professional, or nonprofit.",
  },
];

const steps = [
  {
    number: "01",
    title: "Apply",
    body: "Submit a brief application describing your business, stage, and goals. Applications are reviewed on a rolling basis.",
  },
  {
    number: "02",
    title: "Interview",
    body: "Meet with the Chamber team for a short conversation to learn more about your business and how the residency can best support you.",
  },
  {
    number: "03",
    title: "Onboard",
    body: "Complete your onboarding, get your Chamber membership activated, and meet your fellow residents and Chamber mentors.",
  },
  {
    number: "04",
    title: "Grow",
    body: "Participate in workshops, attend events, leverage your network, and build the business you came here to build.",
  },
];

/* ─── Page ───────────────────────────────────────────────────────── */

export default function Page() {
  return (
    <>
      {/* ── Hero ── */}
      <PageHero
        imageSrc="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=75"
        imageAlt="Modern collaborative workspace for growing businesses"
        overlay="absolute inset-0 bg-linear-to-br from-primary/93 via-primary/82 to-slate-blue/75"
        eyebrow="Programs"
        title={
          <>
            Business <span className="text-yellow">Residency</span>
          </>
        }
        description="A structured program for emerging and relocating businesses to plant roots, find mentors, and grow within the Mountain West Chamber community."
        actions={
          <>
            <Link href="/contactus" className="btn btn-yellow btn-lg">
              Apply for Residency
            </Link>
            <Link href="/programs" className="btn btn-outline-white">
              All Programs
            </Link>
          </>
        }
      />

      {/* ── What Is the Residency ── */}
      <section className="py-(--section-l) bg-off-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="eyebrow mb-4">About the Program</p>
              <h2 className="heading-l text-primary mb-5">
                A Home Base for Growing Businesses
              </h2>
              <div className="section-divider mb-6" />
              <p className="font-body text-ink text-base leading-relaxed mb-5">
                The Mountain West Chamber Residency is designed to give emerging
                and early-stage businesses a running start. Rather than
                navigating your first years alone, you become part of an active,
                supportive community of business owners who want to see you
                succeed.
              </p>
              <p className="font-body text-ink text-base leading-relaxed mb-8">
                Residents gain access to workspace, mentorship, Chamber
                membership benefits, and a peer network — everything you need to
                establish credibility and build momentum in Riverton, Herriman,
                and Bluffdale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contactus" className="btn btn-primary">
                  Apply Now
                </Link>
                <Link href="/becomeamember" className="btn btn-outline">
                  Explore Membership
                </Link>
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-5">
              {[
                { value: "12 mo.", label: "Residency Period" },
                { value: "300+", label: "Chamber Members in Your Network" },
                { value: "3", label: "Cities in Our Community" },
                { value: "27+", label: "Years of Chamber Experience" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white rounded-2xl p-7 border border-light-gray text-center shadow-sm"
                >
                  <p className="heading-m text-primary font-bold">{s.value}</p>
                  <p className="font-body text-sm text-ink/70 mt-2 leading-snug">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Program Features ── */}
      <section className="py-(--section-l) bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow mb-3">What&rsquo;s Included</p>
            <h2 className="heading-l text-primary mb-4">
              Everything You Need to Grow
            </h2>
            <div className="section-divider mx-auto mb-5" />
            <p className="font-body text-ink text-base leading-relaxed">
              The Residency Program bundles the most valuable Chamber benefits
              into a focused package for businesses that are just getting
              started.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-off-white rounded-2xl p-7 border border-light-gray hover:shadow-md transition-shadow duration-300 flex flex-col gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {f.icon}
                  </svg>
                </div>
                <h3 className="heading-xs text-primary">{f.title}</h3>
                <p className="font-body text-sm text-ink leading-relaxed flex-1">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who Is This For ── */}
      <section className="py-(--section-l) bg-primary">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="eyebrow text-teal mb-4">Eligibility</p>
              <h2 className="heading-l text-white mb-5">
                Is the Residency Right for You?
              </h2>
              <div className="section-divider bg-yellow/40 mb-6" />
              <p className="font-body text-white/80 text-base leading-relaxed mb-5">
                The Residency is open to a wide range of business types and
                stages. If you&rsquo;re building something new, finding your
                footing in a new market, or simply looking for a supportive
                professional community, the Residency was built for you.
              </p>
              <Link href="/contactus" className="btn btn-yellow">
                Talk to Us About Applying
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              {eligibility.map((e) => (
                <div
                  key={e.label}
                  className="bg-white/8 rounded-2xl p-6 border border-white/15 flex items-start gap-4"
                >
                  <div className="w-2 h-2 rounded-full bg-teal mt-2.5 shrink-0" />
                  <div>
                    <p className="heading-2xs text-white mb-1">{e.label}</p>
                    <p className="font-body text-sm text-white/70 leading-relaxed">
                      {e.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How to Apply ── */}
      <section className="py-(--section-l) bg-off-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow mb-3">Application Process</p>
            <h2 className="heading-l text-primary mb-4">
              How to Join the Residency
            </h2>
            <div className="section-divider mx-auto mb-5" />
            <p className="font-body text-ink text-base leading-relaxed">
              Getting started is simple. We keep the process straightforward so
              you can focus on building your business.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-white rounded-2xl p-7 border border-light-gray shadow-sm flex flex-col gap-4"
              >
                <span className="heading-m text-primary/20 font-bold leading-none">
                  {step.number}
                </span>
                <h3 className="heading-xs text-primary">{step.title}</h3>
                <p className="font-body text-sm text-ink leading-relaxed flex-1">
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          {/* CTA card */}
          <div className="bg-white rounded-3xl border border-light-gray p-10 lg:p-14 text-center max-w-3xl mx-auto">
            <p className="eyebrow mb-4">Ready to Apply?</p>
            <h2 className="heading-m text-primary mb-4">
              Start Building Your Business Here
            </h2>
            <p className="font-body text-ink text-base leading-relaxed mb-8">
              Applications are reviewed on a rolling basis. Reach out to the
              Chamber team to learn more about current availability and the next
              cohort start date.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contactus" className="btn btn-primary btn-lg">
                Apply for Residency
              </Link>
              <Link href="/programs" className="btn btn-outline">
                Explore All Programs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
