import React from 'react';
import { Code2, Laptop, Brain, Smartphone, DatabaseZap } from 'lucide-react';
import { useLanguage } from '../context/LanguageCore';

const About = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-20 bg-slate-200 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          {t('about.title')} <span className="text-yellow-500 dark:text-yellow-400">{t('about.highlight')}</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg hover:transform hover:scale-105 transition duration-300 shadow-md dark:shadow-gray-900/50">
            <div className="w-16 h-16 bg-yellow-500 dark:bg-yellow-400 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Code2 size={32} className="text-black dark:text-gray-900" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">{t('about.cards.frontend.title')}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              {t('about.cards.frontend.desc')}
            </p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg hover:transform hover:scale-105 transition duration-300 shadow-md dark:shadow-gray-900/50">
            <div className="w-16 h-16 bg-yellow-500 dark:bg-yellow-400 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Laptop size={32} className="text-black dark:text-gray-900" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">{t('about.cards.backend.title')}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              {t('about.cards.backend.desc')}
            </p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg hover:transform hover:scale-105 transition duration-300 shadow-md dark:shadow-gray-900/50">
            <div className="w-16 h-16 bg-yellow-500 dark:bg-yellow-400 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Smartphone size={32} className="text-black dark:text-gray-900" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">{t('about.cards.mobile.title')}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              {t('about.cards.mobile.desc')}
            </p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg hover:transform hover:scale-105 transition duration-300 shadow-md dark:shadow-gray-900/50">
            <div className="w-16 h-16 bg-yellow-500 dark:bg-yellow-400 rounded-full flex items-center justify-center mb-6 mx-auto">
              <DatabaseZap size={32} className="text-black dark:text-gray-900" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">{t('about.cards.data.title')}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              {t('about.cards.data.desc')}
            </p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg hover:transform hover:scale-105 transition duration-300 shadow-md dark:shadow-gray-900/50">
            <div className="w-16 h-16 bg-yellow-500 dark:bg-yellow-400 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Brain size={32} className="text-black dark:text-gray-900" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">{t('about.cards.tools.title')}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              {t('about.cards.tools.desc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;