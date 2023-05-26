import type { NextPage } from 'next';
import BaseLayout from '../components/Base/BaseLayout';
import HeroBanner from '../components/Hero/HeroBanner';

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <HeroBanner />
    </BaseLayout>
  );
};

export default Home;
