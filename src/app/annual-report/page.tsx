import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Annual Report | Mountain West Chamber of Commerce",
  description:
    "Review the Mountain West Chamber of Commerce annual report — a year-in-review of our impact, programs, and financials.",
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
              d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        <p className="eyebrow mb-4">Coming Soon</p>
        <h1 className="heading-l text-primary mb-5">Annual Report</h1>
        <div className="section-divider mx-auto mb-6" />
        <p className="text-m text-ink leading-relaxed mb-8">
          Our annual report showcases the Chamber&rsquo;s impact, financials,
          and key milestones. This page is being prepared and will be available
          soon.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contactus" className="btn btn-primary">
            Contact Us
          </Link>
          <Link href="/for-members" className="btn btn-outline">
            Member Resources
          </Link>
        </div>
      </div>
    </section>
  );
}
