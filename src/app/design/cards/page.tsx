"use client";

import Link from "next/link";
import { DesignNav } from "../DesignNav";
import { MembershipTierCards } from "../components/MembershipTierCards";
import BenefitCardHorizontal from "@/components/Cards/BenefitCardHorizontal";
import BenefitCardBold from "@/components/Cards/BenefitCardBold";
import BenefitCardDark from "@/components/Cards/BenefitCardDark";

export default function CardsPage() {
  return (
    <div className="bg-white min-h-screen">
      <DesignNav currentPage="cards" />

      <div className="max-w-6xl mx-auto p-8 flex flex-col gap-8">
        {/* Quick Info */}
        <section className="flex flex-col gap-4">
          <div className="bg-[#EDEDED] rounded-lg p-6 border-l-4 border-[#0D3B66]">
            <div className="text-sm font-bold tracking-widest uppercase text-[#0D3B66] mb-3">
              Card Patterns
            </div>
            <p className="text-sm text-[#0D3B66] leading-relaxed">
              A collection of card layouts used on the site.
            </p>
          </div>
        </section>

        {/* Benefit Cards */}
        <section className="flex flex-col gap-4">
          <div className="text-sm font-bold tracking-widest uppercase text-[#3F6183] border-b border-[#EDEDED] pb-2">
            01 — Benefit Cards
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              {
                icon: "💰",
                title: "Membership Benefits",
                desc: "Access exclusive member discounts and networking opportunities",
              },
              {
                icon: "🤝",
                title: "Business Growth",
                desc: "Connect with other local businesses and expand your network",
              },
              {
                icon: "📈",
                title: "Community Impact",
                desc: "Make a difference in Riverton, Herriman, and Bluffdale",
              },
            ].map((benefit, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-6 shadow-sm border border-[#EDEDED]"
              >
                <div className="w-12 h-12 bg-[#5DCAD1] rounded-full flex items-center justify-center text-xl mb-4">
                  {benefit.icon}
                </div>
                <div className="text-sm font-bold text-[#0D3B66] mb-2">
                  {benefit.title}
                </div>
                <p className="text-xs text-[#3F6183]">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Homepage Cards */}
        <section className="flex flex-col gap-4">
          <div className="text-sm font-bold tracking-widest uppercase text-[#3F6183] border-b border-[#EDEDED] pb-2">
            Homepage Cards
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="card p-8 flex flex-col gap-4 group hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-teal/10 text-slate-blue group-hover:bg-teal group-hover:text-white transition-all duration-300">
                <svg
                  className="w-7 h-7"
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
              </div>
              <h3 className="heading-xs text-primary">Build Relationships</h3>
              <p className="font-body text-base text-ink leading-relaxed">
                Connect with local businesses through regular networking events,
                our ambassador program, ribbon cuttings, and our Women in
                Business program — double the opportunities.
              </p>
            </div>

            <div className="card p-8 flex flex-col gap-4 group hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-teal/10 text-slate-blue group-hover:bg-teal group-hover:text-white transition-all duration-300">
                <svg
                  className="w-7 h-7"
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
              </div>
              <h3 className="heading-xs text-primary">Attend an Event</h3>
              <p className="font-body text-base text-ink leading-relaxed">
                Experience the resources available to help you grow. See the
                connections, energy, and community that MWCC brings together.
              </p>
              <Link href="/calendar" className="btn btn-yellow btn-sm w-max">
                See Calendar
              </Link>
            </div>
          </div>
        </section>

        {/* New Component Cards */}
        <section className="flex flex-col gap-4">
          <div className="text-sm font-bold tracking-widest uppercase text-[#3F6183] border-b border-[#EDEDED] pb-2">
            02 — New Component Card Designs
          </div>
          <p className="text-xs text-ink max-w-2xl">
            These are the new card designs for the homepage card component. The
            first and third are the strongest options for the current brand
            direction.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <BenefitCardHorizontal
              title="Modern membership perks"
              description="Clean white background card with a strong icon and clear, approachable text. Ideal for membership benefits and service highlights."
              href="/why-become-a-member"
              icon={
                <svg
                  className="w-8 h-8"
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
            />
            <BenefitCardBold
              title="Bold benefit highlight"
              description="White background with a thicker accent edge and a strong heading. Works well where you want a confident, high-energy statement."
              href="/becomeamember"
              icon={
                <svg
                  className="w-8 h-8"
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
            />
            <BenefitCardDark
              title="Premium chamber experience"
              description="High-contrast navy styling with white text and bright yellow accents. Best for premium sponsorship, event, or leadership promotion."
              href="/sponsorshipopps"
              icon={
                <svg
                  className="w-8 h-8"
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
            />
          </div>
        </section>

        {/* Program Cards */}
        <section className="flex flex-col gap-4">
          <div className="text-sm font-bold tracking-widest uppercase text-[#3F6183] border-b border-[#EDEDING] pb-2">
            03 — Program Cards (with Image)
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                title: "Golf Tournament",
                tag: "Event",
                desc: "Annual championship event",
              },
              {
                title: "Scholarship Program",
                tag: "Education",
                desc: "Supporting local students",
              },
            ].map((program, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-sm overflow-hidden border border-[#EDEDED] group cursor-pointer"
              >
                <div className="relative h-40 bg-linear-to-br from-[#0D3B66] to-[#5DCAD1] overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-white font-serif text-lg opacity-40">
                    [Image]
                  </div>
                  <div className="absolute inset-0 bg-linear-to-t from-[#0D3B66] via-transparent to-transparent opacity-60" />
                  <div className="absolute top-4 left-4 bg-[#F7DE32] text-[#0D3B66] text-xs font-bold px-3 py-1 rounded">
                    {program.tag}
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-sm font-bold text-[#0D3B66] mb-1">
                    {program.title}
                  </div>
                  <p className="text-xs text-[#3F6183] mb-3">{program.desc}</p>
                  <button className="text-xs font-bold text-[#5DCAD1] hover:text-[#0D3B66]">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Blog Cards */}
        <section className="flex flex-col gap-4">
          <div className="text-sm font-bold tracking-widest uppercase text-[#3F6183] border-b border-[#EDEDING] pb-2">
            03 — Blog Article Cards
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                title: "5 Ways to Grow Your Business",
                date: "Apr 15, 2026",
                excerpt: "Discover proven strategies...",
              },
              {
                title: "Community Impact Report 2026",
                date: "Apr 10, 2026",
                excerpt: "How we're making a difference...",
              },
            ].map((article, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-sm overflow-hidden border border-[#EDEDED]"
              >
                <div className="h-32 bg-linear-to-br from-[#3F6183] to-[#0D3B66] flex items-center justify-center text-white opacity-40 font-serif">
                  [Article Image]
                </div>
                <div className="p-4">
                  <div className="text-xs text-[#5DCAD1] font-bold mb-1">
                    {article.date}
                  </div>
                  <div className="text-sm font-bold text-[#0D3B66] mb-2">
                    {article.title}
                  </div>
                  <p className="text-xs text-[#3F6183] mb-3">
                    {article.excerpt}
                  </p>
                  <button className="text-xs font-bold text-[#5DCAD1] hover:text-[#0D3B66]">
                    Read Article →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sponsorship Tier Cards */}
        <section className="flex flex-col gap-4">
          <div className="text-sm font-bold tracking-widest uppercase text-[#3F6183] border-b border-[#EDEDING] pb-2">
            04 — Sponsorship Tier Cards
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              {
                tier: "BRONZE",
                price: "$500",
                color: "#CD7F32",
                features: ["Logo placement", "1 pass", "Newsletter feature"],
              },
              {
                tier: "SILVER",
                price: "$1,000",
                color: "#C0C0C0",
                features: ["Premium logo", "2 passes", "Social media feature"],
              },
              {
                tier: "PLATINUM",
                price: "$2,500",
                color: "#FFD700",
                features: ["Featured sponsor", "4 passes", "Exclusive event"],
              },
            ].map((sponsor, i) => (
              <div
                key={i}
                className="rounded-lg overflow-hidden shadow-sm border border-[#EDEDING]"
              >
                <div className="p-6" style={{ backgroundColor: sponsor.color }}>
                  <div className="text-xs font-bold tracking-widest uppercase text-white mb-1">
                    {sponsor.tier}
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {sponsor.price}
                    <span className="text-sm">/year</span>
                  </div>
                </div>
                <div className="border-b border-[#EDEDING]" />
                <div className="p-4 bg-white">
                  <div className="flex flex-col gap-2">
                    {sponsor.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-2 text-xs">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: sponsor.color }}
                        />
                        <span className="text-[#0D3B66]">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-4 py-2 bg-[#0D3B66] text-white text-xs font-bold rounded hover:bg-[#3F6183]">
                    Sponsor Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <MembershipTierCards />

        {/* ── NEW BENEFIT CARD DESIGNS ─────────────────────────────── */}
        {/* Design A — Horizontal Icon-Left */}
        <section className="flex flex-col gap-4">
          <div className="text-sm font-bold tracking-widest uppercase text-[#3F6183] border-b border-[#EDEDED] pb-2">
            NEW — Design A: Horizontal Icon-Left
          </div>
          <p className="text-xs text-ink">
            Icon anchored left, compact horizontal rows. Great for dense benefit
            lists or sidebar cards.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Build Relationships",
                desc: "Connect with local businesses through regular networking events, our ambassador program, and ribbon cuttings.",
              },
              {
                title: "Up-level Your Skills",
                desc: "Learn finance, cybersecurity, HR, and marketing in our monthly Connect & Learn events.",
              },
              {
                title: "Gain Visibility",
                desc: "Drive foot traffic via ribbon cuttings and get promoted on our website and social channels.",
              },
            ].map((item, i) => (
              <BenefitCardHorizontal
                key={i}
                title={item.title}
                description={item.desc}
                href="#"
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
              />
            ))}
          </div>
        </section>

        {/* Design B — Bold Left-Border Accent */}
        <section className="flex flex-col gap-4">
          <div className="text-sm font-bold tracking-widest uppercase text-[#3F6183] border-b border-[#EDEDED] pb-2">
            NEW — Design B: Bold Left-Border Accent
          </div>
          <p className="text-xs text-ink">
            Yellow left border, icon in a circle that fills gold on hover.
            Energetic and confident.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Build Relationships",
                desc: "Connect with local businesses through regular networking events, our ambassador program, and ribbon cuttings.",
              },
              {
                title: "Up-level Your Skills",
                desc: "Learn finance, cybersecurity, HR, and marketing in our monthly Connect & Learn events.",
              },
              {
                title: "Gain Visibility",
                desc: "Drive foot traffic via ribbon cuttings and get promoted on our website and social channels.",
              },
            ].map((item, i) => (
              <BenefitCardBold
                key={i}
                title={item.title}
                description={item.desc}
                href="#"
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
              />
            ))}
          </div>
        </section>

        {/* Design C — Dark Navy Cards */}
        <section className="flex flex-col gap-4 bg-[#EDEDED] p-6 rounded-xl">
          <div className="text-sm font-bold tracking-widest uppercase text-[#3F6183] border-b border-[#d0d0d0] pb-2">
            NEW — Design C: Dark Navy Cards
          </div>
          <p className="text-xs text-ink">
            Navy background, yellow icon, white text. Premium, high-contrast,
            authoritative. Looks great on light-gray section backgrounds.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Build Relationships",
                desc: "Connect with local businesses through regular networking events, our ambassador program, and ribbon cuttings.",
              },
              {
                title: "Up-level Your Skills",
                desc: "Learn finance, cybersecurity, HR, and marketing in our monthly Connect & Learn events.",
              },
              {
                title: "Gain Visibility",
                desc: "Drive foot traffic via ribbon cuttings and get promoted on our website and social channels.",
              },
            ].map((item, i) => (
              <BenefitCardDark
                key={i}
                title={item.title}
                description={item.desc}
                href="#"
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
              />
            ))}
          </div>
        </section>

        {/* Contact Action Cards */}
        <section className="flex flex-col gap-4">
          <div className="text-sm font-bold tracking-widest uppercase text-[#3F6183] border-b border-[#EDEDING] pb-2">
            05 — Contact & Action Cards
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              {
                icon: "📞",
                title: "Call Us",
                content: "801-280-0595",
                action: "Contact",
              },
              {
                icon: "📧",
                title: "Email",
                content: "Info@mountainwestchamber.org",
                action: "Send Email",
              },
              {
                icon: "📍",
                title: "Visit Us",
                content: "4168 S 12600 S, Riverton, UT",
                action: "Directions",
              },
            ].map((contact, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-6 shadow-sm border border-[#EDEDING] text-center"
              >
                <div className="text-2xl mb-3">{contact.icon}</div>
                <div className="text-sm font-bold text-[#0D3B66] mb-2">
                  {contact.title}
                </div>
                <p className="text-xs text-[#3F6183] mb-4">{contact.content}</p>
                <button className="px-4 py-2 bg-[#0D3B66] text-[#F7DE32] text-xs font-bold rounded hover:bg-[#3F6183]">
                  {contact.action}
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
