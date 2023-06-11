import gotlandGaard from '/static/carl/gotland-gaard.jpg';
import hovedbygget from '/static/carl/hovedbygget.jpg';
import indexIntervju from '/static/carl/index-intervju.jpg';
import pizBoe from '/static/carl/piz-boe.jpg';
import ski from '/static/carl/ski.jpg';
import storheia from '/static/carl/storheia.jpg';
import Image from 'next/image';


const AboutInfo = () => {
  const aboutInfoText = `
    Hello and welcome to my personal website. My name is Carl Johan Gützkow and I am currently studying Computer Science at NTNU. 
    Learning new things is what drives me. I am always looking for new challenges that might improve my skills or to learn something entirely new.
    I love to work in and manage teams were everyone is open to new ideas and discussions.
    When everyone understands the goal and is motivated by it, everyone can be effective.
    My ideal work environment provide opportunities for growth while learning from experienced proffessionals.
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
    <div className="w-full mt-96 p-10">
      <h1 id="about" className="text-4xl font-bold">
        About me
      </h1>
      <div className="p-10 flex flex-row gap-x-3 overflow-x-scroll snap-x snap-mandatory">
        {images.map(({ src, alt }) => (
          <Image
            className="snap-center w-[500px] max-h-[500px]"
            key={alt}
            src={src}
            alt={alt}
          />
        ))}
      </div>
      <div className='grid place-items-center'>
      <p className="p-10 max-w-4xl ">{aboutInfoText}</p>
      </div>
    </div>
  );
};

export default AboutInfo;
