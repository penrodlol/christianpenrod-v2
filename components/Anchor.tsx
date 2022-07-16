import { AnchorHTMLAttributes, ForwardedRef, forwardRef } from 'react';

export type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;

const external =
  'hover:after:content-blank hover:after:absolute hover:after:right-0 ' +
  'hover:after:left-0 hover:after:bottom-[2px] hover:after:border-t-[0.2rem] ' +
  'hover:after:border-solid hover:after:border-brand-1 hover:after:rounded-md';

const AnchorComponent = (
  { children, className, target, ...props }: AnchorProps,
  ref: ForwardedRef<HTMLAnchorElement>,
) => (
  <a
    {...props}
    ref={ref}
    target={target || '_self'}
    className={`relative no-underline rounded-md hover:text-brand-1
                ${className} ${target === '_blank' && external}`}
  >
    {children}
  </a>
);

export const Anchor = forwardRef(AnchorComponent);
