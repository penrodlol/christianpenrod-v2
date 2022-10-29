'use client';

import { ExternalLink } from 'lucide-react';
import Link, { LinkProps } from 'next/link';
import { AnchorHTMLAttributes, forwardRef, ReactNode } from 'react';

const base =
  'relative inline-flex items-center gap-1 rounded-sm no-underline ' +
  'hover:text-brand-2 focus-visible:text-brand-2 ';

export type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;
export const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(
  ({ children, className, ...props }, ref) => (
    <a
      {...props}
      ref={ref}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className={`${base} ${className}
                  text-brand-2 hover:after:absolute hover:after:right-0 hover:after:left-0 
                  hover:after:bottom-[2px] hover:after:rounded-md hover:after:border-t-[0.2rem] 
                  hover:after:border-solid hover:after:border-brand-2 hover:after:content-[""]`}
    >
      <span>{children}</span>
      <ExternalLink className="h-5 w-5 -translate-y-[1px]" aria-hidden />
    </a>
  ),
);

Anchor.displayName = 'Anchor';

export type NextAnchorProps = LinkProps & { children: ReactNode };
export const NextAnchor = ({ children, ...props }: NextAnchorProps) => (
  <Link className={base} {...props}>
    {children}
  </Link>
);
