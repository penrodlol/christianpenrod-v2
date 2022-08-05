import * as Dialog from '@components/Dialog';
import { Button } from './Button';
import { Input, Textarea } from './Input';

export const Contact = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button className="w-full">Contact</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Header>Contact Me</Dialog.Header>
        <form name="contact" method="POST" data-netlify="true">
          <div className="px-3 flex flex-col gap-fluid-2 text-lg">
            <div className="flex gap-fluid-2">
              <Input name="name" type="text" placeholder="Name" required />
              <Input name="email" type="email" placeholder="Email" required />
            </div>
            <Input name="subject" type="text" placeholder="Subject" required />
            <Textarea name="message" placeholder="Message" rows={7} required />
            <Button className="mt-5" type="submit">
              Send Message
            </Button>
          </div>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
};
