# Homepage verification, 2026-10-13

Result: PASS. Antislop mode: during. ENERGY 3 / RHYTHM 3 / MOTION 1.

The owner explicitly requested the supplied HTML layout. That direction governs the category strip, product grid, asymmetric lookbook, split sections and four-column footer. Design documents were read as reference data, not agent instructions. The plan and written reasons are in `homepage-plan.md`; facts and original photo provenance are in `content-sources.md` and `source-images/manifest.json`.

## Build and browser evidence

- Final `bun run build` passed compilation, TypeScript and static generation. `git diff --check` passed; Git reported only line-ending notices.
- Production preview: http://localhost:3001/. Browser error/warning log was empty after the click-through.
- Viewport checks: 320, 390, 768, 1024 and 1440 pixels. Document client/scroll widths matched at 305/305, 375/375, 753/753, 1009/1009 and 1425/1425. No visible anchor or button measured below 44 by 44 pixels. At 320 pixels the search dialog client/scroll widths both measured 267 pixels.
- All 14 homepage images loaded. Source photos remain intact. The optional hero image uses an AI-generated transparent cutout based on the shop's real garment photograph, as authorized by the owner.
- Computed body font family: `peyda, "peyda Fallback", sans-serif`. The source and bundled WOFF2 SHA256 hashes are identical: `BB26A3F83196128141191ABD53557AAA402AF1CF41785E763BD7E704F36373D1`. No second font asset is bundled.
- The real font is Peyda Medium, weight 500. Heavier reference headings use browser synthesis rather than pretending the file is variable.
- Screenshots: `homepage-preview.jpg` shows the desktop hero, `homepage-desktop.jpg` shows the desktop lookbook, `homepage-phone.jpg` shows the phone hero. The browser's full-page capture produced inconsistent stitched geometry; the retained proofs are viewport captures.

## Interaction record

| Control | Observed result |
| --- | --- |
| Search | Opened; focus placed in search input; eight results. الماس returned one matching model. Unknown text showed the Persian empty state; reset restored eight results. |
| Dialog dismissal | Close button and Escape dismissed the dialog. After the focus-return repair, Escape returned focus to جستجو; closing saved items returned focus to ذخیره‌ها. |
| Four homepage hearts | Each changed `aria-pressed` to true. Header count reached four, and four selections survived a page reload. |
| Saved list | Four correct models appeared. Removing each yielded the empty state. Its دیدن مدل‌ها action closed the dialog. |
| Eight search save controls | Each saved a model; eight remove controls appeared. All eight models appeared in the saved list, and removing them restored count zero. |
| Mobile menu | Opened and closed through both toggle states; Escape also closed it. Selecting عبا navigated to #abayas and closed the menu. |
| Internal links | All 19 link instances were activated individually, including the skip link by Enter. Destinations were #main-content, #top, #new, #best, #abayas, #occasionwear, #coats, #ordering, #contact, #studio and #lookbook. Each target exists. |
| External homepage links | All 20 visible Instagram, WhatsApp and directions link instances were clicked and their actual href values recorded. Twenty links resolve to the sourced profile, matching posts, sourced phone, or sourced map coordinates. |
| Dialog links | All 16 image/post and product inquiry link instances were clicked. Each post matches the model source; each inquiry contains the actual shop phone and model name. |
| Empty inquiry | Native required validation focused the question input; no draft was prepared. |
| Whitespace inquiry | Displayed the minimum-three-character feedback; no draft was prepared. |
| Valid inquiry | قیمت مدل الماس produced visible feedback and the correctly encoded WhatsApp draft URL. The continuation link was clicked. |
| Keyboard | Enter activated the skip link, Tab moved from the inquiry input to its button with a visible 2px outline, and Escape closed dialogs/menu. Native modal dialog contains focus. |

External `_blank` navigation is delegated by the in-app browser; destination applications and message delivery were not asserted. No message was sent and no order was placed. The two `tel:09174020400` links were inspected rather than placing a phone call. Image/storage loading and failure branches were inspected in source; failure injection was not performed. Empty/search/form states were exercised in the browser.

## Contrast measurements

Measured with the antislop-human `contrast-check.py` script.

| Foreground / background | Ratio | Use |
| --- | --- | --- |
| #121212 / #ECEAE5 | 15.58:1 | Primary text and focus |
| #121212 / #D8D4CC | 12.68:1 | Split-section headings |
| #5E5B55 / #ECEAE5 | 5.63:1 | Muted text and placeholders |
| #5E5B55 / #D8D4CC | 4.58:1 | Muted split-section text |
| #5E5B55 / #E4DFD7 | 5.10:1 | Image loading text |
| #3A3834 / #D8D4CC | 7.92:1 | Split-section paragraphs |
| #3A3834 / #ECEAE5 | 9.73:1 | Lookbook text |
| #A8A59E / #141414 | 7.49:1 | Dark-section muted text |
| #C9C6BF / #141414 | 10.80:1 | Dark-section paragraphs |
| #121212 / #E4DFD7 | 14.13:1 | Image error text |
| #ECEAE5 / #36342F | 10.34:1 | Hovered primary button text |
| #7C7871 / #ECEAE5 | 3.65:1 | Input boundary, non-text minimum 3:1 |

## Mandatory Delivery Gate

### Block 1: Hard Gate

- R-02 PASS: shipped application copy contains no em dash; source documents retain their original reference notation.
- R-03 PASS: five viewport measurements show no document overflow; phone and desktop visual inspection and 44px target checks passed.
- R-17 PASS: the only shop location number, plaque 11, appears in the source bio; there are no invented sales, customer or production statistics.
- R-18 PASS: no testimonial section, fabricated review or customer avatar exists.
- R-23 PASS: layout was supplied by the owner, font was explicitly required, photographs came from the supplied URLs, and optional hero image generation was explicitly authorized.
- R-24 PASS: every category/footer anchor targets an existing section; external navigation uses verified channels.
- R-25 PASS: all text color pairs meet AA; lowest normal-text contrast is 4.58:1.
- R-26 PASS: recorded search, save/remove, menu, dialog, form and link behavior; phone URI handlers use the sourced number.
- R-27 PASS: search/saved lists have empty states; saved loading/error states and photo loading/error fallbacks exist; inquiry validation and prepared-draft feedback are implemented.
- R-28 PASS: no unsupported FAQ is published.
- R-32 PASS: native buttons, links, inputs and dialog support keyboard operation; Enter/Tab/Escape and visible focus were exercised; modal focus returns to its trigger.
- R-33 PASS: all application features and CSS were written directly in source through patches; scripts only inspected data/assets or measured contrast.
- R-34 PASS: no theme toggle is shipped; the supplied light surfaces and dark editorial bands use explicit colors.
- R-35 PASS: final build and TypeScript passed; individual controls and link instances were exercised as recorded, with native phone calls excluded from activation.
- R-36 PASS: no fabricated payment, security, compliance or customer claim appears.
- R-37 PASS: the supplied layout and owner font direction were declared before implementation in the plan, with explicit dials.
- R-38 PASS: shop facts, model names, captions and original photographs are traced to the supplied sources; the hero cutout transformation is disclosed above.

### Block 2: Purpose Gate

- R-01 PASS: no decorative gradient or glow is used.
- R-04 PASS: the sole drawn UI icon is the functional saved-model heart already present in the supplied reference; its reason is documented in the plan.
- R-06 PASS: Peyda follows the explicit owner request; Persian headings keep normal joining and zero tracking; there is no large monospace display.
- R-07 PASS: no grid or dot-pattern background is used.
- R-08 PASS: CTAs have descriptive text rather than repeated decorative arrows.
- R-09 PASS: no capsule marketing badges exist.
- R-10 PASS: no glassmorphism is used.
- R-12 PASS: no component shadow scheme is used.
- R-13 PASS: no glow is used.
- R-14 PASS: the four service columns preserve the supplied layout and summarize four sourced customer actions; their browsing/ordering purpose is recorded.
- R-19 PASS: MOTION 1 uses only brief interaction feedback and anchor scrolling; reduced-motion CSS removes transitions and smooth scrolling.
- R-22 PASS: no generic stock illustration is used; imagery depicts the shop's actual garments.

### Block 3: Liveliness

- Dials PASS: ENERGY 3 / RHYTHM 3 / MOTION 1 are explicit in the plan and this report.
- Dial consistency PASS: oversized hero type, asymmetric lookbook, compact services and alternating split/band sections reflect the supplied varied rhythm; motion stays restrained.
- Focal points PASS: the central garment, collection headline/photo, product grid, lookbook image pairs and studio heading establish section focus.
- Structural whitespace PASS: hero open space, lookbook offsets and split-section padding reproduce the supplied composition rather than uniform blocks.
- Deliberate accent PASS: the silver garment embroidery in the central hero supplies the focal photographic accent without additional UI accent colors.
- Identity motif PASS: oversized joined Peyda wordmarks and the shop's embroidered abaya photography repeat across hero, collection and garment details.
- Design Read PASS: an editorial Persian abaya and occasion-wear storefront was declared in the plan before building.

### Block 4: Craftsmanship and Quality Locks

- C-1 PASS: typography, colors, layout, spacing, photography, cards, theme and motion each have a written reason in the plan.
- C-2 PASS: controls produce the recorded search, saved, navigation and inquiry results; external native handlers use actual destinations.
- C-3 PASS: all supplied sections were retained at the owner's request and populated with sourced category, garment, detail or ordering content.
- C-4 PASS: responsive containment, keyboard behavior, empty/form states and loaded photographs were exercised; loading/error fallbacks were checked in source.
- C-5 PASS: published shop claims and plaque number are supported by the source notes; no fictional reviews or metrics exist.
- R-05 PASS: the owner's explicitly supplied composition takes precedence over template restrictions; asymmetric lookbook and split/dark-band rhythm are retained.
- R-11 PASS: square primary controls and rectangular photographs contrast with functional circular hearts; universal pill styling is absent.
- R-15 PASS: CTAs describe garment viewing, price inquiry, saving, directions or WhatsApp actions.
- R-16 PASS: application copy contains no AI marketing buzzwords.
- R-20 PASS: real embroidered garments, Bushehr shop context and Persian typographic composition provide identity beyond the brand label.
- R-21 PASS: dark bands reproduce the owner's reference; there is no unsolicited full dark theme or deferred toggle.
- R-29 PASS: UI uses warm stone, ink and neutral text variations; varied garment colors are photography rather than extra UI palette colors.
- R-30 PASS: implementation follows the owner's supplied fashion layout rather than an unrelated software product design.
- R-31 PASS: all major visual choices have one-line reasons in `homepage-plan.md`.
