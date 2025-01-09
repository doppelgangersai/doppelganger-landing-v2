'use client';

import { useDeviceType } from '@/hooks/useDeviceType';

import {
  CompanionDesktop,
  ConnectDesktop,
  FooterDesktop,
  HeroDesktop,
  NewsDesktop,
  PrivacyDesktop,
  RevolverDesktop,
  TeamDesktop,
  VideoDesktop,
} from './components/desktop';
import { CompanionMobile, HeroMobile, VideoMobile } from './components/mobile';

export default function Home() {
  const isMobile = useDeviceType();

  const mobileGroup = (
    <>
      <HeroMobile />
      <VideoMobile />
      <CompanionMobile />
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
      <NewsDesktop />
      <FooterDesktop />
    </>
  );

  return <div>{isMobile ? mobileGroup : desktopGroup}</div>;
}
