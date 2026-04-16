/**
 * Buttons & Badges Configuration
 * All button variants and badge styles
 */

export const BUTTON_VARIANTS = [
  { label: "Primary", className: "btn btn-primary" },
  { label: "Join Now", className: "btn btn-yellow" },
  { label: "Outline", className: "btn btn-outline" },
  { label: "Secondary", className: "btn btn-secondary" },
  { label: "Ghost Link →", className: "btn btn-ghost" },
] as const;

export const BUTTON_SIZES = [
  { label: "Small Primary", className: "btn btn-primary btn-sm" },
  { label: "Small CTA", className: "btn btn-yellow btn-sm" },
  { label: "Large Primary", className: "btn btn-primary btn-lg" },
  { label: "Large Join Now", className: "btn btn-yellow btn-lg" },
] as const;

export const BADGE_VARIANTS = [
  { label: "Member", bg: "#0D3B66", text: "#FFFAF9" },
  { label: "Open", bg: "#5DCAD1", text: "#0D3B66" },
  { label: "Featured", bg: "#F7DE32", text: "#0D3B66" },
  { label: "Event", bg: "#FFA384", text: "#4a2318" },
  { label: "Community", bg: "#EDEDED", text: "#3F6183" },
  { label: "Sponsor", bg: "#3F6183", text: "#fff" },
] as const;

export const MEMBERSHIP_TIERS = [
  {
    tier: "Startup",
    price: "$195",
    bg: "#EDEDED",
    textColor: "#0D3B66",
    priceColor: "#3F6183",
    checkColor: "#5DCAD1",
    checkText: "#fff",
    features: [
      "Member Directory listing",
      "Networking events",
      "Local Link discounts",
    ],
    button: "Get Started",
    featured: false,
  },
  {
    tier: "Business",
    price: "$395",
    bg: "#0D3B66",
    textColor: "#FFFAF9",
    priceColor: "#5DCAD1",
    checkColor: "#F7DE32",
    checkText: "#0D3B66",
    features: [
      "Everything in Startup",
      "Ribbon-cutting ceremonies",
      "Sponsorship opportunities",
    ],
    button: "Join Now",
    featured: true,
  },
  {
    tier: "Corporate",
    price: "$795",
    bg: "#EDEDED",
    textColor: "#0D3B66",
    priceColor: "#3F6183",
    checkColor: "#5DCAD1",
    checkText: "#fff",
    features: [
      "Everything in Business",
      "Premier event placement",
      "Dedicated account support",
    ],
    button: "Contact Us",
    featured: false,
  },
] as const;
