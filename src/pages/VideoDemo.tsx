import { useLocation, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, PlayCircle } from 'lucide-react';

const VideoDemo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // Extract state passed via React Router's Link
  const { videoUrl, title } = location.state || { videoUrl: '', title: 'Démo Projet' };

  // If accessed directly without state, we should probably redirect back home
  if (!videoUrl) {
    navigate('/');
    return null;
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden flex flex-col relative">
      {/* Luxury Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Header Navbar for the Video Page */}
      <header className="absolute top-0 left-0 w-full p-6 z-50 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
        <Link 
          to="/" 
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-yellow-500/20 text-white transition-all duration-300 backdrop-blur-md group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium tracking-wide">Retour au Portfolio</span>
        </Link>

        <div className="hidden md:flex items-center gap-2 px-6 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 backdrop-blur-md">
          <PlayCircle size={18} className="text-yellow-400 animate-pulse" />
          <span className="font-semibold text-yellow-500 tracking-wider uppercase text-sm">{title}</span>
        </div>
      </header>

      {/* Video Container - Centered */}
      <main className="flex-grow flex items-center justify-center p-4 md:p-12 z-10 mt-16 md:mt-0">
        <div className="relative w-full max-w-6xl aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-gray-800 ring-4 ring-yellow-500/10">
          <video 
            src={videoUrl} 
            controls 
            autoPlay
            muted
            playsInline
            ref={(el) => { if(el) { el.volume = 0; el.muted = true; } }}
            className="w-full h-full object-contain"
            controlsList="nodownload"
          >
            Votre navigateur ne supporte pas la balise vidéo.
          </video>
        </div>
      </main>

      {/* Simple Footer overlay */}
      <footer className="absolute bottom-6 w-full text-center z-10">
        <p className="text-gray-500 text-sm tracking-widest uppercase">My Detector • Démonstration</p>
      </footer>
    </div>
  );
};

export default VideoDemo;
