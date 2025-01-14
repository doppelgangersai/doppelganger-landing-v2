'use client';

import { useDeviceType } from '@/hooks/useDeviceType';

import {
  CompanionDesktop,
  ConnectDesktop,
  FooterDesktop,
  HeroDesktop,
  PrivacyDesktop,
  RevolverDesktop,
  TeamDesktop,
  VideoDesktop,
} from './components/desktop';

import {
  CompanionMobile,
  ConnectMobile,
  FooterMobile,
  HeroMobile,
  PrivacyMobile,
  RevolverMobile,
  TeamMobile,
  VideoMobile,
} from './components/mobile';

export default function Home() {
  const isMobile = useDeviceType();

  const mobileGroup = (
    <>
      <HeroMobile />
      <VideoMobile />
      <CompanionMobile />
      <ConnectMobile />
      <RevolverMobile />
      <PrivacyMobile />
      <TeamMobile />
      <FooterMobile />
    </>
  );

  const desktopGroup = (
    <>
      <HeroDesktop />
      <VideoDesktop />
      <CompanionDesktop />
      <ConnectDesktop />
      <RevolverDesktop />
      <PrivacyDesktop />
      <TeamDesktop />
      <FooterDesktop />
    </>
  );

  return (
    <div className='overflow-hidden'>
      {isMobile ? mobileGroup : desktopGroup}
    </div>
  );
}
