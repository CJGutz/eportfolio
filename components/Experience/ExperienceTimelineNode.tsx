import { ExperienceListNodeType } from 'data/experiences';
import Image from 'next/image';
import rightArrow from 'static/icons/rightArrow.svg';

const ExperienceTimelineNode = ({
  id,
  experience,
}: {
  id: string;
  experience: ExperienceListNodeType;
}) => {
  const getDateFormat = (date: Date) =>
    date.toLocaleString('default', { month: 'short' }) +
    ' ' +
    date.getFullYear();
  return (
    <li className="mb-10 ml-4">
      <div className="absolute w-8 h-8 bg-gray-200 rounded-full mt-1.5 -left-6 border border-white ">
        <Image src={rightArrow} alt={'arrow'} className="w-full h-full" />
      </div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-900 ">
        <span>{getDateFormat(experience.dateStart)}</span>
        {experience.dateEnd && (
          <span>
            {' - '}
            <span>{getDateFormat(experience.dateEnd!!)}</span>
          </span>
        )}
      </time>
      <h3 className="text-2xl font-semibold text-gray-900 ">
        {experience.title}
      </h3>
      <p className="mb-4 text-base font-normal text-gray-500 ">
        {experience.shortDescription}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 place-items-start">
        {experience.demoLink && (
          <a
            href={experience.demoLink}
            className="inline-flex mvn-button px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 focus:z-10 focus:ring-4 focus:outline-transparent focus:ring-gray-200 focus:text-blue-700 "
          >
            Demo
            <Image src={rightArrow} alt="right arrow" className="ml-2" />
          </a>
        )}
        {experience.sourceLink && (
          <a
            href={experience.sourceLink}
            className="inline-flex mvn-button px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 focus:z-10 focus:ring-4 focus:outline-transparent focus:ring-gray-200 focus:text-blue-700 "
          >
            Source Code
            <Image src={rightArrow} alt="right arrow" className="ml-2" />
          </a>
        )}
      </div>
    </li>
  );
};

export default ExperienceTimelineNode;
