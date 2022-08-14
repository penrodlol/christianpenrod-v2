import * as Radix from '@radix-ui/react-dialog';
import CloseIcon from '@svg/close.svg';

export const Root = Radix.Root;

export const Trigger = Radix.Trigger;

export const Header = ({ children, ...props }: Radix.DialogTitleProps) => (
  <Radix.Title {...props} asChild>
    <div className="text-fluid-6 flex items-center justify-between mb-5">
      <h3>{children}</h3>
      <Radix.DialogClose asChild>
        <button aria-label="Close dialog">
          <CloseIcon className="w-8 h-8 fill-brand-1 hover:fill-brand-2" />
        </button>
      </Radix.DialogClose>
    </div>
  </Radix.Title>
);

export const Content = ({ children, ...props }: Radix.DialogPortalProps) => (
  <Radix.Portal {...props}>
    <Radix.Overlay className="fixed z-40 inset-0 backdrop-blur-md" />
    <Radix.Content asChild>
      <div
        className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                   w-11/12 max-w-2xl bg-surface-2 rounded-md shadow-2"
      >
        <div className="px-fluid-2 pt-4 pb-6">{children}</div>
      </div>
    </Radix.Content>
  </Radix.Portal>
);
