import { useEffect, useState } from 'react';

const BackgroundMovingText = () => {
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
    <div
      className="text-transparent font-mono lg:text-[30rem] text-[20rem] m-10 blur-sm"
      style={{ WebkitTextStroke: '7px gray' }}
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
  );
};

export default BackgroundMovingText;
