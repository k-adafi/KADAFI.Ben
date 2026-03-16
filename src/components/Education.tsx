import { useLanguage } from '../context/LanguageCore';

const Education = () => {
  const { t } = useLanguage();
  const education = [
    {
      year: t('education.items.orangeCV.year'),
      title: t('education.items.orangeCV.title'),
      institution: t('education.items.orangeCV.institution'),
      link: "https://www.facebook.com/OrangeDigitalCenterMadagascar"
    },
    {
      year: t('education.items.master.year'),
      title: t('education.items.master.title'),
      institution: t('education.items.master.institution'),
      link: "https://www.univ-toamasina.mg"
    },
    {
      year: t('education.items.licence.year'),
      title: t('education.items.licence.title'),
      institution: t('education.items.licence.institution')
    },
    {
      year: t('education.items.opendata.year'),
      title: t('education.items.opendata.title'),
      institution: t('education.items.opendata.institution'),
      link: "https://www.association-maidi.mg/"
    },
    {
      year: t('education.items.orangeUX.year'),
      title: t('education.items.orangeUX.title'),
      institution: t('education.items.orangeUX.institution'),
      link: "https://www.facebook.com/OrangeDigitalCenterMadagascar"
    },
    {
      year: t('education.items.bacc.year'),
      title: t('education.items.bacc.title'),
      institution: t('education.items.bacc.institution')
    }
  ];

  return (
    <section id="education" className="py-20 bg-slate-200 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
          {t('education.title')} <span className="text-yellow-500 dark:text-yellow-400">{t('education.highlight')}</span>
        </h2>

        <div className="bg-slate-100 dark:bg-black/50 rounded-lg p-8 transition-colors duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {education.map((edu, index) => (
              <div key={index} className="mb-8 last:mb-0">
                <h3 className="text-yellow-500 dark:text-yellow-400 font-bold mb-2">{edu.year}</h3>
                <h4 className="text-gray-900 dark:text-white font-semibold mb-2">{edu.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-2">{edu.institution}</p>
                {edu.link && (
                  <a 
                    href={edu.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-yellow-500 dark:bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-400 dark:hover:bg-yellow-300 transition hover:transform hover:scale-110"
                  >
                    {t('experience.visit')}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;