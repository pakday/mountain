import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PersonCard } from "@/components/Cards";

export const metadata: Metadata = {
  title: "Board of Directors",
  description:
    "Meet the dedicated community leaders guiding Mountain West Chamber of Commerce.",
};

const BASE = "/Structure/About%20Us/boardofdirectors";

// Board officers — displayed in featured leadership row
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

// General board members — uniform grid, no bios here
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
  },
];

// Members with bios — shown in a dedicated spotlight section
const spotlights = [
  {
    name: "Crystal Flynn",
    company: "Eternal Estate Planning",
    role: "Board Member",
    image: `${BASE}/crystal.jpg`,
    bio: "Crystal co-owns Eternal Estate Planning with her husband Jackson. She handles day-to-day operations while Jackson manages the technical side. She enjoys the marketing aspect because it allows her to meet many new people. Crystal has a bachelor\u2019s degree from Weber State and enjoys traveling and camping with her family.",
  },
  {
    name: "Lyla Nock",
    company: "Events by Lyla",
    role: "Board Member",
    image: `${BASE}/LylaNockSq.jpg`,
    bio: "As a relationship manager, I help people, businesses, and communities achieve their financial goals and dreams. I have 10+ years of experience in sales and performance with financial products such as auto, home, and personal loans. I specialize in community and brand development. I am also an active Emcee and Event Host, working with GMGARCIA LLC to host public and private events ranging from audiences of 75 to over 5,000+. I have excellent communication, narration, and interpersonal skills, and I love opportunities to participate and help in events and meet new people.",
  },
  {
    name: "Shea Quintana",
    company: "America First Credit Union",
    role: "Board Member",
    image: `${BASE}/shea.jpg`,
    bio: "Shea actively pursues community partnerships, serves on the Women in Business Committee of the South Valley Chamber of Commerce, and is President of the Public Relations Society of America\u2019s Utah Chapter. She was selected as \u201cBusiness Woman of the Year\u201d in 2015 by the Southwest Valley Chamber. She earned her accreditation in public relations (APR) from PRSA in 2016 and graduated in 2020 with her Masters at WGU in Business Management and Leadership.",
  },
];

const stats = [
  { num: "10", label: "Board Members" },
  { num: "3", label: "Communities Served" },
  { num: "Est.\u00a01997", label: "Year Founded" },
  { num: "27+", label: "Years of Service" },
];

export default function Page() {
  return (
    <>
      {/* \u2500\u2500 Hero \u2500\u2500 */}
      <section className="relative py-40 overflow-hidden">
        <Image
          src={`${BASE}/SWVCOC+Mtg+Sized+wEffect.jpg`}
          alt="Mountain West Chamber community meeting"
          fill
          quality={90}
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/40" />
        {/* Decorative rings */}
        <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-[28rem] h-[28rem] rounded-full border border-teal/20" />
        <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-teal/10" />
        <div className="absolute right-20 top-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-teal/10" />

        <div className="relative z-10 section-container max-w-7xl">
          <div className="max-w-2xl">
            <p className="eyebrow text-teal mb-4">
              Mountain West Chamber of Commerce
            </p>
            <h1 className="heading-xl text-white mb-5">Board of Directors</h1>
            <div className="h-1 w-14 bg-yellow rounded-full mb-7" />
            <p className="font-body text-lg text-white/80 leading-relaxed">
              Dedicated community leaders and business owners committed to
              strengthening Riverton, Herriman, and Bluffdale since 1997.
            </p>
          </div>
        </div>
      </section>

      {/* \u2500\u2500 Stats strip \u2500\u2500 */}
      <div className="bg-teal">
        <div className="section-container py-5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-heading text-2xl font-bold text-white leading-tight">
                  {s.num}
                </p>
                <p className="font-body text-[0.65rem] uppercase tracking-widest text-white/80 mt-0.5">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* \u2500\u2500 Board Officers \u2500\u2500 */}
      <section className="py-24 bg-off-white">
        <div className="section-container">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="eyebrow mb-3">Our Officers</p>
            <h2 className="heading-l text-primary mb-4">Chamber Leadership</h2>
            <div className="section-divider mx-auto mb-5" />
            <p className="font-body text-base text-slate-blue/70 leading-relaxed">
              Meet the officers who set the strategic direction for our chamber
              and community.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {officers.map((m) => (
              <PersonCard
                key={m.name}
                variant="officer"
                name={m.name}
                role={m.role}
                company={m.company}
                companyUrl={m.companyUrl}
                image={m.image}
                accentClass={m.accent}
              />
            ))}
          </div>
        </div>
      </section>

      {/* \u2500\u2500 Board Members Grid \u2500\u2500 */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="eyebrow mb-3">Serving the Community</p>
            <h2 className="heading-l text-primary mb-4">Board Members</h2>
            <div className="section-divider mx-auto" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {boardMembers.map((m) => (
              <PersonCard
                key={m.name}
                variant="member"
                name={m.name}
                role={m.role}
                company={m.company}
                companyUrl={m.companyUrl}
                image={m.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* \u2500\u2500 Member Spotlights \u2500\u2500 */}
      <section className="py-24 bg-primary">
        <div className="section-container">
          <div className="text-center max-w-xl mx-auto mb-16">
            <p className="eyebrow text-teal mb-3">Member Spotlights</p>
            <h2 className="heading-l text-white mb-4">In Their Own Words</h2>
            <div className="section-divider bg-teal mx-auto" />
          </div>

          <div className="space-y-12 max-w-4xl mx-auto">
            {spotlights.map((s, i) => (
              <div
                key={s.name}
                className={`flex flex-col gap-8 sm:items-center ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Photo */}
                <div className="shrink-0">
                  <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden ring-4 ring-teal/20">
                    <Image
                      src={s.image}
                      alt={s.name}
                      fill
                      quality={90}
                      className="object-cover object-top"
                    />
                  </div>
                </div>

                {/* Quote */}
                <div className="flex-1 relative">
                  <div
                    className="absolute -top-3 -left-1 text-teal/20 leading-none select-none"
                    style={{ fontSize: "5rem", fontFamily: "Georgia, serif" }}
                    aria-hidden="true"
                  >
                    &ldquo;
                  </div>
                  <p className="font-body text-white/80 text-base leading-relaxed mb-5 pt-6 sm:pt-4">
                    {s.bio}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-px w-8 bg-teal/40" />
                    <div>
                      <p className="font-body font-bold text-white text-sm leading-tight">
                        {s.name}
                      </p>
                      <p className="font-body text-teal text-xs uppercase tracking-wider">
                        {s.role} &mdash; {s.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* \u2500\u2500 Join the Board CTA \u2500\u2500 */}
      <section className="py-20 bg-light-gray">
        <div className="section-container text-center max-w-xl mx-auto">
          <p className="eyebrow mb-4">Get Involved</p>
          <h2 className="heading-m text-primary mb-4">
            Interested in Joining the Board?
          </h2>
          <div className="section-divider mx-auto mb-7" />
          <p className="font-body text-base text-slate-blue/70 mb-8 leading-relaxed">
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
