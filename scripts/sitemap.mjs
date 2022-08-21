import env from '@next/env';
import dayjs from 'dayjs';
import { writeFileSync } from 'fs';
import prettier from 'prettier';
import { allPosts } from '../.contentlayer/generated/index.mjs';
import json from '../.next/routes-manifest.json';

(async () => {
  env.loadEnvConfig(process.cwd());

  const statics = json.staticRoutes.map((r) => r.page);
  const dynamics = allPosts.map((p) => `/blog/${p.slug}`);
  const lastmod = dayjs().toISOString();

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
      ${[...statics, ...dynamics]
        .map(
          (route) => `
            <url>
              <loc>${process.env.NEXT_PUBLIC_DOMAIN}${route}</loc>
              <lastmod>${lastmod}</lastmod>
              <changefreq>daily</changefreq>
              <priority>0.7</priority>
            </url>
          `,
        )
        .map((url) => prettier.format(url, { parser: 'html' }))
        .join('')}
    </urlset>
  `;

  const formatted = prettier.format(sitemap, { parser: 'html' });
  writeFileSync('./public/sitemap.xml', formatted);
})();
