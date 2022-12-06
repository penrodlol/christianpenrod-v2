'use client';

import { Clipboard } from 'lucide-react';
import { FC, HTMLAttributes, useCallback, useRef } from 'react';

export type CodeProps = HTMLAttributes<HTMLPreElement>;

export const Code: FC<CodeProps> = ({ title, children }) => {
  const preRef = useRef<HTMLPreElement>(null);
  const copy = useCallback(
    () => navigator.clipboard.writeText(preRef.current?.innerText ?? ''),
    [preRef],
  );

  return (
    <>
      {title && (
        <div className="ml-auto mr-4 max-w-max rounded-t-md bg-[hsl(231.4,20%,6.9%)] py-0.5 px-3 elevation-3">
          <span className="text-2 text-sm">{title}</span>
        </div>
      )}
      <div className="relative rounded-md bg-[hsl(231.4,20%,6.9%)] elevation-3">
        <div className="absolute right-2 top-2 text-2 opacity-50 hover:text-1">
          <button aria-label="Copy to clipboard" onClick={copy}>
            <Clipboard className="h-7 w-7" />
          </button>
        </div>
        <pre ref={preRef} className="overflow-x-auto p-4">
          {children}
        </pre>
      </div>
    </>
  );
};
