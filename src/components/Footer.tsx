import env from '@env/client';
import Link from 'next/link';
import { ReactElement } from 'react';
import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si';
import { Anchor } from './Anchor';

// prettier-ignore
const SOCIALS: Array<{ name: string; url?: string; icon: ReactElement }> = [
  { name: 'Twitter', url: env.TWITTER, icon: <SiTwitter aria-hidden focusable="false" className='w-7 h-7' /> },
  { name: 'Github', url: env.GITHUB, icon: <SiGithub aria-hidden focusable="false" className='w-7 h-7' /> },
  { name: 'LinkedIn', url: env.LINKEDIN, icon: <SiLinkedin aria-hidden focusable="false" className='w-7 h-7' /> },
];

export const Footer = () => (
  <footer
    className="relative bg-3 pt-6 pb-4 px-4 before:content-[''] before:absolute
               before:inset-0 before:elevation-5 before:rotate-180 before:z-10"
  >
    <div className="relative flex flex-col gap-6 font-semibold text-base text-2 z-20">
      <div className="flex gap-20 justify-center">
        {SOCIALS.map(({ name, url, icon }) => (
          <a
            key={name}
            href={url}
            title={name}
            aria-label={name}
            rel="nofollow noopener noreferrer"
            target="_blank"
            className="text-1 cursor-pointer rounded-sm
                       hover:text-brand-2 focus-visible:text-brand-2"
          >
            {icon}
          </a>
        ))}
      </div>
      <div className="flex flex-col gap-2 items-center">
        <div className="flex gap-2">
          <span>Created by: Christian Penrod</span>
          <strong className="text-1">©2022</strong>
        </div>
        <div>
          <span className="mr-2">Built with:</span>
          <Link href="https://nextjs.org" passHref>
            <Anchor
              className="text-1 font-bold"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              Next.js
            </Anchor>
          </Link>
          <span className="mx-2">on</span>
          <Link href="https://netlify.com/docs" passHref>
            <Anchor
              className="text-1 font-bold"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              Netlify
            </Anchor>
          </Link>
        </div>
      </div>
    </div>
  </footer>
);
