import { motion, useInView, useScroll } from 'framer-motion';
import React, { useEffect, useState } from 'react';

export default function VideoSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
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

  return (
    <section
      ref={ref}
      className='min-h-screen w-full max-w-[1440px] m-auto py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center'
    >
      <div className='max-w-6xl w-full'>
        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <motion.h2
              className='text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight'
              initial={{ x: -50 }}
              animate={isInView ? { x: 0 } : { x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              At <span className='text-[#6C3AF8]'>Doppelgangers AI</span>
            </motion.h2>
            <motion.p
              className='text-xl text-gray-300 mb-8'
              initial={{ x: -50 }}
              animate={isInView ? { x: 0 } : { x: -50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              we&apos;re revolutionizing the concept of personal assistance by
              harnessing the power of your data through your very own private
              personalized AI model - Doppelganger.
            </motion.p>
            <motion.div
              initial={{ x: -50 }}
              animate={isInView ? { x: 0 } : { x: -50 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <span className='inline-block bg-[#6C3AF8] text-white font-semibold py-3 px-8 rounded-full text-lg hover:bg-[#5C2AE8] transition-colors duration-300 shadow-md hover:shadow-lg'>
                Secure, Personal AI model right in your pocket!
              </span>
            </motion.div>
          </div>
          <motion.div
            className='bg-gradient-to-br from-[#2D2A3D] to-[#6C3AF8] p-8 rounded-2xl shadow-2xl'
            initial={{ x: 50, rotateY: 90 }}
            animate={isInView ? { x: 0, rotateY: 0 } : { x: 50, rotateY: 90 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className='text-gray-200 mb-6'>
              Powered by Retrieval-Augmented Generation (RAG) Doppelganger is
              acting as the central intelligence hub that enables AI agents to
              retrieve and use relevant information in real-time, ensuring
              precise, context-aware execution of tasks.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
