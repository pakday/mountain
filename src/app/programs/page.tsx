import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { ProgramCard } from "@/components/Cards";

export const metadata: Metadata = {
  title: "Programs | Mountain West Chamber of Commerce",
  description:
    "Explore all signature programs offered by the Mountain West Chamber of Commerce — scholarship golf, community events, sponsorship opportunities, and more.",
};

const programs = [
  {
    eyebrow: "Annual Event",
    title: "Scholarship Golf Classic",
    description:
      "Our flagship fundraiser. All proceeds above costs go to scholarships for local high school students. Join us every fall at Stonebridge Golf Course.",
    imageSrc:
      "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=75",
    href: "/golf-tournament",
    linkLabel: "Event Details →",
  },
  {
    eyebrow: "Annual Gala",
    title: "Knight of Heroes",
    description:
      "An evening gala celebrating local heroes — first responders, educators, and community leaders who go above and beyond for our communities.",
    imageSrc:
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=75",
    href: "/knight-of-heroes-event",
    linkLabel: "Event Details →",
  },
  {
    eyebrow: "Education",
    title: "Teacher Appreciation Luncheon",
    description:
      "We honor 25 outstanding local educators every year at our annual Teacher Appreciation Luncheon — a heartfelt thank-you from the business community.",
    imageSrc:
      "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&q=75",
    href: "/teacher-appreciation-event",
    linkLabel: "Learn More →",
  },
  {
    eyebrow: "Scholarships",
    title: "Scholarship Recipients",
    description:
      "Meet the students whose futures are brighter thanks to the generosity of our sponsors and the success of the Annual Golf Classic.",
    imageSrc:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=75",
    href: "/scholarship-recipients",
    linkLabel: "See Recipients →",
  },
  {
    eyebrow: "Sponsorship",
    title: "Sponsorship Opportunities",
    description:
      "Put your brand in front of hundreds of local business leaders. Explore event sponsorships that align with your marketing and community goals.",
    imageSrc:
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=75",
    href: "/sponsorshipopps",
    linkLabel: "View Opportunities →",
  },
  {
    eyebrow: "Member Savings",
    title: "Local Link Discounts",
    description:
      "Exclusive member-to-member deals from businesses right here in the community. Show your membership card and start saving today.",
    imageSrc:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=75",
    href: "/local-linkdiscounts",
    linkLabel: "Browse Discounts →",
  },
];

export default function Page() {
  return (
    <>
      {/* ── Hero ── */}
      <PageHero
        imageSrc="https://images.unsplash.com/photo-1511578314322-379afb476865?w=1920&q=75"
        imageAlt="Chamber community event and programs"
        overlay="absolute inset-0 bg-linear-to-br from-primary/92 via-primary/82 to-slate-blue/75"
        eyebrow="Community Impact"
        title={
          <>
            Our <span className="text-yellow">Programs</span>
          </>
        }
        description="From scholarship fundraisers to community galas, every Chamber program is designed to invest in our people, honor our heroes, and strengthen local business."
        actions={
          <>
            <Link href="/golf-tournament" className="btn btn-yellow btn-lg">
              Golf Classic 2025
            </Link>
            <Link href="/sponsorshipopps" className="btn btn-outline-white">
              Sponsorship Opportunities
            </Link>
          </>
        }
      />

      {/* ── Programs Grid ── */}
      <section className="py-(--section-l) bg-off-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow mb-3">All Programs</p>
            <h2 className="heading-l text-primary mb-4">
              Events &amp; Initiatives
            </h2>
            <div className="section-divider mx-auto mb-5" />
            <p className="font-body text-ink text-base leading-relaxed">
              Each program reflects our commitment to education, community
              recognition, business growth, and giving back to the area we call
              home.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {programs.map((p) => (
              <ProgramCard
                key={p.href}
                eyebrow={p.eyebrow}
                title={p.title}
                description={p.description}
                imageSrc={p.imageSrc}
                href={p.href}
                linkLabel={p.linkLabel}
              />
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
          <p className="eyebrow text-teal mb-4">Get Involved</p>
          <h2 className="heading-xl text-white mb-5">
            Ready to Make an <span className="text-yellow">Impact?</span>
          </h2>
          <p className="font-body text-white/75 text-base leading-relaxed max-w-2xl mx-auto mb-10">
            Sponsor an event, register for the Golf Classic, or simply become a
            member — every level of participation helps strengthen the Riverton,
            Herriman, and Bluffdale business community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/becomeamember" className="btn btn-yellow btn-lg">
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
