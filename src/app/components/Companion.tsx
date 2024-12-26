import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function Companion() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.3,
    margin: '0px 0px -200px 0px',
  });

  return (
    <section
      ref={sectionRef}
      className='relative h-screen px-[120px] flex flex-col w-[1440px] m-auto scroll-smooth'
    >
      <div className='flex justify-center items-center pt-[44px]'>
        <h2 className='font-montserrat font-extrabold text-[72px] leading-[80px] text-center text-white'>
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
        </h2>
      </div>

      <div className='flex flex-row gap-8 mt-[53px] h-full'>
        <motion.div
          className='w-1/2 flex justify-center items-center relative'
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src='/companion-phone.png'
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
          className='w-1/2 gap-2 relative flex flex-col justify-center'
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className='flex items-center gap-2 w-[14px] h-[30px]'
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className='font-roboto font-[400] text-white text-xs'>
              01
            </span>
          </motion.div>

          <motion.h1
            className='font-montserrat font-[300] text-[32px] leading-[39px] text-white w-full'
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.6 }}
          >
            Great Way to Little Fun to Your{' '}
            <span className='font-[800]'>
              Corporate <br /> World
            </span>
          </motion.h1>

          <motion.div
            className='flex justify-center items-center py-2 gap-2'
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8 }}
          >
            <span className='font-roboto font-[400] text-xs text-white flex-1'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </span>
          </motion.div>

          {[
            {
              title: 'Contrary to popular belief',
              description: 'Amet minim mollit non deserunt ullamco',
            },
            {
              title: 'Contrary to popular belief',
              description: 'Amet minim mollit non deserunt ullamco',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className='flex flex-row items-center gap-2 w-full h-[30px]'
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1 + index * 0.2 }}
            >
              <Image src='/galka.svg' alt='Check' width={24} height={24} />
              <div className='flex justify-center items-center py-2 gap-2 '>
                <span className='font-roboto font-[700] text-xs text-white'>
                  {item.title}:
                </span>
                <span className='font-roboto font-[400] text-xs text-white flex-1'>
                  {item.description}
                </span>
              </div>
            </motion.div>
          ))}

          <motion.button
            className='flex flex-row justify-center items-center px-6 py-2 gap-2 w-[126px] h-[44px] bg-[#6C3AF8] rounded-[20px] mt-[77px]'
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
    </section>
  );
}
