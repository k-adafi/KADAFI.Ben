import { useRef, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import backgroundVideo from '../assets/vid.mp4';
import FadeInSection from '../components/FadeInSection';

const Home = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const vid = videoRef.current;
    if (vid) {
      vid.muted = true;
      const playPromise = vid.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Autoplay bloqué :", error);
        });
      }
    }
  }, []);

  return (
    <div className="relative min-h-screen text-gray-900 dark:text-white overflow-x-hidden">
      {/* Vidéo en arrière-plan */}
      <div className="fixed inset-0 -z-10 bg-slate-900">
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={backgroundVideo}
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Filtre sombre pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-black/30 dark:bg-black/60"></div>
      </div>

      {/* Header fixe */}
      <div className="fixed w-full top-0 z-50">
        <Header />
      </div>

      {/* Contenu principal */}
      <main>
        <FadeInSection direction="up">
          <Hero />
        </FadeInSection>

        <FadeInSection direction="left" delay={0.2}>
          <About />
        </FadeInSection>

        <FadeInSection direction="right" delay={0.4}>
          <Skills />
        </FadeInSection>

        <FadeInSection direction="up" delay={0.6}>
          <Projects />
        </FadeInSection>

        <FadeInSection direction="down" delay={0.8}>
          <Experience />
        </FadeInSection>

        <FadeInSection direction="left" delay={1}>
          <Education />
        </FadeInSection>

        <FadeInSection direction="up" delay={1.2}>
          <Contact />
        </FadeInSection>
      </main>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
