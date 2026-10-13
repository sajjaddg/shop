# SABLE storefront design reference

Source: [SABLE · Fashion that moves with you](https://sable-fashion-39.aura.build/)  
Captured: 2026-10-13

## Overview

SABLE is a premium, editorial menswear storefront for limited-run autumn collections. Its visual identity is monochrome and tactile: warm paper-like backgrounds, near-black type, quiet gray utility copy, and large fashion photography. The page pairs assertive oversized typography with generous open space and small, widely tracked labels.

This is a visual reconstruction reference. Colors and sizing below are approximate where marked: the storefront is rendered inside a hosted preview, and its generic host CSS variables do not represent the storefront palette.

## Page structure

1. **Announcement strip** — black full-width band with compact uppercase service messages separated by slashes: limited runs, shipping, and returns.
2. **Header** — pale neutral navigation bar. Category links sit left, centered SABLE wordmark, and search/account/bag utilities right. A fine divider separates it from the page.
3. **Hero** — oversized SABLE wordmark sits behind a cutout-style model image. A small three-line editorial phrase anchors the upper left; season label sits lower right. Primary filled and secondary underlined calls to action sit at the lower left.
4. **Category cards** — three editorial entry points for outerwear, knitwear, and tailoring, each combining imagery, category label, short description, and a shop link.
5. **New season feature** — split editorial block with a large “NEW VIBES” headline, concise collection copy, link, and portrait image.
6. **Service promises** — four compact benefits: fast delivery, easy returns, made to last, and secure payment.
7. **Featured products** — “BEST OF SABLE” heading, view-all link, and a four-column product grid with imagery, save control, add-to-bag action, product name, category, and GBP price.
8. **Lookbook** — autumn 2026 photo story with a short editorial introduction and three numbered looks.
9. **Materials** — “THREE CLOTHS, ALL SEASON.” feature with wool, cotton, and lambswool specifications alongside a fabric macro image.
10. **Studio story** — photography, studio narrative, and three production facts (11 people, 42 styles a year, 120 units per run).
11. **Newsletter and footer** — centered signup form above a three-column footer for brand/contact, shop, help, and studio links.

## Visual system

### Color

- **Canvas:** warm off-white / light stone, used as the dominant page and header surface.
- **Ink:** almost-black for headlines, wordmark, primary buttons, and the announcement strip.
- **Secondary text:** soft neutral gray for descriptions, service details, and footer metadata.
- **Rules and inputs:** subtle warm-gray hairlines; borders stay low contrast.
- **Photography:** charcoal, black, concrete, and natural textile tones carry most of the visual color.

Use the values in [`tokens.json`](./tokens.json) as a practical starting point. They are visual estimates from the rendered page rather than a claim about the original source tokens.

### Typography

- Use the owner-supplied `public/fonts/peyda.woff2` as the primary family throughout the shop, including navigation, headings, body copy, and controls. The source storefront used Inter; the supplied Persian HTML used Peyda with a fallback.
- Headlines are bold to extra-bold, uppercase, compact, and often very large; the hero wordmark is the most dominant typographic element.
- Utility navigation, eyebrow labels, and buttons use uppercase text with generous tracking.
- Body copy is restrained, regular-weight sans with a muted tone and comfortable line height.
- The SABLE wordmark uses a bold uppercase sans treatment with conspicuous tracking.

### Layout and spacing

- Use a full-width editorial composition with clear section breaks and substantial vertical breathing room.
- Keep the desktop header aligned to a three-part grid: categories, centered brand, utilities.
- Use wide image crops and asymmetrical pairings rather than placing every section in identical cards.
- Product cards are image-led and use concise metadata below each image.
- Limit decorative chrome: square corners, thin rules, minimal shadows, and simple underlines.
- At narrower widths, collapse the navigation and product grid, stack editorial split sections, and keep headings from overflowing. Preserve the order of image and copy intentionally for each story.

## Component guidance

- **Primary button:** black fill, light uppercase label, modest padding, square or nearly square corners.
- **Text link:** dark uppercase label with a fine underline or a simple arrow; avoid pill styling.
- **Product card:** image first; save control over the image; add-to-bag affordance; name, category, and price in a compact text block.
- **Input:** transparent or canvas fill, thin neutral border, understated placeholder; pair with a solid primary button.
- **Section heading:** oversized uppercase title paired with a small, tracked eyebrow where useful.
- **Footer:** brand/contact block plus grouped link columns, separated from legal metadata by a fine horizontal rule.

## Interaction and accessibility notes

- Keep all text and controls legible against the pale canvas and the black announcement strip.
- Do not rely on image or color alone to identify products, categories, or actions; retain descriptive labels and meaningful alternative text.
- Make save, search, account, bag, and add-to-bag controls keyboard reachable with visible focus styling.
- Give the email field a persistent accessible label; the placeholder alone is not a label.
- Respect reduced-motion preferences for any marquee or image reveal effects. Motion should remain secondary to the editorial content.

## Source observations

The page copy identifies the collection as Autumn 2026 and describes SABLE as a small-run studio making clothing on Redchurch Street in London. The page presents outerwear, knitwear, tailoring, a 42-piece featured catalog, a lookbook, fabric details, studio facts, and newsletter signup. The live screenshot showed the hero and newsletter/footer in a warm neutral palette; exact computed storefront values were not exposed by the hosting preview, so the color values are documented as approximations.
