import { FC, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

const CLASSNAME =
  'bg-3 caret-brand-2 rounded-md shadow-1 w-full py-2 px-4 ' +
  'outline-none hover:shadow-2';

export const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  className,
  ...props
}) => <input className={`${CLASSNAME} ${className}`} {...props} />;

export const Textarea: FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = ({
  className,
  ...props
}) => (
  <textarea className={`${CLASSNAME} ${className} resize-none`} {...props} />
);
