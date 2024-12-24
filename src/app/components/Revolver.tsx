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
            {buttons.map((button, index) => {
              const angle = (340 / buttons.length) * index - 90;
              const radius = 306;

              const x = radius * Math.cos((angle * Math.PI) / 180);
              const y = radius * Math.sin((angle * Math.PI) / 180);

              return (
                <div
                  key={button.name}
                  onClick={() => setActiveButton(button)}
                  className='absolute cursor-pointer bg-[#181624] text-[#fff] font-inter rounded-[12px] flex items-center justify-center'
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                    left: '50%',
                    top: '50%',
                  }}
                >
                  <div
                    className={`block ${button.color} transform -rotate-[${
                      angle + 75
                    }deg] whitespace-nowrap font-[600] text-[12px] leading-[16px] px-3 py-1.5`}
                  >
                    {button.name}
                  </div>
                </div>
              );
            })}
          </div>

          <div className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center justify-center'>
            <Image
              src='/robot_wrapper.svg'
              alt={activeButton.name.toLowerCase()}
              width={334}
              height={457}
              className='w-[334px] h-[457px]'
            />
            <div className='flex items-center gap-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white'>
              <Image
                src={activeButton.icon}
                alt={activeButton.name.toLowerCase()}
                width={173}
                height={259}
              />
            </div>
          </div>

          <div className='flex flex-col items-center justify-center pl-[200px] pr-[50px] font-montserrat gap-4'>
            <p className='font-[800] text-[40px] text-white leading-[49px]'>
              {activeButton.name}
            </p>
            <p className='font-[400] text-white text-[20px] leading-[25px]'>
              {activeButton.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
