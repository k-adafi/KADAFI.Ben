import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useI18n } from '../i18n';
import type { UiKey } from '../i18n/ui';
import { profile } from '../data/profile';
import { useActiveSection, useTheme } from '../lib/hooks';
import { EASE } from '../lib/motion';
import CvLink from './CvLink';

const links: { id: string; key: UiKey }[] = [
  { id: 'about', key: 'nav.about' },
  { id: 'projects', key: 'nav.projects' },
  { id: 'workflow', key: 'nav.workflow' },
  { id: 'experience', key: 'nav.experience' },
  { id: 'skills', key: 'nav.skills' },
  { id: 'contact', key: 'nav.contact' },
];
const ids = links.map((l) => l.id);

export default function Navbar() {
  const { t, lang, setLang } = useI18n();
  const { theme, toggle } = useTheme();
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const controls = (
    <>
      <button
        type="button"
        onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
        className="icon-btn w-auto px-2.5 font-mono text-xs font-semibold"
        aria-label={t('lang.switch')}
        title={t('lang.switch')}
      >
        {lang === 'fr' ? 'EN' : 'FR'}
      </button>
      <button type="button" onClick={toggle} className="icon-btn" aria-label={t('theme.toggle')} title={t('theme.toggle')}>
        {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
      </button>
    </>
  );

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: EASE }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        scrolled || open ? 'border-b border-line bg-bg/80 backdrop-blur-lg' : 'border-b border-transparent'
      }`}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-md focus:bg-surface focus:px-3 focus:py-2">
        {t('nav.skip')}
      </a>
      <nav className="container flex h-16 items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2.5 font-semibold tracking-tight" onClick={() => setOpen(false)}>
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-fg font-mono text-xs font-bold text-bg">KB</span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? 'true' : undefined}
                className={`rounded-md px-3 py-2 text-sm transition-colors ${
                  active === link.id ? 'text-fg' : 'text-muted hover:text-fg'
                }`}
              >
                {t(link.key)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 sm:flex">{controls}</div>
          <CvLink short className="btn-primary hidden py-2 md:inline-flex" />
          <button
            type="button"
            className="icon-btn lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t('nav.close') : t('nav.menu')}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-line bg-bg lg:hidden"
          >
            <ul className="container flex flex-col py-4">
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-2 py-3 text-base text-muted hover:bg-elevated hover:text-fg"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
              <li className="mt-4 flex items-center gap-2 border-t border-line pt-4">
                {controls}
                <CvLink className="btn-primary ml-auto py-2" onClick={() => setOpen(false)} />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
