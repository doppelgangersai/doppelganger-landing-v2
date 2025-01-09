'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Revolver.module.css';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef } from 'react';

interface RevolverButton {
  name: string;
  description: string;
  icon: string;
  color: string;
}

const buttons: RevolverButton[] = [
  {
    name: 'Personal Coach',
    description:
      "Share your twin with your friends, family, girlfriend or boyfriend, but remember doppelgangers can't lie. Do you have anything to hide?",
    icon: '/robots/coach 2.png',
    color: '#E27919',
  },
  {
    name: 'Therapist',
    description:
      "Chat with your or other user's twins or even allow your twin to connect with other twins, who knows maybe they'll find you a new friend or conspire to take over the world",
    icon: '/robots/therapist 2.png',
    color: '#4CAF50',
  },
  {
    name: 'Personal Assistant',
    description:
      'Connect your Doppelganger to your group chats on social media, messengers or your email accounts via our API to outsource your daily repetitive tasks',
    icon: '/robots/assistant 2.png',
    color: '#2196F3',
  },
  {
    name: 'Sport',
    description:
      'Monetize your doppelganger via paid chat or share your expertise, knowledge and experiences by offering your dataset to other users for training of their twins',
    icon: '/robots/sport 2.png',
    color: '#9C27B0',
  },
  {
    name: 'Fitness Coach',
    description:
      'Create application specific chatbots by further training your twin for a specific role like personal assistant, sales bot, support bot, digital girlfriend/boyfriend ect.',
    icon: '/robots/sunglasses 1.png',
    color: '#FF5722',
  },
  {
    name: 'Social Media Manager',
    description:
      'Merge your twin with any other user\'s twin to create new entity that share the characteristics of both "parents"',
    icon: '/robots/news 2.png',
    color: '#E27919',
  },
  {
    name: 'Dating Agent',
    description:
      'Merge your twin with any other user\'s twin to create new entity that share the characteristics of both "parents"',
    icon: '/robots/tt 2.png',
    color: '#E27919',
  },
  {
    name: 'Recruiter Agent',
    description:
      'Merge your twin with any other user\'s twin to create new entity that share the characteristics of both "parents"',
    icon: '/robots/tree 2.png',
    color: '#E27919',
  },
];

export default function Revolver() {
  const [rotation, setRotation] = useState(270);
  const [activeButton, setActiveButton] = useState<RevolverButton>(buttons[0]);
  const [displayedButton, setDisplayedButton] = useState<RevolverButton>(
    buttons[0]
  );
  const [isTransitioning, setIsTransitioning] = useState(false);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  const handleButtonClick = (button: RevolverButton) => {
    const currentIndex = buttons.findIndex((b) => b.name === button.name);
    const angle = (360 / buttons.length) * currentIndex - 270;
    setRotation(-angle);
    setIsTransitioning(true);

    setTimeout(() => {
      setDisplayedButton(button);
      setIsTransitioning(false);
    }, 350);

    setActiveButton(button);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const circleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 20,
      },
    },
  };

  const textVariants = {
    hidden: {
      color: '#FFFFFF',
      y: 20,
      opacity: 0,
    },
    visible: {
      color: '#6C3AF8',
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      initial='hidden'
      animate={controls}
      variants={containerVariants}
      className='relative h-screen flex flex-col pt-[45px] w-[1440px] m-auto scroll-smooth'
    >
      <div className='grid grid-cols-12 w-full'>
        <div className='col-span-12 flex justify-center items-center relative'>
          <h3 className='font-montserrat text-white font-[800] text-[45px] leading-[46px] absolute top-[-300px]'>
            Context-aware{''}
            <motion.span
              variants={{
                ...textVariants,
                visible: {
                  ...textVariants.visible,
                  transition: {
                    ...textVariants.visible.transition,
                    delay: 0.2,
                  },
                },
              }}
            >
              AI agents
            </motion.span>
            <br />
            Powered by{' '}
            <motion.span
              variants={{
                ...textVariants,
                visible: {
                  ...textVariants.visible,
                  transition: {
                    ...textVariants.visible.transition,
                    delay: 0.2,
                  },
                },
              }}
            >
              your Data
            </motion.span>
          </h3>
        </div>
      </div>

      <div className='flex flex-col items-center justify-center z-[200]'></div>

      <motion.div className='relative' variants={containerVariants}>
        <motion.div
          className='absolute top-[70px] left-[45%] w-[550px] h-[550px] flex items-center'
          variants={circleVariants}
        >
          <motion.div
            className='absolute w-full h-full'
            variants={circleVariants}
          >
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className='absolute rounded-full border border-[#8F6EFF]'
                style={{
                  width: `${412 + i * 50}px`,
                  height: `${412 + i * 50}px`,
                  filter: 'blur(0.625px)',
                  top: '50%',
                  left: 'calc(50% - 290px)',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 0,
                  opacity: Math.max(0, (12 - i) / 12),
                }}
              />
            ))}
          </motion.div>

          <div
            className='w-full h-full absolute rounded-full border-2 transition-all duration-700'
            style={{
              borderColor: activeButton.color,
              transform: `rotate(${rotation}deg)`,
            }}
          >
            {buttons.map((button, index) => {
              const angle = (360 / buttons.length) * index - 90;
              const radius = 275;

              const x = radius * Math.cos((angle * Math.PI) / 180);
              const y = radius * Math.sin((angle * Math.PI) / 180);

              const activeIndex = buttons.findIndex(
                (b) => b.name === activeButton.name
              );

              const isNeighbor =
                index === (activeIndex + 1) % buttons.length ||
                index === (activeIndex - 1 + buttons.length) % buttons.length;

              return (
                <div
                  key={button.name}
                  onClick={() => handleButtonClick(button)}
                  className={`absolute cursor-pointer bg-[#181624] text-[#fff] font-inter rounded-[12px] flex items-center justify-center transition-all duration-700 
                    ${
                      activeButton.name === button.name
                        ? 'scale-110'
                        : 'scale-100'
                    }
                    ${isNeighbor ? 'opacity-0' : 'opacity-100'}`}
                  style={{
                    transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%)) rotate(${-rotation}deg)`,
                    left: '50%',
                    top: '50%',
                  }}
                >
                  <div
                    className={styles.buttonText}
                    style={
                      {
                        '--button-color': button.color,
                      } as React.CSSProperties
                    }
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
              alt={displayedButton.name.toLowerCase()}
              width={334}
              height={457}
              className='w-[334px] h-[457px]'
            />
            <div
              className={`flex items-center gap-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white transition-all duration-700 ease-in-out
              ${
                isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}
            >
              <Image
                src={displayedButton.icon}
                alt={displayedButton.name.toLowerCase()}
                width={173}
                height={259}
              />
            </div>
          </div>

          <motion.div
            variants={buttonVariants}
            className={`flex flex-col items-center justify-center pl-[200px] pr-[50px] font-montserrat gap-4`}
          >
            <p className='font-[800] text-[40px] text-white leading-[49px]'>
              {displayedButton.name}
            </p>
            <p className='font-[400] text-white text-[20px] leading-[25px]'>
              {displayedButton.description}
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
