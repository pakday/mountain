import {
  BUTTON_VARIANTS,
  BUTTON_SIZES,
  BADGE_VARIANTS,
  MEMBERSHIP_TIERS,
} from "@/lib/design-system";

export function ButtonsAndBadges() {
  return (
    <>
      {/* Buttons & Badges */}
      <section className="flex flex-col gap-4">
        <div className="text-xs font-bold tracking-widest uppercase text-[#3F6183] border-b border-[#EDEDED] pb-2">
          04 — Button Variants &amp; Badges
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

      {/* Membership Tier Cards */}
      <section className="flex flex-col gap-4">
        <div className="text-xs font-bold tracking-widest uppercase text-[#3F6183] border-b border-[#EDEDED] pb-2">
          05 — Membership Tier Cards
        </div>
        <div className="grid grid-cols-3 gap-4">
          {MEMBERSHIP_TIERS.map((card) => (
            <div
              key={card.tier}
              className="rounded-lg p-6 shadow-sm relative overflow-hidden"
              style={{ backgroundColor: card.bg }}
            >
              {card.featured && (
                <div className="absolute top-0 right-0 bg-[#F7DE32] text-[#0D3B66] text-xs font-bold px-3 py-1 rounded-bl-lg tracking-wider">
                  MOST POPULAR
                </div>
              )}
              <div
                className="text-xs font-bold tracking-widest uppercase mb-3"
                style={{ color: card.priceColor }}
              >
                {card.tier}
              </div>
              <div style={{ fontSize: "1.5rem", color: card.textColor }}>
                <span className="font-bold">{card.price}</span>
                <span style={{ fontSize: "14px", color: card.priceColor }}>
                  /yr
                </span>
              </div>
              <div
                className="h-px my-4"
                style={{ background: "rgba(0,0,0,0.1)" }}
              />
              <div className="flex flex-col gap-2 mb-5">
                {card.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-xs"
                    style={{ color: card.textColor }}
                  >
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 text-xs font-black"
                      style={{
                        background: card.checkColor,
                        color: card.checkText,
                      }}
                    >
                      ✓
                    </div>
                    {feature}
                  </div>
                ))}
              </div>
              <button
                className={`w-full py-2 rounded text-center font-bold text-xs ${card.bg === "#0D3B66" ? "bg-[#F7DE32] text-[#0D3B66]" : "bg-transparent border border-[#0D3B66] text-[#0D3B66]"}`}
              >
                {card.button}
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
