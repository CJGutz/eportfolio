import type { NextPage } from 'next';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import BasePage from '../components/BasePage/BasePage';

const PageNotFound: NextPage = () => {
  const t = useTranslations('Error.404');
  return (
    <BasePage subPageName="notFound" transparentNavBar={true}>
      <div className="p-64 h-screen bg-gradient-to-r from-ei-black-green to-ei-dark-green">
        <p className=" text-[100px] font-bold">404</p>
        <p>{t('subtitle')}</p>
        <p>
          {t.rich('linkIndex', {
            link: (text) => (
              <Link href="/" className="underline">
                {text}
              </Link>
            ),
          })}
        </p>
      </div>
    </BasePage>
  );
};

export default PageNotFound;

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
