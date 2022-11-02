/* eslint-disable react/no-unknown-property */
import { ImageResponse } from '@vercel/og';

export const config = { runtime: 'experimental-edge' };

const handler = () =>
  new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#181926',
          color: '#cdd6f4',
        }}
      >
        <div tw="bg-[#181926] flex">
          <div tw="flex flex-col ">
            <h1 tw="text-5xl mb-0.5">Hi, I&apos;m Christian</h1>
            <h2 tw="text-3xl text-[#bac2de]">Front-End Web Developer</h2>
            <div tw="bg-[#b7bdf8] rounded-md h-2 mt-2 mb-6 w-full" />
            <ul tw="flex flex-col text-xl">
              <li tw="mb-1">
                Web Developer
                <strong tw="text-[#b7bdf8] ml-1">@McKesson</strong>
              </li>
              <li tw="mb-1">
                CS Bachelors
                <strong tw="text-[#b7bdf8] ml-1">@LaRoche</strong>
              </li>
              <li>Pittsburgh, PA, USA</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    { width: 800, height: 400 },
  );

export default handler;
