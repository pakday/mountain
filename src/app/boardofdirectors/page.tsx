import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { StatCard } from "@/components/Cards";
import BoardExpandGrid from "./BoardExpandGrid";

export const metadata: Metadata = {
  title: "Board of Directors | Mountain West Chamber",
  description:
    "Meet the dedicated community leaders guiding Mountain West Chamber of Commerce since 1997.",
};

const BASE = "/Structure/About%20Us/boardofdirectors";

// ─── Officers ──────────────────────────────────────────────────────────────
const officers = [
  {
    name: "Tiffany Isbell",
    company: "The Sports Connection",
    companyUrl: "http://www.sportsconnectionutah.com",
    role: "Board Chair",
    image: `${BASE}/Tiffany.jpg`,
    accent: "border-yellow",
  },
  {
    name: "Gabe Garcia",
    company: "Utah Community Credit Union",
    companyUrl: "https://www.uccu.com",
    role: "Past Chair",
    image: `${BASE}/Gbe.jpg`,
    accent: "border-teal",
  },
  {
    name: "Heidi Patzold",
    company: "City Publications SLC South",
    role: "Board Treasurer",
    image: `${BASE}/heidi.jpg`,
    accent: "border-teal",
  },
];

// ─── Board Members ──────────────────────────────────────────────────────────
const boardMembers = [
  {
    name: "Crystal Flynn",
    company: "Eternal Estate Planning",
    companyUrl: "https://www.eternalep.com/",
    role: "Board Member",
    image: `${BASE}/crystal.jpg`,
  },
  {
    name: "Stephanie Isiko",
    company: "CMIT Solutions",
    role: "Board Member",
    image: `${BASE}/Stephanie_IsikoSq.jpg`,
    bio: "Stephanie Isiko co-owns CMIT Solutions of Sandy with her husband Jackson. Stephanie is responsible for the day-to-day operations of the business while Jackson handles the technical aspect. She enjoys the marketing aspect as it has allowed her to meet so many new people. Stephanie has a Bachelor's degree from Weber State and enjoys traveling and camping with her family.",
  },
  {
    name: "Megan Bennett",
    company: "Edward Jones Investments",
    role: "Board Member",
    image: `${BASE}/MeganBennettSq.jpg`,
  },
  {
    name: "Aaron Maxfield",
    company: "Telemundo",
    role: "Board Member",
    image: `${BASE}/AaronMaxfieldSq.png`,
  },
  {
    name: "Lyla Nock",
    company: "Events by Lyla",
    role: "Board Member",
    image: `${BASE}/LylaNockSq.jpg`,
    bio: "As a relationship manager, I help people, businesses, and communities achieve their financial goals and dreams. I have 10+ years of experience in sales and performance with financial products such as auto, home, and personal loans. I specialize in community and brand development. I am also an active Emcee and Event Host, working with GMGARCIA LLC to host public and private events ranging from audiences of 75 to over 5,000+. My goal in life and work is to connect with people frequently and enhance our personal and professional lives.",
  },
  {
    name: "Mike Agrelius",
    company: "Nothing Bundt Cakes",
    role: "Board Member",
    image: `${BASE}/mike.jpg`,
  },
  {
    name: "Shea Quintana",
    company: "America First Credit Union",
    role: "Board Member",
    image: `${BASE}/shea.jpg`,
    bio: "Shea actively pursues community partnerships, serves on the Women in Business Committee of the South Valley Chamber of Commerce, and is President of the Public Relations Society of America's Utah Chapter. She was selected as \"Business Woman of the Year\" in 2015 by the Southwest Valley Chamber. She earned her accreditation in public relations (APR) from PRSA in 2016 and graduated with her Master's at WGU in Business Management and Leadership.",
  },
];

// ─── Stats ──────────────────────────────────────────────────────────────────
const stats = [
  { value: "10", label: "Board Members" },
  { value: "3", label: "Communities Served" },
  { value: "Est. 1997", label: "Year Founded" },
  { value: "27+", label: "Years of Service" },
];

export default function Page() {
  return (
    <>
      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section className="relative py-44 overflow-hidden">
        <Image
          src={`${BASE}/SWVCOC%2BMtg%2BSized%2BwEffect.jpg`}
          alt="Mountain West Chamber of Commerce community meeting"
          fill
          quality={90}
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-primary/90 via-primary/80 to-primary/40" />

        {/* Decorative rings */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-teal/20 pointer-events-none" />
        <div className="absolute right-10 top-1/2 -translate-y-1/2 w-56 h-56 rounded-full border border-yellow/15 pointer-events-none" />

        <div className="relative z-10 section-container max-w-7xl">
          <div className="max-w-2xl">
            <p className="eyebrow text-teal mb-4">
              Mountain West Chamber of Commerce
            </p>
            <h1 className="heading-xl text-white mb-5 leading-tight">
              Board of <span className="text-yellow">Directors</span>
            </h1>
            <div className="h-1 w-14 bg-yellow rounded-full mb-7" />
            <p className="font-body text-lg text-white/80 leading-relaxed max-w-lg">
              Dedicated community leaders and business owners committed to
              strengthening Riverton, Herriman, and Bluffdale since 1997.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          STATS — same UI as homepage
      ═══════════════════════════════════════ */}
      <section className="bg-primary py-12">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:divide-x md:divide-white/10">
            {stats.map((s) => (
              <StatCard key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          OFFICERS
      ═══════════════════════════════════════ */}
      <section className="py-24 bg-off-white">
        <div className="section-container">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="eyebrow mb-3">Our Leadership</p>
            <h2 className="heading-l text-primary mb-4">Chamber Officers</h2>
            <div className="section-divider mx-auto mb-5" />
            <p className="font-body text-base text-ink leading-relaxed">
              These officers set the strategic direction for our chamber and
              serve as stewards of our community mission.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {officers.map((o) => (
              <div
                key={o.name}
                className={`card border-t-4 ${o.accent} p-8 flex flex-col items-center text-center gap-5 hover:shadow-xl transition-shadow duration-300`}
              >
                <div className="relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-teal/15 shrink-0">
                  <Image
                    src={o.image}
                    alt={o.name}
                    fill
                    quality={95}
                    priority
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <span className="inline-block bg-primary text-white text-[0.6rem] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                    {o.role}
                  </span>
                  <h3 className="heading-s text-primary font-heading mb-1">
                    {o.name}
                  </h3>
                  {o.companyUrl ? (
                    <a
                      href={o.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm text-teal hover:text-primary transition-colors"
                    >
                      {o.company}
                    </a>
                  ) : (
                    <p className="font-body text-sm text-ink">
                      {o.company}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BOARD MEMBERS (interactive grid)
      ═══════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="eyebrow mb-3">Serving the Community</p>
            <h2 className="heading-l text-primary mb-4">Board Members</h2>
            <div className="section-divider mx-auto mb-5" />
            <p className="font-body text-base text-ink leading-relaxed">
              Tap any member with a{" "}
              <span
                className="inline-flex items-center justify-center w-4 h-4 bg-yellow rounded-full text-primary font-bold align-middle"
                style={{ fontSize: "0.55rem" }}
              >
                +
              </span>{" "}
              badge to read their story.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <BoardExpandGrid members={boardMembers} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA
      ═══════════════════════════════════════ */}
      <section className="py-20 bg-light-gray">
        <div className="section-container text-center max-w-xl mx-auto">
          <p className="eyebrow mb-4">Get Involved</p>
          <h2 className="heading-m text-primary mb-4">
            Interested in Joining the Board?
          </h2>
          <div className="section-divider mx-auto mb-7" />
          <p className="font-body text-base text-ink mb-8 leading-relaxed">
            We&rsquo;re always looking for passionate community leaders ready to
            make a difference. Reach out to learn more about board involvement.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contactus" className="btn btn-primary btn-lg">
              Contact Us
            </Link>
            <Link href="/becomeamember" className="btn btn-outline btn-lg">
              Become a Member
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
