import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supporting Chambers | Mountain West Chamber of Commerce",
  description:
    "Learn about the chambers and organizations that partner with and support the Mountain West Chamber of Commerce across the Salt Lake Valley.",
};

// ─── Partner Chambers ────────────────────────────────────────────────────────
const chambers = [
  {
    name: "South Valley Chamber of Commerce",
    region: "South Salt Lake Valley, UT",
    desc: "Serving the business communities of South Jordan, Draper, and surrounding areas with networking, advocacy, and member resources.",
    url: "https://www.sslchamber.com",
  },
  {
    name: "Salt Lake Chamber",
    region: "Salt Lake City, UT",
    desc: "Utah's largest business association — advocating for a thriving economy and connecting businesses across the entire Salt Lake region.",
    url: "https://slchamber.com",
  },
  {
    name: "West Jordan Chamber of Commerce",
    region: "West Jordan, UT",
    desc: "Championing business growth and community connection in West Jordan through events, networking, and collaborative programs.",
    url: "#",
  },
  {
    name: "Sandy Area Chamber of Commerce",
    region: "Sandy, UT",
    desc: "Supporting Sandy-area businesses with resources, ribbons cuttings, and advocacy at the local, county, and state level.",
    url: "#",
  },
  {
    name: "Murray Area Chamber of Commerce",
    region: "Murray, UT",
    desc: "Building a stronger Murray business community through member programs, legislative involvement, and annual signature events.",
    url: "#",
  },
  {
    name: "Women in Business — Utah",
    region: "Statewide, UT",
    desc: "Empowering women business owners and professionals across Utah. MWCC members receive a complimentary Women in Business membership.",
    url: "#",
  },
];

// ─── Partnership Benefits ────────────────────────────────────────────────────
const benefits = [
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
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "Expanded Networking",
    desc: "Cross-chamber partnerships open doors to a wider network of businesses, decision-makers, and community leaders across the valley.",
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
          d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
        />
      </svg>
    ),
    title: "Unified Advocacy",
    desc: "When chambers work together, our collective voice carries more weight in local and state government conversations that impact your business.",
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
          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
        />
      </svg>
    ),
    title: "Shared Resources",
    desc: "Partner chambers share best practices, co-sponsor events, and collaborate on programs — delivering more value to members of every organization.",
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
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80"
          alt="Business leaders shaking hands at a partnership event"
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
            <p className="eyebrow text-teal mb-4">Our Partners</p>
            <h1 className="heading-xl text-white mb-4">Supporting Chambers</h1>
            <div className="section-divider bg-teal mb-6" />
            <p className="text-l text-white/80 leading-relaxed">
              The Mountain West Chamber is proud to collaborate with fellow
              chambers and organizations across Utah — because stronger
              partnerships make stronger communities.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          INTRO
      ═══════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="eyebrow mb-4">Stronger Together</p>
              <h2 className="heading-l text-primary mb-5">
                A Network of Like-minded Organizations
              </h2>
              <div className="section-divider mb-6" />
              <p className="text-m text-ink leading-relaxed mb-5">
                No chamber succeeds in isolation. The Mountain West Chamber of
                Commerce actively builds relationships with peer organizations
                across the Salt Lake Valley through the{" "}
                <strong className="text-primary">
                  Western Growth Coalition
                </strong>{" "}
                — a monthly roundtable of local chambers, city officials, and
                business leaders united around shared goals.
              </p>
              <p className="text-m text-ink leading-relaxed mb-8">
                These partnerships multiply the value our members receive —
                expanding their networks, amplifying their voice, and opening
                doors to events and resources beyond our own borders.
              </p>
              <Link href="/contactus" className="btn btn-primary">
                Inquire About Partnerships
              </Link>
            </div>

            <div className="relative">
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=80"
                  alt="Chamber leaders at a coalition meeting"
                  fill
                  quality={85}
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WHY PARTNERSHIPS MATTER
      ═══════════════════════════════════════ */}
      <section className="py-20 bg-light-gray">
        <div className="container">
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">Why It Matters</p>
            <h2 className="heading-m text-primary mb-4">
              The Power of Cross-Chamber Collaboration
            </h2>
            <div className="section-divider mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="card p-8 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-5">
                  {b.icon}
                </div>
                <h3 className="heading-s text-primary mb-3">{b.title}</h3>
                <p className="text-s text-ink leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PARTNER CHAMBERS GRID
      ═══════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">Our Partner Network</p>
            <h2 className="heading-m text-primary mb-4">
              Chambers &amp; Organizations We Work With
            </h2>
            <div className="section-divider mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {chambers.map((c) => (
              <div
                key={c.name}
                className="card p-7 hover:shadow-xl transition-shadow duration-300 flex flex-col gap-4"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-teal/10 text-teal rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      className="w-5 h-5"
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
                  </div>
                  <div>
                    <h3 className="heading-xs text-primary mb-1">{c.name}</h3>
                    <span className="inline-block text-xs font-semibold text-teal bg-teal/10 px-2 py-0.5 rounded-full">
                      {c.region}
                    </span>
                  </div>
                </div>
                <p className="text-s text-ink leading-relaxed">{c.desc}</p>
                {c.url !== "#" && (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-s font-semibold text-slate-blue hover:text-teal transition-colors mt-auto"
                  >
                    Visit Website
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
                )}
              </div>
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
            <p className="eyebrow text-teal mb-4">Let&rsquo;s Connect</p>
            <h2 className="heading-m text-white mb-5">
              Is Your Chamber a Good Fit?
            </h2>
            <div className="section-divider bg-teal mx-auto mb-6" />
            <p className="text-m text-white/80 leading-relaxed mb-8">
              We&rsquo;re always open to building new partnerships with
              like-minded organizations that share our commitment to community
              and business growth. Reach out and let&rsquo;s start the
              conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contactus" className="btn btn-yellow">
                Get in Touch
              </Link>
              <Link href="/becomeamember" className="btn btn-outline-white">
                Become a Member
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
