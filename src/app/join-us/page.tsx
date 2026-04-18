import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ChamberGallerySlider from "@/components/ChamberGallerySlider";
import { ProgramCard } from "@/components/Cards";

const BASE = "/Structure/Member%20Resources/join-us";

export const metadata: Metadata = {
  title: "Join Us | Mountain West Chamber of Commerce",
  description:
    "Discover member resources, community activities, and trusted business partners when you join Mountain West Chamber of Commerce.",
};

/* ── Data ─────────────────────────────────────── */

const featuredResources = [
  {
    title:
      "The Most Overlooked Growth Practice for Business Owners Isn't What You Think. And It's Free.",
    date: "Dec 17, 2025",
    href: "/blogarticles",
    image: `${BASE}/blog+12-17.png`,
    category: "Growth",
    excerpt:
      "A practical reminder that the most effective growth strategy is often relationship-driven, local, and already within reach.",
  },
  {
    title: "12 Easy Newsletter Formats to Keep Your Business Top of Mind",
    date: "Oct 27, 2025",
    href: "/blogarticles",
    image: `${BASE}/blog+10-27.png`,
    category: "Marketing",
    excerpt:
      "Simple, repeatable newsletter ideas to stay visible with customers without burning out your team.",
  },
  {
    title: "How to Start Using AI in Your Small Business Without the Overwhelm",
    date: "Oct 24, 2025",
    href: "/blogarticles",
    image: `${BASE}/Blog+10-24.png`,
    category: "AI & Tech",
    excerpt:
      "An approachable starting point for owners who want to use AI to save time and improve consistency.",
  },
];

const resourcePartners = [
  {
    name: "Utah Microloan Fund",
    href: "https://www.utahmicroloanfund.org",
    logo: `${BASE}/little+logo+utah+micro+loan+fund+(002).jpg`,
  },
  {
    name: "World Trade Center Utah",
    href: "https://wtcutah.com/",
    logo: `${BASE}/WTC_UTAH-Stacked-Original-High-Res.png`,
  },
  {
    name: "Utah Workforce Services",
    href: "https://jobs.utah.gov/",
    logo: `${BASE}/WorkforceServicesLogo.jpg`,
  },
  {
    name: "SLCC Miller Business Resource Center",
    href: "https://mbrcslcc.com/",
    logo: `${BASE}/SLCC-MBRCLogo2018-Right.png`,
  },
  {
    name: "Dominion Energy",
    href: "https://www.dominionenergy.com/",
    logo: `${BASE}/DominionEnergyLogo.jpg`,
  },
  {
    name: "EDCUtah",
    href: "https://business.utah.gov/",
    logo: `${BASE}/EDC+Utah+Logo.jpg`,
  },
  {
    name: "Utah Governor's Office of Economic Opportunity",
    href: "https://business.utah.gov/",
    logo: `${BASE}/UtahGovEconDev.png`,
  },
  {
    name: "Internal Revenue Service",
    href: "https://www.irs.gov/businesses/small-businesses-self-employed/utah",
    logo: `${BASE}/irs-logo-550x321.png`,
  },
  {
    name: "Salt Lake County",
    href: "https://www.saltlakecounty.gov/",
    logo: `${BASE}/Salt-Lake-County-logo.png`,
  },
  {
    name: "Better Business Bureau",
    href: "https://www.bbb.org/",
    logo: `${BASE}/800px-Better_Business_Bureau.svg.png`,
  },
];

const activityPillars = [
  {
    num: "01",
    title: "Local Connections",
    description:
      "Establish long-term relationships with peers who can help you grow your business and better serve your customers.",
  },
  {
    num: "02",
    title: "Networking",
    description:
      "Grow your network of connections with focused events that connect you to businesses in your immediate area.",
  },
  {
    num: "03",
    title: "Legislative Connections",
    description:
      "Develop the connections you need within local government to support smart, sustainable business growth.",
  },
  {
    num: "04",
    title: "Community Involvement",
    description:
      "Build your reputation as a business that is active, generous, and invested in the broader community.",
  },
  {
    num: "05",
    title: "Educational Luncheons",
    description:
      "Expand your reach with educational and multi-chamber events that bring in broader networks and practical insight.",
  },
];

/* ── Sub-components ───────────────────────────── */

function PartnerLogo({
  name,
  href,
  logo,
}: {
  name: string;
  href: string;
  logo: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={name}
      className="card flex min-h-32 items-center justify-center p-5 transition-shadow duration-300 hover:shadow-lg"
    >
      <div className="relative h-14 w-full grayscale transition duration-300 hover:grayscale-0">
        <Image
          src={logo}
          alt={name}
          fill
          className="object-contain"
          sizes="180px"
        />
      </div>
    </a>
  );
}

/* ── Page ─────────────────────────────────────── */

export default function Page() {
  return (
    <>
      {/* ═══════════════════════════════
          HERO
      ═══════════════════════════════ */}
      <section className="relative min-h-80 flex items-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <Image
            src={`${BASE}/SWVCOC+Mtg+Sized+wEffect.jpg`}
            alt="Mountain West Chamber members gathered at an event"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-r from-primary/90 via-primary/80 to-slate-blue/60" />
        </div>

        <div className="section-container max-w-7xl w-full relative z-10 py-28">
          <p className="eyebrow text-teal mb-4">
            Mountain West Chamber of Commerce
          </p>
          <h1 className="heading-xl text-white mb-4 max-w-3xl">
            Working Together for Growth &amp; Success
          </h1>
          <div className="section-divider bg-yellow mb-6" />
          <p className="font-body text-lg text-white/80 leading-relaxed max-w-xl mb-10">
            Member resources, trusted partnerships, and community activities
            that move your business forward — all in one place.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/becomeamember" className="btn btn-yellow btn-lg">
              Join Us Today
            </Link>
            <Link href="/calendar" className="btn btn-outline-white btn-lg">
              Attend an Event
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          FEATURED RESOURCES
      ═══════════════════════════════ */}
      <section className="py-20 bg-off-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-14 items-center mb-14">
            <div>
              <p className="eyebrow mb-4">Featured Resources</p>
              <h2 className="heading-l text-primary mb-5">
                Practical Reads for Business Owners Who Want to Keep Moving
              </h2>
              <div className="section-divider mb-6" />
              <p className="font-body text-base text-ink leading-relaxed">
                These articles give you a strong starting point for marketing,
                communication, and new technology adoption — straight from the
                Chamber&rsquo;s member resource library.
              </p>
            </div>
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={`${BASE}/20180917_095023.jpg`}
                alt="Chamber luncheon with members seated at tables"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/60 to-transparent" />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredResources.map((r) => (
              <ProgramCard
                key={r.title}
                imageSrc={r.image}
                eyebrow={r.category}
                title={r.title}
                description={r.excerpt}
                href={r.href}
                date={r.date}
                linkLabel="Read More →"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          RESOURCE PARTNERS
      ═══════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow mb-4">Resource Partners</p>
            <h2 className="heading-l text-primary mb-5">
              Trusted Organizations That Help Utah Businesses Solve Real
              Problems
            </h2>
            <div className="section-divider mx-auto mb-6" />
            <p className="font-body text-base text-ink leading-relaxed">
              From workforce and funding to exports, utilities, and compliance —
              these partners give members a stronger operating network across
              Utah.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {resourcePartners.map((p) => (
              <PartnerLogo key={p.name} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          ACTIVITIES
      ═══════════════════════════════ */}
      <section className="py-20 bg-primary overflow-hidden">
        <div className="section-container">
          <div className="grid lg:grid-cols-[22rem_minmax(0,1fr)] gap-14 items-start">
            {/* Left column */}
            <div>
              <p className="eyebrow text-teal mb-4">Activities</p>
              <h2 className="heading-l text-white mb-5">
                Find New Ways to Build Your Business
              </h2>
              <div className="section-divider bg-yellow mb-6" />
              <p className="font-body text-base text-white/80 leading-relaxed">
                We have something for everyone — relationship building,
                networking, advocacy, community visibility, and educational
                events that expand your reach beyond the immediate room.
              </p>
              <div className="mt-8 rounded-xl bg-white/10 p-6 border border-white/10">
                <p className="eyebrow text-yellow mb-3">Next Best Step</p>
                <p className="font-body text-sm text-white/80 leading-relaxed">
                  The best way to experience the benefits is to show up. Attend
                  an event, meet members face-to-face, and see where your
                  business naturally fits.
                </p>
                <Link href="/calendar" className="btn btn-secondary mt-6">
                  View Upcoming Events
                </Link>
              </div>
            </div>

            {/* Right column — activity cards */}
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {activityPillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm"
                >
                  <p className="eyebrow text-teal mb-4">{pillar.num}</p>
                  <h3 className="heading-xs text-white mb-3">{pillar.title}</h3>
                  <p className="font-body text-sm text-white/80 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          CHAMBER IN ACTION
      ═══════════════════════════════ */}
      <section className="py-20 bg-off-white">
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="eyebrow mb-4">Chamber In Action</p>
              <h2 className="heading-l text-primary mb-5">
                Ribbon Cuttings, Events &amp; Community Moments
              </h2>
              <div className="section-divider mb-6" />
              <p className="font-body text-base text-ink leading-relaxed">
                Ribbon cuttings, educational events, business openings, and
                community-facing gatherings are how this Chamber builds trust
                and visibility for its members.
              </p>
            </div>
            <Link
              href="/becomeamember"
              className="btn btn-primary shrink-0 self-start md:self-auto"
            >
              Become a Member
            </Link>
          </div>

          <ChamberGallerySlider />
        </div>
      </section>

      {/* ═══════════════════════════════
          UTAH STRONG BANNER
      ═══════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-primary via-slate-blue to-slate-blue px-8 py-12 lg:px-14">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-yellow/20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 left-8 h-48 w-48 rounded-full bg-teal/20 blur-3xl pointer-events-none" />
            <div className="relative z-10 grid lg:grid-cols-[minmax(0,1fr)_16rem] gap-8 items-center">
              <div>
                <p className="eyebrow text-yellow mb-4">Utah Strong</p>
                <h2 className="heading-l text-white mb-4">
                  Need Broader Statewide Support?
                </h2>
                <div className="section-divider bg-yellow mb-5" />
                <p className="font-body text-base text-white/80 leading-relaxed">
                  Access additional help for small businesses and community
                  resilience through the Chamber&rsquo;s Utah Strong resource
                  hub.
                </p>
              </div>
              <div className="flex lg:justify-end">
                <Link href="/utah-strong" className="btn btn-yellow btn-lg">
                  Explore Utah Strong
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          FINAL CTA
      ═══════════════════════════════ */}
      <section className="py-20 bg-primary">
        <div className="section-container max-w-3xl text-center">
          <p className="eyebrow text-teal mb-4">Join the Network</p>
          <h2 className="heading-l text-white mb-5">
            Resources Matter More When They Come With People Who Want to Help
          </h2>
          <div className="section-divider bg-yellow mx-auto mb-6" />
          <p className="font-body text-base text-white/80 leading-relaxed mb-10">
            Join Mountain West Chamber to turn information into relationships,
            relationships into opportunities, and opportunities into long-term
            local growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/becomeamember" className="btn btn-yellow btn-lg">
              Join Us Today
            </Link>
            <Link href="/contactus" className="btn btn-outline-white btn-lg">
              Contact the Chamber
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
