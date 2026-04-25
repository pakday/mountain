import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactPerson from "@/components/ContactPerson";

export const metadata: Metadata = {
  title: "Scholarship Golf Tournament 2025 — Mountain West Chamber",
  description:
    "Annual Scholarship Golf Classic at Stonebridge Golf Course. Thursday, October 2, 2025. 7:30 AM registration, 8:30 AM Shotgun Start. All proceeds go to scholarships.",
};

const BASE = "/Structure/Programs/golf-tournament";

const agendaItems = [
  { time: "7:30 – 8:30 AM", label: "Check-In & Registration" },
  { time: "8:30 AM", label: "Shotgun Start" },
  { time: "Midday", label: "BBQ Lunch with all the fixin\u2019s" },
  { time: "~2:00 PM", label: "Awards Luncheon & Prize Drawing" },
];

export default function Page() {
  return (
    <>
      {/* ─── HERO ─── */}
      <PageHero
        imageSrc={`${BASE}/Green.jpeg`}
        imageAlt="Golf green at Stonebridge Golf Course"
        overlay="absolute inset-0 bg-linear-to-br from-primary/90 via-primary/70 to-slate-blue/60"
        eyebrow="Mountain West Chamber of Commerce"
        title={
          <>
            Scholarship <span className="text-yellow">Golf Classic</span>{" "}
            <span className="text-white">2025</span>
          </>
        }
        description="Thursday, October 2, 2025 · 7:30 AM Registration · 8:30 AM Shotgun Start · Stonebridge Golf Course, West Valley City, UT"
        actions={
          <>
            <a
              href="https://lp.constantcontactpages.com/ev/reg/hya9mx9/lp/19b74e5b-e44c-4a6a-ac98-9e9e969b534a"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-yellow btn-lg"
            >
              Register for Tournament
            </a>
            <Link href="/golf-sponsorships" className="btn btn-outline-white btn-lg">
              Learn More on Sponsorship
            </Link>
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
                <span className="text-yellow">&ldquo;Scholarship Golf Classic&rdquo;</span>
              </h2>
              <div className="section-divider mb-6" />
              <p className="font-body text-ink leading-relaxed mb-8">
                All proceeds above costs go to scholarships for local high school
                students and to educators. Prize drawing tickets are also available
                for purchase on the day of the event.
              </p>

              {/* Date / Time / Where block */}
              <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm ring-1 ring-black/5">
                <div className="flex flex-col gap-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-primary">
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-accent text-xs text-ink uppercase tracking-widest mb-0.5">Date</p>
                      <p className="font-body text-ink font-600">Thursday, October 2, 2025</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-primary">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-accent text-xs text-ink uppercase tracking-widest mb-0.5">Time</p>
                      <p className="font-body text-ink font-600">7:30 AM Registration · 8:30 AM Shotgun to 2:00 PM MDT</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-primary">
                        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-accent text-xs text-ink uppercase tracking-widest mb-0.5">Where</p>
                      <p className="font-body text-ink font-600">Stonebridge Golf Course</p>
                      <p className="font-body text-ink text-sm">4415 W Links Dr.<br />West Valley City, Utah</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Included note */}
              <div className="border-l-4 border-teal bg-white rounded-r-2xl px-6 py-4 mb-6">
                <p className="font-body text-ink text-sm leading-relaxed">
                  <strong className="text-primary">Driving Range &amp; Cart included.</strong>{" "}
                  Prize Drawing Tickets available for purchase. All proceeds go to scholarships for local high school students.
                </p>
              </div>

              <p className="font-body text-ink font-600 italic mb-6">&ldquo;A Great Time Will Be Had by All!&rdquo;</p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://events.r20.constantcontact.com/register/addtocalendar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                >
                  + Add to Calendar
                </a>
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

            {/* Right: flyers */}
            <div className="grid grid-cols-2 gap-4 self-start">
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-3/4">
                <Image
                  src={`${BASE}/2025+Golf+Tournament+Flyer+-+front+side.jpg`}
                  alt="Golf Tournament Flyer Front"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 300px"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-3/4">
                <Image
                  src={`${BASE}/2025+Golf+Tournament+Flyer+-+back+side.jpg`}
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
      <section className="py-(--section-l) bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <p className="eyebrow mb-3">Day Of Event</p>
              <h2 className="heading-l text-primary">Agenda</h2>
              <div className="section-divider mx-auto mt-5" />
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
                    <div className="hidden md:flex absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-teal items-center justify-center shadow">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 w-full">
                      <span className="font-accent text-sm font-700 text-primary min-w-40">{item.time}</span>
                      <span className="font-body text-base text-ink">{item.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <ContactPerson
        imageSrc={`${BASE}/Susan+Schilling+Sq.jpg`}
        bgClass="bg-off-white"
      />

      {/* ─── CTA ─── */}
      <section className="py-(--section-xl) bg-primary relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        <div className="relative z-10 container text-center">
          <p className="eyebrow text-teal mb-4">Together We Are Stronger</p>
          <h2 className="heading-xl text-white mb-5">
            All Proceeds Go to <span className="text-yellow">Scholarships</span>
          </h2>
          <p className="font-body text-white/75 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Thursday, October 2, 2025 · Stonebridge Golf Course · West Valley City, UT<br />
            All proceeds above costs go to scholarships to local high school students and to educators.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://lp.constantcontactpages.com/ev/reg/hya9mx9/lp/19b74e5b-e44c-4a6a-ac98-9e9e969b534a"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-yellow btn-lg"
            >
              Register for Tournament
            </a>
            <Link href="/golf-sponsorships" className="btn btn-outline-white btn-lg">
              Sponsorship Opportunities
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
