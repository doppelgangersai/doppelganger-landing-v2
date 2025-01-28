'use client';

import { motion, useInView } from 'framer-motion';
import React, { useMemo } from 'react';

export default function VideoSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const variants = useMemo(
    () => ({
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    }),
    []
  );

  return (
    <section
      ref={ref}
      className='w-full max-w-[1440px] m-auto py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center'
    >
      <motion.div
        className='max-w-3xl w-full text-center'
        variants={variants}
        initial='initial'
        animate={isInView ? 'animate' : 'initial'}
        transition={{ duration: 0.8 }}
      >
        <h2 className='text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight '>
          Time for AI to Get Personal
        </h2>
        <div className='space-y-6 text-xl text-gray-300'>
          At Doppelgangers we are revolutionizing the concept of AI assistant by
          harnessing the power of your data through your very own private
          personalized AI model - Doppelganger.
          <br />
          <br />
          Powered by Trusted Execution Environment (TEE) and Retrieval-Augmented
          Generation (RAG) Doppelganger is acting as the central intelligence
          hub that enables AI agents to retrieve and use relevant information in
          real-time, ensuring precise, context-aware execution of tasks.
          <br />
          <br />
          Secure, fully private, personal AI right in your pocket!
        </div>
      </motion.div>
    </section>
  );
}
