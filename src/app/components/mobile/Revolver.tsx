import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { buttons, RevolverButton } from '../desktop/Revolver';
import styles from '../desktop/Revolver.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sliderStyles from './Revolver.module.css';

export default function Revolver() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const [rotation, setRotation] = useState(270);
  const [activeButton, setActiveButton] = useState<RevolverButton>(buttons[0]);
  const [displayedButton, setDisplayedButton] = useState<RevolverButton>(
    buttons[0]
  );

  const [isTransitioning, setIsTransitioning] = useState(false);
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex: number, newIndex: number) => {
      const newButton = buttons[newIndex];
      handleButtonClick(newButton);
    },
    dotsClass: `${sliderStyles.dots}`,
  };

  return (
    <section
      ref={sectionRef}
      className='w-full relative mt-[100px] flex flex-col justify-center items-center'
    >
      <h3 className='font-montserrat text-white font-[800] text-[45px] leading-[46px] text-center mb-[146px]'>
        Context-aware{' '}
        <motion.span
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
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
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            ...textVariants,
            visible: {
              ...textVariants.visible,
              transition: {
                ...textVariants.visible.transition,
                delay: 0.4,
              },
            },
          }}
        >
          your Data
        </motion.span>
      </h3>

      <div className='w-full relative mb-[86px]'>
        <div className='inset-0 flex justify-center items-center z-[400]'>
          <Slider
            {...settings}
            className={`w-full ${sliderStyles.sliderContainer}`}
          >
            {buttons.map((button) => (
              <div key={button.name} className='z-[400] flex justify-center'>
                <div className='relative flex justify-center items-center'>
                  <Image
                    src='/robot_wrapper.svg'
                    alt={displayedButton.name.toLowerCase()}
                    width={226}
                    height={456}
                    className='w-[226px] h-[456px]'
                  />

                  <div
                    className={`flex items-center gap-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white transition-all duration-700 ease-in-out
                    ${
                      isTransitioning
                        ? 'opacity-0 scale-95'
                        : 'opacity-100 scale-100'
                    }`}
                  >
                    <Image
                      src={button.icon}
                      alt={button.name.toLowerCase()}
                      width={173}
                      height={259}
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          <motion.div
            className='absolute left-1/2 w-[650px] h-[650px] flex items-center'
            variants={circleVariants}
          >
            <div
              className='w-full h-full absolute rounded-full border-2 transition-all duration-700 z-[-10]'
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
          </motion.div>

          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className='absolute rounded-full border border-[#8F6EFF]'
              style={{
                width: `${356 + i * 30}px`,
                height: `${356 + i * 30}px`,
                filter: 'blur(0.625px)',
                opacity: Math.max(0, (12 - i) / 12),
                zIndex: -1,
              }}
            />
          ))}
        </div>
      </div>

      <motion.div
        variants={buttonVariants}
        className={`flex flex-col p-[20px] font-montserrat gap-4 text-center`}
      >
        <p className='font-[800] text-[32px] text-white leading-[49px] pr-[15px]'>
          {displayedButton.name}
        </p>
        <p className='font-[400] text-white text-[20px] leading-[25px] pr-[15px]'>
          {displayedButton.description}
        </p>
      </motion.div>
    </section>
  );
}
