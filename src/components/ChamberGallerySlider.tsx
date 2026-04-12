"use client";

import Image from "next/image";
import { useRef } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

const BASE = "/Structure/Member%20Resources/join-us";

const slides = [
  {
    src: `${BASE}/WSS+ribbon.jpg`,
    alt: "Ribbon cutting with Chamber members outdoors",
  },
  {
    src: `${BASE}/DSC_0491.jpeg`,
    alt: "Ribbon cutting inside a flooring showroom",
  },
  {
    src: `${BASE}/AFS+Flooring.jpg`,
    alt: "Ribbon cutting inside AFS Flooring",
  },
  {
    src: `${BASE}/20180917_095023.jpg`,
    alt: "Business event audience listening to a speaker",
  },
  {
    src: `${BASE}/20181019_161628.jpg`,
    alt: "Chamber members at a community gathering",
  },
  {
    src: `${BASE}/Black+Bear+Diner.png`,
    alt: "Chamber ribbon cutting at Black Bear Diner",
  },
  {
    src: `${BASE}/ChikFiletAdjusted.jpg`,
    alt: "Groundbreaking ceremony with Chamber representatives",
  },
  { src: `${BASE}/DSC01309.jpeg`, alt: "Chamber networking event" },
  {
    src: `${BASE}/20180718_173355.jpg`,
    alt: "Chamber members at a summer event",
  },
  { src: `${BASE}/20180824_142500.jpg`, alt: "Chamber business celebration" },
];

export default function ChamberGallerySlider() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    /* Outer wrapper clips overflow so multi-slide Swiper never causes page-level horizontal scroll */
    <div className="relative overflow-hidden rounded-2xl">
      {/* Left nav button — sits inside the overflow-hidden boundary */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-primary/80 text-white shadow-lg backdrop-blur-sm transition-colors hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Right nav button */}
      <button
        onClick={() => swiperRef.current?.slideNext()}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-primary/80 text-white shadow-lg backdrop-blur-sm transition-colors hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      <Swiper
        modules={[Autoplay]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={1}
        spaceBetween={12}
        loop
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 12 },
          1024: { slidesPerView: 3, spaceBetween: 16 },
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.src}>
            <div className="group relative h-64 overflow-hidden sm:h-72">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/70 via-primary/10 to-transparent" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
