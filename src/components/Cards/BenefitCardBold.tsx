import Link from "next/link";

/**
 * BenefitCardBold — Design B
 *
 * Vertical card with a thick colored left border on hover, icon large
 * and centered in a yellow circle, strong heading, clean body text.
 * Bold, high-energy, confident feel.
 */
export type BenefitCardBoldProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
};

export default function BenefitCardBold({
  icon,
  title,
  description,
  href,
  linkLabel = "Learn More →",
}: BenefitCardBoldProps) {
  return (
    <div
      className={[
        "bg-white rounded-xl p-7 flex flex-col gap-4",
        "border-l-4 border-yellow",
        "shadow-sm hover:shadow-xl transition-all duration-300",
        "group hover:-translate-y-1",
      ].join(" ")}
    >
      {/* Icon in a yellow-tinted circle */}
      <div className="w-14 h-14 rounded-full bg-yellow/10 flex items-center justify-center text-primary group-hover:bg-yellow transition-colors duration-300">
        {icon}
      </div>

      {/* Title */}
      <h3 className="heading-s text-primary leading-snug">{title}</h3>

      {/* Divider */}
      <div className="w-8 h-0.5 bg-teal rounded-full" />

      {/* Description */}
      <p className="font-body text-sm text-slate-blue/60 leading-relaxed flex-1">
        {description}
      </p>

      {href && (
        <Link
          href={href}
          className="inline-flex items-center gap-1 font-accent text-xs font-700 text-primary uppercase tracking-wider mt-1 hover:text-teal transition-colors duration-200"
        >
          {linkLabel}
        </Link>
      )}
    </div>
  );
}
