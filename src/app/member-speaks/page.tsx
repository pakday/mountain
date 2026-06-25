import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Member Speaks | Mountain West Chamber of Commerce",
  description:
    "Hear directly from our members. Real stories from local business owners who have grown through the Mountain West Chamber of Commerce.",
};

/* ─── Data ──────────────────────────────────────────────────────── */

const featuredTestimonial = {
  quote:
    "Joining the Mountain West Chamber was one of the best decisions I've made for my business. The connections I've built here have led to real referrals, real partnerships, and real growth — not just handshakes.",
  name: "Sarah Mitchell",
  title: "Owner",
  company: "Mitchell Financial Solutions",
  image:
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  yearsAsMember: "6 Years a Member",
};

const testimonials = [
  {
    quote:
      "The Chamber introduced me to mentors and peers I never would have found on my own. Within six months of joining, I had doubled my referral network.",
    name: "David Torres",
    title: "Founder & CEO",
    company: "Apex Marketing Group",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=75",
    tag: "Growth",
  },
  {
    quote:
      "Attending the monthly luncheons gave my brand visibility I couldn't buy with advertising alone. People know my face and trust my business.",
    name: "Jennifer Park",
    title: "Principal",
    company: "Park Design Studio",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=75",
    tag: "Visibility",
  },
  {
    quote:
      "The Women in Business committee gave me a community of women entrepreneurs who genuinely lift each other up. It changed how I think about business.",
    name: "Amanda Nguyen",
    title: "Owner",
    company: "Bloom Wellness Spa",
    image:
      "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=300&q=75",
    tag: "Community",
  },
  {
    quote:
      "We've sponsored multiple events and the return on investment is undeniable. Our logo in front of 300+ local business owners at every event — that's brand power.",
    name: "Kevin Larsen",
    title: "Marketing Director",
    company: "Larsen & Bright Media",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=75",
    tag: "Sponsorship",
  },
  {
    quote:
      "The Chamber fought for small businesses at the legislative level. I felt like someone in Salt Lake actually understood what we face every day.",
    name: "Maria Sandoval",
    title: "Owner",
    company: "Sandoval Tax & Bookkeeping",
    image:
      "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=300&q=75",
    tag: "Advocacy",
  },
  {
    quote:
      "My ribbon cutting ceremony brought more foot traffic and new customers than any social media post I've ever made. The Chamber knows how to make noise.",
    name: "Ryan Callahan",
    title: "Owner",
    company: "Callahan's Craft Kitchen",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=75",
    tag: "Ribbon Cutting",
  },
];

const stats = [
  { value: "300+", label: "Active Member Businesses" },
  { value: "27+", label: "Years Strengthening Community" },
  { value: "3", label: "Cities We Represent" },
  { value: "100%", label: "Member-Driven Organization" },
];

/* ─── Sub-components ─────────────────────────────────────────────── */

function TestimonialCard({
  quote,
  name,
  title,
  company,
  image,
  tag,
}: {
  quote: string;
  name: string;
  title: string;
  company: string;
  image: string;
  tag: string;
}) {
  return (
    <article className="bg-white border border-light-gray rounded-2xl p-7 flex flex-col gap-5 hover:shadow-md transition-shadow duration-300">
      {/* Tag */}
      <span className="inline-flex items-center self-start gap-1.5 bg-primary/8 text-primary text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
        {tag}
      </span>

      {/* Quote mark */}
      <svg
        className="w-8 h-8 text-teal/40 shrink-0 -mb-2"
        fill="currentColor"
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <path d="M10 8C5.6 8 2 11.6 2 16s3.6 8 8 8c.5 0 1-.05 1.5-.13C10.9 25.1 9.8 26.9 8 28h4c3.3-2.2 6-6.4 6-12 0-4.4-3.6-8-8-8zm14 0c-4.4 0-8 3.6-8 8s3.6 8 8 8c.5 0 1-.05 1.5-.13C24.9 25.1 23.8 26.9 22 28h4c3.3-2.2 6-6.4 6-12 0-4.4-3.6-8-8-8z" />
      </svg>

      {/* Quote */}
      <p className="font-body text-ink leading-relaxed flex-1 italic">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Person */}
      <div className="flex items-center gap-3 pt-4 border-t border-light-gray">
        <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 ring-2 ring-primary/10">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="40px"
          />
        </div>
        <div>
          <p className="heading-2xs text-primary">{name}</p>
          <p className="font-body text-xs text-ink/60">
            {title} &mdash; {company}
          </p>
        </div>
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
        imageSrc="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=75"
        imageAlt="Business professionals sharing experiences at a chamber event"
        overlay="absolute inset-0 bg-linear-to-br from-primary/92 via-primary/82 to-slate-blue/75"
        eyebrow="Member Resources"
        title={
          <>
            Member <span className="text-yellow">Speaks</span>
          </>
        }
        description="Don't take our word for it — hear from the business owners, professionals, and community leaders who make up the Mountain West Chamber. Their stories are our story."
        actions={
          <>
            <Link href="/becomeamember" className="btn btn-yellow btn-lg">
              Become a Member
            </Link>
            <Link href="/contactus" className="btn btn-outline-white">
              Get in Touch
            </Link>
          </>
        }
      />

      {/* ── Stats Strip ── */}
      <section className="bg-primary py-10">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="heading-l text-yellow font-bold">{s.value}</p>
                <p className="font-body text-sm text-white/80 mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Testimonial ── */}
      <section className="py-(--section-l) bg-off-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow mb-3">Featured Story</p>
            <h2 className="heading-l text-primary mb-4">
              Voices from Our Community
            </h2>
            <div className="section-divider mx-auto mb-5" />
            <p className="font-body text-ink text-base leading-relaxed">
              Every member has a story. Here&rsquo;s one that captures what the
              Chamber means to the people who belong to it.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-light-gray shadow-sm overflow-hidden max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2">
              {/* Image side */}
              <div className="relative h-72 lg:h-auto">
                <Image
                  src={featuredTestimonial.image}
                  alt={featuredTestimonial.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary/60 to-transparent lg:hidden" />
                <span className="absolute bottom-4 left-5 lg:hidden text-white text-sm font-semibold">
                  {featuredTestimonial.yearsAsMember}
                </span>
              </div>

              {/* Content side */}
              <div className="p-8 lg:p-10 flex flex-col justify-center gap-6">
                <span className="inline-flex self-start items-center gap-1.5 bg-teal/10 text-teal text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                  {featuredTestimonial.yearsAsMember}
                </span>

                <svg
                  className="w-10 h-10 text-yellow/60"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M10 8C5.6 8 2 11.6 2 16s3.6 8 8 8c.5 0 1-.05 1.5-.13C10.9 25.1 9.8 26.9 8 28h4c3.3-2.2 6-6.4 6-12 0-4.4-3.6-8-8-8zm14 0c-4.4 0-8 3.6-8 8s3.6 8 8 8c.5 0 1-.05 1.5-.13C24.9 25.1 23.8 26.9 22 28h4c3.3-2.2 6-6.4 6-12 0-4.4-3.6-8-8-8z" />
                </svg>

                <p className="font-body text-ink text-lg leading-relaxed italic">
                  &ldquo;{featuredTestimonial.quote}&rdquo;
                </p>

                <div className="pt-4 border-t border-light-gray">
                  <p className="heading-xs text-primary">
                    {featuredTestimonial.name}
                  </p>
                  <p className="font-body text-sm text-ink/60">
                    {featuredTestimonial.title} &mdash;{" "}
                    {featuredTestimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials Grid ── */}
      <section className="py-(--section-l) bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow mb-3">From Our Members</p>
            <h2 className="heading-l text-primary mb-4">
              What Members Are Saying
            </h2>
            <div className="section-divider mx-auto mb-5" />
            <p className="font-body text-ink text-base leading-relaxed">
              Business owners across Riverton, Herriman, and Bluffdale share
              their Chamber experience.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Share Your Story ── */}
      <section className="py-(--section-l) bg-primary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="eyebrow text-teal mb-4">Share Your Story</p>
            <h2 className="heading-l text-white mb-5">
              Your Voice Matters to Us
            </h2>
            <div className="section-divider bg-yellow/40 mx-auto mb-7" />
            <p className="font-body text-white/80 text-base leading-relaxed mb-8">
              Are you a Chamber member with a story to tell? We&rsquo;d love to
              feature your experience on this page and share it with our
              community. Reach out and let us know how the Chamber has made a
              difference for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contactus" className="btn btn-yellow btn-lg">
                Share Your Story
              </Link>
              <Link href="/becomeamember" className="btn btn-outline-white">
                Join the Chamber
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-(--section-m) bg-off-white">
        <div className="container">
          <div className="bg-white rounded-3xl border border-light-gray p-10 lg:p-14 text-center max-w-3xl mx-auto">
            <p className="eyebrow mb-4">Ready to Write Your Story?</p>
            <h2 className="heading-m text-primary mb-4">
              Join the Businesses Who Are Growing Together
            </h2>
            <p className="font-body text-ink text-base leading-relaxed mb-8">
              Membership in the Mountain West Chamber opens doors to
              connections, visibility, and community impact. The next success
              story could be yours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/becomeamember" className="btn btn-primary btn-lg">
                Become a Member
              </Link>
              <Link href="/why-become-a-member" className="btn btn-outline">
                Why Join?
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
