import type { NextPage } from 'next';
import AboutInfo from '../components/About/AboutInfo';
import BaseLayout from '../components/Base/BaseLayout';
import HeroBanner from '../components/Hero/HeroBanner';

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <HeroBanner />
      <AboutInfo />
    </BaseLayout>
  );
};

export default Home;
