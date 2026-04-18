import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "2024 Scholarship Recipients | Mountain West Chamber",
  description:
    "Celebrating 2024's outstanding student scholarship recipients made possible by the Annual Scholarship Golf Tournament — Mountain West Chamber of Commerce.",
};

const recipients = [
  {
    name: "Camara McCormick",
    amount: "$1,500",
    year: "Class of 2024",
  },
  {
    name: "Augustine Cararez",
    amount: "$1,500",
    year: "Class of 2024",
  },
  {
    name: "Gracie Crane",
    amount: "$1,500",
    year: "Class of 2024",
  },
  {
    name: "Violet Meek",
    amount: "$1,500",
    year: "Class of 2024",
  },
  {
    name: "Sawyer Dalby",
    amount: "$1,500",
    year: "Class of 2024",
  },
];

const galleryImages = [
  {
    src: "/Structure/Programs/scholarship-recipients/PXL_20230524_011340332.jpg",
    alt: "Camara McCormick and Augustine Cararez receiving their scholarship checks",
    wide: true,
  },
  {
    src: "/Structure/Programs/scholarship-recipients/PXL_20230524_143500446.jpg",
    alt: "Gracie Crane receiving her scholarship award",
    wide: false,
  },
  {
    src: "/Structure/Programs/scholarship-recipients/PXL_20230509_010322881.jpg",
    alt: "Scholarship ceremony at Mountain Ridge",
    wide: false,
  },
  {
    src: "/Structure/Programs/scholarship-recipients/PXL_20230523_151504016.jpg",
    alt: "Violet Meek receiving her scholarship check",
    wide: false,
  },
  {
    src: "/Structure/Programs/scholarship-recipients/PXL_20230524_004701465.jpg",
    alt: "Sawyer Dalby receiving his scholarship award",
    wide: false,
  },
];

export default function Page() {
  return (
    <>
      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section className="relative py-28 overflow-hidden bg-primary">
        {/* Diagonal accent bar */}
        <div
          className="absolute top-0 right-0 w-1/2 h-full bg-slate-blue/40"
          style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" }}
        />
        {/* Yellow accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow" />

        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <p className="eyebrow text-teal mb-5">Programs · Education</p>
            <h1
              className="heading-xl text-white mb-6"
              style={{ lineHeight: "1.05" }}
            >
              2024 Scholarship <span className="text-yellow">Recipients</span>
            </h1>
            <p className="font-body text-lg text-white/80 max-w-2xl leading-relaxed mb-10">
              Every year the Mountain West Chamber of Commerce awards
              scholarships to outstanding local students through proceeds from
              our Annual Scholarship Golf Tournament. These young leaders
              represent the future of our community.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/golf-tournament" className="btn btn-yellow btn-lg">
                Support the Golf Tournament
              </Link>
              <Link href="/golf-sponsorships" className="btn btn-outline-white">
                Become a Sponsor
              </Link>
            </div>
          </div>
        </div>

        {/* Floating stat cards */}
        <div className="section-container relative z-10 mt-14">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl">
            {[
              { value: "5", label: "Recipients" },
              { value: "$7,500", label: "Total Awarded" },
              { value: "27+", label: "Years of Service" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-4 text-center"
              >
                <div
                  className="heading-l text-yellow"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {s.value}
                </div>
                <div className="font-accent text-xs font-700 uppercase tracking-widest text-white/80 mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ABOUT THE SCHOLARSHIP
      ═══════════════════════════════════════ */}
      <section className="py-20 bg-off-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Text */}
            <div>
              <p className="eyebrow mb-4">Our Commitment to Education</p>
              <h2 className="heading-l text-primary mb-5">
                Investing in Tomorrow's{" "}
                <span className="text-slate-blue">Community Leaders</span>
              </h2>
              <div className="w-16 h-1 bg-yellow rounded-full mb-6" />
              <p className="font-body text-base text-ink leading-relaxed mb-4">
                Since 1997, the Mountain West Chamber of Commerce has championed
                education as a cornerstone of community growth. Our annual
                scholarship program provides financial support to graduating
                seniors in Riverton, Herriman, and Bluffdale who demonstrate
                exceptional character, academic achievement, and community
                involvement.
              </p>
              <p className="font-body text-base text-ink leading-relaxed mb-8">
                These scholarships are funded entirely through the generosity of
                our business members and sponsors who participate in the Annual
                Scholarship Golf Classic — proof that when businesses invest in
                community, everyone wins.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-yellow/20 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                      />
                    </svg>
                  </div>
                  <span className="font-accent text-sm font-600 text-ink">
                    Academic Excellence
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-slate-blue"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                      />
                    </svg>
                  </div>
                  <span className="font-accent text-sm font-600 text-ink">
                    Community Impact
                  </span>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative h-96 lg:h-105 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/Structure/Programs/scholarship-recipients/PXL_20230509_010322881.jpg"
                  alt="2024 Scholarship award ceremony"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary/60 to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 bg-yellow text-primary rounded-xl px-5 py-4 shadow-lg">
                <div
                  className="heading-lg text-primary"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  $1,500
                </div>
                <div className="font-accent text-xs font-700 uppercase tracking-widest">
                  Per Recipient
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          RECIPIENTS GRID
      ═══════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="section-container">
          {/* Section header */}
          <div className="text-center mb-14">
            <p className="eyebrow mb-4">Class of 2024</p>
            <h2 className="heading-l text-primary mb-4">
              Meet Our{" "}
              <span className="text-slate-blue">Scholarship Recipients</span>
            </h2>
            <p className="font-body text-base text-ink max-w-2xl mx-auto leading-relaxed">
              Five exceptional students from across the southwest Salt Lake
              County school districts were selected to receive a $1,500
              scholarship this year.
            </p>
          </div>

          {/* Cards grid — center last row */}
          <div className="flex flex-wrap justify-center gap-6">
            {recipients.map((r, i) => (
              <div
                key={r.name}
                className="group relative w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-xs bg-white border border-light-gray rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Top accent bar with gradient */}
                <div
                  className="h-2 w-full"
                  style={{
                    background:
                      i % 3 === 0
                        ? "linear-gradient(90deg, #0D3B66, #5DCAD1)"
                        : i % 3 === 1
                          ? "linear-gradient(90deg, #5DCAD1, #F7DE32)"
                          : "linear-gradient(90deg, #F7DE32, #0D3B66)",
                  }}
                />
                <div className="p-6 flex flex-col gap-3">
                  {/* Award badge */}
                  <span className="inline-flex items-center gap-2 self-start bg-yellow/20 text-primary rounded-full px-3 py-1 font-accent text-xs font-700 uppercase tracking-wide">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {r.year}
                  </span>
                  {/* Name */}
                  <h3 className="heading-xs text-primary group-hover:text-teal transition-colors duration-300">
                    {r.name}
                  </h3>
                  {/* Divider */}
                  <div className="w-10 h-0.5 bg-teal rounded-full" />
                  {/* Amount */}
                  <div className="flex items-baseline gap-2 mt-1">
                    <span
                      className="heading-s text-slate-blue"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {r.amount}
                    </span>
                    <span className="font-accent text-xs text-ink uppercase tracking-wide font-600">
                      Scholarship Award
                    </span>
                  </div>
                  {/* Funded by note */}
                  <p className="font-body text-xs text-ink mt-1 leading-relaxed">
                    Funded through the Annual Scholarship Golf Classic
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PHOTO GALLERY — Bento grid
      ═══════════════════════════════════════ */}
      <section className="py-20 bg-light-gray">
        <div className="section-container">
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">Award Ceremonies</p>
            <h2 className="heading-xl text-primary mb-4">
              Celebrating Their{" "}
              <span className="text-slate-blue">Achievements</span>
            </h2>
            <p className="font-body text-base text-ink max-w-xl mx-auto leading-relaxed">
              Chamber representatives personally visit each recipient's school
              to present the award — making the moment as memorable as possible.
            </p>
          </div>

          {/* Bento-style grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[240px]">
            {/* Large card — spans 2 cols + 2 rows */}
            <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group shadow-md">
              <Image
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <span className="font-accent text-white text-sm font-600">
                  Camara McCormick & Augustine Cararez
                </span>
              </div>
            </div>

            {/* Top-right small */}
            <div className="relative rounded-2xl overflow-hidden group shadow-md">
              <Image
                src={galleryImages[1].src}
                alt={galleryImages[1].alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 right-3 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <span className="font-accent text-white text-xs font-600">
                  Gracie Crane
                </span>
              </div>
            </div>

            {/* Top-right small 2 */}
            <div className="relative rounded-2xl overflow-hidden group shadow-md">
              <Image
                src={galleryImages[2].src}
                alt={galleryImages[2].alt}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 right-3 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <span className="font-accent text-white text-xs font-600">
                  Mountain Ridge Ceremony
                </span>
              </div>
            </div>

            {/* Bottom-right small */}
            <div className="relative rounded-2xl overflow-hidden group shadow-md">
              <Image
                src={galleryImages[3].src}
                alt={galleryImages[3].alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 right-3 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <span className="font-accent text-white text-xs font-600">
                  Violet Meek
                </span>
              </div>
            </div>

            {/* Bottom-right wide */}
            <div className="col-span-1 relative rounded-2xl overflow-hidden group shadow-md">
              <Image
                src={galleryImages[4].src}
                alt={galleryImages[4].alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 right-3 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <span className="font-accent text-white text-xs font-600">
                  Sawyer Dalby
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          IMPACT BANNER
      ═══════════════════════════════════════ */}
      <section className="py-16 bg-primary">
        <div className="section-container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "27+", label: "Years of Scholarships" },
              { value: "$7,500", label: "Awarded in 2024" },
              { value: "5", label: "Students Supported" },
              { value: "3", label: "Local Communities" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-2">
                <div
                  className="heading-2xl text-yellow"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {s.value}
                </div>
                <div className="font-accent text-sm font-600 uppercase tracking-widest text-white/80">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          HOW IT WORKS / APPLY CTA
      ═══════════════════════════════════════ */}
      <section className="py-20 bg-off-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                step: "01",
                title: "Annual Golf Classic",
                desc: "Each year, chamber members and community sponsors gather for the Annual Scholarship Golf Tournament at Stonebridge Golf Course.",
                icon: (
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3"
                    />
                  </svg>
                ),
              },
              {
                step: "02",
                title: "Student Applications",
                desc: "High school seniors in Riverton, Herriman, and Bluffdale apply for the scholarship demonstrating academic achievement and community service.",
                icon: (
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                ),
              },
              {
                step: "03",
                title: "Awards Ceremony",
                desc: "Recipients are personally presented their scholarship checks at their school in front of their peers, family, and school community.",
                icon: (
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-2xl p-8 shadow-sm border border-light-gray hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-teal shrink-0">
                    {item.icon}
                  </div>
                  <span className="font-accent text-5xl font-800 text-light-gray leading-none">
                    {item.step}
                  </span>
                </div>
                <h3 className="heading-sm text-primary mb-3">{item.title}</h3>
                <p className="font-body text-sm text-ink leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Full-width CTA card */}
          <div
            className="relative rounded-2xl overflow-hidden py-14 px-8 md:px-16 text-center"
            style={{
              background:
                "linear-gradient(135deg, #0D3B66 0%, #3F6183 60%, #3F6183 100%)",
            }}
          >
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-teal/10 translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <p className="eyebrow text-yellow mb-4">Help Fund the Future</p>
              <h2 className="heading-xl text-white mb-5">
                Support Local Students by{" "}
                <span className="text-yellow">
                  Sponsoring the Golf Tournament
                </span>
              </h2>
              <p className="font-body text-white/80 text-base leading-relaxed mb-8">
                Every sponsorship directly funds these scholarships. Join our
                business community on the course and make a real difference in a
                student's future.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/golf-tournament" className="btn btn-yellow btn-lg">
                  Golf Tournament Details
                </Link>
                <Link
                  href="/golf-sponsorships"
                  className="btn btn-outline-white"
                >
                  View Sponsorship Levels
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
