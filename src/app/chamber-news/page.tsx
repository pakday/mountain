import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Chamber News | Mountain West Chamber of Commerce",
  description:
    "Stay up to date with the latest news, announcements, and community stories from the Mountain West Chamber of Commerce serving Riverton, Herriman, and Bluffdale.",
};

/* ─── Data ──────────────────────────────────────────────────────── */

const featuredStory = {
  eyebrow: "Community Spotlight",
  title:
    "Mountain West Chamber Celebrates 27 Years of Business Growth in South Utah Valley",
  body: "Since 1997, the Mountain West Chamber of Commerce has been the connective tissue for businesses across Riverton, Herriman, and Bluffdale. This year marks a milestone — over 300 member businesses, a record-breaking Golf Classic, and the strongest Knight of Heroes Gala in the Chamber's history. We're proud to reflect on a year defined by community, growth, and purpose.",
  date: "May 1, 2026",
  image:
    "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1200&q=80",
  imageAlt: "Chamber celebration event with business leaders gathered together",
};

const newsItems = [
  {
    eyebrow: "Announcement",
    title: "2026 Scholarship Golf Classic Date Announced",
    summary:
      "Mark your calendars — the Annual Scholarship Golf Classic returns to Stonebridge Golf Course this fall. Registration is now open for individual players and corporate foursomes.",
    date: "April 22, 2026",
    image:
      "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=75",
    href: "/golf-tournament",
  },
  {
    eyebrow: "Member Milestone",
    title: "Ribbon Cutting: Three New Businesses Join Our Community",
    summary:
      "The Chamber welcomed three exciting new member businesses with official ribbon-cutting ceremonies this month — a local bakery, a financial planning firm, and a specialty fitness studio.",
    date: "April 15, 2026",
    image:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=75",
    href: "/ribbon-cuttings",
  },
  {
    eyebrow: "Community Update",
    title: "Knight of Heroes Gala Honors 12 Local First Responders",
    summary:
      "The 2026 Knight of Heroes Gala brought together over 250 community members to recognize the dedication of local firefighters, law enforcement officers, and emergency medical teams.",
    date: "April 8, 2026",
    image:
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=75",
    href: "/knight-of-heroes-event",
  },
  {
    eyebrow: "Education",
    title: "Teacher Appreciation Luncheon: 25 Educators Honored",
    summary:
      "Our community showed up in force to celebrate the teachers who shape the next generation of leaders. Business sponsors provided thoughtful gifts and the entire room gave a standing ovation.",
    date: "March 30, 2026",
    image:
      "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&q=75",
    href: "/teacher-appreciation-event",
  },
  {
    eyebrow: "Membership Growth",
    title: "Chamber Surpasses 300 Active Member Businesses",
    summary:
      "We're proud to announce that Mountain West Chamber membership has grown past 300 active businesses — a testament to the strength of our local economy and the value members find in belonging.",
    date: "March 18, 2026",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=75",
    href: "/becomeamember",
  },
  {
    eyebrow: "Legislative Update",
    title: "Chamber Attends Utah Legislative Roundup in Salt Lake City",
    summary:
      "Chamber leadership joined fellow business advocates at the annual Legislative Roundup to represent the interests of South Utah Valley businesses on key issues including infrastructure and small business tax policy.",
    date: "March 5, 2026",
    image:
      "https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=800&q=75",
    href: "/aboutus",
  },
];

/* ─── Sub-components ─────────────────────────────────────────────── */

function NewsCard({
  eyebrow,
  title,
  summary,
  date,
  image,
  href,
}: {
  eyebrow: string;
  title: string;
  summary: string;
  date: string;
  image: string;
  href: string;
}) {
  return (
    <article className="bg-white border border-light-gray rounded-2xl overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300">
      <div className="relative h-48 shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        <span className="absolute top-3 left-3 bg-primary/90 text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
          {eyebrow}
        </span>
      </div>
      <div className="p-6 flex flex-col gap-3 flex-1">
        <span className="text-xs text-ink/60">{date}</span>
        <h3 className="heading-xs text-primary leading-snug">{title}</h3>
        <p className="font-body text-sm text-ink leading-relaxed flex-1">
          {summary}
        </p>
        <Link
          href={href}
          className="text-sm font-semibold text-teal hover:text-slate-blue transition-colors self-start mt-1"
        >
          Read More →
        </Link>
      </div>
    </article>
  );
}

/* ─── Page ───────────────────────────────────────────────────────── */

export default function ChamberNewsPage() {
  return (
    <>
      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <PageHero
        imageSrc="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&q=80"
        imageAlt="Community gathering and news event for Chamber of Commerce"
        overlay="absolute inset-0 bg-linear-to-br from-primary/92 via-primary/82 to-slate-blue/70"
        eyebrow="Mountain West Chamber of Commerce"
        title={
          <>
            Chamber <span className="text-yellow">News</span>
          </>
        }
        description="The latest stories, announcements, and community updates from the Mountain West Chamber — keeping our member businesses and neighbors informed and connected."
        actions={
          <>
            <Link href="/becomeamember" className="btn btn-yellow btn-lg">
              Become a Member
            </Link>
            <Link href="/calendar" className="btn btn-outline-white">
              Upcoming Events
            </Link>
          </>
        }
      />

      {/* ═══════════════════════════════════════
          FEATURED STORY
      ═══════════════════════════════════════ */}
      <section className="py-(--section-l) bg-off-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow mb-3">Featured Story</p>
            <h2 className="heading-l text-primary mb-4">In the Spotlight</h2>
            <div className="section-divider mx-auto" />
          </div>

          <article className="grid md:grid-cols-2 gap-0 bg-white border border-light-gray rounded-2xl overflow-hidden shadow-sm">
            <div className="relative min-h-72 md:min-h-full">
              <Image
                src={featuredStory.image}
                alt={featuredStory.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/30 to-transparent md:bg-none" />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center gap-5">
              <span className="eyebrow text-teal">{featuredStory.eyebrow}</span>
              <h3 className="heading-m text-primary leading-tight">
                {featuredStory.title}
              </h3>
              <div className="section-divider" />
              <p className="font-body text-ink leading-relaxed text-base">
                {featuredStory.body}
              </p>
              <div className="flex items-center justify-between pt-2 border-t border-light-gray mt-2">
                <span className="text-xs text-ink/60">
                  {featuredStory.date}
                </span>
                <Link href="/aboutus" className="btn btn-primary btn-sm">
                  Our Story
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          LATEST NEWS GRID
      ═══════════════════════════════════════ */}
      <section className="py-(--section-l) bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow mb-3">Latest Updates</p>
            <h2 className="heading-l text-primary mb-4">Recent Chamber News</h2>
            <div className="section-divider mx-auto mb-5" />
            <p className="font-body text-ink text-base leading-relaxed">
              Event recaps, member milestones, community partnerships, and
              important Chamber announcements — all in one place.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {newsItems.map((item) => (
              <NewsCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          STAY CONNECTED CTA
      ═══════════════════════════════════════ */}
      <section className="py-(--section-xl) bg-primary relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative z-10 container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <p className="eyebrow text-teal mb-4">Stay Connected</p>
              <h2 className="heading-xl text-white mb-5">
                Never Miss a <span className="text-yellow">Chamber Update</span>
              </h2>
              <p className="font-body text-white/75 text-base leading-relaxed mb-8">
                Members receive priority news, event invitations, and exclusive
                announcements before they go public. Join over 300 local
                businesses already in the loop.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/becomeamember" className="btn btn-yellow btn-lg">
                  Become a Member
                </Link>
                <Link href="/contactus" className="btn btn-outline-white">
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right: quick links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  label: "Upcoming Events",
                  href: "/calendar",
                  icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
                },
                {
                  label: "Annual Report",
                  href: "/annual-report",
                  icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                },
                {
                  label: "Member Directory",
                  href: "/members",
                  icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
                },
                {
                  label: "Contact the Chamber",
                  href: "/contactus",
                  icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl px-5 py-4 text-white font-body font-semibold text-sm transition-colors duration-200"
                >
                  <svg
                    className="w-5 h-5 text-teal shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.75}
                      d={link.icon}
                    />
                  </svg>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
