import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Privacy = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 100 },
    visible: {
      opacity: 1,
      scale: 1.1,
      y: 0,
      transition: {
        type: 'spring',
        duration: 1.2,
        bounce: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section
      ref={sectionRef}
      className='min-h-screen flex items-center px-6 py-[90px] md:p-[90px] w-[1440px] m-auto scroll-smooth'
    >
      <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-[118px]'>
        <motion.div
          className='order-2 md:order-1'
          variants={imageVariants}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
        >
          <Image
            src='/blockchain.png'
            alt='Защита данных и конфиденциальность'
            width={637}
            height={657}
            className='w-full max-w-[637px] mx-auto transform scale-110 md:scale-[1.2]'
            priority
          />
        </motion.div>

        <div className='order-1 md:order-2 font-montserrat text-center'>
          <h2 className='text-4xl md:text-6xl lg:text-[72px] font-extrabold leading-tight md:leading-[80px] text-white'>
            {['Your', 'Data privacy', 'is our', '# 1 Priority'].map(
              (text, index) => (
                <motion.span
                  key={index}
                  className='block'
                  style={{
                    color: isInView && index % 2 === 1 ? '#6C3AF8' : '#FFFFFF',
                    transition: 'color 3.8s ease-in-out',
                  }}
                  variants={textVariants}
                  initial='hidden'
                  animate={isInView ? 'visible' : 'hidden'}
                  custom={index}
                >
                  {text}
                </motion.span>
              )
            )}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
