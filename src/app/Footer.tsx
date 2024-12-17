'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CurvedArrow } from '@/components/CurvedArrow';

export default function Footer() {
  return (
    <footer className='h-[639px] w-full relative bg-[#1a103d] overflow-hidden'>
      {/* QR Code Section */}
      <div className='absolute left-[197px] top-[255px]'>
        <div className='relative'>
          <Image
            src='/qr-code.png'
            alt='QR Code'
            width={160}
            height={160}
            className='relative z-20'
          />
          <p className='text-white text-sm mt-6 font-light text-center'>
            Download our app on:
            <br />
            Appstore & Google play
          </p>
        </div>
      </div>

      {/* Animated Rings */}
      <div className='absolute left-0 top-0 w-full h-full z-0'>
        <div className='relative w-full h-full'>
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className='absolute rounded-full'
              style={{
                width: `${360 + i * 30}px`,
                height: `${360 + i * 30}px`,
                left: '277px',
                top: '335px',
                transform: 'translate(-50%, -50%)',
                border: '1.67px solid',
                borderColor: i < 2 ? '#8F6EFF' : '#403765',
                opacity: 0.8 - i * 0.05,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.8 - i * 0.05, scale: 1 }}
              transition={{ duration: 1, delay: i * 0.1 }}
            />
          ))}
        </div>
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        {/* Navigation Links */}
        <div className='absolute right-[142px] top-[262px] flex gap-[44px]'>
          <div className='flex flex-col items-end'>
            <h3 className='text-white font-extrabold text-[20px] mb-2'>Help</h3>
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
            <h3 className='text-white font-extrabold text-[20px] mb-2'>
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
                  Whitepaper
                </a>
              </li>
            </ul>
          </div>

          <div className='flex flex-col items-end'>
            <h3 className='text-white font-extrabold text-[20px] mb-2'>
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

        {/* Copyright */}
        <div className='absolute right-[142px] bottom-[80px]'>
          <p className='text-white/50 text-[14px] font-light'>
            © 2024 Doppelgangers.ai All right reserved
          </p>
        </div>
      </div>

      {/* Curved Arrow */}
      <div className='absolute left-[197px] top-[450px]'>
        <CurvedArrow />
      </div>
    </footer>
  );
}
