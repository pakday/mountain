import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Utah Strong",
  description:
    "Resources and support for Utah businesses — because we're stronger together.",
};

const resourceGroups = [
  {
    category: "Small Business Resources",
    color: "bg-primary",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    ),
    resources: [
      {
        name: "U.S. Small Business Administration",
        url: "https://www.sba.gov/",
        desc: "Federal resources, loans, and guidance for small businesses.",
      },
      {
        name: "SBDC — Utah",
        url: "https://utahsbdc.org/",
        desc: "Free consulting and training for small business owners in Utah.",
      },
      {
        name: "Department of Workforce Services",
        url: "https://jobs.utah.gov/",
        desc: "Workforce development, employment, and business resources.",
      },
      {
        name: "U.S. Chamber of Commerce",
        url: "https://www.uschamber.com/",
        desc: "Nation's largest business organization — resources and advocacy.",
      },
      {
        name: "Association of Chamber Executives",
        url: "https://resources.acce.org/",
        desc: "Resources for chamber professionals and executives.",
      },
      {
        name: "U.S. Internal Revenue Service",
        url: "https://www.irs.gov/businesses",
        desc: "Tax resources, filing guides, and business tax information.",
      },
    ],
  },
  {
    category: "Health Resources",
    color: "bg-teal-dark",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    ),
    resources: [
      {
        name: "Utah Department of Health",
        url: "https://health.utah.gov/",
        desc: "Public health information and services for Utah residents.",
      },
      {
        name: "Utah Governor's Office",
        url: "https://governor.utah.gov/",
        desc: "State leadership and official Utah government resources.",
      },
      {
        name: "Centers for Disease Control (CDC)",
        url: "https://www.cdc.gov/",
        desc: "National health guidance, data, and disease prevention.",
      },
      {
        name: "Health and Human Services",
        url: "https://www.hhs.gov/",
        desc: "Federal department protecting the health of all Americans.",
      },
      {
        name: "U.S. Food & Drug Administration",
        url: "https://www.fda.gov/",
        desc: "Food safety, drug approvals, and consumer protection.",
      },
      {
        name: "World Health Organization",
        url: "https://www.who.int/",
        desc: "International public health leadership and guidance.",
      },
    ],
  },
  {
    category: "Online Business Tools",
    color: "bg-slate-blue",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
    resources: [
      {
        name: "U.S. Dept. of Labor",
        url: "https://www.dol.gov/",
        desc: "Employment law, worker rights, and employer resources.",
      },
      {
        name: "Utah Governor's Office of Economic Opportunity",
        url: "https://business.utah.gov/",
        desc: "Start, grow, and expand your Utah business.",
      },
    ],
  },
];

export default function Page() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-primary py-24">
        <div className="section-container max-w-3xl text-left">
          <p className="eyebrow text-teal mb-4">#UtahStrong #ChamberStrong</p>
          <h1 className="heading-2xl text-white mb-4">Utah Strong</h1>
          <div className="section-divider bg-teal mb-6" />
          <p className="font-body text-lg text-white/80 leading-relaxed">
            Together we are stronger. Here are resources to help your business
            and community thrive in Utah.
          </p>
        </div>
      </section>

      {/* ── Resources ── */}
      <section className="py-20 bg-off-white">
        <div className="section-container">
          <div className="space-y-16">
            {resourceGroups.map((group) => (
              <div key={group.category}>
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className={`w-12 h-12 rounded-xl ${group.color} flex items-center justify-center flex-shrink-0`}
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {group.icon}
                    </svg>
                  </div>
                  <h2 className="heading-md text-primary">{group.category}</h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {group.resources.map((r) => (
                    <a
                      key={r.name}
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card p-6 flex flex-col gap-2 hover:shadow-md hover:border-teal/40 transition-all"
                    >
                      <h3 className="heading-xs text-primary font-700">
                        {r.name}
                      </h3>
                      <p className="font-body text-sm text-slate-500 leading-relaxed flex-1">
                        {r.desc}
                      </p>
                      <span className="font-accent text-xs text-teal font-700 mt-1">
                        Visit →
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Community CTA ── */}
      <section className="py-16 bg-primary">
        <div className="section-container text-center max-w-xl mx-auto">
          <p className="eyebrow text-teal mb-5">
            Together We&rsquo;re Stronger
          </p>
          <h2 className="heading-lg text-white mb-5">
            Join the Chamber Community
          </h2>
          <p className="font-body text-base text-white/80 mb-8 leading-relaxed">
            Get connected with local businesses and resources that can help your
            business grow and give back.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/becomeamember" className="btn btn-yellow btn-lg">
              Become a Member
            </Link>
            <Link href="/contactus" className="btn btn-outline-white btn-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
