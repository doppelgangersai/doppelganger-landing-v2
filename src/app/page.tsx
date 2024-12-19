import Footer from './Footer';
import Hero from './Hero';
import VideoSection from './VideoSection';
import Companion from './components/Companion';
import Connect from './components/Connect';
import Privacy from './components/Privacy';
import Team from './components/Team';
export default function Home() {
  return (
    <>
      <Hero />
      <VideoSection />
      <Companion />
      <Connect />
      <Privacy />
      <Team />
      <Footer />
    </>
  );
}
