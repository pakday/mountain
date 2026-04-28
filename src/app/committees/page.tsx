import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Committees | Mountain West Chamber of Commerce",
  description:
    "Join a Chamber committee and help shape the future of business in Riverton, Herriman, and Bluffdale. Find the right fit and get involved.",
};

const committees = [
  {
    title: "Ambassador Committee",
    description:
      "Ambassadors are the welcoming face of the Chamber — attending ribbon cuttings, greeting new members, and representing the Chamber at community events. A great fit for relationship-builders.",
    meets: "Monthly + events as scheduled",
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
    title: "Events Committee",
    description:
      "Plan and execute the Chamber's signature events — including the Annual Golf Classic, Knight of Heroes Gala, and Teacher Appreciation Luncheon. Great for creative and organized members.",
    meets: "Bi-monthly, event-driven",
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
    title: "Government Affairs",
    description:
      "Work directly with city officials and legislators through the Western Growth Coalition and Legislative Roundup. Advocate for policies that support local businesses and community growth.",
    meets: "Monthly with city/state sessions",
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
    title: "Membership Committee",
    description:
      "Help grow and retain Chamber membership. Reach out to prospective members, welcome new businesses, and ensure existing members stay connected and engaged throughout the year.",
    meets: "Monthly",
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
    title: "Women in Business",
    description:
      "A dedicated group supporting women entrepreneurs and professionals in our community. Organizes monthly luncheons with guest speakers, workshops, and peer-to-peer mentorship.",
    meets: "Monthly luncheons",
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
    title: "Marketing &amp; Communications",
    description:
      "Support Chamber visibility through social media, newsletters, and community outreach. Help tell the stories of our members and programs to a broader audience.",
    meets: "Monthly",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
      />
    ),
  },
];

export default function Page() {
  return (
    <>
      {/* ── Hero ── */}
      <PageHero
        imageSrc="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=75"
        imageAlt="Business committee meeting around a table"
        overlay="absolute inset-0 bg-linear-to-br from-primary/90 via-primary/82 to-slate-blue/75"
        eyebrow="Get Involved"
        title={
          <>
            Chamber <span className="text-yellow">Committees</span>
          </>
        }
        description="Committees are the engine behind the Chamber. They drive our events, grow our membership, and advocate for the business community. Find your place and make a difference."
        actions={
          <>
            <Link href="/contactus" className="btn btn-yellow btn-lg">
              Express Interest
            </Link>
            <Link href="/boardofdirectors" className="btn btn-outline-white">
              Board of Directors
            </Link>
          </>
        }
      />

      {/* ── Why Join ── */}
      <section className="py-(--section-l) bg-off-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="eyebrow mb-4">Why Join a Committee</p>
              <h2 className="heading-l text-primary mb-5">
                More Than a Meeting — It&rsquo;s a Community
              </h2>
              <div className="section-divider mb-6" />
              <p className="font-body text-ink text-base leading-relaxed mb-5">
                Committee members don&rsquo;t just attend — they lead. Whether
                you&rsquo;re planning events, welcoming new businesses, or
                advocating with local government, your involvement shapes the
                direction of the Chamber and the communities we serve.
              </p>
              <p className="font-body text-ink text-base leading-relaxed mb-8">
                Committees meet regularly and welcome members at any level of
                experience. You bring your expertise; we&rsquo;ll plug you into
                a group that fits.
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

            {/* Quick benefits */}
            <div className="flex flex-col gap-4">
              {[
                {
                  title: "Deeper Connections",
                  body: "Work shoulder-to-shoulder with fellow members and build relationships that go beyond a business card exchange.",
                },
                {
                  title: "Real Leadership Experience",
                  body: "Committees give motivated members a pathway to board leadership and greater influence in the business community.",
                },
                {
                  title: "Direct Community Impact",
                  body: "Your work funds scholarships, honors teachers, supports first responders, and amplifies local business voices.",
                },
              ].map((item) => (
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

      {/* ── Committee Cards ── */}
      <section className="py-(--section-l) bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow mb-3">Active Committees</p>
            <h2 className="heading-l text-primary mb-4">Find Your Committee</h2>
            <div className="section-divider mx-auto mb-5" />
            <p className="font-body text-ink text-base leading-relaxed">
              Each committee has a distinct focus. Browse below to find the one
              that aligns with your strengths and interests.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {committees.map((c) => (
              <div
                key={c.title}
                className="bg-off-white rounded-2xl p-7 border border-light-gray hover:shadow-md transition-shadow duration-300 flex flex-col gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {c.icon}
                  </svg>
                </div>
                <h3
                  className="heading-xs text-primary"
                  dangerouslySetInnerHTML={{ __html: c.title }}
                />
                <p className="font-body text-sm text-ink leading-relaxed flex-1">
                  {c.description}
                </p>
                <div className="flex items-center gap-2 pt-1 border-t border-light-gray">
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
                  <span className="font-accent text-xs text-ink/60 uppercase tracking-wide">
                    {c.meets}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-(--section-xl) bg-primary relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative z-10 container text-center">
          <p className="eyebrow text-teal mb-4">Together We Are Stronger</p>
          <h2 className="heading-xl text-white mb-5">
            Ready to <span className="text-yellow">Get Involved?</span>
          </h2>
          <p className="font-body text-white/75 text-base leading-relaxed max-w-2xl mx-auto mb-10">
            Tell us which committee interests you and we&rsquo;ll connect you
            with the right people. All Chamber members are welcome — no
            experience required, just a desire to contribute.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contactus" className="btn btn-yellow btn-lg">
              Contact Us to Join
            </Link>
            <Link href="/becomeamember" className="btn btn-outline-white">
              Become a Member First
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
