'use client';

import env from '@env/client.mjs';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { cloneElement, FC, ReactElement } from 'react';

export const Footer = () => (
  <footer
    className="relative bg-3 px-4 pt-6 pb-4 before:absolute before:inset-0
             before:z-10 before:rotate-180 before:content-[''] before:elevation-5"
  >
    <div className="relative z-20 flex flex-col gap-6 font-semibold text-2 text-sm">
      <div className="flex justify-center gap-20">
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
      <div className="flex flex-col items-center gap-2">
        <div className="flex gap-2">
          <span>Created by: Christian Penrod</span>
          <strong className="text-1">©2022</strong>
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
    className="cursor-pointer rounded-sm text-1
             hover:text-brand-2 focus-visible:text-brand-2"
  >
    {cloneElement(children, {
      className: 'stroke-current fill-current h-6 w-6',
    })}
  </a>
);
