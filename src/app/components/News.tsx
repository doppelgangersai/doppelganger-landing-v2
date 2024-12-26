import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface NewsCardProps {
  date: {
    day: string;
    month: string;
  };
}

const NewsCard: React.FC<NewsCardProps> = ({ date }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{
      duration: 0.8,
      type: 'spring',
      bounce: 0.3,
    }}
    whileHover={{
      scale: 1.02,
      transition: { duration: 0.2 },
    }}
    className='relative flex flex-col items-center bg-white w-[336px] h-[440px] pb-4 gap-[38px]'
  >
    <div className='w-full h-[280px] bg-[#2A244E]' />
    <div className='flex flex-col items-start gap-4 w-[304px]'>
      <h5 className='font-inter font-bold text-[22px] leading-[27px] text-[#080C1F] capitalize'>
        Ecommerce Trend That Went Crazy
      </h5>
      <p className='font-roboto font-bold text-base leading-[18px] text-[#6F7F92]'>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots.
      </p>
    </div>
    <div className='absolute flex flex-col justify-center items-center w-14 h-[63px] left-[264px] top-[220px] bg-[#6C3AF8] rounded-lg'>
      <span className='font-roboto font-bold text-[22px] leading-[26px] text-white'>
        {date.day}
      </span>
      <span className='font-roboto font-bold text-xs leading-[21px] text-white'>
        {date.month}
      </span>
    </div>
  </motion.div>
);

export default function News() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

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
    <motion.section
      ref={ref}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className='relative h-screen bg-white m-auto scroll-smooth z-10'
    >
      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-start gap-[38px] w-[1050px]'>
        <motion.div
          variants={titleVariants}
          className='flex flex-col items-center gap-2 w-full'
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            className='flex justify-center items-center px-6 py-2 rounded-[14px] bg-white'
          >
            <span className='font-roboto text-xs leading-[14px] text-[#272147]'>
              Our Blog
            </span>
          </motion.div>
          <h2 className='font-montserrat font-extrabold text-[72px] leading-[80px] text-center text-[#272147] w-full'>
            Latest{' '}
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
          className='flex flex-row items-center gap-5 w-full'
        >
          <NewsCard date={{ day: '00', month: 'Aug' }} />
          <NewsCard date={{ day: '00', month: 'Jan' }} />
          <NewsCard date={{ day: '00', month: 'Dec' }} />
        </motion.div>
      </div>
    </motion.section>
  );
}
