import { PropsWithChildren } from 'react';

export const Hamburger = ({ children }: PropsWithChildren<{}>) => (
  <div className="relative w-10 h-6">
    <input
      className="peer absolute z-20 inset-0 w-full h-full cursor-pointer opacity-0"
      type="checkbox"
      onChange={(e) =>
        e.target.checked
          ? document.body.classList.add('overflow-hidden')
          : document.body.classList.remove('overflow-hidden')
      }
    />
    <span
      className="absolute z-10 top-0  w-full h-[0.45rem] rounded-md bg-brand-1
             peer-checked:top-1/2 peer-checked:-translate-y-1/2 peer-checked:rotate-45"
    />
    <span
      className="absolute z-10 bottom-0 w-full h-[0.45rem] rounded-md bg-brand-2
             peer-checked:top-1/2 peer-checked:-translate-y-1/2 peer-checked:-rotate-45"
    />

    <menu
      className="hidden fixed inset-0 backdrop-blur-md peer-checked:flex flex-col
             gap-8 px-8 pt-16 text-4xl"
    >
      {children}
    </menu>
  </div>
);
