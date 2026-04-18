import {
  SECTION_SPACING,
  BORDER_RADIUS,
  BOX_SHADOWS,
} from "@/lib/design-system";

export function SpacingSystem() {
  return (
    <>
      {/* Section Spacing */}
      <section className="flex flex-col gap-4">
        <div className="text-xs font-bold tracking-widest uppercase text-[#3F6183] border-b border-[#EDEDED] pb-2">
          06 — Section Spacing Scale (--section-*)
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex flex-col gap-3">
            {SECTION_SPACING.map((item) => (
              <div key={item.cls} className="flex items-center gap-4">
                <code className="w-32 text-xs text-[#3F6183] shrink-0">
                  {item.cls}
                </code>
                <div
                  className="h-5 bg-[#0D3B66] rounded"
                  style={{ width: `var(${item.cls})` }}
                />
                <span className="text-xs text-[#3F6183]">{item.range}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Border Radius */}
      <section className="flex flex-col gap-4">
        <div className="text-xs font-bold tracking-widest uppercase text-[#3F6183] border-b border-[#EDEDED] pb-2">
          07 — Border Radius (.radius-*)
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex flex-wrap gap-8 items-end">
            {BORDER_RADIUS.map((item) => (
              <div key={item.cls} className="flex flex-col items-center gap-2">
                <div
                  className="w-15 h-15 bg-[#0D3B66]"
                  style={{
                    borderRadius:
                      item.style === "9999px" ? "9999px" : item.style,
                  }}
                />
                <code className="text-xs text-[#3F6183]">{item.cls}</code>
                <span className="text-xs text-ink">{item.style}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Box Shadows */}
      <section className="flex flex-col gap-4">
        <div className="text-xs font-bold tracking-widest uppercase text-[#3F6183] border-b border-[#EDEDED] pb-2">
          08 — Box Shadows (.shadow-*)
        </div>
        <div className="bg-[#EDEDED] rounded-lg p-8">
          <div className="flex flex-wrap gap-8 items-end">
            {BOX_SHADOWS.map((item) => (
              <div key={item.cls} className="flex flex-col items-center gap-3">
                <div
                  className="w-20 h-15 bg-white rounded"
                  style={{ boxShadow: item.shadow }}
                />
                <code className="text-xs text-[#3F6183]">{item.cls}</code>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
