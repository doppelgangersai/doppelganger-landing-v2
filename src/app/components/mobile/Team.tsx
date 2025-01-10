'use client';

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
    description: `Andrew Krynin (CEO) is a serial entrepreneur who won a Ukraine national state grant (link) in 2020 with a social media boosting app. ex Near Protocol Ecosystem lead & Head of Marketing at Aurora`,
    companies: ['/near.png', '/triangle.png'],
  },
  {
    name: 'Pavlo Shepetukha',
    role: 'CPO',
    image: '/pavlo.png',
    description: `Lead product designer with over 10 Years of experience who led the redesign of Vodafone Ukraine App.`,
    companies: ['/vodafon.png', '/epam.png'],
  },
  {
    name: 'Freddy Snijder',
    role: 'CTO',
    image: '/freddy.png',
    description: `is a serial entrepreneur ex principal AI research scientist at Shell with 20 years of experience in AI and ML`,
    companies: ['/shell.png', '/ing.png'],
  },
];

export default function Team() {
  return (
    <section className='w-full mt-[124px] px-4'>
      <div className='text-center mb-16'>
        <h1 className='text-6xl font-bold'>
          <span className='text-white'>
            Meet <br /> Our <br />
          </span>
          <span className='text-[#6C3AF8]'>Team</span>
        </h1>
      </div>

      <div className='relative flex flex-col items-center'>
        <div className='relative mb-16'>
          {teamMembers[0].role && (
            <div className='absolute top-0 right-[-10px] bg-[#6C54C3] text-white px-3 py-2 rounded-lg z-10'>
              <span className='font-bold'>{teamMembers[0].role}</span>
            </div>
          )}
          <div className='relative w-[191.07px] h-[191.07px] aspect-square rounded-full overflow-hidden'>
            <Image
              src={teamMembers[0].image}
              alt={teamMembers[0].name}
              fill
              className='object-cover'
            />
          </div>
          <div className='mt-4 text-center'>
            <h3 className='text-2xl font-bold text-white'>
              {teamMembers[0].name}
            </h3>
            <div className='flex justify-center gap-4 mt-2'>
              {teamMembers[0].companies.map((company, i) => (
                <Image
                  key={i}
                  src={company}
                  alt='Company logo'
                  width={24}
                  height={24}
                  className='opacity-70'
                />
              ))}
            </div>
          </div>
        </div>

        <div className='flex justify-between w-full max-w-[500px] p-2'>
          <div className='relative mt-20'>
            {teamMembers[1].role && (
              <div className='absolute top-0 right-4 bg-[#6C54C3] text-white px-3 py-2 rounded-lg z-10'>
                <span className='font-bold'>{teamMembers[1].role}</span>
              </div>
            )}
            <div className='relative w-[191.07px] h-[191.07px] aspect-square rounded-full overflow-hidden'>
              <Image
                src={teamMembers[1].image}
                alt={teamMembers[1].name}
                fill
                className='object-cover'
              />
            </div>
            <div className='mt-4 text-center'>
              <h3 className='text-2xl font-bold text-white'>
                {teamMembers[1].name}
              </h3>
              <div className='flex justify-center gap-4 mt-2'>
                {teamMembers[1].companies.map((company, i) => (
                  <Image
                    key={i}
                    src={company}
                    alt='Company logo'
                    width={24}
                    height={24}
                    className='opacity-70'
                  />
                ))}
              </div>
            </div>
          </div>

          <div className='relative'>
            {teamMembers[2].role && (
              <div className='absolute top-0 right-4 bg-[#6C54C3] text-white px-3 py-2 rounded-lg z-10'>
                <span className='font-bold'>{teamMembers[2].role}</span>
              </div>
            )}
            <div className='relative w-[191.07px] h-[191.07px] aspect-square rounded-full overflow-hidden'>
              <Image
                src={teamMembers[2].image}
                alt={teamMembers[2].name}
                fill
                className='object-cover'
              />
            </div>
            <div className='mt-4 text-center'>
              <h3 className='text-2xl font-bold text-white'>
                {teamMembers[2].name}
              </h3>
              <div className='flex justify-center gap-4 mt-2'>
                {teamMembers[2].companies.map((company, i) => (
                  <Image
                    key={i}
                    src={company}
                    alt='Company logo'
                    width={24}
                    height={24}
                    className='opacity-70'
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className='text-white text-center text-[18px] mt-16'>
        All Team Members
      </p>
    </section>
  );
}
