import type { NextPage } from 'next';

import BasePage from '../components/BasePage/BasePage';
import ContactForm from '../components/ContactForm/ContactForm';

const Contact: NextPage = () => {
  return (
    <BasePage subPageName="contact" transparentNavBar={false}>
      <>
        <ContactForm />
      </>
    </BasePage>
  );
};

export default Contact;

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
