import {
  BUTTON_VARIANTS,
  BUTTON_SIZES,
  BADGE_VARIANTS,
} from "@/lib/design-system";

export function ButtonsAndBadges() {
  return (
    <>
      {/* Buttons & Badges */}
      <section className="flex flex-col gap-4">
        <div className="text-xs font-bold tracking-widest uppercase text-[#3F6183] border-b border-[#EDEDED] pb-2">
          Button Variants &amp; Badges
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="text-xs font-bold text-[#0D3B66] mb-4">
            Button variants
          </div>
          <div className="flex flex-wrap gap-3 mb-5 items-center">
            {BUTTON_VARIANTS.map((btn) => (
              <button key={btn.label} className={btn.className}>
                {btn.label}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 mb-5 items-center">
            {BUTTON_SIZES.map((btn) => (
              <button key={btn.label} className={btn.className}>
                {btn.label}
              </button>
            ))}
          </div>
          <div className="h-px bg-[#EDEDED] my-4" />
          <div className="text-xs font-bold text-[#0D3B66] mb-3">
            Badge / Tag variants
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            {BADGE_VARIANTS.map((badge) => (
              <span
                key={badge.label}
                className="text-xs font-semibold px-2.5 py-1 rounded"
                style={{ background: badge.bg, color: badge.text }}
              >
                {badge.label}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
