/**
 * Global Typography System
 * Heading scales (fluid clamp) and body text scales (fixed)
 */

export const HEADING_SCALES = [
  {
    cls: ".heading-2xl",
    text: "Together We Are Stronger",
    size: "2.93–4.74rem",
  },
  {
    cls: ".heading-xl",
    text: "Connections for Success",
    size: "2.34–3.55rem",
  },
  {
    cls: ".heading-l",
    text: "Upcoming Events & Programs",
    size: "1.88–2.67rem",
  },
  {
    cls: ".heading-m",
    text: "Membership Benefits",
    size: "1.5–2rem",
  },
  {
    cls: ".heading-s",
    text: "Board of Directors",
    size: "1.2–1.5rem",
  },
  {
    cls: ".heading-xs",
    text: "Golf Tournament Spring Classic",
    size: "0.96–1.13rem",
  },
  {
    cls: ".heading-2xs",
    text: "Section eyebrow / label",
    size: "0.77–0.84rem",
  },
] as const;

export const TEXT_SCALES = [
  {
    cls: ".text-xs",
    size: "12px/16px",
    desc: "Fine print, eyebrow labels",
  },
  {
    cls: ".text-s",
    size: "14px/20px",
    desc: "Captions, helper text",
  },
  {
    cls: ".text-m",
    size: "16px/24px",
    desc: "Body copy, default",
  },
  {
    cls: ".text-l",
    size: "18px/28px",
    desc: "Lead paragraphs, intro",
  },
  {
    cls: ".text-xl",
    size: "20px/28px",
    desc: "Large UI labels",
  },
  {
    cls: ".text-2xl",
    size: "24px/32px",
    desc: "Stats, callout numbers",
  },
] as const;
