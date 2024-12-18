import Image from 'next/image';

export default function Privacy() {
  return (
    <section className='w-full h-screen p-[90px]'>
      <div className='grid grid-cols-2 justify-center items-center gap-[118px]'>
        <Image
          src='/blockchain.png'
          alt='Privacy'
          width={637}
          height={657}
          className='scale-[1.2]'
        />

        <div className='font-montserrat text-[72px] font-[800] leading-[80px] text-white text-center'>
          <p>Your </p>
          <p className='text-[#6C3AF8]'>Data privacy</p>
          <p>is our</p>
          <p className='text-[#6C3AF8]'> # 1 Priority</p>
        </div>
      </div>
    </section>
  );
}
