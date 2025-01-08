import Header from './components/Header';
import Image from 'next/image';
import SocialIcons from './components/SocialIcons';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className='relative min-h-screen w-[1440px] m-auto scroll-smooth'>
      <Header />

      {/* Background rings with centered blob */}
      <div className='absolute right-[130px] top-1/2 -translate-y-1/2'>
        {/* Blob hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <Image
            src='/blob_hero.svg'
            alt='Blob Hero'
            width={270}
            height={270}
          />
        </motion.div>

        {/* Rings */}
        {[...Array(24)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full border border-[#8F6EFF] animate-ringAppear`}
            style={{
              width: `${375 + i * 50}px`,
              height: `${375 + i * 50}px`,
              filter: 'blur(0.625px)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: -1,
              opacity: Math.max(0, (24 - i) / 24),
              animationDelay: `${0.8 + i * 0.1}s`,
            }}
          />
        ))}
      </div>

      <SocialIcons />

      {/* Content */}
      <div className='absolute top-1/2 -translate-y-1/2 w-full'>
        <div className='relative z-[200] max-w-7xl mx-auto px-4'>
          <motion.h1
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 100, opacity: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='font-montserrat text-[72px] leading-[80px] font-extrabold text-white max-w-3xl [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] mix-blend-normal'
          >
            Your Data, Your AI,
            <motion.span
              whileInView={{ color: '#6C3AF8' }}
              initial={{ color: '#FFFFFF' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8, ease: 'easeInOut' }}
              className='text-[#6C3AF8]'
            >
              {' '}
              Your Doppelganger
            </motion.span>
          </motion.h1>
        </div>
      </div>
    </section>
  );
}
