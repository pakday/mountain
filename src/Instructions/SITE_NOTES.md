# MWCC Site — Build Notes & Conventions

## Stack

- Next.js 16.2.3, React 19, Tailwind v4, TypeScript
- App Router — no Pages Router

## Folder Structure

- `src/app/` — pages (each slug = folder + page.tsx)
- `src/components/` — shared components (Header, Footer)
- `src/app/globals.css` — ALL global tokens, component classes, utilities
- `src/app/layout.tsx` — root layout with Header + Footer + fonts
- `public/` — static assets (images, logo)

## Fonts (Google Fonts via next/font) — **2 fonts only**

| Variable             | CSS Class                                 | Use                                       |
| -------------------- | ----------------------------------------- | ----------------------------------------- |
| `--font-roboto-slab` | `font-heading`                            | H1–H6, large headings                     |
| `--font-montserrat`  | `font-body` / `font-accent` / `font-sans` | Body text, labels, buttons, eyebrows, nav |

> **Decision (Session 2):** Roboto Condensed was removed. Both `--font-body` and `--font-accent`
> now resolve to Montserrat. Only `--font-heading` (via `font-heading` class) uses Roboto Slab.

## Global CSS Classes (globals.css)

### Heading Sizes (fluid, clamp-based — reduced ~18% from original)

`heading-xs` `heading-sm` `heading-md` `heading-lg` `heading-xl` `heading-2xl` `heading-3xl`

```css
--heading-xs: clamp(0.8rem, 0.2vi + 0.75rem, 0.95rem);
--heading-sm: clamp(1rem, 0.4vi + 0.9rem, 1.25rem);
--heading-md: clamp(1.25rem, 0.65vi + 1.1rem, 1.65rem);
--heading-lg: clamp(1.5rem, 1vi + 1.25rem, 2rem);
--heading-xl: clamp(1.85rem, 1.5vi + 1.5rem, 2.65rem);
--heading-2xl: clamp(2.2rem, 2.2vi + 1.7rem, 3.4rem);
--heading-3xl: clamp(2.6rem, 3.2vi + 1.9rem, 4.5rem);
```

### Buttons

`btn` (base) + modifier:

- `btn-primary` — deep blue (#0D3B66)
- `btn-secondary` — slate-blue (#3F6183), hover → teal-dark
- `btn-outline` — outlined blue
- `btn-outline-white` — outlined white (on dark backgrounds)
- `btn-ghost` — transparent / text link style
- `btn-yellow` — yellow (#F7DE32)
- `btn-sm` — small size
- `btn-lg` — large size

### Section Layout

- `section-container` — max-w-1280 + responsive px (16/24/32px)
- `section-px` — responsive horizontal padding only
- `section-divider` — teal accent line under headings
- `eyebrow` — small caps label above headings

### Partner Sponsor Slider

`.marquee-track` — CSS `animation: marquee-scroll 28s linear infinite` — duplicates the logo set for a
seamless loop. Wrap in `overflow-hidden` parent.

## Brand Colors (Tailwind utilities) — **8 tokens only**

| Token        | Hex     | Tailwind class                    | Use                                |
| ------------ | ------- | --------------------------------- | ---------------------------------- |
| `primary`    | #0D3B66 | `bg-primary` `text-primary`       | Main brand blue, headings, buttons |
| `slate-blue` | #3F6183 | `bg-slate-blue` `text-slate-blue` | Secondary blue, overlays           |
| `light-gray` | #EDEDED | `bg-light-gray`                   | Card borders, section bg           |
| `off-white`  | #FFFAF9 | `bg-off-white`                    | Warm off-white section bg          |
| `teal`       | #5DCAD1 | `bg-teal` `text-teal`             | Accent, eyebrows, hover states     |
| `teal-dark`  | #43727A | `bg-teal-dark` `text-teal-dark`   | Darker teal variant                |
| `yellow`     | #F7DE32 | `bg-yellow` `text-yellow`         | CTA buttons, highlights            |
| `coral`      | #FFA384 | `text-coral`                      | Required field asterisks, alerts   |

> **Removed tokens (Session 2):** `primary-dark`, `primary-light`, `bright-teal` (→ `teal`),
> `bright-yellow` (→ `yellow`), `deep-teal` (→ `teal-dark`).
> Update any old `bright-teal`, `bright-yellow`, `deep-teal` references to the new names.

## Section Padding Convention

Desktop 2rem (32px) · Tablet 1.5rem (24px) · Mobile 1rem (16px)
→ handled via CSS variable `--px-section` in `section-container` / `section-px`

## Page Slugs (Google-indexed, do not change)

| Page                      | Slug                        | Status   |
| ------------------------- | --------------------------- | -------- |
| Home                      | /                           | ✅ Built |
| About Us                  | /aboutus                    | ✅ Built |
| Board of Directors        | /boardofdirectors           | ✅ Built |
| Utah Strong               | /utah-strong                | ✅ Built |
| Contact Us                | /contactus                  | ✅ Built |
| Member Directory          | /members                    | Stub     |
| Renewals                  | /renew                      | Stub     |
| Sponsorship Opportunities | /sponsorship                | Stub     |
| Why Become a Member       | /why-become-a-member        | Stub     |
| Golf Sponsorships         | /golf-sponsorships          | Stub     |
| Golf Tournament           | /golf-tournament            | Stub     |
| Knight of Heroes          | /knight-of-heroes-event     | Stub     |
| Local Link Discount       | /local-linkdiscounts        | Stub     |
| Scholarship Recipients    | /scholarship-recipients     | Stub     |
| Sponsorship Opps          | /sponsorshipopps            | Stub     |
| Teacher Appreciation      | /teacher-appreciation-event | Stub     |
| Blog                      | /blogarticles               | Stub     |
| Calendar                  | /calendar                   | Stub     |
| Become a Member           | /becomeamember              | Stub     |
| Member Discounts          | /for-members                | Stub     |
| Member Resources          | /join-us                    | Stub     |

## Header (src/components/Header.tsx)

- Client component (`"use client"`) — needed for dropdown + mobile menu state
- Top bar: phone, email, social icons (FB / IG / LinkedIn), Member Login
- Main bar: logo left, desktop nav center-right, CTA button, mobile hamburger
- Logo height: `h-16` (64px), `w-auto`
- Nav bar height: `h-24`
- Sticky (`sticky top-0 z-50`)
- Dropdown: hover on desktop, tap to toggle on mobile

## Footer (src/components/Footer.tsx)

- Server component
- 4-column layout: Brand+Social / Contact / Quick Links / Programs+CTA
- Top CTA banner: "Together, We Are Stronger" with Become a Member + Contact Us buttons
- Bottom bar: copyright + "Website by Amp Digital Marketing"
- No full site nav dump — curated links only

## Images

- Logo: `/mountainwestchamber-logo.webp` (in /public root)
- Client site images: `/public/Structure/[section]/[page]/filename`
- Partner logos: `/public/Structure/Sustaining%20Partner%20Sponsors/` (8 images)
- Unsplash: configured in next.config.ts (images.unsplash.com allowed)
- Use `next/image` with `fill` + `sizes` for hero/card images
- Spaces in folder paths must be URL-encoded (`%20`) in `src` strings

## Adding New Pages

1. Create folder `src/app/[slug]/`
2. Add `page.tsx` with `export const metadata` + default export
3. Use page hero pattern: `<section className="bg-primary py-24">` with eyebrow + h1 + divider
4. Color tokens: use `teal` (not `bright-teal`), `yellow` (not `bright-yellow`), `teal-dark` (not `deep-teal`)
