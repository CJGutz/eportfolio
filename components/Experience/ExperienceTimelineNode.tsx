import { ExperienceListNodeType } from 'data/experiences';
import useIsInClientRange from 'hooks/IsInClientRange';
import Image from 'next/image';
import { createRef, useRef } from 'react';
import rightArrow from 'static/icons/rightArrow.svg';

const ExperienceTimelineNode = ({
  id,
  experience,
}: {
  id: string;
  experience: ExperienceListNodeType;
}) => {
  const informationRef = createRef<HTMLDivElement>();
  const informationInRange = useIsInClientRange(informationRef);

  const imageRef = createRef<HTMLDivElement>();
  const imageInRange = useIsInClientRange(imageRef);

  const getDateFormat = (date: Date) =>
    date.toLocaleString('default', { month: 'short' }) +
    ' ' +
    date.getFullYear();
  return (
    <li className="mt-12 ml-10">
      <div
        ref={imageRef}
        className={`${
          imageInRange ? 'translate-x-0' : '-translate-x-10 opacity-0'
        } duration-700 transition-all absolute w-12 h-12 bg-gray-200 rounded-full mt-4 -left-6 border border-black`}
      >
        {experience.image && (
          <Image
            src={experience.image}
            alt={`Image of ${experience.title}`}
            className="w-full h-full rounded-full"
          />
        )}
      </div>
      <div
        className={`${
          informationInRange ? 'translate-x-0' : 'translate-x-44 opacity-0'
        } transition-all duration-700`}
        ref={informationRef}
      >
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
      </div>
    </li>
  );
};

export default ExperienceTimelineNode;
