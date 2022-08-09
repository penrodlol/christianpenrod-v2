import ExternalIcon from '@svg/external.svg';
import { AnchorHTMLAttributes, ForwardedRef, forwardRef } from 'react';

export type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;

const external =
  'text-brand-1 hover:after:content-blank hover:after:absolute hover:after:right-0 ' +
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
    className={`inline-flex gap-1 items-center relative no-underline rounded-md hover:text-brand-1
                ${className} ${target === '_blank' && external}`}
  >
    <span>{children}</span>
    {target === '_blank' && <ExternalIcon className="h-5 w-5" />}
  </a>
);

export const Anchor = forwardRef(AnchorComponent);
