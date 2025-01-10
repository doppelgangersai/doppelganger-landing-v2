import { NewsCard } from '../desktop/News';

export default function News() {
  return (
    <section className='flex flex-col items-center justify-center h-screen'>
      <div className='flex flex-col items-center gap-2 w-full'>
        <h2 className='font-montserrat font-extrabold text-[45px] leading-[50px] text-center text-[#fff] w-full'>
          Latest <br />
          <span>New&apos;s & Posts</span>
        </h2>
      </div>

      <div className='w-full overflow-x-auto flex gap-4 px-4 pb-4 mt-[38px]'>
        <div className='flex-none snap-center'>
          <NewsCard date={{ day: '00', month: 'Aug' }} />
        </div>
        <div className='flex-none snap-center'>
          <NewsCard date={{ day: '00', month: 'Jan' }} />
        </div>
        <div className='flex-none snap-center'>
          <NewsCard date={{ day: '00', month: 'Dec' }} />
        </div>
      </div>
    </section>
  );
}
