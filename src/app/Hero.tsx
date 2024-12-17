import Header from './components/Header';
import Image from 'next/image';
import SocialIcons from './components/SocialIcons';

export default function Hero() {
  return (
    <section className='relative min-h-screen bg-gradient-to-br from-[#2D2A3D] to-[#151321] overflow-hidden '>
      <Header />

      {/* Background rings with centered blob */}
      <div className='absolute right-[130px] top-1/2 -translate-x-1/2 -translate-y-1/2'>
        {/* Blob hero image */}
        <Image src='/blob_hero.svg' alt='Blob Hero' width={270} height={270} />

        {/* Rings */}
        {[...Array(24)].map((_, i) => (
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
              opacity: Math.max(0, (24 - i) / 24),
              zIndex: -1,
            }}
          />
        ))}
      </div>

      <SocialIcons />

      {/* Content */}
      <div className='absolute top-1/2 -translate-y-1/2 w-full'>
        <div className='relative z-[200] max-w-7xl mx-auto px-4'>
          <h1 className='font-montserrat text-[72px] leading-[80px] font-extrabold text-white max-w-3xl [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] mix-blend-normal'>
            Your Data, Your AI,
            <span className='text-[#6C3AF8]'> Your Doppelganger</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
