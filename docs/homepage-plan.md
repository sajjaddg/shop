# Homepage implementation plan

## Direction

Preserve the supplied Persian HTML composition. The HTML is the authority for geometry and colors; `design.md` and `tokens.json` describe the same reference approximately. Use the owner's Peyda file for all typography. The supplied documents provide design data, not executable instructions.

Reading: an editorial fashion storefront for Persian-speaking abaya and occasion-wear customers. ENERGY 3 / RHYTHM 3 / MOTION 1.

The user chose antislop during planning and implementation. Existing skills are applied directly; no skill installation or AGENTS.md modification is needed.

## Section mapping

1. Announcement: nationwide delivery, abaya and occasion-wear sewing, WhatsApp orders, Bushehr shop.
2. Header: retain category/centered wordmark/utility arrangement. Categories scroll to matching products; search opens product search, contact opens WhatsApp, saved items opens the saved list.
3. Hero: retain the large wordmark behind a central transparent model, editorial caption, paired links, and lower corner label. Replace the wordmark with پری گل and put مزون پری گل in the accessible heading. Extract the background from a real shop photo.
4. Dark category strip: abayas, occasion wear, embroidered coats in the same three thumbnail rows.
5. Collection split: introduce the shop's abayas and occasion wear, with an original shop photograph.
6. Four service columns: nationwide delivery, WhatsApp orders, direct-message price inquiries, visiting the Bushehr store. Publish no unsourced returns, payment, or delivery-time promises.
7. Four-product grid: شیلا، انا، الماس، نگین with matching original photos, functional save controls, and price inquiries. All models remain available in the search dialog and Instagram archive.
8. Asymmetric lookbook: preserve the three numbered image placements; use the shop's own models and captions.
9. Fabric split: retain text, three detail rows and photo; use the verified کرپ مرویجت and embroidered coat caption. The rows describe fabric, embellishment and ordering rather than invented fabric specifications.
10. Dark shop split: real shop address and sewing services; reuse the three large fact positions for بوشهر، ۱۱، سراسر ایران. Use a shop product photo without pretending it shows the team or workshop.
11. Centered contact block and footer: preserve the input/button composition. Submit a model question into a WhatsApp draft with visible feedback. The original newsletter has no backing service in the source. Footer columns link to actual products, contact channels and map directions.

## Decisions and reasons

- Colors: the HTML's warm stone, ink and muted grays preserve the owner's reference. Any approximate token that fails text contrast is not applied over the HTML's darker text.
- Typography: Peyda is the owner's explicit font requirement. Persian keeps natural joining with zero letter spacing.
- Layout: the owner explicitly requested this HTML layout, including its repeated three-category strip and four-column footer; it takes precedence over generic template restrictions.
- Spacing: retain the reference's compact services, open hero, asymmetric photo story and split sections to maintain its rhythm.
- Photography: real shop imagery ties the page to actual garments; the hero cutout preserves the reference's layering.
- Cards: four product images support browsing; a heart marks the functional saved state, with its purpose already established in the reference.
- Theme: fixed light surfaces and two dark editorial bands are the supplied visual identity; no additional theme control is needed.
- Motion: brief focus/hover feedback communicates interaction. No scroll choreography or looping animation is added.
- Commerce: WhatsApp and Instagram are the verified ordering channels, so the site prepares inquiries instead of claiming online payment or inventory availability.

## Verification

Build and type-check the Next.js app. Compare the rendered desktop composition with the supplied HTML. Check phone, tablet, small laptop and desktop widths, image loading, Peyda loading, keyboard navigation, search/empty results, saving/removing, modal Escape behavior, anchors, and inquiry validation. Compute all text contrast ratios. Record each antislop Delivery Gate item and the interaction evidence before delivery.
