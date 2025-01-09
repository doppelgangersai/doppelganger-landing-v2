'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Footer() {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.3 });

  return (
    <footer
      ref={footerRef}
      className='relative h-screen w-[1440px] m-auto scroll-smooth'
    >
      {/* Main Container */}
      <div className='container mx-auto h-full'>
        <div className='grid h-full grid-cols-12 gap-4 relative'>
          {/* Concentric Circles */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{
              duration: 1.2,
              type: 'spring',
              bounce: 0.4,
            }}
            className='absolute left-[15%] top-1/2 -translate-y-1/2'
          >
            {[...Array(12)].map((_, i) => (
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
                  opacity: Math.max(0, (12 - i) / 12),
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
          </motion.div>

          {/* Navigation Links with stagger animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='font-sans col-span-5 col-start-8 flex justify-end items-center gap-11 z-10'
          >
            <div className='flex flex-row items-top justify-center gap-10'>
              {/* Help Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.4 }}
                className='flex flex-col items-end'
              >
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
              </motion.div>

              {/* Legal Info Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.6 }}
                className='flex flex-col items-end'
              >
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
              </motion.div>

              {/* Follow Us Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.8 }}
                className='flex flex-col items-end'
              >
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
              </motion.div>
            </div>
          </motion.div>

          {/* Copyright Section with fade up animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1 }}
            className='absolute bottom-20 right-0 left-0 flex justify-end px-4 z-10'
          >
            <p className='text-white/50 text-[14px] font-light'>
              © 2024 Doppelgangers.ai All right reserved
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
