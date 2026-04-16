import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { MembershipTierCard, StatCard } from "@/components/Cards";

export const metadata: Metadata = {
  title: "Become a Member | Mountain West Chamber of Commerce",
  description:
    "Join Mountain West Chamber of Commerce. Choose from Core, Independent, or Nonprofit membership tiers and grow your business in Riverton, Herriman, and Bluffdale.",
};

/* ── Membership tier data ── */
const memberships = [
  {
    label: "Core Membership",
    price: "$400",
    period: "/ year",
    highlight: true,
    tag: "Most Popular",
    description:
      "For businesses who want to be known, trusted, and connected in the communities they serve.",
    cta: "Join Now",
    href: "https://mountainwestchamber.org/join",
    accent: "bg-teal",
  },
  {
    label: "Independent & Solo",
    price: "$275",
    period: "/ year",
    highlight: false,
    tag: null,
    description:
      "Designed for solo or independent businesses who want an equal seat at the table — with community connection and opportunities to learn, share, and grow.",
    cta: "Join Now",
    href: "https://mountainwestchamber.org/join",
    accent: "bg-slate-blue",
  },
  {
    label: "Nonprofit Membership",
    price: "$225",
    period: "/ year",
    highlight: false,
    tag: null,
    description:
      "For mission-driven organizations looking for collaboration, increased awareness, and deeper connections with local businesses.",
    cta: "Join Now",
    href: "https://mountainwestchamber.org/join",
    accent: "bg-primary",
  },
  {
    label: "Women in Business",
    price: "$125",
    period: "/ year",
    highlight: false,
    tag: "Included w/ Regular Membership",
    description:
      "A 1-year membership for women entrepreneurs and professionals. Included at no extra cost with any standard membership.",
    cta: "Learn More",
    href: "/why-become-a-member",
    accent: "bg-teal-dark",
  },
];

/* ── Stat card (Shapiro study) ── */
const stats = [
  { pct: "49%", label: "increase in favorable consumer ratings" },
  { pct: "73%", label: "increase in consumer awareness" },
  { pct: "68%", label: "increase in local reputation" },
  {
    pct: "80%",
    label: "increase in likelihood consumers will patronize the business",
  },
];

export default function Page() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-72 flex items-center overflow-hidden bg-primary">
        {/* background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=75"
            alt="Community members at a local ribbon cutting event"
            fill
            priority
            className="object-cover object-center opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-b from-primary/60 via-primary/50 to-primary/80" />
        </div>

        <div className="section-container max-w-7xl w-full relative z-10 py-24">
          <p className="eyebrow text-teal mb-4">
            Mountain West Chamber of Commerce
          </p>
          <h1 className="heading-2xl text-white mb-4 max-w-2xl">
            Become a Member
          </h1>
          <div className="section-divider bg-yellow mb-6" />
          <p className="font-body text-lg text-white/80 leading-relaxed max-w-xl">
            Improve your success with membership — connect, grow, and give back
            alongside the region&apos;s most engaged business community.
          </p>
        </div>
      </section>

      {/* ── NEW Memberships ── */}
      <section className="py-20 bg-off-white">
        <div className="section-container max-w-7xl w-full">
          {/* heading */}
          <div className="text-center mb-14">
            <p className="eyebrow text-teal mb-3">New for 2025</p>
            <h2 className="heading-xl text-primary mb-4">
              Choose Your Membership
            </h2>
            <div className="section-divider bg-teal mx-auto mb-6" />
            <p className="font-body text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Whether you&apos;re a growing business, a solo operator, or a
              nonprofit leader — there&apos;s a membership built for you.
            </p>
          </div>

          {/* tier grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
            {memberships.map((m) => (
              <MembershipTierCard
                key={m.label}
                title={m.label}
                price={m.price}
                period={m.period}
                description={m.description}
                highlight={m.highlight}
                tag={m.tag}
                ctaLabel={m.cta}
                href={m.href}
                accentClass={m.accent}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Renew CTA banner ── */}
      <section className="py-16 bg-primary">
        <div className="section-container max-w-7xl w-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="heading-lg text-white mb-2">Already a Member?</h2>
              <p className="font-body text-white/75 text-base leading-relaxed max-w-lg">
                Keep your membership active and continue enjoying all the
                benefits of being part of the Mountain West Chamber community.
              </p>
            </div>
            <Link href="/renew" className="btn btn-yellow btn-lg shrink-0">
              Renew Your Membership
            </Link>
          </div>
        </div>
      </section>

      {/* ── Shapiro Study / Social Proof ── */}
      <section className="py-20 bg-white">
        <div className="section-container max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* copy */}
            <div>
              <p className="eyebrow text-teal mb-3">Research-Backed Impact</p>
              <h2 className="heading-xl text-primary mb-4">
                Chamber Membership Has a Major Impact on Small Businesses
              </h2>
              <div className="section-divider mb-6" />
              <p className="font-body text-base text-slate-500 leading-relaxed mb-4">
                Small businesses represent the largest segment of most local
                chamber membership rolls. This study indicates that chamber
                membership has consistent and powerful benefits: if consumers
                know a small business is a chamber member, that business enjoys
                significantly higher trust and visibility.
              </p>
              <p className="font-body text-xs text-slate-400 italic">
                — Shapiro Study, 2012
              </p>
            </div>

            {/* stats grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((s) => (
                <StatCard
                  key={s.pct}
                  variant="card"
                  value={s.pct}
                  label={s.label}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-20 bg-light-gray">
        <div className="section-container max-w-3xl w-full text-center">
          <p className="eyebrow text-teal mb-3">Ready to Get Started?</p>
          <h2 className="heading-xl text-primary mb-4">
            Together We Are Stronger
          </h2>
          <div className="section-divider bg-teal mx-auto mb-6" />
          <p className="font-body text-base text-slate-500 leading-relaxed mb-10 max-w-xl mx-auto">
            Join the Mountain West Chamber of Commerce and become part of a
            vibrant business community serving Riverton, Herriman, and Bluffdale
            since 1997.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#memberships" className="btn btn-primary btn-lg">
              View Membership Options
            </Link>
            <Link href="/contactus" className="btn btn-outline btn-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
