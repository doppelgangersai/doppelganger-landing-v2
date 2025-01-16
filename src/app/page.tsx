'use client';

import { useDeviceType } from '@/hooks/useDeviceType';
import dynamic from 'next/dynamic';

const DesktopGroup = dynamic(() => import('./components/DesktopGroup'), {
  ssr: false,
});

const MobileGroup = dynamic(() => import('./components/MobileGroup'), {
  ssr: false,
});

export default function Home() {
  const isMobile = useDeviceType();

  return (
    <div className='overflow-hidden' suppressHydrationWarning>
      {isMobile ? <MobileGroup /> : <DesktopGroup />}
    </div>
  );
}
