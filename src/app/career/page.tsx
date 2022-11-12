import { Title } from '@ui/Title';
import { getSortedRoles } from '@utils/contentlayer/roles';
import { MDX } from './Mdx';

const CareerPage = () => {
  const roles = getSortedRoles();

  return (
    <>
      <Title title="Career" subtitle="What has Christian done?" />
      <section className="mx-auto flex max-w-max flex-col gap-8">
        {roles.map((role) => (
          <div key={role._id} className="rounded-md bg-2 p-7 elevation-10">
            <h3 className="text-2xl">{role.company}</h3>
            <h4 className="text-2 text-lg">
              {role.start} - {role.end}
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
