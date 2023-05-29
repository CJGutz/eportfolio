import type { NextPage } from 'next';
import BaseLayout from 'components/Base/BaseLayout';
import SkillList from 'components/SkillLayout/SkillList';

const SkillPage: NextPage = () => {
  return (
    <BaseLayout>
      <SkillList />
    </BaseLayout>
  );
};

export default SkillPage;
