import * as RadixTabs from '@radix-ui/react-tabs';
import { Children, PropsWithChildren } from 'react';

export interface PostTabsProps {
  values: Array<string>;
}

export const PostTabs = ({
  values,
  children,
}: PropsWithChildren<PostTabsProps>) => (
  <RadixTabs.Root defaultValue={values[0]} asChild>
    <div className="bg-surface-1 rounded-md shadow-2">
      <RadixTabs.TabsList asChild>
        <div className="flex overflow-x-auto">
          {values.map((value) => (
            <RadixTabs.Trigger key={value} value={value} asChild>
              <div
                className="relative flex justify-center flex-1 py-2 px-4 text-base-2
                           cursor-pointer hover:text-base-1 rdx-state-active:text-base-1
                           rdx-state-active:after:content-blank rdx-state-active:after:absolute
                           rdx-state-active:after:bottom-0 rdx-state-active:after:left-0
                           rdx-state-active:after:right-0 rdx-state-active:after:z-2
                           rdx-state-active:after:h-1 rdx-state-active:after:rounded-md
                           rdx-state-active:after:bg-brand-1"
              >
                <span className="text-lg whitespace-nowrap">{value}</span>
              </div>
            </RadixTabs.Trigger>
          ))}
        </div>
      </RadixTabs.TabsList>
      {Children.toArray(children).map((child, index) => (
        <RadixTabs.Content key={index} value={values[index]} asChild>
          <div className="bg-surface-2 p-6 rounded-bl-md rounded-br-md cursor-auto">
            {child}
          </div>
        </RadixTabs.Content>
      ))}
    </div>
  </RadixTabs.Root>
);
