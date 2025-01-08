'use client';

import { useDeviceType } from '@/hooks/useDeviceType';
import Footer from './Footer';

import Hero from './Hero';

import VideoSection from './VideoSection';
import Companion from './components/Companion';
import { HeroMobile, CompanionMobile, VideoMobile } from './components/mobile';
import Connect from './components/Connect';
import News from './components/News';
import Privacy from './components/Privacy';
import Revolver from './components/Revolver';
import Team from './components/Team';

export default function Home() {
  const isMobile = useDeviceType();

  return (
    <div
      className={`h-screen overflow-y-auto ${
        !isMobile ? 'snap-y snap-mandatory' : ''
      }`}
      style={!isMobile ? { scrollSnapType: 'y mandatory' } : {}}
    >
      {isMobile ? (
        <>
          <HeroMobile />
          <VideoMobile />
          <CompanionMobile />
        </>
      ) : (
        <>
          <Hero />
          <VideoSection />
          <Companion />
          <Connect />
          <Revolver />
          <Privacy />
          <Team />
          <News />
          <Footer />
        </>
      )}
    </div>
  );
}
