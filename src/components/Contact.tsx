import * as Dialog from '@components/Dialog';
import { Button } from './Button';
import { Input, Textarea } from './Input';

export const Contact = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button className="w-full" aria-label="Contact me">
          Contact
        </Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Header>Contact Me</Dialog.Header>
        <form name="contact" method="POST" data-netlify="true">
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
      </Dialog.Content>
    </Dialog.Root>
  );
};
