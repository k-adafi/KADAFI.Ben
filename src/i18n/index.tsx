import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { ui, type UiKey } from './ui';

export type Lang = 'fr' | 'en';
/** A string available in every supported language. */
export type L = Record<Lang, string>;
export type LList = Record<Lang, string[]>;

interface I18nValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  /** Translate a UI label. */
  t: (key: UiKey) => string;
  /** Pick the current language from a localized value. */
  l: (value: L | string) => string;
  ll: (value: LList) => string[];
}

const I18nContext = createContext<I18nValue | null>(null);

function initialLang(): Lang {
  const saved = typeof localStorage !== 'undefined' ? localStorage.getItem('lang') : null;
  if (saved === 'fr' || saved === 'en') return saved;
  return typeof navigator !== 'undefined' && navigator.language.toLowerCase().startsWith('fr') ? 'fr' : 'en';
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem('lang', lang);
  }, [lang]);

  const setLang = useCallback((next: Lang) => setLangState(next), []);

  const value = useMemo<I18nValue>(
    () => ({
      lang,
      setLang,
      t: (key) => ui[key][lang],
      l: (v) => (typeof v === 'string' ? v : v[lang]),
      ll: (v) => v[lang],
    }),
    [lang, setLang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used inside <I18nProvider>');
  return ctx;
}
