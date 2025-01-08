import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function Companion() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.3,
    margin: '0px 0px -200px 0px',
  });

  return (
    <section
      ref={sectionRef}
      className='relative px-[120px] flex flex-col w-[1440px] m-auto scroll-smooth'
    >
      <div className='flex justify-center items-center pt-[44px]'>
        <h1 className='font-montserrat font-extrabold text-[72px] leading-[80px] text-center text-white'>
          Create Your Personal
          <br />
          <motion.span
            initial={{ color: '#FFFFFF' }}
            animate={isInView ? { color: '#6C3AF8' } : { color: '#FFFFFF' }}
            transition={{ duration: 0.8, delay: 0.8, ease: 'easeInOut' }}
            className='text-[#6C3AF8]'
          >
            AI Companion
          </motion.span>
        </h1>
      </div>

      <div className='grid grid-cols-12 gap-8 mt-[53px]'>
        <motion.div
          className='col-span-4 flex justify-center items-center relative'
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src='/phone_blob.png'
            alt='Blob Hero'
            width={326}
            height={659}
          />

          <div className='flex justify-center items-center'>
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className={`absolute rounded-full border border-[#8F6EFF]`}
                style={{
                  width: `${375 + i * 50}px`,
                  height: `${375 + i * 50}px`,
                  filter: 'blur(0.625px)',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  opacity: Math.max(0, (10 - i) / 10),
                  zIndex: -1,
                }}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          className='col-span-8 gap-2 relative flex flex-col justify-center items-center'
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className='font-montserrat font-[300] text-[32px] leading-[39px] text-white w-full text-center'
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.6 }}
          >
            Simply download our app and train your own private personalized AI
            model, built to enhance your daily life.
          </motion.h2>

          <motion.button
            className='flex flex-row justify-center items-center px-6 py-2 gap-2 w-[218px] h-[44px] bg-[#6C3AF8] rounded-[20px] mt-[54px]'
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className='font-roboto font-normal text-xs text-white'>
              Download App
            </span>
          </motion.button>
        </motion.div>
      </div>

      <div className='flex justify-center items-center my-[21px]'>
        <Image src='/arrow_1.svg' alt='Blob Hero' width={803} height={398} />
      </div>
    </section>
  );
}
