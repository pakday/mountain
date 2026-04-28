import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ribbon Cuttings | Mountain West Chamber of Commerce",
  description:
    "Celebrate new business openings and milestones with the Mountain West Chamber of Commerce ribbon cutting ceremonies.",
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
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
          </svg>
        </div>
        <p className="eyebrow mb-4">Coming Soon</p>
        <h1 className="heading-l text-primary mb-5">Ribbon Cuttings</h1>
        <div className="section-divider mx-auto mb-6" />
        <p className="text-m text-ink leading-relaxed mb-8">
          Ribbon cuttings are a great way to celebrate your grand opening or
          milestone with the community. This page will show upcoming and past
          ribbon cutting events. Check back soon.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contactus" className="btn btn-primary">
            Request a Ribbon Cutting
          </Link>
          <Link href="/" className="btn btn-outline">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
