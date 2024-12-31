import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function CompanionMobile() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.3,
  });

  return (
    <section
      ref={sectionRef}
      className='relative px-4 pb-[100px] flex flex-col w-full overflow-hidden'
    >
      <div className='flex justify-center items-center pt-8'>
        <h2 className='font-montserrat font-extrabold text-[45px] leading-[50px] text-center text-white'>
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

      <div className='flex flex-col gap-8 mt-8'>
        <motion.div
          className='w-full flex justify-center items-center relative'
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src='/phone_blob.png'
            alt='Blob Hero'
            width={326}
            height={659}
            className='relative z-10'
          />

          <div className='absolute inset-0 flex justify-center items-center'>
            {[...Array(24)].map((_, i) => (
              <div
                key={i}
                className='absolute rounded-full border border-[#8F6EFF]'
                style={{
                  width: `${200 + i * 30}px`,
                  height: `${200 + i * 30}px`,
                  filter: 'blur(0.625px)',
                  opacity: Math.max(0, (24 - i) / 24),
                  zIndex: -1,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <div className='flex justify-center items-center pt-8'>
        <h2 className='font-montserrat font-extrabold text-[32px] leading-[39px] text-center text-white'>
          Great Way to Little Fun to Your
          <br />
          <motion.span
            initial={{ color: '#FFFFFF' }}
            animate={isInView ? { color: '#6C3AF8' } : { color: '#FFFFFF' }}
            transition={{ duration: 0.8, delay: 0.8, ease: 'easeInOut' }}
            className='text-[#6C3AF8]'
          >
            Corporate World
          </motion.span>
        </h2>
      </div>

      <motion.div
        className='flex justify-center items-center py-[24px] gap-2 text-center'
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.8 }}
      >
        <span className='font-roboto font-[400] text-[12px] leading-[14px] text-white flex-1'>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
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
          className='flex flex-row items-center px-[41px] gap-2 w-full '
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
    </section>
  );
}
