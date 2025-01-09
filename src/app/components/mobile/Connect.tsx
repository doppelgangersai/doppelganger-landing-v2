import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
export default function Connect() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.3,
    margin: '0px 0px -200px 0px',
  });

  const textVariants = {
    hidden: {
      color: '#FFFFFF',
      transition: { duration: 0.5 },
    },
    visible: {
      color: '#6C3AF8',
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      ref={sectionRef}
      className='w-full h-full relative mt-[100px] flex flex-col justify-center items-center'
    >
      <div className='self-center mb-[66px]'>
        <h2 className='font-montserrat font-[800] text-[45px] leading-[45px] text-center text-white'>
          <motion.span
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            variants={textVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Unlock <br />
          </motion.span>{' '}
          the true{' '}
          <motion.span
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            variants={textVariants}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            power
          </motion.span>{' '}
          of{' '}
          <motion.span
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            variants={textVariants}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            your data
          </motion.span>
          <br />
          with{' '}
          <motion.span
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            variants={textVariants}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Privacy{' '}
          </motion.span>
          Preserving{' '}
          <motion.span
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            variants={textVariants}
            transition={{ duration: 0.5, delay: 1 }}
          >
            RAG!
          </motion.span>
        </h2>
      </div>

      <Image src='/mob_.png' alt='Connect' width={356} height={678} />
      <Image src='/phone_privacy.svg' alt='Connect' width={233} height={470} />
    </section>
  );
}
