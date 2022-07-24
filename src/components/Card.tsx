import { FC, ReactNode } from 'react';
import { Chip } from './Chip';
import { Line } from './Line';

export interface CardProps {
  title: string;
  subTitle?: string;
  content: string;
  tags: Array<string>;
  actions: Array<ReactNode>;
}

export const Card: FC<CardProps> = (props) => {
  return (
    <div className="flex flex-col bg-surface-2 px-6 py-5 rounded-lg shadow-2">
      <div className="flex gap-2 flex-wrap mb-2">
        {props.tags.map((tag) => (
          <Chip key={tag}>{tag}</Chip>
        ))}
      </div>
      <span className="text-2xl">{props.title}</span>
      {props.subTitle && (
        <span className="text-base-2 text-lg font-semibold">
          {props.subTitle}
        </span>
      )}
      <Line />
      <p className="text-lg leading-8">{props.content}</p>
      <div className="flex items-center justify-end pt-5 mt-auto">
        {props.actions}
      </div>
    </div>
  );
};
