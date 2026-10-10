# Maa Ambey Vastralaya

Single-page website. Open index.html in a browser, or upload to Vercel / GitHub Pages / Netlify.

## Cloudflare Pages

- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`

The build copies the standalone page into `dist/`; there are no runtime dependencies.

## Cloudflare Workers

The Wrangler config serves only `dist/` as static assets, keeping build tools and `node_modules` out of the upload. Run `npm run build` before `wrangler deploy`.

To add real photos, update the image URL in the 3rd item of each C (category) row in index.html. Product cards currently reuse those category reference images; replace the product-to-category mapping when actual product photos are available.
WhatsApp number is set in the N constant.
