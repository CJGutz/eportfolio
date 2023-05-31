import { Skills } from 'data/skills';
import SkillCard from 'components/SkillLayout/SkillCard';

const SkillList = () => {
  let skillList = Array.from(Skills.entries());
  skillList.sort((a, b) => b[1].description.length - a[1].description.length);

  return (
    <div className="w-full my-10">
      <div className="m-10">
        <h2 className="text-3xl font-bold lg:w-1/2">
          My acquired knowledge, skills and technology I use
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 p-2 m-5 items-stretch">
        {skillList.map((skill) => (
          <SkillCard key={skill[1].name} skill={skill[1]} id={skill[0]} />
        ))}
      </div>
    </div>
  );
};

export default SkillList;
