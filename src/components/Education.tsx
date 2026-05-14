import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageCore';
import FadeInSection from './FadeInSection';

const Education = () => {
  const { t } = useLanguage();
  const education = [
    {
      year: t('education.items.master.year'),
      title: t('education.items.master.title'),
      institution: t('education.items.master.institution'),
      link: "https://www.univ-toamasina.mg",
      direction: "up"
    },
    {
      year: t('education.items.licence.year'),
      title: t('education.items.licence.title'),
      institution: t('education.items.licence.institution'),
      direction: "right"
    },
    {
      year: t('education.items.bacc.year'),
      title: t('education.items.bacc.title'),
      institution: t('education.items.bacc.institution'),
      direction: "up"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="education" className="pt-24 bg-resume-bg dark:bg-resume-bg transition-colors duration-300">
      <div className="container mx-auto">
        <FadeInSection direction="left" delay={0.1}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title text-resume-text">
              {t('education.title')} <span className="text-accent-yellow">{t('education.highlight')}</span>
            </h2>
          </motion.div>
        </FadeInSection>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {education.map((edu, index) => (
            <FadeInSection key={index} direction={edu.direction} delay={0.2 + index * 0.05}>
              <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card-hover group p-6 relative overflow-hidden bg-resume-bg-card dark:bg-resume-bg-card h-full"
                  whileHover={{
                    y: -4,
                    transition: { duration: 0.3 },
                  }}
                >
                  {/* Left accent bar */}
                  <div className="absolute left-0 top-0 h-full w-1 bg-accent-yellow group-hover:w-1.5 transition-all duration-300" />

                <div className="relative pl-4">
                  {/* Year */}
                  <motion.p
                    className="text-accent-yellow font-bold text-sm tracking-wide mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {edu.year}
                  </motion.p>

                  {/* Title */}
                  <h3 className="text-resume-text font-bold text-lg mb-1 group-hover:text-accent-yellow transition-colors duration-300">
                    {edu.title}
                  </h3>

                  {/* Institution */}
                  <p className="text-resume-text-secondary text-sm mb-4">
                    {edu.institution}
                  </p>

                  {/* Link Button */}
                  {edu.link && (
                    <motion.a
                      href={edu.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block btn-primary text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {t('experience.visit')}
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </FadeInSection>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;