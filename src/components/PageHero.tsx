import Image from "next/image";
import type { ReactNode } from "react";

/* ─────────────────────────────────────────────────────────────
   PageHero — Shared hero section for Programs (and other) pages.

   Two rendering variants are selected automatically:
   • Image variant  — when `imageSrc` is supplied.
                      Full-bleed background + dark gradient overlay,
                      content anchored to the bottom of the section.
   • Solid variant  — when `imageSrc` is omitted.
                      bg-primary section with optional decorative
                      elements (e.g. scholarship diagonal bar).

   All content slots are optional so individual pages only pass
   what they need while sharing the same structural skeleton.
───────────────────────────────────────────────────────────────── */

export interface PageHeroChip {
  icon?: ReactNode;
  label: string;
}

export interface PageHeroStat {
  value: string;
  label: string;
}

export interface PageHeroProps {
  // ── Background ───────────────────────────────────────────────
  /** Full-bleed background image src. Omit for solid bg-primary. */
  imageSrc?: string;
  imageAlt?: string;
  /**
   * Overlay gradient Tailwind classes applied on top of the image.
   * Default: dark left→right blue gradient matching brand palette.
   */
  overlay?: string;

  // ── Layout ───────────────────────────────────────────────────
  /** CSS min-height value, e.g. "65vh". Defaults to "65vh". */
  minHeight?: string;
  /**
   * Tailwind padding classes for the inner content container.
   * Defaults to "pb-28 pt-36". Only applies to the image variant.
   */
  containerPadding?: string;

  // ── Content ──────────────────────────────────────────────────
  /** Small CAPS eyebrow label above the heading. */
  eyebrow?: string;
  /**
   * Optional badge/pill rendered above the eyebrow
   * (e.g. "New Program 2025" pill on local-linkdiscounts).
   */
  badge?: ReactNode;
  /**
   * Main h1 heading.  Use inline <span> elements for colored words,
   * e.g. <><br /><span className="text-yellow">Golf Classic</span></>.
   */
  title: ReactNode;
  /** Optional italic subtitle line beneath the heading. */
  subtitle?: ReactNode;
  /** Body description text. */
  description?: ReactNode;
  /**
   * Small info chips shown below description
   * (date / time / venue, etc.).
   */
  chips?: PageHeroChip[];
  /** CTA buttons — any JSX. Rendered after chips. */
  actions?: ReactNode;
  /**
   * Optional right-side column content
   * (badge strip, quick-facts, etc.).
   * When provided the layout becomes two columns on ≥ lg screens.
   */
  aside?: ReactNode;
  /**
   * Bottom stat cards shown beneath the main content.
   * Each card shows a bold value and a small label.
   */
  stats?: PageHeroStat[];
  /**
   * Extra decorative elements placed inside the section with absolute
   * positioning (diagonal bars, texture overlays, etc.).
   */
  decorations?: ReactNode;
}

export default function PageHero({
  imageSrc,
  imageAlt = "",
  overlay = "absolute inset-0 bg-linear-to-br from-primary/90 via-primary/80 to-slate-blue/60",
  minHeight = "65vh",
  containerPadding = "pb-28 pt-36",
  eyebrow,
  badge,
  title,
  subtitle,
  description,
  chips,
  actions,
  aside,
  stats,
  decorations,
}: PageHeroProps) {
  const hasImage = !!imageSrc;

  /* ── Shared: inline chips row ─────────────────────────────── */
  const chipsRow = chips && chips.length > 0 && (
    <div className="flex flex-wrap gap-3 mb-6">
      {chips.map((chip, i) => (
        <span
          key={i}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white rounded-full px-4 py-2 text-sm font-body font-semibold border border-white/20"
        >
          {chip.icon && <span className="shrink-0">{chip.icon}</span>}
          {chip.label}
        </span>
      ))}
    </div>
  );

  /* ── Shared: bottom stat cards ────────────────────────────── */
  const statsRow = stats && stats.length > 0 && (
    <div className="section-container relative z-10 mt-14 pb-12">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-4 text-center"
          >
            <div
              className="heading-l text-yellow"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {s.value}
            </div>
            <div className="font-accent text-xs font-700 uppercase tracking-widest text-white/80 mt-1">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  /* ────────────────────────────────────────────────────────────
     SOLID VARIANT  (no background image)
  ─────────────────────────────────────────────────────────────  */
  if (!hasImage) {
    return (
      <section className="relative py-28 overflow-hidden bg-primary">
        {decorations}

        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            {badge && <div className="mb-6">{badge}</div>}
            {eyebrow && <p className="eyebrow text-teal mb-5">{eyebrow}</p>}
            <h1
              className="heading-2xl text-white mb-6"
              style={{ lineHeight: "1.05" }}
            >
              {title}
            </h1>
            {subtitle && (
              <p className="font-body text-xl text-white/80 mb-6 leading-relaxed italic font-medium">
                {subtitle}
              </p>
            )}
            {description && (
              <p className="font-body text-lg text-white/80 max-w-2xl leading-relaxed mb-10">
                {description}
              </p>
            )}
            {chipsRow}
            {actions && <div className="flex flex-wrap gap-4">{actions}</div>}
          </div>
        </div>

        {statsRow}
      </section>
    );
  }

  /* ────────────────────────────────────────────────────────────
     IMAGE VARIANT  (background photo + overlay)
  ─────────────────────────────────────────────────────────────  */
  return (
    <section
      className="relative flex items-end overflow-hidden"
      style={{ minHeight }}
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className={overlay} />
      </div>

      {/* Optional decorative overlays */}
      {decorations}

      {/* Content container */}
      <div
        className={`relative z-10 section-container w-full max-w-7xl ${containerPadding}`}
      >
        {badge && <div className="mb-6">{badge}</div>}

        {/* One-column or two-column (with aside) layout */}
        <div
          className={
            aside
              ? "flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"
              : undefined
          }
        >
          {/* ── Left / main text column ── */}
          <div className="max-w-2xl">
            {eyebrow && <p className="eyebrow text-teal mb-4">{eyebrow}</p>}
            <h1
              className="heading-2xl text-white mb-4"
              style={{ lineHeight: 1.05 }}
            >
              {title}
            </h1>
            {subtitle && (
              <p className="font-body text-xl text-white/80 mb-5 leading-relaxed italic font-medium">
                {subtitle}
              </p>
            )}
            {description && (
              <p className="font-body text-lg text-white/80 max-w-xl leading-relaxed">
                {description}
              </p>
            )}
            {chipsRow}
            {/* When no aside: render actions inside the text column */}
            {!aside && actions && (
              <div className="flex flex-wrap gap-4 mt-6">{actions}</div>
            )}
          </div>

          {/* ── Right column (aside) ── */}
          {aside && <div className="shrink-0">{aside}</div>}
        </div>

        {/* When aside is present: actions span full width below both columns */}
        {aside && actions && (
          <div className="flex flex-wrap gap-4 mt-8">{actions}</div>
        )}
      </div>

      {statsRow}
    </section>
  );
}
