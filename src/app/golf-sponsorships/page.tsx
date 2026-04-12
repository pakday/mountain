import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Golf Sponsorships",
  description:
    "Sponsor the Annual Scholarship Golf Tournament and support local students.",
};

interface SponsorTier {
  tier: string;
  price: string;
  icon: string;
  color: string;
  accentColor: string;
  badge?: string;
  benefits: string[];
  note?: string;
  sponsors?: { src: string; alt: string }[];
  registerUrl: string;
}

const sponsorTiers: SponsorTier[] = [
  {
    tier: "Presenting Sponsor",
    price: "$2,500",
    icon: "/Structure/Programs/golf-sponsorships/Mountain_West_Chamber_Web_Presenter+Sponsor.png",
    color: "bg-primary",
    accentColor: "text-yellow",
    badge: "Most Prestigious",
    benefits: [
      "Opportunity to speak during Awards Luncheon",
      "Company logo prominently displayed on promotional material, registration site, and day of event",
      "Three spotlight posts on social media",
      "Banner Ad on website for one month",
      "One hole sponsor — See hole sponsor for details",
      "Two Foursomes",
    ],
    note: "Select Presenting Sponsor When Registering",
    registerUrl:
      "https://lp.constantcontactpages.com/ev/reg/hya9mx9/lp/19b74e5b-e44c-4a6a-ac98-9e9e969b534a",
  },
  {
    tier: "Eagle Sponsor",
    price: "$1,800",
    icon: "/Structure/Programs/golf-sponsorships/Mountain_West_Chamber_Web_Eagle+Sponsor.png",
    color: "bg-slate-blue",
    accentColor: "text-teal",
    benefits: [
      "Company recognition during luncheon",
      "Company logo prominently displayed on promotional material, registration site, and day of event",
      "Two video spotlight posts on social media",
      "Banner Ad on website for two weeks",
      "One hole sponsor — See hole sponsor for details",
      "One Foursome",
    ],
    note: "Select Eagle Sponsor when Registering",
    registerUrl:
      "https://lp.constantcontactpages.com/ev/reg/hya9mx9/lp/19b74e5b-e44c-4a6a-ac98-9e9e969b534a",
  },
  {
    tier: "Birdie Sponsor",
    price: "$1,400",
    icon: "/Structure/Programs/golf-sponsorships/Mountain_West_Chamber_Web_Birdie+Sponsor.png",
    color: "bg-teal-dark",
    accentColor: "text-yellow",
    benefits: [
      "One hole sponsor — See hole sponsor for details",
      "One spotlight post on social media",
      "Two additional seats at luncheon (for hole sponsor attendees)",
      "One Foursome",
    ],
    note: "Select Birdie Sponsor when Registering",
    sponsors: [
      {
        src: "/Structure/Programs/golf-sponsorships/uccu_logo.png",
        alt: "Utah Community Credit Union",
      },
      {
        src: "/Structure/Programs/golf-sponsorships/Canyon_View_Logo_Stacked_RG_1000x450.jpg",
        alt: "Canyon View Credit Union",
      },
    ],
    registerUrl:
      "https://lp.constantcontactpages.com/ev/reg/hya9mx9/lp/19b74e5b-e44c-4a6a-ac98-9e9e969b534a",
  },
  {
    tier: "Hole Sponsor",
    price: "$600",
    icon: "/Structure/Programs/golf-sponsorships/Mountain_West_Chamber_Web_Hole_Sponsor.png",
    color: "bg-primary",
    accentColor: "text-teal",
    benefits: [
      "Signage with company logo on tee box",
      "Tee box access for company to promote themselves",
      "Two seats at the Awards Luncheon",
    ],
    registerUrl:
      "https://lp.constantcontactpages.com/ev/reg/hya9mx9/lp/19b74e5b-e44c-4a6a-ac98-9e9e969b534a",
  },
  {
    tier: "Meal Sponsor",
    price: "$1,600",
    icon: "/Structure/Programs/golf-sponsorships/Mountain_West_Chamber_Web_Luncheon+Sponsor.png",
    color: "bg-slate-blue",
    accentColor: "text-yellow",
    benefits: [
      "Company recognition during Awards Luncheon",
      "Company logo prominently displayed on promotional material, registration site, and day of event",
      "Company logo displayed at Awards Luncheon table and surrounding area",
      "One Foursome",
    ],
    registerUrl:
      "https://lp.constantcontactpages.com/ev/reg/hya9mx9/lp/19b74e5b-e44c-4a6a-ac98-9e9e969b534a",
  },
  {
    tier: "Cart Sponsor",
    price: "$1,200",
    icon: "/Structure/Programs/golf-sponsorships/Mountain_West_Chamber_Web_Cart+Sponsor.png",
    color: "bg-teal-dark",
    accentColor: "text-yellow",
    benefits: [
      "Company name listed on registration website",
      "Company name and logo on all golf carts",
      "Company recognition during the Awards Luncheon",
      "First access to swag in golf carts",
      "One Foursome",
    ],
    registerUrl:
      "https://lp.constantcontactpages.com/ev/reg/hya9mx9/lp/19b74e5b-e44c-4a6a-ac98-9e9e969b534a",
  },
  {
    tier: "Contest Sponsor",
    price: "$150",
    icon: "/Structure/Programs/golf-sponsorships/Mountain_West_Chamber_Web_Contest+Sponsor.png",
    color: "bg-primary",
    accentColor: "text-teal",
    benefits: [
      "Longest Drive Men & Women — signage on hole",
      "Closest to the Pin Men & Women — signage on hole",
      "Hole in One — signage on hole",
      "You get to announce awards to winners at luncheon",
    ],
    sponsors: [
      {
        src: "/Structure/Programs/golf-sponsorships/novel+expression+logo.png",
        alt: "Novel Expressions",
      },
      {
        src: "/Structure/Programs/golf-sponsorships/True+Pros+HVAC.png",
        alt: "True Pros Heating and Air",
      },
      {
        src: "/Structure/Programs/golf-sponsorships/Rex+Ind.+.jpg",
        alt: "Rex Industries",
      },
    ],
    registerUrl:
      "https://lp.constantcontactpages.com/ev/reg/hya9mx9/lp/19b74e5b-e44c-4a6a-ac98-9e9e969b534a",
  },
];

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 shrink-0 mt-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function SponsorCard({ tier }: { tier: SponsorTier }) {
  const isFeatured = tier.badge != null;
  return (
    <div
      className={`relative flex flex-col rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl`}
    >
      {/* Badge */}
      {isFeatured && (
        <div className="absolute top-4 right-4 z-10 bg-yellow text-primary font-accent text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow">
          {tier.badge}
        </div>
      )}

      {/* Header */}
      <div className={`${tier.color} px-7 pt-8 pb-6 flex flex-col gap-4`}>
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-white/15 rounded-xl flex items-center justify-center">
            <Image
              src={tier.icon}
              alt={tier.tier}
              width={36}
              height={36}
              className="object-contain"
            />
          </div>
          <div>
            <p className="eyebrow text-white/60 mb-0.5">{tier.tier}</p>
            <p className={`heading-lg ${tier.accentColor} font-800`}>
              {tier.price}
            </p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="bg-white flex-1 px-7 py-6 flex flex-col gap-5">
        <ul className="flex flex-col gap-2.5">
          {tier.benefits.map((b, i) => (
            <li
              key={i}
              className="flex gap-2.5 text-slate-600 font-body text-sm leading-snug"
            >
              <span className="text-teal-dark">
                <CheckIcon />
              </span>
              {b}
            </li>
          ))}
        </ul>

        {/* Existing sponsors */}
        {tier.sponsors && tier.sponsors.length > 0 && (
          <div>
            <p className="eyebrow text-slate-400 mb-3">Current Sponsors</p>
            <div className="flex flex-wrap gap-3 items-center">
              {tier.sponsors.map((s, i) => (
                <div
                  key={i}
                  className="h-10 relative w-28 bg-light-gray rounded-lg overflow-hidden"
                >
                  <Image
                    src={s.src}
                    alt={s.alt}
                    fill
                    className="object-contain p-1"
                    sizes="112px"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Note */}
        {tier.note && (
          <p className="text-xs text-slate-400 italic font-body">{tier.note}</p>
        )}

        <div className="mt-auto pt-2">
          <a
            href={tier.registerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn w-full justify-center ${isFeatured ? "btn-yellow" : "btn-primary"}`}
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Structure/Programs/golf-sponsorships/unsplash-image-uy5ZEqUOscs.jpg"
            alt="Golf tournament"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-r from-primary/92 via-primary/75 to-slate-blue/50" />
        </div>
        <div className="relative z-10 section-container max-w-7xl pb-24 pt-32">
          <p className="eyebrow text-teal mb-4">
            Mountain West Chamber of Commerce
          </p>
          <h1
            className="heading-3xl text-white mb-4"
            style={{ lineHeight: 1.05 }}
          >
            Golf <span className="text-yellow">Sponsorships</span>
          </h1>
          <p className="font-body text-lg text-white/80 max-w-xl leading-relaxed mb-8">
            Make a lasting impact — sponsor the Annual Scholarship Golf Classic
            and align your brand with a community fundraiser supporting local
            high school students.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://lp.constantcontactpages.com/ev/reg/hya9mx9/lp/19b74e5b-e44c-4a6a-ac98-9e9e969b534a"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-yellow btn-lg"
            >
              Register to Sponsor
            </a>
            <Link
              href="/golf-tournament"
              className="btn btn-outline-white btn-lg"
            >
              View Tournament Info
            </Link>
          </div>
        </div>
      </section>

      {/* ─── INTRO BANNER ─── */}
      <section className="bg-light-gray py-14">
        <div className="section-container max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                value: "144",
                label: "Golfers Each Year",
                desc: "Local business owners & avid golfers",
              },
              {
                value: "7",
                label: "Sponsorship Tiers",
                desc: "Options from $150 to $2,500",
              },
              {
                value: "100%",
                label: "Goes to Scholarships",
                desc: "All proceeds fund high school students",
              },
            ].map((stat) => (
              <div
                key={stat.value}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <div className="heading-2xl text-primary font-800 mb-1">
                  {stat.value}
                </div>
                <div className="font-accent font-700 text-sm uppercase tracking-wider text-teal-dark mb-2">
                  {stat.label}
                </div>
                <p className="font-body text-sm text-slate-500">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DETAILS CALLOUT ─── */}
      <section className="py-16 bg-white">
        <div className="section-container max-w-4xl text-center">
          <div className="section-divider mx-auto mb-6" />
          <h2 className="heading-xl text-primary mb-4">Sponsorship Details</h2>
          <p className="font-body text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            The 144 players include local business owners and avid golfers. This
            is a fundraiser for the high school scholarship program. Choose the
            sponsorship level that fits your budget and marketing goals — each
            tier offers unique brand visibility and recognition opportunities.
          </p>
        </div>
      </section>

      {/* ─── SPONSORSHIP TIERS GRID ─── */}
      <section className="py-16 bg-off-white">
        <div className="section-container max-w-7xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {sponsorTiers.map((tier) => (
              <SponsorCard key={tier.tier} tier={tier} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CURRENT SPONSORS BANNER ─── */}
      <section className="py-16 bg-primary">
        <div className="section-container max-w-7xl text-center">
          <p className="eyebrow text-teal mb-3">Thank You</p>
          <h2 className="heading-xl text-white mb-10">Our Event Sponsors</h2>
          <div className="flex flex-wrap justify-center gap-6 items-center">
            {[
              {
                src: "/Structure/Programs/golf-sponsorships/21_AFCULogos_Horizontal-stacked_white-scaled.jpg",
                alt: "America First Credit Union",
              },
              {
                src: "/Structure/Programs/golf-sponsorships/BroomheadFH-logo-final1+copy.jpg",
                alt: "Broomhead Funeral Home",
              },
              {
                src: "/Structure/Programs/golf-sponsorships/Canyon_View_Logo_Stacked_RG_1000x450.jpg",
                alt: "Canyon View Credit Union",
              },
              {
                src: "/Structure/Programs/golf-sponsorships/JEF_Color(horizontal).png",
                alt: "Jordan Education Foundation",
              },
              {
                src: "/Structure/Programs/golf-sponsorships/TJ+Olson+SF+Logo.jpg",
                alt: "State Farm - T.J. Olson",
              },
              {
                src: "/Structure/Programs/golf-sponsorships/uccu_logo.png",
                alt: "Utah Community Credit Union",
              },
            ].map((s) => (
              <div
                key={s.alt}
                className="relative h-16 w-36 bg-white/10 rounded-xl overflow-hidden"
              >
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  className="object-contain p-2"
                  sizes="144px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-white">
        <div className="section-container max-w-3xl text-center">
          <div className="section-divider mx-auto mb-6" />
          <h2 className="heading-xl text-primary mb-4">
            Ready to Become a Sponsor?
          </h2>
          <p className="font-body text-base text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto">
            Join leading local businesses in supporting youth scholarships while
            gaining invaluable brand exposure at one of the Southwest Valley's
            most attended business events.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://lp.constantcontactpages.com/ev/reg/hya9mx9/lp/19b74e5b-e44c-4a6a-ac98-9e9e969b534a"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              Register to Sponsor
            </a>
            <Link href="/contactus" className="btn btn-outline btn-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
