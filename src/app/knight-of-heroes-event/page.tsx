import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Knight of Heroes Event | Mountain West Chamber of Commerce",
  description:
    "Join us for Diamonds & Denim — a gala evening honoring the local heroes of our community. Tuesday, November 11, 2025, 6–9 PM at Top Golf Salt Lake.",
};

/* ── SVG Icons ─────────────────────────────────────────── */
function CalendarIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
function MapPinIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function ShirtIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z" />
    </svg>
  );
}

/* ── Event detail badge (used in hero glass card) ─────── */
function DetailBadge({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 text-teal shrink-0">{icon}</span>
      <div>
        <p className="font-accent text-xs uppercase tracking-widest text-white/55 mb-0.5">
          {label}
        </p>
        <p className="font-body text-sm text-white font-semibold leading-snug">
          {value}
        </p>
      </div>
    </div>
  );
}

/* ── "Get Involved" action card ───────────────────────── */
function ActionCard({
  number,
  title,
  description,
  href,
  cta,
  accentClass,
  btnClass,
}: {
  number: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  accentClass: string;
  btnClass: string;
}) {
  return (
    <div
      className={`bg-white/5 border ${accentClass} rounded-2xl p-8 flex flex-col gap-4 hover:bg-white/10 transition-colors duration-300`}
    >
      <span className="font-heading font-extrabold text-5xl opacity-20 text-white leading-none">
        {number}
      </span>
      <h3 className="heading-sm text-white">{title}</h3>
      <p className="font-body text-sm text-white/65 leading-relaxed flex-1">
        {description}
      </p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn ${btnClass} btn-sm self-start`}
      >
        {cta}
      </a>
    </div>
  );
}

export default function Page() {
  return (
    <>
      {/* ══════════════════════════════════════════
          HERO — Cinematic gala atmosphere
      ══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background photo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1920&q=85"
            alt="Elegant gala event background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Rich deep-blue overlay, lighter on the right to let flyer breathe */}
          <div className="absolute inset-0 bg-linear-to-r from-[#0D3B66]/97 via-[#0D3B66]/88 to-[#1a4f82]/70" />
          {/* Subtle diamond-grid texture */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg,#5DCAD1 0 1px,transparent 0 50%),repeating-linear-gradient(-45deg,#5DCAD1 0 1px,transparent 0 50%)",
              backgroundSize: "36px 36px",
            }}
          />
        </div>

        {/* Hero content */}
        <div className="section-container relative z-10 w-full max-w-7xl py-28 lg:py-36">
          <div className="grid lg:grid-cols-[1fr_auto] gap-14 items-center">
            {/* ── Left column: event info ── */}
            <div className="max-w-2xl">
              <p className="eyebrow text-teal mb-5">Annual Signature Event</p>

              {/* Shield logo */}
              <div className="mb-6">
                <Image
                  src="/Structure/Programs/knight-of-heroes-event/Knight+of+Heroes+MWCOC.png"
                  alt="Knight of Heroes MWCC shield"
                  width={100}
                  height={100}
                  className="opacity-85 drop-shadow-lg"
                />
              </div>

              <h1
                className="heading-2xl text-white mb-2"
                style={{ lineHeight: "1.05" }}
              >
                Knight of{" "}
                <span
                  className="text-yellow"
                  style={{ WebkitTextStroke: "0px" }}
                >
                  Heroes
                </span>
              </h1>
              <p
                className="font-accent text-xl text-white/80 italic mb-8"
                style={{ fontStyle: "italic" }}
              >
                Diamonds &amp; Denim: An Evening for Heroes to Shine
              </p>
              <p className="font-body text-white/60 text-sm font-semibold uppercase tracking-widest mb-5">
                Presented by Mountain West Chamber of Commerce
              </p>

              {/* Glass event-details card */}
              <div className="grid sm:grid-cols-2 gap-5 bg-white/6 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-10">
                <DetailBadge
                  icon={<CalendarIcon />}
                  label="Date"
                  value="Tuesday, November 11, 2025"
                />
                <DetailBadge
                  icon={<ClockIcon />}
                  label="Time"
                  value="6:00 PM – 9:00 PM MDT"
                />
                <DetailBadge
                  icon={<MapPinIcon />}
                  label="Venue"
                  value="Top Golf Salt Lake · Midvale, UT"
                />
                <DetailBadge
                  icon={<ShirtIcon />}
                  label="Dress Attire"
                  value="Jeans and Bling ✨"
                />
              </div>

              {/* Primary CTAs */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://lp.constantcontactpages.com/ev/reg/cq6y5ue"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-yellow btn-lg"
                >
                  Register to Attend
                </a>
                <a
                  href="https://lp.constantcontactpages.com/sv/uAxes3I"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-white"
                >
                  Nominate a Hero
                </a>
                <a
                  href="https://lp.constantcontactpages.com/ev/reg/cq6y5ue"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Become a Sponsor
                </a>
              </div>
            </div>

            {/* ── Right column: 2025 flyer ── */}
            <div className="hidden lg:block relative shrink-0">
              <div className="relative w-95 rounded-3xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.6)] ring-1 ring-white/10">
                <Image
                  src="/Structure/Programs/knight-of-heroes-event/2025+Program+Flyers%20(1).png"
                  alt="2025 Knight of Heroes – Diamonds & Denim official invitation"
                  width={380}
                  height={490}
                  className="object-cover w-full"
                  priority
                />
              </div>
              {/* Date badge overlapping flyer */}
              <div className="absolute -bottom-5 -left-5 bg-yellow text-primary px-5 py-3 rounded-xl shadow-2xl font-accent font-bold text-sm uppercase tracking-wide">
                Nov 11 · 2025
              </div>
            </div>
          </div>
        </div>

        {/* Scroll nudge */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40">
          <span className="font-accent text-[10px] tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-10 bg-linear-to-b from-white/40 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          LOCATION / QUICK-INFO BAR
      ══════════════════════════════════════════ */}
      <div className="bg-[#071f36] border-b border-white/5 py-4">
        <div className="section-container flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-white/65 text-sm font-body">
          <span className="flex items-center gap-2">
            <MapPinIcon />
            <span>
              Top Golf Salt Lake · 920 Jordan River Blvd · Midvale, UT 84047
            </span>
          </span>
          <a
            href="https://www.google.com/maps/dir//920+Jordan+River+Blvd,+Midvale,+UT+84047"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal hover:text-white transition-colors font-semibold"
          >
            Get Directions →
          </a>
          <a
            href="https://events.r20.constantcontact.com/register/addtocalendar?oeidk=a07ej42ejm20207d3c3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal hover:text-white transition-colors font-semibold"
          >
            + Add to Calendar
          </a>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          ABOUT THE EVENT
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-off-white">
        <div className="section-container max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <p className="eyebrow mb-4">About the Event</p>
              <h2 className="heading-xl text-primary mb-5">
                Honoring the Heroes{" "}
                <span className="text-teal-dark">of Our Community</span>
              </h2>
              <div className="section-divider mb-6" />
              <p className="font-body text-base text-slate-600 leading-relaxed mb-5">
                Each year, the Mountain West Chamber of Commerce hosts the{" "}
                <strong>Knight of Heroes</strong> event to celebrate the
                extraordinary men and women who serve our community — first
                responders, healthcare workers, educators, and business leaders
                who go above and beyond every single day.
              </p>
              <p className="font-body text-base text-slate-600 leading-relaxed mb-8">
                The 2025 theme,{" "}
                <em className="text-primary font-semibold">
                  Diamonds &amp; Denim
                </em>
                , invites guests to dress in their finest jeans and bling as we
                gather for an award ceremony, dinner, and optional golfing at
                Top Golf Salt Lake. Come ready to honor, celebrate, and shine.
              </p>

              {/* Evening breakdown */}
              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                {[
                  {
                    emoji: "🏆",
                    label: "Awards",
                    sub: "Hero recognition ceremony",
                  },
                  {
                    emoji: "🍽️",
                    label: "Dinner",
                    sub: "Catered dinner & networking",
                  },
                  { emoji: "⛳", label: "Golf", sub: "Optional at Top Golf" },
                ].map(({ emoji, label, sub }) => (
                  <div
                    key={label}
                    className="bg-white rounded-xl p-5 text-center shadow-sm border border-light-gray hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="text-3xl mb-2">{emoji}</div>
                    <p className="font-accent font-bold text-sm text-primary uppercase tracking-wide">
                      {label}
                    </p>
                    <p className="font-body text-xs text-slate-400 mt-1">
                      {sub}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href="https://lp.constantcontactpages.com/ev/reg/cq6y5ue"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Register to Attend
              </a>
            </div>

            {/* 2025 full-flyer image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/Structure/Programs/knight-of-heroes-event/2025+Program+Flyers.png"
                  alt="2025 Knight of Heroes event details"
                  width={600}
                  height={700}
                  className="object-cover w-full"
                />
              </div>
              {/* Date badge */}
              <div className="absolute -top-5 -right-5 bg-primary text-white rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-xl text-center ring-4 ring-yellow">
                <span className="font-accent font-bold text-xs tracking-widest uppercase">
                  Nov
                </span>
                <span className="font-heading font-extrabold text-3xl leading-none text-yellow">
                  11
                </span>
                <span className="font-accent text-xs text-teal">2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          GET INVOLVED — 3 action cards
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-primary relative overflow-hidden">
        {/* Subtle diamond pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg,#F7DE32 0 1px,transparent 0 50%),repeating-linear-gradient(-45deg,#F7DE32 0 1px,transparent 0 50%)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="section-container max-w-6xl relative z-10">
          <div className="text-center mb-14">
            <p className="eyebrow text-teal mb-3">Get Involved</p>
            <h2 className="heading-xl text-white">Three Ways to Participate</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <ActionCard
              number="01"
              title="Attend the Event"
              description="Purchase your tickets for an unforgettable evening of awards, dinner, and optional golf. Celebrate alongside local heroes and MWCC members."
              href="https://lp.constantcontactpages.com/ev/reg/cq6y5ue"
              cta="Register Now"
              accentClass="border-yellow/25"
              btnClass="btn-yellow"
            />
            <ActionCard
              number="02"
              title="Nominate a Hero"
              description="Know someone who deserves recognition? Submit a nomination for a deserving individual — a first responder, nurse, teacher, or community leader."
              href="https://lp.constantcontactpages.com/sv/uAxes3I"
              cta="Submit Nomination"
              accentClass="border-teal/30"
              btnClass="btn-secondary"
            />
            <ActionCard
              number="03"
              title="Become a Sponsor"
              description="Support this community event and increase your brand visibility among our 300+ member business network. Beverage sponsors & prize items needed."
              href="https://lp.constantcontactpages.com/ev/reg/cq6y5ue"
              cta="Sponsorship Info"
              accentClass="border-white/15"
              btnClass="btn-outline-white"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SPONSORS
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="section-container max-w-5xl">
          <div className="text-center mb-14">
            <p className="eyebrow mb-3">Event Sponsors</p>
            <h2 className="heading-xl text-primary mb-4">
              Thank You to Our Sponsors
            </h2>
            <div className="section-divider mx-auto" />
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-stretch">
            {/* Holy Cross / CommonSpirit sponsor card */}
            <div className="card p-8 flex flex-col items-center gap-5 max-w-sm w-full text-center hover:shadow-lg transition-shadow duration-300">
              <span className="eyebrow text-slate-400">Title Sponsor</span>
              <div className="relative w-56 h-20 flex items-center justify-center">
                <Image
                  src="/Structure/Programs/knight-of-heroes-event/Holy+Cross+Logo.jpeg"
                  alt="CommonSpirit Holy Cross Hospital Jordan Valley"
                  width={220}
                  height={80}
                  className="object-contain"
                />
              </div>
              <p className="font-body text-sm text-slate-500 leading-relaxed">
                CommonSpirit Health · Holy Cross Hospital Jordan Valley
              </p>
            </div>

            {/* Become a sponsor CTA */}
            <div className="flex flex-col items-center justify-center gap-5 max-w-sm w-full text-center bg-primary/4 border-2 border-dashed border-primary/15 rounded-xl p-8 hover:bg-primary/7] transition-colors duration-300">
              <div className="w-14 h-14 rounded-full bg-teal/15 flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#43727A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <div>
                <h3 className="heading-sm text-primary mb-2">
                  Become a Sponsor
                </h3>
                <p className="font-body text-sm text-slate-500 mb-4">
                  Beverage sponsors and prize drawing items are needed. Make an
                  impact while showcasing your brand to the community.
                </p>
              </div>
              <a
                href="mailto:Lyla@mountainwestchamber.org?subject=Knight%20of%20Heroes%20Sponsorship%20Inquiry"
                className="btn btn-primary btn-sm"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CONTACT — Susan Schilling
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-light-gray">
        <div className="section-container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: contact copy */}
            <div>
              <p className="eyebrow mb-4">Questions?</p>
              <h2 className="heading-xl text-primary mb-5">
                Let Us Know How
                <br />
                We Can Help
              </h2>
              <div className="section-divider mb-6" />
              <p className="font-body text-base text-slate-600 leading-relaxed mb-8">
                Our team is happy to answer questions about tickets, hero
                nominations, or sponsorships. Reach out to Susan Schilling
                directly.
              </p>
              <div className="flex flex-col gap-4">
                <a
                  href="tel:8012800595"
                  className="flex items-center gap-3 font-body text-primary hover:text-teal-dark transition-colors group"
                >
                  <span className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-teal/20 transition-colors shrink-0">
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
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <span className="font-semibold text-base">801-280-0595</span>
                </a>
                <a
                  href="mailto:susan@mountainwestchamber.org"
                  className="flex items-center gap-3 font-body text-primary hover:text-teal-dark transition-colors group"
                >
                  <span className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-teal/20 transition-colors shrink-0">
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
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </span>
                  <span className="font-semibold text-base">
                    susan@mountainwestchamber.org
                  </span>
                </a>
              </div>
            </div>

            {/* Right: Susan card */}
            <div className="card p-8 flex flex-col sm:flex-row gap-6 items-center hover:shadow-lg transition-shadow duration-300">
              <div className="relative shrink-0">
                <Image
                  src="/Structure/Programs/knight-of-heroes-event/Susan+Schilling+Sq.jpg"
                  alt="Susan Schilling, President of Mountain West Chamber of Commerce"
                  width={130}
                  height={130}
                  className="rounded-full object-cover ring-4 ring-teal/25"
                />
                <span className="absolute -bottom-1 -right-1 bg-teal w-5 h-5 rounded-full ring-2 ring-white" />
              </div>
              <div>
                <h3 className="heading-sm text-primary mb-1">
                  Susan Schilling
                </h3>
                <p className="eyebrow text-teal-dark mb-3 mt-1">
                  President, MWCC
                </p>
                <p className="font-body text-sm text-slate-500 leading-relaxed mb-4">
                  Mountain West Chamber of Commerce
                  <br />
                  Serving Riverton, Herriman &amp; Bluffdale
                </p>
                <a
                  href="mailto:susan@mountainwestchamber.org?subject=Knight%20of%20Heroes%20Inquiry"
                  className="btn btn-secondary btn-sm"
                >
                  Email Susan
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PAST EVENTS — 2023 legacy section
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="section-container max-w-6xl">
          <div className="text-center mb-14">
            <p className="eyebrow mb-3">Our Legacy</p>
            <h2 className="heading-xl text-primary">
              A Tradition of Honoring Heroes
            </h2>
            <div className="section-divider mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* 2023 flyer */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/Structure/Programs/knight-of-heroes-event/Knight+of+Heroes+flyer.png"
                alt="2023 Knight of Heroes event invitation"
                width={560}
                height={700}
                className="object-cover w-full"
              />
              <div className="absolute top-4 left-4 bg-slate-blue text-white font-accent font-bold text-xs uppercase tracking-widest px-3 py-1.5 rounded-full">
                2023 Event
              </div>
            </div>

            {/* Caption */}
            <div>
              <p className="eyebrow mb-3 text-slate-400">Looking Back</p>
              <h3 className="heading-lg text-primary mb-4">
                Dinner, Recognition &amp; Community
              </h3>
              <p className="font-body text-base text-slate-600 leading-relaxed mb-5">
                In 2023, the Chamber gathered at Megaplex Events in South Jordan
                to celebrate and honor the outstanding individuals making our
                community exceptional. The evening featured dinner, a prize
                drawing, and heartfelt recognition of local heroes.
              </p>
              <ul className="font-body text-sm text-slate-600 space-y-3 mb-8">
                {[
                  "$500 table for 6 guests + a hero and their guest",
                  "$50/person or $80/couple tickets available",
                  "Food sponsored by Texas Roadhouse",
                  "Beverage sponsors and prize items welcomed",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-teal mt-0.5 shrink-0">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contactus" className="btn btn-outline btn-sm">
                Learn More About MWCC Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FINAL CTA BANNER
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg,#F7DE32 0 1px,transparent 0 50%),repeating-linear-gradient(-45deg,#F7DE32 0 1px,transparent 0 50%)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="section-container max-w-3xl text-center relative z-10">
          <div className="mb-6 flex justify-center">
            <Image
              src="/Structure/Programs/knight-of-heroes-event/Knight+of+Heroes+MWCOC.png"
              alt="Knight of Heroes shield"
              width={72}
              height={72}
              className="opacity-50"
            />
          </div>
          <p className="eyebrow text-teal mb-4">Tuesday, November 11, 2025</p>
          <h2 className="heading-2xl text-white mb-4">
            Don&apos;t Miss the Evening —{" "}
            <span className="text-yellow">Join Us!</span>
          </h2>
          <p className="font-body text-white/70 text-lg leading-relaxed mb-10">
            Register today and be part of the night we honor our
            community&apos;s finest. Dress in your jeans and bling — see you at
            Top Golf Salt Lake.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://lp.constantcontactpages.com/ev/reg/cq6y5ue"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-yellow btn-lg"
            >
              Register Now
            </a>
            <a
              href="https://lp.constantcontactpages.com/sv/uAxes3I"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-white btn-lg"
            >
              Nominate a Hero
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
