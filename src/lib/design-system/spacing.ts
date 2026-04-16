/**
 * Spacing, Radius & Shadows System
 * Global scale definitions
 */

export const SECTION_SPACING = [
  { cls: "--section-s", range: "48px → 64px" },
  { cls: "--section-m", range: "64px → 80px" },
  { cls: "--section-l", range: "80px → 96px" },
  { cls: "--section-xl", range: "96px → 112px" },
  { cls: "--section-2xl", range: "112px → 128px" },
  { cls: "--section-3xl", range: "128px → 160px" },
] as const;

export const BORDER_RADIUS = [
  { cls: ".radius-none", style: "0" },
  { cls: ".radius-md", style: "6px" },
  { cls: ".radius-lg", style: "8px" },
  { cls: ".radius-xl", style: "12px" },
  { cls: ".radius-2xl", style: "16px" },
  { cls: ".radius-3xl", style: "24px" },
  { cls: ".radius-full", style: "9999px" },
] as const;

export const BOX_SHADOWS = [
  { cls: ".shadow-2xs", shadow: "0 1px rgb(0 0 0 / 0.05)" },
  { cls: ".shadow-xs", shadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)" },
  {
    cls: ".shadow-sm",
    shadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  },
  {
    cls: ".shadow-md",
    shadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  },
  {
    cls: ".shadow-lg",
    shadow:
      "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  },
  {
    cls: ".shadow-xl",
    shadow:
      "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  },
  {
    cls: ".shadow-2xl",
    shadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
  },
] as const;
