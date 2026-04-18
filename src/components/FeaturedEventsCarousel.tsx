"use client";

import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface FeaturedEvent {
  id: string;
  title: string;
  date: string;
  month: string;
  day: string;
  description?: string;
}

const featuredEvents: FeaturedEvent[] = [
  {
    id: "1",
    title: "Connect + Learn After-Hours",
    date: "Apr 14, 2026",
    month: "Apr",
    day: "14",
    description: "Network and learn about cyber security and IT networks.",
  },
  {
    id: "2",
    title: "Riverton City Council",
    date: "Apr 21, 2026",
    month: "Apr",
    day: "21",
  },
  {
    id: "3",
    title: "Bluffdale City Council",
    date: "Apr 22, 2026",
    month: "Apr",
    day: "22",
  },
  {
    id: "4",
    title: "Herriman City Council",
    date: "Apr 22, 2026",
    month: "Apr",
    day: "22",
  },
  {
    id: "5",
    title: "Connect and Learn Luncheon",
    date: "Apr 23, 2026",
    month: "Apr",
    day: "23",
    description: "Join us for a professional luncheon and networking.",
  },
  {
    id: "6",
    title: "First Friday Tri-Chamber Speed Networking",
    date: "May 1, 2026",
    month: "May",
    day: "1",
    description: "Fast-paced networking with business professionals.",
  },
  {
    id: "7",
    title: "Riverton City Council",
    date: "May 5, 2026",
    month: "May",
    day: "5",
  },
  {
    id: "8",
    title: "Herriman City Council",
    date: "May 6, 2026",
    month: "May",
    day: "6",
  },
];

export default function FeaturedEventsCarousel() {
  return (
    <div className="featured-events-carousel-wrapper">
      <Swiper
        modules={[Autoplay, FreeMode]}
        freeMode
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 16 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
        }}
        className="w-full"
      >
        {featuredEvents.map((event) => (
          <SwiperSlide key={event.id} className="h-auto">
            <div className="bg-white rounded-lg border border-light-gray p-6 h-full flex flex-col hover:shadow-md transition-shadow">
              {/* Date Badge */}
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary rounded-lg p-3 text-white text-center">
                  <div className="font-accent text-xs font-bold tracking-widest">
                    {event.month}
                  </div>
                  <div className="font-heading text-xl font-bold">
                    {event.day}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="font-accent text-xs text-ink tracking-widest uppercase">
                    Event Date
                  </p>
                  <p className="font-body text-sm font-semibold text-ink">
                    {event.date}
                  </p>
                </div>
              </div>

              {/* Event Title */}
              <h3 className="heading-sm text-primary mb-3 grow">
                {event.title}
              </h3>

              {/* Description */}
              {event.description && (
                <p className="font-body text-sm text-ink mb-4">
                  {event.description}
                </p>
              )}

              {/* CTA Button */}
              <button className="btn btn-secondary w-full text-center justify-center mt-auto">
                View Details
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
