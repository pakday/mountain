"use client";

import { DesignNav } from "../DesignNav";
import { ButtonsAndBadges } from "../components/ButtonsAndBadges";

export default function ButtonsPage() {
  return (
    <div className="bg-white min-h-screen">
      <DesignNav currentPage="buttons" />

      <div className="max-w-6xl mx-auto p-8 flex flex-col gap-8">
        {/* Quick Info */}
        <section className="flex flex-col gap-4">
          <div className="bg-[#EDEDED] rounded-lg p-6 border-l-4 border-[#0D3B66]">
            <div className="text-sm font-bold tracking-widest uppercase text-[#0D3B66] mb-3">
              Button and Badge Styles
            </div>
            <p className="text-sm text-[#0D3B66] leading-relaxed">
              All button variants and badge styles used across the site.
            </p>
          </div>
        </section>

        {/* Display all buttons and badges */}
        <ButtonsAndBadges />
      </div>
    </div>
  );
}
