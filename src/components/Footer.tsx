import env from '@env/client';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import { cloneElement, FC, ReactElement } from 'react';
import { Anchor } from './Anchor';

export const Footer = () => (
  <footer
    className="relative bg-3 pt-6 pb-4 px-4 before:content-[''] before:absolute
               before:inset-0 before:elevation-5 before:rotate-180 before:z-10"
  >
    <div className="relative flex flex-col gap-6 font-semibold text-sm text-2 z-20">
      <div className="flex gap-20 justify-center">
        <SocialAnchor name="Twitter" url={String(env.TWITTER)}>
          <Twitter aria-hidden focusable="false" />
        </SocialAnchor>
        <SocialAnchor name="Github" url={String(env.GITHUB)}>
          <Github aria-hidden focusable="false" />
        </SocialAnchor>
        <SocialAnchor name="LinkedIn" url={String(env.LINKEDIN)}>
          <Linkedin aria-hidden focusable="false" />
        </SocialAnchor>
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

const SocialAnchor: FC<{
  name: string;
  url: string;
  children: ReactElement;
}> = ({ name, url, children }) => (
  <a
    href={url}
    title={name}
    aria-label={name}
    rel="nofollow noopener noreferrer "
    target="_blank"
    className="text-1 cursor-pointer rounded-sm
               hover:text-brand-2 focus-visible:text-brand-2"
  >
    {cloneElement(children, {
      className: 'stroke-current fill-current h-6 w-6',
    })}
  </a>
);
