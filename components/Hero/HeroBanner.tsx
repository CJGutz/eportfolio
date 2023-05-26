import Image from 'next/image';
import { useEffect, useState } from 'react';
import carl from '/static/carl.jpg';

const HeroBanner = () => {
  const [scrollAmount, setScrollAmount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollAmount = scrollTop / window.innerHeight;
      setScrollAmount(scrollAmount * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <div className="overflow-hidden relative">
      <div className='flex relative justify-center'>
        <Image
        className='absolute top-0 m-5'
        alt='Carl Gützkow'
        src={carl}
        width={500}
        />
      </div>
      <div
        className="text-transparent  font-mono lg:text-[30rem] text-[20rem] m-10"
        style={{ WebkitTextStroke: '7px black' }}
      >
        <p
          className="md:ml-20 -mt-44 break-keep"
          style={{ transform: `translateX(-${scrollAmount}rem)` }}
        >
          Carl
        </p>
        <p
          className="-mt-48 break-keep"
          style={{ transform: `translateX(${scrollAmount * 2}rem)` }}
        >
          Gützkow
        </p>
      </div>
    </div>
  );
};

export default HeroBanner;
