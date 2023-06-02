import type { NextPage } from 'next';
import BaseLayout from 'components/Base/BaseLayout';
import SkillList from 'components/SkillLayout/SkillList';

const SkillPage: NextPage = () => {
  return (
    <BaseLayout>
      <div className="w-full my-10">
        <div className="m-10">
          <h2 className="text-3xl lg:text-5xl font-bold lg:w-2/3">
            My acquired knowledge, skills and technology I use
          </h2>
        </div>
        <SkillList />
      </div>
    </BaseLayout>
  );
};

export default SkillPage;
