"use client";

import Image from "next/image";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const sponsorSlides = [
  {
    src: "/Structure/Sustaining%20Partner%20Sponsors/BluffdaleLogo.jpg",
    alt: "City of Bluffdale",
    href: "http://www.bluffdale.com",
  },
  {
    src: "/Structure/Sustaining%20Partner%20Sponsors/EXPAND-Logo.jpg",
    alt: "Expand",
    href: "http://www.expandbusinesssolutions.com",
  },
  {
    src: "/Structure/Sustaining%20Partner%20Sponsors/Herriman-Logo.jpg",
    alt: "City of Herriman",
    href: "http://www.herriman.org",
  },
  {
    src: "/Structure/Sustaining%20Partner%20Sponsors/FatCatsSqLogoSized.jpg",
    alt: "Fat Cats",
    href: "https://www.fatcatsfun.com/",
  },
  {
    src: "/Structure/Sustaining%20Partner%20Sponsors/City+Journals.jpg",
    alt: "City Journals",
    href: "http://www.mycityjournals.com",
  },
  {
    src: "/Structure/Sustaining%20Partner%20Sponsors/Intermountain_Healthcare_Riverton_Logo.jpg",
    alt: "Intermountain Healthcare",
    href: "https://intermountainhealthcare.org",
  },
  {
    src: "/Structure/Sustaining%20Partner%20Sponsors/MACU+SQ+Logo+2024.jpg",
    alt: "Mountain America Credit Union",
    href: "https://www.macu.com/",
  },
  {
    src: "/Structure/Sustaining%20Partner%20Sponsors/HCJ_Square_Logo_Black.jpg",
    alt: "HCJ",
    href: "https://www.mountain.commonspirit.org/location/holy-cross-hospital-jordan-valley",
  },
];

export default function SponsorCarousel() {
  return (
    <div className="relative overflow-visible">
      <Swiper
        modules={[Autoplay, FreeMode]}
        loop
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          waitForTransition: false,
        }}
        freeMode={{
          enabled: true,
          momentum: false,
        }}
        speed={3000}
        grabCursor
        slideToClickedSlide
        slidesPerView={2}
        spaceBetween={24}
        wrapperClass="overflow-visible"
        className="overflow-visible"
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 28,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 32,
          },
        }}
        aria-live="polite"
      >
        {sponsorSlides.concat(sponsorSlides).map((logo, index) => (
          <SwiperSlide
            key={`${logo.alt}-${index}`}
            className="overflow-visible"
          >
            <a
              href={logo.href}
              target="_blank"
              rel="noreferrer noopener"
              className="block rounded-3xl bg-white/90 p-4 shadow-sm transition-shadow duration-300 hover:shadow-lg h-full overflow-visible"
            >
              <div className="relative h-28 sm:h-32 md:h-36 flex items-center justify-center overflow-visible">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 18vw"
                />
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
