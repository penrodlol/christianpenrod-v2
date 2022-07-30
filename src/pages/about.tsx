import { GithubSquares } from '@components/GithubSquares';
import { GithubSummary } from '@components/GithubSummary';
import { Layout } from '@components/Layout';
import { RoleTimeline } from '@components/RoleTimeline';
import { CommitSquare, CommitSummary } from '@prisma/client';
import { sortedRoles } from '@utils/contentlayer';
import { prisma } from '@utils/prisma';
import { Role } from 'contentlayer/generated';
import dayjs from 'dayjs';
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import Image from 'next/image';

interface ServerProps {
  roles: Array<Role>;
  summary: CommitSummary;
  squares: Array<CommitSquare>;
  contributions: number;
}

const About: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ roles, summary, squares, contributions }) => {
  return (
    <Layout title="About" subTitle="Who is Christian?">
      <div className="flex flex-col gap-fluid-6">
        <section className="flex flex-col sm:flex-row gap-10">
          <div className="flex flex-col gap-8 items-center">
            <div className="relative p-2 pb-0 bg-surface-2 rounded-md shadow-2 max-w-[300px]">
              <Image
                src="/img/selfie.webp"
                alt="Picture of me"
                className="rounded-md"
                priority={true}
                height={400}
                width={300}
                quality={100}
              />
            </div>
            <div className="text-center">
              <h2 className="text-fluid-6">Christian Penrod</h2>
              <h3 className="text-fluid-4 text-base-2">
                Front-End Web Developer
              </h3>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <GithubSummary summary={summary} />
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
      roles: sortedRoles,
      summary: JSON.parse(JSON.stringify(batch[0]))!,
      squares: JSON.parse(JSON.stringify(batch[1]))!,
      contributions: batch[1].reduce((acc, cur) => acc + cur.count, 0),
    },
  };
};

export default About;
