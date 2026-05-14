import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Eye } from 'lucide-react';
import { useLanguage } from '../context/LanguageCore';
import { Link } from 'react-router-dom';
import FadeInSection from './FadeInSection';

// Imports des certificats
import certHackaton from '../assets/certificat/Attestation_HACKATON_entrepreunariat.png';
import certODC_CV from '../assets/certificat/Attestation_ODC_computer_vision.png';
import certMaIDi from '../assets/certificat/Attestation_MaIDi_open_data.png';
import certClubDH from '../assets/certificat/Certificat_club_droit_de_homme.png';
import certODC_UXUI from '../assets/certificat/Certificat_ODC_UX-UI_Design.png';
import certEnglish from '../assets/certificat/Certificat_english_connect_programm.png';
import certMasterDH from '../assets/certificat/Certificat_master_classe_DH.png';
import certJade from '../assets/certificat/Attestation_reconnaisance_ONG_Jade.png';
import certCoursera1 from '../assets/certificat/Coursera_450644XMZU44.pdf';
import certCoursera2 from '../assets/certificat/Coursera_5TGSML9DF7DN.pdf';

const Certifications = () => {
  const { t } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const certifications = [
    {
        id: 1,
        title: t('certifications.items.coursera1.title'),
        issuer: t('certifications.items.coursera1.issuer'),
        year: t('certifications.items.coursera1.year'),
        file: certCoursera1,
        direction: 'left'
    },
    {
        id: 2,
        title: t('certifications.items.ong.title'),
        issuer: t('certifications.items.ong.issuer'),
        year: t('certifications.items.ong.year'),
        file: certJade,
        direction: 'down'
    },
    {
        id: 3,
        title: t('certifications.items.hackaton.title'),
        issuer: t('certifications.items.hackaton.issuer'),
        year: t('certifications.items.hackaton.year'),
        file: certHackaton,
        direction: 'left'
    },
    {
        id: 4,
        title: t('certifications.items.computerVision.title'),
        issuer: t('certifications.items.computerVision.issuer'),
        year: t('certifications.items.computerVision.year'),
        file: certODC_CV,
        direction: 'up'
    },
    {
        id: 5,
        title: t('certifications.items.english.title'),
        issuer: t('certifications.items.english.issuer'),
        year: t('certifications.items.english.year'),
        file: certEnglish,
        direction: 'up'
    },
    {
        id: 6,
        title: t('certifications.items.openData.title'),
        issuer: t('certifications.items.openData.issuer'),
        year: t('certifications.items.openData.year'),
        file: certMaIDi,
        direction: 'right'
    },
    {
        id: 7,
        title: t('certifications.items.uxui.title'),
        issuer: t('certifications.items.uxui.issuer'),
        year: t('certifications.items.uxui.year'),
        file: certODC_UXUI,
        direction: 'left'
    },
    {
        id: 8,
        title: t('certifications.items.coursera2.title'),
        issuer: t('certifications.items.coursera2.issuer'),
        year: t('certifications.items.coursera2.year'),
        file: certCoursera2,
        direction: 'up'
    },
    {
        id: 9,
        title: t('certifications.items.masterClass.title'),
        issuer: t('certifications.items.masterClass.issuer'),
        year: t('certifications.items.masterClass.year'),
        file: certMasterDH,
        direction: 'right'
    },
    {
        id: 10,
        title: t('certifications.items.humanRights.title'),
        issuer: t('certifications.items.humanRights.issuer'),
        year: t('certifications.items.humanRights.year'),
        file: certClubDH,
        direction: 'down'
    }
  ];

  const indexOfLastCert = currentPage * itemsPerPage;
  const indexOfFirstCert = indexOfLastCert - itemsPerPage;
  const currentCertifications = certifications.slice(indexOfFirstCert, indexOfLastCert);
  const totalPages = Math.ceil(certifications.length / itemsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

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
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const handleDownloadCert = (file: string, certTitle: string) => {
    const link = document.createElement('a');
    link.href = file;
    link.download = certTitle || 'certificate.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="certifications" className="pt-24 bg-resume-bg dark:bg-resume-bg transition-colors duration-300">
      <div className="container mx-auto px-4">
        <FadeInSection direction="up" delay={0.1}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title text-resume-text">
              {t('certifications.title')} <span className="text-accent-yellow">{t('certifications.highlight')}</span>
            </h2>
          </motion.div>
        </FadeInSection>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {currentCertifications.map((cert, index) => (
            <FadeInSection key={cert.id} direction={cert.direction} delay={0.2 + index * 0.05}>
              <motion.div
                variants={itemVariants}
                className="card-hover group flex flex-col overflow-hidden h-full"
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="p-6 bg-resume-bg-card dark:bg-resume-bg-card flex flex-col h-full relative overflow-hidden">
                  {/* Left accent bar */}
                  <div className="absolute left-0 top-0 h-full w-1 bg-accent-yellow group-hover:w-1.5 transition-all duration-300" />

                  {/* Icon */}
                  <motion.div
                    className="mb-4"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="w-12 h-12 bg-accent-yellow/20 rounded-lg flex items-center justify-center">
                      <FileText size={24} className="text-accent-yellow" />
                    </div>
                  </motion.div>

                  {/* Year */}
                  <motion.p
                    className="text-accent-yellow font-bold text-sm tracking-wide mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {cert.year}
                  </motion.p>

                  {/* Title */}
                  <h3 className="text-resume-text font-bold text-lg mb-2 group-hover:text-accent-yellow transition-colors duration-300 flex-grow">
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <p className="text-resume-text-secondary text-sm mb-6">
                    {cert.issuer}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <motion.div
                      className="flex-1"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        to="/certificat"
                        state={{ certUrl: cert.file, title: cert.title }}
                        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-accent-yellow/20 hover:bg-accent-yellow/30 text-accent-yellow rounded-lg transition-all duration-300 text-sm font-medium group/btn"
                      >
                        <Eye size={16} className="group-hover/btn:scale-110 transition-transform" />
                        {t('certifications.view')}
                      </Link>
                    </motion.div>

                    <motion.button
                      onClick={() => handleDownloadCert(cert.file, cert.title)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-accent-yellow/20 hover:bg-accent-yellow/30 text-accent-yellow rounded-lg transition-all duration-300 text-sm font-medium group/btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Download size={16} className="group-hover/btn:scale-110 transition-transform" />
                      {t('certifications.download')}
                    </motion.button>
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

export default Certifications;
