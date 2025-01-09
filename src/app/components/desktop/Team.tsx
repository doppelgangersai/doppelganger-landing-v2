'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

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
    description: `Andrew Krynin (CEO) is a serial entrepreneur
      who won a Ukraine national state grant (link) in 2020 with a social media boosting app.
      ex Near Protocol Ecosystem lead & Head of Marketing at Aurora`,
    companies: ['/near.png', '/triangle.png'],
  },
  {
    name: 'Freddy Snijder',
    role: 'CTO',
    image: '/freddy.png',
    description: `is a serial entrepreneur ex principal AI research scientist at Shell with 20 years of experience in AI and ML`,
    companies: ['/shell.png', '/ing.png'],
  },
  {
    name: 'Pavlo Shepetukha',
    role: 'CPO',
    image: '/pavlo.png',
    description: `Lead product designer with over 10 Years of experience who led the redesign of Vodafone Ukraine App. `,
    companies: ['/vodafon.png', '/epam.png'],
  },
  {
    name: 'Sandro Lovnički',
    role: 'CTO',
    image: '/sandro.png',
    description: `Computer Scientist & software Engineer, community Leader of Google Developers Zagreb and Flutter Croatia`,
    companies: ['/flatter.png'],
  },
  {
    name: 'Felix Meng',
    role: 'CTO',
    image: '/felix.png',
    description: `Stanford Accelerator batch 2024. Created a RAG with fully homomorphic encryption, and private information retrieval.`,
    companies: ['/stanford.png'],
  },
  {
    name: 'Liwen Ouyang',
    role: 'CTO',
    image: '/liwen.png',
    description: `Google 2022 Intern Stanford MS 2024. Created framework that allows agents to query datasets without exposing the prompt.`,
    companies: ['/stanford.png', '/google.png'],
  },
];

export default function Team() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const headerVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 20,
      },
    },
  };

  const memberVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 20,
      },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className='min-h-screen flex flex-col items-center py-16 px-4 w-[1440px] m-auto scroll-smooth'
    >
      <motion.div variants={headerVariants} className='text-center mb-16'>
        <p className='text-white/60 mb-4'>Our Team</p>
        <h1 className='text-6xl font-bold'>
          <span className='text-white'>Meet Our </span>
          <motion.span
            initial={{ color: '#FFFFFF' }}
            animate={{ color: '#6C3AF8' }}
            transition={{ duration: 0.8, delay: 0.8, ease: 'easeInOut' }}
            className='text-[#6C3AF8]'
          >
            Team
          </motion.span>
        </h1>
      </motion.div>

      <div className='relative w-full max-w-7xl py-8'>
        <div className='flex overflow-x-auto snap-x snap-mandatory gap-[20px] pb-4 scrollbar-hide overflow-y-hidden'>
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              variants={memberVariants}
              custom={index}
              whileHover={{
                scale: 1.05,
                transition: { type: 'spring', stiffness: 400, damping: 10 },
              }}
              className='p-4 flex-shrink-0 w-[320px]'
            >
              <div className='flex flex-col justify-center items-center gap-[38px] h-full'>
                <motion.div className='relative'>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={292}
                    height={301}
                  />
                  <motion.div
                    className='absolute top-0 right-0 bg-[#6C54C3] text-white px-2 py-1 rounded-lg z-20 w-14 h-[42px] flex items-center justify-center'
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className='font-bold text-[22px] leading-[26px]'>
                      {member.role}
                    </span>
                  </motion.div>
                </motion.div>
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
                      width={33.11}
                      height={33.59}
                      className='opacity-70 w-full h-full'
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
