import React, { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageCore';
import { useLoader } from '../context/LoaderCore';
import image from '../assets/KADAFI.jpg';
import backgroundVideo from '../assets/vid.mp4';
import FadeInSection from './FadeInSection';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { t } = useLanguage();
  const { startLoading, stopLoading } = useLoader();

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    if (href.startsWith('http') || href.startsWith('https')) {
      // Lien externe - laisser le navigateur gérer
      return;
    }
    
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
      className="relative min-h-screen flex items-center justify-center pt-20 pb-10 sm:pt-0 sm:pb-0"
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

      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <motion.div 
            className="md:w-1/2 text-white text-center md:text-left"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Main Title */}
            <FadeInSection direction="left" delay={0.1}>
              <motion.div variants={itemVariants}>
                <h1 className="text-2xl md:text-3xl font-bold mb-4">
                  KADAFI Ben
                </h1>
                <div className="h-1 w-24 bg-gradient-to-r from-accent-yellow to-yellow-300 rounded-full mb-6" />
              </motion.div>
            </FadeInSection>
            
            
            {/* Subtitle */}
            <FadeInSection direction="right" delay={0.2}>
              <motion.h2 
                variants={itemVariants}
                className="text-xl md:text-2xl font-semibold mb-8 text-accent-yellow"
              >
                {t('hero.roles')}
              </motion.h2>
            </FadeInSection>
            
            
            {/* Description */}
            <FadeInSection direction="up" delay={0.3}>
              <motion.div 
                  variants={itemVariants}
                  className="text-white/90 mb-8 font-light space-y-4 leading-relaxed"
                >
                  <p>{t('hero.greeting')}</p>
                  <p>{t('hero.description1')}</p>
                <p>{t('hero.description2')}</p>
                <p>{t('hero.description3')}</p>
              </motion.div>
            </FadeInSection>
              
            
            {/* CTA Button */}
            <FadeInSection direction="left" delay={0.4}>
              <motion.div 
                variants={itemVariants}
                className="flex flex-col md:flex-row gap-4 justify-center md:justify-start"
              >
                {/* <motion.a 
                  href="#portfolio"
                  onClick={(e) => handleNavClick(e, '#portfolio')}
                  className="btn-primary flex items-center justify-center gap-2 text-sm font-semibold px-8 py-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('hero.viewProjects')}
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                </motion.a> */}
                <motion.a 
                  href="https://kadafi-ben-cv.vercel.app/"
                  onClick={(e) => handleNavClick(e, 'https://kadafi-ben-cv.vercel.app/')}
                  className="btn-primary flex items-center justify-center gap-2 text-sm font-semibold px-8 py-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('hero.viewResume')}
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                </motion.a>
              </motion.div>
            </FadeInSection>  
            
        </motion.div>


        {/* Right Content - Image */}
        <motion.div 
            className="md:w-1/2 flex justify-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              {/* Animated background glow */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-yellow via-yellow-300 to-accent-yellow opacity-30 blur-2xl -z-10"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Image */}
              <FadeInSection direction="up" delay={0.5}>
                <motion.img 
                  src={image}
                  alt="KADAFI Ben profile"
                  className="rounded-full w-[270px] md:w-[39  0px] shadow-2xl border-4 border-accent-yellow ring-4 ring-accent-yellow/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              </FadeInSection>
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;