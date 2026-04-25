import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactPerson from "@/components/ContactPerson";

export const metadata: Metadata = {
  title: "Knight of Heroes Event — Mountain West Chamber",
  description:
    "Join us for the Annual Knight of Heroes event. Tuesday, November 11, 2025 from 6:00 PM to 9:00 PM MDT at Top Golf Salt Lake, Midvale, UT.",
};

const BASE = "/Structure/Programs/knight-of-heroes-event";

export default function Page() {
  return (
    <>
      {/* ─── HERO ─── */}
      <PageHero
        imageSrc="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1920&q=85"
        imageAlt="Knight of Heroes gala event"
        overlay="absolute inset-0 bg-linear-to-br from-primary/95 via-primary/85 to-slate-blue/70"
        eyebrow="Mountain West Chamber of Commerce"
        title={
          <>
            Knight of <span className="text-yellow">Heroes</span>
          </>
        }
        description="Please Join us for our Annual Knight of Heroes Event"
        aside={
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-72 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <Image
                src={`${BASE}/2025+Program+Flyers%20(1).png`}
                alt="2025 Knight of Heroes — Official Invitation"
                width={380}
                height={490}
                className="object-cover w-full"
                priority
              />
              <div className="absolute bottom-4 left-4 bg-yellow text-primary font-heading font-700 text-sm px-4 py-1.5 rounded-full shadow-md">
                Nov 11 · 2025
              </div>
            </div>
          </div>
        }
        actions={
          <>
            <a
              href="https://lp.constantcontactpages.com/ev/reg/cq6y5ue"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-yellow btn-lg"
            >
              Attend
            </a>
            <a
              href="https://lp.constantcontactpages.com/sv/uAxes3I"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-white btn-lg"
            >
              Nominate a Hero
            </a>
            <Link href="/sponsorshipopps" className="btn btn-secondary">
              Become a Sponsor
            </Link>
          </>
        }
      />

      {/* ─── EVENT DETAILS ─── */}
      <section className="py-(--section-l) bg-off-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: event info */}
            <div>
              <p className="eyebrow mb-3">Annual Event</p>
              <h2 className="heading-l text-primary mb-5">
                Please Join Us for Our Annual{" "}
                <span className="text-yellow">&ldquo;Knight of Heroes&rdquo;</span>
              </h2>
              <div className="section-divider mb-6" />

              {/* Date / Time / Venue */}
              <div className="bg-white rounded-2xl p-6 mb-5 shadow-sm ring-1 ring-black/5">
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
                      <p className="font-body text-ink font-600">Tuesday, November 11, 2025</p>
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
                      <p className="font-body text-ink font-600">6:00 PM to 9:00 PM MDT</p>
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
                      <p className="font-accent text-xs text-ink uppercase tracking-widest mb-0.5">Venue</p>
                      <p className="font-body text-ink font-600">Top Golf Salt Lake</p>
                      <p className="font-body text-ink text-sm">920 Jordan River Blvd<br />Midvale, UT 84047</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://events.r20.constantcontact.com/register/addtocalendar?oeidk=a07ej42ejm20207d3c3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                >
                  + Add to Calendar
                </a>
                <a
                  href="https://www.google.com/maps/dir//920+Jordan+River+Blvd,+Midvale,+UT+84047"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost btn-sm text-primary"
                >
                  Driving Directions →
                </a>
              </div>
            </div>

            {/* Right: flyer */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
                <Image
                  src={`${BASE}/2025+Program+Flyers.png`}
                  alt="2025 Knight of Heroes Event Flyer"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GET INVOLVED ─── */}
      <section className="py-(--section-l) bg-white">
        <div className="container">
          <div className="text-center max-w-xl mx-auto mb-12">
            <p className="eyebrow mb-3">Get Involved</p>
            <h2 className="heading-l text-primary">Three Ways to Participate</h2>
            <div className="section-divider mx-auto mt-5" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-primary rounded-2xl p-8 flex flex-col gap-5">
              <span className="font-heading text-yellow text-4xl font-700 opacity-30 leading-none">01</span>
              <div>
                <h3 className="heading-s text-white mb-2">Attend</h3>
                <p className="font-body text-white/70 text-sm leading-relaxed">
                  Purchase your tickets and join us for an evening honoring heroes at Top Golf Salt Lake.
                </p>
              </div>
              <a href="https://lp.constantcontactpages.com/ev/reg/cq6y5ue" target="_blank" rel="noopener noreferrer" className="btn btn-yellow btn-sm self-start mt-auto">
                Register Now
              </a>
            </div>
            <div className="bg-off-white rounded-2xl p-8 flex flex-col gap-5 border border-light-gray">
              <span className="font-heading text-teal text-4xl font-700 opacity-30 leading-none">02</span>
              <div>
                <h3 className="heading-s text-primary mb-2">Nominate a Hero</h3>
                <p className="font-body text-ink text-sm leading-relaxed">
                  Know someone in our community who deserves recognition? Submit a nomination.
                </p>
              </div>
              <a href="https://lp.constantcontactpages.com/sv/uAxes3I" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm self-start mt-auto">
                Submit Nomination
              </a>
            </div>
            <div className="bg-off-white rounded-2xl p-8 flex flex-col gap-5 border border-light-gray">
              <span className="font-heading text-primary text-4xl font-700 opacity-20 leading-none">03</span>
              <div>
                <h3 className="heading-s text-primary mb-2">Become a Sponsor</h3>
                <p className="font-body text-ink text-sm leading-relaxed">
                  Support this community event and increase your visibility among local business leaders.
                </p>
              </div>
              <Link href="/sponsorshipopps#knight" className="btn btn-outline btn-sm self-start mt-auto">
                View Sponsorships
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SPONSORS ─── */}
      <section className="py-(--section-l) bg-off-white">
        <div className="container">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">Event Sponsors</p>
            <h2 className="heading-l text-primary mb-4">Thank You to Our Sponsors</h2>
            <div className="section-divider mx-auto" />
          </div>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-stretch max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-8 flex flex-col items-center gap-5 flex-1 shadow-sm ring-1 ring-black/5">
              <span className="eyebrow text-ink text-xs">Title Sponsor</span>
              <div className="relative w-56 h-20 flex items-center justify-center">
                <Image
                  src={`${BASE}/Holy+Cross+Logo.jpeg`}
                  alt="CommonSpirit Holy Cross Hospital Jordan Valley"
                  width={220}
                  height={80}
                  className="object-contain"
                />
              </div>
              <p className="font-body text-xs text-ink text-center leading-relaxed">
                CommonSpirit Health · Holy Cross Hospital Jordan Valley
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 flex flex-col items-center justify-center gap-4 flex-1 border-2 border-dashed border-primary/20 text-center">
              <p className="font-accent font-700 text-sm text-primary uppercase tracking-wide">Become a Sponsor</p>
              <p className="font-body text-sm text-ink leading-relaxed">
                Raffle item donations and event sponsorships available.
              </p>
              <a href="mailto:susan@mountainwestchamber.org?subject=Knight%20of%20Heroes%20Sponsorship" className="btn btn-primary btn-sm">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <ContactPerson
        imageSrc={`${BASE}/Susan+Schilling+Sq.jpg`}
        bgClass="bg-white"
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
            Join Us November 11 &mdash; <span className="text-yellow">Honor a Hero</span>
          </h2>
          <p className="font-body text-white/75 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Tuesday, November 11, 2025 · 6:00 PM to 9:00 PM MDT<br />
            Top Golf Salt Lake · 920 Jordan River Blvd · Midvale, UT
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://lp.constantcontactpages.com/ev/reg/cq6y5ue" target="_blank" rel="noopener noreferrer" className="btn btn-yellow btn-lg">
              Register to Attend
            </a>
            <a href="https://lp.constantcontactpages.com/sv/uAxes3I" target="_blank" rel="noopener noreferrer" className="btn btn-outline-white btn-lg">
              Nominate a Hero
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
