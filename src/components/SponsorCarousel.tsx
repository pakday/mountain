"use client";

import Image from "next/image";

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

/* Duplicate the list so the CSS animation loops seamlessly:
   animate translateX(0 → -50%) scrolls exactly one full copy,
   at which point the track resets invisibly to position 0. */
const track = [...sponsorSlides, ...sponsorSlides];

export default function SponsorCarousel() {
  return (
    <div
      className="overflow-hidden"
      aria-label="Sustaining partner sponsor logos"
    >
      <div className="marquee-track">
        {track.map((logo, index) => (
          <a
            key={`${logo.alt}-${index}`}
            href={logo.href}
            target="_blank"
            rel="noreferrer noopener"
            className="shrink-0 block w-40 rounded-2xl bg-white p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="relative h-28 flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
                sizes="160px"
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
