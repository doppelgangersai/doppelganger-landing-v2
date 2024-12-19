import Image from 'next/image';

export default function Connect() {
  return (
    <section className='relative w-full h-screen flex justify-center items-center overflow-hidden'>
      <div className='relative w-full h-full mx-auto'>
        <div className='absolute left-[6%] top-[20%] max-w-[566px]'>
          <h2 className='font-montserrat font-[800] text-[45px] leading-[45px] text-center text-white'>
            <span className='text-[#6C3AF8]'>Unlock</span> the true{' '}
            <span className='text-[#6C3AF8]'>power</span> <br /> of{' '}
            <span className='text-[#6C3AF8]'>your data!</span>
          </h2>
        </div>

        <Image
          src='/soc_icons.png'
          alt='Connect'
          width={867}
          height={365}
          className='absolute z-10 left-[7%] bottom-[20%]'
        />

        <Image
          src='/arrow_1.png'
          alt='Connect'
          width={803}
          height={398}
          className='absolute z-10 top-[0%] right-[24%] 2xl:top-[20%]'
        />

        <Image
          src='/phone_vault.png'
          alt='Connect'
          width={233}
          height={470}
          className='absolute z-10 bottom-[15%] right-[16%]'
        />

        <div className='absolute bottom-[45%] right-[24%]'>
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
                opacity: Math.max(0, (10 - i) / 10),
                zIndex: -1,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
