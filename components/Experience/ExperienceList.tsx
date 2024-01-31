import { ExperiencesListNode } from 'data/experiences';
import ExperienceTimelineNode from './ExperienceTimelineNode';

const ExperienceList = () => {
  const experienceList = Array.from(ExperiencesListNode.entries());
  experienceList.sort(
    (a, b) => b[1].dateStart.getTime() - a[1].dateStart.getTime()
  );

  return (
    <div className="relative border-l border-gray-600 list-none mx-8">
      {experienceList.map((experience) => (
        <ExperienceTimelineNode
          key={experience[0]}
          id={experience[0]}
          experience={experience[1]}
        />
      ))}
    </div>
  );
};

export default ExperienceList;
