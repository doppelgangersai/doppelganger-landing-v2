'use client';

import { useState } from 'react';
import Image from 'next/image';

interface RevolverButton {
  name: string;
  rotate: number;
  description: string;
  icon: string;
  color: string;
}

const buttons: RevolverButton[] = [
  {
    name: 'Personal Coach',
    rotate: 0,
    description:
      'Share your twin with your friends, family, girlfriend or boyfriend, but remember doppelgangers can’t lie. Do you have anything to hide?',
    icon: '/personal_coach.png',
    color: 'hover:text-[#E27919]',
  },
  {
    name: 'Chat',
    rotate: 50,
    description:
      "Chat with your or other user's twins or even allow your twin to connect with other twins, who knows maybe they'll find you a new friend or conspire to take over the world",
    icon: '/personal_coach.png',
    color: 'hover:text-[#4CAF50]',
  },
  {
    name: 'Connect',
    rotate: 102,
    description:
      'Connect your Doppelganger to your group chats on social media, messengers or your email accounts via our API to outsource your daily repetitive tasks',
    icon: '/personal_coach.png',
    color: 'hover:text-[#2196F3]',
  },
  {
    name: 'Monetize',
    rotate: 152,
    description:
      'Monetize your doppelganger via paid chat or share your expertise, knowledge and experiences by offering your dataset to other users for training of their twins',
    icon: '/personal_coach.png',
    color: 'hover:text-[#9C27B0]',
  },
  {
    name: 'Create',
    rotate: 200,
    description:
      'Create application specific chatbots by further training your twin for a specific role like personal assistant, sales bot, support bot, digital girlfriend/boyfriend ect.',
    icon: '/personal_coach.png',
    color: 'hover:text-[#FF5722]',
  },
  {
    name: 'Merge',
    rotate: 250,
    description:
      'Merge your twin with any other user\'s twin to create new entity that share the characteristics of both "parents"',
    icon: '/personal_coach.png',
    color: 'hover:text-[#E27919]',
  },
];

export default function Revolver() {
  const [activeButton, setActiveButton] = useState<RevolverButton>(buttons[0]);

  return (
    <section className='relative w-full h-screen flex flex-col'>
      <div className='flex flex-col items-center justify-center'>
        <h3 className='font-montserrat text-white font-[800] text-[45px] leading-[46px]'>
          <span className='text-[#6C3AF8]'>Create</span> personalized{' '}
          <span className='text-[#6C3AF8]'>AI Agents</span>
        </h3>
      </div>

      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className='absolute rounded-full border border-[#8F6EFF]'
            style={{
              width: `${375 + i * 50}px`,
              height: `${375 + i * 50}px`,
              filter: 'blur(0.625px)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              opacity: Math.max(0, (10 - i) / 10),
              zIndex: 0,
            }}
          />
        ))}
      </div>

      <div className='relative'>
        <div className='absolute top-[120px] left-[45%] w-[612px] h-[612px] flex items-center'>
          <div className='w-full h-full absolute rounded-full border-2 border-[#E27919] transition-colors duration-300'>
            {buttons.map((button) => (
              <button
                key={button.name}
                onClick={() => setActiveButton(button)}
                className={`absolute p-0 border-none bg-transparent text-[#181624] transition-colors duration-300 
                  ${button.color} ${getButtonPosition(button.name)}`}
                style={{ transform: `rotate(${button.rotate}deg)` }}
              >
                <Image
                  src={button.icon}
                  alt={button.name.toLowerCase()}
                  width={60}
                  height={60}
                />

                <span className='opacity-0 hover:opacity-100 text-white bg-[#181624] px-2.5 py-1.5 rounded absolute left-full -bottom-6 transition-opacity duration-300 font-semibold'>
                  {button.name}
                </span>
              </button>
            ))}
          </div>

          <div className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2'>
            <Image
              src='/robot_wrapper.svg'
              alt={activeButton.name.toLowerCase()}
              width={334}
              height={457}
              className='w-[334px] h-[457px] md:w-[167px] '
            />
            <div className='flex items-center gap-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white'>
              <Image
                src={activeButton.icon}
                alt={activeButton.name.toLowerCase()}
                width={173}
                height={259}
              />
              <span className='text-4xl leading-[46px] font-black md:text-xl md:leading-6'>
                {activeButton.name}
              </span>
            </div>
          </div>

          <p className='pl-[200px] pr-[50px] text-white text-xl leading-[25px] md:hidden'>
            {activeButton.description}
          </p>
        </div>
      </div>
    </section>
  );
}

function getButtonPosition(name: string): string {
  const positions = {
    Share: 'left-[-5%] top-[45%]',
    Chat: 'top-[85%] left-[14%]',
    Connect: 'left-[57%] top-[94%]',
    Monetize: 'left-[90%] top-[67%]',
    Create: 'top-[27%] right-[-2%]',
    Merge: 'top-[-3%] right-[28%]',
  };
  return positions[name as keyof typeof positions];
}
