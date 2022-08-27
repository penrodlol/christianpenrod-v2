import GithubIcon from '@svg/github.svg';
import LinkedInIcon from '@svg/linkedin.svg';
import TwitterIcon from '@svg/twitter.svg';
import Link from 'next/link';
import { ReactElement } from 'react';
import { Anchor } from './Anchor';

// prettier-ignore
const SOCIALS: Array<{ name: string; url: string; icon: ReactElement }> = [
  { name: 'Twitter', url: process.env.TWITTER!, icon: <TwitterIcon aria-hidden focusable="false" /> },
  { name: 'Github', url: process.env.GITHUB!, icon: <GithubIcon aria-hidden focusable="false" /> },
  { name: 'LinkedIn', url: process.env.LINKEDIN!, icon: <LinkedInIcon aria-hidden focusable="false" /> },
];

export const Footer = () => (
  <footer
    className="relative bg-surface-3 pt-6 pb-4 px-4 before:content-blank before:absolute
               before:inset-0 before:shadow-1 before:rotate-180 before:z-10"
  >
    <div className="relative flex flex-col gap-6 font-semibold text-lg text-base-2 z-20">
      <div className="flex gap-fluid-5 justify-center">
        {SOCIALS.map(({ name, url, icon }) => (
          <a
            key={name}
            href={url}
            title={name}
            aria-label={name}
            rel="nofollow noopener noreferrer"
            target="_blank"
            className="text-base-1 w-7 h-7 cursor-pointer rounded-sm
                       hover:text-brand-2 focus-visible:text-brand-2"
          >
            {icon}
          </a>
        ))}
      </div>
      <div className="flex flex-col gap-2 items-center">
        <div className="flex gap-2">
          <span>Created by: Christian Penrod</span>
          <strong className="text-base-1">©{process.env.COPYRIGHT_YEAR}</strong>
        </div>
        <div>
          <span className="mr-2">Built with:</span>
          <Link href="https://nextjs.org" passHref>
            <Anchor
              className="text-base-1 font-bold"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              Next.js
            </Anchor>
          </Link>
          <span className="mx-2">on</span>
          <Link href="https://www.netlify.com/" passHref>
            <Anchor
              className="text-base-1 font-bold"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              Netlify
            </Anchor>
          </Link>
        </div>
        <div>
          <span className="mr-2">Updated on:</span>
          <strong className="text-base-1 font-bold">
            {process.env.LAST_UPDATE}
          </strong>
        </div>
      </div>
    </div>
  </footer>
);
