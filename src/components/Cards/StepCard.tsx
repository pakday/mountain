import Link from "next/link";

/**
 * StepCard — two visual variants:
 *
 * "cta"     (default) — large faded step number as background watermark,
 *                       title + description + optional CTA link at the bottom.
 *                       Used on the home "How It Works" section.
 *
 * "circle"  — coloured circle containing the step number, title + description
 *             centred below it.  No CTA link.
 *             Used on the Local Link Discounts "3 Simple Steps" section.
 */
export type StepCardProps = {
  step: string;
  title: string;
  description: string;
  /** CTA variant only: link destination */
  href?: string;
  /** CTA variant only: button label */
  cta?: string;
  /** circle variant only: Tailwind bg class for the circle, e.g. "bg-coral" */
  colorClass?: string;
  variant?: "cta" | "circle";
};

export default function StepCard({
  step,
  title,
  description,
  href,
  cta,
  colorClass = "bg-teal",
  variant = "cta",
}: StepCardProps) {
  if (variant === "circle") {
    return (
      <div className="card p-8 text-center hover:shadow-xl transition-shadow duration-300">
        <div
          className={`w-16 h-16 rounded-full ${colorClass} flex items-center justify-center mx-auto mb-6 shadow-lg`}
        >
          <span className="font-heading text-white text-2xl font-700">
            {step}
          </span>
        </div>
        <h3 className="heading-sm text-primary mb-3">{title}</h3>
        <p className="font-body text-gray-500 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    );
  }

  /* cta variant (default) */
  return (
    <div className="relative flex flex-col gap-5 p-8 rounded-2xl border-2 border-light-gray hover:border-teal/40 hover:shadow-xl transition-all duration-300">
      {/* Watermark step number */}
      <span
        className="font-heading font-800 text-light-gray absolute top-4 right-6"
        style={{
          fontSize: "5rem",
          lineHeight: 1,
          fontFamily: "var(--font-heading)",
        }}
        aria-hidden="true"
      >
        {step}
      </span>

      <div className="relative z-10">
        <h3 className="heading-md text-primary mb-3">{title}</h3>
        <p className="font-body text-sm text-slate-500 leading-relaxed mb-5">
          {description}
        </p>
        {href && cta && (
          <Link href={href} className="btn btn-secondary btn-sm">
            {cta}
          </Link>
        )}
      </div>
    </div>
  );
}
