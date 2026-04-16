import { COLOR_LIST, CONTRAST_MATRIX } from "@/lib/design-system";

export function ColorPalette() {
  return (
    <section className="flex flex-col gap-4">
      <div className="text-xs font-bold tracking-widest uppercase text-[#3F6183] border-b border-[#EDEDED] pb-2">
        01 — Color Palette &amp; Usage Rules
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {COLOR_LIST.map((item) => (
          <div key={item.hex} className="rounded-lg overflow-hidden shadow-sm">
            <div className={`h-20 ${item.bg}`} />
            <div className="bg-white p-3">
              <div className="text-sm font-bold text-[#0D3B66]">{item.hex}</div>
              <div className="text-xs text-[#3F6183] mt-0.5">{item.name}</div>
              <div className="mt-2 flex flex-wrap gap-1">
                {item.usage.map((u) => (
                  <span
                    key={u}
                    className="bg-black/5 text-[#0D3B66] text-xs px-1.5 py-0.5 rounded font-semibold"
                  >
                    {u}
                  </span>
                ))}
              </div>
              {item.note && (
                <div className="mt-1 text-xs text-[#059669] font-semibold">
                  {item.note}
                </div>
              )}
              {item.warning && (
                <div className="mt-1 text-xs text-[#d97706] font-semibold">
                  {item.warning}
                </div>
              )}
              {item.pass && (
                <div className="mt-1 text-xs text-[#059669] font-semibold">
                  {item.pass}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Contrast Matrix */}
      <div className="bg-white rounded-lg p-5 shadow-sm">
        <div className="text-xs font-bold text-[#0D3B66] mb-3">
          Contrast Safety Reference (WCAG)
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {CONTRAST_MATRIX.map((item) => (
            <div
              key={item.pair}
              className="flex items-center gap-2 p-2 px-3 rounded"
              style={{ backgroundColor: item.bg }}
            >
              <span className="font-bold text-xs" style={{ color: item.fg }}>
                {item.pair}
              </span>
              <span
                className={`ml-auto text-white text-xs px-1.5 py-0.5 rounded font-bold ${
                  item.level === "AAA"
                    ? "bg-[#059669]"
                    : item.level === "AA"
                      ? "bg-[#059669]"
                      : "bg-[#dc2626]"
                }`}
              >
                {item.level} {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
