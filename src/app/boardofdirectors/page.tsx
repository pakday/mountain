import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Board of Directors",
  description:
    "Meet the dedicated community leaders guiding Mountain West Chamber of Commerce.",
};

const board = [
  {
    name: "Tiffany Isbell",
    company: "The Sports Connection",
    role: "Board Chair",
    featured: true,
  },
  {
    name: "Gabe Garcia",
    company: "Utah Community Credit Union",
    role: "Past Chair",
    featured: true,
  },
  {
    name: "Heidi Patzold",
    company: "City Publications SLC South",
    role: "Board Treasurer",
  },
  {
    name: "Crystal Flynn",
    company: "Eternal Estate Planning",
    role: "Board Member",
  },
  {
    name: "Stephanie Isiko",
    company: "CMIT Solutions",
    role: "Board Member",
    bio: "Stephanie co-owns CMIT Solutions of Sandy with her husband Jackson. She is responsible for day-to-day operations while Jackson handles the technical side. She has a Bachelor's from Weber State and enjoys the marketing aspect of her work.",
  },
  {
    name: "Megan Bennett",
    company: "Edward Jones Investments",
    role: "Board Member",
  },
  {
    name: "Aaron Maxfield",
    company: "Telemundo",
    role: "Board Member",
  },
  {
    name: "Lyla Nock",
    company: "Events by Lyla",
    role: "Board Member",
  },
  {
    name: "Mike Agrelius",
    company: "Nothing Bundt Cakes",
    role: "Board Member",
  },
  {
    name: "Shea Quintana",
    company: "America First Credit Union",
    role: "Board Member",
  },
];

export default function Page() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-primary py-24">
        <div className="section-container max-w-3xl text-left">
          <p className="eyebrow text-teal mb-4">
            Mountain West Chamber of Commerce
          </p>
          <h1 className="heading-2xl text-white mb-4">Board of Directors</h1>
          <div className="section-divider bg-teal mb-6" />
          <p className="font-body text-lg text-white/80 leading-relaxed">
            Our board is comprised of dedicated community leaders and business
            owners committed to growing Riverton, Herriman, and Bluffdale.
          </p>
        </div>
      </section>

      {/* ── Leadership ── */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow mb-4">Our Leadership</p>
            <h2 className="heading-xl text-primary mb-5">Meet the Team</h2>
            <div className="section-divider mx-auto" />
          </div>

          {/* Chair + Past Chair highlight */}
          <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto mb-14">
            {board
              .filter((m) => m.featured)
              .map((m) => (
                <div
                  key={m.name}
                  className="card p-8 flex flex-col items-center text-center gap-4 border-2 border-teal/30"
                >
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-primary/40"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                    </svg>
                  </div>
                  <div>
                    <p className="eyebrow text-teal mb-1">{m.role}</p>
                    <h3 className="heading-sm text-primary">{m.name}</h3>
                    <p className="font-body text-sm text-slate-500 mt-1">
                      {m.company}
                    </p>
                  </div>
                </div>
              ))}
          </div>

          {/* Rest of the board */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {board
              .filter((m) => !m.featured)
              .map((m) => (
                <div
                  key={m.name}
                  className="card p-6 flex gap-5 items-start hover:shadow-md transition-shadow"
                >
                  <div className="w-14 h-14 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-7 h-7 text-teal-dark/50"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                    </svg>
                  </div>
                  <div>
                    <p className="eyebrow text-teal-dark text-xs mb-0.5">
                      {m.role}
                    </p>
                    <h3 className="heading-xs text-primary font-700">
                      {m.name}
                    </h3>
                    <p className="font-body text-xs text-slate-500 mt-0.5">
                      {m.company}
                    </p>
                    {m.bio && (
                      <p className="font-body text-xs text-slate-400 mt-3 leading-relaxed">
                        {m.bio}
                      </p>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* ── Join the board CTA ── */}
      <section className="py-16 bg-light-gray">
        <div className="section-container text-center max-w-xl mx-auto">
          <p className="eyebrow mb-4">Get Involved</p>
          <h2 className="heading-lg text-primary mb-5">
            Interested in Joining the Board?
          </h2>
          <p className="font-body text-base text-slate-600 mb-8 leading-relaxed">
            We&rsquo;re always looking for passionate community leaders ready to
            make a difference. Reach out to learn more about board involvement.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contactus" className="btn btn-primary">
              Contact Us
            </Link>
            <Link href="/becomeamember" className="btn btn-outline">
              Become a Member
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
