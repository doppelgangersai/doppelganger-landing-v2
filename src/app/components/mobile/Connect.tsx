import Image from 'next/image';

export default function Connect() {
  return (
    <section className='w-full h-full relative mt-[100px] flex flex-col justify-center items-center'>
      <div className='self-center mb-[66px]'>
        <h2 className='font-montserrat font-[800] text-[45px] leading-[45px] text-center text-white'>
          <span>
            Unlock <br />
          </span>{' '}
          the true <span>power</span> of <span>your data</span>
          <br />
          with <span>Privacy </span>
          Preserving <span>RAG!</span>
        </h2>
      </div>

      <Image src='/mob_.png' alt='Connect' width={356} height={678} />
      <Image src='/phone_privacy.svg' alt='Connect' width={233} height={470} />
    </section>
  );
}
