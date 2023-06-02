import type { NextPage } from 'next';
import BaseLayout from 'components/Base/BaseLayout';
import ExperienceList from 'components/Experience/ExperienceList';

const ExperiencePage: NextPage = () => {
  return (
    <BaseLayout>
      <div className="w-full my-10">
        <div className="m-10">
          <h2 className="text-3xl lg:text-5xl font-bold lg:w-2/3">
            My projects and experiences
          </h2>
        </div>
        <ExperienceList />
      </div>
    </BaseLayout>
  );
};

export default ExperiencePage;
