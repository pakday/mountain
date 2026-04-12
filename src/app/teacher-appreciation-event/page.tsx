import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PhotoGallerySlider from "@/components/PhotoGallerySlider";

export const metadata: Metadata = {
  title: "Teacher Appreciation Luncheon | Mountain West Chamber of Commerce",
  description:
    "Join us for the Annual Teacher Appreciation Luncheon on May 1, 2025 at Herriman City Hall. Celebrating the real superheroes who shape our community's future.",
};

const BASE = "/Structure/Programs/teacher-appreciation-event";

/* ── SVG Icons ──────────────────────────────────────────── */
function CalendarIcon({ className }: { className?: string }) {
  return (
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
      className={className}
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
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
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
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
      className={className}
    >
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
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
      className={className}
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
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
      className={className}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.35 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function Page() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[88vh] flex items-end justify-start overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={`${BASE}/unsplash-image-OyCl7Y4y0Bk.jpg`}
            alt="Teacher appreciation luncheon celebration"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-br from-primary/92 via-primary/75 to-slate-blue/80" />
          {/* Bottom white diagonal cut */}
          <div
            className="absolute bottom-0 left-0 right-0 h-24 z-10"
            style={{
              background:
                "linear-gradient(to top right, white 50%, transparent 50%)",
            }}
          />
        </div>

        <div className="relative z-10 section-container max-w-7xl pb-32 pt-40 flex justify-start flex-1">
          <div className="max-w-3xl">
            <p className="eyebrow text-teal mb-4">
              Mountain West Chamber of Commerce
            </p>
            <h1
              className="heading-3xl text-white mb-5"
              style={{ lineHeight: 1.05 }}
            >
              Annual Teacher
              <br />
              <span className="text-yellow">Appreciation</span> Luncheon
            </h1>
            <p className="font-body text-xl text-white/85 mb-6 leading-relaxed italic font-medium">
              "Teachers are the real superheroes!"
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white rounded-full px-4 py-2 text-sm font-body font-semibold border border-white/20">
                <CalendarIcon className="shrink-0" />
                Thursday, May 1, 2025
              </span>
              <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white rounded-full px-4 py-2 text-sm font-body font-semibold border border-white/20">
                <ClockIcon className="shrink-0" />
                11:30 AM – 1:00 PM MDT
              </span>
              <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white rounded-full px-4 py-2 text-sm font-body font-semibold border border-white/20">
                <MapPinIcon className="shrink-0" />
                Herriman City Hall
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#registration"
                className="btn btn-yellow btn-lg font-heading text-primary"
              >
                Register Now
              </Link>
              <Link
                href="#sponsor"
                className="btn btn-outline-white btn-lg font-heading"
              >
                Become a Sponsor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── EVENT DETAILS ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="section-container max-w-7xl">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left: About the Event */}
            <div className="lg:col-span-3">
              <p className="eyebrow text-teal mb-3">About the Event</p>
              <h2 className="heading-2xl font-heading text-primary mb-6">
                Celebrating Our
                <br />
                Community Heroes
              </h2>
              <p className="font-body text-lg text-slate-700 leading-relaxed mb-5">
                Each year, the Mountain West Chamber of Commerce gathers
                alongside community leaders, business members, and supporters to
                honor the outstanding educators who shape the lives of students
                in Riverton, Herriman, and Bluffdale.
              </p>
              <p className="font-body text-lg text-slate-700 leading-relaxed mb-10">
                This special luncheon is a heartfelt celebration — an
                opportunity to thank teachers for their dedication, passion, and
                the extraordinary impact they have on our community's future.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    label: "Celebrate Excellence",
                    desc: "Honor educators who inspire our youth every day",
                  },
                  {
                    label: "Network & Connect",
                    desc: "Meet fellow business leaders and community educators",
                  },
                  {
                    label: "Quality Luncheon",
                    desc: "Enjoy a catered meal in a welcoming, professional setting",
                  },
                  {
                    label: "Community Impact",
                    desc: "Support education in Riverton, Herriman & Bluffdale",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-3 p-5 rounded-xl bg-off-white border border-light-gray"
                  >
                    <span className="text-yellow text-lg font-bold mt-0.5 shrink-0">
                      ★
                    </span>
                    <div>
                      <p className="font-heading font-semibold text-primary text-sm mb-1">
                        {item.label}
                      </p>
                      <p className="font-body text-slate-600 text-sm leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Details Card */}
            <div className="lg:col-span-2">
              <div className="bg-primary rounded-2xl overflow-hidden shadow-xl lg:sticky lg:top-8">
                {/* Card header bar */}
                <div className="bg-yellow px-8 py-5">
                  <p className="font-heading font-bold text-primary text-center uppercase tracking-widest text-sm">
                    Event Details
                  </p>
                </div>

                <div className="p-8 space-y-6">
                  {/* Date & Time */}
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-teal/20 flex items-center justify-center text-teal">
                      <CalendarIcon />
                    </div>
                    <div>
                      <p className="text-xs font-body font-bold uppercase tracking-widest text-teal mb-1">
                        Date & Time
                      </p>
                      <p className="font-heading text-white font-semibold">
                        Thursday, May 1, 2025
                      </p>
                      <p className="font-body text-white/70 text-sm mt-0.5">
                        11:30 AM – 1:00 PM MDT
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-white/10" />

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-teal/20 flex items-center justify-center text-teal">
                      <MapPinIcon />
                    </div>
                    <div>
                      <p className="text-xs font-body font-bold uppercase tracking-widest text-teal mb-1">
                        Location
                      </p>
                      <p className="font-heading text-white font-semibold">
                        Herriman City Hall
                      </p>
                      <p className="font-body text-white/70 text-sm mt-0.5 leading-snug">
                        5335 W. Main St.
                        <br />
                        Herriman, UT 84096
                      </p>
                      <a
                        href="https://maps.google.com/maps?q=5335+W+Main+St+Herriman+UT+84096"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-2 text-teal text-sm font-semibold hover:text-yellow transition-colors"
                      >
                        Driving Directions
                        <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>

                  <div className="border-t border-white/10" />

                  {/* Contact */}
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-teal/20 flex items-center justify-center text-teal">
                      <MailIcon />
                    </div>
                    <div>
                      <p className="text-xs font-body font-bold uppercase tracking-widest text-teal mb-1">
                        Contact
                      </p>
                      <p className="font-heading text-white font-semibold">
                        Susan Schilling
                      </p>
                      <p className="font-body text-white/70 text-sm mt-0.5 mb-2">
                        Mountain West Chamber of Commerce
                      </p>
                      <a
                        href="tel:8012800595"
                        className="block text-teal text-sm font-semibold hover:text-yellow transition-colors"
                      >
                        801-280-0595
                      </a>
                      <a
                        href="mailto:susan@mountainwestchamber.org"
                        className="block text-teal text-sm font-semibold hover:text-yellow transition-colors mt-0.5"
                      >
                        susan@mountainwestchamber.org
                      </a>
                    </div>
                  </div>

                  <div className="border-t border-white/10" />

                  {/* CTAs */}
                  <div className="space-y-3 pt-1">
                    <Link
                      href="#registration"
                      className="btn btn-yellow btn-lg w-full text-center text-primary font-heading"
                    >
                      Register for Luncheon
                    </Link>
                    <a
                      href="https://calendar.google.com/calendar/r/eventedit?text=Teacher+Appreciation+Luncheon&dates=20250501T173000Z/20250501T190000Z&details=Annual+Teacher+Appreciation+Luncheon+by+Mountain+West+Chamber+of+Commerce&location=5335+W+Main+St+Herriman+UT+84096"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-white w-full text-center text-sm font-body"
                    >
                      Add to Calendar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── REGISTRATION & SPONSORSHIP ── */}
      <section id="registration" className="py-20 md:py-28 bg-off-white">
        <div className="section-container max-w-7xl">
          <div className="text-center mb-14">
            <p className="eyebrow text-teal mb-3">Get Involved</p>
            <h2 className="heading-2xl font-heading text-primary mb-4">
              Register or Sponsor
            </h2>
            <p className="font-body text-lg text-slate-700 max-w-2xl mx-auto">
              Join us in celebrating our amazing teachers or amplify your impact
              through sponsorship
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Attendee Registration */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-light-gray hover:shadow-xl transition-shadow group">
              <div className="h-1.5 bg-teal" />
              <div className="p-8 md:p-10">
                <div className="w-16 h-16 rounded-xl bg-teal/10 flex items-center justify-center mb-6 group-hover:bg-teal/20 transition-colors">
                  <svg
                    className="w-8 h-8 text-teal"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM9 19c-4.35 0-8 1.343-8 3v2h16v-2c0-1.657-3.65-3-8-3z"
                    />
                  </svg>
                </div>
                <h3 className="heading-lg font-heading text-primary mb-3">
                  Register for Luncheon
                </h3>
                <p className="font-body text-slate-700 mb-8 leading-relaxed">
                  Secure your seat at the Annual Teacher Appreciation Luncheon.
                  Celebrate alongside educators, community leaders, and fellow
                  chamber members.
                </p>
                <Link
                  href="#"
                  className="btn btn-primary btn-lg w-full text-center"
                >
                  Register as Attendee
                </Link>
              </div>
            </div>

            {/* Sponsorship */}
            <div
              id="sponsor"
              className="bg-linear-to-br from-primary to-slate-blue rounded-2xl shadow-lg overflow-hidden text-white hover:shadow-xl transition-shadow group"
            >
              <div className="h-1.5 bg-yellow" />
              <div className="p-8 md:p-10">
                <div className="w-16 h-16 rounded-xl bg-yellow/20 flex items-center justify-center mb-6 group-hover:bg-yellow/30 transition-colors">
                  <svg
                    className="w-8 h-8 text-yellow"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <h3 className="heading-lg font-heading text-white mb-3">
                  Register to Sponsor
                </h3>
                <p className="font-body text-off-white/90 mb-8 leading-relaxed">
                  Show your company's commitment to education in our community.
                  Multiple sponsorship tiers available for this special annual
                  event.
                </p>
                <Link
                  href="#sponsor-tiers"
                  className="btn btn-yellow btn-lg w-full text-center text-primary font-heading"
                >
                  View Sponsorship Opportunities
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SPONSORSHIP TIERS ── */}
      <section id="sponsor-tiers" className="py-20 md:py-28 bg-white">
        <div className="section-container max-w-7xl">
          <div className="text-center mb-14">
            <p className="eyebrow text-teal mb-3">Sponsorship Opportunities</p>
            <h2 className="heading-2xl font-heading text-primary mb-4">
              Sponsor This Celebration
            </h2>
            <p className="font-body text-lg text-slate-700 max-w-2xl mx-auto">
              Partner with the Mountain West Chamber to honor the educators
              making a difference in our community
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Wonder Woman Sponsor — Featured */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-yellow shadow-xl">
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-yellow text-primary text-xs font-heading font-bold uppercase tracking-wide px-3 py-1 rounded-full">
                  Featured
                </span>
              </div>
              <div className="bg-linear-to-br from-primary to-slate-blue p-8 text-white h-full flex flex-col">
                <p className="text-yellow font-heading text-xs font-bold uppercase tracking-widest mb-2">
                  Top Tier
                </p>
                <h3 className="heading-lg font-heading text-white mb-4">
                  Wonder Woman Sponsor
                </h3>
                <p className="font-body text-white/85 leading-relaxed mb-6">
                  The ultimate tribute to our superhero teachers. This premium
                  sponsorship places your brand front and center at a
                  celebration honoring our community's finest educators.
                </p>
                <ul className="space-y-2 mb-8 font-body text-sm text-white/80 flex-1">
                  {[
                    "Premier event recognition",
                    "Logo on all event materials",
                    "Featured table seating",
                    "Social media spotlight",
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2">
                      <span className="text-yellow shrink-0">
                        <CheckIcon />
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Link
                  href="mailto:susan@mountainwestchamber.org"
                  className="btn btn-yellow btn-lg w-full text-center text-primary font-heading"
                >
                  Become a Wonder Woman Sponsor
                </Link>
              </div>
            </div>

            {/* Appreciation Lunch Sponsor */}
            <div className="rounded-2xl overflow-hidden border border-light-gray shadow-lg flex flex-col">
              <div className="bg-teal/10 p-8 border-b border-teal/20 flex-1 flex flex-col">
                <p className="text-teal font-heading text-xs font-bold uppercase tracking-widest mb-2">
                  Supporting Tier
                </p>
                <h3 className="heading-lg font-heading text-primary mb-4">
                  Appreciation Lunch Sponsor
                </h3>
                <p className="font-body text-slate-700 leading-relaxed mb-6">
                  Sponsor the luncheon that brings teachers, community leaders,
                  and businesses together. A meaningful way to invest in local
                  education and show your commitment.
                </p>
                <ul className="space-y-2 mb-8 font-body text-sm text-slate-600 flex-1">
                  {[
                    "Event recognition",
                    "Name & logo in program",
                    "Reserved seating",
                    "Community visibility",
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2">
                      <span className="text-teal shrink-0">
                        <CheckIcon />
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Link
                  href="mailto:susan@mountainwestchamber.org"
                  className="btn btn-primary btn-lg w-full text-center font-heading"
                >
                  Become a Lunch Sponsor
                </Link>
              </div>
            </div>
          </div>

          <p className="text-center mt-10 font-body text-slate-600">
            Questions about sponsorship? Contact{" "}
            <a
              href="mailto:susan@mountainwestchamber.org"
              className="text-teal font-semibold hover:text-teal-dark transition-colors"
            >
              Susan Schilling
            </a>{" "}
            at{" "}
            <a
              href="tel:8012800595"
              className="text-teal font-semibold hover:text-teal-dark transition-colors"
            >
              801-280-0595
            </a>
          </p>
        </div>
      </section>

      {/* ── PHOTO GALLERY ── */}
      <section className="py-20 md:py-28 bg-light-gray overflow-hidden">
        <div className="section-container max-w-7xl mb-12">
          <div className="text-center">
            <p className="eyebrow text-teal mb-3">Past Events</p>
            <h2 className="heading-2xl font-heading text-primary mb-4">
              Teacher Appreciation —{" "}
              <span className="text-teal">An Amazing Celebration</span>
            </h2>
            <p className="font-body text-lg text-slate-700 max-w-2xl mx-auto">
              Highlights and memories from past Teacher Appreciation events in
              our community
            </p>
          </div>
        </div>

        {/* Full-bleed slider with padding */}
        <div className="px-4 sm:px-8 lg:px-16">
          <PhotoGallerySlider />
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative py-20 bg-primary overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute top-0 right-0 w-125 h-125 bg-yellow/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-125 h-125 bg-teal/10 rounded-full blur-3xl" />
        </div>
        <div className="section-container relative z-10 text-center max-w-3xl">
          <p className="eyebrow text-teal mb-4">Don't Miss This</p>
          <h2
            className="heading-xl font-heading text-white mb-5"
            style={{ lineHeight: 1.1 }}
          >
            Honor a Teacher.
            <br />
            Strengthen Our Community.
          </h2>
          <p className="font-body text-lg text-white/80 mb-8 leading-relaxed">
            Join the Mountain West Chamber of Commerce on Thursday, May 1, 2025
            at Herriman City Hall — 11:30 AM to 1:00 PM MDT
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#registration"
              className="btn btn-yellow btn-lg font-heading text-primary"
            >
              Register Today
            </Link>
            <a
              href="mailto:susan@mountainwestchamber.org"
              className="btn btn-outline-white btn-lg font-heading"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="py-20 md:py-28 bg-off-white">
        <div className="section-container max-w-4xl">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Susan photo & title */}
              <div className="relative bg-primary flex flex-col items-center justify-center p-10 text-center">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-teal mb-5 shadow-lg">
                  <Image
                    src={`${BASE}/Susan+Schilling+Sq.jpg`}
                    alt="Susan Schilling, President of Mountain West Chamber"
                    fill
                    className="object-cover object-top"
                    sizes="128px"
                  />
                </div>
                <h3 className="heading-md font-heading text-white mb-1">
                  Susan Schilling
                </h3>
                <p className="text-teal font-body font-semibold text-sm mb-1">
                  President
                </p>
                <p className="font-body text-white/60 text-sm">
                  Mountain West Chamber of Commerce
                </p>
              </div>

              {/* Contact details */}
              <div className="p-10 flex flex-col justify-center">
                <p className="eyebrow text-teal mb-2">Questions?</p>
                <h3 className="heading-lg font-heading text-primary mb-2">
                  Let Us Know
                </h3>
                <p className="font-body text-slate-600 text-sm mb-7 leading-relaxed">
                  We're happy to answer any questions about the event,
                  registration, or sponsorship.
                </p>
                <div className="space-y-5">
                  <a
                    href="tel:8012800595"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center text-teal shrink-0 group-hover:bg-teal/20 transition-colors">
                      <PhoneIcon />
                    </div>
                    <div>
                      <p className="text-xs font-body text-slate-400 uppercase tracking-wide mb-0.5">
                        Phone
                      </p>
                      <p className="font-heading text-primary font-semibold">
                        801-280-0595
                      </p>
                    </div>
                  </a>
                  <a
                    href="mailto:susan@mountainwestchamber.org"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center text-teal shrink-0 group-hover:bg-teal/20 transition-colors">
                      <MailIcon />
                    </div>
                    <div>
                      <p className="text-xs font-body text-slate-400 uppercase tracking-wide mb-0.5">
                        Email
                      </p>
                      <p className="font-heading text-primary font-semibold break-all">
                        susan@mountainwestchamber.org
                      </p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center text-teal shrink-0">
                      <MapPinIcon />
                    </div>
                    <div>
                      <p className="text-xs font-body text-slate-400 uppercase tracking-wide mb-0.5">
                        Venue
                      </p>
                      <p className="font-heading text-primary font-semibold">
                        Herriman City Hall
                      </p>
                      <p className="font-body text-slate-600 text-sm">
                        5335 W. Main St., Herriman, UT 84096
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
