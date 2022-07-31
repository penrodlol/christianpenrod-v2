import { GithubMonthly } from '@components/GithubMonthly';
import { GithubSquares } from '@components/GithubSquares';
import { Layout } from '@components/Layout';
import { Profile } from '@components/Profile';
import { RoleTimeline } from '@components/RoleTimeline';
import { CommitSquare, CommitSummary } from '@prisma/client';
import ArrowRightIcon from '@svg/arrow-right.svg';
import { sortedRoles } from '@utils/contentlayer';
import { prisma } from '@utils/prisma';
import { bio, Bio, Role } from 'contentlayer/generated';
import dayjs from 'dayjs';
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import dynamic from 'next/dynamic';
import { PropsWithChildren } from 'react';

interface ServerProps {
  bio: Bio;
  roles: Array<Role>;
  summary: CommitSummary;
  squares: Array<CommitSquare>;
  contributions: number;
}

// prettier-ignore
const components = {
  a: dynamic<any>(() => import('@components/Anchor').then((m) => m.Anchor)),
  ul: ({ children }: PropsWithChildren<{}>) => (<ul className="flex flex-col gap-1 mb-4">{children}</ul>),
  li: ({ children }: PropsWithChildren<{}>) => (
    <li className="flex gap-2 items-center">
      <ArrowRightIcon width={20} height={20} className="fill-brand-1 min-w-[20px]" />
      <p>{children}</p>
    </li>
  ),
};

const About: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ bio, roles, summary, squares, contributions }) => {
  const BioMDX = useMDXComponent(bio.body.code);

  return (
    <Layout title="About" subTitle="Who is Christian?">
      <div className="flex flex-col gap-fluid-6">
        <section className="flex flex-col sm:flex-row gap-fluid-6">
          <Profile />
          <div className="flex flex-col gap-6 justify-between">
            <div className="bg-surface-2 rounded-md shadow-2 p-5 max-w-lg mx-auto text-fluid-2">
              <BioMDX components={components} />
            </div>
            <GithubMonthly summary={summary} />
          </div>
        </section>
        <section>
          <GithubSquares squares={squares} contributions={contributions} />
        </section>
        <section className="flex flex-col gap-8 max-w-max mx-auto">
          {roles.map((role) => (
            <RoleTimeline key={role._id} role={role} />
          ))}
        </section>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<ServerProps> = async () => {
  const min = dayjs().startOf('M').subtract(1, 'M').subtract(1, 'y').toDate();

  const batch = await prisma.$transaction([
    prisma.commitSummary.findFirst({ orderBy: { createdAt: 'desc' } }),
    prisma.commitSquare.findMany({
      where: { date: { gte: min } },
      orderBy: { date: 'asc' },
    }),
  ]);

  return {
    props: {
      bio,
      roles: sortedRoles,
      summary: JSON.parse(JSON.stringify(batch[0])),
      squares: JSON.parse(JSON.stringify(batch[1])),
      contributions: batch[1].reduce((acc, cur) => acc + cur.count, 0),
    },
  };
};

export default About;
