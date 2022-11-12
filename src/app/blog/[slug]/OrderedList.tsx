'use client';

import {
  Children,
  FC,
  HTMLAttributes,
  isValidElement,
  ReactElement,
} from 'react';

export type OrderedListProps = HTMLAttributes<HTMLOListElement>;

export const OrderedList: FC<OrderedListProps> = ({ children }) => (
  <ol className="flex flex-col gap-2 p-0">
    {Children.toArray(children)
      .filter(isValidElement)
      .map((child: ReactElement, index) => (
        <li key={index} className="flex max-w-full gap-4">
          <span className="text-2">{index + 1}.</span>
          <p>{child.props.children}</p>
        </li>
      ))}
  </ol>
);
