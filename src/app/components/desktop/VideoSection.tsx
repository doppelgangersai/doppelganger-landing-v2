import { motion, useInView } from 'framer-motion';
import React from 'react';

export default function VideoSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className='min-h-screen w-full max-w-[1440px] m-auto py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center'
    >
      <motion.div
        className='max-w-3xl w-full'
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className='text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight text-center'>
          At Doppelgangers AI
        </h2>
        <div className='space-y-6 text-xl text-gray-300'>
          <p>
            We&apos;re revolutionizing the concept of personal assistance by
            harnessing the power of your data through your very own private
            personalized AI model - Doppelganger.
          </p>

          <p>
            Powered by Retrieval-Augmented Generation (RAG) Doppelganger is
            acting as the central intelligence hub that enables AI agents to
            retrieve and use relevant information in real-time, ensuring
            precise, context-aware execution of tasks.
          </p>

          <p>Secure, Personal AI model right in your pocket!</p>
        </div>
      </motion.div>
    </section>
  );
}
