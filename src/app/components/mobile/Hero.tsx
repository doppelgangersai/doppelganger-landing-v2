import Header from '../desktop/Header';
import Image from 'next/image';

export default function HeroMobile() {
  return (
    <section className='h-screen w-full relative'>
      <Header />

      <div className='mb-[125px]'>
        <div className='relative z-[200] max-w-7xl mx-auto px-4'>
          <h1 className='font-montserrat text-[38px] leading-[45px] font-extrabold text-white max-w-3xl [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] mix-blend-normal text-center'>
            Your Data <br />
            Your AI <br />
            <span className='text-[#6C3AF8]'>Your Doppelganger</span>
          </h1>
        </div>
      </div>

      <div className='grid justify-center items-center w-full relative'>
        {/* Blob hero image */}
        <div>
          <Image
            src='/blob_hero.png'
            alt='Blob Hero'
            width={270}
            height={270}
          />
        </div>

        {/* Rings */}
        {[...Array(10)].map((_, i) => (
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
              opacity: Math.max(0, (10 - i) / 10),
              animationDelay: `${0.8 + i * 0.1}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
}
