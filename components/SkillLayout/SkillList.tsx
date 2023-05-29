import { Skills } from 'data/skills';
import SkillCard from 'components/SkillLayout/SkillCard';

const SkillList = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 p-2 m-5 items-stretch">
        {Skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillList;
