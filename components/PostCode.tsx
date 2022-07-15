import ClipboardIcon from '@svg/clipboard.svg';
import { PropsWithChildren } from 'react';
import { Button } from './Button';

export const PostCode = ({
  title,
  children,
}: PropsWithChildren<HTMLPreElement>) => (
  <>
    <span className="text-2">{title}</span>
    <div className="relative bg-[hsl(210,11.1%,10.6%)] rounded-2 shadow-4">
      <div className="absolute right-2 top-2 text-basic-2 opacity-50">
        <Button variant="icon">
          <ClipboardIcon width={30} height={30} />
        </Button>
      </div>
      <pre className="overflow-x-auto p-3">{children}</pre>
    </div>
  </>
);
