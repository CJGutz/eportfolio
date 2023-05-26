import Image from 'next/image';
import BackgroundMovingText from './BackgroundText';
import carl from '/static/carl.jpg';
import { useRef, useEffect, useState } from 'react';

const HeroBanner = () => {
  const portrait = useRef<HTMLImageElement>(null);
  const [bboxSize, setBBoxSize] = useState(0);

  useEffect(() => {
    const updateBBoxSize = () => {
      const imageElement = portrait.current;
      const imageSize = imageElement?.getBoundingClientRect();
      console.log("Updated!!")
      setBBoxSize(imageSize?.width || 0);
    };

    updateBBoxSize();

    window.addEventListener('resize', updateBBoxSize);
    return () => window.removeEventListener('resize', updateBBoxSize);
  }, []);

  return (
    <div className="overflow-hidden relative">
      <div className="flex relative justify-center">
        <div
          className={`absolute bg-gradient-radial p-5 from-slate-500 to-off-white z-10 border-4 top-32 ml-16 border-black background-box`}
          style={{ width: `${bboxSize-40}px`, height: `${bboxSize-40}px` }}
        ></div>
        <Image
          className="absolute top-20 p-5 z-10 "
          alt="Carl Gützkow"
          src={carl}
          width={500}
          ref={portrait}
        />
      </div>
      <BackgroundMovingText />
    </div>
  );
};

export default HeroBanner;
