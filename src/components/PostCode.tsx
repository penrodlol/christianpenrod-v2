import ClipboardIcon from '@svg/clipboard.svg';
import { PropsWithChildren, useCallback, useRef } from 'react';

export const PostCode = ({
  title,
  children,
}: PropsWithChildren<HTMLPreElement>) => {
  const preRef = useRef<HTMLPreElement>(null);
  const copy = useCallback(
    () => navigator.clipboard.writeText(preRef.current?.innerText ?? ''),
    [preRef],
  );

  return (
    <>
      {title && (
        <div className="bg-[hsl(231.4,20%,6.9%)] max-w-max ml-auto mr-4 rounded-t-md shadow-2 py-0.5 px-3">
          <span className="text-sm text-2">{title}</span>
        </div>
      )}
      <div className="relative bg-[hsl(231.4,20%,6.9%)] rounded-md shadow-2">
        <div className="absolute right-2 top-2 text-2 opacity-50 hover:text-1">
          <button aria-label="Copy to clipboard" onClick={copy}>
            <ClipboardIcon className="w-7 h-7" />
          </button>
        </div>
        <pre ref={preRef} className="overflow-x-auto p-4">
          {children}
        </pre>
      </div>
    </>
  );
};
