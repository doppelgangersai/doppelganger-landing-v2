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
  return (
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
  );
}
