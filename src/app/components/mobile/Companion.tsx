import Image from 'next/image';

export default function CompanionMobile() {
  return (
    <section className='relative px-4 pb-[100px] flex flex-col w-full overflow-hidden'>
      <div className='flex justify-center items-center pt-8'>
        <h2 className='font-montserrat font-extrabold text-[45px] leading-[50px] text-center text-white'>
          Create Your Personal
          <br />
          <span className='text-[#6C3AF8]'>AI Companion</span>
        </h2>
      </div>

      <div className='flex flex-col gap-8 mt-8'>
        <div className='w-full flex justify-center items-center relative'>
          <div
            style={{
              backgroundImage: "url('/robot_mobile.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              width: '326px',
              height: '659px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '29px',
              gap: '65px',
            }}
          >
            <Image
              src='/blob_hero.png'
              alt='Blob Hero'
              width={242}
              height={243}
              className=''
            />

            <p className='text-white text-center text-[20px] font-montserrat font-[400] leading-[24px]'>
              Simply download our app and train your own private personalized AI
              model, built to enhance your daily life.
            </p>

            <div className='w-full flex justify-center items-center bg-[#6C3AF8] rounded-[20px] px-[8px] py-[24px] z-[1000] active:scale-95 transition-transform duration-200 cursor-pointer hover:bg-[#5c31d3]'>
              <span className='text-white text-[12px] font-roboto font-[400] leading-[14px]'>
                Download App
              </span>
            </div>
          </div>

          <div className='absolute inset-0 flex justify-center items-center'>
            {[...Array(24)].map((_, i) => (
              <div
                key={i}
                className='absolute rounded-full border border-[#8F6EFF]'
                style={{
                  width: `${200 + i * 30}px`,
                  height: `${200 + i * 30}px`,
                  filter: 'blur(0.625px)',
                  opacity: Math.max(0, (24 - i) / 24),
                  zIndex: -1,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
