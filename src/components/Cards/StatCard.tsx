/**
 * StatCard — two variants:
 *
 * "banner"  (default) — plain text display for use inside coloured stat banners
 *                       (home / about-us navy strip). No card wrapper.
 *
 * "card"    — card wrapper with white background and hover shadow.
 *             Used for the research-stat grid on the Become-a-Member page.
 */
export type StatCardProps = {
  value: string;
  label: string;
  variant?: "banner" | "card";
};

export default function StatCard({
  value,
  label,
  variant = "banner",
}: StatCardProps) {
  if (variant === "card") {
    return (
      <div className="card p-8 text-center group hover:shadow-xl transition-shadow duration-300">
        <div
          className="heading-l text-teal mb-3"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {value}
        </div>
        <p className="font-body text-sm text-slate-blue/60 leading-snug">
          {label}
        </p>
      </div>
    );
  }

  /* banner variant (default) */
  return (
    <div className="text-center px-6">
      <div
        className="heading-l text-yellow font-800"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {value}
      </div>
      <div className="font-accent text-sm font-600 uppercase tracking-widest text-white/80 mt-1">
        {label}
      </div>
    </div>
  );
}
