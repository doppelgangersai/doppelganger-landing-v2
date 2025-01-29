'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Revolver.module.css';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef } from 'react';

export interface RevolverButton {
  name: string;
  description: string;
  icon: string;
  color: string;
}

export const buttons: RevolverButton[] = [
  {
    name: 'Personal Assistant',
    description:
      'Personalized AI agent that understands your habits, preferences, and goals, turning your daily routine into a seamless, personalized experience.',
    icon: '/assistant.png',
    color: '#E27919',
  },
  {
    name: 'Therapist',
    description:
      'Your personalized mental wellness advisor that uses your personal data live streams to understand your mood, stress levels, and behavior patterns, offering real-time guidance.',
    icon: '/finance.png',
    color: '#4CAF50',
  },
  {
    name: 'Dating Agent',
    description:
      'Transform your swiping experience with your personal dating concierge that matches you with the most compatible partners and even organizing dates on your behalf',
    icon: '/dating.png',
    color: '#2196F3',
  },
  {
    name: 'Social Media Manager',
    description:
      'Elevate your social media game with an SMM manager that not only proactively creates posts on the latest news in your style but engages the audience replying to them 24/7 building stronger community',
    icon: '/smm.png',
    color: '#9C27B0',
  },
  {
    name: 'Fitness Coach',
    description:
      'AI coach that analyzes your movement, sleep, and nutrition patterns to craft a fitness regime that evolves with you, pushing you towards the best version of yourself',
    icon: '/fitness.png',
    color: '#FF5722',
  },
  {
    name: 'Recruiter Agent',
    description:
      "Your personal job hunter agent who understands your career goals, applies for positions that fit your profile, and navigates interview processes, allowing you to land the job you're meant for ",
    icon: '/recruiter.png',
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
      className='relative h-[600px] flex flex-col pt-[45px] w-[1440px] m-auto scroll-smooth'
    >
      <div className='grid grid-cols-12 w-full'>
        <div className='col-span-12 flex justify-center items-center relative'>
          <h3 className='font-montserrat text-white font-[800] text-[45px] leading-[46px] absolute top-[-300px]'>
            Context-aware{' '}
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

        <div className='col-span-12 grid grid-cols-12 justify-center items-center relative'>
          <motion.div
            className='w-full h-full col-start-4 mt-[300px] relative -ml-[20px]'
            variants={circleVariants}
          >
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className='absolute rounded-full border border-[#8F6EFF] z-[0]'
                style={{
                  width: `${412 + i * 50}px`,
                  height: `${412 + i * 50}px`,
                  filter: 'blur(0.625px)',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 0,
                  opacity: Math.max(0, (12 - i) / 12),
                }}
              />
            ))}

            <div className='absolute -translate-y-1/2 -translate-x-1/2 w-[334px] h-[457px] z-[400] mt-[31px]'>
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
              className='absolute top-[-300px] w-[650px] h-[650px] flex items-center'
              variants={circleVariants}
            >
              <div
                className='w-full h-full absolute rounded-full border-2 transition-all duration-700 z-[300]'
                style={{
                  borderColor: activeButton.color,
                  transform: `rotate(${rotation}deg)`,
                }}
              >
                {buttons.map((button, index) => {
                  const angle = (360 / buttons.length) * index - 90;
                  const radius = 325;

                  const x = radius * Math.cos((angle * Math.PI) / 180);
                  const y = radius * Math.sin((angle * Math.PI) / 180);

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
                    opacity-100`}
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

              <motion.div
                variants={buttonVariants}
                className={`flex flex-col pl-[150px] pr-[50px] font-montserrat gap-4`}
              >
                <p className='font-[800] text-[40px] text-white leading-[49px] pr-[15px]'>
                  {displayedButton.name}
                </p>
                <p className='font-[400] text-white text-[20px] leading-[25px] pr-[15px]'>
                  {displayedButton.description}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
