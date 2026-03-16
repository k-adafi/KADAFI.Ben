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
      className="fixed w-full bg-white/90 dark:bg-gray-900/90 text-gray-900 z-50 backdrop-blur-sm border-b border-gray-200 dark:text-white dark:border-gray-800"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.h1 
            className="text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
          >
            KADAFI.Ben
          </motion.h1>
          
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="hover:text-yellow-500 dark:hover:text-yellow-400 transition"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <motion.a 
              href="https://github.com/k-adafi"
              className="hover:text-yellow-500 dark:hover:text-yellow-400 transition"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/kadafi-ben-0312a3265/"
              className="hover:text-yellow-500 dark:hover:text-yellow-400 transition"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a 
              href="https://www.facebook.com/kadafy.man.3" 
              className="hover:text-yellow-500 dark:hover:text-yellow-400 transition"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={20} />
            </motion.a>
            <motion.a 
              href="mailto:kadafiben196@gmail.com"
              className="hover:text-yellow-500 dark:hover:text-yellow-400 transition"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail size={20} />
            </motion.a>
            <div className="pl-2 ml-2 border-l border-gray-300 dark:border-gray-700">
              <LanguageSwitcher />
            </div>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div 
            className="md:hidden pt-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="hover:text-yellow-500 dark:hover:text-yellow-400 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.name}
                </motion.a>
              ))}
              <ThemeToggle />
            </nav>
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-center pb-2">
              <LanguageSwitcher />
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;