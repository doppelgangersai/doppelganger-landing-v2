import Image from 'next/image';

const Privacy = () => {
  return (
    <section className='min-h-screen w-full px-6 py-[90px] md:p-[90px]'>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-[118px]'>
        <div className='order-2 md:order-1'>
          <Image
            src='/blockchain.png'
            alt='Защита данных и конфиденциальность'
            width={637}
            height={657}
            className='w-full max-w-[637px] mx-auto transform scale-110 md:scale-[1.2]'
            priority
          />
        </div>

        <div className='order-1 md:order-2 font-montserrat text-center'>
          <h2 className='text-4xl md:text-6xl lg:text-[72px] font-extrabold leading-tight md:leading-[80px] text-white'>
            <span className='block'>Your</span>
            <span className='block text-[#6C3AF8]'>Data privacy</span>
            <span className='block'>is our</span>
            <span className='block text-[#6C3AF8]'># 1 Priority</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
