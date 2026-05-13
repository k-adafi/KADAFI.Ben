import { motion } from 'framer-motion';
import { 
  FileCode, 
  Palette, 
  Braces, 
  Database, 
  Code2, 
  Atom, 
  Boxes, 
  Coffee, 
  Server,
  Code,
  FileCode2, 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageCore';
import FadeInSection from './FadeInSection';

const Skills = () => {
  const { t } = useLanguage();
  const skills = [
    { name: 'HTML', niveau: t('skills.levels.advanced'), level: 90, icon: <FileCode className="w-12 h-12" />, direction : "up" },
    { name: 'CSS', niveau: t('skills.levels.advanced'), level: 90, icon: <Palette className="w-12 h-12" />, direction : "left" },
    { name: 'JavaScript', niveau: t('skills.levels.advanced'), level: 80, icon: <Braces className="w-12 h-12" />, direction : "down" },
    { name: 'Laravel', niveau: t('skills.levels.advanced'), level: 80, icon: <Server className="w-12 h-12" />, direction : "right" },
    { name: 'React.js', niveau: t('skills.levels.advanced'), level: 80, icon: <Atom className="w-12 h-12" />, direction : "up" },
    { name: 'React Native', niveau: t('skills.levels.medium'), level: 55, icon: <Atom className="w-12 h-12" />, direction : "left" },
    { name: 'TypeScript', niveau: t('skills.levels.medium'), level: 55, icon: <FileCode2 className="w-12 h-12" />, direction : "down" },
    { name: 'Vue.js', niveau: t('skills.levels.advanced'), level: 70, icon: <Boxes className="w-12 h-12" />, direction : "right" },
    { name: 'Java', niveau: t('skills.levels.medium'), level: 55, icon: <Coffee className="w-12 h-12" />, direction : "up" },
    { name: 'MySQL', niveau: t('skills.levels.medium'), level: 55, icon: <Database className="w-12 h-12" />, direction : "left" },
    { name: 'PHP', niveau: t('skills.levels.advanced'), level: 80, icon: <Code2 className="w-12 h-12" />, direction : "down" },
    { name: 'Python', niveau: t('skills.levels.medium'), level: 65, icon: <Code className="w-12 h-12" />, direction : "right" },
  ];

  const sortedSkills = [...skills].sort((a, b) => b.level - a.level);

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
    <section id="skills" className="pt-24 bg-resume-bg dark:bg-resume-bg transition-colors duration-300">
      <div className="container mx-auto px-4">
        <FadeInSection direction="left" delay={0.1}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title text-resume-text">
              {t('skills.title')} <span className="text-accent-yellow">{t('skills.highlight')}</span>
            </h2>
          </motion.div>
        </FadeInSection>

        {/* Grille responsive : 2 colonnes mobile, 6 colonnes desktop */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-6 max-w-6xl mx-auto items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {sortedSkills.map((skill, index) => (
            <FadeInSection key={index} direction={skill.direction} delay={0.2 + index * 0.05}>
              <motion.div
                key={index}
                variants={itemVariants}
                className="card-hover group cursor-pointer relative overflow-hidden bg-resume-bg-card dark:bg-resume-bg-card h-full"
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
              >
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative flex flex-col items-center justify-center p-6 h-full">
                  {/* Icon with gradient color based on skill */}
                  <motion.div
                    className="text-resume-primary mb-3 group-hover:text-accent-yellow transition-colors duration-300"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {skill.icon}
                  </motion.div>

                  {/* Skill name */}
                  <p className="text-resume-text font-semibold text-center text-sm md:text-base">
                    {skill.name}
                  </p>

                  {/* Level indicator */}
                  <div className="w-full mt-3 bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
                    <motion.div
                      className="h-full bg-accent-yellow rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.3 + index * 0.05 }}
                      viewport={{ once: true }}
                    />
                  </div>

                  {/* Level text */}
                  <p className="text-resume-text-secondary text-xs mt-2 font-medium">
                    {skill.niveau}
                  </p>
                  <p className="text-accent-yellow text-xs font-semibold mt-1">
                    {skill.level}%
                  </p>
                </div>
              </motion.div>
            </FadeInSection>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;