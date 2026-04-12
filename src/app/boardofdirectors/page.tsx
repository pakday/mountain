import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Board of Directors",
  description:
    "Meet the dedicated community leaders guiding Mountain West Chamber of Commerce.",
};

const BASE = "/Structure/About%20Us/boardofdirectors";

const featured = [
  {
    name: "Tiffany Isbell",
    company: "The Sports Connection",
    companyUrl: "http://www.sportsconnectionutah.com",
    role: "Board Chair",
    image: `${BASE}/Tiffany.jpg`,
  },
  {
    name: "Gabe Garcia",
    company: "Utah Community Credit Union",
    companyUrl: "https://www.uccu.com",
    role: "Past Chair",
    image: `${BASE}/Gbe.jpg`,
    bio: "As a relationship manager, I help people, businesses, and communities achieve their financial goals. I am also an active Emcee and Event Host, working with GMGARCIA LLC to host public and private events ranging from 75 to over 5,000+ attendees.",
  },
];

const members = [
  {
    name: "Heidi Patzold",
    company: "City Publications SLC South",
    role: "Board Treasurer",
    image: `${BASE}/heidi.jpg`,
  },
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
    bio: "Stephanie co-owns CMIT Solutions of Sandy with her husband Jackson. She handles day-to-day operations while Jackson manages the technical side. She has a Bachelor's from Weber State and enjoys traveling and camping with her family.",
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

export default function Page() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative py-32 overflow-hidden">
        <Image
          src={`${BASE}/SWVCOC+Mtg+Sized+wEffect.jpg`}
          alt="Mountain West Chamber community meeting"
          fill
          quality={90}
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 section-container max-w-7xl text-left">
          <div className="max-w-3xl">
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
        </div>
      </section>

      {/* ── Featured Leadership ── */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow mb-4">Our Leadership</p>
            <h2 className="heading-xl text-primary mb-5">Meet the Team</h2>
            <div className="section-divider mx-auto" />
          </div>

          {/* Chair + Past Chair */}
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16">
            {featured.map((m) => (
              <div
                key={m.name}
                className="card p-8 flex flex-col items-center text-center gap-5 border-2 border-teal/30 hover:shadow-lg transition-shadow"
              >
                <div className="relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-teal/20">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    quality={95}
                    priority
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <p className="eyebrow text-teal mb-1">{m.role}</p>
                  <h3 className="heading-sm text-primary">{m.name}</h3>
                  {m.companyUrl ? (
                    <a
                      href={m.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm text-teal-dark hover:text-teal transition-colors mt-1 block"
                    >
                      {m.company}
                    </a>
                  ) : (
                    <p className="font-body text-sm text-slate-500 mt-1">
                      {m.company}
                    </p>
                  )}
                  {m.bio && (
                    <p className="font-body text-sm text-slate-500 mt-4 leading-relaxed text-left">
                      {m.bio}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Rest of the board */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {members.map((m) => (
              <div
                key={m.name}
                className="card p-6 flex flex-col items-center text-center gap-4 hover:shadow-md transition-shadow"
              >
                <div className="relative w-24 h-24 rounded-full overflow-hidden ring-2 ring-light-gray">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    quality={90}
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <p className="eyebrow text-teal-dark text-xs mb-0.5">
                    {m.role}
                  </p>
                  <h3 className="heading-xs text-primary font-semibold">
                    {m.name}
                  </h3>
                  {m.companyUrl ? (
                    <a
                      href={m.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-xs text-teal-dark hover:text-teal transition-colors mt-0.5 block"
                    >
                      {m.company}
                    </a>
                  ) : (
                    <p className="font-body text-xs text-slate-500 mt-0.5">
                      {m.company}
                    </p>
                  )}
                  {m.bio && (
                    <p className="font-body text-xs text-slate-400 mt-3 leading-relaxed text-left">
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
