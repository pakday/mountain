import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs | Mountain West Chamber of Commerce",
  description:
    "Explore all programs offered by the Mountain West Chamber of Commerce — from golf tournaments to scholarship opportunities and more.",
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
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            />
          </svg>
        </div>
        <p className="eyebrow mb-4">Coming Soon</p>
        <h1 className="heading-l text-primary mb-5">Programs</h1>
        <div className="section-divider mx-auto mb-6" />
        <p className="text-m text-ink leading-relaxed mb-8">
          This hub page will showcase all Mountain West Chamber programs. In the
          meantime, explore individual programs using the navigation above.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/golf-tournament" className="btn btn-primary">
            Golf Tournament
          </Link>
          <Link href="/scholarship-recipients" className="btn btn-outline">
            Scholarships
          </Link>
        </div>
      </div>
    </section>
  );
}
