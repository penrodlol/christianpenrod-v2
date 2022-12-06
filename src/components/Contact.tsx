/* eslint-disable react/no-unknown-property */
import { X } from 'lucide-react';
import { useCallback, useRef } from 'react';
import { Button } from './Button';
import { Input, Textarea } from './Input';

export const Contact = () => {
  const dialog = useRef<HTMLDialogElement>(null);
  const form = useRef<HTMLFormElement>(null);

  const reset = useCallback(() => form.current?.reset(), [form]);

  const open = useCallback(() => {
    dialog.current?.showModal();
    document.body.classList.add('overflow-hidden');
  }, [dialog]);

  const close = useCallback(() => {
    dialog.current?.close();
    document.body.classList.remove('overflow-hidden');
  }, [dialog]);

  return (
    <>
      <dialog
        ref={dialog}
        className="bg-2 text-1 rounded-md elevation-3 p-0 w-[90%] max-w-screen-sm
                   backdrop:backdrop-blur-md"
        aria-modal="true"
        onClick={(e) => (e.target as Element).tagName === 'DIALOG' && close()}
        onKeyDown={(e) => e.key === 'Escape' && close()}
        onClose={reset}
      >
        <div className="px-fluid-2 pt-4 pb-6">
          <div className="text-3xl flex items-center justify-between mb-5">
            <span>Contact Me</span>
            <button className="rounded-md" aria-label="Close" onClick={close}>
              <X
                className="w-10 h-10 stroke-brand-2 hover:stroke-brand-2"
                strokeWidth="3"
              />
            </button>
          </div>
          <form
            ref={form}
            name="contact"
            method="POST"
            action="/"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                <input name="bot-field" />
              </label>
            </p>
            <div className="flex flex-col gap-5 px-3 text-lg">
              <div className="flex flex-col sm:flex-row gap-5">
                <Input
                  name="name"
                  placeholder="Name"
                  aria-label="Name"
                  required
                  autoFocus
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  aria-label="Email"
                  required
                />
              </div>
              <Input
                name="subject"
                placeholder="Subject"
                aria-label="Subject"
                required
              />
              <Textarea
                name="message"
                placeholder="Message"
                aria-label="Message"
                rows={7}
                required
              />
              <Button className="mt-5" type="submit">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </dialog>

      <Button className="w-full" aria-label="Contact me" onClick={open}>
        Contact
      </Button>

      <output />
    </>
  );
};
