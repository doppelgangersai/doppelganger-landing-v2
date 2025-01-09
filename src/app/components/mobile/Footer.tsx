import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='w-full h-screen relative p-10'>
      <div className='relative h-full flex flex-col items-center justify-center'>
        {/* App Store Button */}
        <Image
          src='/appstore.png'
          alt='Download on App Store'
          width={202}
          height={60}
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
        />
        {/* Rings Animation (существующий код) */}
        {[...Array(24)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full border border-[#8F6EFF] animate-ringAppear`}
            style={{
              width: `${375 + i * 50}px`,
              height: `${375 + i * 50}px`,
              filter: 'blur(0.625px)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: -1,
              opacity: Math.max(0, (24 - i) / 24),
              animationDelay: `${0.8 + i * 0.1}s`,
            }}
          />
        ))}
        <div className='absolute bottom-0 left-0 w-full text-center'>
          {/* Lets Connect Section */}
          <h2 className='text-4xl font-bold text-white mb-8'>Lets Connect</h2>

          {/* Social Icons */}
          <div className='flex items-center gap-6 mb-16'>
            <a href='#' className='hover:opacity-80'>
              <Image src='/twitter.png' alt='Twitter' width={30} height={30} />
            </a>
            <a href='#' className='hover:opacity-80'>
              <Image
                src='/instagram.png'
                alt='Instagram'
                width={30}
                height={30}
              />
            </a>
            <a href='#' className='hover:opacity-80'>
              <Image
                src='/telegram.png'
                alt='Telegram'
                width={30}
                height={30}
              />
            </a>
            <a href='#' className='hover:opacity-80'>
              <Image src='/discord.png' alt='Discord' width={30} height={30} />
            </a>
            <span className='mx-4 text-white'>|</span>
            <a href='#' className='hover:opacity-80'>
              <Image src='/email.svg' alt='Email' width={30} height={30} />
            </a>
          </div>

          {/* Footer Links */}
          <div className='flex flex-col gap-4 text-[14px] justify-between text-white/80'>
            <div className='flex gap-8 mb-2 justify-between'>
              <a href='#' className='hover:text-white'>
                About Us
              </a>
              <span>© 2024 Doppelgangers.ai</span>
            </div>
            <div className='flex gap-8 justify-between'>
              <a href='#' className='hover:text-white'>
                Privacy Policy
              </a>
              <a href='#' className='hover:text-white'>
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
