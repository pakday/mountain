import { HEADING_SCALES, TEXT_SCALES } from "@/lib/design-system";

export function TypographySystem() {
  return (
    <>
      {/* Heading Scale */}
      <section className="flex flex-col gap-4">
        <div className="text-xs font-bold tracking-widest uppercase text-[#3F6183] border-b border-[#EDEDED] pb-2">
          02 — Typography: Heading Scale (fluid clamp)
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm flex flex-col gap-3">
          {HEADING_SCALES.map((item) => (
            <div
              key={item.cls}
              className="flex items-baseline gap-4 pb-3 border-b border-[#EDEDED]"
            >
              <code className="w-24 text-xs text-[#3F6183] shrink-0">
                {item.cls}
              </code>
              <div
                className={item.cls.replace(".", "")}
                style={{ color: "#0D3B66", fontFamily: "Georgia, serif" }}
              >
                {item.text}
              </div>
              <span className="ml-auto text-xs text-[#3F6183] whitespace-nowrap">
                {item.size}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Body Text Scale */}
      <section className="flex flex-col gap-4">
        <div className="text-xs font-bold tracking-widest uppercase text-[#3F6183] border-b border-[#EDEDED] pb-2">
          03 — Body Text Scale (.text-*) — Fixed Pixel Values
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex flex-col gap-3">
            {TEXT_SCALES.map((item) => (
              <div
                key={item.cls}
                className="flex items-baseline gap-4 pb-2 border-b border-[#EDEDED]"
              >
                <code className="w-20 text-xs text-[#3F6183] shrink-0">
                  {item.cls}
                </code>
                <span style={{ fontSize: item.size.split("/")[0] }}>
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
