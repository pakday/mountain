import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supporting Chambers | Mountain West Chamber of Commerce",
  description:
    "Learn about the chambers and organizations that partner with and support the Mountain West Chamber of Commerce.",
};

export default function Page() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-off-white py-24">
      <div className="container text-center max-w-2xl">
        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
        </div>
        <p className="eyebrow mb-4">Coming Soon</p>
        <h1 className="heading-l text-primary mb-5">Supporting Chambers</h1>
        <div className="section-divider mx-auto mb-6" />
        <p className="text-m text-ink leading-relaxed mb-8">
          We&rsquo;re proud to partner with other chambers and organizations
          across Utah. This page will highlight our valued supporting partners.
          Check back soon.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contactus" className="btn btn-primary">
            Contact Us
          </Link>
          <Link href="/" className="btn btn-outline">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
