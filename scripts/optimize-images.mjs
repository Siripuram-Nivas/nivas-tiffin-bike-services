/**
 * One-off asset optimizer. Requires `sharp` (installed with --no-save).
 * Usage: node scripts/optimize-images.mjs
 * Outputs responsive WebP variants into public/img/.
 */
import { mkdir } from 'node:fs/promises';
import sharp from 'sharp';

const out = 'public/img';
await mkdir(out, { recursive: true });

const assets = [
  { name: 'tiffin-spread', src: 'assets-src/tiffin_hero_food_1778318760478.png', widths: [640, 1024] },
  { name: 'chicken-curry-meals', src: 'assets-src/chicken_curry_meals_1778318885696.png', widths: [480, 800] },
  { name: 'mirchi-bajji', src: 'assets-src/mirchi_bajji_card_1778318867371.png', widths: [480, 800] },
  { name: 'punugulu', src: 'assets-src/punugulu_snacks_1778318929255.png', widths: [480, 800], crop: { left: 0, top: 40, width: 1024, height: 545 } },
  { name: 'kara-boondhi', src: 'assets-src/kara_boondhi_1778320236218.png', widths: [480, 800] },
  { name: 'jonna-rotte', src: 'assets-src/jonna_rotte_1778320253761.png', widths: [480, 800] },
];

for (const { name, src, widths, crop } of assets) {
  for (const width of widths) {
    let img = sharp(src).rotate();
    if (crop) img = img.extract(crop);
    await img
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 78, effort: 6 })
      .toFile(`${out}/${name}-${width}.webp`);
  }
}

await sharp('assets-src/nivas_logo_1778318840012.png')
  .resize({ width: 192, height: 192, fit: 'cover' })
  .webp({ quality: 82 })
  .toFile(`${out}/logo-192.webp`);

await sharp('assets-src/nivas_logo_1778318840012.png')
  .resize({ width: 64, height: 64, fit: 'cover' })
  .png()
  .toFile(`${out}/favicon-64.png`);

await sharp('assets-src/nivas_logo_1778318840012.png')
  .resize({ width: 180, height: 180, fit: 'cover' })
  .png()
  .toFile(`${out}/apple-touch-icon.png`);

await sharp('assets-src/tiffin_hero_food_1778318760478.png')
  .resize({ width: 1200, height: 630, fit: 'cover', position: 'centre' })
  .jpeg({ quality: 80, mozjpeg: true })
  .toFile(`${out}/og-cover.jpg`);

console.log('Optimized images written to', out);
