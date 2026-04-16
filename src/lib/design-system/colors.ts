/**
 * Global Color Palette & WCAG Contrast Reference
 * Single source of truth for all brand colors
 */

export const COLORS = {
  primary: {
    navy: "#0D3B66",
    description: "Navy — Primary",
    usage: ["Nav", "Headings", "Buttons", "Footer"],
  },
  accent: {
    yellow: "#F7DE32",
    description: "Gold — CTA Accent",
    usage: ["Primary CTA", "Highlights"],
    note: "★ Best pair: on Navy bg",
  },
  decorative: {
    teal: "#5DCAD1",
    description: "Teal — Decorative only",
    usage: ["Tags", "Icons", "Dividers"],
    warning: "⚠ No body text on white",
  },
  secondary: {
    steel: "#3F6183",
    description: "Steel Blue — Secondary",
    usage: ["Secondary text", "Subheadings"],
    pass: "✓ Passes WCAG AA on white",
  },
  warm: {
    salmon: "#FFA384",
    description: "Salmon — Warm Accent",
    usage: ["Event tags", "Highlights"],
    warning: "⚠ No body text on white",
  },
  surface: {
    lightGray: "#EDEDED",
    description: "Light Gray — Surface",
    usage: ["Card bg", "Section bg"],
  },
  background: {
    cream: "#FFFAF9",
    description: "Cream — Page Background",
    usage: ["Page bg"],
  },
} as const;

export const COLOR_LIST = [
  {
    hex: COLORS.primary.navy,
    name: COLORS.primary.description,
    usage: COLORS.primary.usage,
    bg: `bg-[${COLORS.primary.navy}]`,
    note: undefined,
    warning: undefined,
    pass: undefined,
  },
  {
    hex: COLORS.accent.yellow,
    name: COLORS.accent.description,
    usage: COLORS.accent.usage,
    bg: `bg-[${COLORS.accent.yellow}]`,
    note: COLORS.accent.note,
    warning: undefined,
    pass: undefined,
  },
  {
    hex: COLORS.decorative.teal,
    name: COLORS.decorative.description,
    usage: COLORS.decorative.usage,
    bg: `bg-[${COLORS.decorative.teal}]`,
    note: undefined,
    warning: COLORS.decorative.warning,
    pass: undefined,
  },
  {
    hex: COLORS.secondary.steel,
    name: COLORS.secondary.description,
    usage: COLORS.secondary.usage,
    bg: `bg-[${COLORS.secondary.steel}]`,
    note: undefined,
    warning: undefined,
    pass: COLORS.secondary.pass,
  },
  {
    hex: COLORS.warm.salmon,
    name: COLORS.warm.description,
    usage: COLORS.warm.usage,
    bg: `bg-[${COLORS.warm.salmon}]`,
    note: undefined,
    warning: COLORS.warm.warning,
    pass: undefined,
  },
  {
    hex: COLORS.surface.lightGray,
    name: COLORS.surface.description,
    usage: COLORS.surface.usage,
    bg: `bg-[${COLORS.surface.lightGray}] border border-[#e0e0e0]`,
    note: undefined,
    warning: undefined,
    pass: undefined,
  },
  {
    hex: COLORS.background.cream,
    name: COLORS.background.description,
    usage: COLORS.background.usage,
    bg: `bg-[${COLORS.background.cream}] border border-[#ede9e5]`,
    note: undefined,
    warning: undefined,
    pass: undefined,
  },
] as const;

export const CONTRAST_MATRIX = [
  {
    pair: "Gold on Navy",
    fg: COLORS.accent.yellow,
    bg: COLORS.primary.navy,
    level: "AAA",
    status: "✓",
  },
  {
    pair: "White on Navy",
    fg: "#FFFFFF",
    bg: COLORS.primary.navy,
    level: "AAA",
    status: "✓",
  },
  {
    pair: "Navy on White",
    fg: COLORS.primary.navy,
    bg: "#FFFFFF",
    level: "AAA",
    status: "✓",
  },
  {
    pair: "Steel on White",
    fg: COLORS.secondary.steel,
    bg: "#FFFFFF",
    level: "AA",
    status: "✓",
  },
  {
    pair: "Teal on White",
    fg: COLORS.decorative.teal,
    bg: "#FFFFFF",
    level: "FAIL",
    status: "✗",
  },
  {
    pair: "Coral on White",
    fg: COLORS.warm.salmon,
    bg: "#FFFFFF",
    level: "FAIL",
    status: "✗",
  },
] as const;
