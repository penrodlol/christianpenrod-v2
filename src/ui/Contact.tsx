'use client';

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
        className="w-[90%] max-w-screen-sm rounded-md bg-2 p-0 text-1 elevation-3
                   backdrop:backdrop-blur-md"
        aria-modal="true"
        onClick={(e) => (e.target as Element).tagName === 'DIALOG' && close()}
        onKeyDown={(e) => e.key === 'Escape' && close()}
        onClose={reset}
      >
        <div className="px-fluid-2 pt-4 pb-6">
          <div className="mb-5 flex items-center justify-between text-3xl">
            <span>Contact Me</span>
            <button className="rounded-md" aria-label="Close" onClick={close}>
              <X className="h-10 w-10 hover:stroke-brand-1" />
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
              <div className="flex flex-col gap-5 sm:flex-row">
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
