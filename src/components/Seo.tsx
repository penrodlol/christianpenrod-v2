import env from '@env/client';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC } from 'react';

const TITLE = 'Christian Penrod | Front-End Web Developer';
const DESC = 'Developing for the web since 2015, based in Pittsburgh PA.';

export interface SeoProps {
  title?: string;
  description?: string;
}

export const SEO: FC<SeoProps> = ({ title, description }) => {
  const { asPath } = useRouter();

  return (
    <Head>
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
      {/* <meta name="og:image" content={``} /> */}
      <meta name="og:image:alt" content={`Banner for ${env.URL}`} />
      <meta name="og:image:width" content="1280" />
      <meta name="og:image:height" content="675" />

      <link rel="icon" type="image/svg+xml" href="/svg/favicon.svg" />

      <link href={`${env.URL}${asPath}`} rel="canonical" />
    </Head>
  );
};
