import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the Mountain West Chamber of Commerce. We\u2019re here to help — our general response time is one business day.",
};

export default function Page() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative py-32 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
          alt="Modern office building"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 section-container max-w-7xl text-left">
          <div className="max-w-3xl">
            <p className="eyebrow text-teal mb-4">
              Mountain West Chamber of Commerce
            </p>
            <h1 className="heading-xl text-white mb-4">Let&rsquo;s Chat</h1>
            <div className="section-divider bg-teal mb-6" />
            <p className="font-body text-lg text-white/80 leading-relaxed">
              Our general response time is one business day. We look forward to
              hearing from you.
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact Section ── */}
      <section className="py-20 bg-off-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* ── Left: info + staff ── */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <p className="eyebrow mb-4">How May We Assist You?</p>
                <h2 className="heading-m text-primary mb-5">
                  Join the Chamber
                </h2>
                <div className="section-divider mb-6" />
                <p className="font-body text-base text-ink leading-relaxed">
                  Whether you&rsquo;re curious about membership benefits,
                  upcoming events, or sponsorship opportunities — we&rsquo;re
                  happy to help.
                </p>
              </div>

              {/* Contact details */}
              <div className="space-y-5">
                {[
                  {
                    label: "Address",
                    content: (
                      <>
                        2222 West 14400 South
                        <br />
                        Bluffdale, UT 84065 — 2nd Floor
                        <br />
                        <span className="text-ink text-xs">
                          Office Hours Vary
                        </span>
                      </>
                    ),
                    iconPath:
                      "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  },
                  {
                    label: "Phone",
                    content: (
                      <a
                        href="tel:8012800595"
                        className="hover:text-primary transition-colors"
                      >
                        801-280-0595
                      </a>
                    ),
                    iconPath:
                      "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z",
                    isFill: true,
                  },
                  {
                    label: "Email",
                    content: (
                      <a
                        href="mailto:Info@mountainwestchamber.org"
                        className="hover:text-primary transition-colors break-all"
                      >
                        Info@mountainwestchamber.org
                      </a>
                    ),
                    iconPath:
                      "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z",
                    isFill: true,
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <svg
                        className="w-5 h-5 text-primary"
                        fill={item.isFill ? "currentColor" : "none"}
                        stroke={item.isFill ? undefined : "currentColor"}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap={item.isFill ? undefined : "round"}
                          strokeLinejoin={item.isFill ? undefined : "round"}
                          strokeWidth={item.isFill ? undefined : 1.5}
                          d={item.iconPath}
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-accent font-700 text-sm text-primary mb-0.5">
                        {item.label}
                      </p>
                      <p className="font-body text-sm text-ink">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Staff card */}
              <div className="card p-6 flex items-center gap-5">
                <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
                  <svg
                    className="w-8 h-8 text-ink"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                  </svg>
                </div>
                <div>
                  <p className="heading-2xs text-primary font-700">
                    Susan Schilling
                  </p>
                  <p className="font-accent text-xs text-slate-blue uppercase tracking-wide font-600">
                    President
                  </p>
                  <a
                    href="mailto:Info@mountainwestchamber.org"
                    className="font-body text-xs text-ink hover:text-primary transition-colors mt-1 block"
                  >
                    Email Us
                  </a>
                  <a
                    href="tel:8012800595"
                    className="font-body text-xs text-ink hover:text-primary transition-colors"
                  >
                    801-280-0595
                  </a>
                </div>
              </div>
            </div>

            {/* ── Right: contact form ── */}
            <div className="lg:col-span-3 card p-8 lg:p-10">
              <h3 className="heading-s text-primary mb-2">Send Us a Message</h3>
              <p className="font-body text-sm text-ink mb-8">
                Tell us what you&rsquo;d like to know more about.
              </p>

              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="font-accent text-xs font-700 uppercase tracking-wide text-ink block mb-1.5"
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
                      className="font-accent text-xs font-700 uppercase tracking-wide text-ink block mb-1.5"
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
                    htmlFor="company"
                    className="font-accent text-xs font-700 uppercase tracking-wide text-ink block mb-1.5"
                  >
                    Company Name
                  </label>
                  <input
                    id="company"
                    type="text"
                    placeholder="Your Business"
                    className="w-full px-4 py-3 rounded-lg border border-light-gray font-body text-sm focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-colors"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="font-accent text-xs font-700 uppercase tracking-wide text-ink block mb-1.5"
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
                      htmlFor="phone"
                      className="font-accent text-xs font-700 uppercase tracking-wide text-ink block mb-1.5"
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
                </div>

                <div>
                  <label className="font-accent text-xs font-700 uppercase tracking-wide text-ink block mb-2">
                    What would you like to know more about?{" "}
                    <span className="text-slate-blue">*</span>
                  </label>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {[
                      "Becoming a Member",
                      "Benefits of Membership",
                      "Chamber Events",
                      "Sponsorship Opportunities",
                      "Other",
                    ].map((opt) => (
                      <label
                        key={opt}
                        className="flex items-center gap-2 cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          name="interest"
                          value={opt}
                          className="rounded border-light-gray text-primary focus:ring-teal/40"
                        />
                        <span className="font-body text-sm text-ink group-hover:text-primary transition-colors">
                          {opt}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="font-accent text-xs font-700 uppercase tracking-wide text-ink block mb-1.5"
                  >
                    Please give us more details
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your business or any questions you have..."
                    className="w-full px-4 py-3 rounded-lg border border-light-gray font-body text-sm focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-colors resize-none"
                  />
                </div>

                <button type="submit" className="btn btn-primary w-full">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick links ── */}
      <section className="py-14 bg-light-gray border-t border-white">
        <div className="section-container">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              {
                title: "Become a Member",
                desc: "Join the Chamber and unlock connections, visibility, and community.",
                href: "/becomeamember",
                cta: "Join Today",
              },
              {
                title: "Attend an Event",
                desc: "Experience firsthand what the Chamber community is all about.",
                href: "/calendar",
                cta: "See Calendar",
              },
              {
                title: "Sponsorship Opportunities",
                desc: "Amplify your brand by sponsoring Chamber events and programs.",
                href: "/sponsorshipopps",
                cta: "Learn More",
              },
            ].map((item) => (
              <div key={item.title} className="card p-6 flex flex-col gap-3">
                <h3 className="heading-xs text-primary font-700">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-ink leading-relaxed flex-1">
                  {item.desc}
                </p>
                <Link
                  href={item.href}
                  className="btn btn-secondary btn-sm self-center"
                >
                  {item.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
