import Image from "next/image";
import Link from "next/link";

export type MembershipTierCardProps = {
  title: string;
  price: string;
  period?: string;
  description?: string;
  /** Feature bullet list (renew page). When provided, a checklist is shown. */
  features?: string[];
  /** Highlights this tier (ring outline + "Most Popular" banner) */
  highlight?: boolean;
  /** Small pill tag shown near the top-right corner */
  tag?: string | null;
  ctaLabel: string;
  /** href OR mailto: link for the CTA button */
  href: string;
  /**
   * Tailwind bg class for the thin accent bar at the very top of the card.
   * e.g. "bg-teal", "bg-primary", "bg-slate-blue".
   * Only rendered when no badgeImage is provided.
   */
  accentClass?: string;
  /**
   * Image path for a badge rendered in a dark header area at the top of the
   * card (renew page style — replaces the accent bar).
   */
  badgeImage?: string;
  /** Alt text for the badge image */
  badgeAlt?: string;
};

export default function MembershipTierCard({
  title,
  price,
  period = "/ year",
  description,
  features,
  highlight = false,
  tag,
  ctaLabel,
  href,
  accentClass = "bg-teal",
  badgeImage,
  badgeAlt,
}: MembershipTierCardProps) {
  if (badgeImage) {
    /* ── Renew-style card (badge image header) ─────────────────── */
    return (
      <div
        className={[
          "relative flex flex-col rounded-2xl overflow-hidden border transition-shadow hover:shadow-xl",
          highlight
            ? "border-teal shadow-lg ring-2 ring-teal/30"
            : "border-light-gray shadow",
        ].join(" ")}
      >
        {highlight && (
          <div className="bg-teal text-primary text-center py-2">
            <span className="font-accent font-700 text-xs uppercase tracking-widest">
              Most Popular
            </span>
          </div>
        )}

        {/* Badge image header */}
        <div className="bg-primary flex items-center justify-center py-10 px-8">
          <div className="relative w-44 h-44">
            <Image
              src={badgeImage}
              alt={badgeAlt ?? title}
              fill
              className="object-contain drop-shadow-lg"
              sizes="176px"
            />
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-col flex-1 p-7">
          <h3 className="heading-sm text-primary mb-1">{title}</h3>
          <div className="flex items-end gap-1 mb-4">
            <span
              className="heading-xl text-primary"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {price}
            </span>
            <span className="font-body text-slate-400 text-sm pb-1">
              {period}
            </span>
          </div>
          {description && (
            <p className="font-body text-sm text-slate-500 leading-relaxed mb-6">
              {description}
            </p>
          )}

          {features && features.length > 0 && (
            <ul className="flex flex-col gap-2 mb-8 flex-1">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 text-teal shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="font-body text-sm text-slate-600 leading-snug">
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          )}

          <a
            href={href}
            className={`btn w-full text-center mt-auto ${highlight ? "btn-secondary" : "btn-outline"}`}
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    );
  }

  /* ── Become-a-Member style card (accent colour bar) ────────── */
  return (
    <div
      className={[
        "card flex flex-col relative",
        highlight ? "ring-2 ring-teal shadow-xl" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Accent bar */}
      <div className={`h-2 w-full ${accentClass} rounded-t-xl`} />

      {/* Tag pill */}
      {tag && (
        <div className="absolute top-5 right-4">
          <span className="eyebrow bg-yellow text-primary text-[0.6rem] px-2 py-1 rounded-full">
            {tag}
          </span>
        </div>
      )}

      <div className="p-8 flex flex-col flex-1 gap-5">
        {/* Price */}
        <div>
          <div className="flex items-baseline gap-1 mb-1">
            <span
              className="heading-xl text-primary"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {price}
            </span>
            <span className="font-body text-sm text-slate-400">{period}</span>
          </div>
          <h3 className="heading-sm text-primary">{title}</h3>
        </div>

        <div className="section-divider" />

        {description && (
          <p className="font-body text-sm text-slate-500 leading-relaxed flex-1">
            {description}
          </p>
        )}

        {features && features.length > 0 && (
          <ul className="flex flex-col gap-2 flex-1">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-2">
                <svg
                  className="w-4 h-4 text-teal shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="font-body text-sm text-slate-600 leading-snug">
                  {f}
                </span>
              </li>
            ))}
          </ul>
        )}

        <Link
          href={href}
          className={`btn w-full text-center mt-auto ${highlight ? "btn-secondary" : "btn-outline"}`}
        >
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
}
