import Link from 'next/link';
import Image from 'next/image';
export default function Header() {
  return (
    <header className='p-4 relative z-50'>
      <div className='w-full mx-auto flex items-center justify-between h-[63px] bg-[rgba(0,0,0,0.1)] backdrop-blur-sm rounded-[16px] px-4 pr-4'>
        {/* Logo */}
        <Link href='/' className='flex items-center gap-2.5'>
          <div className='flex items-center gap-2.5'>
            <div className='w-[30px] h-[32px]'>
              <Image src='/logo.svg' alt='Logo' width={30} height={32} />
            </div>
            <span className='text-white text-sm font-light'>
              Doppelgangers.ai
            </span>
          </div>
        </Link>

        {/* Launch App Button */}
        <Link
          href='https://app.doppelgangers.ai/'
          className='px-6 py-2 bg-[#6C3AF8] text-white text-sm rounded-[14px] hover:bg-[#6C3AF8] transition-colors '
        >
          <span className="font-['Roboto'] font-normal text-[12px] leading-[14px]">
            Launch app
          </span>
        </Link>
      </div>
    </header>
  );
}
