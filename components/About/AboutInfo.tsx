import eisolutionsProfile from '/static/carl/eisolutions-profile.jpg';
import gotlandGaard from '/static/carl/gotland-gaard.jpg';
import hovedbygget from '/static/carl/hovedbygget.jpg';
import indexIntervju from '/static/carl/index-intervju.jpg';
import pizBoe from '/static/carl/piz-boe.jpg';
import ski from '/static/carl/ski.jpg';
import storheia from '/static/carl/storheia.jpg';
import Image from 'next/image';

const AboutInfo = () => {
  const aboutInfoText =
    "Oh no. I didn't think that you would actually read this. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in augue nulla. Fusce fringilla placerat ante vel gravida. Sed elementum porta iaculis. Pellentesque vel justo nibh. Nam lorem lacus, porttitor eget congue a, eleifend sit amet felis. Praesent rutrum tempor egestas. Mauris purus arcu, lobortis quis nibh in, varius malesuada velit.";

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
            className="snap-center"
            key={alt}
            src={src}
            alt={alt}
            width={500}
            height={500}
          />
        ))}
      </div>
      <p className="p-4">{aboutInfoText}</p>
    </div>
  );
};

export default AboutInfo;
