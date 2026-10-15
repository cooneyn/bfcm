# Wide Fit Shoes — Design System

## Overview
**Wide Fit Shoes** (widefitshoes.co.uk) is a UK-based ecommerce brand specialising in footwear in wide fittings for both men and women. They operate on **Shopify** and carry a broad range of branded shoes (New Balance, etc.) as well as own-label products. Their key value proposition is specialist wide fitting expertise.

- **Website:** https://www.widefitshoes.co.uk/
- **Platform:** Shopify
- **Phone:** 020 8907 1742

## Sources
- **Figma:** "Wide Fit Shoes Design System.fig" (attached — 42 pages, 151 top-level frames)
  - Covers: Foundations (Colours, Typography, Icons, Logos), Shared Components (Buttons, Badges, Inputs, Section Headings), Website Components (Navigation, Breadcrumbs, Footers, Hero, Product Cards, Collection, Reviews, Video, FAQ, Promos, Blog, Map, Contact, Newsletter), and Page Designs (Desktop, Mobile, Landing Pages)
- **Logos uploaded:** `uploads/wfs-logo-blk-transparent.png`, `uploads/wfs-logo-white-trans.png`, `uploads/Widefitlogo_Logos_new_white.jpg`

---

## CONTENT FUNDAMENTALS

### Tone & Voice
- **Confident, helpful, specialist.** WFS positions itself as the authority on wide-fit footwear — copy reflects expertise without being condescending.
- **Direct and action-oriented.** CTAs use imperative verbs: "Find your fit", "Shop Now", "Add to Bag".
- **Warm but not casual.** British English throughout (e.g. "colour", "bag" not "cart"). Friendly but professional.
- **First person is rare** — copy speaks directly to the customer ("Find *your* fit", "your perfect fit") rather than about the brand.

### Casing
- **Sentence case** for body copy, product descriptions, and most UI labels.
- **Title Case** for nav items (New In, Mens, Womens, Brands, Sale).
- **ALL CAPS** not used in the Figma design — avoid.

### Emoji
- **Not used** in the design system. No emoji in UI, copy, or badges.

### Key copy examples
- Hero CTA: "Find your fit"
- Nav links: "New In", "Mens", "Womens", "Brands", "Sale"
- Search placeholder: "Search Product or Brand"
- Utility bar: "020 8907 1742  |  Contact us"
- Currency selector: "United Kingdom (GBP £)"
- Badge copy: "Sale", width labels like "2E", "3E", "4E", "6E"
- Price display: "£149.99 £199.99  Save 25%" (original crossed out, then discounted)
- Product example: "Mens Wide Fit New Balance Walking Rollbar Stability Trainers - Exclusive"

### Numbers & Prices
- Always GBP with £ symbol, no space between symbol and number
- Sale savings shown inline: "£149.99 £199.99  Save 25%"

---

## VISUAL FOUNDATIONS

### Colors
**Brand Primary:** Forest Green `#3b7a45` (rgb 59,122,69) — used for all primary CTAs, badges, and brand accent.
- **700 = standard**, **900 = hover** (per Figma annotation)
- Hover: `#2c3d30` (rgb 44,61,48)
- Light surfaces: `#ebf3ed` (100), `#dfeae2` (200)

**Neutrals:**
- Page bg: `#f4f6f5` (near-white with green tint)
- Warm cream bg: `#fffcf5`
- Body text: `#322c2d` (warm near-black)
- Secondary text: `#3f4047`
- Muted/placeholder: `#737373`
- Border/divider: `#dedede`

**Semantic:**
- Error red: `#cf1b2b` with `#fee4e2` background
- Success green: `#00b67a` (also the Trustpilot green — intentional alignment)
- Yellow/highlight: `#ffcb3c`

**Backgrounds:** Predominantly white (`#fff`) and very light grey-green (`#f4f6f5`). Dark sections use pure black (`#000`). No gradient backgrounds.

### Typography
Four font families in play:

| Family | Usage | Weight | Notes |
|--------|-------|--------|-------|
| **Hanken Grotesk** | Primary UI — nav, labels, product names, body | 400, 600, 700 | Dominant font (278+204 uses) |
| **Apta Trial** | Display, headings, button text (md/lg), prices | 400, 500, 700 | Serif-adjacent editorial feel; **proprietary trial font** |
| **Lexend** | Small buttons, badges | 300, 500 | Clean geometric sans |
| **Sofia Pro** | Swatch labels, some small badges | 400, 700 | **Proprietary** |

- **Type scale:** 13px (utility) → 15px (body/button-sm) → 18px (button-lg/h4) → 22px (price) → 28px → 32px → 42–72px (display)
- **Letter spacing:** 0.02em on product titles and nav utility text
- **Line height:** 1.2 tight (display), 1.6 comfortable (body), 1.7 (small utility)

### Backgrounds & Imagery
- **Full-bleed photography** in hero images (1440×700px) with text overlaid at bottom-left
- **Square product images** (1:1) as primary format; 2:3 portrait used in collection lists
- Images are clean product shots — no lifestyle grain or texture overlays
- No decorative illustrations or patterns — photography only
- Warm, natural colour temperature in product photography

### Buttons
- **Primary:** Green bg (`#3b7a45`), white text, no border radius (sharp corners `border-radius: 0`)
- **Secondary:** White bg, black border
- **Link:** No background, coloured text only
- **Sizes:**
  - sm: 38px height, 16px h-padding, Lexend 500 15px
  - md: 55px height, 22px h-padding, Apta Trial 500 15px
  - lg: 54px height, 22px h-padding, Apta Trial 500 18px
- **Hover:** Darker green `#2c3d30`
- Icon buttons: same sizes, square, icon-only variant used in nav (account, heart, bag)

### Cards
- **No rounded corners** on product cards (sharp edges)
- **No card shadows** — products are displayed on plain white/light backgrounds
- Dividers within cards are `1px solid #dedede`
- Colour swatches: 20px circles, `border-radius: 50%`

### Borders & Radius
- **Sharp / 0px radius** on most interactive elements (buttons, product cards, search bars)
- `border-radius: 8px` on colour swatches display cards
- Inputs and search bars: no radius (square)

### Animation & Interactions
- No complex animations specified in Figma — clean, minimal transitions
- Hover states: colour darkening (green 700 → 900)
- No bounce or spring animations evident

### Iconography
- **Heroicons Outline** style — consistent 2px stroke weight, 24×24px default
- Large custom library (200+ icons) stored in Figma under `/Icons/components/`
- **3 custom WFS icons:** Waterproof, Removable Insoles, Lightweight — used on product feature badges
- Icons rendered as SVG inline or as `<img>` tags

### Spacing & Layout
- Desktop page padding: 80px left/right
- Mobile page padding: 16px
- Nav height: 160px (top bar 50px + sticky nav 110px)
- Section gaps: 60–80px
- Component internal gaps: 8–32px

### Navigation
- **Two colourways:** Light (white bg, black text) and Dark (black bg, white text)
- Top utility bar: phone number, currency selector (left and right)
- Sticky main nav: Logo (left 80px), Nav links (center), Search bar, Icon buttons (right)
- Mobile nav: Logo + icons (account/heart/bag/hamburger), Search bar below

---

## ICONOGRAPHY

WFS uses the **Heroicons Outline** icon set (https://heroicons.com/) as its primary icon library — all icons share a consistent 24×24px viewBox and ~2px stroke weight.

**Custom brand icons** (stored in `assets/icons/`):
- `waterproof.svg` — Waterproof product feature
- `removable-insoles.svg` — Removable insoles feature
- `lightweight.svg` — Lightweight feature (not in Figma VFS; use Heroicons `scale` as substitute)

**Copied icons** (in `assets/icons/`):
`heart.svg`, `shopping-bag.svg`, `shopping-bag-with.svg`, `chevron-down.svg`, `chevron-up.svg`, `chevron-left.svg`, `chevron-right.svg`, `account.svg`, `search-sm.svg`, `menu.svg`, `star.svg`, `truck.svg`, `tag.svg`, `x.svg`, `arrow-right.svg`, `arrow-left.svg`, `globe.svg`, `check.svg`, `location.svg`, `phone.svg`, `waterproof.svg`

No emoji. No unicode character icons. No icon fonts.

---

## FILES

```
README.md                        ← this file
colors_and_type.css              ← CSS design tokens (colors, type, spacing)
SKILL.md                         ← Agent skill definition
assets/
  logos/                         ← WFS logo variants (black, white)
  icons/                         ← SVG icon library (Heroicons outline + custom)
preview/                         ← Design System tab cards
  colors-brand.html
  colors-neutral.html
  colors-semantic.html
  typography-display.html
  typography-ui.html
  typography-buttons.html
  spacing-tokens.html
  components-buttons.html
  components-badges.html
  components-product-card.html
  components-nav.html
  brand-logos.html
  brand-icons.html
ui_kits/
  website/
    README.md
    index.html                   ← Homepage prototype (click-thru)
    Nav.jsx
    Hero.jsx
    ProductCard.jsx
    Footer.jsx
    CollectionGrid.jsx
```
