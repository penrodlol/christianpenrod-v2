import GithubIcon from '@svg/github.svg';
import LinkedInIcon from '@svg/linkedin.svg';
import TwitterIcon from '@svg/twitter.svg';
import dayjs from 'dayjs';
import { ReactElement } from 'react';

const TWITTER = process.env.NEXT_PUBLIC_TWITTER!;
const GITHUB = process.env.NEXT_PUBLIC_GITHUB!;
const LINKEDIN = process.env.NEXT_PUBLIC_LINKEDIN!;

// prettier-ignore
const SOCIALS: Array<{ name: string; url: string; icon: ReactElement }> = [
  { name: 'Twitter', url: TWITTER, icon: <TwitterIcon aria-hidden focusable="false" /> },
  { name: 'Github', url: GITHUB, icon: <GithubIcon aria-hidden focusable="false" /> },
  { name: 'LinkedIn', url: LINKEDIN, icon: <LinkedInIcon aria-hidden focusable="false" /> },
];

export const Footer = () => (
  <footer
    className="relative bg-surface-3 py-2 before:content-blank before:absolute
               before:inset-0 before:shadow-1 before:rotate-180 before:z-10"
  >
    <div className="relative flex flex-col gap-2 items-center z-20">
      <div className="flex gap-16 py-2 max-w-max">
        {SOCIALS.map(({ name, url, icon }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="nofollow noopener noreferrer"
            title={name}
            className="w-7 h-7 cursor-pointer rounded-sm
                       hover:text-brand-1 focus-visible:text-brand-1"
          >
            {icon}
            <span className="sr-only">{name}</span>
          </a>
        ))}
      </div>
      <div className="flex gap-2 text-xl">
        <span className="font-semibold">Christian Penrod</span>
        <span className="text-accent-2 font-bold">&#169;{dayjs().year()}</span>
      </div>
    </div>
  </footer>
);
