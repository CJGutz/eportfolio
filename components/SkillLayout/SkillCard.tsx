import { SkillType } from 'data/skills';
import Image from 'next/image';

const SkillCard = ({ skill }: { skill: SkillType }) => {
  const skillPercent = (skill.level!! / 5) * 100;

  return (
    <div className="flex flex-col gap-5 justify-center bg-off-white p-4 shadow-xl rounded-tl-xl rounded-br-xl">
      <div className="grid grid-cols-1 h-full md:grid-cols-3 gap-6 items-center">
        <div className="flex flex-wrap justify-center flex-row md:flex-col gap-6">
          <h3 className="text-3xl font-bold whitespace-nowrap">{skill.name}</h3>
          {skill.icon && (
            <Image
              src={skill.icon}
              alt={`Icon of ${skill.name}`}
              width={100}
              height={100}
            />
          )}
        </div>
        <div className="md:col-span-2 flex flex-col h-full">
          <p className="mb-4 grow">{skill.description}</p>
          {skill.level && (
            <div className=" w-full z-10 justify-center relative text-center p-2">
              <div
                style={{ width: `${skillPercent}%` }}
                className={`rounded-l-xl ${
                  skillPercent === 100 ? 'rounded-r-xl' : ''
                } bg-blue-300 h-10 absolute top-0 left-0`}
              ></div>
              <div className="relative">{skill.level!!} / 5</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
