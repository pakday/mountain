import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Involved | Mountain West Chamber of Commerce",
  description:
    "Make a difference in your community. Join a committee, serve on the board, sponsor an event, or volunteer with the Mountain West Chamber of Commerce.",
};

// ─── Ways to Get Involved ────────────────────────────────────────────────────
const ways = [
  {
    icon: (
      <svg
        className="w-7 h-7"
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
    label: "Join the Board",
    href: "/boardofdirectors",
    desc: "Serve on our Board of Directors and help guide the Chamber's strategic direction. Board members shape policy, champion business, and lead community initiatives.",
    cta: "Meet the Board",
  },
  {
    icon: (
      <svg
        className="w-7 h-7"
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
    label: "Join a Committee",
    href: "/committees",
    desc: "Committees are where the real work happens. From events to membership to advocacy — there's a committee where your expertise can make an immediate impact.",
    cta: "View Committees",
  },
  {
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.381-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
    label: "Become a Sponsor",
    href: "/sponsorship",
    desc: "Sponsoring Chamber events puts your brand in front of the local business community. From the Golf Tournament to the Knight of Heroes Gala — there's a sponsorship for every budget.",
    cta: "Sponsorship Options",
  },
  {
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
        />
      </svg>
    ),
    label: "Participate in Programs",
    href: "/programs",
    desc: "Take part in Chamber programs that give back — from the Teacher Appreciation Luncheon to scholarship competitions. Every participant helps strengthen the community.",
    cta: "Explore Programs",
  },
];

// ─── Impact Stats ────────────────────────────────────────────────────────────
const stats = [
  { value: "27+", label: "Years Serving the Community" },
  { value: "3", label: "Cities We Represent" },
  { value: "100+", label: "Active Business Members" },
  { value: "5+", label: "Annual Events & Programs" },
];

export default function Page() {
  return (
    <>
      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section className="relative py-44 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80"
          alt="Community volunteers working together"
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
            <p className="eyebrow text-teal mb-4">Mountain West Chamber</p>
            <h1 className="heading-xl text-white mb-4">Get Involved</h1>
            <div className="section-divider bg-teal mb-6" />
            <p className="text-l text-white/80 leading-relaxed mb-8">
              Your community gets stronger when its businesses get involved.
              There are many ways to connect, contribute, and lead with the
              Mountain West Chamber of Commerce.
            </p>
            <Link href="/becomeamember" className="btn btn-yellow btn-lg">
              Become a Member
            </Link>
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
              <p className="eyebrow mb-4">Why It Matters</p>
              <h2 className="heading-l text-primary mb-5">
                Together We Are Stronger
              </h2>
              <div className="section-divider mb-6" />
              <p className="text-m text-ink leading-relaxed mb-5">
                The Mountain West Chamber of Commerce has been connecting and
                empowering the businesses of Riverton, Herriman, and Bluffdale
                since 1997. None of that happens without people like you —
                business owners, professionals, and community leaders who give
                their time and energy to make this region a better place to live
                and do business.
              </p>
              <p className="text-m text-ink leading-relaxed mb-8">
                Whether you have a few hours a month or want to take on a
                leadership role, there is a place for you here. Explore the ways
                you can get involved below.
              </p>
              <Link href="/contactus" className="btn btn-primary">
                Talk to Us About Getting Involved
              </Link>
            </div>

            <div className="relative">
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=900&q=80"
                  alt="Chamber members volunteering"
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
          WAYS TO GET INVOLVED
      ═══════════════════════════════════════ */}
      <section className="py-20 bg-light-gray">
        <div className="container">
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">Four Ways to Contribute</p>
            <h2 className="heading-m text-primary mb-4">
              Find Your Place in the Chamber
            </h2>
            <div className="section-divider mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {ways.map((way) => (
              <div
                key={way.label}
                className="card p-8 flex flex-col gap-5 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shrink-0">
                  {way.icon}
                </div>
                <div>
                  <h3 className="heading-s text-primary mb-3">{way.label}</h3>
                  <p className="text-s text-ink leading-relaxed mb-5">
                    {way.desc}
                  </p>
                  <Link
                    href={way.href}
                    className="inline-flex items-center gap-2 text-s font-semibold text-slate-blue hover:text-teal transition-colors"
                  >
                    {way.cta}
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          IMPACT STATS
      ═══════════════════════════════════════ */}
      <section className="py-20 bg-primary">
        <div className="container">
          <div className="text-center mb-12">
            <p className="eyebrow text-teal mb-4">Our Impact</p>
            <h2 className="heading-m text-white mb-4">
              A Community Built on Involvement
            </h2>
            <div className="section-divider bg-teal mx-auto" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="heading-xl text-yellow mb-2">{s.value}</p>
                <p className="text-s text-white/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA
      ═══════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="bg-light-gray rounded-3xl p-12 text-center max-w-3xl mx-auto">
            <h2 className="heading-m text-primary mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-m text-ink leading-relaxed mb-8">
              Contact our team and we&rsquo;ll help you find the right fit —
              whether that&rsquo;s a committee seat, a board role, or a
              sponsorship opportunity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contactus" className="btn btn-primary">
                Contact Us
              </Link>
              <Link href="/becomeamember" className="btn btn-outline">
                Become a Member
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
