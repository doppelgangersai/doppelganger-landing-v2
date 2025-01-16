'use client';

import {
  CompanionDesktop,
  ConnectDesktop,
  FooterDesktop,
  HeroDesktop,
  PrivacyDesktop,
  RevolverDesktop,
  TeamDesktop,
  VideoDesktop,
} from './desktop';

export default function DesktopGroup() {
  return (
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
}
