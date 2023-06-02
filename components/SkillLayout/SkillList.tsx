import { Skills } from 'data/skills';
import SkillCard from 'components/SkillLayout/SkillCard';

const SkillList = () => {
  let skillList = Array.from(Skills.entries());
  skillList.sort(
    (a, b) =>
      (b[1].level ?? 0) -
      (a[1].level ?? 0) +
      (b[1].name.length > a[1].name.length ? 0.5 : -0.5)
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 p-2 m-5 items-stretch">
      {skillList.map((skill) => (
        <SkillCard key={skill[1].name} skill={skill[1]} id={skill[0]} />
      ))}
    </div>
  );
};

export default SkillList;
