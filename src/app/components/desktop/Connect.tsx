import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

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
      className='relative flex flex-col justify-center items-center px-[120px] w-[1440px] m-auto scroll-smooth'
    >
      <div className='relative w-full h-full mx-auto grid grid-cols-12 grid-rows-1'>
        <div className='col-span-9 col-start-1 flex flex-col justify-center items-end'>
          <div className='py-[62px] self-center absolute top-[-160px]'>
            <h2 className='font-montserrat font-[800] text-[45px] leading-[45px] text-center text-white'>
              <motion.span
                initial='hidden'
                animate={isInView ? 'visible' : 'hidden'}
                variants={textVariants}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Unlock
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
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src='/soc_icons.png'
              alt='Connect'
              width={867}
              height={365}
              className='h-[365px]'
            />
          </motion.div>
        </div>

        <motion.div
          className='col-span-3 col-start-10 flex justify-start items-center'
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.8 }}
        >
          <div className='flex justify-center items-center relative'>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={
                isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }
              }
              transition={{
                duration: 1,
                delay: 0.3,
                type: 'spring',
                stiffness: 100,
              }}
            >
              <Image
                src='/phone_privacy.svg'
                alt='Connect'
                width={233}
                height={470}
              />
            </motion.div>

            <div className='absolute flex justify-center items-center'>
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
                    zIndex: -1,
                    opacity: Math.max(0, (10 - i) / 10),
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className='flex justify-center items-center my-[21px] z-[200]'>
        <Image src='/arrow_2.svg' alt='Blob Hero' width={803} height={484} />
      </div>
    </section>
  );
}
