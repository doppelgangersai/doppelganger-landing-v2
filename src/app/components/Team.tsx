'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
  companies: string[];
}

const teamMembers: TeamMember[] = [
  {
    name: 'Andrew Krynin',
    role: 'CEO',
    image: '/Andrew.png',
    description:
      'is a serial entrepreneur who won a USF national grant (link) in 2020 with a social media boosting app, has been running a marketing agency for over 5 years ex marketing manager at Aurora (Near Protocol)',
    companies: ['/near.png', '/near.png'],
  },
  {
    name: 'Freddy Snijder',
    role: 'CTO',
    image: '/team_placeholder.png',
    description:
      'is a serial entrepreneur ex principal AI research scientist at Shell with 20 years of experience in AI and ML who (co-) invented multiple inventions. Currently there are 16 patent applications left, and I have 3 granted patents.',
    companies: ['/near.png', '/near.png'],
  },
  {
    name: 'Pavlo Shepetukha',
    role: 'CPO',
    image: '/team_placeholder.png',
    description:
      'is a serial entrepreneur ex principal AI research scientist at Shell with 20 years of experience in AI and ML who (co-) invented multiple inventions. Currently there are 16 patent applications left, and I have 3 granted patents.',
    companies: ['/near.png', '/near.png'],
  },
  {
    name: 'Freddy S',
    role: 'CTO',
    image: '/team_placeholder.png',
    description:
      'is a serial entrepreneur ex principal AI research scientist at Shell with 20 years of experience in AI and ML who (co-) invented multiple inventions. Currently there are 16 patent applications left, and I have 3 granted patents.',
    companies: ['/near.png', '/near.png'],
  },
];

export default function Team() {
  return (
    <div className='w-full min-h-screen flex flex-col items-center py-16 px-4'>
      <div className='text-center mb-16'>
        <p className='text-white/60 mb-4'>Our Team</p>
        <h1 className='text-6xl font-bold'>
          <span className='text-white'>Meet Our </span>
          <span className='text-[#6C3AF8]'>Team</span>
        </h1>
      </div>

      <div className='relative w-full max-w-7xl'>
        <div className='flex overflow-x-hidden snap-x snap-mandatory gap-[20px]'>
          {teamMembers.map((member) => (
            <div key={member.name} className=''>
              <div className='flex flex-col justify-center items-center gap-[38px]'>
                <div className='relative'>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={292}
                    height={301}
                  />
                  <div className='absolute top-0 right-0 bg-[#6C54C3] text-white px-2 py-1 rounded-lg z-20 w-14 h-[42px] flex items-center justify-center'>
                    <span className='font-bold text-[22px] leading-[26px]'>
                      {member.role}
                    </span>
                  </div>
                </div>
                <div className='flex flex-col items-center gap-4'>
                  <h3 className='text-[22px] font-bold text-white leading-[27px] w-full text-center'>
                    {member.name}
                  </h3>
                  <p className='text-[#6F7F92] text-center text-base leading-[18px]'>
                    {member.description}
                  </p>
                </div>
                <div className='flex justify-center gap-4 mt-auto'>
                  {member.companies.map((company, i) => (
                    <Image
                      key={i}
                      src={company}
                      alt='Company logo'
                      width={23.11}
                      height={23.59}
                      className='opacity-70'
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
