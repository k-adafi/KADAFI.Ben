import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Facebook, 
  Mail, 
  Home, 
  User, 
  Terminal, 
  Layers, 
  Award, 
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Briefcase,
  GraduationCap
} from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import { motion, AnimatePresence } from 'framer-motion';
import { useLoader } from '../context/LoaderCore';
import { useLanguage } from '../context/LanguageCore';

interface HeaderProps {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

const Header = ({ isCollapsed, setIsCollapsed }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#');
  const { startLoading, stopLoading } = useLoader();
  const { t } = useLanguage();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    startLoading();
    
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
    }, 400);

    setTimeout(() => {
      stopLoading();
    }, 1100);
  };

  useEffect(() => {
    const sections = ['about', 'skills', 'portfolio', 'experience', 'education', 'certifications', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
      
      if (window.scrollY < 100) {
        setActiveSection('#');
      }
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection('#');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuItems = [
    { name: t('header.home'), href: '#', icon: Home },
    { name: t('header.about'), href: '#about', icon: User },
    { name: t('header.skills'), href: '#skills', icon: Terminal },
    { name: t('header.projects'), href: '#portfolio', icon: Layers },
    { name: t('header.experience'), href: '#experience', icon: Briefcase },
    { name: t('header.education'), href: '#education', icon: GraduationCap },
    { name: t('header.certifications'), href: '#certifications', icon: Award },
    { name: t('header.contact'), href: '#contact', icon: MessageCircle }
  ];

  const sidebarVariants = {
    expanded: { width: 180 },
    collapsed: { width: 60 }
  };

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-resume-bg-card backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800 p-4 flex justify-between items-center transition-colors duration-300">
        <h1 className="text-xl font-bold text-resume-primary">KADAFI.Ben</h1>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-resume-primary hover:text-accent-yellow transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop Sidebar */}
      <motion.aside
        initial="collapsed"
        animate={isCollapsed ? "collapsed" : "expanded"}
        variants={sidebarVariants}
        className="hidden md:flex fixed left-0 top-0 h-screen bg-resume-bg-card backdrop-blur-md border-r border-gray-200 dark:border-gray-800 z-50 flex-col transition-colors duration-300 shadow-2xl"
      >
        {/* Toggle Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-10 bg-accent-yellow text-black p-1 rounded-full shadow-lg hover:scale-110 transition-transform z-[60]"
        >
          {isCollapsed ? <ChevronRight size={10} /> : <ChevronLeft size={10} />}
        </button>

        {/* Logo Section */}
        <div className="p-4 flex items-center gap-4 overflow-hidden">
          <div className="min-w-[22px] w-6 h-6 bg-accent-yellow rounded-lg flex items-center justify-center font-bold text-black text-xl shadow-lg shadow-accent-yellow/20">
            K
          </div>
          {!isCollapsed && (
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-bold text-md text-resume-primary whitespace-nowrap"
            >
              KADAFI.Ben
            </motion.span>
          )}
        </div>

        {/* Navigation Section */}
        <nav className="flex-grow px-3 py-4 overflow-y-auto no-scrollbar">
          {menuItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`flex items-center gap-4 p-3 rounded-xl transition-all duration-300 group relative ${
                activeSection === item.href 
                ? 'bg-accent-yellow/10 text-accent-yellow shadow-inner' 
                : 'text-resume-primary hover:bg-accent-yellow/5 hover:text-accent-yellow'
              }`}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.95 }}
            >
              <item.icon size={14} className={`min-w-[14px] transition-transform ${activeSection === item.href ? 'scale-110' : 'group-hover:scale-110'}`} />
              {!isCollapsed && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="font-bold text-sm whitespace-nowrap"
                >
                  {item.name}
                </motion.span>
              )}
              {isCollapsed && (
                <div className="absolute left-16 bg-resume-bg-card border border-gray-200 dark:border-gray-800 px-1 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap text-[10px] font-bold shadow-xl">
                  {item.name}
                </div>
              )}
              {activeSection === item.href && (
                <motion.div 
                  layoutId="activePill"
                  className="absolute left-0 w-1 h-6 bg-accent-yellow rounded-r-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.a>
          ))}
        </nav>

        {/* Footer Section (Socials & Controls) */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-800 space-y-4">
          <div className={`flex items-center gap-3 ${isCollapsed ? 'flex-col' : 'justify-center'}`}>
            <ThemeToggle />
            <LanguageSwitcher />
          </div>

          <div className={`flex items-center gap-2 ${isCollapsed ? 'flex-col' : 'justify-center flex-wrap'}`}>
            {[
              { icon: Github, href: "https://github.com/k-adafi" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/kadafi-ben-0312a3265/" },
              { icon: Facebook, href: "https://www.facebook.com/kadafy.man.3" },
              { icon: Mail, href: "mailto:kadafiben196@gmail.com" }
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-resume-primary hover:text-accent-yellow hover:bg-resume-bg rounded-lg transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon size={14} />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.aside>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] md:hidden"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 h-full w-[280px] bg-resume-bg-card z-[110] md:hidden shadow-2xl p-6 flex flex-col"
            >
              <div className="flex justify-between items-center mb-10">
                <h1 className="text-2xl font-bold text-accent-yellow">KADAFI.Ben</h1>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-resume-primary">
                  <X size={18} />
                </button>
              </div>

              <nav className="flex-grow space-y-4 overflow-y-auto no-scrollbar">
                {menuItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center gap-4 p-4 rounded-2xl font-bold transition-all ${
                      activeSection === item.href 
                      ? 'bg-accent-yellow/10 text-accent-yellow shadow-inner' 
                      : 'text-resume-primary hover:bg-accent-yellow/10 hover:text-accent-yellow'
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    <item.icon size={14} className={activeSection === item.href ? 'scale-110' : ''} />
                    {item.name}
                  </motion.a>
                ))}
              </nav>

              <div className="pt-6 border-t border-gray-200 dark:border-gray-800 space-y-6">
                <div className="flex justify-around">
                  <ThemeToggle />
                  <LanguageSwitcher />
                </div>
                <div className="flex justify-center gap-4">
                  <a href="https://github.com/k-adafi" target="_blank" rel="noopener noreferrer" className="text-resume-primary hover:text-accent-yellow transition-colors"><Github size={14} /></a>
                  <a href="https://www.linkedin.com/in/kadafi-ben-0312a3265/" target="_blank" rel="noopener noreferrer" className="text-resume-primary hover:text-accent-yellow transition-colors"><Linkedin size={14} /></a>
                  <a href="https://www.facebook.com/kadafy.man.3" target="_blank" rel="noopener noreferrer" className="text-resume-primary hover:text-accent-yellow transition-colors"><Facebook size={14} /></a>
                  <a href="mailto:kadafiben196@gmail.com" target="_blank" rel="noopener noreferrer" className="text-resume-primary hover:text-accent-yellow transition-colors"><Mail size={14} /></a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
