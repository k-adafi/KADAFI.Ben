import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageCore';
import { Language } from '../utils/translations';

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
];

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ horizontal: 'left-0', vertical: 'top-full mt-2', origin: 'origin-top-left' });

  const currentLang = languages.find(l => l.code === language) || languages[0];

  // Close dropdown when clicking outside and handle smart positioning
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen && dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const dropdownWidth = 160; // w-40 = 10rem = 160px
      const dropdownHeight = 150; // Approximativement

      let horizontal = 'left-0';
      let vertical = 'top-full mt-2';
      let origin = 'origin-top-left';

      // Vérifier le débordement à droite
      if (rect.left + dropdownWidth > screenWidth) {
        horizontal = 'right-0';
        origin = 'origin-top-right';
      }

      // Vérifier le débordement à gauche (au cas où)
      if (rect.right - dropdownWidth < 0) {
        horizontal = 'left-0';
        origin = 'origin-top-left';
      }

      // Vérifier le débordement en bas
      if (rect.bottom + dropdownHeight > screenHeight) {
        vertical = 'bottom-full mb-2';
        origin = origin.replace('top', 'bottom');
      }

      setPosition({ horizontal, vertical, origin });
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        className="flex items-center gap-2 px-3 py-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300 shadow-sm"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Changer de langue"
      >
        <Globe size={14} className="text-gray-600 dark:text-gray-300" />
        {/* <span className="text-sm font-medium hidden sm:inline-block text-gray-800 dark:text-gray-200">
          {currentLang.flag} {currentLang.code.toUpperCase()}
        </span> */}
        <ChevronDown size={12} className={`text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`absolute ${position.horizontal} ${position.vertical} ${position.origin} w-40 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl overflow-hidden z-50`}
          >
            <div className="py-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleSelect(lang.code)}
                  className={`w-full flex items-center gap-3 px-4 py-2 text-left text-xs transition-colors duration-200 ${
                    language === lang.code 
                      ? 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 font-medium' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span>{lang.label}</span>
                  {language === lang.code && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
