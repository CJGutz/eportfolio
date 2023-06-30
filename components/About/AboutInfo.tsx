import gotlandGaard from '/static/carl/gotland-gaard.jpg';
import hovedbygget from '/static/carl/hovedbygget.jpg';
import indexIntervju from '/static/carl/index-intervju.jpg';
import pizBoe from '/static/carl/piz-boe.jpg';
import ski from '/static/carl/ski.jpg';
import storheia from '/static/carl/storheia.jpg';
import Image from 'next/image';

const AboutInfo = () => {
  const aboutInfoText = `
    I'm a 21 year old software developer, GIS enthusiast, nature
    explorer and team enhancer. Team development is my passion.
    I enjoy working with people whom I can share my competence with while also
    learning advanced concepts and technologies.
    
    My story of programming began in 7th grade with the kid friendly 
    coding environment Scratch. From that point on I taught myself many programming
    concepts and explored some of the possibilities in this vast field. 
   
    Studying computer science, I further developed my skills and attained a deeper
    understanding of the field while building a foundation for valuable coding 
    practices. Alongside my studies, I join the voluntary group Index. There I experienced how effective
    team work enhanced both the software and the joy of the development process.
  `;

  const images = [
    {
      src: ski,
      alt: 'Me on a randonee ski trip',
    },
    {
      src: storheia,
      alt: 'Me on top of Storheia',
    },
    {
      src: hovedbygget,
      alt: 'Me in front of Hovedbygget NTNU',
    },
    {
      src: gotlandGaard,
      alt: 'Me on Gotland',
    },
    {
      src: indexIntervju,
      alt: 'Me at interview with Tihlde Index',
    },
    {
      src: pizBoe,
      alt: 'Me on top of Piz Boe',
    },
  ];

  return (
    <div className="w-full mt-96 sm-p-10 p-4">
      <h1 id="about" className="text-4xl font-bold">
        About me
      </h1>
      <div className="p-10 flex flex-row gap-x-3 overflow-x-scroll snap-x snap-mandatory">
        {images.map(({ src, alt }) => (
          <Image
            className="snap-center max-w-[500px] h-[500px]"
            key={alt}
            src={src}
            alt={alt}
          />
        ))}
      </div>
      <div className="grid place-items-center">
        <p className="p-10 max-w-4xl whitespace-pre-line text-lg">
          {aboutInfoText}
        </p>
      </div>
    </div>
  );
};

export default AboutInfo;
