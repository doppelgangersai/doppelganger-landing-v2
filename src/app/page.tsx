'use client';

import { useDeviceType } from '@/hooks/useDeviceType';
import Footer from './Footer';

import Hero from './Hero';

import VideoSection from './VideoSection';
import Companion from './components/Companion';
import { HeroMobile, CompanionMobile } from './components/mobile';
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
        // Мобильная версия
        <>
          <HeroMobile />
          <CompanionMobile />
        </>
      ) : (
        // Десктопная версия
        <>
          <div className='h-screen w-full snap-start overflow-hidden'>
            <Hero />
          </div>
          <div className='h-screen w-full snap-start'>
            <VideoSection />
          </div>
          <div className='h-screen w-full snap-start'>
            <Companion />
          </div>
          <div className='h-screen w-full snap-start'>
            <Connect />
          </div>
          <div className='h-screen w-full snap-start'>
            <Revolver />
          </div>
          <div className='h-screen w-full snap-start'>
            <Privacy />
          </div>
          <div className='h-screen w-full snap-start'>
            <Team />
          </div>
          <div className='h-screen w-full snap-start'>
            <News />
          </div>
          <div className='h-screen w-full snap-start'>
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}
