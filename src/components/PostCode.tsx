import ClipboardIcon from '@svg/clipboard.svg';
import { PropsWithChildren, useRef } from 'react';

export const PostCode = ({
  title,
  children,
}: PropsWithChildren<HTMLPreElement>) => {
  const preRef = useRef<HTMLPreElement>(null);

  return (
    <>
      {title && (
        <div className="bg-[hsl(210,11.1%,10.6%)] max-w-max ml-auto mr-4 rounded-t-md shadow-2 py-0.5 px-3">
          <span className="text-sm text-base-2">{title}</span>
        </div>
      )}
      <div className="relative bg-[hsl(210,11.1%,10.6%)] rounded-md shadow-2">
        <div className="absolute right-2 top-2 text-base-2 opacity-50">
          <button
            aria-label="Copy to clipboard"
            onClick={() =>
              navigator.clipboard.writeText(preRef.current!.innerText)
            }
          >
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
