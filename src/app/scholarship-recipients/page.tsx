import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "2024 Scholarship Recipients — Mountain West Chamber",
  description:
    "Celebrating 2024 scholarship recipients made possible by the Annual Scholarship Golf Tournament — Mountain West Chamber of Commerce.",
};

const BASE = "/Structure/Programs/scholarship-recipients";

const galleryImages = [
  {
    src: `${BASE}/PXL_20230524_004701465.jpg`,
    alt: "2024 Scholarship award ceremony",
    wide: true,
  },
  {
    src: `${BASE}/PXL_20230524_011340332.jpg`,
    alt: "Scholarship recipient receiving award",
    wide: false,
  },
  {
    src: `${BASE}/PXL_20230524_143500446.jpg`,
    alt: "Scholarship ceremony celebration",
    wide: false,
  },
  {
    src: `${BASE}/PXL_20230523_151504016.jpg`,
    alt: "Scholarship recipient with award",
    wide: false,
  },
  {
    src: `${BASE}/PXL_20230509_010322881.jpg`,
    alt: "Scholarship ceremony at Mountain Ridge",
    wide: false,
  },
];

export default function Page() {
  return (
    <>
      {/* ─── HERO ─── */}
      <PageHero
        imageSrc={`${BASE}/PXL_20230524_011340332.jpg`}
        imageAlt="2024 Scholarship award ceremony"
        overlay="absolute inset-0 bg-linear-to-br from-primary/90 via-primary/80 to-slate-blue/70"
        eyebrow="Programs · Education"
        title={
          <>
            2024 Scholarship <span className="text-yellow">Recipients</span>
          </>
        }
        description="All proceeds from the Annual Scholarship Golf Tournament go to scholarships to local high school students."
        actions={
          <>
            <Link href="/golf-tournament" className="btn btn-yellow btn-lg">
              Support the Golf Tournament
            </Link>
            <Link href="/golf-sponsorships" className="btn btn-outline-white">
              Become a Sponsor
            </Link>
          </>
        }
      />

      {/* ─── PHOTO GALLERY ─── */}
      <section className="py-(--section-l) bg-off-white">
        <div className="container">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">Award Ceremonies</p>
            <h2 className="heading-l text-primary mb-4">
              2024 Scholarship <span className="text-yellow">Recipients</span>
            </h2>
            <div className="section-divider mx-auto" />
          </div>

          {/* Bento gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-2xl shadow-md ${
                  img.wide ? "col-span-2 md:col-span-2 aspect-video" : "aspect-square"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-(--section-xl) bg-primary relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        <div className="relative z-10 container text-center">
          <p className="eyebrow text-teal mb-4">Together We Are Stronger</p>
          <h2 className="heading-xl text-white mb-5">
            Support Next Year&rsquo;s <span className="text-yellow">Scholars</span>
          </h2>
          <p className="font-body text-white/75 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            All proceeds from the Annual Scholarship Golf Classic go to
            scholarships for local high school students and to educators.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/golf-tournament" className="btn btn-yellow btn-lg">
              Register for the Golf Tournament
            </Link>
            <Link href="/sponsorshipopps" className="btn btn-outline-white btn-lg">
              Sponsorship Opportunities
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
