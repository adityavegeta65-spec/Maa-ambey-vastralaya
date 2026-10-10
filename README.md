# Maa Ambey Vastralaya

Single-page website. Open index.html in a browser, or upload to Vercel / GitHub Pages / Netlify.

## Cloudflare Pages

- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`

The build copies the standalone page into `dist/`; there are no runtime dependencies.

## Cloudflare Workers

The Wrangler config serves only the tracked `worker-assets/` folder, so Wrangler never scans or uploads `node_modules`. It contains the page at checkout, so deploy works even before a build step; `npm run build` also syncs it from `index.html`. Deploy with `wrangler deploy`.

To add real photos, update the image URL in the 3rd item of each C (category) row in index.html. Product cards currently reuse those category reference images; replace the product-to-category mapping when actual product photos are available.
WhatsApp number is set in the N constant.
