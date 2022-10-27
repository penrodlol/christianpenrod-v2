import { RolesTimeline } from '@ui/RolesTimeline';
import { Title } from '@ui/Title';

const CareerPage = () => {
  return (
    <>
      <Title title="Career" subtitle="What has Christian done?" />
      <section>
        <RolesTimeline />
      </section>
    </>
  );
};

export default CareerPage;
