import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

const postUrl = "/blogarticles/support-local-business";

const posts = [
  {
    title: "5 Local Marketing Ideas for Small Businesses",
    excerpt:
      "Practical ways community businesses can connect with customers without a large budget.",
    date: "April 10, 2026",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
  },
  {
    title: "How to Support Local Business This Season",
    excerpt:
      "Simple action steps for residents and business owners to keep our small business economy strong.",
    date: "April 8, 2026",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&q=80",
  },
  {
    title: "Networking Tips for New Chamber Members",
    excerpt:
      "Make the most of every event with approachable networking strategies that work.",
    date: "April 5, 2026",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
  },
  {
    title: "Make Your Small Business More Visible Online",
    excerpt:
      "Easy website and social media updates that help customers find you faster.",
    date: "April 1, 2026",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
  },
  {
    title: "Community Events That Bring Customers In",
    excerpt:
      "Learn how events and partnerships can drive traffic to stores, services, and restaurants.",
    date: "March 28, 2026",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80",
  },
  {
    title: "Why Your Business Should Join a Local Chamber",
    excerpt:
      "Discover the membership benefits that help small businesses grow with support and visibility.",
    date: "March 22, 2026",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
  },
];

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Business tips, Chamber news, and community updates from Mountain West Chamber.",
};

function FeaturedCard({
  title,
  excerpt,
  date,
  image,
}: {
  title: string;
  excerpt: string;
  date: string;
  image: string;
}) {
  return (
    <article className="grid md:grid-cols-2 gap-0 border border-slate-200 rounded-2xl overflow-hidden bg-white">
      <div className="relative h-64 md:h-auto md:min-h-60">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
      <div className="p-8 flex flex-col justify-center gap-4">
        <span className="text-xs font-semibold uppercase tracking-widest text-teal">
          Featured
        </span>
        <h2 className="heading-md text-primary">{title}</h2>
        <p className="font-body text-sm text-slate-600 leading-relaxed">
          {excerpt}
        </p>
        <div className="flex items-center justify-between pt-2 border-t border-slate-100">
          <span className="text-xs text-slate-400">{date}</span>
          <Link href={postUrl} className="btn btn-primary btn-sm">
            Read Article
          </Link>
        </div>
      </div>
    </article>
  );
}

function BlogCard({
  title,
  excerpt,
  date,
  image,
}: {
  title: string;
  excerpt: string;
  date: string;
  image: string;
}) {
  return (
    <article className="border border-slate-200 rounded-2xl overflow-hidden bg-white flex flex-col">
      <div className="relative h-44">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
      </div>
      <div className="p-6 flex flex-col gap-2 flex-1">
        <span className="text-xs text-slate-400">{date}</span>
        <h3 className="heading-sm text-primary leading-snug">{title}</h3>
        <p className="font-body text-sm text-slate-600 leading-relaxed flex-1">
          {excerpt}
        </p>
        <Link
          href={postUrl}
          className="text-sm font-semibold text-teal mt-3 hover:text-teal-dark transition-colors self-start"
        >
          Read Article →
        </Link>
      </div>
    </article>
  );
}

export default function Page() {
  const [featured, ...rest] = posts;

  return (
    <>
      {/* Page header */}
      <section className="border-b border-slate-200 py-14 bg-white">
        <div className="section-container max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal mb-3">
            Mountain West Chamber
          </p>
          <h1 className="heading-2xl text-primary mb-4">Blog</h1>
          <p className="font-body text-base text-slate-500 max-w-xl leading-relaxed">
            Business tips, local ideas, and community news for Utah small
            businesses and Chamber members.
          </p>
        </div>
      </section>

      {/* Featured post */}
      <section className="py-12 bg-off-white">
        <div className="section-container max-w-5xl">
          <FeaturedCard {...featured} />
        </div>
      </section>

      {/* Post grid */}
      <section className="py-12 bg-white">
        <div className="section-container max-w-5xl">
          <h2 className="heading-sm text-primary mb-8 border-b border-slate-200 pb-4">
            More Articles
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <BlogCard key={post.title} {...post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
