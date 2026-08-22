import { useRef, useEffect, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import backgroundVideo from '../assets/vid.mp4';
import FadeInSection from '../components/FadeInSection';

const Home = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

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

      {/* Header/Sidebar fixe */}
      <Header 
        isCollapsed={isSidebarCollapsed} 
        setIsCollapsed={setIsSidebarCollapsed} 
      />

      {/* Contenu principal - Ajusté selon la sidebar */}
      <main className={`transition-all duration-300 ${isSidebarCollapsed ? 'md:pl-14' : 'md:pl-[180px]'}`}>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Certifications />
          <Contact />
          <Footer />
      </main>
    </div>
  );
};

export default Home;
