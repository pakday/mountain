"use client";

export default function DesignSystemPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-[#0D3B66] px-8 py-5 flex items-center justify-between">
        <div>
          <div className="text-xs tracking-widest uppercase text-[#5DCAD1] mb-1">
            Design Reference
          </div>
          <div className="font-serif text-xl text-[#FFFAF9]">
            Mountain West Chamber — Design System
          </div>
        </div>
        <div className="text-xs text-[rgba(255,250,249,0.4)]">
          globals.css mirror · April 2026
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-8 flex flex-col gap-10">
        {/* 01 COLOR PALETTE */}
        <section className="flex flex-col gap-4">
          <div className="text-xs font-bold tracking-widest uppercase text-[#3F6183] border-b border-[#EDEDED] pb-2">
            01 — Color Palette &amp; Usage Rules
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              {
                hex: "#0D3B66",
                name: "Navy — Primary",
                usage: ["Nav", "Headings", "Buttons", "Footer"],
                bg: "bg-[#0D3B66]",
              },
              {
                hex: "#F7DE32",
                name: "Gold — CTA Accent",
                usage: ["Primary CTA", "Highlights"],
                bg: "bg-[#F7DE32]",
                note: "★ Best pair: on Navy bg",
              },
              {
                hex: "#5DCAD1",
                name: "Teal — Decorative only",
                usage: ["Tags", "Icons", "Dividers"],
                bg: "bg-[#5DCAD1]",
                warning: "⚠ No body text on white",
              },
              {
                hex: "#3F6183",
                name: "Steel Blue — Secondary",
                usage: ["Secondary text", "Subheadings"],
                bg: "bg-[#3F6183]",
                pass: "✓ Passes WCAG AA on white",
              },
              {
                hex: "#FFA384",
                name: "Salmon — Warm Accent",
                usage: ["Event tags", "Highlights"],
                bg: "bg-[#FFA384]",
                warning: "⚠ No body text on white",
              },
              {
                hex: "#EDEDED",
                name: "Light Gray — Surface",
                usage: ["Card bg", "Section bg"],
                bg: "bg-[#EDEDED] border border-[#e0e0e0]",
              },
              {
                hex: "#FFFAF9",
                name: "Cream — Page Background",
                usage: ["Page bg"],
                bg: "bg-[#FFFAF9] border border-[#ede9e5]",
              },
            ].map((item) => (
              <div
                key={item.hex}
                className="rounded-lg overflow-hidden shadow-sm"
              >
                <div className={`h-20 ${item.bg}`} />
                <div className="bg-white p-3">
                  <div className="text-sm font-bold text-[#0D3B66]">
                    {item.hex}
                  </div>
                  <div className="text-xs text-[#3F6183] mt-0.5">
                    {item.name}
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {item.usage.map((u) => (
                      <span
                        key={u}
                        className="bg-black/5 text-[#0D3B66] text-xs px-1.5 py-0.5 rounded font-semibold"
                      >
                        {u}
                      </span>
                    ))}
                  </div>
                  {item.note && (
                    <div className="mt-1 text-xs text-[#059669] font-semibold">
                      {item.note}
                    </div>
                  )}
                  {item.warning && (
                    <div className="mt-1 text-xs text-[#d97706] font-semibold">
                      {item.warning}
                    </div>
                  )}
                  {item.pass && (
                    <div className="mt-1 text-xs text-[#059669] font-semibold">
                      {item.pass}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg p-5 shadow-sm">
            <div className="text-xs font-bold text-[#0D3B66] mb-3">
              Contrast Safety Reference (WCAG)
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="flex items-center gap-2 p-2 px-3 bg-[#0D3B66] rounded">
                <span className="text-[#F7DE32] font-bold text-xs">
                  Gold on Navy
                </span>
                <span className="ml-auto bg-[#059669] text-white text-xs px-1.5 py-0.5 rounded font-bold">
                  AAA ✓
                </span>
              </div>
              <div className="flex items-center gap-2 p-2 px-3 bg-[#0D3B66] rounded">
                <span className="text-white font-bold text-xs">
                  White on Navy
                </span>
                <span className="ml-auto bg-[#059669] text-white text-xs px-1.5 py-0.5 rounded font-bold">
                  AAA ✓
                </span>
              </div>
              <div className="flex items-center gap-2 p-2 px-3 bg-white border border-[#eee] rounded">
                <span className="text-[#0D3B66] font-bold text-xs">
                  Navy on White
                </span>
                <span className="ml-auto bg-[#059669] text-white text-xs px-1.5 py-0.5 rounded font-bold">
                  AAA ✓
                </span>
              </div>
              <div className="flex items-center gap-2 p-2 px-3 bg-white border border-[#eee] rounded">
                <span className="text-[#3F6183] font-bold text-xs">
                  Steel on White
                </span>
                <span className="ml-auto bg-[#059669] text-white text-xs px-1.5 py-0.5 rounded font-bold">
                  AA ✓
                </span>
              </div>
              <div className="flex items-center gap-2 p-2 px-3 bg-white border border-[#eee] rounded">
                <span className="text-[#5DCAD1] font-bold text-xs">
                  Teal on White
                </span>
                <span className="ml-auto bg-[#dc2626] text-white text-xs px-1.5 py-0.5 rounded font-bold">
                  FAIL ✗
                </span>
              </div>
              <div className="flex items-center gap-2 p-2 px-3 bg-white border border-[#eee] rounded">
                <span className="text-[#FFA384] font-bold text-xs">
                  Coral on White
                </span>
                <span className="ml-auto bg-[#dc2626] text-white text-xs px-1.5 py-0.5 rounded font-bold">
                  FAIL ✗
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 02 TYPOGRAPHY */}
        <section className="flex flex-col gap-4">
          <div className="text-xs font-bold tracking-widest uppercase text-[#3F6183] border-b border-[#EDEDED] pb-2">
            02 — Typography · Heading Scale (fluid clamp)
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm flex flex-col gap-3">
            {[
              {
                cls: ".heading-2xl",
                text: "Together We Are Stronger",
                size: "2.93–4.74rem",
              },
              {
                cls: ".heading-xl",
                text: "Connections for Success",
                size: "2.34–3.55rem",
              },
              {
                cls: ".heading-l",
                text: "Upcoming Events & Programs",
                size: "1.88–2.67rem",
              },
              {
                cls: ".heading-m",
                text: "Membership Benefits",
                size: "1.5–2rem",
              },
              {
                cls: ".heading-s",
                text: "Board of Directors",
                size: "1.2–1.5rem",
              },
              {
                cls: ".heading-xs",
                text: "Golf Tournament Spring Classic",
                size: "0.96–1.13rem",
              },
              {
                cls: ".heading-2xs",
                text: "Section eyebrow / label",
                size: "0.77–0.84rem",
              },
            ].map((item) => (
              <div
                key={item.cls}
                className="flex items-baseline gap-4 pb-3 border-b border-[#EDEDED]"
              >
                <code className="w-24 text-xs text-[#3F6183] shrink-0">
                  {item.cls}
                </code>
                <div
                  className={item.cls.replace(".", "")}
                  style={{ color: "#0D3B66", fontFamily: "Georgia, serif" }}
                >
                  {item.text}
                </div>
                <span className="ml-auto text-xs text-[#3F6183] whitespace-nowrap">
                  {item.size}
                </span>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-xs font-bold text-[#0D3B66] mb-4">
              Body Text Scale (.text-*) — Fixed Pixel Values
            </div>
            <div className="flex flex-col gap-3">
              {[
                {
                  cls: ".text-xs",
                  size: "12px/16px",
                  desc: "Fine print, eyebrow labels",
                },
                {
                  cls: ".text-s",
                  size: "14px/20px",
                  desc: "Captions, helper text",
                },
                {
                  cls: ".text-m",
                  size: "16px/24px",
                  desc: "Body copy, default",
                },
                {
                  cls: ".text-l",
                  size: "18px/28px",
                  desc: "Lead paragraphs, intro",
                },
                { cls: ".text-xl", size: "20px/28px", desc: "Large UI labels" },
                {
                  cls: ".text-2xl",
                  size: "24px/32px",
                  desc: "Stats, callout numbers",
                },
              ].map((item) => (
                <div
                  key={item.cls}
                  className="flex items-baseline gap-4 pb-2 border-b border-[#EDEDED]"
                >
                  <code className="w-20 text-xs text-[#3F6183] shrink-0">
                    {item.cls}
                  </code>
                  <span style={{ fontSize: item.size.split("/")[0] }}>
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 03 NAVBAR */}
        <section className="flex flex-col gap-4">
          <div className="text-xs font-bold tracking-widest uppercase text-[#3F6183] border-b border-[#EDEDED] pb-2">
            03 — Navigation
          </div>
          <nav className="bg-[#0D3B66] px-5 rounded-lg flex items-center justify-between h-15 shadow-md">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#F7DE32] rounded flex items-center justify-center">
                <div className="w-4 h-2.5 border-2 border-[#0D3B66] rounded-sm" />
              </div>
              <span className="font-serif text-[#FFFAF9] text-base">
                Mountain West Chamber
              </span>
            </div>
            <div className="flex gap-6 items-center text-xs text-[rgba(255,250,249,0.7)]">
              <a href="#" className="cursor-pointer">
                About
              </a>
              <a href="#" className="cursor-pointer">
                Membership
              </a>
              <a href="#" className="cursor-pointer">
                Events
              </a>
              <a href="#" className="cursor-pointer">
                Programs
              </a>
            </div>
            <button className="btn btn-yellow btn-sm">Become a Member</button>
          </nav>
        </section>

        {/* 04 HERO */}
        <section className="flex flex-col gap-4">
          <div className="text-xs font-bold tracking-widest uppercase text-[#3F6183] border-b border-[#EDEDED] pb-2">
            04 — Hero Section
          </div>
          <div className="bg-[#0D3B66] rounded-lg p-10 flex justify-between items-center gap-8 relative overflow-hidden shadow-xl">
            <div
              className="absolute -right-10 -top-12 w-64 h-64 rounded-full pointer-events-none"
              style={{ background: "rgba(93,202,209,0.1)" }}
            />
            <div
              className="absolute -right-1/4 -bottom-16 w-48 h-48 rounded-full pointer-events-none"
              style={{ background: "rgba(247,222,50,0.07)" }}
            />
            <div className="max-w-1/2 relative">
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4"
                style={{
                  background: "rgba(93,202,209,0.15)",
                  border: "1px solid rgba(93,202,209,0.3)",
                }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#5DCAD1]" />
                <span className="text-xs text-[#5DCAD1] tracking-widest uppercase">
                  Bluffdale · Herriman · Riverton
                </span>
              </div>
              <h1 className="heading-xl text-[#FFFAF9] mb-4">
                Helping Businesses Make
                <br />
                <em>Connections for Success</em>
              </h1>
              <p className="text-base text-[rgba(255,250,249,0.65)] leading-relaxed max-w-md mb-6">
                We are the bridge between businesses and the community — helping
                you build lasting relationships since 1997.
              </p>
              <div className="flex gap-3">
                <button className="btn btn-yellow">Join Today</button>
                <button
                  className="btn text-[#FFFAF9]"
                  style={{ borderColor: "rgba(255,250,249,0.3)" }}
                >
                  View Events
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 w-1/3">
              {[
                { number: "120+", label: "Members", color: "#F7DE32" },
                { number: "40+", label: "Events / yr", color: "#5DCAD1" },
                { number: "3", label: "Cities", color: "#FFA384" },
                { number: "27+", label: "Years", color: "#FFFAF9" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-[rgba(255,250,249,0.07)] border border-[rgba(255,250,249,0.12)] rounded p-4 text-center"
                >
                  <div className="heading-m" style={{ color: item.color }}>
                    {item.number}
                  </div>
                  <div className="text-xs text-[rgba(255,250,249,0.5)] mt-0.5">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 05 MEMBERSHIP TIERS */}
        <section className="flex flex-col gap-4">
          <div className="text-xs font-bold tracking-widest uppercase text-[#3F6183] border-b border-[#EDEDED] pb-2">
            05 — Membership Tier Cards
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              {
                tier: "Startup",
                price: "$195",
                bg: "#EDEDED",
                textColor: "#0D3B66",
                priceColor: "#3F6183",
                checkColor: "#5DCAD1",
                checkText: "#fff",
                features: [
                  "Member Directory listing",
                  "Networking events",
                  "Local Link discounts",
                ],
                button: "Get Started",
              },
              {
                tier: "Business",
                price: "$395",
                bg: "#0D3B66",
                textColor: "#FFFAF9",
                priceColor: "#5DCAD1",
                checkColor: "#F7DE32",
                checkText: "#0D3B66",
                featured: true,
                features: [
                  "Everything in Startup",
                  "Ribbon-cutting ceremonies",
                  "Sponsorship opportunities",
                ],
                button: "Join Now",
              },
              {
                tier: "Corporate",
                price: "$795",
                bg: "#EDEDED",
                textColor: "#0D3B66",
                priceColor: "#3F6183",
                checkColor: "#5DCAD1",
                checkText: "#fff",
                features: [
                  "Everything in Business",
                  "Premier event placement",
                  "Dedicated account support",
                ],
                button: "Contact Us",
              },
            ].map((card) => (
              <div
                key={card.tier}
                className="rounded-lg p-6 shadow-sm relative overflow-hidden"
                style={{ backgroundColor: card.bg }}
              >
                {card.featured && (
                  <div className="absolute top-0 right-0 bg-[#F7DE32] text-[#0D3B66] text-xs font-bold px-3 py-1 rounded-bl-lg tracking-wider">
                    MOST POPULAR
                  </div>
                )}
                <div
                  className="text-xs font-bold tracking-widest uppercase mb-3"
                  style={{ color: card.priceColor }}
                >
                  {card.tier}
                </div>
                <div style={{ fontSize: "1.5rem", color: card.textColor }}>
                  <span className="font-bold">{card.price}</span>
                  <span style={{ fontSize: "14px", color: card.priceColor }}>
                    /yr
                  </span>
                </div>
                <div
                  className="h-px my-4"
                  style={{ background: "rgba(0,0,0,0.1)" }}
                />
                <div className="flex flex-col gap-2 mb-5">
                  {card.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-xs"
                      style={{ color: card.textColor }}
                    >
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 text-xs font-black"
                        style={{
                          background: card.checkColor,
                          color: card.checkText,
                        }}
                      >
                        ✓
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>
                <button
                  className={`w-full py-2 rounded text-center font-bold text-xs ${card.bg === "#0D3B66" ? "bg-[#F7DE32] text-[#0D3B66]" : "bg-transparent border border-[#0D3B66] text-[#0D3B66]"}`}
                >
                  {card.button}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* 06 EVENT CARDS */}
        <section className="flex flex-col gap-4">
          <div className="text-xs font-bold tracking-widest uppercase text-[#3F6183] border-b border-[#EDEDED] pb-2">
            06 — Upcoming Event Cards
          </div>
          <div className="flex flex-col gap-3">
            {[
              {
                month: "May",
                day: "14",
                title: "Golf Tournament — Spring Classic",
                location: "Riverton Hills Golf Club · 8:00 AM",
                badge: "OPEN",
                badgeBg: "#5DCAD1",
                badgeText: "#0D3B66",
                btnText: "Register",
              },
              {
                month: "Jun",
                day: "3",
                title: "Teacher Appreciation Luncheon",
                location: "Herriman High School · 12:00 PM",
                badge: "FEATURED",
                badgeBg: "#FFA384",
                badgeText: "#4a2318",
                btnText: "Learn More",
              },
            ].map((event, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#EDEDED] rounded p-4 flex items-center gap-4 shadow-xs"
              >
                <div className="bg-[#0D3B66] rounded p-3 text-center shrink-0">
                  <div className="text-xs uppercase text-[#5DCAD1] tracking-wider">
                    {event.month}
                  </div>
                  <div className="heading-s text-[#F7DE32] leading-none mt-0.5">
                    {event.day}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="heading-xs text-[#0D3B66]">
                      {event.title}
                    </span>
                    <span
                      className="text-xs font-bold px-2 py-1 rounded"
                      style={{
                        background: event.badgeBg,
                        color: event.badgeText,
                      }}
                    >
                      {event.badge}
                    </span>
                  </div>
                  <div className="text-xs text-[#3F6183]">{event.location}</div>
                </div>
                <button
                  className={`btn ${event.btnText === "Register" ? "btn-yellow" : "btn-outline"} btn-sm shrink-0`}
                >
                  {event.btnText}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* 07 BUTTONS & BADGES */}
        <section className="flex flex-col gap-4">
          <div className="text-xs font-bold tracking-widest uppercase text-[#3F6183] border-b border-[#EDEDED] pb-2">
            07 — Buttons &amp; Badges
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-xs font-bold text-[#0D3B66] mb-4">
              Button variants
            </div>
            <div className="flex flex-wrap gap-3 mb-5 items-center">
              <button className="btn btn-primary">Primary</button>
              <button className="btn btn-yellow">Join Now</button>
              <button className="btn btn-outline">Outline</button>
              <button className="btn btn-secondary">Secondary</button>
              <button className="btn btn-ghost">Ghost Link →</button>
            </div>
            <div className="flex flex-wrap gap-3 mb-5 items-center">
              <button className="btn btn-primary btn-sm">Small Primary</button>
              <button className="btn btn-yellow btn-sm">Small CTA</button>
              <button className="btn btn-primary btn-lg">Large Primary</button>
              <button className="btn btn-yellow btn-lg">Large Join Now</button>
            </div>
            <div className="h-px bg-[#EDEDED] my-4" />
            <div className="text-xs font-bold text-[#0D3B66] mb-3">
              Badge / Tag variants
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              {[
                { label: "Member", bg: "#0D3B66", text: "#FFFAF9" },
                { label: "Open", bg: "#5DCAD1", text: "#0D3B66" },
                { label: "Featured", bg: "#F7DE32", text: "#0D3B66" },
                { label: "Event", bg: "#FFA384", text: "#4a2318" },
                { label: "Community", bg: "#EDEDED", text: "#3F6183" },
                { label: "Sponsor", bg: "#3F6183", text: "#fff" },
              ].map((badge) => (
                <span
                  key={badge.label}
                  className="text-xs font-semibold px-2.5 py-1 rounded"
                  style={{ background: badge.bg, color: badge.text }}
                >
                  {badge.label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 08 SECTION SPACING */}
        <section className="flex flex-col gap-4">
          <div className="text-xs font-bold tracking-widest uppercase text-[#3F6183] border-b border-[#EDEDED] pb-2">
            08 — Section Spacing Scale (--section-*)
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex flex-col gap-3">
              {[
                { cls: "--section-s", range: "48px → 64px" },
                { cls: "--section-m", range: "64px → 80px" },
                { cls: "--section-l", range: "80px → 96px" },
                { cls: "--section-xl", range: "96px → 112px" },
                { cls: "--section-2xl", range: "112px → 128px" },
                { cls: "--section-3xl", range: "128px → 160px" },
              ].map((item) => (
                <div key={item.cls} className="flex items-center gap-4">
                  <code className="w-32 text-xs text-[#3F6183] shrink-0">
                    {item.cls}
                  </code>
                  <div
                    className="h-5 bg-[#0D3B66] rounded"
                    style={{ width: `var(${item.cls})` }}
                  />
                  <span className="text-xs text-[#3F6183]">{item.range}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 09 BORDER RADIUS */}
        <section className="flex flex-col gap-4">
          <div className="text-xs font-bold tracking-widest uppercase text-[#3F6183] border-b border-[#EDEDED] pb-2">
            09 — Border Radius (.radius-*)
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex flex-wrap gap-8 items-end">
              {[
                { cls: ".radius-none", style: "0" },
                { cls: ".radius-md", style: "6px" },
                { cls: ".radius-lg", style: "8px" },
                { cls: ".radius-xl", style: "12px" },
                { cls: ".radius-2xl", style: "16px" },
                { cls: ".radius-3xl", style: "24px" },
                { cls: ".radius-full", style: "9999px" },
              ].map((item) => (
                <div
                  key={item.cls}
                  className="flex flex-col items-center gap-2"
                >
                  <div
                    className="w-15 h-15 bg-[#0D3B66]"
                    style={{
                      borderRadius:
                        item.style === "9999px" ? "9999px" : item.style,
                    }}
                  />
                  <code className="text-xs text-[#3F6183]">{item.cls}</code>
                  <span className="text-xs text-gray-400">{item.style}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10 BOX SHADOWS */}
        <section className="flex flex-col gap-4">
          <div className="text-xs font-bold tracking-widest uppercase text-[#3F6183] border-b border-[#EDEDED] pb-2">
            10 — Box Shadows (.shadow-*)
          </div>
          <div className="bg-[#EDEDED] rounded-lg p-8">
            <div className="flex flex-wrap gap-8 items-end">
              {[
                { cls: ".shadow-2xs", shadow: "0 1px rgb(0 0 0 / 0.05)" },
                { cls: ".shadow-xs", shadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)" },
                {
                  cls: ".shadow-sm",
                  shadow:
                    "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
                },
                {
                  cls: ".shadow-md",
                  shadow:
                    "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                },
                {
                  cls: ".shadow-lg",
                  shadow:
                    "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
                },
                {
                  cls: ".shadow-xl",
                  shadow:
                    "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                },
                {
                  cls: ".shadow-2xl",
                  shadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
                },
              ].map((item) => (
                <div
                  key={item.cls}
                  className="flex flex-col items-center gap-3"
                >
                  <div
                    className="w-20 h-15 bg-white rounded"
                    style={{ boxShadow: item.shadow }}
                  />
                  <code className="text-xs text-[#3F6183]">{item.cls}</code>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 11 CONTACT FORM */}
        <section className="flex flex-col gap-4">
          <div className="text-xs font-bold tracking-widest uppercase text-[#3F6183] border-b border-[#EDEDED] pb-2">
            11 — Contact / Inquiry Form
          </div>
          <div className="bg-[#0D3B66] rounded-lg p-8 grid grid-cols-2 gap-8 items-start shadow-xl">
            <div>
              <div className="text-xs tracking-widest uppercase text-[#5DCAD1] mb-2">
                Get in Touch
              </div>
              <h3 className="heading-m text-[#FFFAF9] mb-3">
                Questions about membership?
              </h3>
              <p className="text-xs text-[rgba(255,250,249,0.6)] leading-relaxed">
                The best way to experience what the Chamber has to offer is to
                attend an event. Reach out and we'll get you started.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <div className="flex items-center gap-3 text-xs text-[rgba(255,250,249,0.7)]">
                  <div className="w-8 h-8 rounded-full bg-[rgba(93,202,209,0.2)] flex items-center justify-center shrink-0">
                    ✉
                  </div>
                  info@mountainwestchamber.org
                </div>
                <div className="flex items-center gap-3 text-xs text-[rgba(255,250,249,0.7)]">
                  <div className="w-8 h-8 rounded-full bg-[rgba(93,202,209,0.2)] flex items-center justify-center shrink-0">
                    📍
                  </div>
                  Riverton, UT 84065 · 801-280-0595
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Your Name"
                disabled
                className="bg-[rgba(255,250,249,0.1)] border border-[rgba(255,250,249,0.2)] rounded p-3 text-[#FFFAF9] text-xs w-full"
              />
              <input
                type="email"
                placeholder="Email Address"
                disabled
                className="bg-[rgba(255,250,249,0.1)] border border-[rgba(255,250,249,0.2)] rounded p-3 text-[#FFFAF9] text-xs w-full"
              />
              <select
                disabled
                className="bg-[rgba(255,250,249,0.1)] border border-[rgba(255,250,249,0.2)] rounded p-3 text-[rgba(255,250,249,0.7)] text-xs w-full"
              >
                <option>I'm interested in...</option>
              </select>
              <textarea
                placeholder="Your message"
                rows={3}
                disabled
                className="bg-[rgba(255,250,249,0.1)] border border-[rgba(255,250,249,0.2)] rounded p-3 text-[#FFFAF9] text-xs w-full resize-none"
              />
              <button className="btn btn-yellow w-full">Send Message</button>
            </div>
          </div>
        </section>

        {/* 12 FOOTER */}
        <section className="flex flex-col gap-4">
          <div className="text-xs font-bold tracking-widest uppercase text-[#3F6183] border-b border-[#EDEDED] pb-2">
            12 — Footer
          </div>
          <div className="bg-[#0D3B66] rounded-lg p-6 shadow-md">
            <div className="flex justify-between items-start mb-5">
              <div>
                <div className="font-serif text-[#FFFAF9] text-base mb-1">
                  Mountain West Chamber of Commerce
                </div>
                <div className="text-xs text-[rgba(255,250,249,0.5)]">
                  Helping your business make connections for success
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-9 h-9 rounded bg-[rgba(255,250,249,0.1)] flex items-center justify-center text-base text-[rgba(255,250,249,0.7)] cursor-pointer">
                  f
                </div>
                <div className="w-9 h-9 rounded bg-[rgba(255,250,249,0.1)] flex items-center justify-center text-xs font-bold text-[rgba(255,250,249,0.7)] cursor-pointer">
                  in
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-5 py-5 px-0 border-t border-b border-[rgba(255,250,249,0.1)] mb-5">
              {[
                {
                  title: "About",
                  links: ["About Us", "Board of Directors", "Utah Strong"],
                },
                {
                  title: "Membership",
                  links: ["Become a Member", "Member Benefits", "Renew"],
                },
                {
                  title: "Programs",
                  links: [
                    "Golf Tournament",
                    "Scholarships",
                    "Teacher Appreciation",
                  ],
                },
                { title: "Connect", links: ["Contact Us", "Calendar", "Blog"] },
              ].map((col) => (
                <div key={col.title}>
                  <div className="text-xs font-bold tracking-widest uppercase text-[#5DCAD1] mb-3">
                    {col.title}
                  </div>
                  <div className="flex flex-col gap-2">
                    {col.links.map((link) => (
                      <a
                        key={link}
                        className="text-xs text-[rgba(255,250,249,0.6)] cursor-pointer hover:text-[rgba(255,250,249,0.9)]"
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <div className="text-xs text-[rgba(255,250,249,0.4)]">
                © 2026 Mountain West Chamber of Commerce · Riverton, UT
              </div>
              <div className="flex gap-4">
                <a className="text-xs text-[rgba(255,250,249,0.4)] cursor-pointer hover:text-[rgba(255,250,249,0.6)]">
                  Privacy
                </a>
                <a className="text-xs text-[rgba(255,250,249,0.4)] cursor-pointer hover:text-[rgba(255,250,249,0.6)]">
                  Terms
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
