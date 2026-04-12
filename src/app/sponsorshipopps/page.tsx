import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sponsorship Opportunities | Mountain West Chamber of Commerce",
  description:
    "Maximize your business visibility with Mountain West Chamber of Commerce sponsorship packages — Sustaining Partner, Knight of Heroes, Golf Tournament, and Teacher Appreciation events.",
};

// ── Data ──────────────────────────────────────────────────────────────────────

const sustainingTiers = [
  {
    name: "Platinum Partner",
    price: "$4,000",
    badge: "Most Comprehensive",
    featured: true,
    features: [
      "12 months of continuous exposure on all promotional & marketing materials",
      "One complimentary monthly lunch ticket (12 total per year)",
      "Golf tournament participation — foursome or hole sponsor",
      "Knight of Heroes award gala — table for six",
      "25% discount on all event sponsorships",
    ],
  },
  {
    name: "Gold Partner",
    price: "$3,000",
    badge: "Most Popular",
    featured: false,
    accent: true,
    features: [
      "12 months of continuous exposure on all promotional & marketing materials",
      "One complimentary monthly lunch ticket (12 total per year)",
      "Golf tournament or Knight of Heroes award gala participation",
      "20% discount on all event sponsorships",
    ],
  },
  {
    name: "Silver Partner",
    price: "$2,000",
    badge: "Great Value",
    featured: false,
    accent: false,
    features: [
      "12 months of continuous exposure on all promotional & marketing materials",
      "One complimentary monthly lunch ticket (12 total per year)",
      "15% discount on all event sponsorships",
    ],
  },
];

const heroTiers = [
  {
    name: "Bedazzled Award Sponsorship",
    price: "$1,000",
    features: [
      "4 event tickets",
      "Logo on awards",
      "Logo on digital marketing",
      "Social media mentions",
      "Newsletter mention",
    ],
  },
  {
    name: "Diamond Table / Bay",
    price: "$600",
    features: [
      "6 Guests",
      "Sponsoring Hero + Guest",
      "Social media mentions",
      "Newsletter mention",
    ],
  },
  {
    name: "Platinum Table",
    price: "$300",
    features: [
      "2 Guests",
      "Sponsoring Hero + Guest",
      "Logo on digital marketing",
      "Social media mentions",
      "Newsletter mention",
    ],
  },
  {
    name: "Sparkling Couples Ticket",
    price: "$120",
    features: ["2 Guests included"],
  },
  {
    name: "Sparkling Ticket",
    price: "Individual",
    features: ["1 Guest included"],
  },
];

const teacherTiers = [
  {
    name: "Wonder Woman Sponsor",
    price: "$1,500",
    features: [
      "Speaking opportunity at luncheon",
      "Promotional business information at event",
      "Online & marketing material mentions",
      "Newsletter mention",
      "Six included guests",
    ],
  },
  {
    name: "Superman Sponsor",
    price: "$1,000",
    features: [
      "Promotional business information at event",
      "Logo on website and marketing materials",
      "Social media mentions",
      "Newsletter mentions",
      "Six included guests",
    ],
  },
  {
    name: "Batman Sponsor",
    price: "$500",
    features: [
      "Logo on marketing materials",
      "Social media mentions",
      "Newsletter mention",
      "Four included guests",
    ],
  },
  {
    name: "Captain Marvel Sponsor",
    price: "$300",
    features: [
      "Social media mentions",
      "Newsletter mention",
      "Two included guests",
    ],
  },
];

const golfTiers = [
  {
    name: "Presenting Sponsor",
    price: "$2,500",
    featured: true,
    register: "Select Presenting Sponsor When Registering",
    features: [
      "Opportunity to speak during Awards Luncheon",
      "Company logo on all promotional materials, registration site & day of event",
      "Three spotlight posts on social media",
      "Banner Ad on website for one month",
      "One hole sponsor included",
      "Two Foursomes (8 golfers)",
    ],
  },
  {
    name: "Eagle Sponsor",
    price: "$1,700",
    register: "Select Eagle Sponsor When Registering",
    features: [
      "Company recognition during luncheon",
      "Logo on all promotional materials, registration site & day of event",
      "One video spotlight post on social media",
      "Banner Ad on website for two weeks",
      "One hole sponsor included",
      "One Foursome (4 golfers)",
    ],
  },
  {
    name: "Luncheon Sponsor",
    price: "$1,700",
    features: [
      "Company recognition during Awards Luncheon",
      "Logo on all promotional materials, registration site & day of event",
      "Company logo displayed at luncheon table & surrounding area",
      "One Foursome (4 golfers)",
    ],
  },
  {
    name: "Birdie Sponsor",
    price: "$1,400",
    register: "Select Birdie Sponsor When Registering",
    features: [
      "One hole sponsor included",
      "One spotlight post on social media",
      "Two additional seats at luncheon",
      "One Foursome (4 golfers)",
    ],
  },
  {
    name: "Cart Sponsor",
    price: "$1,200",
    features: [
      "Company name on registration website",
      "Company name & logo on all golf carts",
      "Company recognition during Awards Luncheon",
      "First access to swag in golf carts",
      "One Foursome (4 golfers)",
    ],
  },
  {
    name: "Hole Sponsor",
    price: "$600",
    features: [
      "Signage with company logo on tee box",
      "Tee box access to promote your company",
      "Two seats at the Awards Luncheon",
    ],
  },
  {
    name: "Contest Sponsors",
    price: "$150",
    features: [
      "Longest Drive — Men & Women signage on hole",
      "Closest to the Pin — Men & Women signage on hole",
      "Hole in One — signage on hole",
      "Announce awards to winners at luncheon",
    ],
  },
];

// ── Reusable check icon ───────────────────────────────────────────────────────
function Check({ dark }: { dark?: boolean }) {
  return (
    <span
      className={`mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-700 ${
        dark ? "bg-yellow text-primary" : "bg-teal/15 text-teal-dark"
      }`}
    >
      ✓
    </span>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Page() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[72vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Structure/Programs/sponsorshipopps/SWVCOC+Mtg+Sized+wEffect.jpg"
            alt="Mountain West Chamber of Commerce community networking event"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-br from-primary/93 via-primary/78 to-teal-dark/65" />
        </div>

        <div className="relative z-10 section-container max-w-7xl pb-36 pt-36">
          <p className="eyebrow text-teal mb-4">
            Mountain West Chamber of Commerce
          </p>
          <h1
            className="heading-3xl text-white mb-5"
            style={{ lineHeight: 1.05 }}
          >
            Sponsorship
            <br />
            <span className="text-yellow">Opportunities</span>
          </h1>
          <p className="font-body text-lg text-white/85 max-w-xl leading-relaxed mb-8">
            Become a Sponsor — Increase Your Visibility. Connect your brand with
            hundreds of local business leaders, community advocates, and avid
            supporters across the Mountain West.
          </p>

          {/* Quick-jump buttons */}
          <div className="flex flex-wrap gap-3">
            <a href="#sustaining" className="btn btn-yellow btn-lg">
              Sustaining Partner
            </a>
            <a href="#knight" className="btn btn-outline-white">
              Knight of Heroes
            </a>
            <a href="#teacher" className="btn btn-outline-white">
              Teacher Appreciation
            </a>
            <a href="#golf" className="btn btn-outline-white">
              Golf Tournament
            </a>
          </div>
        </div>
      </section>

      {/* ─── SECTION QUICK-NAV BAR ────────────────────────────────────────── */}
      <nav className="bg-primary hidden md:block border-b border-white/10">
        <div className="section-container max-w-7xl">
          <div className="flex items-center overflow-x-auto">
            {[
              { href: "#sustaining", label: "Sustaining Partner" },
              { href: "#knight", label: "Knight of Heroes" },
              { href: "#teacher", label: "Teacher Appreciation" },
              { href: "#golf", label: "Golf Tournament" },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="font-accent text-xs font-700 text-white/65 hover:text-yellow uppercase tracking-widest px-6 py-4 border-b-2 border-transparent hover:border-yellow transition-all whitespace-nowrap"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ─── IMPACT STATS STRIP ───────────────────────────────────────────── */}
      <section className="bg-off-white py-14">
        <div className="section-container max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "4", label: "Annual Events", sub: "sponsorable" },
              { value: "27+", label: "Years", sub: "serving the community" },
              { value: "144+", label: "Golfers", sub: "at the Golf Classic" },
              { value: "100+", label: "Heroes", sub: "honored every year" },
            ].map((s) => (
              <div key={s.value}>
                <div className="heading-2xl text-primary mb-1">{s.value}</div>
                <div className="font-accent font-700 text-xs text-primary uppercase tracking-widest">
                  {s.label}
                </div>
                <div className="font-body text-xs text-slate-400 mt-0.5">
                  {s.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SUSTAINING PARTNER ───────────────────────────────────────────── */}
      <section id="sustaining" className="py-24 bg-white scroll-mt-0">
        <div className="section-container max-w-7xl">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow text-teal mb-3">Year-Round Visibility</p>
            <h2 className="heading-2xl text-primary mb-4">
              Sustaining Partner Sponsorships
            </h2>
            <div className="section-divider mx-auto mb-6" />
            <p className="font-body text-base text-slate-600 leading-relaxed">
              Maximize your brand with 12 months of continuous recognition
              across every Chamber event, newsletter, and promotional campaign.
            </p>
          </div>

          {/* Pricing cards */}
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {sustainingTiers.map((tier, i) => (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-3xl overflow-hidden border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                  tier.featured
                    ? "border-primary bg-primary shadow-xl md:scale-[1.03]"
                    : tier.accent
                      ? "border-teal bg-white"
                      : "border-light-gray bg-white"
                }`}
              >
                {/* Header band */}
                <div className="px-7 pt-7 pb-5">
                  <span
                    className={`inline-block font-accent text-xs font-700 uppercase tracking-widest px-3 py-1 rounded-full mb-4 ${
                      tier.featured
                        ? "bg-yellow text-primary"
                        : tier.accent
                          ? "bg-teal text-white"
                          : "bg-light-gray text-slate-500"
                    }`}
                  >
                    {tier.badge}
                  </span>
                  <h3
                    className={`heading-lg mb-2 ${
                      tier.featured ? "text-white" : "text-primary"
                    }`}
                  >
                    {tier.name}
                  </h3>
                  <div
                    className={`heading-2xl font-700 ${
                      tier.featured
                        ? "text-yellow"
                        : tier.accent
                          ? "text-teal-dark"
                          : "text-slate-blue"
                    }`}
                  >
                    {tier.price}
                  </div>
                  <p
                    className={`font-accent text-xs uppercase tracking-widest mt-1 ${
                      tier.featured ? "text-white/50" : "text-slate-400"
                    }`}
                  >
                    per year
                  </p>
                </div>

                <div
                  className={`h-px mx-7 ${
                    tier.featured ? "bg-white/20" : "bg-light-gray"
                  }`}
                />

                {/* Feature list */}
                <ul className="flex-1 px-7 py-6 space-y-4">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check dark={tier.featured} />
                      <span
                        className={`font-body text-sm leading-relaxed ${
                          tier.featured ? "text-white/85" : "text-slate-600"
                        }`}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="px-7 pb-7">
                  <Link
                    href="/becomeamember"
                    className={`btn w-full justify-center ${
                      tier.featured
                        ? "btn-yellow"
                        : tier.accent
                          ? "btn-secondary"
                          : "btn-outline"
                    }`}
                  >
                    Become a Sustaining Partner
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <p className="font-body text-xs text-slate-400 text-center mt-8">
            * Pricing subject to change. Contact the Chamber for current rates.
          </p>
        </div>
      </section>

      {/* ─── KNIGHT OF HEROES ─────────────────────────────────────────────── */}
      <section
        id="knight"
        className="py-24 bg-primary scroll-mt-0 relative overflow-hidden"
      >
        {/* Decorative radial glow */}
        <div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(93,202,209,0.12), transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-120 h-120 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(247,222,50,0.06), transparent 70%)",
          }}
        />

        <div className="section-container max-w-7xl relative z-10">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow text-teal mb-3">Award Banquet</p>
            <h2 className="heading-2xl text-white mb-4">
              Knight of Heroes Sponsorships
            </h2>
            <div
              className="section-divider mx-auto mb-6"
              style={{ backgroundColor: "#5DCAD1" }}
            />
            <p className="font-body text-base text-white/75 leading-relaxed">
              100–150 attendees including Fire, Police, Medical, Military, and
              Business individuals gather for an award banquet honoring heroes
              in our community.
            </p>
          </div>

          {/* Title Sponsor — featured card */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-10 mb-10 max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-7">
              <div>
                <span className="inline-block bg-yellow text-primary font-accent text-xs font-700 uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                  Top Tier
                </span>
                <h3 className="heading-xl text-white">Title Sponsor</h3>
              </div>
              <div className="heading-2xl text-yellow font-700 sm:text-right">
                $2,500
              </div>
            </div>
            <p className="font-body text-sm text-white/70 leading-relaxed mb-6">
              The 100–150 attendees include Fire, Police, Medical, Military, and
              Business individuals. This is an award banquet to honor heroes in
              our community.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                "Company Logo prominently displayed at event",
                "Company Logo on program",
                "Name/Logo on all promotional & marketing materials",
                "Table of 8 including dinner (sponsor a hero and their guest)",
                "Company recognition during the ceremony",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-teal/20 text-teal flex items-center justify-center text-xs font-700">
                    ✓
                  </span>
                  <span className="font-body text-sm text-white/85 leading-relaxed">
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Other tiers grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {heroTiers.map((tier) => (
              <div
                key={tier.name}
                className="bg-white/8 border border-white/15 rounded-2xl p-6 hover:bg-white/12 transition-colors"
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="heading-sm text-white leading-snug">
                    {tier.name}
                  </h3>
                  <span className="font-accent text-base font-700 text-yellow whitespace-nowrap">
                    {tier.price}
                  </span>
                </div>
                <ul className="space-y-2">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-teal" />
                      <span className="font-body text-sm text-white/70 leading-relaxed">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Raffle callout */}
          <div className="bg-yellow/10 border border-yellow/30 rounded-2xl p-7 max-w-2xl mx-auto text-center mb-10">
            <h3 className="heading-sm text-yellow mb-2">
              Raffle Item Donation Needed
            </h3>
            <p className="font-body text-sm text-white/75 leading-relaxed">
              We are looking for raffle items for the silent auction. Sign up to
              donate and arrange delivery of items to the Chamber by November
              4th, 2025.
            </p>
          </div>

          <div className="text-center">
            <a
              href="https://lp.constantcontactpages.com/ev/reg/cq6y5ue"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-yellow btn-lg"
            >
              Become a Knight of Heroes Sponsor
            </a>
          </div>
        </div>
      </section>

      {/* ─── TEACHER APPRECIATION ─────────────────────────────────────────── */}
      <section id="teacher" className="py-24 bg-off-white scroll-mt-0">
        <div className="section-container max-w-7xl">
          {/* Section header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow text-teal mb-3">Annual Celebration</p>
            <h2 className="heading-2xl text-primary mb-4">
              Teacher Appreciation Lunch
            </h2>
            <div className="section-divider mx-auto mb-6" />
            <p className="font-body text-base text-slate-600 leading-relaxed">
              Join the Mountain West Chamber of Commerce's celebration of 25+
              educators in our community. Teachers are the real superheroes!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Left column — event details + package cards */}
            <div>
              {/* Event details card */}
              <div className="bg-white rounded-2xl border border-light-gray p-6 mb-8 shadow-sm">
                <h3 className="heading-sm text-primary mb-5">Event Details</h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: "📅",
                      title: "Date & Time",
                      detail: "May 1, 2025 · 11:30 AM – 1:00 PM",
                    },
                    {
                      icon: "📍",
                      title: "Location",
                      detail: "Herriman City Hall · 5355 S Herriman Main St",
                    },
                    {
                      icon: "🎓",
                      title: "Purpose",
                      detail: "Honoring 25+ educators in our community",
                    },
                    {
                      icon: "🎁",
                      title: "Gift Bags",
                      detail:
                        "Teacher Gift Bag Donations also accepted — contact Susan Schilling",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-teal/12 flex items-center justify-center shrink-0 text-lg">
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-accent text-xs font-700 uppercase tracking-widest text-primary mb-0.5">
                          {item.title}
                        </p>
                        <p className="font-body text-sm text-slate-600 leading-relaxed">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <a
                    href="https://lp.constantcontactpages.com/ev/reg/n9px8c4/lp/f4685d27-abef-4a3a-a435-e7f0fd36b7b0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-lg w-full justify-center"
                  >
                    Sponsor Teacher Appreciation Now
                  </a>
                </div>
              </div>

              {/* Sponsorship package cards */}
              <h3 className="heading-md text-primary mb-6">
                Sponsorship Packages
              </h3>
              <div className="space-y-4">
                {teacherTiers.map((pkg, i) => (
                  <div
                    key={pkg.name}
                    className={`rounded-2xl border-2 p-5 transition-all hover:-translate-y-0.5 hover:shadow-md ${
                      i === 0
                        ? "border-primary bg-primary/5"
                        : i === 1
                          ? "border-teal/40 bg-white"
                          : "border-light-gray bg-white"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <h4
                        className={`heading-sm ${
                          i === 0 ? "text-primary" : "text-primary"
                        }`}
                      >
                        {pkg.name}
                      </h4>
                      <span
                        className={`font-accent font-700 text-base whitespace-nowrap ${
                          i === 0
                            ? "text-primary"
                            : i === 1
                              ? "text-teal-dark"
                              : "text-slate-blue"
                        }`}
                      >
                        {pkg.price}
                      </span>
                    </div>
                    <ul className="space-y-1.5">
                      {pkg.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-teal" />
                          <span className="font-body text-sm text-slate-600 leading-relaxed">
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column — event flyers */}
            <div className="space-y-6 lg:sticky lg:top-8">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
                <Image
                  src="/Structure/Programs/sponsorshipopps/2.png"
                  alt="Teachers Are The Real Superheroes — Teacher Appreciation event flyer"
                  width={600}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
                <Image
                  src="/Structure/Programs/sponsorshipopps/1.png"
                  alt="Teacher Appreciation Sponsorship Packages flyer"
                  width={600}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
              <p className="font-body text-xs text-slate-400 text-center">
                Contact:{" "}
                <a
                  href="tel:8012800595"
                  className="text-teal-dark hover:underline"
                >
                  801-280-0595
                </a>{" "}
                ·{" "}
                <a
                  href="mailto:susan@mountainwestchamber.org"
                  className="text-teal-dark hover:underline"
                >
                  susan@mountainwestchamber.org
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GOLF TOURNAMENT ──────────────────────────────────────────────── */}
      <section id="golf" className="py-24 bg-white scroll-mt-0">
        <div className="section-container max-w-7xl">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-8">
            <p className="eyebrow text-teal mb-3">Annual Fundraiser</p>
            <h2 className="heading-2xl text-primary mb-4">
              Golf Tournament Sponsorships
            </h2>
            <div className="section-divider mx-auto mb-6" />
          </div>

          {/* Info + CTA banner */}
          <div className="bg-teal/8 border border-teal/25 rounded-2xl p-7 max-w-2xl mx-auto mb-14 text-center">
            <p className="font-body text-base text-slate-700 leading-relaxed mb-5">
              The 144 players include local business owners and avid golfers.
              All proceeds above costs fund teacher appreciation events and high
              school scholarship programs.
            </p>
            <a
              href="https://lp.constantcontactpages.com/ev/reg/fj2wxva/lp/c87bca5e-7992-4acc-8ba3-cdaca6a08ba3"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-lg"
            >
              Register to Sponsor
            </a>
          </div>

          {/* Sponsorship tier grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {golfTiers.map((tier, i) => (
              <div
                key={tier.name}
                className={`flex flex-col rounded-2xl border-2 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  tier.featured
                    ? "border-primary bg-primary/5"
                    : i <= 2
                      ? "border-teal/35 bg-white"
                      : "border-light-gray bg-white"
                }`}
              >
                <div className="mb-1">
                  {tier.featured && (
                    <span className="inline-block font-accent text-xs font-700 uppercase tracking-widest bg-primary text-white px-3 py-1 rounded-full mb-3">
                      Top Tier
                    </span>
                  )}
                  <h3 className="heading-sm text-primary">{tier.name}</h3>
                </div>
                <div
                  className={`heading-xl font-700 mb-4 ${
                    tier.featured
                      ? "text-primary"
                      : i <= 2
                        ? "text-teal-dark"
                        : "text-slate-blue"
                  }`}
                >
                  {tier.price}
                </div>
                <ul className="flex-1 space-y-2 mb-4">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span
                        className={`mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full ${
                          tier.featured ? "bg-primary" : "bg-teal"
                        }`}
                      />
                      <span className="font-body text-sm text-slate-600 leading-relaxed">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                {tier.register && (
                  <p className="font-accent text-xs text-slate-400 italic mt-auto">
                    {tier.register}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://lp.constantcontactpages.com/ev/reg/fj2wxva/lp/c87bca5e-7992-4acc-8ba3-cdaca6a08ba3"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              View All Golf Sponsorships &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIAL ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {/* Decorative quote mark */}
        <div
          className="absolute top-0 left-4 select-none pointer-events-none"
          style={{
            fontSize: "18rem",
            fontFamily: "Georgia, serif",
            lineHeight: 1,
            color: "rgba(255,255,255,0.04)",
          }}
        >
          &ldquo;
        </div>
        <div className="section-container max-w-4xl relative z-10 text-center">
          <p className="eyebrow text-teal mb-6">Member Testimonial</p>
          <blockquote className="font-heading text-xl text-white/90 leading-relaxed italic mb-8">
            "The Mountain West Chamber of Commerce has contributed immeasurably
            in promoting First Utah Bank since the opening of its eighth branch
            in January 2008. The Chamber has provided numerous opportunities for
            the employees of the Bank to assist the community and the businesses
            it serves, thus bringing much attention and awareness to the Bank.
            You cannot put a price on the value that the chamber brings to this
            community and its businesses."
          </blockquote>
          <figcaption className="font-accent text-sm font-700 text-teal uppercase tracking-widest">
            — Carol Lund, Brand Manager · First Utah Bank
          </figcaption>
        </div>
      </section>

      {/* ─── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="py-20 bg-teal-dark">
        <div className="section-container max-w-4xl text-center">
          <h2 className="heading-xl text-white mb-4">
            Ready to Elevate Your Brand?
          </h2>
          <p className="font-body text-base text-white/80 leading-relaxed max-w-xl mx-auto mb-8">
            Contact the Mountain West Chamber of Commerce to learn more about
            any sponsorship and how your business can make a lasting impact in
            our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contactus" className="btn btn-yellow btn-lg">
              Contact Us
            </Link>
            <Link
              href="/becomeamember"
              className="btn btn-outline-white btn-lg"
            >
              Become a Member
            </Link>
          </div>
          <p className="font-body text-sm text-white/60">
            📞{" "}
            <a
              href="tel:8012800595"
              className="hover:text-white transition-colors"
            >
              801-280-0595
            </a>{" "}
            &nbsp;·&nbsp; ✉{" "}
            <a
              href="mailto:Info@mountainwestchamber.org"
              className="hover:text-white transition-colors"
            >
              Info@mountainwestchamber.org
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
