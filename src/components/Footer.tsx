import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowBigUp, Facebook, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageCore';
import LanguageSwitcher from './LanguageSwitcher';

const year = new Date().getFullYear();

const Footer = () => {
  const { t } = useLanguage();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/k-adafi', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/kadafi-ben-0312a3265/', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://www.facebook.com/kadafy.man.3', label: 'Facebook' },
    { icon: Mail, href: 'mailto:kadafiben196@gmail.com', label: 'Email' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <footer className="bg-resume-bg-card border-t border-gray-200 dark:border-gray-800 py-3 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Copyright */}
          <motion.p 
            variants={itemVariants}
            className="text-resume-text-secondary text-center md:text-left"
          >
            © {year} Kadafi.Ben. {t('footer.rights')}
          </motion.p>

          {/* Social Links & Language */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a 
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-resume-text-secondary hover:text-accent-yellow transition-colors duration-300 p-2 rounded-full hover:bg-resume-bg"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    variants={itemVariants}
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>

            {/* Divider */}
            <motion.div 
              variants={itemVariants}
              className="hidden sm:block w-px h-8 bg-gray-200 dark:bg-gray-800"
            />

            {/* Language Switcher */}
            <motion.div
              variants={itemVariants}
            >
              <LanguageSwitcher />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <motion.div className="fixed bottom-4 right-4 z-50">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-accent-yellow text-black px-2 py-2 rounded-full font-semibold flex items-center justify-center hover:opacity-90 transition-all hover:scale-110 cursor-pointer shadow-lg"
            >
              <ArrowBigUp className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </div>
    </footer>
  );
};

export default Footer;