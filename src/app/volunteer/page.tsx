import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Volunteer | Mountain West Chamber of Commerce",
  description:
    "Give back to your community by volunteering with the Mountain West Chamber of Commerce. Explore volunteer roles for events, committees, and community initiatives.",
};

/* ─── Data ──────────────────────────────────────────────────────── */

const volunteerRoles = [
  {
    title: "Event Volunteer",
    description:
      "Help set up, run, and wrap up our signature annual events — from the Scholarship Golf Classic to the Knight of Heroes Gala. Great for detail-oriented, energetic team players.",
    commitment: "Event days + 1 planning meeting",
    bestFor: "People who love events & energy",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    ),
  },
  {
    title: "Ambassador",
    description:
      "Be a welcoming face of the Chamber at ribbon cuttings, new member orientations, and community events. Ambassadors are relationship builders who represent the Chamber with warmth and professionalism.",
    commitment: "Monthly meetings + events as scheduled",
    bestFor: "Connectors & relationship builders",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
      />
    ),
  },
  {
    title: "Committee Support",
    description:
      "Support a Chamber committee with research, logistics, communications, or project coordination. Committees tackle everything from membership growth to government advocacy.",
    commitment: "Monthly meetings, 2–4 hrs/month",
    bestFor: "Organizers & strategic thinkers",
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
    title: "Community Outreach",
    description:
      "Help us reach deeper into Riverton, Herriman, and Bluffdale by spreading the word about Chamber programs, ribbon cuttings, and membership. Every conversation creates a connection.",
    commitment: "Flexible — a few hours a month",
    bestFor: "Community champions & communicators",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
      />
    ),
  },
  {
    title: "Teacher Appreciation Support",
    description:
      "Assist with coordinating our annual Teacher Appreciation Luncheon — from gathering nominations and arranging gifts to decorating the venue and honoring educators on the day of the event.",
    commitment: "3–4 hours on event day + 1 planning call",
    bestFor: "Education advocates & detail-oriented volunteers",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
      />
    ),
  },
  {
    title: "Marketing & Media",
    description:
      "Put your photography, social media, or writing skills to work for the community. Help us capture event highlights, draft member spotlights, or grow our digital presence.",
    commitment: "Project-based, flexible",
    bestFor: "Creatives, marketers & content creators",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
      />
    ),
  },
];

const benefits = [
  {
    title: "Build Real Connections",
    body: "Volunteering puts you side-by-side with local business leaders, community champions, and Chamber members you might never otherwise meet.",
  },
  {
    title: "Grow Professionally",
    body: "Every role develops transferable skills — project coordination, leadership, communication, and event management — that strengthen your resume and your reputation.",
  },
  {
    title: "Give Back to Your Community",
    body: "Riverton, Herriman, and Bluffdale are better places to live and work because of people who show up. Your time makes a tangible difference.",
  },
  {
    title: "Open Doors to Leadership",
    body: "Many of our current board members and committee chairs started as volunteers. Your dedication gets noticed and rewarded with greater opportunity.",
  },
];

const steps = [
  {
    number: "01",
    title: "Browse Roles",
    body: "Review the volunteer opportunities on this page and identify where your skills and schedule best align.",
  },
  {
    number: "02",
    title: "Reach Out",
    body: "Contact us through the form below or email us at Info@mountainwestchamber.org. Tell us a bit about yourself and which role interests you.",
  },
  {
    number: "03",
    title: "Get Connected",
    body: "We'll match you with the right committee, event team, or initiative and introduce you to the people you'll be working alongside.",
  },
  {
    number: "04",
    title: "Show Up & Make an Impact",
    body: "Attend your first meeting or event, bring your energy, and start building relationships that last far beyond your volunteer shift.",
  },
];

/* ─── Page ───────────────────────────────────────────────────────── */

export default function Page() {
  return (
    <>
      {/* ── Hero ── */}
      <PageHero
        imageSrc="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80"
        imageAlt="Community volunteers working together at an event"
        overlay="absolute inset-0 bg-linear-to-br from-primary/92 via-primary/82 to-slate-blue/75"
        eyebrow="Get Involved"
        title={
          <>
            Volunteer With <span className="text-yellow">Us</span>
          </>
        }
        description="Your time and talent can help strengthen local business, honor community heroes, and build a more connected South Utah Valley. Explore the ways to get involved."
        actions={
          <>
            <Link href="/contactus" className="btn btn-yellow btn-lg">
              Express Interest
            </Link>
            <Link href="/committees" className="btn btn-outline-white">
              View Committees
            </Link>
          </>
        }
      />

      {/* ── Why Volunteer ── */}
      <section className="py-(--section-l) bg-off-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="eyebrow mb-4">Why Volunteer</p>
              <h2 className="heading-l text-primary mb-5">
                More Than Helping Out — It&rsquo;s Building Something
              </h2>
              <div className="section-divider mb-6" />
              <p className="font-body text-ink text-base leading-relaxed mb-5">
                Volunteering with the Chamber isn&rsquo;t just about giving back
                — it&rsquo;s about growing alongside a community of passionate
                business owners and civic-minded leaders who want the same
                things you do.
              </p>
              <p className="font-body text-ink text-base leading-relaxed mb-8">
                Whether you have a few hours to lend at an event or want to take
                on a regular committee role, there&rsquo;s a place for you here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contactus" className="btn btn-primary">
                  Express Interest
                </Link>
                <Link href="/becomeamember" className="btn btn-outline">
                  Become a Member
                </Link>
              </div>
            </div>

            {/* Benefits list */}
            <div className="flex flex-col gap-4">
              {benefits.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 border border-light-gray shadow-sm flex items-start gap-4"
                >
                  <div className="w-2 h-2 rounded-full bg-teal mt-2 shrink-0" />
                  <div>
                    <h3 className="heading-2xs text-primary mb-1">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm text-ink leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Volunteer Roles ── */}
      <section className="py-(--section-l) bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow mb-3">Volunteer Opportunities</p>
            <h2 className="heading-l text-primary mb-4">Find Your Role</h2>
            <div className="section-divider mx-auto mb-5" />
            <p className="font-body text-ink text-base leading-relaxed">
              From one-day event support to ongoing committee work,
              there&rsquo;s a volunteer opportunity that fits your schedule and
              your strengths.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {volunteerRoles.map((role) => (
              <div
                key={role.title}
                className="bg-off-white rounded-2xl p-7 border border-light-gray hover:shadow-md transition-shadow duration-300 flex flex-col gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {role.icon}
                  </svg>
                </div>
                <h3 className="heading-xs text-primary">{role.title}</h3>
                <p className="font-body text-sm text-ink leading-relaxed flex-1">
                  {role.description}
                </p>
                <div className="flex flex-col gap-2 pt-3 border-t border-light-gray">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-teal shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="font-body text-xs text-ink/70">
                      {role.commitment}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-teal shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <span className="font-body text-xs text-teal font-medium">
                      {role.bestFor}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-(--section-l) bg-primary">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow text-teal mb-3">Getting Started</p>
            <h2 className="heading-l text-white mb-4">How to Get Involved</h2>
            <div className="section-divider bg-yellow/40 mx-auto mb-5" />
            <p className="font-body text-white/80 text-base leading-relaxed">
              The process is simple. We want to make it easy for you to start
              contributing right away.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-white/8 rounded-2xl p-7 border border-white/15 flex flex-col gap-4"
              >
                <span className="heading-m text-yellow/60 font-bold leading-none">
                  {step.number}
                </span>
                <h3 className="heading-xs text-white">{step.title}</h3>
                <p className="font-body text-sm text-white/70 leading-relaxed flex-1">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-(--section-l) bg-off-white">
        <div className="container">
          <div className="bg-white rounded-3xl border border-light-gray p-10 lg:p-14 max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="eyebrow mb-4">Ready to Help?</p>
                <h2 className="heading-m text-primary mb-4">
                  Your Community Is Waiting for You
                </h2>
                <div className="section-divider mb-6" />
                <p className="font-body text-ink text-base leading-relaxed mb-8">
                  Tell us a little about yourself, which role interests you, and
                  how much time you have to give. We&rsquo;ll connect you with
                  the right people and get you started.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contactus" className="btn btn-primary btn-lg">
                    Get In Touch
                  </Link>
                  <Link href="/get-involved" className="btn btn-outline">
                    All Ways to Get Involved
                  </Link>
                </div>
              </div>

              {/* Quick facts */}
              <div className="flex flex-col gap-4">
                {[
                  {
                    label: "No Membership Required",
                    body: "Anyone who cares about our community can volunteer — member or not.",
                  },
                  {
                    label: "Flexible Commitment",
                    body: "From a single event to an ongoing role — you decide how much time you give.",
                  },
                  {
                    label: "Real Impact",
                    body: "Your hours directly support scholarships, community events, and local businesses.",
                  },
                ].map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-start gap-4 p-5 bg-off-white rounded-xl border border-light-gray"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <svg
                        className="w-4 h-4 text-yellow"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="heading-2xs text-primary mb-1">
                        {fact.label}
                      </p>
                      <p className="font-body text-sm text-ink leading-relaxed">
                        {fact.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
