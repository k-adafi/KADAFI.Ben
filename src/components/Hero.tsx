import React, { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageCore';
import { useLoader } from '../context/LoaderCore';
import image from '../assets/KADAFI.jpg';
import backgroundVideo from '../assets/vid.mp4';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { t } = useLanguage();
  const { startLoading, stopLoading } = useLoader();

  useEffect(() => {
    const vid = videoRef.current;
    if (vid) {
      // S'assurer que la vidéo est bien en muted avant d'essayer de play
      vid.muted = true;
      const playPromise = vid.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Autoplay bloqué :", error);
        });
      }
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    startLoading();
    
    setTimeout(() => {
        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    }, 400);

    setTimeout(() => {
      stopLoading();
    }, 1100);
  };

  return (
    <section 
      id="hero-section"
      className="relative min-h-screen flex items-center justify-center text-white pt-16"
    >
      {/* Video background fixed */}
      <div className="fixed inset-0 -z-10">
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={backgroundVideo}
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Overlay adaptatif pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>
      </div>

      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center mt-[20px] md:mt-0">
        
        <motion.div 
          className="md:w-1/2 mt-12 md:mt-0 text-center md:text-left"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">
            KADAFI Ben
          </motion.h1>
          
          <motion.h3 variants={itemVariants} className="text-xl md:text-2xl mb-6">
            {t('hero.roles')}
          </motion.h3>
          
          <motion.div variants={itemVariants} className="text-white mb-8 font-medium">
            <p className="mb-2">{t('hero.greeting')}</p>
            <p className="mb-4">{t('hero.description1')}</p>
            <p className="mb-4">{t('hero.description2')}</p>
            <p>{t('hero.description3')}</p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row mb-5 gap-4 justify-center md:justify-start">
             <a 
              href="#portfolio"
              onClick={(e) => handleNavClick(e, '#portfolio')}
              className="bg-yellow-500 dark:bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-yellow-400 dark:hover:bg-yellow-300 transition hover:scale-105 cursor-pointer"
            >
              {t('hero.viewProjects')}
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="md:w-1/2"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <img 
              src={image}
              alt="KADAFI Ben profile"
              className="rounded-full w-[300px] md:w-[450px] mx-auto shadow-2xl border-4 border-yellow-500 dark:border-yellow-400 hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;