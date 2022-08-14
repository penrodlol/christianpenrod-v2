import * as Dialog from '@components/Dialog';
import { Button } from './Button';
import { Input, Textarea } from './Input';

export const Contact = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button className="w-full" aria-label="Open contact form">
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
                type="text"
                placeholder="Name"
                required
                aria-label="Name"
              />
              <Input
                name="email"
                type="email"
                placeholder="Email"
                required
                aria-label="Email"
              />
            </div>
            <Input
              name="subject"
              type="text"
              placeholder="Subject"
              required
              aria-label="Subject"
            />
            <Textarea
              name="message"
              placeholder="Message"
              rows={7}
              required
              aria-label="Input your message"
            />
            <Button className="mt-5" type="submit" aria-label="Send message">
              Send Message
            </Button>
          </div>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
};
