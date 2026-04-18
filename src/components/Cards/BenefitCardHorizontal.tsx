import Link from "next/link";

/**
 * BenefitCardHorizontal — Design A
 *
 * Horizontal layout: icon square on the left, title + description on the right.
 * Clean left-border teal accent on hover. Compact and scannable.
 */
export type BenefitCardHorizontalProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
};

export default function BenefitCardHorizontal({
  icon,
  title,
  description,
  href,
  linkLabel = "Learn More →",
}: BenefitCardHorizontalProps) {
  return (
    <div
      className={[
        "bg-white rounded-xl p-6 flex gap-5 items-start",
        "border border-transparent shadow-sm",
        "hover:border-teal/20 hover:shadow-lg transition-all duration-300",
        "group",
      ].join(" ")}
    >
      {/* Icon */}
      <div className="shrink-0 w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-yellow group-hover:scale-105 transition-transform duration-300">
        {icon}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 flex-1 min-w-0">
        <h3 className="heading-xs text-primary leading-snug">{title}</h3>
        <p className="font-body text-sm text-ink leading-relaxed">
          {description}
        </p>
        {href && (
          <Link
            href={href}
            className="font-accent text-xs font-700 text-teal uppercase tracking-wider mt-1 hover:text-primary transition-colors duration-200"
          >
            {linkLabel}
          </Link>
        )}
      </div>
    </div>
  );
}
