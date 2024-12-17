import React from 'react';

export default function VideoSection() {
  return (
    <div className='w-full h-screen overflow-hidden bg-[#2D2A3D]'>
      <div className='w-full h-full px-[106px] py-[59px]'>
        <div className='relative w-full h-full rounded-[40px] overflow-hidden'>
          <div className='absolute top-[56px] left-1/2 -translate-x-1/2 z-[60] w-[1122px]'>
            <p className='font-roboto text-[28px] leading-[38px] text-white text-center font-normal'>
              At Doppelgangers AI, we&apos;re revolutionizing the concept of
              personal assistance by harnessing the power of your data through
              your very own AI twin - your Doppelganger.
            </p>
          </div>

          <div className='absolute top-0 left-0 w-full h-full z-50 bg-[#1E1B2C] rounded-[40px] overflow-hidden'>
            <video
              className='w-full h-full object-cover'
              autoPlay
              playsInline
              controls
              src='https://www.youtube.com/embed/1NTS8_uOJ_U?si=dDriqAsBsM22CC8j'
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
