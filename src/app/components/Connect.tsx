import Image from 'next/image';

export default function Connect() {
  return (
    <section className='relative w-full h-screen flex justify-center items-center'>
      <div className='absolute flex flex-col left-[89px] top-[110px] w-[566px] h-[90px]'>
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
        className='absolute z-10 left-1/2 bottom-[170px] left-[107px]'
      />

      <Image
        src='/phone_vault.png'
        alt='Connect'
        width={233}
        height={470}
        className='absolute z-10 bottom-[124px] right-[235px]'
      />

      <div className='absolute bottom-[360px] right-[350px]'>
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
    </section>
  );
}