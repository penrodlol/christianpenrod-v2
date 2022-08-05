import { OpenSource } from '@prisma/client';
import GithubIcon from '@svg/github.svg';
import { FC, HTMLAttributes, PropsWithChildren } from 'react';

const BUBBLES: Array<{ key: keyof OpenSource; question: string }> = [
  { key: 'tools', question: 'What tools have I been working with?' },
  { key: 'contributions', question: 'What have I contributed to?' },
  { key: 'commits', question: 'How many commits this month?' },
];

export interface ChatProps {
  openSource: Partial<OpenSource> | null;
}

export const Chat: FC<ChatProps> = ({ openSource }) => (
  <div className="bg-surface-2 rounded-md shadow-2 py-6 px-fluid-4">
    <div className="flex gap-5 items-center justify-center mb-6">
      <h2 className="text-fluid-5 tracking-wider">Open Source</h2>
      <GithubIcon className="w-6 h-6" />
    </div>
    <div className="flex flex-col gap-fluid-3">
      {BUBBLES.map(({ key, question }) => (
        <div key={key} className="text-lg flex flex-col gap-3">
          <Bubble
            className="max-w-[35ch] text-base-2 before:rounded-tl-none
                       before:bg-brand-1 before:opacity-30"
          >
            {question}
          </Bubble>
          <Bubble
            className="max-w-[30ch] capitalize self-end before:rounded-br-none
                       before:bg-surface-3"
          >
            {String(openSource![key]).replaceAll('|', ', ')}
          </Bubble>
        </div>
      ))}
    </div>
  </div>
);

const Bubble = ({
  children,
  className,
}: PropsWithChildren<HTMLAttributes<HTMLElement>>) => (
  <div
    className={`py-1 px-5 relative max-w-max before:absolute before:content-blank
                before:inset-0 before:rounded-full before:shadow-2 ${className}`}
  >
    <p className="relative">{children}</p>
  </div>
);
