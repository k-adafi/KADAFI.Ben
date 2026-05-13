import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageCore';
import FadeInSection from './FadeInSection';

const Experience = () => {
  const { t } = useLanguage();
  const experiences = [
    {
      period: t('experience.items.dna1.period'),
      title: t('experience.items.dna1.title'),
      company: t('experience.items.dna1.company'),
      link: "https://dna.mg/",
      direction: "left"
    },
    {
      period: t('experience.items.dna2.period'),
      title: t('experience.items.dna2.title'),
      company: t('experience.items.dna2.company'),
      link: "https://dna.mg/",
      direction: "up"
    },
    {
      period: t('experience.items.mission.period'),
      title: t('experience.items.mission.title'),
      company: t('experience.items.mission.company'),
      link: "https://mission-madagascar.mg",
      direction: "right"
    },
    {
      period: t('experience.items.immo.period'),
      title: t('experience.items.immo.title'),
      company: t('experience.items.immo.company'),
      link: "https://agenceimmomadaocea.com",
      direction: "down"
    },
    {
      period: t('experience.items.formateur.period'),
      title: t('experience.items.formateur.title'),
      company: t('experience.items.formateur.company'),
      direction: "left"
    },
    {
      period: t('experience.items.jirama.period'),
      title: t('experience.items.jirama.title'),
      description: t('experience.items.jirama.desc'),
      direction: "up"
    },
    {
      period: t('experience.items.rh.period'),
      title: t('experience.items.rh.title'),
      company: t('experience.items.rh.company'),
      link: "https://www.facebook.com/yestafita",
      direction: "right"
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
    <section id="experience" className="pt-24 bg-resume-bg dark:bg-resume-bg transition-colors duration-300">
      <div className="container mx-auto px-4">
        <FadeInSection direction="right" delay={0.1}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title text-resume-text">
              {t('experience.title')} <span className="text-accent-yellow">{t('experience.highlight')}</span>
            </h2>
          </motion.div>
        </FadeInSection>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experiences.map((exp, index) => (
            <FadeInSection key={index} direction={exp.direction} delay={0.2 + index * 0.05}>
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
                  {/* Period */}
                  <motion.p
                    className="text-accent-yellow font-bold text-sm tracking-wide mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {exp.period}
                  </motion.p>

                  {/* Title */}
                  <h3 className="text-resume-text font-bold text-lg mb-1 group-hover:text-accent-yellow transition-colors duration-300">
                    {exp.title}
                  </h3>

                  {/* Company */}
                  {exp.company && (
                    <p className="text-resume-text-secondary text-sm mb-3">
                      {exp.company}
                    </p>
                  )}

                  {/* Description */}
                  {exp.description && (
                    <p className="text-resume-text-secondary text-sm mb-4">
                      {exp.description}
                    </p>
                  )}

                  {/* Link Button */}
                  {exp.link && (
                    <motion.a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block btn-primary text-sm mt-3"
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

export default Experience;