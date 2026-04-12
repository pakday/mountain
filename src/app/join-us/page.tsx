import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

const BASE = "/Structure/Member%20Resources/join-us";

export const metadata: Metadata = {
  title: "Member Resources",
  description:
    "Working together for growth and success with business resources, partner connections, and Chamber opportunities.",
};

const featuredResources = [
  {
    title:
      "The Most Overlooked Growth Practice for Business Owners Isn't What You Think. And It's Free.",
    date: "Dec 17, 2025",
    href: "/blogarticles",
    image: `${BASE}/blog+12-17.png`,
    category: "Growth Practice",
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
      "Use simple, repeatable newsletter ideas to stay visible with customers without burning out your team.",
  },
  {
    title: "How to Start Using AI in Your Small Business Without the Overwhelm",
    date: "Oct 24, 2025",
    href: "/blogarticles",
    image: `${BASE}/Blog+10-24.png`,
    category: "AI for Small Business",
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
    name: "Salt Lake Community College - Miller Business Resource Center",
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
    title: "Local Connections",
    description:
      "Establish long-term relationships with peers who can help you grow your business and better serve your customers.",
  },
  {
    title: "Networking",
    description:
      "Grow your network of connections with focused events that connect you to businesses in your immediate area.",
  },
  {
    title: "Legislative Connections",
    description:
      "Develop the connections you need within local government to support smart, sustainable business growth.",
  },
  {
    title: "Community Involvement",
    description:
      "Build your reputation as a business that is active, generous, and invested in the broader community.",
  },
  {
    title: "Educational Luncheons",
    description:
      "Expand your reach with educational and multi-chamber events that bring in broader networks and practical insight.",
  },
];

const chamberMoments = [
  {
    src: `${BASE}/WSS+ribbon.jpg`,
    alt: "Ribbon cutting with Chamber members outdoors",
    height: "lg:row-span-2",
  },
  {
    src: `${BASE}/Black+Bear+Diner.png`,
    alt: "Chamber ribbon cutting at Black Bear Diner",
    height: "",
  },
  {
    src: `${BASE}/AFS+Flooring.jpg`,
    alt: "Ribbon cutting inside AFS Flooring",
    height: "",
  },
  {
    src: `${BASE}/20180917_095023.jpg`,
    alt: "Business event audience listening to a speaker",
    height: "",
  },
  {
    src: `${BASE}/ChikFiletAdjusted.jpg`,
    alt: "Groundbreaking event with Chamber representatives",
    height: "",
  },
  {
    src: `${BASE}/DSC_0491.jpeg`,
    alt: "Ribbon cutting inside a flooring showroom",
    height: "",
  },
];

function ResourceCard({
  title,
  date,
  href,
  image,
  category,
  excerpt,
}: {
  title: string;
  date: string;
  href: string;
  image: string;
  category: string;
  excerpt: string;
}) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(13,59,102,0.08)] transition-transform duration-300 hover:-translate-y-1">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-primary/85 via-primary/25 to-transparent" />
        <span className="absolute left-5 top-5 rounded-full bg-yellow px-3 py-1 font-accent text-[0.68rem] font-bold uppercase tracking-[0.18em] text-primary">
          {category}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <p className="font-accent text-xs font-semibold uppercase tracking-widest text-slate-400">
          {date}
        </p>
        <h3 className="heading-sm text-primary leading-snug">{title}</h3>
        <p className="font-body text-sm leading-relaxed text-slate-600">
          {excerpt}
        </p>
        <Link
          href={href}
          className="mt-2 inline-flex items-center gap-2 font-accent text-sm font-bold uppercase tracking-wide text-teal-dark transition-colors hover:text-primary"
        >
          Read More
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </article>
  );
}

function PartnerCard({
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
      className="group flex min-h-36 items-center justify-center rounded-[1.25rem] border border-slate-200 bg-white px-6 py-5 shadow-[0_12px_36px_rgba(13,59,102,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-teal/50 hover:shadow-[0_18px_48px_rgba(13,59,102,0.10)]"
      aria-label={name}
    >
      <div className="relative h-16 w-full max-w-45 grayscale transition duration-300 group-hover:grayscale-0">
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

export default function Page() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary">
        <div className="absolute inset-0">
          <Image
            src={`${BASE}/SWVCOC+Mtg+Sized+wEffect.jpg`}
            alt="Mountain West Chamber members gathered at an event"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-r from-primary/95 via-primary/84 to-slate-blue/60" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-primary to-transparent" />
        </div>

        <div className="section-container relative z-10 w-full max-w-7xl pb-24 pt-32 lg:pb-28 lg:pt-36">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end">
            <div className="max-w-3xl">
              <p className="eyebrow mb-5 text-teal">
                Mountain West Chamber of Commerce
              </p>
              <h1 className="heading-2xl mb-6 text-white">
                Member Resources Built for Real Business Momentum
              </h1>
              <p className="max-w-2xl font-body text-lg leading-relaxed text-white/84">
                Working together for growth and success means giving members
                practical tools, trusted Utah connections, and local
                opportunities that move business forward.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/becomeamember" className="btn btn-yellow btn-lg">
                  Join Us Today
                </Link>
                <Link href="/calendar" className="btn btn-outline-white btn-lg">
                  Attend an Event
                </Link>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/15 bg-white/10 p-6 backdrop-blur-md">
              <p className="font-accent text-xs font-bold uppercase tracking-[0.2em] text-yellow">
                What You Get Here
              </p>
              <div className="mt-5 space-y-4 text-white">
                {[
                  "Actionable articles for marketing, AI, and business visibility",
                  "Direct access to local agencies, funding, workforce, and export resources",
                  "Chamber activities that strengthen relationships and reputation",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-teal" />
                    <p className="font-body text-sm leading-relaxed text-white/86">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-off-white py-20">
        <div className="section-container">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_26rem] lg:items-start">
            <div>
              <p className="eyebrow mb-4">Featured Resources</p>
              <h2 className="heading-xl mb-5 text-primary">
                Practical insight for owners who want to stay visible, grow
                smarter, and keep moving.
              </h2>
              <div className="section-divider mb-6" />
              <p className="max-w-2xl font-body text-base leading-relaxed text-slate-600">
                These featured reads pull directly from the original Member
                Resources page and give business owners a strong starting point
                for marketing, communication, and new technology adoption.
              </p>
            </div>

            <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_18px_54px_rgba(13,59,102,0.08)]">
              <div className="relative h-72">
                <Image
                  src={`${BASE}/20180917_095023.jpg`}
                  alt="Packed Chamber luncheon with members seated at tables"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 420px"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary/70 to-transparent" />
              </div>
              <div className="p-6">
                <p className="font-accent text-xs font-bold uppercase tracking-[0.18em] text-teal-dark">
                  Resources + Relationships
                </p>
                <p className="mt-3 font-body text-sm leading-relaxed text-slate-600">
                  The Chamber is strongest when information turns into action.
                  Use the content below, then bring those ideas into the room at
                  a Chamber event.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featuredResources.map((resource) => (
              <ResourceCard key={resource.title} {...resource} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-container">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Resource Partners</p>
            <h2 className="heading-xl mb-5 text-primary">
              Trusted organizations that help Utah businesses solve real
              problems
            </h2>
            <div className="section-divider mb-6" />
            <p className="font-body text-base leading-relaxed text-slate-600">
              From workforce development and funding to exports, utilities, and
              compliance, these partner organizations give members a stronger
              operating network across Utah.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {resourcePartners.map((partner) => (
              <PartnerCard key={partner.name} {...partner} />
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-primary py-20">
        <div className="section-container">
          <div className="grid gap-14 lg:grid-cols-[24rem_minmax(0,1fr)] lg:items-start">
            <div>
              <p className="eyebrow mb-4 text-teal">Activities</p>
              <h2 className="heading-xl mb-5 text-white">
                Find new ways to build your business with activities that create
                momentum
              </h2>
              <div className="section-divider mb-6 bg-yellow" />
              <p className="font-body text-base leading-relaxed text-white/80">
                We have something for everyone: relationship building,
                networking, advocacy, community visibility, and educational
                events that expand your reach beyond the immediate room.
              </p>
              <div className="mt-8 rounded-3xl bg-white/10 p-6">
                <p className="font-accent text-xs font-bold uppercase tracking-[0.18em] text-yellow">
                  Next Best Step
                </p>
                <p className="mt-3 font-body text-sm leading-relaxed text-white/84">
                  The best way to experience these benefits is to show up.
                  Attend an event, meet members face-to-face, and see where your
                  business naturally fits.
                </p>
                <Link href="/calendar" className="btn btn-secondary mt-6">
                  View Events
                </Link>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {activityPillars.map((pillar, index) => (
                <article
                  key={pillar.title}
                  className={`rounded-3xl border border-white/10 p-6 backdrop-blur-sm ${index === 0 ? "bg-white/15" : "bg-white/10"}`}
                >
                  <p className="font-accent text-xs font-bold uppercase tracking-[0.18em] text-teal">
                    0{index + 1}
                  </p>
                  <h3 className="heading-sm mt-4 text-white">{pillar.title}</h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-white/78">
                    {pillar.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-off-white py-20">
        <div className="section-container">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow mb-4">Chamber In Action</p>
              <h2 className="heading-xl mb-5 text-primary">
                The page should feel alive because the Chamber is active in the
                community
              </h2>
              <p className="font-body text-base leading-relaxed text-slate-600">
                Ribbon cuttings, educational events, business openings, and
                community-facing gatherings are part of how this Chamber builds
                trust and visibility for members.
              </p>
            </div>
            <Link
              href="/becomeamember"
              className="btn btn-primary self-start md:self-auto"
            >
              Become a Member
            </Link>
          </div>

          <div className="mt-12 grid auto-rows-[220px] gap-4 md:grid-cols-2 xl:grid-cols-3">
            {chamberMoments.map((moment) => (
              <div
                key={moment.src}
                className={`group relative overflow-hidden rounded-3xl shadow-[0_18px_48px_rgba(13,59,102,0.10)] ${moment.height}`}
              >
                <Image
                  src={moment.src}
                  alt={moment.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary/70 via-primary/10 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-container">
          <div className="relative overflow-hidden rounded-4xl bg-linear-to-r from-primary via-slate-blue to-teal-dark px-6 py-12 sm:px-10 lg:px-14">
            <div className="absolute -right-14 -top-16 h-44 w-44 rounded-full bg-yellow/20 blur-3xl" />
            <div className="absolute -bottom-16 left-10 h-44 w-44 rounded-full bg-teal/20 blur-3xl" />
            <div className="relative z-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_17rem] lg:items-center">
              <div className="max-w-3xl">
                <p className="eyebrow mb-4 text-yellow">Utah Strong</p>
                <h2 className="heading-xl mb-5 text-white">
                  Need broader statewide support? Explore Utah Strong resources.
                </h2>
                <p className="font-body text-base leading-relaxed text-white/84">
                  Access additional help for small businesses and community
                  resilience through the Chamber's Utah Strong resource hub.
                </p>
              </div>
              <div className="flex justify-start lg:justify-end">
                <Link href="/utah-strong" className="btn btn-yellow btn-lg">
                  Explore Utah Strong
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-18">
        <div className="section-container max-w-4xl text-center">
          <p className="eyebrow mb-4 text-teal">Join The Network</p>
          <h2 className="heading-xl mb-5 text-white">
            Resources matter more when they come with people who want to help
            you use them well.
          </h2>
          <p className="mx-auto max-w-2xl font-body text-base leading-relaxed text-white/80">
            Join Mountain West Chamber to turn information into relationships,
            relationships into opportunities, and opportunities into long-term
            local growth.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
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
