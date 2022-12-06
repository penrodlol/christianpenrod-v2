import { Title } from '@ui/Title';
import { allRoles } from 'contentlayer/generated';
import { MDX } from './Mdx';

const CareerPage = () => {
  const roles = allRoles.sort((a, b) => b._id.localeCompare(a._id));

  return (
    <>
      <Title title="Career" subtitle="What has Christian done?" />
      <section className="mx-auto flex max-w-max flex-col gap-8">
        {roles.map((role) => (
          <div key={role._id} className="rounded-md bg-2 p-7 elevation-3">
            <h3 className="text-2xl">{role.company}</h3>
            <h4 className="text-2 text-lg">
              {role.start} - {role.end ?? 'Present'}
            </h4>
            <div className="relative">
              <div className="absolute top-5 bottom-1 w-2 rounded-md bg-brand-2 opacity-30" />
              <div className="flex flex-col pl-6">
                <MDX content={role.body.code} />
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default CareerPage;
