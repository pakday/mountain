import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { MembershipTierCard } from "@/components/Cards";

export const metadata: Metadata = {
  title: "Renew Your Membership",
  description:
    "Continue your success — renew your Mountain West Chamber of Commerce membership today.",
};

const tiers = [
  {
    title: "Nonprofit Membership",
    price: "$225",
    period: "/ year",
    badge: "/Structure/Membership/renew/3.png",
    badgeFallback: null,
    description:
      "Designed for 501(c)(3) organizations serving our local communities. Enjoy all core chamber benefits at a reduced rate.",
    features: [
      "Chamber member listing & directory profile",
      "Ribbon-cutting & grand-opening support",
      "Access to all networking events",
      "Member-to-member discount program",
      "Monthly e-newsletter sponsorship opportunities",
      "Free job postings on chamber platforms",
    ],
    highlight: false,
    ctaLabel: "Renew Now",
    ctaUrl:
      "mailto:Info@mountainwestchamber.org?subject=Nonprofit Membership Renewal",
  },
  {
    title: "Independent & Solo Membership",
    price: "$275",
    period: "/ year",
    badge: "/Structure/Membership/renew/1.png",
    badgeFallback: null,
    description:
      "Perfect for sole proprietors and independent professionals looking to grow their network and visibility.",
    features: [
      "Chamber member listing & directory profile",
      "Ribbon-cutting & grand-opening support",
      "Access to all networking events",
      "Member-to-member discount program",
      "Monthly e-newsletter sponsorship opportunities",
      "Free job postings on chamber platforms",
      "Business referral network access",
    ],
    highlight: false,
    ctaLabel: "Renew Now",
    ctaUrl:
      "mailto:Info@mountainwestchamber.org?subject=Independent Membership Renewal",
  },
  {
    title: "Core Membership",
    price: "$400",
    period: "/ year",
    badge: "/Structure/Membership/renew/2.png",
    badgeFallback: null,
    description:
      "Our full-featured membership for established businesses. Maximum visibility, influence, and connection.",
    features: [
      "Everything in Independent membership",
      "Enhanced directory listing with logo",
      "Priority event sponsorship opportunities",
      "Chamber advocacy & political involvement",
      "Access to business education workshops",
      "Invitation to exclusive member mixers",
      "Annual recognition & awards eligibility",
    ],
    highlight: true,
    ctaLabel: "Renew Now",
    ctaUrl:
      "mailto:Info@mountainwestchamber.org?subject=Core Membership Renewal",
  },
];

export default function Page() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative py-28 overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0 opacity-15">
          <Image
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=75"
            alt="Chamber business networking"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="section-container max-w-7xl relative z-10">
          <div className="max-w-2xl">
            <p className="eyebrow text-teal mb-4">
              Mountain West Chamber of Commerce
            </p>
            <h1 className="heading-xl text-white mb-4">
              Continue Your Success
            </h1>
            <div className="section-divider bg-teal mb-6" />
            <p className="font-body text-lg text-white/80 leading-relaxed">
              Renew your membership and keep the connections, resources, and
              community benefits that help your business thrive.
            </p>
          </div>
        </div>
      </section>

      {/* ── Why Renew strip ── */}
      <section className="bg-off-white py-12 border-b border-light-gray">
        <div className="section-container max-w-7xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              {
                icon: "🤝",
                label: "Networking Events",
                detail: "20+ events per year",
              },
              {
                icon: "📣",
                label: "Business Visibility",
                detail: "Directory & web listings",
              },
              {
                icon: "📚",
                label: "Education & Resources",
                detail: "Workshops & seminars",
              },
              {
                icon: "🏙️",
                label: "Community Advocacy",
                detail: "Representing your voice",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-2"
              >
                <span className="text-3xl">{item.icon}</span>
                <p className="font-accent font-700 text-primary text-sm uppercase tracking-wide">
                  {item.label}
                </p>
                <p className="font-body text-xs text-ink">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Membership tiers ── */}
      <section className="py-20 bg-white">
        <div className="section-container max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow mb-4">Renewal Options</p>
            <h2 className="heading-l text-primary mb-5">
              Choose Your Membership Level
            </h2>
            <div className="section-divider mx-auto mb-5" />
            <p className="font-body text-base text-ink leading-relaxed">
              All memberships run for one calendar year from your renewal date.
              Questions? Call us at{" "}
              <a
                href="tel:8012800595"
                className="text-slate-blue font-600 hover:text-teal"
              >
                801-280-0595
              </a>{" "}
              or email{" "}
              <a
                href="mailto:Info@mountainwestchamber.org"
                className="text-slate-blue font-600 hover:text-teal"
              >
                Info@mountainwestchamber.org
              </a>
              .
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {tiers.map((tier) => (
              <MembershipTierCard
                key={tier.title}
                title={tier.title}
                price={tier.price}
                period={tier.period}
                description={tier.description}
                features={tier.features}
                highlight={tier.highlight}
                ctaLabel={tier.ctaLabel}
                href={tier.ctaUrl}
                badgeImage={tier.badge}
                badgeAlt={`${tier.title} badge`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial / community photos ── */}
      <section className="py-20 bg-off-white">
        <div className="section-container max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="eyebrow mb-4">Member Since 1997</p>
              <h2 className="heading-l text-primary mb-5">
                Together We Are Stronger
              </h2>
              <div className="section-divider mb-6" />
              <p className="font-body text-base text-ink leading-relaxed mb-5">
                For over 27 years, the Mountain West Chamber of Commerce has
                connected businesses in Riverton, Herriman, and Bluffdale. Our
                members help each other succeed through referrals, visibility,
                and a community committed to growth.
              </p>
              <p className="font-body text-base text-ink leading-relaxed mb-8">
                Your renewal continues that impact — keeping your business in
                front of thousands of local customers and decision-makers while
                giving you access to events, education, and advocacy that
                matter.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/becomeamember" className="btn btn-primary">
                  New Member? Join Here
                </Link>
                <Link href="/contactus" className="btn btn-outline">
                  Questions? Contact Us
                </Link>
              </div>
            </div>
            <div className="relative h-105 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=900&q=80"
                alt="Chamber members networking together"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-white">
        <div className="section-container max-w-3xl">
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">Common Questions</p>
            <h2 className="heading-xl text-primary mb-4">Renewal FAQs</h2>
            <div className="section-divider mx-auto" />
          </div>
          <div className="divide-y divide-light-gray">
            {[
              {
                q: "When does my membership expire?",
                a: "Memberships run for one full year from your join or last renewal date. You will receive a reminder email 30 days before expiration.",
              },
              {
                q: "How do I renew?",
                a: "Click any 'Renew Now' button above or call us at 801-280-0595. You can also email Info@mountainwestchamber.org and we will walk you through the process.",
              },
              {
                q: "Can I upgrade my membership level?",
                a: "Yes — contact us at any time to upgrade. We will prorate the difference based on your remaining term.",
              },
              {
                q: "What if I have questions about my benefits?",
                a: "Our team is happy to help. Reach out via phone or email and we will make sure you are getting the most from your membership.",
              },
            ].map((item) => (
              <div key={item.q} className="py-6">
                <h3 className="heading-2xs text-primary mb-2">{item.q}</h3>
                <p className="font-body text-sm text-ink leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-primary py-16">
        <div className="section-container max-w-3xl text-center">
          <p className="eyebrow text-teal mb-4">Ready to Renew?</p>
          <h2 className="heading-l text-white mb-5">
            Keep Building. Keep Growing.
          </h2>
          <p className="font-body text-white/80 text-base mb-8 leading-relaxed">
            Contact us today and let&rsquo;s make sure your membership is active
            and working hard for your business.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:8012800595" className="btn btn-yellow">
              Call 801-280-0595
            </a>
            <a
              href="mailto:Info@mountainwestchamber.org"
              className="btn btn-outline-white"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
