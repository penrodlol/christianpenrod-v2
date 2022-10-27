'use client';

import { FC } from 'react';

export interface TitleProps {
  title: string;
  subtitle: string;
}

export const Title: FC<TitleProps> = ({ title, subtitle }) => (
  <div className="mb-fluid-5">
    <h1 className="!leading-relaxed text-4xl">{title}</h1>
    <h2 className="text-2 text-3xl">{subtitle}</h2>
  </div>
);
