import Image from 'next/image';
import BackgroundMovingText from './BackgroundText';
import carl from '/static/carl.jpg';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import linkedin from '/static/icons/linkedin.svg';
import github from '/static/icons/github.svg';
import email from '/static/icons/email.svg';
import { links } from '../Base/BaseLayout';

const HeroBanner = () => {
  const portrait = useRef<HTMLImageElement>(null);
  const [bboxSize, setBBoxSize] = useState(0);

  useEffect(() => {
    const updateBBoxSize = () => {
      const imageElement = portrait.current;
      const imageSize = imageElement?.getBoundingClientRect();
      console.log('Updated!!');
      setBBoxSize(imageSize?.width || 0);
    };

    updateBBoxSize();

    window.addEventListener('resize', updateBBoxSize);
    return () => window.removeEventListener('resize', updateBBoxSize);
  }, []);

  const socialButtons = [
    {
      name: 'Github',
      href: 'https://github.com/cjgutz',
      icon: github,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/carl-g%C3%BCtzkow-3555511a4/',
      icon: linkedin,
    },
    {
      name: 'Email',
      href: 'mailto:cjgutzkow@gmail.com',
      icon: email,
    },
  ];

  return (
    <div className="h-screen">
      <div className="absolute top-0 overflow-hidden">
        <BackgroundMovingText />
      </div>
      <div className="relative grid grid-cols-1 lg:grid-cols-2 place-items-center w-full h-full lg:-top-32">
        <div className="relative m-8 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px]">
          <div
            className={`absolute top-16 ml-16 bg-gradient-radial from-slate-500 to-off-white blur-md border-4 border-black`}
            style={{
              width: `${bboxSize - 40}px`,
              height: `${bboxSize - 40}px`,
            }}
          ></div>
          <Image
            className="absolute top-0 z-10"
            alt="Carl Gützkow"
            src={carl}
            width={500}
            ref={portrait}
          />
        </div>
        <div className="flex flex-col justify-center max-lg:self-start">
          <div className="text-center text-5xl font-bold m-5">
            👋 Welcome, I&apos;m Carl
          </div>
          <div className="flex flex-row justify-center">
            {socialButtons.map(({ name, href, icon }) => (
              <Link key={name} href={href} className="mx-2">
                <Image alt={name} src={icon} width={50} />
              </Link>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4 m-5">
            {links.map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                className="rounded-xl mvn-button hover:bg-off-white border-4 border-gray-500 hover:border-transparent"
              >
                <div className="text-center text-md md:text-2xl font-bold break-keep m-5">
                  {name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
