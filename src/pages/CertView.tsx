import { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  FileText, 
  ZoomIn, 
  ZoomOut, 
  RotateCw, 
  RotateCcw, 
  ArrowUp, 
  ArrowDown, 
  ArrowLeft as ArrowLeftIcon, 
  ArrowRight, 
  RefreshCcw,
  Download,
  AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageCore';

const CertView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  // Extract state passed via React Router's Link
  const { certUrl, title } = location.state || { certUrl: '', title: 'Certificat' };

  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // If accessed directly without state, we should probably redirect back home
  if (!certUrl) {
    navigate('/');
    return null;
  }

  const isPDF = certUrl.toLowerCase().includes('.pdf');

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.2, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.2, 0.5));
  
  const rotateTo = (deg: number) => setRotation(deg);
  const rotateLeft = () => setRotation(prev => prev - 90);
  const rotateRight = () => setRotation(prev => prev + 90);

  const resetTransform = () => {
    setZoom(1);
    setRotation(0);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = certUrl;
    link.download = title || 'certificate';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden flex flex-col relative">
      {/* Luxury Background Glow - Responsive size */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[400px] md:w-[600px] lg:w-[800px] h-[200px] sm:h-[400px] md:h-[600px] lg:h-[800px] bg-yellow-500/10 rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px] lg:blur-[120px] pointer-events-none" />

      {/* Header Navbar */}
      <header className="absolute top-0 left-0 w-full px-4 py-4 md:px-8 md:py-6 z-50 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
        <Link 
          to="/" 
          className="flex items-center gap-2 px-3 py-2 md:px-5 md:py-2.5 rounded-full bg-white/10 hover:bg-yellow-500/20 text-white transition-all duration-300 backdrop-blur-md group border border-white/5"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium tracking-wide text-xs md:text-sm">Portfolio</span>
        </Link>

        <div className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-2.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 backdrop-blur-md max-w-[50vw] md:max-w-none overflow-hidden">
          <FileText size={18} className="text-yellow-400 shrink-0" />
          <span className="font-semibold text-yellow-500 tracking-wider uppercase text-xs md:text-sm truncate">{title}</span>
        </div>
      </header>

      {/* Control Bar */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-wrap items-center justify-center gap-2 md:gap-4 bg-black/60 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl p-2 md:p-3 w-[95vw] sm:w-auto"
      >
        {/* Zoom Controls */}
        <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/5">
          <button 
            onClick={handleZoomOut} 
            className="p-2 hover:bg-yellow-500/20 rounded-lg transition-colors text-gray-300 hover:text-yellow-500"
            title="Zoom Out"
          >
            <ZoomOut size={16} />
          </button>
          <span className="text-[10px] md:text-xs font-mono w-10 md:w-14 text-center text-yellow-500 font-bold">
            {Math.round(zoom * 100)}%
          </span>
          <button 
            onClick={handleZoomIn} 
            className="p-2 hover:bg-yellow-500/20 rounded-lg transition-colors text-gray-300 hover:text-yellow-500"
            title="Zoom In"
          >
            <ZoomIn size={16} />
          </button>
        </div>

        {/* Rotation Controls - Hidden on very small screens if needed, or compact */}
        <div className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/5">
          <button onClick={() => rotateTo(270)} className="p-2 hover:bg-yellow-500/20 rounded-lg transition-colors text-gray-300 hover:text-yellow-500" title="Rotate Left">
            <ArrowLeftIcon size={16} />
          </button>
          <button onClick={() => rotateTo(0)} className="p-2 hover:bg-yellow-500/20 rounded-lg transition-colors text-gray-300 hover:text-yellow-500" title="Rotate Up">
            <ArrowUp size={16} />
          </button>
          <button onClick={() => rotateTo(180)} className="p-2 hover:bg-yellow-500/20 rounded-lg transition-colors text-gray-300 hover:text-yellow-500" title="Rotate Down">
            <ArrowDown size={16} />
          </button>
          <button onClick={() => rotateTo(90)} className="p-2 hover:bg-yellow-500/20 rounded-lg transition-colors text-gray-300 hover:text-yellow-500" title="Rotate Right">
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1">
          <button 
            onClick={rotateRight} 
            className="p-2 hover:bg-yellow-500/20 rounded-lg transition-colors text-gray-300 hover:text-yellow-500"
            title="Rotate +90°"
          >
            <RotateCw size={16} />
          </button>
          <button 
            onClick={handleDownload}
            className="p-2 bg-yellow-500/20 hover:bg-yellow-500/30 rounded-lg transition-colors text-yellow-500"
            title="Download"
          >
            <Download size={16} />
          </button>
          <div className="w-px h-6 bg-white/10 mx-1" />
          <button 
            onClick={resetTransform} 
            className="p-2 hover:bg-red-500/20 rounded-lg transition-colors text-red-400 hover:text-red-300"
            title="Reset"
          >
            <RefreshCcw size={16} />
          </button>
        </div>
      </motion.div>

      {/* Certificate Display Area */}
      <main className="flex-grow flex items-center justify-center p-2 md:p-12 z-10 mt-16 md:mt-24 mb-24 md:mb-12 overflow-hidden">
        <div className="relative w-full max-w-6xl aspect-[297/210] max-h-[70vh] md:max-h-[80vh] flex items-center justify-center overflow-auto">
          <AnimatePresence mode="wait">
            <motion.div 
              key={certUrl}
              className="origin-center w-full h-full flex items-center justify-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: zoom, rotate: rotation, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            >
              {isPDF ? (
                isMobile ? (
                  <div className="w-full h-full bg-gray-900/40 backdrop-blur-xl rounded-2xl border border-white/10 flex flex-col items-center justify-center p-6 sm:p-10 text-center gap-4 sm:gap-8 shadow-2xl">
                    <div className="w-16 h-16 sm:w-24 sm:h-24 bg-yellow-500/10 rounded-full flex items-center justify-center border border-yellow-500/20 animate-pulse-soft">
                      <AlertCircle size={32} className="sm:w-12 sm:h-12 text-yellow-500" />
                    </div>
                    <div className="space-y-2 sm:space-y-4">
                      <h3 className="text-lg sm:text-2xl font-bold text-white px-4 leading-tight">{t('certifications.error')}</h3>
                      <p className="text-gray-400 text-xs sm:text-sm max-w-xs mx-auto px-4">
                        Certains navigateurs mobiles ne peuvent pas prévisualiser les PDF directement. Téléchargez-le pour le consulter en toute sécurité.
                      </p>
                    </div>
                    <button 
                      onClick={handleDownload}
                      className="flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-yellow-500 text-black font-black rounded-xl hover:bg-yellow-400 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-yellow-500/20 uppercase tracking-wider text-xs sm:text-sm"
                    >
                      <Download size={18} className="sm:w-5 sm:h-5" />
                      {t('certifications.downloadAction')}
                    </button>
                  </div>
                ) : (
                  <iframe 
                    src={`${certUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                    className="w-full h-full rounded-lg shadow-2xl bg-white border-none"
                    title={title}
                  />
                )
              ) : (
                <img 
                  src={certUrl} 
                  alt={title} 
                  className="max-w-full max-h-full object-contain shadow-2xl rounded-lg"
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Footer Meta info */}
      <footer className="hidden md:block absolute bottom-6 w-full text-center z-10 pointer-events-none">
        <p className="text-gray-500 text-[10px] tracking-[0.3em] uppercase opacity-50">
          {title} • {rotation}° • {Math.round(zoom * 100)}%
        </p>
      </footer>
    </div>
  );
};

export default CertView;
