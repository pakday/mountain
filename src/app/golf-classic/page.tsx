import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactPerson from "@/components/ContactPerson";

export const metadata: Metadata = {
  title: "Scholarship Golf Classic 2026 — Mountain West Chamber",
  description:
    "Annual Scholarship Golf Classic at Stonebridge Golf Course. 7:30 AM registration, 8:30 AM Shotgun Start. All proceeds go to scholarships for local high school students. Sponsorship opportunities available.",
};

const BASE_TOURNAMENT = "/Structure/Programs/golf-tournament";
const BASE_SPONSORSHIPS = "/Structure/Programs/golf-sponsorships";
const BASE_SCHOLARSHIP = "/Structure/Programs/scholarship-recipients";

/* ─── Agenda ─────────────────────────────────────────────────────── */
const agendaItems = [
  { time: "7:30 – 8:30 AM", label: "Check-In & Registration" },
  { time: "8:30 AM", label: "Shotgun Start" },
  { time: "Midday", label: "BBQ Lunch with all the fixin\u2019s" },
  { time: "~2:00 PM", label: "Awards Luncheon & Prize Drawing" },
];

/* ─── Sponsorship Tiers ──────────────────────────────────────────── */
interface SponsorTier {
  tier: string;
  price: string;
  icon: string;
  borderColor: string;
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
    icon: `${BASE_SPONSORSHIPS}/Mountain_West_Chamber_Web_Presenter+Sponsor.png`,
    borderColor: "#F7DE32",
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
    icon: `${BASE_SPONSORSHIPS}/Mountain_West_Chamber_Web_Eagle+Sponsor.png`,
    borderColor: "#5DCAD1",
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
    icon: `${BASE_SPONSORSHIPS}/Mountain_West_Chamber_Web_Birdie+Sponsor.png`,
    borderColor: "#0D3B66",
    benefits: [
      "One hole sponsor — See hole sponsor for details",
      "One spotlight post on social media",
      "Two additional seats at luncheon (for hole sponsor attendees)",
      "One Foursome",
    ],
    note: "Select Birdie Sponsor when Registering",
    sponsors: [
      {
        src: `${BASE_SPONSORSHIPS}/uccu_logo.png`,
        alt: "Utah Community Credit Union",
      },
      {
        src: `${BASE_SPONSORSHIPS}/Canyon_View_Logo_Stacked_RG_1000x450.jpg`,
        alt: "Canyon View Credit Union",
      },
    ],
    registerUrl:
      "https://lp.constantcontactpages.com/ev/reg/hya9mx9/lp/19b74e5b-e44c-4a6a-ac98-9e9e969b534a",
  },
  {
    tier: "Hole Sponsor",
    price: "$600",
    icon: `${BASE_SPONSORSHIPS}/Mountain_West_Chamber_Web_Hole_Sponsor.png`,
    borderColor: "#5DCAD1",
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
    icon: `${BASE_SPONSORSHIPS}/Mountain_West_Chamber_Web_Luncheon+Sponsor.png`,
    borderColor: "#F7DE32",
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
    icon: `${BASE_SPONSORSHIPS}/Mountain_West_Chamber_Web_Cart+Sponsor.png`,
    borderColor: "#0D3B66",
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
    icon: `${BASE_SPONSORSHIPS}/Mountain_West_Chamber_Web_Contest+Sponsor.png`,
    borderColor: "#5DCAD1",
    benefits: [
      "Longest Drive Men & Women — signage on hole",
      "and/or Closest to the Pin Men & Women — signage on hole",
      "and/or Hole in One — signage on hole",
      "You get to announce awards to winners at luncheon",
    ],
    sponsors: [
      {
        src: `${BASE_SPONSORSHIPS}/novel+expression+logo.png`,
        alt: "Novel Expression",
      },
      {
        src: `${BASE_SPONSORSHIPS}/True+Pros+HVAC.png`,
        alt: "True Pros HVAC",
      },
      {
        src: `${BASE_SPONSORSHIPS}/Rex+Ind.+.jpg`,
        alt: "Rex Industries",
      },
    ],
    registerUrl:
      "https://lp.constantcontactpages.com/ev/reg/hya9mx9/lp/19b74e5b-e44c-4a6a-ac98-9e9e969b534a",
  },
];

/* ─── Scholarship gallery ────────────────────────────────────────── */
const galleryImages = [
  {
    src: `${BASE_SCHOLARSHIP}/PXL_20230524_004701465.jpg`,
    alt: "Scholarship award ceremony",
    wide: true,
  },
  {
    src: `${BASE_SCHOLARSHIP}/PXL_20230524_011340332.jpg`,
    alt: "Scholarship recipient receiving award",
    wide: false,
  },
  {
    src: `${BASE_SCHOLARSHIP}/PXL_20230524_143500446.jpg`,
    alt: "Scholarship ceremony celebration",
    wide: false,
  },
  {
    src: `${BASE_SCHOLARSHIP}/PXL_20230523_151504016.jpg`,
    alt: "Scholarship recipient with award",
    wide: false,
  },
  {
    src: `${BASE_SCHOLARSHIP}/PXL_20230509_010322881.jpg`,
    alt: "Scholarship ceremony at Mountain Ridge",
    wide: false,
  },
];

/* ─── Sub-components ─────────────────────────────────────────────── */

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
    <div
      className="relative flex flex-col bg-white rounded-2xl shadow-md border-t-4 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      style={{ borderTopColor: tier.borderColor }}
    >
      {tier.badge && (
        <div className="absolute top-4 right-4 bg-yellow text-primary font-accent text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow">
          {tier.badge}
        </div>
      )}

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
          <p className="font-heading text-primary text-3xl font-bold leading-none">
            {tier.price}
          </p>
        </div>
      </div>

      <div className="flex-1 px-6 py-5 flex flex-col gap-5">
        <ul className="flex flex-col gap-2.5">
          {tier.benefits.map((b, i) => (
            <li
              key={i}
              className="flex gap-2.5 text-ink font-body text-sm leading-snug"
            >
              <CheckIcon />
              {b}
            </li>
          ))}
        </ul>

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
            Register as {tier.tier}
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────── */

export default function Page() {
  return (
    <>
      {/* ─── HERO ─── */}
      <PageHero
        imageSrc={`${BASE_TOURNAMENT}/Green.jpeg`}
        imageAlt="Golf green at Stonebridge Golf Course"
        overlay="absolute inset-0 bg-linear-to-br from-primary/90 via-primary/70 to-slate-blue/60"
        eyebrow="Mountain West Chamber of Commerce"
        title={
          <>
            Scholarship <span className="text-yellow">Golf Classic</span>{" "}
            <span className="text-white">2026</span>
          </>
        }
        description="Fall 2026 · 7:30 AM Registration · 8:30 AM Shotgun Start · Stonebridge Golf Course, West Valley City, UT"
        actions={
          <>
            <a
              href="https://lp.constantcontactpages.com/ev/reg/hya9mx9/lp/19b74e5b-e44c-4a6a-ac98-9e9e969b534a"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-yellow btn-lg"
            >
              Register for 2026 Tournament
            </a>
            <a href="#sponsorships" className="btn btn-outline-white btn-lg">
              View Sponsorships
            </a>
          </>
        }
      />

      {/* ─── EVENT DETAILS + FLYERS ─── */}
      <section className="py-(--section-xl) bg-off-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: details */}
            <div>
              <p className="eyebrow mb-3">Annual Event</p>
              <h2 className="heading-l text-primary mb-5">
                Please Join Us for Our Annual{" "}
                <span className="text-yellow">
                  &ldquo;Scholarship Golf Classic&rdquo;
                </span>
              </h2>
              <div className="section-divider mb-6" />
              <p className="font-body text-ink leading-relaxed mb-8">
                All proceeds above costs go to scholarships for local high
                school students and to educators. Prize drawing tickets are also
                available for purchase on the day of the event.
              </p>

              {/* Date / Time / Where block */}
              <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm ring-1 ring-black/5">
                <div className="flex flex-col gap-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        className="text-primary"
                      >
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-accent text-xs text-ink uppercase tracking-widest mb-0.5">
                        Date
                      </p>
                      <p className="font-body text-ink font-semibold">
                        Fall 2026 — Date Coming Soon
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        className="text-primary"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-accent text-xs text-ink uppercase tracking-widest mb-0.5">
                        Time
                      </p>
                      <p className="font-body text-ink font-semibold">
                        7:30 AM Registration · 8:30 AM Shotgun to 2:00 PM MDT
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        className="text-primary"
                      >
                        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-accent text-xs text-ink uppercase tracking-widest mb-0.5">
                        Where
                      </p>
                      <p className="font-body text-ink font-semibold">
                        Stonebridge Golf Course
                      </p>
                      <p className="font-body text-ink text-sm">
                        4415 W Links Dr.
                        <br />
                        West Valley City, Utah
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Included note */}
              <div className="border-l-4 border-teal bg-white rounded-r-2xl px-6 py-4 mb-6">
                <p className="font-body text-ink text-sm leading-relaxed">
                  <strong className="text-primary">
                    Driving Range &amp; Cart included.
                  </strong>{" "}
                  Prize Drawing Tickets available for purchase. All proceeds go
                  to scholarships for local high school students.
                </p>
              </div>

              <p className="font-body text-ink font-semibold italic mb-6">
                &ldquo;A Great Time Will Be Had by All!&rdquo;
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://maps.google.com/?q=4415+W+Links+Dr+West+Valley+City+UT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost btn-sm text-primary"
                >
                  Driving Directions →
                </a>
              </div>
            </div>

            {/* Right: previous year flyers as reference */}
            <div>
              <p className="eyebrow mb-4 text-center">
                2025 Flyers — 2026 Flyer Coming Soon
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-3/4">
                  <Image
                    src={`${BASE_TOURNAMENT}/2025+Golf+Tournament+Flyer+-+front+side.jpg`}
                    alt="2025 Golf Tournament Flyer Front"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 300px"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-3/4">
                  <Image
                    src={`${BASE_TOURNAMENT}/2025+Golf+Tournament+Flyer+-+back+side.jpg`}
                    alt="2025 Golf Tournament Flyer Back"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 300px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── AGENDA ─── */}
      <section className="py-(--section-l) bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <p className="eyebrow mb-3">Day Of Event</p>
              <h2 className="heading-l text-primary">Agenda</h2>
              <div className="section-divider mx-auto mt-5" />
            </div>
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-teal/30 hidden md:block" />
              <div className="flex flex-col gap-0">
                {agendaItems.map((item, i) => (
                  <div
                    key={i}
                    className="relative flex items-start gap-6 md:pl-20 py-5 border-b border-light-gray last:border-0"
                  >
                    <div className="hidden md:flex absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-teal items-center justify-center shadow">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 w-full">
                      <span className="font-accent text-sm font-bold text-primary min-w-40">
                        {item.time}
                      </span>
                      <span className="font-body text-base text-ink">
                        {item.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SPONSORSHIPS ─── */}
      <section id="sponsorships" className="py-(--section-l) bg-off-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="eyebrow mb-3">Sponsorship Opportunities</p>
            <h2 className="heading-l text-primary mb-5">
              Support Local Students
            </h2>
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
      <section className="pb-(--section-l) bg-off-white">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {sponsorTiers.map((tier) => (
              <SponsorCard key={tier.tier} tier={tier} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── SCHOLARSHIP IMPACT ─── */}
      <section className="py-(--section-l) bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">Why It Matters</p>
            <h2 className="heading-l text-primary mb-4">
              Scholarship <span className="text-yellow">Recipients</span>
            </h2>
            <div className="section-divider mx-auto mb-5" />
            <p className="font-body text-ink text-base leading-relaxed max-w-2xl mx-auto">
              All proceeds above costs go directly to scholarships for local
              high school students. Every round played and every sponsorship
              dollar changes a student&rsquo;s future.
            </p>
          </div>

          {/* Impact stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {[
              { value: "$50,000+", label: "In Scholarships Awarded" },
              { value: "27+", label: "Years of the Golf Classic" },
              { value: "144", label: "Players Per Tournament" },
              { value: "100%", label: "Proceeds to Scholarships" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-off-white rounded-2xl p-6 text-center border border-light-gray"
              >
                <p className="heading-m text-primary font-bold">{s.value}</p>
                <p className="font-body text-sm text-ink/70 mt-2 leading-snug">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* Bento gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-2xl shadow-md ${
                  img.wide
                    ? "col-span-2 md:col-span-2 aspect-video"
                    : "aspect-square"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/scholarship-recipients" className="btn btn-outline">
              View All Scholarship Recipients →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <ContactPerson
        imageSrc={`${BASE_TOURNAMENT}/Susan+Schilling+Sq.jpg`}
        bgClass="bg-off-white"
      />

      {/* ─── CTA ─── */}
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
            All Proceeds Go to <span className="text-yellow">Scholarships</span>
          </h2>
          <p className="font-body text-white/75 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Fall 2026 · Stonebridge Golf Course · West Valley City, UT
            <br />
            All proceeds above costs go to scholarships for local high school
            students and to educators.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://lp.constantcontactpages.com/ev/reg/hya9mx9/lp/19b74e5b-e44c-4a6a-ac98-9e9e969b534a"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-yellow btn-lg"
            >
              Register for 2026 Tournament
            </a>
            <a href="#sponsorships" className="btn btn-outline-white btn-lg">
              Sponsorship Opportunities
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
