import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Member Discounts | Member to Member Benefits",
  description:
    "Exclusive member-to-member discounts and deals available only to Mountain West Chamber of Commerce members. Show your membership and start saving.",
};

const BASE = "/Structure/Member%20Resources/for-members";

const benefits = [
  {
    company: "AFS Flooring",
    logo: `${BASE}/AFSLogoSQ.jpg`,
    url: "https://thecarpetbus.com",
    title: "5% Off Flooring Products & Services",
    description:
      "Plus — receive an Upgraded Pad for FREE with any flooring purchase. Great savings on quality floors for your home or business.",
    cta: { phone: "801-541-1084", label: "Call Aaron Today" },
  },
  {
    company: "Cyprus Credit Union",
    logo: `${BASE}/CyprusCULogoSQ.jpg`,
    url: "https://www.cypruscu.com/",
    title: "Exclusive Member Offers",
    description:
      "New offerings posted often on their website. Visit to see the latest deals and financial products available exclusively to chamber members.",
    cta: { phone: "801-260-7600", label: "Call Today" },
  },
  {
    company: "Expand Business Solutions",
    logo: `${BASE}/EXPAND_Business_Solutions_Logo_Ad.jpg`,
    url: "http://www.expandbusinesssolutions.com/expand-services.html#consulting",
    title: "FREE 60-Min. Marketing Consultation",
    description:
      "Before starting ANY marketing project — get this extremely valuable consultation first. Marketing & advertising expertise to grow your business.",
    cta: { phone: "801-641-0789", label: "Call Today" },
  },
  {
    company: "Incline at Anthem",
    logo: null,
    url: "https://www.inclineatanthem.com/",
    title: "One Month Free + $200 Admin Credit",
    description:
      "One month free with a 12-month lease. Also receive a $200 Admin Fee credited at move-in. Ask about current availability.",
    cta: { phone: "801-727-3800", label: "Call Trisha Richmond" },
  },
  {
    company: "Real Monarchs",
    logo: `${BASE}/RealMonarchsLogoSQ.jpg`,
    url: "https://www.rsl.com/monarchs/",
    title: "Complimentary Game Tickets",
    description:
      "Claim a limited number of complimentary tickets to Real Monarchs games. A great perk for clients, employees, or your family.",
    cta: {
      phone: "385-434-3216",
      label: "Call Today",
      email: "sreynolds@rsl.com",
      emailLabel: "Email Scott",
      emailSubject: "Complimentary Real Monarchs Tickets",
    },
  },
  {
    company: "We Are Royals",
    logo: `${BASE}/WE.ARE.ROYALS.LOGO_no%2Bback.jpg`,
    url: "https://we-are-royals.com/",
    title: "Complimentary Insurance Consultation",
    description:
      "Get a free insurance consultation tailored to your business and personal needs. Protect what matters most.",
    cta: {
      phone: "801-618-6621",
      label: "Contact Daniel",
      email: "daniel@royalsinsurance.com",
      emailLabel: "Email Daniel",
      emailSubject: "Chamber Member Insurance Consultation",
    },
  },
];

export default function Page() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-primary flex items-center min-h-90">
        <div className="absolute inset-0">
          <Image
            src={`${BASE}/SWVCOC%2BMtg%2BSized%2BwEffect.jpg`}
            alt="Mountain West Chamber networking meeting"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative z-10 section-container w-full py-20">
          <p className="eyebrow text-teal mb-4">
            Mountain West Chamber of Commerce
          </p>
          <h1 className="heading-xl text-white mb-5">
            Member to Member Benefits
          </h1>
          <p className="font-body text-white/80 max-w-2xl text-base leading-relaxed">
            Fellow chamber members extend exclusive discounts and deals just for
            you. Show your membership card or mention the Chamber when you call
            to redeem.
          </p>
        </div>
      </section>

      {/* ── Teal info bar ── */}
      <div className="bg-teal py-4">
        <div className="section-container w-full flex items-center justify-center gap-3">
          <svg
            className="w-5 h-5 text-primary shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
          <p className="font-body font-semibold text-primary text-sm tracking-wide text-center">
            Members Only — Present your membership card or mention the Chamber
            to redeem these exclusive offers.
          </p>
        </div>
      </div>

      {/* ── Benefits grid ── */}
      <section className="bg-off-white py-20">
        <div className="section-container w-full">
          {/* Section header */}
          <div className="text-center mb-14">
            <p className="eyebrow mb-3">Member Perks</p>
            <h2 className="heading-l text-primary mb-4">
              Deals from Your Fellow Members
            </h2>
            <p className="font-body text-slate-blue/70 max-w-2xl mx-auto text-base leading-relaxed">
              These special offers are made possible by the businesses in our
              chamber community. Support local and take advantage of exclusive
              rates you won&apos;t find anywhere else.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b) => (
              <div
                key={b.company}
                className="bg-white rounded-xl shadow-sm border border-light-gray border-t-4 border-t-teal flex flex-col overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                {/* Logo */}
                <a
                  href={b.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${b.company}`}
                  className="flex items-center justify-center bg-white h-44 p-6 shrink-0"
                >
                  {b.logo ? (
                    <div className="relative w-full h-full">
                      <Image
                        src={b.logo}
                        alt={`${b.company} logo`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center w-full h-full rounded-lg bg-linear-to-br from-slate-blue/10 to-teal/10 gap-2">
                      <svg
                        className="w-10 h-10 text-slate-blue/40"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                      <span className="font-heading font-bold text-slate-blue/60 text-sm text-center px-2">
                        {b.company}
                      </span>
                    </div>
                  )}
                </a>

                {/* Divider */}
                <div className="h-px bg-light-gray mx-6" />

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <p className="eyebrow text-teal mb-1.5">{b.company}</p>
                  <h3 className="heading-xs text-primary mb-3 leading-snug">
                    {b.title}
                  </h3>
                  <p className="font-body text-slate-blue/70 text-sm leading-relaxed flex-1">
                    {b.description}
                  </p>

                  {/* CTAs */}
                  <div className="mt-6 flex flex-col gap-2.5">
                    <a
                      href={`tel:${b.cta.phone.replace(/[^0-9]/g, "")}`}
                      className="btn btn-secondary btn-sm w-full"
                    >
                      <svg
                        className="w-4 h-4 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      {b.cta.label} &middot; {b.cta.phone}
                    </a>

                    {"email" in b.cta && b.cta.email && (
                      <a
                        href={`mailto:${b.cta.email}?subject=${encodeURIComponent(b.cta.emailSubject ?? "Chamber Member Inquiry")}`}
                        className="btn btn-outline btn-sm w-full"
                      >
                        <svg
                          className="w-4 h-4 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        {b.cta.emailLabel}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-primary py-20">
        <div className="section-container w-full text-center">
          <p className="eyebrow text-teal mb-4">Not a Member Yet?</p>
          <h2 className="heading-l text-white mb-5">
            Join the Chamber &amp; Start Saving
          </h2>
          <p className="font-body text-white/80 max-w-xl mx-auto mb-10 text-base leading-relaxed">
            Membership opens the door to these exclusive deals, plus networking
            events, business resources, and a community that has your back.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/becomeamember" className="btn btn-yellow btn-lg">
              Become a Member
            </Link>
            <Link
              href="/why-become-a-member"
              className="btn btn-outline-white btn-lg"
            >
              Why Join?
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
