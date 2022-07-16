import { Tab as HUITab } from '@headlessui/react';
import { Children, PropsWithChildren } from 'react';

export interface PostTabsProps {
  values: Array<string>;
}

export const PostTabs = ({
  values,
  children,
}: PropsWithChildren<PostTabsProps>) => (
  <div className="bg-surface-1 rounded-md shadow-3">
    <HUITab.Group>
      <HUITab.List className="flex text-lg text-base-2 overflow-x-auto">
        {values.map((value) => (
          <HUITab
            key={value}
            className={({ selected }) =>
              `relative w-full py-2 px-4 whitespace-nowrap outline-none hover:text-base-1
               ${
                 selected &&
                 `text-base-1 after:absolute after:content-blank after:left-0
                  after:right-0 after:bottom-0 after:rounded-md after:h-1 after:bg-brand-1`
               }`
            }
          >
            {value}
          </HUITab>
        ))}
      </HUITab.List>
      <HUITab.Panels className="bg-surface-2 p-6 rounded-bl-md rounded-br-md">
        {Children.toArray(children).map((child, index) => (
          <HUITab.Panel key={values[index]}>{child}</HUITab.Panel>
        ))}
      </HUITab.Panels>
    </HUITab.Group>
  </div>
);
