import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Committees | Mountain West Chamber of Commerce",
  description:
    "Join a committee and shape the future of business in our community. Mountain West Chamber of Commerce committees welcome your expertise.",
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
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
        <p className="eyebrow mb-4">Coming Soon</p>
        <h1 className="heading-l text-primary mb-5">Committees</h1>
        <div className="section-divider mx-auto mb-6" />
        <p className="text-m text-ink leading-relaxed mb-8">
          Committees are the engine behind the Chamber. This page will list all
          active committees and how you can join to make a meaningful impact.
          Check back soon.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contactus" className="btn btn-primary">
            Express Interest
          </Link>
          <Link href="/boardofdirectors" className="btn btn-outline">
            Board of Directors
          </Link>
        </div>
      </div>
    </section>
  );
}
