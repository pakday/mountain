import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { IconFeatureCard } from "@/components/Cards";

export const metadata: Metadata = {
  title: "Membership Training | Mountain West Chamber of Commerce",
  description:
    "Access training, onboarding guides, and resources to maximize your Mountain West Chamber of Commerce membership from day one.",
};

const steps = [
  {
    number: "01",
    title: "Get Your Welcome Kit",
    description:
      "After joining, you'll receive a welcome email with your member portal login, digital membership card, and links to your first resources.",
  },
  {
    number: "02",
    title: "Attend a New Member Orientation",
    description:
      "Join a short onboarding session — held monthly — to meet Chamber staff, learn how events work, and discover your best next steps as a new member.",
  },
  {
    number: "03",
    title: "Connect at Your First Event",
    description:
      "Jump into a Connect & Learn lunch, a ribbon cutting, or a Women in Business event. Show up, introduce yourself, and start building relationships.",
  },
];

const trainingTopics = [
  {
    title: "Member Portal Walkthrough",
    description:
      "Step-by-step guide to accessing the member directory, submitting events, updating your business listing, and downloading member-only resources.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Networking 101",
    description:
      "Practical tips for making the most of Chamber events — how to introduce yourself, follow up with new contacts, and build meaningful business relationships.",
    icon: (
      <svg
        className="w-5 h-5"
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
    ),
  },
  {
    title: "Event & Program Guide",
    description:
      "An overview of all annual events — the Golf Classic, Knight of Heroes Gala, Teacher Appreciation Luncheon — and how to participate or sponsor.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Maximizing Your Visibility",
    description:
      "Learn how to get your business featured in Chamber communications, on the website directory, social media spotlights, and at ribbon cuttings.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 10l4.553-2.069A1 1 0 0121 8.868V15.13a1 1 0 01-1.447.9L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
        />
      </svg>
    ),
  },
  {
    title: "Women in Business",
    description:
      "Included with every membership — learn about the WIB program, monthly luncheons, speakers, and how to get involved or present your expertise.",
    icon: (
      <svg
        className="w-5 h-5"
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
    ),
  },
  {
    title: "Certificates of Origin",
    description:
      "For members who export internationally — how to request a Certificate of Origin from the Chamber and what documentation you'll need to bring.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
];

export default function Page() {
  return (
    <>
      {/* ── Hero ── */}
      <PageHero
        imageSrc="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&q=75"
        imageAlt="Business professionals in a training session"
        overlay="absolute inset-0 bg-linear-to-br from-primary/90 via-primary/82 to-slate-blue/75"
        eyebrow="Member Resources"
        title={
          <>
            Membership <span className="text-yellow">Training</span>
          </>
        }
        description="Get the most from your Chamber membership. From onboarding to ongoing resources — everything you need to connect, grow, and be heard in your community."
        actions={
          <>
            <Link href="/becomeamember" className="btn btn-yellow btn-lg">
              Become a Member
            </Link>
            <Link href="/for-members" className="btn btn-outline-white">
              Member Resources
            </Link>
          </>
        }
      />

      {/* ── Getting Started Steps ── */}
      <section className="py-(--section-l) bg-off-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow mb-3">New Member Onboarding</p>
            <h2 className="heading-l text-primary mb-4">How to Get Started</h2>
            <div className="section-divider mx-auto mb-5" />
            <p className="font-body text-ink text-base leading-relaxed">
              Three simple steps to activate your membership and start building
              relationships in Riverton, Herriman, and Bluffdale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-white rounded-2xl p-8 border border-light-gray shadow-sm flex flex-col gap-4"
              >
                <span className="font-accent text-5xl font-bold text-teal/20 leading-none select-none">
                  {step.number}
                </span>
                <h3 className="heading-xs text-primary">{step.title}</h3>
                <p className="font-body text-sm text-ink leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Training Topics ── */}
      <section className="py-(--section-l) bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow mb-3">Training Resources</p>
            <h2 className="heading-l text-primary mb-4">
              What You&rsquo;ll Learn
            </h2>
            <div className="section-divider mx-auto mb-5" />
            <p className="font-body text-ink text-base leading-relaxed">
              Each training topic is designed to help you unlock a specific part
              of your membership — from tools and events to visibility and
              advocacy.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingTopics.map((topic) => (
              <IconFeatureCard
                key={topic.title}
                icon={topic.icon}
                title={topic.title}
                description={topic.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Info bar + CTA ── */}
      <section className="py-(--section-xl) bg-primary relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative z-10 container">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="eyebrow text-teal mb-4">We&rsquo;re Here to Help</p>
              <h2 className="heading-xl text-white mb-5">
                Questions About Your{" "}
                <span className="text-yellow">Membership?</span>
              </h2>
              <p className="font-body text-white/75 text-base leading-relaxed mb-8">
                Our staff is always happy to walk you through the member portal,
                answer questions about upcoming events, or help you find the
                right program fit. Reach out any time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contactus" className="btn btn-yellow btn-lg">
                  Contact Us
                </Link>
                <Link href="/for-members" className="btn btn-outline-white">
                  Member Benefits
                </Link>
              </div>
            </div>

            {/* Quick contact facts */}
            <div className="bg-white/10 rounded-2xl p-8 flex flex-col gap-5">
              {[
                {
                  label: "Phone",
                  value: "801-280-0595",
                  href: "tel:8012800595",
                },
                {
                  label: "Email",
                  value: "Info@mountainwestchamber.org",
                  href: "mailto:Info@mountainwestchamber.org",
                },
                {
                  label: "Office",
                  value:
                    "4168 S 12600 S, Riverton, UT 84065 — First Floor, First Utah Bank Bldg",
                  href: null,
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <span className="font-accent text-xs font-semibold uppercase tracking-widest text-teal w-14 pt-0.5 shrink-0">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-body text-white/90 text-sm hover:text-yellow transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="font-body text-white/75 text-sm">
                      {item.value}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
