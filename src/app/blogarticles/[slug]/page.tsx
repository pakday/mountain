import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

const postTitle = "How to Support Local Business This Season";
const postDescription =
  "Simple ways residents and owners can keep local commerce thriving with community-first ideas.";

export function generateMetadata(): Metadata {
  return {
    title: postTitle,
    description: postDescription,
  };
}

export default function BlogPostPage() {
  return (
    <>
      {/* Article header */}
      <section className="border-b border-light-gray py-12 bg-white">
        <div className="section-container max-w-3xl">
          <Link
            href="/blogarticles"
            className="text-xs font-semibold uppercase tracking-widest text-teal hover:text-slate-blue transition-colors mb-6 inline-block"
          >
            ← Back to Blog
          </Link>
          <h1 className="heading-l text-primary mb-4">{postTitle}</h1>
          <div className="flex items-center gap-4 text-sm text-slate-blue/40">
            <span>April 10, 2026</span>
            <span>·</span>
            <span>Mountain West Chamber</span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-14 bg-white">
        <div className="section-container max-w-3xl space-y-10">
          {/* Lead paragraph */}
          <p className="font-body text-base text-slate-blue/80 leading-relaxed">
            Supporting local business is one of the most effective ways to keep
            our community strong. When customers shop nearby, small business
            owners can reinvest locally, create jobs, and build connections that
            benefit everyone.
          </p>

          {/* Inline image */}
          <div className="relative h-72 rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80"
              alt="Small business storefront"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>

          {/* Body copy */}
          <div className="space-y-5">
            <p className="font-body text-base text-slate-blue/70 leading-relaxed">
              Here are easy ways to make a local impact without creating extra
              work for your team:
            </p>
            <ul className="space-y-3 pl-5 list-disc font-body text-base text-slate-blue/70 leading-relaxed">
              <li>
                Share another local business on social media and tag them in a
                story or post.
              </li>
              <li>
                Recommend a neighborhood service to a customer who asks for
                referrals.
              </li>
              <li>
                Attend a community event and bring a new customer with you.
              </li>
              <li>
                Use local vendors for services, supplies, or event support when
                possible.
              </li>
            </ul>
            <p className="font-body text-base text-slate-blue/70 leading-relaxed">
              When we all work together, our downtowns and commercial districts
              feel more vibrant. A strong local business network benefits
              everyone — from restaurants and retail stores to service providers
              and nonprofits.
            </p>
          </div>

          {/* Pull quote */}
          <blockquote className="border-l-4 border-teal pl-6 py-1">
            <p className="font-body text-base text-slate-blue/80 leading-relaxed italic">
              "A single recommendation or shared post can bring a new customer
              to a local business. Small actions add up to a more connected
              community."
            </p>
          </blockquote>

          {/* Section: What business owners can do */}
          <div className="space-y-5">
            <h2 className="heading-sm text-primary">
              What business owners can do today
            </h2>
            <p className="font-body text-base text-slate-blue/70 leading-relaxed">
              Focus on simple, consistent habits: refresh your Google Business
              Profile, ask customers for reviews, and share weekly updates that
              highlight people rather than products. That kind of local
              authenticity is what customers remember.
            </p>
          </div>

          {/* Two tip cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Host a Customer Appreciation Moment",
                description:
                  "A small open house or giveaway keeps people coming back and builds goodwill.",
              },
              {
                title: "Partner with a Neighboring Business",
                description:
                  "Cross-promotions help both businesses reach a wider local audience.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-light-gray rounded-2xl p-5"
              >
                <h3 className="heading-2xs text-primary mb-2">{item.title}</h3>
                <p className="font-body text-sm text-slate-blue/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Back to blog */}
          <div className="pt-6 border-t border-light-gray">
            <Link href="/blogarticles" className="btn btn-outline btn-sm">
              ← All Articles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
