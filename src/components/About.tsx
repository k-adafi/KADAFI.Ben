  import { motion } from 'framer-motion';
import { Code2, Laptop, Brain, Smartphone, DatabaseZap } from 'lucide-react';
import { useLanguage } from '../context/LanguageCore';
import FadeInSection from './FadeInSection';

const About = () => {
  const { t } = useLanguage();

  const cards = [
    {
      icon: Code2,
      title: t('about.cards.frontend.title'),
      description: t('about.cards.frontend.desc'),
      delay: 0,
      direction: "left"
    },
    {
      icon: Laptop,
      title: t('about.cards.backend.title'),
      description: t('about.cards.backend.desc'),
      delay: 0.1,
      direction: "up"
    },
    {
      icon: Smartphone,
      title: t('about.cards.mobile.title'),
      description: t('about.cards.mobile.desc'),
      delay: 0.2,
      direction: "right"
    },
    {
      icon: DatabaseZap,
      title: t('about.cards.data.title'),
      description: t('about.cards.data.desc'),
      delay: 0.3,
      direction: "down"
    },
    {
      icon: Brain,
      title: t('about.cards.tools.title'),
      description: t('about.cards.tools.desc'),
      delay: 0.4,
      direction: "left"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="pt-24 bg-resume-bg text-resume-text transition-colors duration-300">
      <div className="container mx-auto px-4">
        <FadeInSection direction="right" delay={0.1}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              {t('about.title')} <span className="text-accent-yellow">{t('about.highlight')}</span>
            </h2>
          </motion.div>
        </FadeInSection>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <FadeInSection key={index} direction={card.direction} delay={card.delay}>
                <motion.div
                    key={index}
                    variants={itemVariants}
                    className="card-hover group relative overflow-hidden h-full"
                    whileHover={{
                      y: -8,
                    transition: { duration: 0.3 },
                  }}
                >
                  {/* Background gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative p-8">
                    {/* Icon Container */}
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-accent-yellow to-accent-yellow-dark rounded-full flex items-center justify-center mb-6 mx-auto group-hover:shadow-lg group-hover:shadow-accent-yellow/30 transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon size={32} className="text-black" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-center mb-4 text-resume-text group-hover:text-accent-yellow transition-colors duration-300">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-resume-text-secondary text-center text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              </FadeInSection>  
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;