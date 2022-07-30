import Image from 'next/image';

export const Profile = () => (
  <div className="flex flex-col gap-8 items-center">
    <div
      className="relative p-2 pb-0 bg-surface-2 rounded-md shadow-2 max-w-[260px]
                 after:absolute after:content-blank after:inset-2 after:bg-brand-2
                 after:rounded-[inherit] after:opacity-30
    "
    >
      <Image
        src="/img/selfie.webp"
        alt="Picture of me"
        className="rounded-md"
        priority={true}
        height={350}
        width={260}
        quality={100}
      />
    </div>
    <div className="text-center">
      <h2 className="text-fluid-5">Christian Penrod</h2>
      <h3 className="text-fluid-3 text-base-2">Front-End Web Developer</h3>
    </div>
  </div>
);
