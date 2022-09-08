import ExternalIcon from '@svg/external.svg';
import { AnchorHTMLAttributes, forwardRef } from 'react';

export type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;

const external =
  'text-brand-2 hover:after:content-[""] hover:after:absolute hover:after:right-0 ' +
  'hover:after:left-0 hover:after:bottom-[2px] hover:after:border-t-[0.2rem] ' +
  'hover:after:border-solid hover:after:border-brand-2 hover:after:rounded-md';

export const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(
  ({ children, className, target, ...props }, ref) => (
    <a
      {...props}
      ref={ref}
      target={target || '_self'}
      className={`inline-flex gap-1 items-center relative no-underline rounded-sm
                  hover:text-brand-2 focus-visible:text-brand-2
                  ${className ?? ''} ${target === '_blank' ? external : ''}`}
    >
      <span>{children}</span>
      {target === '_blank' && <ExternalIcon className="h-5 w-5" aria-hidden />}
    </a>
  ),
);

Anchor.displayName = 'Anchor';
