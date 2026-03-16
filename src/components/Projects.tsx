import React, { useState, useEffect, useCallback } from 'react';
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

const Projects = () => {
  const { t } = useLanguage();
  
  const projects = [
    {
      title: t('projects.items.immo.title'),
      description: t('projects.items.immo.desc'),
      images: [immomada, immomada1, immomada2, immomada3],
      technologies: ["React js", "Bootstrap", "Node.js", "MySQL"],
      demo: "https://agenceimmomadaocea.com/",
    },
    {
      title: t('projects.items.mydetector.title'),
      description: t('projects.items.mydetector.desc'),
      images: [mydetector1, mydetector2, mydetector3, mydetector4],
      technologies: ["Java", "XML", "Android Studio", "Python", "PyTorch", "TensorFlow Lite", "YOLOv11", "MobileNetV3Small"],
      demo: "/assets/Mydetector.mp4",
      isVideo: true,
    },
    {
      title: t('projects.items.ianatra.title'),
      description: t('projects.items.ianatra.desc'),
      images: [ianatra, ianatra1, ianatra2, ianatra3],
      technologies: ["Vue js", "Tailwind CSS", "Firebase"],
      demo: "https://ianatraaifront.vercel.app/",
    },
    {
      title: t('projects.items.vente.title'),
      description: t('projects.items.vente.desc'),
      images: [etiquetteimage, etiquetteimage1, etiquetteimage, etiquetteimage1],
      technologies: ["Vue js", "Tailwind CSS", "Laravel", "MySQL"],
      demo: "https://gestionmagasin.vercel.app/",
    },
    {
      title: t('projects.items.educ.title'),
      description: t('projects.items.educ.desc'),
      images: [educ, educ1, educ2, educ3],
      technologies: ["React js", "Tailwind CSS", "Laravel", "MySQL"],
      demo: "https://educsecondaire.vercel.app/",
    },
    {
      title: t('projects.items.peace.title'),
      description: t('projects.items.peace.desc'),
      images: [peacemobile, peacemobile1, peacemobile2],
      technologies: ["Adobe XD"],
      demo: "https://xd.adobe.com/view/61aa449f-a18c-4245-b3d4-3d58cb40bf5b-34f9/?fullscreen",
    },
    {
      title: t('projects.items.jireh.title'),
      description: t('projects.items.jireh.desc'),
      images: [gestionapp],
      technologies: ["Java FX", "CSS", "MySQL"],
      github: "https://github.com/k-adafi/GestionApp",
    },
    {
      title: t('projects.items.github.title'),
      description: t('projects.items.github.desc'),
      images: [gitimage],
      github: "https://github.com/k-adafi",
    }
  ];

  // Pagination Logic
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const indexOfLastProject = currentPage * itemsPerPage;
  const indexOfFirstProject = indexOfLastProject - itemsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Composant carrousel amélioré pour chaque projet
  const Carousel = ({ images }) => {
    const [current, setCurrent] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Fonction pour passer à la slide suivante
    const nextSlide = useCallback(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, [images.length]);

    // Auto défilement seulement si le carrousel n'est pas survolé
    useEffect(() => {
      if (isHovered) return;
      
      const interval = setInterval(nextSlide, 3000);
      return () => clearInterval(interval);
    }, [isHovered, nextSlide]);

    // Fonction pour aller à une slide spécifique
    const goToSlide = (index) => {
      setCurrent(index);
    };

    return (
      <div 
        className="relative w-full h-56 overflow-hidden rounded-t-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Conteneur des images avec transition fluide */}
        <div 
          className="flex h-56 transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
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
        </div>

        {/* Indicateurs de slide */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === index ? "bg-yellow-500 dark:bg-yellow-400 scale-110" : "bg-gray-300 dark:bg-gray-500 opacity-70"
              } hover:bg-yellow-400 dark:hover:bg-yellow-300 hover:transform hover:scale-125`}
              aria-label={`Aller à l'image ${index + 1}`}
            />
          ))}
        </div>

        {/* Boutons de navigation (flèches) */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => setCurrent((current - 1 + images.length) % images.length)}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 dark:bg-white/50 text-white dark:text-gray-900 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70 dark:hover:bg-white/70 hover:transform hover:scale-110"
              aria-label="Image précédente"
            >
              ‹
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 dark:bg-white/50 text-white dark:text-gray-900 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70 dark:hover:bg-white/70 hover:transform hover:scale-110"
              aria-label="Image suivante"
            >
              ›
            </button>
          </>
        )}
      </div>
    );
  };

  return (
    <section id="portfolio" className="py-20 bg-slate-200 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
          {t('projects.title')} <span className="text-yellow-500 dark:text-yellow-400">{t('projects.highlight')}</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project, index) => (
            <div 
              key={index}
              className="group bg-gray-100 dark:bg-black rounded-lg overflow-hidden shadow-lg transition-all duration-300 flex flex-col hover:shadow-2xl hover:transform hover:scale-105"
            >
              {/* Carrousel d'images animé */}
              <Carousel images={project.images} />

              {/* Contenu */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-yellow-500 dark:group-hover:text-yellow-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                    {project.description}
                  </p>
                  
                  {/* Technologies Chips */}
                  {project.technologies && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 text-xs font-medium text-yellow-600 dark:text-yellow-400 bg-yellow-500/10 dark:bg-yellow-400/10 border border-yellow-500/20 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Boutons toujours visibles */}
                <div className="flex flex-wrap gap-3 mt-auto">
                  {project.github && (
                    <a 
                      href={project.github}
                      className="bg-yellow-500 dark:bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 hover:bg-yellow-400 dark:hover:bg-yellow-300 hover:transform hover:scale-105"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={18} /> {t('projects.viewGithub')}
                    </a>
                  )}
                  {project.demo && project.isVideo && (
                    <Link 
                      to="/video"
                      state={{ videoUrl: project.demo, title: project.title }}
                      className="bg-yellow-500 dark:bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 hover:bg-yellow-400 dark:hover:bg-yellow-300 hover:transform hover:scale-105"
                    >
                      <ExternalLink size={18} /> {t('projects.viewVideo')}
                    </Link>                    
                  )}
                  {project.demo && !project.isVideo && (
                    <a 
                      href={project.demo}
                      className="bg-yellow-500 dark:bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 hover:bg-yellow-400 dark:hover:bg-yellow-300 hover:transform hover:scale-105"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={18} /> {t('projects.viewDemo')}
                    </a>                    
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination UI */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-12 space-x-2 md:space-x-4">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                currentPage === 1 
                  ? "bg-gray-300 dark:bg-gray-800 text-gray-500 cursor-not-allowed" 
                  : "bg-yellow-500 dark:bg-yellow-400 text-black hover:bg-yellow-400 dark:hover:bg-yellow-300 hover:transform hover:scale-105 shadow-md shadow-yellow-500/20"
              }`}
            >
              {t('projects.prev')}
            </button>
            
            <div className="flex space-x-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => paginate(i + 1)}
                  className={`w-10 h-10 rounded-lg font-bold transition-all duration-300 ${
                    currentPage === i + 1
                      ? "bg-yellow-500 dark:bg-yellow-400 text-black transform scale-110 shadow-lg shadow-yellow-500/30"
                      : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-yellow-200 dark:hover:bg-yellow-900/50"
                  }`}
                  aria-label={`${t('projects.goToPage')} ${i + 1}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                currentPage === totalPages 
                  ? "bg-gray-300 dark:bg-gray-800 text-gray-500 cursor-not-allowed" 
                  : "bg-yellow-500 dark:bg-yellow-400 text-black hover:bg-yellow-400 dark:hover:bg-yellow-300 hover:transform hover:scale-105 shadow-md shadow-yellow-500/20"
              }`}
            >
              {t('projects.next')}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;