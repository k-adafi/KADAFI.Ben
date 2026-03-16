import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Facebook } from 'lucide-react';
import codeimage from '../assets/code.jpg';
import { useLanguage } from '../context/LanguageCore';

const Contact = () => {
  const { t } = useLanguage();
  return (
    <section id="contact" className="py-20 bg-slate-100 dark:bg-black transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
          {t('contact.title')} <span className="text-yellow-500 dark:text-yellow-400">{t('contact.highlight')}</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-yellow-500 dark:bg-yellow-400 rounded-full flex items-center justify-center">
                <Mail size={24} className="text-black" />
              </div>
              <div>
                <h3 className="text-gray-900 dark:text-white font-semibold">Email</h3>
                <p className="text-gray-600 dark:text-gray-400">kadafiben196@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-yellow-500 dark:bg-yellow-400 rounded-full flex items-center justify-center">
                <Phone size={24} className="text-black" />
              </div>
              <div>
                <h3 className="text-gray-900 dark:text-white font-semibold">{t('contact.phone')}</h3>
                <p className="text-gray-600 dark:text-gray-400">+261 34 14 566 79</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-yellow-500 dark:bg-yellow-400 rounded-full flex items-center justify-center">
                <MapPin size={24} className="text-black" />
              </div>
              <div>
                <h3 className="text-gray-900 dark:text-white font-semibold">{t('contact.locationTitle')}</h3>
                <p className="text-gray-600 dark:text-gray-400">{t('contact.location')}</p>
              </div>
            </div>

            <div className="flex space-x-4 mt-8">
              <a 
                href="https://www.facebook.com/kadafy.man.3" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition hover:transform hover:scale-110 flex items-center gap-2"
              >
                <Facebook className="w-4 h-4" />
                <span>Facebook</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/kadafi-ben-0312a3265/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition hover:transform hover:scale-110 flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg">
            <img 
              src={codeimage}
              alt="Code design"
              className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;