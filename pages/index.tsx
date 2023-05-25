import type { NextPage } from 'next';
import SalesPoints from '../components/SalesPoints/SalesPoints';
import BasePage from '../components/BasePage/BasePage';
import HeroBanner from '../components/HeroBanner/HeroBanner';

const Home: NextPage = () => {
  return (
    <BasePage subPageName="home" transparentNavBar>
      <>
        <HeroBanner />
        <SalesPoints />
      </>
    </BasePage>
  );
};

export default Home;

interface Props {
  locale: string;
}

export function getStaticProps({ locale }: Props) {
  return {
    props: {
      messages: {
        ...require(`/messages/${locale}.json`),
      },
    },
  };
}
