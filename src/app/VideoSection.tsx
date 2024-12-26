import React, { useEffect, useState } from 'react';
import { motion, useInView, useScroll } from 'framer-motion';

export default function VideoSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const { scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const updateScrollDirection = () => {
      const currentScroll = scrollY.get();
      setScrollDirection(currentScroll > lastScroll ? 'down' : 'up');
      setLastScroll(currentScroll);
    };

    const unsubscribe = scrollY.on('change', updateScrollDirection);
    return () => unsubscribe();
  }, [scrollY, lastScroll]);

  const slideAnimation = {
    hidden: {
      opacity: 0,
      y: scrollDirection === 'down' ? 50 : -50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      ref={ref}
      className='w-full h-screen overflow-hidden bg-[#2D2A3D] w-[1440px] m-auto scroll-smooth'
    >
      <div className='w-full h-full px-[106px] py-[59px]'>
        <motion.div
          className='relative w-full h-full rounded-[40px] overflow-hidden'
          variants={slideAnimation}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className='absolute top-[56px] left-1/2 -translate-x-1/2 z-[60] w-[1122px]'
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <p className='font-roboto text-[28px] leading-[38px] text-white text-center font-normal'>
              At Doppelgangers AI, we&apos;re revolutionizing the concept of
              personal assistance by harnessing the power of your data through
              your very own AI twin - your Doppelganger.
            </p>
          </motion.div>

          <motion.div
            className='absolute top-0 left-0 w-full h-full z-50 bg-[#1E1B2C] rounded-[40px] overflow-hidden'
            initial={{ scale: 0.95, opacity: 0 }}
            animate={
              isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }
            }
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <video
              className='w-full h-full object-cover'
              autoPlay
              playsInline
              controls
              src='https://www.youtube.com/embed/1NTS8_uOJ_U?si=dDriqAsBsM22CC8j'
            >
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
