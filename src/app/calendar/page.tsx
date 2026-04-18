import type { Metadata } from "next";
import Image from "next/image";
import CalendarClient from "@/components/CalendarClient";
import FeaturedEventsCarousel from "@/components/FeaturedEventsCarousel";

export const metadata: Metadata = {
  title: "Calendar & Events",
  description:
    "Find upcoming Chamber events, luncheons, and community programs.",
};

export default function Page() {
  return (
    <>
      {/* Page Hero with Background Image */}
      <section className="relative bg-primary py-32 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop"
          alt="Professional networking event"
          fill
          className="object-cover -z-10 opacity-20"
          priority
        />
        <div className="section-container relative z-10">
          <p className="eyebrow text-teal mb-4">
            Mountain West Chamber of Commerce
          </p>
          <h1 className="heading-xl text-white">Calendar &amp; Events</h1>
          <p className="font-body text-white/80 mt-3 max-w-xl">
            Stay connected with Chamber events, city council meetings,
            luncheons, and community programs.
          </p>
        </div>
      </section>

      {/* Event & Sponsorship + Featured Events Section */}
      <section className="py-16 bg-off-white">
        <div className="section-container">
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <h2 className="heading-m text-primary mb-2">
              Event &amp; Sponsorship Opportunities
            </h2>
            <p className="font-body text-ink">
              Review our calendared events and let us know if you'd like to be a
              sponsor. We'll take it from there!
            </p>
          </div>

          {/* Featured Events Carousel */}
          <FeaturedEventsCarousel />
        </div>
      </section>

      {/* Legend */}
      <section className="bg-light-gray border-b border-light-gray">
        <div className="section-container py-4 flex flex-wrap gap-4 items-center">
          <span className="font-accent text-xs font-bold tracking-widest uppercase text-slate-blue">
            Event Types:
          </span>
          <span className="flex items-center gap-1.5 font-body text-xs">
            <span
              className="inline-block w-3 h-3 rounded-sm"
              style={{ backgroundColor: "#0D3B66" }}
            ></span>
            Chamber Events
          </span>
          <span className="flex items-center gap-1.5 font-body text-xs">
            <span
              className="inline-block w-3 h-3 rounded-sm"
              style={{ backgroundColor: "#5DCAD1" }}
            ></span>
            Workshops &amp; Networking
          </span>
          <span className="flex items-center gap-1.5 font-body text-xs">
            <span
              className="inline-block w-3 h-3 rounded-sm"
              style={{ backgroundColor: "#3F6183" }}
            ></span>
            City Council
          </span>
          <span className="flex items-center gap-1.5 font-body text-xs">
            <span
              className="inline-block w-3 h-3 rounded-sm"
              style={{ backgroundColor: "#F7DE32" }}
            ></span>
            Special Events
          </span>
          <span className="flex items-center gap-1.5 font-body text-xs">
            <span
              className="inline-block w-3 h-3 rounded-sm"
              style={{ backgroundColor: "#F7DE32" }}
            ></span>
            Board Meetings
          </span>
        </div>
      </section>

      {/* Calendar */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <CalendarClient />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-off-white">
        <div className="section-container text-center max-w-2xl">
          <h2 className="heading-m text-primary mb-3">Attend an Event</h2>
          <p className="font-body text-ink mb-6">
            Come experience the Chamber — build relationships, grow your
            business, and strengthen our community.
          </p>
          <a href="/contactus" className="btn btn-primary">
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
