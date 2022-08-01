import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC } from 'react';

const NAME = 'Christian Penrod';
const TITLE = `${NAME} | Front-End Web Developer`;
const DESC = 'Developing for the web since 2015, based in Pittsburgh PA.';
const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN;
const TWITTER = process.env.NEXT_PUBLIC_TWITTER;

export interface SeoProps {
  title?: string;
  description?: string;
}

export const SEO: FC<SeoProps> = ({ title, description }) => {
  const { asPath } = useRouter();

  return (
    <Head>
      <title>{title ? `${title} | ${NAME}` : TITLE}</title>

      <meta name="title" content={title ?? TITLE} />
      <meta name="description" content={description ?? DESC} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={`@${TWITTER}`} />
      <meta name="twitter:title" content={title || TITLE} />
      <meta name="twitter:description" content={description || DESC} />
      {/* <meta name="twitter:image" content={``} /> */}

      <meta name="og:type" content="website" />
      <meta name="og:title" content={title || TITLE} />
      <meta name="og:description" content={description || DESC} />
      {/* <meta name="og:image" content={``} /> */}
      <meta name="og:image:alt" content={`Banner for ${DOMAIN}`} />
      <meta name="og:image:width" content="1280" />
      <meta name="og:image:height" content="675" />

      {/* <link href="" rel="icon" type="image/x-icon" /> */}

      <link href={`${DOMAIN}${asPath}`} rel="canonical" />
    </Head>
  );
};
