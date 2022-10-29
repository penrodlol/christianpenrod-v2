import { Title } from '@ui/Title';
import { RolesTimeline } from './RolesTimeline';

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
