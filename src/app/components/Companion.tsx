import Image from 'next/image';

export default function Companion() {
  return (
    <section className='relative w-full h-screen px-[120px] flex flex-col'>
      <div className='flex justify-center items-center pt-[44px]'>
        <h2 className='font-montserrat font-extrabold text-[72px] leading-[80px] text-center text-white'>
          Create Your Personal
          <br />
          <span className='text-[#6C3AF8]'>AI Companion</span>
        </h2>
      </div>

      <div className='flex-1 flex justify-between items-center mt-20'>
        <div>
          <Image
            src='/phone_blob.png'
            alt='Blob Hero'
            width={326}
            height={659}
            className='absolute z-10 bottom-0 left-[107px]'
          />

          <div className='absolute bottom-[220px] left-[270px]'>
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

        <div className='flex-1 flex flex-col gap-2 max-w-[694px]'>
          <div className='flex items-center p-2 gap-2 w-[14px] h-[30px] rounded-[14px]'>
            <span className='text-white text-xs'>01</span>
          </div>

          <h1 className='font-montserrat font-[300] text-[32px] leading-[39px] text-white w-full'>
            Great Way to Little Fun to Your{' '}
            <span className='font-[800]'>
              Corporate <br /> World
            </span>
          </h1>

          <div className='flex justify-center items-center py-2 gap-2 '>
            <span className='font-roboto font-[400] text-xs text-white flex-1'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </span>
          </div>

          {[
            {
              title: 'Contrary to popular belief',
              description: 'Amet minim mollit non deserunt ullamco',
            },
            {
              title: 'Contrary to popular belief',
              description: 'Amet minim mollit non deserunt ullamco',
            },
          ].map((item, index) => (
            <div
              key={index}
              className='flex flex-row items-center gap-2 w-full h-[30px]'
            >
              <Image src='/galka.svg' alt='Check' width={24} height={24} />
              <div className='flex justify-center items-center py-2 gap-2 '>
                <span className='font-roboto font-[700] text-xs text-white'>
                  {item.title}:
                </span>
                <span className='font-roboto font-[400] text-xs text-white flex-1'>
                  {item.description}
                </span>
              </div>
            </div>
          ))}

          <button className='flex flex-row justify-center items-center px-6 py-2 gap-2 w-[126px] h-[44px] bg-[#6C3AF8] rounded-[20px] mt-[77px]'>
            <span className='font-roboto font-normal text-xs text-white'>
              Download App
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}