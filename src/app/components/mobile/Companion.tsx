import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function CompanionMobile() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
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
            src='/phone_companion.png'
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
    </section>
  );
}
