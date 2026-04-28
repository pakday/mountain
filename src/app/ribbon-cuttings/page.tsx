import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ribbon Cuttings | Mountain West Chamber of Commerce",
  description:
    "Celebrate your grand opening or business milestone with a Mountain West Chamber of Commerce ribbon cutting ceremony. Request yours today.",
};

// ─── What's Included ─────────────────────────────────────────────────────────
const includes = [
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
    title: "Chamber Representatives",
    desc: "Board members, ambassadors, and Chamber staff attend to cheer you on and welcome you to the community.",
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
    title: "Social Media Promotion",
    desc: "We announce your event to our followers and share photos from the ceremony on Chamber social channels.",
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
          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "Professional Photos",
    desc: "Receive quality photographs of your ribbon cutting moment to use for your own marketing, website, and social media.",
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
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
    title: "Ceremonial Ribbon & Scissors",
    desc: "We provide the oversized ceremonial ribbon and scissors — all the classic touches that make the photo memorable.",
  },
];

// ─── How It Works Steps ───────────────────────────────────────────────────────
const steps = [
  {
    step: "01",
    title: "Become a Member",
    desc: "Ribbon cuttings are a benefit of Chamber membership. If you're not yet a member, joining is quick and affordable.",
    href: "/becomeamember",
    cta: "Join Today",
  },
  {
    step: "02",
    title: "Submit Your Request",
    desc: "Contact our team with your preferred date, location, and a brief description of what you're celebrating.",
    href: "/contactus",
    cta: "Contact Us",
  },
  {
    step: "03",
    title: "We Promote Your Event",
    desc: "We'll spread the word to Chamber members, partners, and social followers to maximize attendance.",
    href: null,
    cta: null,
  },
  {
    step: "04",
    title: "Celebrate!",
    desc: "Cut the ribbon, welcome your community, and enjoy a milestone moment that will drive word-of-mouth and visibility.",
    href: null,
    cta: null,
  },
];

// ─── Great For ───────────────────────────────────────────────────────────────
const occasions = [
  "Grand openings",
  "New location launches",
  "Major renovations",
  "Business anniversaries",
  "New ownership transitions",
  "Office or storefront expansions",
];

export default function Page() {
  return (
    <>
      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section className="relative py-44 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1920&q=80"
          alt="Business ribbon cutting ceremony"
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
            <p className="eyebrow text-teal mb-4">Celebrate Your Milestone</p>
            <h1 className="heading-xl text-white mb-4">Ribbon Cuttings</h1>
            <div className="section-divider bg-teal mb-6" />
            <p className="text-l text-white/80 leading-relaxed mb-8">
              Mark your grand opening or business milestone the right way — with
              the Chamber community by your side. We provide everything you need
              to make it memorable.
            </p>
            <Link href="/contactus" className="btn btn-yellow btn-lg">
              Request a Ribbon Cutting
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          INTRO + WHAT'S INCLUDED
      ═══════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="eyebrow mb-4">A Member Benefit</p>
              <h2 className="heading-l text-primary mb-5">
                More Than Just a Photo Opportunity
              </h2>
              <div className="section-divider mb-6" />
              <p className="text-m text-ink leading-relaxed mb-5">
                A ribbon cutting with the Mountain West Chamber is one of the
                best ways to generate buzz, drive foot traffic, and introduce
                yourself to the local business community. It&rsquo;s a
                member-exclusive benefit that comes with real promotional value.
              </p>
              <p className="text-m text-ink leading-relaxed mb-8">
                Whether you&rsquo;re opening your first storefront or
                celebrating a major milestone, we bring the people, the
                promotion, and the ceremony — you bring the excitement.
              </p>

              {/* Occasions list */}
              <div className="bg-light-gray rounded-2xl p-6">
                <p className="text-s font-semibold text-primary mb-4">
                  Great for:
                </p>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {occasions.map((o) => (
                    <li
                      key={o}
                      className="flex items-center gap-2 text-s text-ink"
                    >
                      <svg
                        className="w-4 h-4 text-teal shrink-0"
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
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=900&q=80"
                  alt="Business owners celebrating a ribbon cutting"
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
          WHAT'S INCLUDED
      ═══════════════════════════════════════ */}
      <section className="py-20 bg-light-gray">
        <div className="container">
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">What You Get</p>
            <h2 className="heading-m text-primary mb-4">
              Everything Included with Your Ceremony
            </h2>
            <div className="section-divider mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {includes.map((item) => (
              <div
                key={item.title}
                className="card p-7 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-5">
                  {item.icon}
                </div>
                <h3 className="heading-xs text-primary mb-3">{item.title}</h3>
                <p className="text-s text-ink leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          HOW IT WORKS
      ═══════════════════════════════════════ */}
      <section className="py-20 bg-primary">
        <div className="container">
          <div className="text-center mb-12">
            <p className="eyebrow text-teal mb-4">Simple Process</p>
            <h2 className="heading-m text-white mb-4">How It Works</h2>
            <div className="section-divider bg-teal mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-14 h-14 bg-yellow/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <span className="heading-s text-yellow font-bold">
                    {s.step}
                  </span>
                </div>
                <h3 className="heading-xs text-white mb-3">{s.title}</h3>
                <p className="text-s text-white/70 leading-relaxed mb-4">
                  {s.desc}
                </p>
                {s.href && s.cta && (
                  <Link
                    href={s.href}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-teal hover:text-white transition-colors"
                  >
                    {s.cta}
                    <svg
                      className="w-3.5 h-3.5"
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
                )}
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
              Ready to Cut the Ribbon?
            </h2>
            <p className="text-m text-ink leading-relaxed mb-8">
              Ribbon cuttings are available to all active Chamber members.
              Contact us to schedule your ceremony and let us help make your
              milestone moment count.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contactus" className="btn btn-primary">
                Request a Ribbon Cutting
              </Link>
              <Link href="/becomeamember" className="btn btn-outline">
                Become a Member First
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
