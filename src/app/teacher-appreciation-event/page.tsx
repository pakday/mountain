import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PhotoGallerySlider from "@/components/PhotoGallerySlider";
import ContactPerson from "@/components/ContactPerson";

export const metadata: Metadata = {
  title: "Teacher Appreciation Luncheon — Mountain West Chamber",
  description:
    "Join us for the Annual Teacher Appreciation Luncheon on May 1, 2025 at Herriman City Hall. 11:30 AM to 1:00 PM MDT. Teachers are the real superheroes!",
};

const BASE = "/Structure/Programs/teacher-appreciation-event";

export default function Page() {
  return (
    <>
      {/* ─── HERO ─── */}
      <PageHero
        imageSrc={`${BASE}/unsplash-image-OyCl7Y4y0Bk.jpg`}
        imageAlt="Teacher appreciation luncheon celebration"
        overlay="absolute inset-0 bg-linear-to-br from-primary/90 via-primary/80 to-slate-blue/70"
        eyebrow="Mountain West Chamber of Commerce"
        title={
          <>
            Annual Teacher <span className="text-yellow">Appreciation</span>{" "}
            Luncheon
          </>
        }
        description='"Teachers are the real superheroes!"'
        aside={
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 xl:w-72 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <Image
                src={`${BASE}/1.png`}
                alt="Teacher Appreciation Luncheon — May 1, 2025 event flyer"
                width={800}
                height={1036}
                className="object-cover w-full"
                priority
              />
              <div className="absolute bottom-4 left-4 bg-yellow text-primary font-heading font-700 text-sm px-4 py-1.5 rounded-full shadow-md">
                May 1 · 2025
              </div>
            </div>
          </div>
        }
        actions={
          <>
            <a
              href="https://lp.constantcontactpages.com/ev/reg/n9px8c4/lp/f4685d27-abef-4a3a-a435-e7f0fd36b7b0"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-yellow btn-lg"
            >
              Register for Luncheon
            </a>
            <Link
              href="/sponsorshipopps#teacher"
              className="btn btn-outline-white btn-lg"
            >
              Register to Sponsor
            </Link>
          </>
        }
      />

      {/* ─── EVENT DETAILS ─── */}
      <section className="py-(--section-l) bg-off-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: heading + details card */}
            <div>
              <p className="eyebrow mb-3">Annual Event</p>
              <h2 className="heading-l text-primary mb-5">
                Please Join Us for Our Annual{" "}
                <span className="text-yellow">
                  &ldquo;Teacher Appreciation Luncheon
                </span>
                &rdquo;
              </h2>
              <div className="section-divider mb-6" />
              <p className="font-body text-ink leading-relaxed mb-8">
                Teachers are the real superheroes! Join us for a luncheon
                celebrating the dedicated educators of our community.
              </p>

              {/* Date / Time / Venue */}
              <div className="bg-white rounded-2xl p-6 mb-5 shadow-sm ring-1 ring-black/5">
                <div className="flex flex-col gap-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        className="text-primary"
                      >
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-accent text-xs text-ink uppercase tracking-widest mb-0.5">
                        Date
                      </p>
                      <p className="font-body text-ink font-600">
                        Thursday, May 1, 2025
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        className="text-primary"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-accent text-xs text-ink uppercase tracking-widest mb-0.5">
                        Time
                      </p>
                      <p className="font-body text-ink font-600">
                        11:30 AM to 1:00 PM MDT
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        className="text-primary"
                      >
                        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-accent text-xs text-ink uppercase tracking-widest mb-0.5">
                        Where
                      </p>
                      <p className="font-body text-ink font-600">
                        Herriman City Hall
                      </p>
                      <p className="font-body text-ink text-sm">
                        5335 W. Main St.
                        <br />
                        Herriman, UT 84096
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action links */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://calendar.google.com/calendar/r/eventedit?text=Teacher+Appreciation+Luncheon&dates=20250501T173000Z/20250501T190000Z&location=5335+W+Main+St+Herriman+UT+84096"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                >
                  + Add to Calendar
                </a>
                <a
                  href="https://maps.google.com/maps?q=5335+W+Main+St+Herriman+UT+84096"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost btn-sm text-primary"
                >
                  Driving Directions →
                </a>
              </div>
            </div>

            {/* Right: Register / Sponsor cards */}
            <div className="flex flex-col gap-5">
              <div className="bg-primary rounded-2xl p-8 flex flex-col gap-5">
                <div>
                  <h3 className="heading-s text-white mb-2">
                    Register for Luncheon
                  </h3>
                  <p className="font-body text-white/70 text-sm leading-relaxed">
                    Secure your seat at the Annual Teacher Appreciation
                    Luncheon.
                  </p>
                </div>
                <a
                  href="https://lp.constantcontactpages.com/ev/reg/n9px8c4/lp/f4685d27-abef-4a3a-a435-e7f0fd36b7b0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-yellow self-start"
                >
                  Register Now
                </a>
              </div>
              <div className="bg-off-white rounded-2xl p-8 flex flex-col gap-5 border border-light-gray">
                <div>
                  <h3 className="heading-s text-primary mb-2">
                    Register to Sponsor
                  </h3>
                  <p className="font-body text-ink text-sm leading-relaxed">
                    Wonder Woman Sponsor or Appreciation Lunch Sponsor — support
                    this celebration of our community educators.
                  </p>
                </div>
                <Link
                  href="/sponsorshipopps#teacher"
                  className="btn btn-outline btn-sm self-start"
                >
                  View Sponsorship Options
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WONDER WOMAN SPONSOR ─── */}
      <section className="py-(--section-l) bg-white">
        <div className="container">
          <div className="text-center mb-10">
            <p className="eyebrow mb-3">Featured Sponsor</p>
            <h2 className="heading-m text-primary mb-4">
              Wonder Woman <span className="text-yellow">Sponsor</span>
            </h2>
            <div className="section-divider mx-auto mb-6" />
            <p className="font-body text-ink leading-relaxed max-w-xl mx-auto">
              A huge thank you to our Wonder Woman Sponsor for making this
              annual celebration of our educators possible.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="bg-off-white rounded-2xl p-10 shadow-sm ring-1 ring-black/5 max-w-sm w-full flex items-center justify-center">
              <Image
                src={`${BASE}/BowcuttFlooringAmerica.jpg`}
                alt="Bowcutt's Flooring America — Wonder Woman Sponsor"
                width={600}
                height={200}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── SPONSORSHIP PACKAGES ─── */}
      <section className="py-(--section-l) bg-off-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Sponsorship packages flyer */}
            <div className="flex justify-center">
              <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/10 max-w-md w-full">
                <Image
                  src={`${BASE}/2.png`}
                  alt="Teacher Appreciation Luncheon sponsorship packages — Wonder Woman $1500, Superman $1000, Batman $500, Captain Marvel $300"
                  width={900}
                  height={1170}
                  className="w-full h-auto"
                />
              </div>
            </div>
            {/* Right: Sponsorship info */}
            <div>
              <p className="eyebrow mb-3">Become a Sponsor</p>
              <h2 className="heading-l text-primary mb-5">
                Sponsorship <span className="text-yellow">Packages</span>
              </h2>
              <div className="section-divider mb-6" />
              <p className="font-body text-ink leading-relaxed mb-6">
                Support our community educators and gain valuable exposure for
                your business. Choose the level that works best for you — from
                Wonder Woman to Captain Marvel, every sponsor helps make this
                event a success.
              </p>
              <p className="font-body text-ink leading-relaxed mb-2">
                <strong>Teacher Gift Bag Donations</strong> are also needed.
                Your company will be recognized at the lunch and in the gift
                bags.
              </p>
              <p className="font-body text-ink text-sm mb-8">
                Sponsorship deadline: <strong>April 20</strong> for printed
                materials.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://lp.constantcontactpages.com/ev/reg/n9px8c4/lp/f4685d27-abef-4a3a-a435-e7f0fd36b7b0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Register to Sponsor
                </a>
                <a
                  href="mailto:susan@mountainwestchamber.org?subject=Teacher Appreciation Sponsorship"
                  className="btn btn-outline btn-sm"
                >
                  Contact Susan
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PHOTO GALLERY ─── */}
      <section className="py-(--section-l) bg-white overflow-hidden">
        <div className="container mb-12">
          <div className="text-center">
            <p className="eyebrow mb-3">Past Events</p>
            <h2 className="heading-l text-primary mb-4">
              Teacher Appreciation &mdash;{" "}
              <span className="text-yellow">An Amazing Celebration</span>
            </h2>
            <div className="section-divider mx-auto" />
          </div>
        </div>
        <div className="px-4 sm:px-8 lg:px-16">
          <PhotoGallerySlider />
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
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative z-10 container text-center">
          <p className="eyebrow text-teal mb-4">Together We Are Stronger</p>
          <h2 className="heading-xl text-white mb-5">
            Honor a Teacher &mdash;{" "}
            <span className="text-yellow">Strengthen Our Community</span>
          </h2>
          <p className="font-body text-white/75 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Thursday, May 1, 2025 · 11:30 AM to 1:00 PM MDT
            <br />
            Herriman City Hall · 5335 W. Main St., Herriman, UT
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://lp.constantcontactpages.com/ev/reg/n9px8c4/lp/f4685d27-abef-4a3a-a435-e7f0fd36b7b0"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-yellow btn-lg"
            >
              Register for Luncheon
            </a>
            <Link
              href="/sponsorshipopps#teacher"
              className="btn btn-outline-white btn-lg"
            >
              Become a Sponsor
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
