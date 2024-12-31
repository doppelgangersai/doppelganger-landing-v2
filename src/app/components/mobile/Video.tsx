import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function VideoMobile() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section
      ref={ref}
      className='w-full h-screen bg-[#2D2A3D] relative grid content-center'
    >
      <motion.div
        className=''
        initial={{ scale: 0.95, opacity: 0 }}
        animate={
          isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }
        }
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <video
          className='w-full object-cover'
          autoPlay
          playsInline
          controls
          src='https://www.youtube.com/embed/1NTS8_uOJ_U?si=dDriqAsBsM22CC8j'
        >
          Your browser does not support the video tag.
        </video>
      </motion.div>
      <motion.div
        className='p-4'
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <p className='font-roboto text-[16px] leading-[22px] text-white text-center font-normal'>
          At Doppelgangers AI, we&apos;re revolutionizing the concept of
          personal assistance by harnessing the power of your data through your
          very own AI twin - your Doppelganger.
        </p>
      </motion.div>
    </section>
  );
}
