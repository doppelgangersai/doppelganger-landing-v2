import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function Privacy() {
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
      className='w-full h-full flex flex-col justify-center items-center mt-[200px]'
    >
      <h2 className='font-montserrat text-[45px] font-extrabold leading-tight text-white text-center mb-[63px]'>
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

      <Image src='/privacy_mobile.png' alt='Privacy' width={356} height={678} />
    </section>
  );
}
