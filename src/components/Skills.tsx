import React from 'react';
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

const Skills = () => {
  const { t } = useLanguage();
  const skills = [
    { name: 'HTML', niveau: t('skills.levels.advanced'), level: 90, icon: <FileCode className="text-orange-500 w-12 h-12" /> },
    { name: 'CSS', niveau: t('skills.levels.advanced'), level: 90, icon: <Palette className="text-blue-500 w-12 h-12" /> },
    { name: 'JavaScript', niveau: t('skills.levels.advanced'), level: 80, icon: <Braces className="text-yellow-400 w-12 h-12" /> },
    { name: 'Laravel', niveau: t('skills.levels.advanced'), level: 80, icon: <Server className="text-red-500 w-12 h-12" /> },
    { name: 'React.js', niveau: t('skills.levels.advanced'), level: 80, icon: <Atom className="text-cyan-400 w-12 h-12" /> },
    { name: 'React Native', niveau: t('skills.levels.medium'), level: 55, icon: <Atom className="text-cyan-400 w-12 h-12" /> },
    { name: 'TypeScript', niveau: t('skills.levels.medium'), level: 55, icon: <FileCode2 className="text-blue-700 w-12 h-12" /> },
    { name: 'Vue.js', niveau: t('skills.levels.advanced'), level: 70, icon: <Boxes className="text-green-500 w-12 h-12" /> },
    { name: 'Java', niveau: t('skills.levels.medium'), level: 55, icon: <Coffee className="text-red-600 w-12 h-12" /> },
    { name: 'MySQL', niveau: t('skills.levels.medium'), level: 55, icon: <Database className="text-blue-600 w-12 h-12" /> },
    { name: 'PHP', niveau: t('skills.levels.advanced'), level: 80, icon: <Code2 className="text-indigo-500 w-12 h-12" /> },
    { name: 'Python', niveau: t('skills.levels.medium'), level: 65, icon: <Code className="text-yellow-500 w-12 h-12" /> },
  ];

  // Trier par ordre décroissant de niveau
  const sortedSkills = [...skills].sort((a, b) => b.level - a.level);

  return (
    <section id="skills" className="py-20 bg-slate-100 dark:bg-black transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
          {t('skills.title')} <span className="text-yellow-500 dark:text-yellow-400">{t('skills.highlight')}</span>
        </h2>

        {/* Grille responsive : 2 colonnes mobile, 6 colonnes desktop */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {sortedSkills.map((skill, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition transition hover:transform hover:scale-105"
            >
              {skill.icon}
              <p className="text-gray-900 dark:text-white mt-4 font-semibold">{skill.name}</p>
              <p className="text-yellow-500 dark:text-yellow-400 text-sm">{skill.niveau}</p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{skill.level}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;