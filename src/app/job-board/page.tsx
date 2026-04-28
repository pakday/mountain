import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Job Board | Mountain West Chamber of Commerce",
  description:
    "Browse local job openings and post opportunities with the Mountain West Chamber of Commerce job board.",
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
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        <p className="eyebrow mb-4">Coming Soon</p>
        <h1 className="heading-l text-primary mb-5">Job Board</h1>
        <div className="section-divider mx-auto mb-6" />
        <p className="text-m text-ink leading-relaxed mb-8">
          The MWCC Job Board will connect local employers with qualified
          candidates across Riverton, Herriman, and Bluffdale. Whether
          you&rsquo;re hiring or job hunting, check back soon.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contactus" className="btn btn-primary">
            Contact Us
          </Link>
          <Link href="/becomeamember" className="btn btn-outline">
            Become a Member
          </Link>
        </div>
      </div>
    </section>
  );
}
