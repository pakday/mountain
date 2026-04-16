import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Golf Tournament 2025",
  description:
    "Join the Annual Scholarship Golf Classic at Stonebridge Golf Course. October 2, 2025.",
};

const agendaItems = [
  { time: "7:30 – 8:30 AM", label: "Check-In & Registration" },
  { time: "8:30 AM", label: "Shotgun Start" },
  { time: "Midday", label: "BBQ Lunch with all the fixin's" },
  { time: "~2:00 PM", label: "Awards Luncheon & Prize Drawing" },
];

export default function Page() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-[65vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Structure/Programs/golf-tournament/Green.jpeg"
            alt="Golf green at Stonebridge Golf Course"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-br from-primary/90 via-primary/70 to-teal-dark/60" />
        </div>

        <div className="relative z-10 section-container w-full max-w-7xl pb-28 pt-36">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-2xl">
              <p className="eyebrow text-teal mb-4">
                Mountain West Chamber of Commerce
              </p>
              <h1
                className="heading-3xl text-white mb-4"
                style={{ lineHeight: 1.05 }}
              >
                Scholarship
                <br />
                <span className="text-yellow">Golf Classic</span>{" "}
                <span className="text-white">2025</span>
              </h1>
              <p className="font-body text-lg text-white/85 max-w-xl leading-relaxed">
                Thursday, October 2, 2025 · 7:30 AM Registration · 8:30 AM
                Shotgun Start
                <br />
                <span className="text-teal font-600">
                  Stonebridge Golf Course, West Valley City, UT
                </span>
              </p>
            </div>
            {/* Quick badges */}
            <div className="flex flex-wrap gap-3 lg:flex-col lg:items-end">
              {[
                { icon: "📅", label: "October 2, 2025" },
                { icon: "📍", label: "Stonebridge Golf Course" },
                { icon: "🎓", label: "All Proceeds → Scholarships" },
              ].map((b) => (
                <div
                  key={b.label}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2"
                >
                  <span>{b.icon}</span>
                  <span className="font-accent text-white text-sm font-600">
                    {b.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="https://lp.constantcontactpages.com/ev/reg/hya9mx9/lp/19b74e5b-e44c-4a6a-ac98-9e9e969b534a"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-yellow btn-lg"
            >
              Register for Tournament
            </a>
            <Link
              href="/golf-sponsorships"
              className="btn btn-outline-white btn-lg"
            >
              View Sponsorship Options
            </Link>
          </div>
        </div>
      </section>

      {/* ─── EVENT HIGHLIGHTS STRIP ─── */}
      <section className="bg-primary py-10">
        <div className="section-container max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {[
              { value: "144", label: "Golfers" },
              { value: "18", label: "Holes" },
              { value: "Drive & Cart", label: "Included" },
              { value: "Awards", label: "Luncheon" },
            ].map((s) => (
              <div key={s.value} className="bg-primary px-6 py-8 text-center">
                <div className="heading-l text-yellow mb-1">{s.value}</div>
                <div className="eyebrow text-white/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT + FLYERS ─── */}
      <section className="py-20 bg-white">
        <div className="section-container max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Left: details */}
            <div>
              <p className="eyebrow text-teal mb-3">Annual Event</p>
              <h2 className="heading-2xl text-primary mb-4">
                Please Join Us for a{" "}
                <span className="text-teal-dark">Great Day on the Course</span>
              </h2>
              <div className="section-divider mb-6" />
              <p className="font-body text-base text-slate-600 leading-relaxed mb-6">
                All proceeds above costs go directly to scholarships for local
                high school students and support for educators. Prize drawing
                tickets are also available for purchase on the day of the event.
              </p>
              <p className="font-body text-sm font-600 italic text-slate-500 mb-8">
                "A Great Time Will Be Had by All!"
              </p>

              {/* Where */}
              <div className="bg-off-white rounded-2xl p-6 mb-6">
                <h3 className="heading-sm text-primary mb-3 flex items-center gap-2">
                  <span className="text-teal">📍</span> Where
                </h3>
                <p className="font-body text-base text-slate-700 font-600">
                  Stonebridge Golf Course
                </p>
                <p className="font-body text-sm text-slate-500">
                  4415 W Links Dr.
                </p>
                <p className="font-body text-sm text-slate-500">
                  West Valley City, Utah
                </p>
                <a
                  href="https://maps.google.com/?q=4415+W+Links+Dr+West+Valley+City+UT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost btn-sm pl-0 text-teal mt-3 inline-flex"
                >
                  Get Driving Directions →
                </a>
              </div>

              {/* Add to calendar */}
              <a
                href="https://lp.constantcontactpages.com/ev/reg/hya9mx9/lp/19b74e5b-e44c-4a6a-ac98-9e9e969b534a"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline inline-flex items-center gap-2"
              >
                <span>📅</span> Add to Calendar
              </a>
            </div>

            {/* Right: flyers */}
            <div className="grid grid-cols-2 gap-4 self-start">
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-3/4">
                <Image
                  src="/Structure/Programs/golf-tournament/2025+Golf+Tournament+Flyer+-+front+side.jpg"
                  alt="Golf Tournament Flyer Front"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 300px"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-3/4">
                <Image
                  src="/Structure/Programs/golf-tournament/2025+Golf+Tournament+Flyer+-+back+side.jpg"
                  alt="Golf Tournament Flyer Back"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 300px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── AGENDA ─── */}
      <section className="py-20 bg-off-white">
        <div className="section-container max-w-4xl">
          <div className="text-center mb-12">
            <p className="eyebrow text-teal mb-3">Day Of</p>
            <h2 className="heading-l text-primary">Event Agenda</h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-teal/30 hidden md:block" />
            <div className="flex flex-col gap-0">
              {agendaItems.map((item, i) => (
                <div
                  key={i}
                  className="relative flex items-start gap-6 md:pl-20 py-5 border-b border-light-gray last:border-0"
                >
                  {/* Dot */}
                  <div className="hidden md:flex absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-teal items-center justify-center shadow-md">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 w-full">
                    <span className="font-accent text-sm font-700 text-teal-dark min-w-40">
                      {item.time}
                    </span>
                    <span className="font-body text-base text-slate-700">
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 bg-white rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-4 shadow-sm">
            <svg
              className="w-8 h-8 text-teal shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
            <p className="font-body text-sm text-slate-600 leading-relaxed">
              <strong className="text-primary">Prize Drawing Tickets</strong>{" "}
              available for purchase on the day of the event. Driving Range &
              Cart included with all registrations.
            </p>
          </div>
        </div>
      </section>

      {/* ─── CONTACT / ORGANIZER ─── */}
      <section className="py-20 bg-white">
        <div className="section-container max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact card */}
            <div className="bg-primary rounded-3xl p-10 text-white flex flex-col gap-6">
              <div>
                <p className="eyebrow text-teal mb-3">Questions?</p>
                <h2 className="heading-l text-white mb-2">Get In Touch</h2>
                <p className="font-body text-white/75 text-sm leading-relaxed">
                  Reach out to Susan Schilling directly for questions about
                  registration, sponsorships, or event details.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <a
                  href="tel:801-280-0595"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-teal transition-colors duration-200">
                    <svg
                      className="w-5 h-5 text-teal group-hover:text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <span className="font-body text-white/90 text-sm">
                    801-280-0595
                  </span>
                </a>
                <a
                  href="mailto:susan@mountainwestchamber.org"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-teal transition-colors duration-200">
                    <svg
                      className="w-5 h-5 text-teal group-hover:text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="font-body text-white/90 text-sm">
                    susan@mountainwestchamber.org
                  </span>
                </a>
              </div>
              <div className="pt-2 border-t border-white/15 flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-teal/50">
                  <Image
                    src="/Structure/Programs/golf-tournament/Susan+Schilling+Sq.jpg"
                    alt="Susan Schilling"
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <p className="font-accent font-700 text-sm text-white">
                    Susan Schilling
                  </p>
                  <p className="font-body text-xs text-white/60">
                    President, Mountain West Chamber
                  </p>
                </div>
              </div>
            </div>

            {/* Register CTA */}
            <div>
              <p className="eyebrow text-teal mb-3">Join the Classic</p>
              <h2 className="heading-xl text-primary mb-4">
                Ready to <span className="text-teal-dark">Tee Off?</span>
              </h2>
              <div className="section-divider mb-6" />
              <p className="font-body text-base text-slate-600 leading-relaxed mb-8">
                Register today for the Annual Scholarship Golf Classic. Spots
                are limited — secure your foursome now. All proceeds go to
                scholarships for local high school students and support for
                educators in the Southwest Valley.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://lp.constantcontactpages.com/ev/reg/hya9mx9/lp/19b74e5b-e44c-4a6a-ac98-9e9e969b534a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg"
                >
                  Register for Tournament
                </a>
                <Link
                  href="/golf-sponsorships"
                  className="btn btn-outline btn-lg"
                >
                  Sponsorship Options
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
