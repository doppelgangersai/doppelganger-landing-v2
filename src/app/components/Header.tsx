import Link from 'next/link';

export default function Header() {
  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-[rgba(0,0,0,0.1)] backdrop-blur-md'>
      <div className='max-w-7xl mx-auto px-4 h-16 flex items-center justify-between'>
        {/* Logo */}
        <div className='flex items-center gap-2.5'>
          <div className='w-[30px] h-[32px]'>
            {/* Add your logo SVG/image here */}
          </div>
          <span className='text-white text-sm font-light'>Doppelgangers.ai</span>
        </div>

        {/* Launch App Button */}
        <Link
          href='/launch'
          className='px-6 py-2 bg-[#6C3AF8] text-white text-sm rounded-[14px] hover:bg-[#5c31d6] transition-colors'
        >
          Launch app
        </Link>
      </div>
    </header>
  );
} 