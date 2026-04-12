import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Since 1997, the Mountain West Chamber of Commerce has been building bridges between businesses and the communities of Riverton, Herriman, and Bluffdale, Utah.",
};

export default function Page() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="relative py-28 overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=75"
            alt="Community business leaders"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="section-container relative z-10 py-28 text-left">
          <div className="max-w-3xl lg:max-w-2xl">
            <p className="eyebrow text-teal mb-4">
              Mountain West Chamber of Commerce
            </p>
            <h1 className="heading-2xl text-white mb-4">Our Story</h1>
            <div className="section-divider bg-teal mb-6" />
            <p className="font-body text-lg text-white/80 leading-relaxed">
              Building a stronger community through stronger businesses — since
              1997.
            </p>
          </div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="eyebrow mb-4">Who We Are</p>
              <h2 className="heading-xl text-primary mb-5">
                Benefiting &amp; Giving Back
              </h2>
              <div className="section-divider mb-6" />
              <p className="font-body text-base text-slate-600 leading-relaxed mb-5">
                We live and work in these communities just like you, and we want
                to work together to make them all stronger. If you&rsquo;re like
                us, you want to be part of a successful business in a thriving
                community — but it can be hard to know where to turn to find the
                connections and resources you need.
              </p>
              <p className="font-body text-base text-slate-600 leading-relaxed mb-8">
                At the Mountain West Chamber of Commerce, we get it. We&rsquo;ve
                been working in Riverton, Herriman, and Bluffdale
                since&nbsp;1997 to build bridges between businesses and the
                community. We focus on networking, business education, and
                political involvement within our cities.
              </p>
              <div className="bg-primary/5 border-l-4 border-teal rounded-r-xl p-6 mb-8">
                <p className="font-body text-base text-primary italic leading-relaxed">
                  &ldquo;Our members bridge business and community, through
                  leadership and volunteerism. Together we are stronger.&rdquo;
                </p>
                <p className="font-accent text-xs font-700 text-teal-dark uppercase tracking-wide mt-3">
                  MWCC Vision Statement
                </p>
              </div>
              <Link href="/becomeamember" className="btn btn-primary">
                Become a Member
              </Link>
            </div>

            {/* Image */}
            <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80"
                alt="Community leaders and business owners"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-primary py-14">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y-0 md:divide-x md:divide-white/15">
            {[
              { value: "27+", label: "Years Serving Utah" },
              { value: "300+", label: "Member Businesses" },
              { value: "20+", label: "Annual Events" },
              { value: "3", label: "Cities Represented" },
            ].map((s) => (
              <div key={s.label} className="px-6">
                <div
                  className="heading-2xl text-yellow font-800"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {s.value}
                </div>
                <div className="font-accent text-sm font-600 uppercase tracking-widest text-white/80 mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Give Back Events ── */}
      <section className="py-20 bg-off-white">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow mb-4">Community Give-Back</p>
            <h2 className="heading-xl text-primary mb-5">
              We Invest in Our Communities
            </h2>
            <div className="section-divider mx-auto mb-5" />
            <p className="font-body text-base text-slate-500 leading-relaxed">
              Our community give-back events include an annual teacher
              appreciation lunch, honoring local civic heroes, sports
              activities, and supporting community events throughout the year.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Teacher Appreciation Luncheon",
                description:
                  "Each spring we celebrate 25 outstanding local teachers with a luncheon recognizing their incredible dedication to our community's youth.",
                href: "/teacher-appreciation-event",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                ),
              },
              {
                title: "Scholarship Golf Tournament",
                description:
                  "Our annual fall golf tournament at Stonebridge Golf Course raises funds for scholarships supporting local high school students.",
                href: "/golf-tournament",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                  />
                ),
              },
              {
                title: "Knight of Heroes Gala",
                description:
                  "We honor police, fire, healthcare, and business heroes who go above and beyond for the Southwest Valley community each year.",
                href: "/knight-of-heroes-event",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                ),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="card p-8 flex flex-col gap-4 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-teal/15 flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-teal-dark"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {item.icon}
                  </svg>
                </div>
                <h3 className="heading-sm text-primary">{item.title}</h3>
                <p className="font-body text-sm text-slate-500 leading-relaxed flex-1">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="btn btn-ghost btn-sm self-start pl-0 text-teal font-700"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-primary">
        <div className="section-container text-center max-w-2xl mx-auto">
          <p className="eyebrow text-teal mb-5">Join Us</p>
          <h2 className="heading-xl text-white mb-5">
            Attend an Event to See What We Can Do For You
          </h2>
          <p className="font-body text-base text-white/80 mb-10 leading-relaxed">
            Come experience what the Chamber has to offer and see if it&rsquo;s
            a fit for you and your business.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/calendar" className="btn btn-yellow btn-lg">
              Attend an Event
            </Link>
            <Link
              href="/becomeamember"
              className="btn btn-outline-white btn-lg"
            >
              Become a Member
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
