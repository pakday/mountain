import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { IconFeatureCard } from "@/components/Cards";

export const metadata: Metadata = {
  title: "Why Become a Member",
  description:
    "Grow your business, build lasting relationships, and give back to the community. Discover all the benefits of Mountain West Chamber membership.",
};

const benefits = [
  {
    title: "Build Relationships",
    description:
      "Get to know other area businesses through regular networking events, our ambassador program, ribbon cuttings, and more. Membership also includes a free Women in Business membership — doubling your opportunities.",
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
    title: "Up-level Your Skills",
    description:
      "Learn from experts on topics ranging from finance to cybersecurity to HR to marketing at our monthly Connect & Learn and Women in Business lunch events.",
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
    title: "Gain Visibility",
    description:
      "Drive foot traffic with a brick-and-mortar ribbon cutting. Chamber members are promoted on our website and social media, and we happily announce your events to the community.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 10l4.553-2.069A1 1 0 0121 8.868V15.13a1 1 0 01-1.447.9L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
      />
    ),
  },
  {
    title: "Influence Community Decisions",
    description:
      "As part of the Western Growth Coalition, attend monthly meetings with local chambers, city officials, and businesses. Plus join our Legislative Roundup to meet legislators directly.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    ),
  },
  {
    title: "Give Back to the Community",
    description:
      "Participate in three annual events: the Teacher Appreciation Luncheon (honoring 25 local teachers), Scholarship Golf Tournament, and Knight of Heroes Gala.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    ),
  },
  {
    title: "Certificates of Origin",
    description:
      "Ship internationally? Certificates of Origin are required for most international orders. We sign these for our members — simply schedule an appointment.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    ),
  },
];

export default function Page() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative py-28 overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1920&q=75"
            alt="Business networking event"
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
            <h1 className="heading-xl text-white mb-4">Why Become a Member?</h1>
            <div className="section-divider bg-teal mb-6" />
            <p className="font-body text-lg text-white/80 leading-relaxed mb-8">
              Benefiting &amp; Giving Back — your bridge between business and
              community in Bluffdale, Herriman, and Riverton.
            </p>
            <Link href="/becomeamember" className="btn btn-yellow btn-lg">
              Become a Member
            </Link>
          </div>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="eyebrow mb-4">Membership Benefits</p>
              <h2 className="heading-l text-primary mb-5">
                Grow Your Business &amp; Your Community
              </h2>
              <div className="section-divider mb-6" />
              <p className="font-body text-base text-slate-600 leading-relaxed mb-5">
                Looking for a way to grow your business, increase your revenue,
                build lasting relationships, and give back in meaningful ways?
                The Mountain West Chamber of Commerce is here to help!
              </p>
              <p className="font-body text-base text-slate-600 leading-relaxed mb-8">
                We&rsquo;re your bridge between businesses and the community in
                Bluffdale, Herriman, and Riverton — offering a variety of
                opportunities and resources that make a real difference.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/becomeamember" className="btn btn-primary">
                  Become a Member
                </Link>
                <Link href="/calendar" className="btn btn-outline">
                  Attend an Event
                </Link>
              </div>
            </div>
            <div className="relative h-115 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=80"
                alt="Chamber members networking"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits Grid ── */}
      <section className="py-20 bg-off-white">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow mb-4">How We Help Your Business</p>
            <h2 className="heading-xl text-primary mb-5">
              Everything You Need to Thrive
            </h2>
            <div className="section-divider mx-auto mb-5" />
            <p className="font-body text-base text-slate-500 leading-relaxed">
              Our membership offers six powerful ways to grow your business and
              strengthen your community ties.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <IconFeatureCard
                key={benefit.title}
                icon={
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {benefit.icon}
                  </svg>
                }
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Photo Banner ── */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=1920&q=80"
          alt="Chamber event with members"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/60" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div>
            <p className="eyebrow text-teal mb-3">Our Mission</p>
            <p className="heading-xl text-white max-w-2xl mx-auto leading-snug">
              &ldquo;Our mission is your success&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-primary">
        <div className="section-container text-center max-w-2xl mx-auto">
          <p className="eyebrow text-teal mb-5">Ready to Join?</p>
          <h2 className="heading-xl text-white mb-5">
            The Best Way to Experience the Chamber is to Attend an Event
          </h2>
          <p className="font-body text-base text-white/80 mb-10 leading-relaxed">
            Come out and see us soon! We&rsquo;re also happy to answer any
            questions you may have.
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
