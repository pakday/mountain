"use client";

import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BASE = "/Structure/Programs/teacher-appreciation-event";

const photos = [
  {
    src: `${BASE}/PXL_20230426_160012907.jpg`,
    alt: "Teacher appreciation luncheon setup",
  },
  {
    src: `${BASE}/PXL_20230426_160026590.jpg`,
    alt: "Event table settings and decorations",
  },
  {
    src: `${BASE}/PXL_20230426_175545858.jpg`,
    alt: "Teachers and guests arriving",
  },
  {
    src: `${BASE}/PXL_20230426_181550350.jpg`,
    alt: "Teacher gift bags on display",
  },
  {
    src: `${BASE}/PXL_20230426_181621117.jpg`,
    alt: "Award and recognition items",
  },
  {
    src: `${BASE}/PXL_20230426_181654599.jpg`,
    alt: "Award presentation at event",
  },
  {
    src: `${BASE}/PXL_20230426_181752268.jpg`,
    alt: "Teachers receiving recognition",
  },
  {
    src: `${BASE}/PXL_20230426_181924188.jpg`,
    alt: "Event guests and presenters",
  },
  {
    src: `${BASE}/PXL_20230426_182022811.jpg`,
    alt: "Celebration moments at luncheon",
  },
  {
    src: `${BASE}/PXL_20230426_182120742.jpg`,
    alt: "Community members at the event",
  },
  {
    src: `${BASE}/PXL_20230426_182231183.jpg`,
    alt: "Teacher appreciation program",
  },
  {
    src: `${BASE}/PXL_20230426_182413466.jpg`,
    alt: "Teachers and community members",
  },
  {
    src: `${BASE}/PXL_20230426_182459090.jpg`,
    alt: "Gift bags and event displays",
  },
  {
    src: `${BASE}/PXL_20230426_182608051.jpg`,
    alt: "Teacher recognition ceremony",
  },
  {
    src: `${BASE}/PXL_20230426_182818349.jpg`,
    alt: "Appreciation celebration",
  },
  {
    src: `${BASE}/PXL_20230426_182912864.jpg`,
    alt: "Event decorations and awards",
  },
  {
    src: `${BASE}/PXL_20230426_183049040.jpg`,
    alt: "Guests listening at presentation",
  },
  {
    src: `${BASE}/PXL_20230426_183135585.jpg`,
    alt: "Teacher award presentation",
  },
  {
    src: `${BASE}/PXL_20230426_183239884.jpg`,
    alt: "Group celebration moment",
  },
  { src: `${BASE}/PXL_20230426_183325531.jpg`, alt: "Guests seated at tables" },
  {
    src: `${BASE}/PXL_20230426_183631967.jpg`,
    alt: "Special photo moment at event",
  },
  {
    src: `${BASE}/PXL_20230426_183719441.jpg`,
    alt: "Teachers receiving recognition",
  },
  {
    src: `${BASE}/PXL_20230426_183827582.jpg`,
    alt: "Community members at luncheon",
  },
  {
    src: `${BASE}/PXL_20230426_183939985.jpg`,
    alt: "Teacher appreciation ceremony",
  },
  { src: `${BASE}/PXL_20230426_184058286.jpg`, alt: "Speakers at the event" },
  {
    src: `${BASE}/PXL_20230426_184147645.jpg`,
    alt: "Attendees enjoying the luncheon",
  },
  {
    src: `${BASE}/PXL_20230426_184243312.jpg`,
    alt: "Presentation and audience",
  },
  {
    src: `${BASE}/PXL_20230426_184348298.jpg`,
    alt: "Teacher appreciation moment",
  },
  { src: `${BASE}/PXL_20230426_184458092.jpg`, alt: "Luncheon attendees" },
  {
    src: `${BASE}/PXL_20230426_184530945.jpg`,
    alt: "Final celebration moments",
  },
];

export default function PhotoGallerySlider() {
  return (
    <div
      className="relative"
      style={
        {
          "--swiper-navigation-color": "#5DCAD1",
          "--swiper-pagination-color": "#5DCAD1",
          "--swiper-navigation-size": "24px",
        } as React.CSSProperties
      }
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop
        centeredSlides
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1.4, spaceBetween: 16 },
          768: { slidesPerView: 2, spaceBetween: 16 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
        }}
        className="pb-14!"
      >
        {photos.map((photo, i) => (
          <SwiperSlide key={i}>
            <div className="relative aspect-4/3 overflow-hidden rounded-xl shadow-md">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover object-top transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
