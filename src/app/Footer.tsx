'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='h-screen w-full overflow-hidden'>
      {/* Main Grid Container */}
      <div className='container mx-auto h-full'>
        <div className='grid grid-rows-1 grid-cols-12 gap-4 relative h-full'>
          {/* Left Section with QR Code */}
          <div className='col-span-4 col-start-1 flex flex-col items-center justify-center relative'>
            <div className='relative translate-x-[150px] translate-y-1/2'>
              <Image
                src='/qr.png'
                alt='QR Code'
                width={860}
                height={860}
                className='z-20'
              />
            </div>
          </div>

          {/* Right Section with Navigation */}
          <div className='col-span-5 col-start-8 flex justify-end items-center gap-11'>
            <div className='flex flex-col items-end'>
              <h3 className='text-white font-extrabold text-[20px] mb-2 h-[24px]'>
                Help
              </h3>
              <ul className='space-y-1 text-right opacity-50'>
                <li>
                  <a href='#' className='text-white text-[14px] font-light'>
                    Referral Program
                  </a>
                </li>
                <li>
                  <a href='#' className='text-white text-[14px] font-light'>
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href='#' className='text-white text-[14px] font-light'>
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div className='flex flex-col items-end'>
              <h3 className='text-white font-extrabold text-[20px] mb-2 h-[24px]'>
                Legal Info
              </h3>
              <ul className='space-y-1 text-right opacity-50'>
                <li>
                  <a href='#' className='text-white text-[14px] font-light'>
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href='#' className='text-white text-[14px] font-light'>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href='#' className='text-white text-[14px] font-light'>
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            <div className='flex flex-col items-end'>
              <h3 className='text-white font-extrabold text-[20px] mb-2 h-[24px]'>
                Follow Us
              </h3>
              <ul className='space-y-1 text-right opacity-50'>
                <li>
                  <a href='#' className='text-white text-[14px] font-light'>
                    Facebook
                  </a>
                </li>
                <li>
                  <a href='#' className='text-white text-[14px] font-light'>
                    Instagram
                  </a>
                </li>
                <li>
                  <a href='#' className='text-white text-[14px] font-light'>
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href='#' className='text-white text-[14px] font-light'>
                    X
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright Section */}
          <div className='col-span-12 flex justify-end pb-20'>
            <p className='text-white/50 text-[14px] font-light'>
              © 2024 Doppelgangers.ai All right reserved
            </p>
          </div>

          <div className='absolute bottom-[50%] left-[15%]'>
            {[...Array(24)].map((_, i) => (
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
                  opacity: Math.max(0, (24 - i) / 24),
                  zIndex: -1,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
