import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { IconFeatureCard } from "@/components/Cards";

export const metadata: Metadata = {
  title: "Sponsorship Opportunities",
  description:
    "Become a Chamber sponsor to increase your visibility, build community recognition, and grow your business in the Southwest Valley.",
};

const sponsorBenefits = [
  {
    title: "Stand Out",
    description:
      "See your logo on event materials, banners, programs, and digital promotions reaching hundreds of local business owners and community members.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      />
    ),
  },
  {
    title: "Participate",
    description:
      "Join the fun with a reserved table at our signature annual events — from the Knight of Heroes Gala to the Scholarship Golf Tournament.*",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
      />
    ),
  },
  {
    title: "Save",
    description:
      "Enjoy a complimentary admission to one lunch event per month as part of your sponsorship — build relationships at no extra cost.*",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    title: "Increase Revenue",
    description:
      "Direct exposure to 300+ member businesses and their networks positions your brand as a trusted community partner, bringing measurable new business.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
      />
    ),
  },
  {
    title: "Build Reputation",
    description:
      "Be known as a generous community partner. Sponsoring Chamber events signals that your business cares about Riverton, Herriman, and Bluffdale.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
      />
    ),
  },
  {
    title: "Give Back",
    description:
      "Your sponsorship dollars directly fund teacher appreciation, student scholarships, and community hero recognition — making a lasting impact locally.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    ),
  },
];

const events = [
  {
    name: "Monthly MW Chamber Lunch",
    detail: "Locations Vary · 11:30 am – 1:00 pm",
    href: "/calendar",
  },
  {
    name: "Women in Business Lunch",
    detail: "3rd Tuesday · 11:30 am – 1:00 pm",
    href: "/calendar",
  },
  {
    name: "Knight of Heroes Gala",
    detail: "Annual · Call for Information",
    href: "/knight-of-heroes-event",
  },
  {
    name: "Teacher Appreciation Lunch",
    detail: "Annual · Call for Information",
    href: "/teacher-appreciation-event",
  },
  {
    name: "Scholarship Golf Tournament",
    detail: "Annual · Call for Information",
    href: "/golf-tournament",
  },
];

export default function Page() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative py-28 overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=75"
            alt="Community event audience"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="section-container max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <p className="eyebrow text-teal mb-4">
              Mountain West Chamber of Commerce
            </p>
            <h1 className="heading-xl text-white mb-4">
              Take Your Community Recognition to the Next Level
            </h1>
            <div className="section-divider bg-teal mb-6" />
            <p className="font-body text-lg text-white/80 leading-relaxed mb-8">
              Become a Chamber Sponsor to increase your visibility, build
              lasting relationships, and give back — all at the same time.
            </p>
            <Link href="/calendar" className="btn btn-yellow btn-lg">
              Become a Sponsor
            </Link>
          </div>
        </div>
      </section>

      {/* ── Sponsor Benefits ── */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow mb-4">Why Sponsor</p>
            <h2 className="heading-l text-primary mb-5">
              More Than a Logo — Real Business Impact
            </h2>
            <div className="section-divider mx-auto mb-5" />
            <p className="font-body text-base text-ink leading-relaxed">
              Stand out at Chamber events, grow your recognition in the
              community, and build your reputation as a generous community
              partner.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsorBenefits.map((item) => (
              <IconFeatureCard
                key={item.title}
                icon={
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {item.icon}
                  </svg>
                }
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
          <p className="font-body text-xs text-ink text-center mt-6">
            *Dependent on sponsorship event.
          </p>
        </div>
      </section>

      {/* ── Events to Sponsor ── */}
      <section className="py-20 bg-off-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="relative h-120 rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=900&q=80"
                alt="Chamber event sponsorship opportunities"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="eyebrow mb-4">Events You Can Sponsor</p>
              <h2 className="heading-xl text-primary mb-5">
                Pick the Events Right for Your Business
              </h2>
              <div className="section-divider mb-6" />
              <p className="font-body text-base text-ink leading-relaxed mb-8">
                See our Calendar of Events to begin the process — let us know
                what&rsquo;s right for your business. We&rsquo;ll take it from
                there!
              </p>

              <div className="flex flex-col gap-3 mb-8">
                {events.map((event) => (
                  <Link
                    key={event.name}
                    href={event.href}
                    className="flex items-center justify-between gap-4 p-4 rounded-xl border border-light-gray bg-white hover:border-teal hover:shadow-sm transition-all group"
                  >
                    <div>
                      <p className="font-body font-700 text-sm text-primary group-hover:text-teal transition-colors">
                        {event.name}
                      </p>
                      <p className="font-body text-xs text-ink mt-0.5">
                        {event.detail}
                      </p>
                    </div>
                    <svg
                      className="w-4 h-4 text-teal shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
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
                ))}
              </div>

              <Link href="/calendar" className="btn btn-primary">
                See Calendar of Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section className="py-20 bg-primary">
        <div className="section-container max-w-4xl mx-auto text-center">
          <svg
            className="w-12 h-12 text-teal/40 mx-auto mb-6"
            fill="currentColor"
            viewBox="0 0 32 32"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <blockquote className="heading-s text-white/90 leading-relaxed mb-8 italic">
            The Mountain West Chamber of Commerce has contributed immeasurably
            in promoting First Utah Bank since the opening of its eighth branch
            in January 2008. The success of the Bank&rsquo;s Riverton Office is
            due in large part on this involvement. You cannot put a price on the
            value that the chamber brings to this community and its businesses.
          </blockquote>
          <div className="section-divider mx-auto bg-teal mb-6" />
          <p className="font-accent text-sm font-700 text-teal uppercase tracking-widest">
            Carol Lund
          </p>
          <p className="font-body text-sm text-white/60 mt-1">
            Brand Manager, First Utah Bank
          </p>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow mb-4">Simple Process</p>
            <h2 className="heading-l text-primary mb-5">How It Works</h2>
            <div className="section-divider mx-auto mb-5" />
            <p className="font-body text-base text-ink leading-relaxed">
              Review the available opportunities and let us know what&rsquo;s
              right for your business. We&rsquo;ll take it from there!
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 mb-14">
            {[
              {
                step: "01",
                title: "Browse Opportunities",
                description:
                  "Review our variety of sponsorship levels — specific event options, annual or one-time packages to fit any budget.",
              },
              {
                step: "02",
                title: "Tell Us What Fits",
                description:
                  "Contact us with the events or packages you&rsquo;re interested in. We&rsquo;ll help you find the perfect fit for your goals.",
              },
              {
                step: "03",
                title: "We Handle the Rest",
                description:
                  "We coordinate all the details, get your logo on materials, and make sure you have a great experience at every event.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-yellow heading-s font-700 mb-5">
                  {item.step}
                </div>
                <h3 className="heading-xs text-primary mb-3">{item.title}</h3>
                <p
                  className="font-body text-sm text-ink leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/sponsorshipopps"
              className="btn btn-primary btn-lg mr-4"
            >
              Browse Opportunities
            </Link>
            <Link href="/contactus" className="btn btn-outline btn-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="relative py-24 overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0 opacity-15">
          <Image
            src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=1920&q=75"
            alt="Community partnership"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="section-container max-w-2xl mx-auto text-center relative z-10">
          <p className="eyebrow text-teal mb-5">Ready to Sponsor?</p>
          <h2 className="heading-l text-white mb-5">
            Let&rsquo;s Grow Together
          </h2>
          <p className="font-body text-base text-white/80 mb-10 leading-relaxed">
            Join a network of businesses investing in the Riverton, Herriman,
            and Bluffdale community. Your sponsorship makes a real difference.
          </p>
          <Link href="/calendar" className="btn btn-yellow btn-lg">
            Become a Sponsor
          </Link>
        </div>
      </section>
    </>
  );
}
