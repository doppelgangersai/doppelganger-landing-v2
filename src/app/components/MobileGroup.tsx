'use client';

import {
  CompanionMobile,
  ConnectMobile,
  FooterMobile,
  HeroMobile,
  PrivacyMobile,
  RevolverMobile,
  TeamMobile,
  VideoMobile,
} from './mobile';

export default function MobileGroup() {
  return (
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
}
