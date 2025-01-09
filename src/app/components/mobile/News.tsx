import { motion } from 'framer-motion';
import { NewsCard } from '../desktop/News';

export default function News() {
  const titleVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section className='flex flex-col items-center justify-center h-screen'>
      <motion.div
        initial='hidden'
        animate='visible'
        variants={titleVariants}
        className='flex flex-col items-center gap-2 w-full'
      >
        <h2 className='font-montserrat font-extrabold text-[45px] leading-[50px] text-center text-[#fff] w-full'>
          Latest <br />
          <motion.span
            initial={{ color: '#000' }}
            animate={{ color: '#6C3AF8' }}
            transition={{ duration: 3.5, delay: 0.1, ease: 'easeInOut' }}
          >
            New&apos;s & Posts
          </motion.span>
        </h2>
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
        className='w-full overflow-x-auto flex gap-4 px-4 pb-4 mt-[38px]'
        style={{
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <div className='flex-none snap-center'>
          <NewsCard date={{ day: '00', month: 'Aug' }} />
        </div>
        <div className='flex-none snap-center'>
          <NewsCard date={{ day: '00', month: 'Jan' }} />
        </div>
        <div className='flex-none snap-center'>
          <NewsCard date={{ day: '00', month: 'Dec' }} />
        </div>
      </motion.div>
    </section>
  );
}
