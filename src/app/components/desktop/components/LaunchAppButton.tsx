import Link from 'next/link';

export default function LaunchAppButton() {
  return (
    <Link
      href='https://app.doppelgangers.ai/'
      className='px-6 py-2 bg-[#6C3AF8] text-white text-sm rounded-[14px] hover:bg-[#6C3AF8] transition-colors '
    >
      <span className="font-['Roboto'] font-normal text-[12px] leading-[14px]">
        Launch app
      </span>
    </Link>
  );
}
