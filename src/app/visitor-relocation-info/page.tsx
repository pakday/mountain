import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visitor & Relocation Info | Mountain West Chamber of Commerce",
  description:
    "Discover what makes Riverton, Herriman, and Bluffdale great places to live, work, and visit. Your guide to the Mountain West communities of Utah.",
};

// ─── Communities ─────────────────────────────────────────────────────────────
const communities = [
  {
    name: "Riverton",
    tagline: "Where Growth Meets Community",
    desc: "Nestled at the foot of the Wasatch Range, Riverton is one of Utah's fastest-growing cities. Excellent schools, new retail corridors, and easy freeway access make it a top destination for families and businesses alike.",
    highlights: [
      "Top-rated Jordan School District",
      "Easy I-15 access",
      "Thriving retail & dining scene",
      "Mountain views & outdoor recreation",
    ],
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80",
    website: "https://www.rivertoncity.com",
  },
  {
    name: "Herriman",
    tagline: "Small-Town Feel, Big-City Opportunity",
    desc: "One of Utah's newest cities, Herriman has grown rapidly while maintaining its welcoming, small-town character. Master-planned communities, low crime rates, and stunning mountain scenery attract families and entrepreneurs looking for space to grow.",
    highlights: [
      "Award-winning city services",
      "Canyons School District",
      "New master-planned communities",
      "Access to Oquirrh Mountains",
    ],
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    website: "https://www.herriman.org",
  },
  {
    name: "Bluffdale",
    tagline: "Where Utah's History Meets Its Future",
    desc: "Bluffdale offers a rare combination of wide-open spaces and proximity to major employment centers. With room to build, strong infrastructure investment, and a tight-knit community spirit, Bluffdale is an emerging hub for business and residential growth.",
    highlights: [
      "Jordan & Alpine School Districts",
      "Strategic data center & tech corridor",
      "Large residential lots available",
      "Historic and natural landmarks",
    ],
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80",
    website: "https://www.bluffdale.com",
  },
];

// ─── Why Here Quick Facts ────────────────────────────────────────────────────
const quickFacts = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 3v1m0 16v1m8.66-9h-1M4.34 12h-1m15.07-6.07l-.71.71M6.34 17.66l-.71.71m12.73 0l-.71-.71M6.34 6.34l-.71-.71M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    stat: "300+",
    label: "Days of Sunshine Per Year",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    stat: "Top 10",
    label: "Utah Cities for Business Growth",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
    stat: "A-Rated",
    label: "Public School Systems",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    stat: "20 min",
    label: "From Salt Lake City Downtown",
  },
];

// ─── Relocation Resources ────────────────────────────────────────────────────
const resources = [
  {
    label: "Jordan School District",
    url: "https://www.jordandistrict.org",
    desc: "Award-winning K–12 education serving Riverton, Herriman & Bluffdale.",
  },
  {
    label: "Canyons School District",
    url: "https://www.canyonsdistrict.org",
    desc: "Serving portions of the Mountain West area with strong academic programs.",
  },
  {
    label: "Salt Lake County",
    url: "https://slco.org",
    desc: "County government services, parks, recreation, and community resources.",
  },
  {
    label: "Utah Department of Commerce",
    url: "https://business.utah.gov",
    desc: "Register your business and find state-level resources for entrepreneurs.",
  },
  {
    label: "UDOT Trip Planner",
    url: "https://udot.utah.gov",
    desc: "Navigate Utah roads, commute info, and regional transportation planning.",
  },
  {
    label: "Visit Salt Lake",
    url: "https://www.visitsaltlake.com",
    desc: "Attractions, dining, events, and hospitality for visitors to the region.",
  },
];

export default function Page() {
  return (
    <>
      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section className="relative py-44 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1920&q=80"
          alt="Mountain landscape of Utah"
          fill
          quality={90}
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-r from-primary/90 via-primary/80 to-primary/40" />
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-teal/20 pointer-events-none" />
        <div className="absolute right-10 top-1/2 -translate-y-1/2 w-56 h-56 rounded-full border border-yellow/15 pointer-events-none" />

        <div className="container relative z-10">
          <div className="max-w-2xl">
            <p className="eyebrow text-teal mb-4">
              Riverton · Herriman · Bluffdale
            </p>
            <h1 className="heading-xl text-white mb-4">
              Visitor &amp; Relocation Info
            </h1>
            <div className="section-divider bg-teal mb-6" />
            <p className="text-l text-white/80 leading-relaxed">
              Thinking about visiting or relocating to the Mountain West? Let us
              show you why so many families and businesses choose to call this
              corner of Utah home.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          INTRO + QUICK FACTS
      ═══════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="eyebrow mb-4">Welcome to the Mountain West</p>
              <h2 className="heading-l text-primary mb-5">
                A Great Place to Live, Work &amp; Visit
              </h2>
              <div className="section-divider mb-6" />
              <p className="text-m text-ink leading-relaxed mb-5">
                The communities of Riverton, Herriman, and Bluffdale sit at the
                southern end of the Salt Lake Valley — surrounded by mountains,
                connected to the city, and full of opportunity. They
                consistently rank among Utah&rsquo;s safest, fastest-growing,
                and most business-friendly cities.
              </p>
              <p className="text-m text-ink leading-relaxed mb-8">
                The Mountain West Chamber of Commerce is here to help you get
                connected — whether you&rsquo;re exploring the area for the
                first time or making the move permanent.
              </p>
              <Link href="/contactus" className="btn btn-primary">
                Contact Our Team
              </Link>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-5">
              {quickFacts.map((f) => (
                <div key={f.label} className="card p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto mb-3">
                    {f.icon}
                  </div>
                  <p className="heading-m text-primary mb-1">{f.stat}</p>
                  <p className="text-xs text-ink">{f.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          THREE COMMUNITIES
      ═══════════════════════════════════════ */}
      <section className="py-20 bg-light-gray">
        <div className="container">
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">Explore Our Communities</p>
            <h2 className="heading-m text-primary mb-4">
              Three Cities, One Strong Region
            </h2>
            <div className="section-divider mx-auto" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {communities.map((c) => (
              <div
                key={c.name}
                className="card overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={c.image}
                    alt={`${c.name}, Utah`}
                    fill
                    quality={80}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-primary/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="heading-s text-white">{c.name}</h3>
                    <p className="text-xs text-white/80">{c.tagline}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-s text-ink leading-relaxed mb-5">
                    {c.desc}
                  </p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {c.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-s text-ink"
                      >
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
                        {h}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={c.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-s font-semibold text-slate-blue hover:text-teal transition-colors mt-auto"
                  >
                    Visit {c.name} City Website
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          RELOCATION RESOURCES
      ═══════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">Helpful Links</p>
            <h2 className="heading-m text-primary mb-4">
              Relocation Resources
            </h2>
            <div className="section-divider mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {resources.map((r) => (
              <a
                key={r.label}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-6 hover:shadow-lg transition-shadow duration-200 group"
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-teal/10 text-teal rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-s font-semibold text-primary group-hover:text-teal transition-colors mb-1">
                      {r.label}
                    </p>
                    <p className="text-xs text-ink leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA
      ═══════════════════════════════════════ */}
      <section className="py-20 bg-primary">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow text-teal mb-4">We&rsquo;d Love to Help</p>
            <h2 className="heading-m text-white mb-5">
              Questions About Moving to the Mountain West?
            </h2>
            <div className="section-divider bg-teal mx-auto mb-6" />
            <p className="text-m text-white/80 leading-relaxed mb-8">
              Our team is happy to connect you with local resources, introduce
              you to the business community, and help make your transition as
              smooth as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contactus" className="btn btn-yellow">
                Get in Touch
              </Link>
              <Link href="/members" className="btn btn-outline-white">
                Browse Member Directory
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
