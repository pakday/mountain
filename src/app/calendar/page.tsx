import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calendar & Events",
  description: "Find upcoming Chamber events, luncheons, and community programs.",
};

export default function Page() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-primary py-20">
        <div className="section-container">
          <p className="eyebrow text-bright-teal mb-4">Mountain West Chamber of Commerce</p>
          <h1 className="heading-2xl text-white">Calendar & Events</h1>
        </div>
      </section>

      {/* Placeholder content */}
      <section className="py-20 bg-white">
        <div className="section-container max-w-3xl">
          <div className="text-center py-20 text-slate-400">
            <svg className="w-16 h-16 mx-auto mb-6 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            <p className="font-accent text-lg font-semibold mb-2">Content Coming Soon</p>
            <p className="font-body text-sm mb-8">This page is being built. Check back soon!</p>
            <Link href="/" className="btn btn-primary">Back to Home</Link>
          </div>
        </div>
      </section>
    </>
  );
}
