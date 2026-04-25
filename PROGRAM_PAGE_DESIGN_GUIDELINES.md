# Program Page Design Guidelines

## Core Principles

1. **Follow client content exactly** — no fabricated sections, no surprise components
2. **Modern + minimalist** — beautiful design that serves the content, not distracts from it
3. **Easy Elementor migration** — flat structure, reusable sections, no complex component logic
4. **Design system first** — use global classes only (headings, text scale, spacing, colors)

---

## Page Structure (Template)

Every program page should follow this structure:

```
1. PageHero (imageSrc, eyebrow, title, description, optional aside/badges/buttons)
2. Content sections (text + image layout, alternating left/right)
3. Final CTA section (navy bg, tagline, heading + call-to-action buttons)
```

## Section Requirements

### Container & Spacing

- Every content section must wrap all content in `<div className="container">` (80rem max-width already baked in)
- Use `py-(--section-l)` or `py-(--section-xl)` for vertical padding (never manual values)
- Spacing variables: `gap-12`, `gap-16`, `mb-6`, `mb-8` (use clamp-based tokens, not fixed units)

### Section Backgrounds

```
- Alternating: off-white → white → off-white (or similar)
- Full-bleed bg on <section>, .container constrains content
```

### Heading/Text Hierarchy

- **Eyebrow** — `.eyebrow` (teal caps label)
- **Section heading** — `.heading-l` or `.heading-xl` (brand font)
- **Body text** — `.font-body text-ink` (ensures WCAG compliance)
- **Divider** — `.section-divider` (teal, 3rem wide)

---

## Content Sections (Text + Image)

**Grid layout:**

```jsx
<section className="py-(--section-l) bg-off-white">
  <div className="container">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Text column */}
      <div>…</div>
      {/* Image column */}
      <div className="flex justify-center">
        <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
          <Image … />
        </div>
      </div>
    </div>
  </div>
</section>
```

### Styled Accent Elements (Modern Touch)

**Join Code / Key Info Block** (convert buried text into a visual element):

```jsx
<div className="bg-primary rounded-2xl px-6 py-5 flex items-center gap-5">
  <div className="shrink-0">
    <p className="font-accent text-teal text-xs font-700 uppercase mb-1">
      Label
    </p>
    <p className="font-heading text-yellow text-4xl font-700 tracking-widest">
      KEY
    </p>
  </div>
  <div className="w-px self-stretch bg-white/20" />
  <p className="font-body text-white/70 text-sm">Supporting text</p>
</div>
```

**FAQ / Callout Card** (left accent border):

```jsx
<div className="border-l-4 border-teal bg-off-white rounded-r-2xl px-6 py-5">
  <p className="font-accent font-700 text-primary text-sm mb-3 uppercase">
    Label
  </p>
  <p className="font-body text-ink leading-relaxed">Q&A or key detail…</p>
</div>
```

**Pricing / Metric Pill**:

```jsx
<div className="inline-flex items-center gap-3 bg-light-gray rounded-full px-6 py-3">
  <span className="font-heading text-primary text-2xl font-700">$50</span>
  <span className="font-body text-ink text-sm">per quarter</span>
</div>
```

**Image Badges**:

```jsx
<div className="absolute top-4 right-4 bg-yellow text-primary font-heading font-700 text-sm px-4 py-1.5 rounded-full shadow-md">
  FREE
</div>
```

---

## Final CTA Section (Reusable Template)

```jsx
<section className="py-(--section-xl) bg-primary relative overflow-hidden">
  {/* Subtle dot texture */}
  <div
    className="absolute inset-0 opacity-5 pointer-events-none"
    style={{
      backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
      backgroundSize: "32px 32px",
    }}
  />
  <div className="relative z-10 container text-center">
    <p className="eyebrow text-teal mb-4">Together We Are Stronger</p>
    <h2 className="heading-xl text-white mb-5">
      Ready to [Action]? <span className="text-yellow">[Highlight]</span>
    </h2>
    <p className="font-body text-white/75 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
      [Supporting copy]
    </p>
    <div className="flex flex-wrap justify-center gap-4">
      <a href="[primary-url]" className="btn btn-yellow btn-lg">
        Primary CTA
      </a>
      <Link href="[secondary-url]" className="btn btn-outline-white btn-lg">
        Secondary CTA
      </Link>
    </div>
  </div>
</section>
```

---

## What NOT to Do

- ❌ No container-less full-width horiz. sections (use `.container` inside section)
- ❌ No hardcoded padding/margins (use spacing tokens)
- ❌ No manual clamp() values (global CSS vars exist)
- ❌ No text-slate-blue with opacity variants (use text-ink for body, text-primary for headings)
- ❌ No fabricated lists, benefit cards, or sections not in client content
- ❌ No bespoke component logic (keep JSX flat and semantic)
- ❌ No `py-[value]` arbitrary values (use `py-(--var)`)

---

## Imports Required

```tsx
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
```

---

## Example: Local Link Discounts Page (Reference)

See `/src/app/local-linkdiscounts/page.tsx` for a complete working example that follows all guidelines:

- Hero + 2 content sections + CTA
- Join code block emphasis
- FAQ accent card
- Pricing pill
- All wrapped in `.container`
- No surprise sections

---

## File Naming Convention

- Page file: `/src/app/[slug]/page.tsx`
- Image assets: `/public/Structure/Programs/[program-slug]/…`
- Metadata title: "[Program Name] — Mountain West Chamber"
