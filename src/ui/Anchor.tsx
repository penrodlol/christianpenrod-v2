'use client';

import { ExternalLink } from 'lucide-react';
import Link, { LinkProps } from 'next/link';
import { AnchorHTMLAttributes, forwardRef, ReactNode } from 'react';

const base =
  'relative inline-flex items-center gap-1 rounded-sm no-underline ' +
  'hover:text-brand-2 focus-visible:text-brand-2 ';

const external =
  'text-brand-2 hover:after:content-[""] hover:after:absolute hover:after:right-0 ' +
  'hover:after:left-0 hover:after:bottom-[2px] hover:after:border-t-[0.2rem] ' +
  'hover:after:border-solid hover:after:border-brand-2 hover:after:rounded-md';

export type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;
export const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(
  ({ children, className, target, ...props }, ref) => (
    <a
      {...props}
      ref={ref}
      target={target || '_self'}
      className={`${base} ${className ?? ''} 
                  ${target === '_blank' ? external : ''}`}
    >
      <span>{children}</span>
      {target === '_blank' && (
        <ExternalLink
          className="h-5 w-5 -translate-y-[1px]"
          aria-hidden
          strokeWidth="3"
        />
      )}
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
