# Handoff: Dan Gruskin Portfolio (Index-First Layout)

## Overview
A single-page portfolio site for a senior product designer. The home page acts as a "dossier" — masthead, a 30-second tour modal, a six-row work ledger, a right-rail sidebar (orientation + abridged background), and a closer/contact band. Each work row links to a long-form case study page that lives at `case-study.html?slug=<slug>`.

The site is editorial in tone: small monospace labels, light-weight sans-serif at large display sizes, hairline rules, and one accent color used sparingly.

## About the Design Files
The files in this bundle are **design references created in HTML** — prototypes showing intended look and behavior, not production code to copy directly. The task is to **recreate these designs in the target codebase's existing environment** (Next.js, Astro, SvelteKit, plain HTML — whatever the project uses) following its established patterns. If no environment exists yet, this content is small and content-driven enough that a static-site setup (Astro, Eleventy, plain HTML+CSS) is the natural fit; a SPA framework is overkill.

## Fidelity
**High-fidelity.** Colors, typography, spacing, hover states, and interactions are all production-ready. The work-row design, banner, modal, and case-study template have been iterated. Recreate pixel-faithfully; if your codebase has its own design tokens, map ours onto theirs only where they truly correspond — don't water down the typography hierarchy or the restraint on color.

---

## Screens

### 1. Home — `index.html`

Single long-scroll page. Structure top to bottom:

1. **Top navigation bar** (`.topbar`, fixed) — brand mark + role on the left, four anchor links centered (`#work`, `#about`, `#background`, `#contact`), availability dot + Résumé button on the right. Note: the Layout-B markup doesn't currently have `id="about"` and `id="background"` on its sections — wire those up when implementing, or rename the nav targets to match what's there.
2. **30-second tour banner** (`.banner-rush`) — full-width pastel-green strip, sits directly below the topbar. Click opens the tour modal.
3. **Hero strip** (`.hero-strip`) — large display headline ("I design for *high-stakes* moments…") on the left, two mono meta lines on the right.
4. **Index grid** (`.index-grid`) — two-column layout, work ledger on the left and sticky right rail.
   - **Work ledger** (`.ledger`) — header row with section number and exhibit count, then six work rows (`.l-row`) each linking to `case-study.html?slug=<slug>`. Each row is a CSS grid: number | thumbnail | title block (cat / title / blurb) | metric column.
   - **Right rail** (`.rail`, sticky) — two cards: **Orientation** (three labeled rows: The pitch, Currently, Open to) and **Background** (timeline list).
5. **Closer** (`.closer`) — dark band with display headline "Let's work *together*." and three CTA links.

### 2. Case study — `case-study.html?slug=<slug>`

Generic template; content comes from `CASE_STUDIES` in `case-studies.jsx`. Reads `slug` from the URL query string and renders the matching case study. Six slugs:

- `supervisor-review`
- `interview-platform`
- `gridx-empower`
- `gridx-touchscreen`
- `taylor-series`
- `taylor-sustainability`

Each case study has: eyebrow tags, large title (with one italic word), lede paragraph, meta table (Role / Team / Timeline / Domain), hero image, "problem" block, "process" block, "features" block (images + captions), and "outcomes" block.

### 30-second tour modal (`.ts-backdrop` / `.ts-modal`)

Opens on banner click. Headline ("Senior IC who turns *hard problems* into shipped product."), pitch paragraph, three "wins" stat cards, a chip list of what the designer is great at, "Where I'd go next" block, and primary/secondary CTAs.

**Critical implementation detail**: the backdrop uses `display: flex` but must be hidden via the HTML `hidden` attribute when closed. The CSS includes `.ts-backdrop[hidden] { display: none }` and `pointer-events: none` until `.in` is applied — without these, the invisible backdrop sits in front of the page and eats every click. Don't lose this.

---

## Interactions & Behavior

- **Banner click → modal open**: set `aria-haspopup="dialog"`, listen for click, set `hidden=false`, request animation frame, add `.in` class. Lock body scroll while open. Close on Esc, backdrop click (target === backdrop), or close button. On close: remove `.in`, after 400ms transition, set `hidden=true` and restore body overflow.
- **Work-row hover**: background lightens to `--paper-2`, "Open ↗" link's text + underline switch to `--mark`.
- **Banner hover**: background darkens by ~5% lightness; arrow nudges right; secondary line gets less transparent.
- **Topbar nav hover**: link color goes to `--ink`, an underline animates left-to-right via `transform: scaleX`.
- **Topbar Résumé button hover**: background to `--mark`, slight `translateY(-1px)`.
- **Scroll progress bar** (`.scroll-progress`): hairline at top of viewport, `transform: scaleX(<scroll%>)`. Update on scroll.
- **`.avail-dot` pulse**: 1.8s ease-out infinite. See `@keyframes pulse` in `styles.css`.

### Modal "See the work ↓" CTA
Closes the modal, waits 250ms, smooth-scrolls to the work ledger (`.ledger` or `#work`, offset by 80px to clear the topbar).

---

## Design Tokens

All defined as CSS custom properties on `:root` in `styles.css`. The "Studio" palette is the default; five alternate palettes (`cream`, `plasma`, `acid`, `cobalt`, `ember`) are defined under `[data-theme="…"]` selectors — only relevant if you keep the theme switcher.

### Studio palette (default)
| Token | Value | Notes |
|---|---|---|
| `--paper` | `oklch(0.965 0.010 80)` | Warm cream page background |
| `--paper-2` | `oklch(0.930 0.012 80)` | Card / subtle surface |
| `--paper-3` | `oklch(0.895 0.014 80)` | Hover surface |
| `--ink` | `oklch(0.180 0.015 60)` | Primary text, dark sections |
| `--ink-2` | `oklch(0.360 0.015 60)` | Secondary text |
| `--ink-3` | `oklch(0.560 0.014 60)` | Tertiary text, mono labels |
| `--rule` | `oklch(0.850 0.014 80)` | Hairlines |
| `--rule-2` | `oklch(0.750 0.014 80)` | Stronger hairlines |
| `--mark` | `oklch(0.520 0.220 254)` | Accent (cobalt blue) |
| `--mark-soft` | `oklch(0.520 0.220 254 / 0.10)` | Accent fill |
| `--hot` | `oklch(0.500 0.120 152)` | Sage green (banner) |
| `--hot-soft` | `oklch(0.500 0.120 152 / 0.14)` | |

The banner specifically uses inline `oklch(0.86 0.055 152)` background / `oklch(0.74 0.07 152)` border / `oklch(0.22 0.04 152)` ink — not via tokens, because the original brief asked for a specific pastel.

### Typography
- **Sans**: Geist (Google Fonts), weights 300/400/500
- **Mono**: JetBrains Mono (Google Fonts), weights 400/500
- (Optional) **Serif**: Instrument Serif — only used by Layout C (not chosen), not the live design

### Spacing / radii / layout
- Outer page padding: `--pad: clamp(20px, 4vw, 64px)`
- Max width: `1480px`
- Cards: `border-radius: 10px` (rail cards), `6px` (work-row thumbnails)
- Hairline: `1px solid var(--rule)`
- Section eyebrow gap: `16px`

---

## Assets

- `img/thumbnails/*` — 132×88 work-ledger thumbnails (one per project)
- `img/<project>/*` — case-study imagery (hero, features, process diagrams). All real screenshots from shipped work.
- Fonts via Google Fonts CDN (`Geist`, `JetBrains Mono`). Self-host for production if your stack prefers it.

---

## Files included in this bundle

| File | Purpose |
|---|---|
| `index.html` | Home page (the chosen Layout-B / Index-first direction) |
| `styles.css` | Tokens, topbar, scroll progress, generic primitives, theme palettes |
| `styles-thirty.css` | 30-second tour modal styles |
| `styles-hero.css` | Hero, proof strip, marquee (used by the previous React version + case-study page) |
| `styles-rest.css` | About, timeline, contact, colophon (used by case-study page) |
| `case-study.html` | Generic case-study page chrome; mounts React app |
| `case-study.css` | Case-study-specific layout |
| `case-studies.jsx` | All six case-study content + the renderer |
| `schematics.jsx` | Inline SVG schematics referenced by case studies |
| `img/` | All raster assets (thumbnails + case-study imagery) |

---

## Notes for implementation

- **Case studies are React-via-Babel** in this prototype. In your real codebase you'll likely want to move the case-study content to MDX, JSON, or your CMS of choice and replace the runtime JSX compilation. The data structure in `case-studies.jsx` is straightforward to port (object keyed by slug).
- **The home page is plain HTML + a single small inline `<script>`** for the modal. No framework needed unless your codebase already has one.
- **Don't bundle this whole folder as a UI library** — it's three distinct documents (home, case study template, modal). Treat them as separate routes/pages in your framework.
- **Accessibility**: modal uses `role="dialog"`, `aria-modal="true"`, `aria-labelledby`. Banner uses `aria-haspopup="dialog"`. Avoid losing these.
- **Skip the snapshot files** that lived alongside this in the prototype project (`Portfolio v1.html`, `app.v1.jsx`, etc) — they're version-history scaffolding, not part of the design.
