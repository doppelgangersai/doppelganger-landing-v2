'use client';

import { useRef, useState, useCallback, useMemo, useEffect } from 'react';
import Image from 'next/image';
import { buttons, RevolverButton } from '../desktop/Revolver';
import styles from '../desktop/Revolver.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sliderStyles from './Revolver.module.css';

export default function Revolver() {
  const sectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<Slider>(null);
  const [rotation, setRotation] = useState(270);
  const [activeButton, setActiveButton] = useState<RevolverButton>(buttons[0]);
  const [displayedButton, setDisplayedButton] = useState<RevolverButton>(
    buttons[0]
  );
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [sliderInitialized, setSliderInitialized] = useState(false);

  const handleButtonClick = useCallback(
    (button: RevolverButton, fromSlider = false) => {
      if (isTransitioning && !fromSlider) return;

      const currentIndex = buttons.findIndex((b) => b.name === button.name);
      const angle = (360 / buttons.length) * currentIndex - 270;

      if (!fromSlider && sliderRef.current) {
        sliderRef.current.slickGoTo(currentIndex);
      }

      setRotation(-angle);
      setIsTransitioning(true);

      setTimeout(() => {
        setDisplayedButton(button);
        setIsTransitioning(false);
      }, 350);

      setActiveButton(button);
    },
    [isTransitioning, sliderRef]
  );

  useEffect(() => {
    if (!sliderRef.current || !sliderInitialized) return;
    const currentIndex = buttons.findIndex((b) => b.name === activeButton.name);
    sliderRef.current.slickGoTo(currentIndex);
  }, [activeButton.name, sliderRef, sliderInitialized]);

  const settings = useMemo(
    () => ({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: (_oldIndex: number, newIndex: number) => {
        if (!sliderInitialized) return;
        const newButton = buttons[newIndex];
        handleButtonClick(newButton, true);
      },
      afterChange: () => {
        setSliderInitialized(true);
      },
      dotsClass: `${sliderStyles.dots}`,
      cssEase: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
    }),
    [handleButtonClick, sliderInitialized]
  );

  const renderButtons = useMemo(
    () =>
      buttons.map((button, index) => {
        const angle = (360 / buttons.length) * index - 90;
        const radius = 325;
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);

        return (
          <div
            key={button.name}
            onClick={() => handleButtonClick(button)}
            className={`absolute cursor-pointer bg-[#181624] text-[#fff] font-inter rounded-[12px] flex items-center justify-center transition-all duration-700 
            ${activeButton.name === button.name ? 'scale-110' : 'scale-100'}
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
      }),
    [activeButton.name, handleButtonClick, rotation]
  );

  const renderCircles = useMemo(
    () =>
      [...Array(12)].map((_, i) => (
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
      )),
    []
  );

  return (
    <section
      ref={sectionRef}
      className='w-full relative mt-[100px] flex flex-col justify-center items-center'
    >
      <h3 className='font-montserrat text-white font-[800] text-[45px] leading-[46px] text-center mb-[146px]'>
        Context-aware <span>AI agents</span>
        <br />
        Powered by <span>your Data</span>
      </h3>

      <div className='w-full relative mb-[86px]'>
        <div className='inset-0 flex justify-center items-center z-[400]'>
          <div className='relative flex justify-center items-center'>
            <Image
              src='/robot_wrapper.svg'
              alt={displayedButton.name.toLowerCase()}
              width={226}
              height={456}
              className='w-[226px] h-[456px] absolute'
            />

            <Slider
              ref={sliderRef}
              {...settings}
              className={`${sliderStyles.sliderContainer} z-[550] w-[226px] h-[456px] `}
            >
              {buttons.map((button) => (
                <div
                  key={button.name}
                  className='flex justify-center relative z-[450]'
                >
                  <div
                    className={`flex items-center justify-center gap-3 w-[226px] h-[456px] text-white transition-all duration-700 ease-in-out z-[600]
                        ${
                          isTransitioning
                            ? 'opacity-0 scale-95'
                            : 'opacity-100 scale-100'
                        }`}
                  >
                    <Image
                      src={button.icon || '/placeholder.svg'}
                      alt={button.name.toLowerCase()}
                      width={173}
                      height={259}
                      className='z-[600]'
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className='absolute left-1/2 w-[650px] h-[650px] flex items-center'>
            <div
              className='w-full h-full absolute rounded-full border-2 transition-all duration-700 z-[-10]'
              style={{
                borderColor: activeButton.color,
                transform: `rotate(${rotation}deg)`,
              }}
            >
              {renderButtons}
            </div>
          </div>

          {renderCircles}
        </div>
      </div>

      <div
        className={`flex flex-col p-[20px] font-montserrat gap-4 text-center`}
      >
        <p className='font-[800] text-[32px] text-white leading-[49px] pr-[15px]'>
          {displayedButton.name}
        </p>
        <p className='font-[400] text-white text-[20px] leading-[25px] pr-[15px]'>
          {displayedButton.description}
        </p>
      </div>
    </section>
  );
}
