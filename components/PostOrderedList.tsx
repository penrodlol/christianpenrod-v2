import {
  Children,
  isValidElement,
  PropsWithChildren,
  ReactElement,
} from 'react';

export const PostOrderedList = ({ children }: PropsWithChildren<unknown>) => (
  <ol className="flex flex-col gap-2 p-0">
    {Children.toArray(children)
      .filter(isValidElement)
      .map((child: ReactElement, index) => (
        <li key={index} className="flex gap-4 max-w-full">
          <span className="text-base-2">{index + 1}.</span>
          <p>{child.props.children}</p>
        </li>
      ))}
  </ol>
);
