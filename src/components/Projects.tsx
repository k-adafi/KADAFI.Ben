import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import gestionapp from '../assets/projet9.png';
import peacemobile from '../assets/projet15.png';
import peacemobile1 from '../assets/peace.png';
import peacemobile2 from '../assets/peace1.png';
import immomada from '../assets/immo.png';
import immomada1 from '../assets/immo1.png';
import immomada2 from '../assets/immo2.png';
import immomada3 from '../assets/immo3.png';
import educ from '../assets/educ.png';
import educ1 from '../assets/educ1.png';
import educ2 from '../assets/educ2.png';
import educ3 from '../assets/educ3.png';
import etiquetteimage from '../assets/projet10.png';
import etiquetteimage1 from '../assets/projet11.png';
import gitimage from '../assets/projet8.png';
import ianatra from '../assets/ianatra.png';
import ianatra1 from '../assets/ianatra1.png';
import ianatra2 from '../assets/ianatra2.png';
import ianatra3 from '../assets/ianatra3.png';
import mydetector1 from '../assets/my_detector1.jpg';
import mydetector2 from '../assets/my_detector2.jpg';
import mydetector3 from '../assets/my_detector3.jpg';
import mydetector4 from '../assets/my_detector4.jpg';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageCore';
import FadeInSection from './FadeInSection';

const Projects = () => {
  const { t } = useLanguage();
  
  const projects = [
    {
      title: t('projects.items.immo.title'),
      description: t('projects.items.immo.desc'),
      images: [immomada, immomada1, immomada2, immomada3],
      technologies: ["React js", "Bootstrap", "Node.js", "MySQL"],
      demo: "https://agenceimmomadaocea.com/",
      direction : "left"
    },
    {
      title: t('projects.items.mydetector.title'),
      description: t('projects.items.mydetector.desc'),
      images: [mydetector1, mydetector2, mydetector3, mydetector4],
      technologies: ["Java", "XML", "Android Studio", "Python", "PyTorch", "TensorFlow Lite", "YOLOv11", "MobileNetV3Small"],
      demo: "/assets/Mydetector.mp4",
      isVideo: true,
      direction : "up"
    },
    {
      title: t('projects.items.ianatra.title'),
      description: t('projects.items.ianatra.desc'),
      images: [ianatra, ianatra1, ianatra2, ianatra3],
      technologies: ["Vue js", "Tailwind CSS", "Firebase"],
      demo: "https://ianatraaifront.vercel.app/",
      direction : "right"
    },
    {
      title: t('projects.items.vente.title'),
      description: t('projects.items.vente.desc'),
      images: [etiquetteimage, etiquetteimage1, etiquetteimage, etiquetteimage1],
      technologies: ["Vue js", "Tailwind CSS", "Laravel", "MySQL"],
      demo: "https://gestionmagasin.vercel.app/",
      direction : "down"
    },
    {
      title: t('projects.items.educ.title'),
      description: t('projects.items.educ.desc'),
      images: [educ, educ1, educ2, educ3],
      technologies: ["React js", "Tailwind CSS", "Laravel", "MySQL"],
      demo: "https://educsecondaire.vercel.app/",
      direction : "left"
    },
    {
      title: t('projects.items.peace.title'),
      description: t('projects.items.peace.desc'),
      images: [peacemobile, peacemobile1, peacemobile2],
      technologies: ["Adobe XD"],
      demo: "https://xd.adobe.com/view/61aa449f-a18c-4245-b3d4-3d58cb40bf5b-34f9/?fullscreen",
      direction : "up"
    },
    {
      title: t('projects.items.jireh.title'),
      description: t('projects.items.jireh.desc'),
      images: [gestionapp],
      technologies: ["Java FX", "CSS", "MySQL"],
      github: "https://github.com/k-adafi/GestionApp",
      direction : "right"
    },
    {
      title: t('projects.items.github.title'),
      description: t('projects.items.github.desc'),
      images: [gitimage],
      github: "https://github.com/k-adafi",
      direction : "down"
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const indexOfLastProject = currentPage * itemsPerPage;
  const indexOfFirstProject = indexOfLastProject - itemsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Composant carrousel amélioré avec animations Framer Motion
  const Carousel = ({ images }: { images: string[] }) => {
    const [current, setCurrent] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const nextSlide = useCallback(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, [images.length]);

    useEffect(() => {
      if (isHovered) return;
      const interval = setInterval(nextSlide, 3000);
      return () => clearInterval(interval);
    }, [isHovered, nextSlide]);

    const goToSlide = (index: number) => {
      setCurrent(index);
    };

    return (
      <div 
        className="relative w-full h-56 overflow-hidden rounded-t-lg bg-gray-200 dark:bg-gray-800"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div 
          className="flex h-56"
          animate={{ x: `-${current * 100}%` }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          {images.map((image, index) => (
            <div key={index} className="min-w-full h-full">
              <img
                src={image}
                alt={`slide-${index}`}
                className="w-full h-56 object-cover"
              />
            </div>
          ))}
        </motion.div>

        {/* Indicateurs de slide */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                current === index ? "bg-accent-yellow w-6" : "bg-gray-300 dark:bg-gray-600 opacity-70"
              }`}
              whileHover={{ scale: 1.3 }}
              aria-label={`Aller à l'image ${index + 1}`}
            />
          ))}
        </div>

        {/* Boutons de navigation */}
        {images.length > 1 && (
          <>
            <motion.button
              onClick={() => setCurrent((current - 1 + images.length) % images.length)}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white dark:text-white p-2 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Image précédente"
            >
              ‹
            </motion.button>
            <motion.button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white dark:text-white p-2 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Image suivante"
            >
              ›
            </motion.button>
          </>
        )}
      </div>
    );
  };

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
    <section id="portfolio" className="pt-24 bg-resume-bg dark:bg-resume-bg transition-colors duration-300">
      <div className="container mx-auto px-4">
        <FadeInSection direction="up" delay={0.1}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title text-resume-text">
              {t('projects.title')} <span className="text-accent-yellow">{t('projects.highlight')}</span>
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
          {currentProjects.map((project, index) => (
            <FadeInSection key={index} direction={project.direction} delay={0.2 + index * 0.05}>
              <motion.div 
                key={index}
                variants={itemVariants}
                className="card-hover group flex flex-col overflow-hidden h-full"
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
              >
                {/* Carrousel d'images */}
                <Carousel images={project.images} />

                {/* Contenu */}
                <div className="p-6 flex flex-col justify-between flex-grow bg-resume-bg-card dark:bg-resume-bg-card">
                  <div>
                    {/* Titre */}
                    <h3 className="text-lg font-bold text-resume-text mb-2 group-hover:text-accent-yellow transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-resume-text-secondary text-sm mb-4">
                      {project.description}
                    </p>
                    
                    {/* Technologies Badges */}
                    {project.technologies && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, i) => (
                          <motion.span 
                            key={i}
                            className="px-3 py-1 text-xs font-semibold text-accent-yellow bg-accent-yellow/10 border border-accent-yellow/30 rounded-full"
                            whileHover={{ scale: 1.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Boutons d'action */}
                  <div className="flex flex-wrap gap-3 mt-auto">
                    {project.github && (
                      <motion.a 
                        href={project.github}
                        className="btn-primary text-sm flex items-center gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={16} /> {t('projects.viewGithub')}
                      </motion.a>
                    )}
                    {project.demo && project.isVideo && (
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link 
                          to="/video"
                          state={{ videoUrl: project.demo, title: project.title }}
                          className="btn-primary text-sm flex items-center gap-2"
                        >
                          <ExternalLink size={16} /> {t('projects.viewVideo')}
                        </Link>                    
                      </motion.div>
                    )}
                    {project.demo && !project.isVideo && (
                      <motion.a 
                        href={project.demo}
                        className="btn-primary text-sm flex items-center gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={16} /> {t('projects.viewDemo')}
                      </motion.a>                    
                    )}
                  </div>
                </div>
              </motion.div>
            </FadeInSection>
          ))}
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div 
            className="flex justify-center items-center mt-12 space-x-2 md:space-x-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                currentPage === 1 
                  ? "bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed" 
                  : "btn-primary"
              }`}
              whileHover={currentPage !== 1 ? { scale: 1.05 } : {}}
              whileTap={currentPage !== 1 ? { scale: 0.95 } : {}}
            >
              {t('projects.prev')}
            </motion.button>
            
            <div className="flex space-x-2">
              {[...Array(totalPages)].map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => paginate(i + 1)}
                  className={`w-10 h-10 rounded-lg font-bold transition-all duration-300 ${
                    currentPage === i + 1
                      ? "btn-primary shadow-lg"
                      : "bg-gray-200 dark:bg-gray-700 text-resume-text hover:bg-accent-yellow/20"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`${t('projects.goToPage')} ${i + 1}`}
                >
                  {i + 1}
                </motion.button>
              ))}
            </div>

            <motion.button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                currentPage === totalPages 
                  ? "bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed" 
                  : "btn-primary"
              }`}
              whileHover={currentPage !== totalPages ? { scale: 1.05 } : {}}
              whileTap={currentPage !== totalPages ? { scale: 0.95 } : {}}
            >
              {t('projects.next')}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;