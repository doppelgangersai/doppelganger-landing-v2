'use client';

import { useRef, useEffect } from 'react';
import Footer from './Footer';
import Hero from './Hero';
import VideoSection from './VideoSection';
import Companion from './components/Companion';
import Connect from './components/Connect';
import Privacy from './components/Privacy';
import Team from './components/Team';
import News from './components/News';
import Revolver from './components/Revolver';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop, clientHeight } = container;
      const nextScrollTop = scrollTop + Math.sign(deltaY) * clientHeight;

      container.scrollTo({
        top: nextScrollTop,
        behavior: 'smooth',
      });
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <div
      ref={containerRef}
      className='h-screen overflow-y-auto snap-y snap-mandatory'
      style={{ scrollSnapType: 'y mandatory' }}
    >
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
    </div>
  );
}
