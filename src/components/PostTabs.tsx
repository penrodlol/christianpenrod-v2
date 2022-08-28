import {
  Children,
  KeyboardEvent,
  PropsWithChildren,
  useCallback,
  useId,
  useState,
} from 'react';

const active =
  'text-base-1 after:content-blank after:absolute after:bottom-0 ' +
  'after:left-0 after:right-0 after:z-2 after:h-1 after:rounded-md ' +
  'after:bg-brand-2';

export interface PostTabsProps extends PropsWithChildren {
  values: Array<string>;
}

export const PostTabs = ({ values, children }: PostTabsProps) => {
  const uid = useId();

  const [activeTab, setActiveTab] = useState(values[0]);

  const focusTab = useCallback(
    (e: KeyboardEvent<HTMLButtonElement>) => {
      if (!/ArrowLeft|ArrowRight|Home|End/.test(e.code)) return;
      if (/Home|End/.test(e.code)) e.preventDefault();

      const index = values.indexOf(activeTab);

      switch (e.code) {
        case 'ArrowLeft':
          return setActiveTab(values[index - 1] ?? values[values.length - 1]);
        case 'ArrowRight':
          return setActiveTab(values[index + 1] ?? values[0]);
        case 'Home':
          return setActiveTab(values[0]);
        case 'End':
          return setActiveTab(values[values.length - 1]);
      }
    },
    [values, activeTab],
  );

  return (
    <div className="bg-surface-1 rounded-md shadow-2">
      <div
        className="flex justify-between overflow-auto"
        role="tablist"
        aria-labelledby="tabs"
      >
        {values.map((value) => (
          <button
            key={value}
            type="button"
            role="tab"
            id={`${uid}-trigger-${value}`}
            aria-controls={`${uid}-content-${value}`}
            aria-selected={value === activeTab}
            tabIndex={value === activeTab ? undefined : -1}
            className={`relative text-base-2 text-lg whitespace-nowrap w-full py-2 px-4
                        hover:text-base-1 ${activeTab === value ? active : ''}`}
            onClick={() => setActiveTab(value)}
            onKeyDown={(e) => focusTab(e)}
          >
            {value}
          </button>
        ))}
      </div>
      {Children.map(children, (child, index) => {
        const value = values[index];
        return (
          <div
            key={value}
            role="tabpanel"
            id={`${uid}-content-${value}`}
            aria-labelledby={`${uid}-trigger-${value}`}
            tabIndex={0}
            className={`bg-surface-2 p-6 rounded-bl-md rounded-br-md
                      ${activeTab === value ? 'block' : 'hidden'}`}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
};
