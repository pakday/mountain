import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Golf Sponsorships — Mountain West Chamber",
  description:
    "Sponsor the Annual Scholarship Golf Classic and support local high school students. Choose from seven sponsorship tiers from $150 to $2,500.",
};

interface SponsorTier {
  tier: string;
  price: string;
  icon: string;
  borderClass: string;
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
    borderClass: "border-yellow",
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
    borderClass: "border-teal",
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
    borderClass: "border-primary",
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
    borderClass: "border-teal",
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
    borderClass: "border-yellow",
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
    borderClass: "border-primary",
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
    borderClass: "border-teal",
    benefits: [
      "Longest Drive Men & Women — signage on hole",
      "and/or Closest to the Pin Men & Women — signage on hole",
      "and/or Hole in One — signage on hole",
      "You get to announce awards to winners at luncheon",
    ],
    sponsors: [
      {
        src: "/Structure/Programs/golf-sponsorships/novel+expression+logo.png",
        alt: "Novel Expression",
      },
      {
        src: "/Structure/Programs/golf-sponsorships/True+Pros+HVAC.png",
        alt: "True Pros HVAC",
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
      className="w-4 h-4 shrink-0 mt-0.5 text-teal"
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
  return (
    <div className="relative flex flex-col bg-white rounded-2xl shadow-md border-t-4 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" style={{ borderTopColor: tier.borderClass === "border-yellow" ? "#F7DE32" : tier.borderClass === "border-teal" ? "#5DCAD1" : "#0D3B66" }}>

      {/* Badge */}
      {tier.badge && (
        <div className="absolute top-4 right-4 bg-yellow text-primary font-accent text-xs font-700 uppercase tracking-widest px-3 py-1 rounded-full shadow">
          {tier.badge}
        </div>
      )}

      {/* Card header */}
      <div className="px-6 pt-6 pb-5 flex items-center gap-4 border-b border-light-gray">
        <div className="w-14 h-14 bg-off-white rounded-xl flex items-center justify-center shrink-0 overflow-hidden">
          <Image
            src={tier.icon}
            alt={tier.tier}
            width={44}
            height={44}
            className="object-contain"
          />
        </div>
        <div>
          <p className="eyebrow mb-0.5">{tier.tier}</p>
          <p className="font-heading text-primary text-3xl font-700 leading-none">
            {tier.price}
          </p>
        </div>
      </div>

      {/* Benefits */}
      <div className="flex-1 px-6 py-5 flex flex-col gap-5">
        <ul className="flex flex-col gap-2.5">
          {tier.benefits.map((b, i) => (
            <li key={i} className="flex gap-2.5 text-ink font-body text-sm leading-snug">
              <CheckIcon />
              {b}
            </li>
          ))}
        </ul>

        {/* Existing sponsors */}
        {tier.sponsors && tier.sponsors.length > 0 && (
          <div>
            <p className="eyebrow text-ink mb-3">Current Sponsors</p>
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
                    className="object-contain p-1.5"
                    sizes="112px"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Registration note */}
        {tier.note && (
          <p className="text-xs text-ink/60 italic font-body">{tier.note}</p>
        )}

        <div className="mt-auto pt-2">
          <a
            href={tier.registerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary w-full justify-center"
          >
            Register
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
      <PageHero
        imageSrc="/Structure/Programs/golf-sponsorships/unsplash-image-uy5ZEqUOscs.jpg"
        imageAlt="Golf tournament"
        overlay="absolute inset-0 bg-linear-to-r from-primary/90 via-primary/80 to-slate-blue/60"
        eyebrow="Mountain West Chamber of Commerce"
        title={
          <>
            Golf <span className="text-yellow">Sponsorships</span>
          </>
        }
        description="How do you want to sponsor?"
        actions={
          <>
            <a
              href="https://lp.constantcontactpages.com/ev/reg/hya9mx9/lp/19b74e5b-e44c-4a6a-ac98-9e9e969b534a"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-yellow btn-lg"
            >
              Register to Sponsor
            </a>
            <Link href="/golf-tournament" className="btn btn-outline-white btn-lg">
              View Tournament Info
            </Link>
          </>
        }
      />

      {/* ─── SPONSORSHIP DETAILS ─── */}
      <section className="py-(--section-l) bg-off-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <p className="eyebrow mb-3">Sponsorship Details</p>
            <h2 className="heading-l text-primary mb-5">Support Local Students</h2>
            <div className="section-divider mx-auto mb-6" />
            <p className="font-body text-ink leading-relaxed">
              The 144 players include local business owners and avid golfers.
              This is a fundraiser for the high school scholarship program.
              Choose the sponsorship level that fits your goals — each tier
              offers unique brand visibility and recognition.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SPONSORSHIP TIERS ─── */}
      <section className="py-(--section-l) bg-white">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {sponsorTiers.map((tier) => (
              <SponsorCard key={tier.tier} tier={tier} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-(--section-xl) bg-primary relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative z-10 container text-center">
          <p className="eyebrow text-teal mb-4">Together We Are Stronger</p>
          <h2 className="heading-xl text-white mb-5">
            Ready to Become a{" "}
            <span className="text-yellow">Sponsor?</span>
          </h2>
          <p className="font-body text-white/75 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Join leading local businesses in supporting youth scholarships while
            gaining valuable brand exposure at one of the Southwest Valley&apos;s
            most attended business events.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://lp.constantcontactpages.com/ev/reg/hya9mx9/lp/19b74e5b-e44c-4a6a-ac98-9e9e969b534a"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-yellow btn-lg"
            >
              Register to Sponsor
            </a>
            <Link href="/contactus" className="btn btn-outline-white btn-lg">
              Contact the Chamber
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
