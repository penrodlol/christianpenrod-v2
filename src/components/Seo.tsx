import Head from 'next/head';
import { FC } from 'react';

const NAME = 'Christian Penrod';
const TITLE = `${NAME} | Front-End Web Developer`;
const DESC = 'Developing for the web since 2015, based in Pittsburgh PA.';

export interface SeoProps {
  title?: string;
  description?: string;
}

export const SEO: FC<SeoProps> = ({ title, description }) => {
  return (
    <Head>
      <title>{title ? `${title} | ${NAME}` : TITLE}</title>

      <meta name="title" content={title ?? TITLE} />
      <meta name="description" content={description ?? DESC} />
    </Head>
  );
};
