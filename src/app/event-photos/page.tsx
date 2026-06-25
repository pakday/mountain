import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Event Photos | Mountain West Chamber of Commerce",
  description:
    "Browse photo albums from Mountain West Chamber events — Golf Classic, Knight of Heroes Gala, Teacher Appreciation Luncheon, ribbon cuttings, and more.",
};

/* ─── Data ──────────────────────────────────────────────────────── */

const albums = [
  {
    title: "Scholarship Golf Classic 2025",
    description:
      "A beautiful day on the green at Stonebridge Golf Course. Sponsors, players, and community members came together to raise funds for local student scholarships.",
    date: "Fall 2025",
    category: "Golf Classic",
    photoCount: 48,
    coverImage:
      "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=75",
    href: "/golf-tournament",
  },
  {
    title: "Knight of Heroes Gala 2025",
    description:
      "An evening of community, gratitude, and recognition. Local first responders, educators, and community leaders were honored for their extraordinary service.",
    date: "Spring 2025",
    category: "Knight of Heroes",
    photoCount: 62,
    coverImage:
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=75",
    href: "/knight-of-heroes-event",
  },
  {
    title: "Teacher Appreciation Luncheon 2025",
    description:
      "Twenty-five outstanding educators were celebrated by the business community at our annual Teacher Appreciation Luncheon. A room full of applause and gratitude.",
    date: "Spring 2025",
    category: "Teacher Appreciation",
    photoCount: 34,
    coverImage:
      "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&q=75",
    href: "/teacher-appreciation-event",
  },
  {
    title: "Ribbon Cuttings — 2025",
    description:
      "Celebrating new beginnings! A collection of ribbon cutting ceremonies from across Riverton, Herriman, and Bluffdale throughout the year.",
    date: "Throughout 2025",
    category: "Ribbon Cuttings",
    photoCount: 27,
    coverImage:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=75",
    href: "/ribbon-cuttings",
  },
  {
    title: "Monthly Networking Luncheons 2025",
    description:
      "Snapshots from our monthly networking luncheons — conversations, connections, and community happening every month.",
    date: "Monthly 2025",
    category: "Networking",
    photoCount: 41,
    coverImage:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&q=75",
    href: "/calendar",
  },
  {
    title: "Scholarship Golf Classic 2024",
    description:
      "Highlights from the 2024 Annual Scholarship Golf Classic — another record year for fundraising and community participation.",
    date: "Fall 2024",
    category: "Golf Classic",
    photoCount: 53,
    coverImage:
      "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?w=800&q=75",
    href: "/golf-tournament",
  },
  {
    title: "Knight of Heroes Gala 2024",
    description:
      "Memories from the 2024 Knight of Heroes Gala, where the community came out in force to honor our local heroes.",
    date: "Spring 2024",
    category: "Knight of Heroes",
    photoCount: 58,
    coverImage:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=75",
    href: "/knight-of-heroes-event",
  },
  {
    title: "Teacher Appreciation Luncheon 2024",
    description:
      "A heartfelt tribute to the educators shaping the next generation of South Utah Valley leaders.",
    date: "Spring 2024",
    category: "Teacher Appreciation",
    photoCount: 29,
    coverImage:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=75",
    href: "/teacher-appreciation-event",
  },
];

const categories = [
  "All Events",
  "Golf Classic",
  "Knight of Heroes",
  "Teacher Appreciation",
  "Ribbon Cuttings",
  "Networking",
];

/* ─── Sub-components ─────────────────────────────────────────────── */

function AlbumCard({
  title,
  description,
  date,
  category,
  photoCount,
  coverImage,
  href,
}: (typeof albums)[0]) {
  return (
    <article className="bg-white border border-light-gray rounded-2xl overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300 group">
      {/* Cover image */}
      <div className="relative h-52 overflow-hidden shrink-0">
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-linear-to-t from-primary/70 via-transparent to-transparent" />
        <span className="absolute top-3 left-3 bg-primary/90 text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
          {category}
        </span>
        <span className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-black/50 text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm">
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {photoCount} photos
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-3 flex-1">
        <span className="font-body text-xs text-ink/50">{date}</span>
        <h3 className="heading-xs text-primary leading-snug">{title}</h3>
        <p className="font-body text-sm text-ink leading-relaxed flex-1">
          {description}
        </p>
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-teal hover:text-primary transition-colors mt-1"
        >
          View Event Details
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
}

/* ─── Page ───────────────────────────────────────────────────────── */

export default function Page() {
  return (
    <>
      {/* ── Hero ── */}
      <PageHero
        imageSrc="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=75"
        imageAlt="Mountain West Chamber event celebration"
        overlay="absolute inset-0 bg-linear-to-br from-primary/92 via-primary/80 to-slate-blue/75"
        eyebrow="Calendar & Events"
        title={
          <>
            Event <span className="text-yellow">Photos</span>
          </>
        }
        description="Relive the moments that make our community stronger. Browse photo albums from Chamber events, galas, ribbon cuttings, and everything in between."
        actions={
          <>
            <Link href="/calendar" className="btn btn-yellow btn-lg">
              Upcoming Events
            </Link>
            <Link href="/get-involved" className="btn btn-outline-white">
              Get Involved
            </Link>
          </>
        }
      />

      {/* ── Category Filter (static display) ── */}
      <section className="bg-white border-b border-light-gray py-5 sticky top-(--header-height,72px) z-30">
        <div className="container">
          <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-hide">
            <span className="font-body text-sm text-ink/50 shrink-0 pr-2">
              Filter:
            </span>
            {categories.map((cat, i) => (
              <span
                key={cat}
                className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium font-body cursor-default border transition-colors ${
                  i === 0
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-ink border-light-gray hover:border-primary/40"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Album Grid ── */}
      <section className="py-(--section-l) bg-off-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow mb-3">Photo Albums</p>
            <h2 className="heading-l text-primary mb-4">
              Memories from Our Events
            </h2>
            <div className="section-divider mx-auto mb-5" />
            <p className="font-body text-ink text-base leading-relaxed">
              Every event is a story. Browse our growing collection of albums
              from signature Chamber programs and community gatherings.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {albums.map((album) => (
              <AlbumCard key={album.title} {...album} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Submit Your Photos ── */}
      <section className="py-(--section-l) bg-white">
        <div className="container">
          <div className="bg-primary rounded-3xl p-10 lg:p-14 max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="eyebrow text-teal mb-4">Share Your Photos</p>
                <h2 className="heading-m text-white mb-4">
                  Were You There? Share the Moment.
                </h2>
                <div className="section-divider bg-yellow/40 mb-6" />
                <p className="font-body text-white/80 text-base leading-relaxed mb-8">
                  If you attended a Chamber event and captured great photos, we
                  want to see them. Submit your images to be featured in our
                  gallery and share the experience with the rest of our
                  community.
                </p>
                <Link href="/contactus" className="btn btn-yellow">
                  Submit Your Photos
                </Link>
              </div>

              {/* Quick info */}
              <div className="flex flex-col gap-4">
                {[
                  {
                    title: "Any Camera Welcome",
                    body: "Phone photos, DSLRs, professional rigs — if the moment is good, we want to share it.",
                  },
                  {
                    title: "Credit Given",
                    body: "Your name will be credited alongside any photos we feature in our gallery.",
                  },
                  {
                    title: "Events Added Regularly",
                    body: "New albums are added after every Chamber event. Check back often for the latest photos.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 bg-white/8 rounded-xl p-5 border border-white/15"
                  >
                    <div className="w-2 h-2 rounded-full bg-teal mt-2 shrink-0" />
                    <div>
                      <p className="heading-2xs text-white mb-1">
                        {item.title}
                      </p>
                      <p className="font-body text-sm text-white/70 leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-(--section-m) bg-off-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow mb-4">Don&rsquo;t Miss the Next One</p>
            <h2 className="heading-m text-primary mb-4">
              Every Event Is a Memory in the Making
            </h2>
            <p className="font-body text-ink text-base leading-relaxed mb-8">
              Check the events calendar to see what&rsquo;s coming up and
              register today. Show up, connect, and be part of the story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calendar" className="btn btn-primary btn-lg">
                View Upcoming Events
              </Link>
              <Link href="/becomeamember" className="btn btn-outline">
                Become a Member
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
