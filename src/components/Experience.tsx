import { useLanguage } from '../context/LanguageCore';

const Experience = () => {
  const { t } = useLanguage();
  const experiences = [
    {
      period: t('experience.items.dna1.period'),
      title: t('experience.items.dna1.title'),
      company: t('experience.items.dna1.company'),
      link: "https://dna.mg/"
    },
    {
      period: t('experience.items.dna2.period'),
      title: t('experience.items.dna2.title'),
      company: t('experience.items.dna2.company'),
      link: "https://dna.mg/"
    },
    {
      period: t('experience.items.mission.period'),
      title: t('experience.items.mission.title'),
      company: t('experience.items.mission.company'),
      link: "https://mission-madagascar.mg"
    },
    {
      period: t('experience.items.immo.period'),
      title: t('experience.items.immo.title'),
      company: t('experience.items.immo.company'),
      link: "https://agenceimmomadaocea.com"
    },
    {
      period: t('experience.items.formateur.period'),
      title: t('experience.items.formateur.title'),
      company: t('experience.items.formateur.company'),

    },
    {
      period: t('experience.items.jirama.period'),
      title: t('experience.items.jirama.title'),
      description: t('experience.items.jirama.desc'),
    },
    {
      period: t('experience.items.rh.period'),
      title: t('experience.items.rh.title'),
      company: t('experience.items.rh.company'),
      link: "https://www.facebook.com/yestafita"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-100 dark:bg-black transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
          {t('experience.title')} <span className="text-yellow-500 dark:text-yellow-400">{t('experience.highlight')}</span>
        </h2>

        

        <div className="bg-slate-200 dark:bg-gray-900 rounded-lg p-8 transition-colors duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-8 last:mb-0">
                <h3 className="text-yellow-500 dark:text-yellow-400 font-bold mb-2">{exp.period}</h3>
                <h4 className="text-gray-900 dark:text-white font-semibold mb-2">{exp.title}</h4>
                {exp.company && <p className="text-gray-600 dark:text-gray-400 mb-2">{exp.company}</p>}
                {exp.description && <p className="text-gray-600 dark:text-gray-400 mb-2">{exp.description}</p>}
                {exp.link && (
                  <a 
                    href={exp.link}
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

export default Experience;