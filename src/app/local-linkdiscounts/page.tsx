import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { IconFeatureCard, StepCard } from "@/components/Cards";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Local Link Discounts — Mountain West Chamber",
  description:
    "Shop local, save big, and win prizes with the Local Link Passport on the GooseChase App. Free for consumers, only $50/quarter for chamber member businesses.",
};

const passportBenefits = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "Increase Walk-In Traffic",
    desc: "Community members actively visit your location to participate in your experience and earn points.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
        />
      </svg>
    ),
    title: "Free Advertising",
    desc: "Your business is featured on the GooseChase app, reaching an engaged audience of local shoppers.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "More Brand Exposure",
    desc: "Gain visibility with community residents who might never have discovered your business otherwise.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
    title: "Repeat Customer Opportunities",
    desc: "Points-based incentives bring customers back again and again to earn rewards and prizes.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Low-Cost Entry",
    desc: "Only $50/quarter for chamber members — a maintenance-free investment that pays for itself.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
    title: "Personalized Experience",
    desc: "Create a custom experience on the app that reflects your brand personality and connects with customers.",
  },
];

const consumerSteps = [
  {
    number: "1",
    color: "bg-teal",
    title: "Download the App",
    desc: "Scan the QR code or search GooseChase in the App Store or Google Play. It's completely free to download.",
  },
  {
    number: "2",
    color: "bg-yellow",
    title: 'Find "Local Link Passport"',
    desc: 'Search for "Local Link" in the top search bar or enter join code HBZ14G to start collecting points.',
  },
  {
    number: "3",
    color: "bg-teal",
    title: "Shop Local & Win Prizes!",
    desc: "Visit participating businesses, complete their experiences, and earn points. Top point earners win monthly prizes!",
  },
];

const participatingBusinesses = [
  "Sports Connect",
  "Redemption",
  "Costa Vida",
  "Nothing Bundt Cakes",
  "Mountain Mike's Pizza",
  "Sun Kisst Salon & Spa",
  "Fat Cat's All Out Fun",
  "Lee's Marketplace",
  "Granite Credit Union",
  "WoodSpring Suites",
  "The Nut Garden",
  "Chubby's",
  "Iron Mountain Chiropractic",
  "JuliAnn Caramels",
  "Herriman's Pub Sports Bar",
  "Wicked Peel Pizza Kitchen",
  "Murphy's",
  "Canyon View",
  "Pet Suites Stay & Play",
  "Salsa Leedos Mexican Grill",
];

export default function Page() {
  return (
    <>
      {/* ─── HERO ─── */}
      <PageHero
        imageSrc="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&q=80"
        imageAlt="Local businesses and community shopping"
        overlay="absolute inset-0 bg-linear-to-br from-primary/90 via-primary/80 to-slate-blue/70"
        minHeight="70vh"
        containerPadding="pb-32 pt-40"
        badge={
          <div className="inline-flex items-center gap-2 bg-yellow text-primary rounded-full px-4 py-1.5">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
            <span className="font-accent font-700 text-sm tracking-wide uppercase">
              New Program 2025
            </span>
          </div>
        }
        eyebrow="Mountain West Chamber of Commerce"
        title={
          <>
            Local Link
            <br />
            <span className="text-yellow">Discount</span>{" "}
            <span className="text-teal">Program</span>
          </>
        }
        description={
          <>
            Shop local, earn points, and win prizes — powered by the{" "}
            <span className="text-teal font-600">GooseChase App</span>. Free for
            consumers. An exclusive low-cost marketing tool for chamber member
            businesses.
          </>
        }
        aside={
          <div className="flex flex-wrap gap-3 lg:flex-col lg:items-end lg:min-w-55">
            {[
              { value: "FREE", label: "For Consumers" },
              { value: "$50/qtr", label: "For Businesses" },
              { value: "HBZ14G", label: "Join Code" },
            ].map((b) => (
              <div
                key={b.label}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-3"
              >
                <div>
                  <div className="font-heading text-yellow font-700 text-lg">
                    {b.value}
                  </div>
                  <div className="eyebrow text-white/60 text-[10px]">
                    {b.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        }
        actions={
          <>
            <a
              href="https://www.goosechase.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-yellow btn-lg"
            >
              Download GooseChase App
            </a>
            <a href="#for-businesses" className="btn btn-outline-white btn-lg">
              Businesses: Join the Program
            </a>
          </>
        }
      />

      {/* ─── DUAL AUDIENCE STRIP ─── */}
      <section className="bg-primary py-12">
        <div className="section-container max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden">
            <div className="bg-primary px-8 py-10 flex gap-6 items-start">
              <div className="shrink-0 w-14 h-14 rounded-full bg-teal/20 flex items-center justify-center text-teal">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div>
                <div className="eyebrow text-teal mb-2">For Consumers</div>
                <h2 className="heading-s text-white mb-2">100% Free to Join</h2>
                <p className="font-body text-white/70 text-sm leading-relaxed">
                  Download the GooseChase App, join the Local Link Passport,
                  shop at participating businesses, and earn points for real
                  prizes. New discounts added weekly!
                </p>
              </div>
            </div>
            <div className="bg-slate-blue px-8 py-10 flex gap-6 items-start">
              <div className="shrink-0 w-14 h-14 rounded-full bg-yellow/20 flex items-center justify-center text-yellow">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <div>
                <div className="eyebrow text-yellow mb-2">For Businesses</div>
                <h2 className="heading-s text-white mb-2">
                  Only $50 Per Quarter
                </h2>
                <p className="font-body text-white/70 text-sm leading-relaxed">
                  Chamber member businesses can join the program for just
                  $50/quarter. Post a community experience, attract foot
                  traffic, and grow your brand with minimal effort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT IS LOCAL LINK? ─── */}
      <section className="py-20 bg-white">
        <div className="section-container max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="eyebrow mb-3">About the Program</p>
              <h2 className="heading-xl text-primary mb-6">
                Connecting Your Community
                <br />
                <span className="text-teal">One Local Business at a Time</span>
              </h2>
              <div className="section-divider mb-6" />
              <p className="font-body text-ink leading-relaxed mb-5">
                We are adding a new maintenance-free, low-cost marketing program
                that allows you to create a personalized experience for your
                customers. By offering the{" "}
                <strong className="text-primary">Local Link Passport</strong> on
                the GooseChase App, the Chamber is connecting more community
                residents with our members.
              </p>
              <p className="font-body text-ink leading-relaxed mb-8">
                Participants pay a{" "}
                <strong className="text-primary">$50 per quarter</strong>{" "}
                subscription and post a community experience in the
                Chamber&apos;s Community Experience App. The community will
                download the app, visit participants&apos; locations, and
                participate in the experiences to earn points for monthly prizes
                from the Chamber.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-light-gray rounded-full px-4 py-2">
                  <span className="w-2 h-2 rounded-full bg-teal shrink-0" />
                  <span className="font-accent text-sm font-600 text-primary">
                    GooseChase App
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-light-gray rounded-full px-4 py-2">
                  <span className="w-2 h-2 rounded-full bg-yellow shrink-0" />
                  <span className="font-accent text-sm font-600 text-primary">
                    Monthly Prizes
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-light-gray rounded-full px-4 py-2">
                  <span className="w-2 h-2 rounded-full bg-teal shrink-0" />
                  <span className="font-accent text-sm font-600 text-primary">
                    New Offers Weekly
                  </span>
                </div>
              </div>
            </div>

            {/* Client image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/Structure/Programs/local-linkdiscounts/image-asset.png"
                  alt="Local Link Discount Program — Local businesses guide"
                  width={600}
                  height={750}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Accent badge */}
              <div className="absolute -bottom-6 -left-6 bg-primary text-white rounded-2xl px-6 py-4 shadow-xl">
                <div className="font-heading text-yellow text-3xl font-700">
                  20+
                </div>
                <div className="font-body text-white/80 text-xs">
                  Participating Businesses
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-yellow text-primary rounded-2xl px-6 py-4 shadow-xl">
                <div className="font-heading text-primary text-3xl font-700">
                  2025
                </div>
                <div className="font-body text-primary/70 text-xs">
                  Program Year
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS (CONSUMER) ─── */}
      <section className="py-20 bg-off-white">
        <div className="section-container max-w-7xl">
          <div className="text-center mb-14">
            <p className="eyebrow mb-3">For Community Members</p>
            <h2 className="heading-xl text-primary mb-4">
              Get Started in <span className="text-teal">3 Simple Steps</span>
            </h2>
            <p className="font-body text-ink max-w-xl mx-auto">
              Turn notifications on — never miss a new offer! More local
              discounts are added every single week.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
            {consumerSteps.map((step) => (
              <div key={step.number} className="relative">
                {/* Connector line (desktop) */}
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-light-gray -z-10" />
                <StepCard
                  variant="circle"
                  step={step.number}
                  title={step.title}
                  description={step.desc}
                  colorClass={step.color}
                />
              </div>
            ))}
          </div>

          {/* Join code banner */}
          <div className="bg-primary rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <p className="eyebrow text-teal mb-2">GooseChase Join Code</p>
              <h3 className="heading-l text-white mb-2">Use Code:</h3>
              <div className="inline-block bg-teal text-primary font-heading font-700 text-5xl px-8 py-4 rounded-xl tracking-widest shadow-lg">
                HBZ14G
              </div>
            </div>
            <div className="text-center md:text-right max-w-sm">
              <p className="font-body text-white/80 leading-relaxed mb-6">
                Open the GooseChase app, tap{" "}
                <strong className="text-white">Search</strong>, and enter the
                join code above — or search &ldquo;Local Link&rdquo; in the
                search bar to find the Local Link Passport Experience.
              </p>
              <a
                href="https://www.goosechase.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-yellow"
              >
                Download GooseChase
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOR BUSINESSES ─── */}
      <section id="for-businesses" className="py-20 bg-white">
        <div className="section-container max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-4/10">
                <Image
                  src="https://images.unsplash.com/photo-1607703703520-bb638e84caf2?w=800&q=80"
                  alt="Business owner using mobile app for marketing"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary/60 to-transparent" />
              </div>
              {/* Cost highlight */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-xl border border-teal/20">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-heading text-primary text-4xl font-700">
                      $50
                    </div>
                    <div className="font-body text-ink text-sm">
                      per quarter / per chamber member
                    </div>
                  </div>
                  <div className="bg-teal/10 text-teal rounded-full px-4 py-2">
                    <span className="font-accent font-700 text-sm">
                      Maintenance-Free
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="eyebrow mb-3">Calling All Businesses!</p>
              <h2 className="heading-xl text-primary mb-6">
                Local Link <span className="text-teal">Passport Benefits</span>
              </h2>
              <div className="section-divider mb-6" />
              <p className="font-body text-ink leading-relaxed mb-8">
                Join the Local Link Discount Program to increase awareness of
                your business and boost foot traffic. It&apos;s one of the most
                cost-effective marketing tools available exclusively to Mountain
                West Chamber members.
              </p>
              <a href="#apply" className="btn btn-primary btn-lg">
                Apply to Join the Program →
              </a>
            </div>
          </div>

          {/* Benefits grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {passportBenefits.map((benefit) => (
              <IconFeatureCard
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.desc}
                iconAnimated
                lift
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── APPLY / QR CODE SECTION ─── */}
      <section id="apply" className="py-20 bg-primary relative overflow-hidden">
        {/* Background texture dots */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="relative z-10 section-container max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Client image: passport flyer */}
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/10">
                  <Image
                    src="/Structure/Programs/local-linkdiscounts/2025+Passport+Program+Intro.png"
                    alt="2025 Local Link Passport Program — scan to apply"
                    width={500}
                    height={650}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            <div>
              <p className="eyebrow text-teal mb-3">Ready to Grow?</p>
              <h2 className="heading-xl text-white mb-6">
                Scan to Apply &amp;{" "}
                <span className="text-yellow">Join the Program</span>
              </h2>
              <div
                className="section-divider mb-6"
                style={{ backgroundColor: "#5dcad1" }}
              />
              <p className="font-body text-white/80 leading-relaxed mb-8">
                Scan the QR code on the flyer or contact Susan directly at the
                Chamber to complete your Google Doc application and get your
                business featured on the Local Link Passport.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  {
                    icon: "📧",
                    label: "Email",
                    value: "susan@mountainwestchamber.org",
                    href: "mailto:susan@mountainwestchamber.org",
                  },
                  {
                    icon: "📞",
                    label: "Phone",
                    value: "801-280-0595",
                    href: "tel:8012800595",
                  },
                ].map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    className="flex items-center gap-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl px-6 py-4 transition-colors duration-200 group"
                  >
                    <span className="text-2xl">{c.icon}</span>
                    <div>
                      <div className="eyebrow text-teal text-[10px] mb-0.5">
                        {c.label}
                      </div>
                      <div className="font-accent text-white font-600 group-hover:text-yellow transition-colors">
                        {c.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:susan@mountainwestchamber.org"
                  className="btn btn-yellow btn-lg"
                >
                  Apply Now
                </a>
                <Link href="/becomeamember" className="btn btn-outline-white">
                  Become a Member First
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PARTICIPATING BUSINESSES ─── */}
      <section className="py-20 bg-off-white">
        <div className="section-container max-w-7xl">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">Local Link Partners</p>
            <h2 className="heading-xl text-primary mb-4">
              Participating <span className="text-teal">Local Businesses</span>
            </h2>
            <p className="font-body text-ink max-w-xl mx-auto">
              These amazing local businesses are already on the Local Link
              Passport. Visit them, complete their experiences, and earn your
              points toward monthly prizes!
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {participatingBusinesses.map((biz) => (
              <div
                key={biz}
                className="card px-4 py-5 text-center hover:shadow-md hover:border-teal/40 border border-transparent transition-all duration-200 hover:-translate-y-0.5"
              >
                <div className="w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-4 h-4 text-teal"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <p className="font-accent text-xs font-600 text-primary text-center leading-tight">
                  {biz}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center font-body text-ink text-sm mt-8">
            More businesses are added weekly. Turn on notifications in the
            GooseChase app to never miss a new offer!
          </p>
        </div>
      </section>

      {/* ─── CONSUMER APP SHOWCASE ─── */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="section-container max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="eyebrow mb-3">Download &amp; Explore</p>
              <h2 className="heading-xl text-primary mb-6">
                The GooseChase App —{" "}
                <span className="text-teal">Your Local Savings Hub</span>
              </h2>
              <div className="section-divider mb-6" />
              <p className="font-body text-ink leading-relaxed mb-6">
                GooseChase is a free mobile experience app that turns local
                shopping into an adventure. Businesses post unique challenges
                for you to complete — visit their store, try a product, snap a
                photo — and earn points toward monthly chamber prizes!
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Free to download — no subscription needed",
                  "New deals added to the Local Link Passport weekly",
                  "Compete for monthly prizes from the Chamber",
                  "Any smartphone — iOS or Android",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-teal shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="font-body text-ink text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://www.goosechase.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                Get GooseChase Free
              </a>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
                  alt="Person using mobile app to shop locally"
                  width={700}
                  height={500}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-tr from-primary/40 to-transparent" />
              </div>
              {/* Notification card */}
              <div className="absolute top-8 -left-4 bg-white rounded-xl shadow-xl px-5 py-4 border border-light-gray max-w-50">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-3 h-3 rounded-full bg-teal animate-pulse" />
                  <span className="font-accent text-[10px] font-700 text-teal uppercase tracking-wide">
                    New Offer!
                  </span>
                </div>
                <p className="font-body text-xs text-ink leading-snug">
                  Costa Vida — Buy one, get one free burrito today!
                </p>
              </div>
              {/* Points card */}
              <div className="absolute bottom-8 -right-4 bg-primary text-white rounded-xl shadow-xl px-5 py-4 max-w-45">
                <div className="font-heading text-yellow text-2xl font-700">
                  +250
                </div>
                <div className="font-body text-white/70 text-xs">
                  points earned this month
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0D3B66 0%, #3F6183 50%, #3F6183 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, #5DCAD1 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 section-container max-w-4xl text-center">
          <p className="eyebrow text-teal mb-4">Together We Are Stronger</p>
          <h2 className="heading-xl text-white mb-6">
            Ready to Shop Local &amp;{" "}
            <span className="text-yellow">Win Big?</span>
          </h2>
          <p className="font-body text-white/80 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Whether you&apos;re a community member looking for great deals or a
            business ready to grow — the Local Link Passport has something for
            everyone. Join the movement today!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.goosechase.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-yellow btn-lg"
            >
              Start Saving — Download App
            </a>
            <a
              href="mailto:susan@mountainwestchamber.org"
              className="btn btn-outline-white btn-lg"
            >
              Business Inquiry
            </a>
            <Link href="/becomeamember" className="btn btn-outline-white">
              Become a Member
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
