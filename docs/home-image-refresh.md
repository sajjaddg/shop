# Homepage image refresh, 2026-10-13

The user requested regeneration of every homepage image with backgrounds matching the existing UI, and supplied a black-and-gold abaya photo for the collection beside «عبا و لباس مجلسی».

Built-in image_gen produced 11 distinct images. Ten use warm stone studio backdrops based on the actual canvas color, #ECEAE5; the hero keeps transparent alpha for the existing wordmark layering. Original source assets remain available. The installed assets and full prompts are listed in `home-image-prompts.json`; final images live in `public/images/home/`.

The shared Photo component now uses the new directory so homepage, search and saved-image placements stay consistent and avoid the original optimized-image cache. Collection and studio photos use top-aligned crops to keep faces visible. The lookbook caption identifies the images as AI-regenerated source photos, and the studio alt text describes the new background.

## Verification

- Production build passed compilation, TypeScript and static generation.
- All 14 homepage image placements loaded successfully; no failed image elements.
- Search opened with eight products, and all eight regenerated dialog images loaded. Searching «الماس» returned its matching product, and the close button dismissed the dialog.
- Desktop at 1440px: document client and scroll widths both 1425px. Phone at 390px: both 375px. No horizontal overflow.
- Visually inspected desktop product grid and collection; phone collection and studio. Verified the user-supplied replacement and corrected top-aligned crop.
- Browser warning/error log was empty.
- Installed files verified as actual JPEGs, with the hero verified as a PNG containing alpha. JPEG conversion used Sharp at quality 92.
- Existing typography, section composition, garment-based color accents, links and controls were retained. This is an asset refresh; broader interaction checks remain in the original `verification.md` report.

AI regeneration can vary fine embroidery and facial details. Prompts preserve the source garments and models, and originals remain available for comparison.
