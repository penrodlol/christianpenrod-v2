import { RolesTimeline } from '@ui/RoleMDX';
import { Title } from '@ui/Title';

const CareerPage = async () => {
  return (
    <div>
      <Title title="Career" subtitle="What has Christian done?" />
      <section>
        <RolesTimeline />
      </section>
    </div>
  );
};

export default CareerPage;
