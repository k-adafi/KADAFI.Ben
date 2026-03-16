import React from 'react';
import { Facebook, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageCore';
import LanguageSwitcher from './LanguageSwitcher';

const year = new Date().getFullYear();

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-slate-100 dark:bg-black py-8 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-center md:text-left mb-4 md:mb-0">
            © {year} KADAFI.Ben. {t('footer.rights')}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6 mt-4 md:mt-0">
            <div className="flex space-x-6">
              <a 
                href="https://github.com/k-adafi"
                className="text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/kadafi-ben-0312a3265/"
                className="text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://www.facebook.com/kadafy.man.3" 
                className="text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="mailto:kadafiben196@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
            
            <div className="hidden sm:block w-px h-6 bg-gray-300 dark:bg-gray-700"></div>
            
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;