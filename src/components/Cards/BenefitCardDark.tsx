import Link from "next/link";

/**
 * BenefitCardDark — Design C
 *
 * Dark navy card with yellow icon accent, white title, and light body text.
 * Teal link at the bottom. Premium, high-contrast, authoritative look.
 * Pairs well with light-gray section backgrounds.
 */
export type BenefitCardDarkProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
};

export default function BenefitCardDark({
  icon,
  title,
  description,
  href,
  linkLabel = "Learn More →",
}: BenefitCardDarkProps) {
  return (
    <div
      className={[
        "bg-primary rounded-2xl p-7 flex flex-col gap-4",
        "shadow-lg hover:shadow-2xl transition-all duration-300",
        "group hover:-translate-y-1",
        "relative overflow-hidden",
      ].join(" ")}
    >
      {/* Subtle top-right glow decoration */}
      <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-teal/10 pointer-events-none" />

      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-yellow/15 flex items-center justify-center text-yellow group-hover:bg-yellow/25 transition-colors duration-300 relative z-10">
        {icon}
      </div>

      {/* Title */}
      <h3 className="heading-xs text-white leading-snug relative z-10">
        {title}
      </h3>

      {/* Description */}
      <p className="font-body text-sm text-white/70 leading-relaxed flex-1 relative z-10">
        {description}
      </p>

      {href && (
        <Link
          href={href}
          className="font-accent text-xs font-700 text-teal uppercase tracking-wider mt-1 hover:text-yellow transition-colors duration-200 relative z-10"
        >
          {linkLabel}
        </Link>
      )}
    </div>
  );
}
