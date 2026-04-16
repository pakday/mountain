import Link from "next/link";

export type IconFeatureCardProps = {
  /** A complete <svg> element to render as the icon */
  icon: React.ReactNode;
  title: string;
  description: string;
  /** If provided, a "Learn More →" link is shown at the bottom */
  href?: string;
  /** Override the link label. Defaults to "Learn More →" */
  linkLabel?: string;
  /**
   * When true, the icon container background and text color animate
   * to solid teal / white on hover (used on the home benefits section).
   */
  iconAnimated?: boolean;
  /**
   * When true, the card lifts slightly on hover with a subtle border
   * (used on the Local Link Discounts page).
   */
  lift?: boolean;
};

export default function IconFeatureCard({
  icon,
  title,
  description,
  href,
  linkLabel = "Learn More →",
  iconAnimated = false,
  lift = false,
}: IconFeatureCardProps) {
  return (
    <div
      className={[
        "card p-8 flex flex-col gap-4 group",
        "hover:shadow-xl transition-all duration-300",
        lift
          ? "hover:-translate-y-1 border border-transparent hover:border-teal/20"
          : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Icon box */}
      <div
        className={[
          "w-14 h-14 flex items-center justify-center rounded-xl",
          "bg-teal/15 text-teal-dark shrink-0 transition-all duration-300",
          iconAnimated ? "group-hover:bg-teal group-hover:text-white" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {icon}
      </div>

      <h3 className="heading-sm text-primary">{title}</h3>

      <p className="font-body text-sm text-slate-500 leading-relaxed flex-1">
        {description}
      </p>

      {href && (
        <Link
          href={href}
          className="btn btn-ghost btn-sm self-start pl-0 text-teal font-700"
        >
          {linkLabel}
        </Link>
      )}
    </div>
  );
}
