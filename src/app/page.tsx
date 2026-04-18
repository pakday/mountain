import Image from "next/image";
import Link from "next/link";
import SponsorCarousel from "../components/SponsorCarousel";
import {
  IconFeatureCard,
  ProgramCard,
  StatCard,
  StepCard,
} from "@/components/Cards";

export default function HomePage() {
  return (
    <>
      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section className="relative min-h-[85vh] py-28  flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=85"
            alt="Professional business team collaborating"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-primary/90 via-primary/80 to-slate-blue/60" />
        </div>

        {/* Content */}
        <div className="section-container max-w-7xl relative z-10 text-left flex-1">
          <div className="max-w-3xl lg:max-w-2xl">
            <p className="eyebrow text-teal mb-5">
              Riverton · Herriman · Bluffdale, Utah
            </p>
            <h1
              className="heading-xl text-white mb-6"
              style={{ lineHeight: "1.05" }}
            >
              We Help Businesses Make{" "}
              <span className="text-yellow">Connections</span> for Success
            </h1>
            <p className="font-body text-lg text-white/80 max-w-xl mb-10 leading-relaxed">
              The Mountain West Chamber of Commerce is the bridge between
              businesses and the community — helping you increase revenue, build
              lasting relationships, and give back in meaningful ways.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/becomeamember" className="btn btn-yellow btn-lg">
                Become a Member
              </Link>
              <Link href="/calendar" className="btn btn-outline-white btn-lg">
                Attend an Event
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60">
          <span className="font-accent text-xs tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-12 bg-linear-to-b from-white/60 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          STATS BANNER
      ═══════════════════════════════════════ */}
      <section className="bg-primary py-12">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y-0 md:divide-x md:divide-white/10">
            <StatCard value="27+" label="Years Serving Utah" />
            <StatCard value="300+" label="Member Businesses" />
            <StatCard value="20+" label="Annual Events" />
            <StatCard value="3" label="Cities Represented" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ABOUT / MISSION
      ═══════════════════════════════════════ */}
      <section className="py-20 bg-off-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Text */}
            <div>
              <p className="eyebrow mb-4">About the Chamber</p>
              <h2 className="heading-l text-primary mb-6">
                Building Stronger Businesses.{" "}
                <span className="text-slate-blue">
                  Building Stronger Communities.
                </span>
              </h2>
              <div className="section-divider mb-6" />
              <p className="font-body text-base text-slate-blue/70 leading-relaxed mb-5">
                We&rsquo;ve been working in Riverton, Herriman, and Bluffdale
                since 1997 to build bridges between businesses and the
                community. We understand what it takes to build a successful
                business here — and we&rsquo;ve built the network to prove it.
              </p>
              <p className="font-body text-base text-slate-blue/70 leading-relaxed mb-8">
                At MWCC, we focus on networking, business education, and
                political involvement within our cities — empowering members to
                grow and give back through annual events, legislative
                engagement, and community partnerships.
              </p>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-yellow"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="font-accent text-sm font-600 text-primary">
                  &ldquo;Together We Are Stronger.&rdquo; — Our guiding
                  principle since 1997
                </p>
              </div>
              <Link href="/aboutus" className="btn btn-primary">
                Our Story
              </Link>
            </div>

            {/* Image collage */}
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-4/10 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80"
                    alt="Business networking event"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative aspect-4/10 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                    alt="Community leaders"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
              {/* Quote badge */}
              <div className="bg-primary text-white rounded-2xl p-5 shadow-xl">
                <svg
                  className="w-6 h-6 text-yellow mb-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="font-body text-sm text-white/90 italic leading-relaxed">
                  Our members bridge business and community, through leadership
                  and volunteerism.
                </p>
                <p className="font-accent text-xs text-teal font-700 mt-2 uppercase tracking-wide">
                  MWCC Vision Statement
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          HOW WE HELP (BENEFITS)
      ═══════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="section-container">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow mb-4">Why Membership Matters</p>
            <h2 className="heading-l text-primary mb-5">
              Everything Your Business Needs to Thrive
            </h2>
            <div className="section-divider mx-auto mb-5" />
            <p className="font-body text-base text-slate-blue/60 leading-relaxed">
              Looking to grow your business, increase revenue, build lasting
              relationships, and give back to the community? Our membership
              opens the door to all of it.
            </p>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <IconFeatureCard
              iconAnimated
              icon={
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
              }
              title="Build Relationships"
              description="Connect with local businesses through regular networking events, our ambassador program, ribbon cuttings, and our Women in Business program — double the opportunities."
            />
            <IconFeatureCard
              iconAnimated
              icon={
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
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              }
              title="Up-level Your Skills"
              description="Learn finance, cybersecurity, HR, marketing and more in our monthly Connect & Learn and Women in Business lunch events — practical education for real growth."
            />
            <IconFeatureCard
              iconAnimated
              icon={
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
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              }
              title="Gain Visibility"
              description="Drive foot traffic via ribbon cuttings, get promoted on our website and social accounts, and let us amplify your events to the entire chamber community."
            />
            <IconFeatureCard
              iconAnimated
              icon={
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
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              }
              title="Influence Policy"
              description="As part of the Western Growth Coalition, attend monthly meetings with city officials and local chambers. Participate in our Legislative Roundup to speak with legislators directly."
            />
            <IconFeatureCard
              iconAnimated
              icon={
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              }
              title="Give Back"
              description="Participate in our three annual give-back events: Teacher Appreciation Luncheon, Scholarship Golf Tournament, and Knight of Heroes — honoring our community every year."
            />
            <IconFeatureCard
              iconAnimated
              icon={
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
              title="Certificates of Origin"
              description="Ship internationally? We sign Certificates of Origin for our members by appointment — a critical service for international business operations."
            />
          </div>

          <div className="text-center mt-12">
            <Link
              href="/why-become-a-member"
              className="btn btn-primary btn-lg"
            >
              Explore All Benefits
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          EVENTS CTA BANNER
      ═══════════════════════════════════════ */}
      <section
        className="relative py-24 overflow-hidden"
        aria-label="Attend an event"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80"
            alt="Business event and networking"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="section-container relative z-10 text-center">
          <p className="eyebrow text-teal mb-5">Never Miss a Beat</p>
          <h2 className="heading-xl text-white mb-5 max-w-2xl mx-auto">
            Attend, Connect, Learn, Support &amp; Sponsor
          </h2>
          <p className="font-body text-lg text-white/80 mb-10 max-w-xl mx-auto">
            From monthly luncheons to our annual golf tournament and community
            gala, there&rsquo;s always something happening at MWCC. Find your
            next opportunity.
          </p>
          <Link href="/calendar" className="btn btn-yellow btn-lg">
            See the Calendar
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FEATURED PROGRAMS
      ═══════════════════════════════════════ */}
      <section className="py-20 bg-light-gray">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow mb-4">Community Programs</p>
            <h2 className="heading-l text-primary mb-5">
              Events That Bring the Valley Together
            </h2>
            <div className="section-divider mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ProgramCard
              imageSrc="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=80"
              eyebrow="Annual Program"
              title="Scholarship Golf Tournament"
              description="Join us each fall at Stonebridge Golf Course for a fun day on the course — all proceeds fund scholarships for local high school students."
              href="/golf-tournament"
            />
            <ProgramCard
              imageSrc="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80"
              eyebrow="Annual Program"
              title="Teacher Appreciation Luncheon"
              description="Every spring we honor 25 outstanding local teachers with a luncheon celebrating their incredible dedication to our community's youth."
              href="/teacher-appreciation-event"
            />
            <ProgramCard
              imageSrc="https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=800&q=80"
              eyebrow="Annual Program"
              title="Knight of Heroes Gala"
              description="We honor police, fire, healthcare, and business heroes who go above and beyond for the Southwest Valley community each year."
              href="/knight-of-heroes-event"
            />
          </div>

          <div className="text-center mt-10">
            <Link href="/golf-sponsorships" className="btn btn-outline">
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          HOW IT WORKS (3-STEP)
      ═══════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow mb-4">Get Started</p>
            <h2 className="heading-l text-primary mb-5">
              Make Your Business Life Easier
            </h2>
            <div className="section-divider mx-auto mb-5" />
            <p className="font-body text-base text-slate-blue/60">
              Participate in the Chamber to find the answers, connections, and
              brand exposure you need for business success. Trying it is simple.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <StepCard
              step="01"
              title="Attend an Event"
              description="Experience the resources available to help you grow. See the connections, energy, and community that MWCC brings together."
              href="/calendar"
              cta="See Calendar"
            />
            <StepCard
              step="02"
              title="Become a Member"
              description="Join a community committed to helping you succeed. Unlock networking, education, visibility, and advocacy for your business."
              href="/becomeamember"
              cta="Join Today"
            />
            <StepCard
              step="03"
              title="Serve & Sponsor"
              description="Strengthen your connections through sponsorship and committee involvement — the fastest path to deeper community leadership."
              href="/sponsorshipopps"
              cta="Sponsor"
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TESTIMONIAL
      ═══════════════════════════════════════ */}
      <section className="py-20 bg-primary">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <svg
              className="w-12 h-12 text-yellow mx-auto mb-8"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote>
              <p className="heading-sm text-white font-heading italic leading-snug mb-8">
                &ldquo;My involvement in the Chamber has in every way trumped
                the opportunities I was finding on my own. As an attorney,
                relationships and referrals are essential to the success of my
                business, and I am extremely grateful for the many fun
                opportunities that the Mountain West Chamber of Commerce has
                provided to meet so many awesome professionals in our
                area.&rdquo;
              </p>
              <footer>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal/20 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-teal"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <cite className="font-accent font-700 text-yellow not-italic block">
                      Rebekah Wightman
                    </cite>
                    <span className="font-body text-sm text-white/70">
                      Attorney, Sandberg, Stettler &amp; Bloxham — MWCC Member
                    </span>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>

          <div className="text-center mt-12">
            <Link href="/members" className="btn btn-outline-white">
              Meet Our Members
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CONTACT / LEAD FORM
      ═══════════════════════════════════════ */}
      <section className="py-20 bg-off-white" id="contact">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Left — copy */}
            <div>
              <p className="eyebrow mb-4">Questions About Membership?</p>
              <h2 className="heading-lg text-primary mb-5">
                We&rsquo;d Love to Hear from You
              </h2>
              <div className="section-divider mb-6" />
              <p className="font-body text-base text-slate-blue/70 leading-relaxed mb-8">
                The best way to experience what the Chamber has to offer is to
                attend an event. Come out and see us soon! We&rsquo;re also
                happy to answer any questions you may have.
              </p>

              {/* Contact details */}
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-accent font-700 text-sm text-primary mb-0.5">
                      Address
                    </p>
                    <p className="font-body text-sm text-slate-blue/70">
                      4168 South 12600 South, Riverton, UT 84065
                      <br />
                      First Floor of First Utah Bank Bldg
                      <br />
                      <span className="text-slate-blue/40">Office Hours Vary</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-accent font-700 text-sm text-primary mb-0.5">
                      Phone
                    </p>
                    <a
                      href="tel:8012800595"
                      className="font-body text-sm text-slate-blue/70 hover:text-primary transition-colors"
                    >
                      801-280-0595
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-accent font-700 text-sm text-primary mb-0.5">
                      Email
                    </p>
                    <a
                      href="mailto:Info@mountainwestchamber.org"
                      className="font-body text-sm text-slate-blue/70 hover:text-primary transition-colors"
                    >
                      Info@mountainwestchamber.org
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="card p-8 lg:p-10">
              <h3 className="heading-md text-primary mb-6">
                Send Us a Message
              </h3>
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="font-accent text-xs font-700 uppercase tracking-wide text-slate-blue/70 block mb-1.5"
                    >
                      First Name <span className="text-slate-blue">*</span>
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      required
                      placeholder="Jane"
                      className="w-full px-4 py-3 rounded-lg border border-light-gray font-body text-sm focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="font-accent text-xs font-700 uppercase tracking-wide text-slate-blue/70 block mb-1.5"
                    >
                      Last Name <span className="text-slate-blue">*</span>
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      required
                      placeholder="Smith"
                      className="w-full px-4 py-3 rounded-lg border border-light-gray font-body text-sm focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="font-accent text-xs font-700 uppercase tracking-wide text-slate-blue/70 block mb-1.5"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="(801) 555-0100"
                    className="w-full px-4 py-3 rounded-lg border border-light-gray font-body text-sm focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="font-accent text-xs font-700 uppercase tracking-wide text-slate-blue/70 block mb-1.5"
                  >
                    Email <span className="text-slate-blue">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="jane@yourbusiness.com"
                    className="w-full px-4 py-3 rounded-lg border border-light-gray font-body text-sm focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="font-accent text-xs font-700 uppercase tracking-wide text-slate-blue/70 block mb-1.5"
                  >
                    How Can We Help?
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your business or any questions you have..."
                    className="w-full px-4 py-3 rounded-lg border border-light-gray font-body text-sm focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-colors resize-none"
                  />
                </div>
                <button type="submit" className="btn btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SUSTAINING PARTNERS
      ═══════════════════════════════════════ */}
      <section className="py-16 bg-white border-t border-light-gray overflow-hidden">
        <div className="section-container">
          <div className="text-center mb-10">
            <p className="eyebrow mb-3">Our Community</p>
            <h2 className="heading-lg text-primary">
              Sustaining Partner Sponsors
            </h2>
          </div>
        </div>
        {/* Sponsor carousel slider */}
        <div className="section-container">
          <div
            className="relative overflow-hidden"
            aria-label="Sustaining partner sponsor logos"
          >
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-linear-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-linear-to-l from-white to-transparent" />
            <SponsorCarousel />
          </div>
        </div>
        <div className="section-container">
          <p className="text-center font-body text-sm text-slate-blue/40 mt-8">
            Interested in becoming a sponsor?{" "}
            <Link
              href="/sponsorshipopps"
              className="text-primary hover:text-teal transition-colors font-semibold"
            >
              View sponsorship packages &rarr;
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
