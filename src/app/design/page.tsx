"use client";

import { ColorPalette } from "./components/ColorPalette";
import { TypographySystem } from "./components/TypographySystem";
import { ButtonsAndBadges } from "./components/ButtonsAndBadges";
import { SpacingSystem } from "./components/SpacingSystem";

export default function DesignSystemPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-[#0D3B66] px-8 py-8 flex items-center justify-between sticky top-0 z-10 shadow-md">
        <div>
          <div className="text-xs tracking-widest uppercase text-[#5DCAD1] mb-1">
            Design System
          </div>
          <div className="font-serif text-2xl text-[#FFFAF9]">
            Mountain West Chamber — Global Design Tokens
          </div>
        </div>
        <div className="text-xs text-[rgba(255,250,249,0.4)]">
          All tokens in one page · April 2026
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-8 flex flex-col gap-12">
        {/* Overview Section */}
        <section className="flex flex-col gap-4">
          <div className="bg-[#EDEDED] rounded-lg p-6 border-l-4 border-[#0D3B66]">
            <div className="text-sm font-bold tracking-widest uppercase text-[#0D3B66] mb-3">
              ✓ Design System Overview
            </div>
            <p className="text-sm text-[#0D3B66] leading-relaxed mb-3">
              All design tokens are organized in{" "}
              <code className="bg-white px-2 py-1 rounded text-xs font-bold border border-[#3F6183]">
                src/lib/design-system/
              </code>
              . Components in this folder organize the display without creating
              extra pages.
            </p>
            <div className="grid grid-cols-2 gap-4 text-xs text-[#3F6183]">
              <div>
                <strong className="text-[#0D3B66]">Configuration Files:</strong>
                <ul className="mt-2 space-y-1 ml-4">
                  <li>
                    <code className="bg-white px-1.5 rounded">colors.ts</code> —
                    Brand palette & contrast
                  </li>
                  <li>
                    <code className="bg-white px-1.5 rounded">
                      typography.ts
                    </code>{" "}
                    — Heading & text scales
                  </li>
                  <li>
                    <code className="bg-white px-1.5 rounded">buttons.ts</code>{" "}
                    — Variants & membership tiers
                  </li>
                  <li>
                    <code className="bg-white px-1.5 rounded">spacing.ts</code>{" "}
                    — Spacing, radius, shadows
                  </li>
                </ul>
              </div>
              <div>
                <strong className="text-[#0D3B66]">Display Components:</strong>
                <ul className="mt-2 space-y-1 ml-4">
                  <li>
                    <code className="bg-white px-1.5 rounded">
                      ColorPalette.tsx
                    </code>
                  </li>
                  <li>
                    <code className="bg-white px-1.5 rounded">
                      TypographySystem.tsx
                    </code>
                  </li>
                  <li>
                    <code className="bg-white px-1.5 rounded">
                      ButtonsAndBadges.tsx
                    </code>
                  </li>
                  <li>
                    <code className="bg-white px-1.5 rounded">
                      SpacingSystem.tsx
                    </code>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* All Components Displayed Here */}
        <ColorPalette />
        <TypographySystem />
        <ButtonsAndBadges />
        <SpacingSystem />
      </div>
    </div>
  );
}
