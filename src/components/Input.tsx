import { FC, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

const CLASSNAME =
  'bg-surface-1 caret-brand-1 rounded-md shadow-1 py-2 px-4 ' +
  'outline-none hover:shadow-2';

export const Input: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <input className={CLASSNAME} {...props} />
);

export const Textarea: FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = (
  props,
) => <textarea className={`${CLASSNAME} resize-none`} {...props} />;
