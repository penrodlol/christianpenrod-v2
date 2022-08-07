import GithubIcon from '@svg/github.svg';
import LinkedinIcon from '@svg/linkedin.svg';
import TwitterIcon from '@svg/twitter.svg';
import dayjs from 'dayjs';
import { ReactElement } from 'react';

const TWITTER = process.env.NEXT_PUBLIC_TWITTER!;
const GITHUB = process.env.NEXT_PUBLIC_GITHUB!;
const LINKEDIN = process.env.NEXT_PUBLIC_LINKEDIN!;

const SOCIALS: Array<{ name: string; url: string; icon: ReactElement }> = [
  { name: 'twitter', url: TWITTER, icon: <TwitterIcon /> },
  { name: 'github', url: GITHUB, icon: <GithubIcon /> },
  { name: 'linkedin', url: LINKEDIN, icon: <LinkedinIcon /> },
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
            aria-label={`Go to my ${name}`}
            className="w-7 h-7 cursor-pointer hover:text-brand-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            {icon}
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
