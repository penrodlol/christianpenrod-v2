'use client';

import env from '@env/client.mjs';
import { usePathname } from 'next/navigation';

const TITLE = 'Christian Penrod | Front-End Web Developer';
const DESC = 'Developing for the web since 2015, based in Pittsburgh PA.';

export interface SEOProps {
  title?: string;
  description?: string;
}

export const SEO = ({ title, description }: SEOProps) => {
  const pathname = usePathname();

  return (
    <>
      <title>{title ? `${title} | Christian Penrod` : TITLE}</title>

      <meta name="title" content={title ?? TITLE} />
      <meta name="description" content={description ?? DESC} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={`@${env.TWITTER}`} />
      <meta name="twitter:title" content={title ?? TITLE} />
      <meta name="twitter:description" content={description ?? DESC} />
      {/* <meta name="twitter:image" content={``} /> */}

      <meta name="og:type" content="website" />
      <meta name="og:title" content={title ?? TITLE} />
      <meta name="og:description" content={description ?? DESC} />
      {/* <meta name="og:image" content={OG} /> */}
      <meta name="og:image:alt" content={`Banner for ${env.URL}`} />
      <meta name="og:image:width" content="1280" />
      <meta name="og:image:height" content="675" />

      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

      <link href={`${env.URL}${pathname}`} rel="canonical" />
    </>
  );
};