'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='relative h-screen w-[1440px] m-auto scroll-smooth'>
      {/* Main Container */}
      <div className='container mx-auto h-full'>
        <div className='grid h-full grid-cols-12 gap-4 relative'>
          {/* Concentric Circles */}
          <div className='absolute left-[15%] top-1/2 -translate-y-1/2'>
            {[...Array(24)].map((_, i) => (
              <div
                key={i}
                className='absolute rounded-full border border-[#8F6EFF]'
                style={{
                  width: `${375 + i * 50}px`,
                  height: `${375 + i * 50}px`,
                  filter: 'blur(0.625px)',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  opacity: Math.max(0, (24 - i) / 24),
                  zIndex: 0,
                }}
              />
            ))}
            {/* QR Code positioned at the center of circles */}
            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10'>
              <div className='relative w-[200px] h-[200px] flex flex-col items-center gap-4'>
                <Image
                  src='/qr-code.svg'
                  alt='QR Code'
                  width={300}
                  height={300}
                  className='rounded-lg'
                />

                <Image
                  src='/arrow.svg'
                  alt='QR Code'
                  width={300}
                  height={300}
                  className='absolute right-[-200px] bottom-[-100px] rounded-lg'
                />
                <p className='absolute right-[-300px] bottom-[-75px] font-sans text-[#fff] text-[14px] font-[300] text-center whitespace-nowrap'>
                  Download our app on:
                  <br />
                  Appstore & Google play
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className='font-sans col-span-5 col-start-8 flex justify-end items-center gap-11 z-10'>
            {/* Help Section */}
            <div className='flex flex-row items-top justify-center gap-10'>
              <div className='flex flex-col items-end'>
                <h3 className='text-white font-extrabold text-[20px] mb-2 h-[24px]'>
                  Help
                </h3>
                <ul className='space-y-1 text-right'>
                  {['Referral Program', 'Contact Us', 'FAQ'].map((item) => (
                    <li
                      key={item}
                      className='opacity-50 hover:opacity-100 transition-opacity'
                    >
                      <Link
                        href='#'
                        className='text-white text-[14px] font-light'
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal Info Section */}
              <div className='flex flex-col items-end'>
                <h3 className='text-white font-[800] text-[20px] mb-2 h-[24px]'>
                  Legal Info
                </h3>
                <ul className='space-y-1 text-right'>
                  {['Terms & Conditions', 'Privacy Policy', 'About Us'].map(
                    (item) => (
                      <li
                        key={item}
                        className='opacity-50 hover:opacity-100 transition-opacity'
                      >
                        <Link
                          href='#'
                          className='text-white text-[14px] font-light'
                        >
                          {item}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Follow Us Section */}
              <div className='flex flex-col items-end'>
                <h3 className='text-white font-extrabold text-[20px] mb-2 h-[24px]'>
                  Follow Us
                </h3>
                <ul className='space-y-1 text-right'>
                  {['Facebook', 'Instagram', 'LinkedIn', 'X'].map((item) => (
                    <li
                      key={item}
                      className='opacity-50 hover:opacity-100 transition-opacity'
                    >
                      <Link
                        href='#'
                        className='text-white text-[14px] font-light'
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className='absolute bottom-20 right-0 left-0 flex justify-end px-4 z-10'>
            <p className='text-white/50 text-[14px] font-light'>
              © 2024 Doppelgangers.ai All right reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
