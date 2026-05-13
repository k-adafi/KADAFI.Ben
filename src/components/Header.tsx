import React from 'react';
import { Menu, X, Github, Linkedin, Facebook, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import { motion } from 'framer-motion';
import { useLoader } from '../context/LoaderCore';
import { useLanguage } from '../context/LanguageCore';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { startLoading, stopLoading } = useLoader();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    startLoading();
    
    // Attendre que le loader recouvre l'écran pour effectuer le défilement
    setTimeout(() => {
      if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 400); // Exécuté lorsque le loader est affiché

    // Arrêter le loader avec un léger délai pour que le défilement soit invisible
    setTimeout(() => {
      stopLoading();
    }, 1100);
  };

  const { t } = useLanguage();

  const menuItems = [
    { name: t('header.home'), href: '#' },
    { name: t('header.about'), href: '#about' },
    { name: t('header.skills'), href: '#skills' },
    { name: t('header.projects'), href: '#portfolio' },
    { name: t('header.contact'), href: '#contact' }
  ];

  return (
    <motion.header 
      className="fixed w-full bg-resume-bg-card/90 text-resume-text z-50 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <motion.h1 
            className="text-2xl font-bold text-resume-primary hover:text-accent-yellow transition-colors duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={(e) => handleNavClick(e as any, '#')}
          >
            KADAFI.Ben
          </motion.h1>
          
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-resume-primary text-sm font-bold hover:text-accent-yellow transition-colors duration-300 relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-yellow group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <div className="flex items-center space-x-3 ml-2 pl-4 border-l border-gray-200 dark:border-gray-800">
              <motion.a 
                href="https://github.com/k-adafi"
                className="text-resume-primary hover:text-accent-yellow transition-colors duration-300 p-1.5 rounded-full hover:bg-resume-bg"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github size={20} />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/kadafi-ben-0312a3265/"
                className="text-resume-primary hover:text-accent-yellow transition-colors duration-300 p-1.5 rounded-full hover:bg-resume-bg"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a 
                href="https://www.facebook.com/kadafy.man.3" 
                className="text-resume-primary hover:text-accent-yellow transition-colors duration-300 p-1.5 rounded-full hover:bg-resume-bg"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a 
                href="mailto:kadafiben196@gmail.com"
                className="text-resume-primary hover:text-accent-yellow transition-colors duration-300 p-1.5 rounded-full hover:bg-resume-bg"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
              >
                <Mail size={20} />
              </motion.a>
            </div>
            <div className="pl-4 ml-4 border-l border-gray-200 dark:border-gray-800">
              <LanguageSwitcher />
            </div>
          </div>

          <motion.button 
            className="md:hidden text-resume-primary hover:text-accent-yellow transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {isMenuOpen && (
          <motion.div 
            className="md:hidden pt-4 border-t border-gray-200 dark:border-gray-800 mt-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col space-y-3 pb-4">
              {menuItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-resume-primary text-sm font-bold hover:text-accent-yellow transition-colors duration-300 relative group py-2"
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>
            <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-800">
              <div className="flex items-center space-x-2">
                <ThemeToggle />
                <LanguageSwitcher />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;