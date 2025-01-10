import Image from 'next/image';

export default function Privacy() {
  return (
    <section className='w-full h-full flex flex-col justify-center items-center mt-[200px]'>
      <h2 className='font-montserrat text-[45px] font-extrabold leading-tight text-white text-center mb-[63px]'>
        {['Your', 'Data privacy', 'is our', '# 1 Priority'].map(
          (text, index) => (
            <span
              key={index}
              className='block'
              style={{
                color: index % 2 === 1 ? '#6C3AF8' : '#FFFFFF',
                transition: 'color 3.8s ease-in-out',
              }}
            >
              {text}
            </span>
          )
        )}
      </h2>

      <div className='order-2 md:order-1'>
        <Image
          src='/privacy_mobile.png'
          alt='Privacy'
          width={356}
          height={678}
        />
      </div>
    </section>
  );
}
