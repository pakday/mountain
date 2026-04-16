import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "#UtahStrong — Resources for Utah Businesses",
  description:
    "#ChamberStrong - Together! Resources and support for Utah businesses.",
};

const BASE = "/Structure/About%20Us/utah-strong";

const categories = [
  {
    id: "small-business",
    label: "Small Business",
    img: `${BASE}/SMALL+BUSINESS+Button.jpg`,
  },
  { id: "health", label: "Health", img: `${BASE}/HEALTH+Button.jpg` },
  {
    id: "restaurants",
    label: "Restaurants",
    img: `${BASE}/RESTAURANT+Button.jpg`,
  },
  {
    id: "remote-working",
    label: "Remote Working",
    img: `${BASE}/REMOTE+WORKING+Button.jpg`,
  },
  {
    id: "online-resources",
    label: "Online Resources",
    img: `${BASE}/ONLINE+RESOURCES+Button.jpg`,
  },
];

const smallBusiness = [
  {
    name: "U.S. Small Business Administration",
    url: "https://www.sba.gov/page/coronavirus-covid-19-small-business-guidance-loan-resources",
    desc: "Federal resources, loans, and guidance for small businesses.",
  },
  {
    name: "SBDC — Utah",
    url: "https://utahsbdc.org/2018/10/25/salt-lake/",
    desc: "Free consulting and training for Utah small business owners.",
  },
  {
    name: "Department of Workforce Services",
    url: "https://jobs.utah.gov/",
    desc: "Workforce development, employment, and business resources.",
  },
  {
    name: "Utah Governor's Office",
    url: "https://coronavirus.utah.gov/",
    desc: "Official Utah state guidance and resources.",
  },
  {
    name: "U.S. Dept. of Labor",
    url: "https://www.dol.gov/coronavirus",
    desc: "Employment law, worker rights, and employer resources.",
  },
  {
    name: "U.S. Chamber of Commerce",
    url: "https://www.uschamber.com/co/start/strategy/small-business-resources-for-surviving-coronavirus",
    desc: "Nation's largest business organization — resources and advocacy.",
  },
  {
    name: "Association of Chamber Executives",
    url: "https://resources.acce.org/crisismanagement",
    desc: "Resources for chamber professionals and executives.",
  },
  {
    name: "U.S. Internal Revenue Service",
    url: "https://www.irs.gov/coronavirus",
    desc: "Tax resources, filing guides, and business tax information.",
  },
];

const health = [
  {
    name: "Utah Department of Health",
    url: "https://health.utah.gov/",
    desc: "Public health information and services for Utah residents.",
  },
  {
    name: "Office of Governor Herbert",
    url: "https://coronavirus.utah.gov/",
    desc: "State leadership and official Utah government resources.",
  },
  {
    name: "Center for Disease Control",
    url: "https://www.cdc.gov/",
    desc: "National health guidance, data, and disease prevention.",
  },
  {
    name: "Health and Human Services",
    url: "https://www.hhs.gov/",
    desc: "Federal department protecting the health of all Americans.",
  },
  {
    name: "White House",
    url: "https://www.whitehouse.gov/",
    desc: "Executive branch announcements and federal policy guidance.",
  },
  {
    name: "U.S. Food & Drug Administration",
    url: "https://www.fda.gov/emergency-preparedness-and-response/mcm-issues/coronavirus-disease-2019-covid-19",
    desc: "Food safety, drug approvals, and consumer protection.",
  },
  {
    name: "WHO",
    url: "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports/",
    desc: "International public health leadership and guidance.",
  },
];

const restaurants = [
  {
    name: "Arby's",
    phone: "801-446-9300",
    address: "1731 West 12600 South",
    note: "Closes 10PM",
  },
  {
    name: "Burger King",
    phone: "801-563-5246",
    address: "3813 West 13400 South",
  },
  {
    name: "Chick-fil-A South Jordan",
    phone: "801-727-2697",
    address: "11494 South District Drive, South Jordan, UT 84095",
  },
  {
    name: "Chick-fil-A Mountain View Village",
    phone: "(801) 509-7680",
    address: "4627 West Partridge Hill Lane, Mountain View Village",
  },
  {
    name: "McDonald's Riverton",
    phone: "801-254-3327",
    address: "2002 West 12600 South, Riverton, UT 84065",
  },
  {
    name: "McDonald's Herriman",
    phone: "(801) 446-3243",
    address: "5018 West 13400 South, Herriman",
  },
  {
    name: "Nothing Bundt Cakes",
    phone: "801-619-3757",
    address: "10389 South State Street",
  },
  {
    name: "Rita's Ice",
    phone: "385-529-5376",
    address:
      "4608 W Partridge Hill La Suite B-120, Mountain View Village, Riverton",
  },
  {
    name: "Salsa Leedos",
    phone: "801-565-8818",
    address: "3956 West 13400 South, Riverton",
  },
  {
    name: "Texas Roadhouse",
    phone: "801-253-8600",
    address: "11593 South 4000 West, South Jordan",
  },
  {
    name: "The Local Greek",
    phone: "801-996-3042",
    address: "3673 West 13400 South, Riverton",
  },
  {
    name: "Chip Cookies",
    phone: "385-787-5057",
    address: "4578 W. Partridge Hill Lane C-110, Riverton, UT 84096",
  },
];

const remoteWork = [
  {
    name: "5 Tips to Stay Productive While Working From Home",
    url: "https://time.com/5801725/work-from-home-remote-tips/",
    source: "Time Magazine",
  },
  {
    name: "20 Tips for Working at Home",
    url: "https://blog.hubspot.com/marketing/productivity-tips-working-from-home",
    source: "HubSpot Blog",
  },
  {
    name: "Work From Home 101",
    url: "https://www.zdnet.com/article/remote-working-101-professionals-guide-to-the-tools-of-the-trade/",
    source: "ZDNet",
  },
];

const onlineTools = [
  {
    category: "Accounting",
    tools: [
      {
        name: "QuickBooks Online",
        price: "$12–75",
        services: "Storage/Sharing · Project Management · Security",
      },
      {
        name: "Gusto",
        price: "$6–12/user",
        services: "Storage/Sharing · Project Management · Security",
      },
    ],
  },
  {
    category: "All-Inclusive",
    tools: [
      {
        name: "Google Suite / Hangouts",
        price: "$6–25/user*",
        services: "Video · Phone · Messaging · Storage · PM · Security",
        note: "*COVID response: free access for G Suite customers through July 1 — up to 250 participants, live streaming 100K, record to Drive.",
      },
      {
        name: "Office 365 / Teams",
        price: "$0–12.50/user*",
        services: "Video · Messaging · Storage · PM · Security",
        note: "*COVID response: free version Teams user limits lifted.",
      },
    ],
  },
  {
    category: "Communication",
    tools: [
      {
        name: "Zoom",
        price: "$0–19.99*",
        services: "Video · Web Conferencing · Security",
        note: "*COVID response: free for educators.",
      },
      {
        name: "Zoom Phone",
        price: "$14.99",
        services: "Audio/Phone · Security",
      },
      {
        name: "Slack",
        price: "$0–12.50",
        services: "Video · Messaging · Storage · Security",
      },
      {
        name: "Loom",
        price: "$0–5/user*",
        services: "Video · Webinar · Messaging",
        note: "*COVID response through July 1: free for educators, recording limit removed, 30-day free trial, $5/mo Pro.",
      },
      {
        name: "RingCentral",
        price: "$24.99–49.99/user*",
        services: "Video · Webinar · Phone · Messaging",
        note: "*COVID response: 3 months free for K-12, health providers, nonprofits.",
      },
      {
        name: "GoToMeeting",
        price: "$12–16/user*",
        services: "Video · Webinar · Phone · Messaging",
        note: "*COVID response: eligible organizations can access free emergency remote work toolkit.",
      },
    ],
  },
  {
    category: "CRM",
    tools: [
      {
        name: "Live Agent",
        price: "$0–39/user",
        services: "Project Management",
      },
    ],
  },
  {
    category: "Information Services",
    tools: [
      {
        name: "Dropbox Business",
        price: "$12.50–20/user*",
        services: "Storage/Sharing · Security",
        note: "*COVID response: free 3-month subscriptions for nonprofits & NGOs fighting COVID-19.",
      },
      {
        name: "Genius Scan",
        price: "Free",
        services:
          "Storage/Sharing — phone app for scanning & sending documents.",
      },
      {
        name: "Tiny Scanner",
        price: "Free",
        services:
          "Storage/Sharing — phone app for scanning & sending documents.",
      },
    ],
  },
  {
    category: "Project Management",
    tools: [
      {
        name: "Trello",
        price: "$0–20.83/user",
        services: "Storage/Sharing · PM · Security",
      },
      {
        name: "Asana",
        price: "$0–24.99/user",
        services: "Storage/Sharing · Project Management",
      },
    ],
  },
  {
    category: "Scheduling",
    tools: [{ name: "Acuity", price: "$0–50", services: "Project Management" }],
  },
];

export default function Page() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative py-36 overflow-hidden">
        <Image
          src={`${BASE}/slider-saltlakeskyline.jpg`}
          alt="Salt Lake City skyline — Utah Strong"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-primary/75" />
        <div className="relative z-10 section-container max-w-7xl text-left">
          <div className="max-w-3xl">
            <p className="eyebrow text-yellow mb-4">
              #UtahStrong · #ChamberStrong
            </p>
            <h1 className="heading-xl text-white mb-4">Utah Strong</h1>
            <div className="section-divider bg-yellow mb-6" />
            <p className="font-body text-xl text-white/90 leading-relaxed font-semibold">
              Together We Are Stronger.
            </p>
            <p className="font-body text-lg text-white/70 leading-relaxed mt-2">
              Resources to help businesses and our community thrive in Utah.
            </p>
          </div>
        </div>
      </section>

      {/* ── Category Nav ── */}
      <section className="py-10 bg-off-white border-b border-light-gray sticky top-16 z-40">
        <div className="section-container">
          <div className="grid auto-cols-max grid-flow-col gap-4 justify-center">
            {categories.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="block px-6 py-3 rounded-lg bg-white shadow-md hover:shadow-lg hover:bg-primary hover:text-white transition-all duration-200 hover:-translate-y-1 border-2 border-primary/20 text-center font-accent text-sm font-bold tracking-wider uppercase"
              >
                {c.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Small Business Resources ── */}
      <section id="small-business" className="py-20 bg-white scroll-mt-36">
        <div className="section-container">
          <div className="mb-10">
            <p className="eyebrow mb-2">Resources</p>
            <h2 className="heading-m text-primary font-bold">
              Small Business Resources
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {smallBusiness.map((r) => (
              <a
                key={r.name}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-5 flex flex-col gap-2 hover:shadow-lg hover:border-teal/40 transition-all"
              >
                <h3 className="heading-xs text-primary font-semibold leading-snug">
                  {r.name}
                </h3>
                <p className="font-body text-sm text-slate-500 leading-relaxed flex-1">
                  {r.desc}
                </p>
                <span className="font-accent text-xs text-teal font-bold mt-1">
                  Visit →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Health Resources ── */}
      <section id="health" className="py-20 bg-off-white scroll-mt-36">
        <div className="section-container">
          <div className="mb-10">
            <p className="eyebrow mb-2">Resources</p>
            <h2 className="heading-m text-primary font-bold">
              Health Resources
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {health.map((r) => (
              <a
                key={r.name}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-5 flex flex-col gap-2 hover:shadow-lg hover:border-teal/40 transition-all"
              >
                <h3 className="heading-xs text-primary font-semibold leading-snug">
                  {r.name}
                </h3>
                <p className="font-body text-sm text-slate-500 leading-relaxed flex-1">
                  {r.desc}
                </p>
                <span className="font-accent text-xs text-teal font-bold mt-1">
                  Visit →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Restaurants ── */}
      <section id="restaurants" className="py-20 bg-white scroll-mt-36">
        <div className="section-container">
          <div className="mb-5">
            <p className="eyebrow mb-2">Chamber Members</p>
            <h2 className="heading-m text-primary font-bold">
              Restaurant Takeout, Curbside &amp; Delivery
            </h2>
          </div>
          <p className="font-body text-sm text-slate-500 mb-10">
            Chamber member restaurants offering takeout and delivery.{" "}
            <a
              href="https://www.curbsideutah.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal hover:underline font-semibold"
            >
              Check out CurbsideUtah.com
            </a>{" "}
            for more options.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {restaurants.map((r) => (
              <div key={r.name} className="card p-5 flex flex-col gap-1">
                <h3 className="heading-2xs text-primary font-semibold">
                  {r.name}
                </h3>
                <p className="font-body text-sm text-teal-dark font-semibold">
                  {r.phone}
                </p>
                <p className="font-body text-sm text-slate-500 leading-snug">
                  {r.address}
                </p>
                {r.note && (
                  <p className="font-body text-xs text-coral mt-1">{r.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Remote Working ── */}
      <section id="remote-working" className="py-20 bg-off-white scroll-mt-36">
        <div className="section-container">
          <div className="mb-10">
            <p className="eyebrow mb-2">Tips &amp; Guides</p>
            <h2 className="heading-m text-primary font-bold">Remote Working</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl">
            {remoteWork.map((r) => (
              <a
                key={r.name}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-6 flex flex-col gap-3 hover:shadow-lg hover:border-teal/40 transition-all"
              >
                <span className="font-accent text-xs text-teal-dark uppercase tracking-wider font-semibold">
                  {r.source}
                </span>
                <h3 className="heading-2xs text-primary font-semibold leading-snug flex-1">
                  {r.name}
                </h3>
                <span className="font-accent text-xs text-teal font-bold">
                  Read Article →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Online Business Resources ── */}
      <section id="online-resources" className="py-20 bg-white scroll-mt-36">
        <div className="section-container">
          <div className="mb-10">
            <p className="eyebrow mb-2">Tools &amp; Platforms</p>
            <h2 className="heading-m text-primary font-bold">
              Online Business Resources
            </h2>
          </div>

          <div className="space-y-12">
            {onlineTools.map((group) => (
              <div key={group.category}>
                <h3 className="heading-xs text-primary mb-5 pb-3 border-b-2 border-teal/20 uppercase tracking-wider font-semibold">
                  {group.category}
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.tools.map((t) => (
                    <div
                      key={t.name}
                      className="card p-5 flex flex-col gap-2 border border-light-gray"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="heading-2xs text-primary font-semibold leading-snug">
                          {t.name}
                        </h4>
                        <span className="font-accent text-xs text-teal font-bold bg-teal/10 px-2 py-0.5 rounded whitespace-nowrap shrink-0">
                          {t.price}
                        </span>
                      </div>
                      <p className="font-body text-xs text-slate-500 leading-relaxed">
                        {t.services}
                      </p>
                      {t.note && (
                        <p className="font-body text-xs text-slate-400 italic leading-relaxed border-t border-light-gray pt-2 mt-1">
                          {t.note}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-20 overflow-hidden">
        <Image
          src={`${BASE}/slider-saltlakeskyline.jpg`}
          alt=""
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative z-10 section-container text-center max-w-xl mx-auto">
          <p className="eyebrow text-teal mb-5">
            Together We&rsquo;re Stronger
          </p>
          <h2 className="heading-m text-white mb-5">
            Join the Chamber Community
          </h2>
          <p className="font-body text-base text-white/80 mb-8 leading-relaxed">
            Become a member of the Mountain West Chamber of Commerce and access
            exclusive resources, networking events, and community support.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/becomeamember" className="btn btn-yellow">
              Become a Member
            </Link>
            <Link href="/contactus" className="btn btn-outline-white">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
