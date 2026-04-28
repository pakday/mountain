import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Membership Training | Mountain West Chamber of Commerce",
  description:
    "Access training, onboarding, and resources to make the most of your Mountain West Chamber of Commerce membership.",
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
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </div>
        <p className="eyebrow mb-4">Coming Soon</p>
        <h1 className="heading-l text-primary mb-5">Membership Training</h1>
        <div className="section-divider mx-auto mb-6" />
        <p className="text-m text-ink leading-relaxed mb-8">
          We&rsquo;re building a training hub to help you get the most from your
          Chamber membership — from onboarding guides to workshops and
          resources. Check back soon.
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
