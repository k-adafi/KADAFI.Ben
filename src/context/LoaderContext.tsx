import React, { useState, useEffect, ReactNode } from 'react';

import { LoaderContext } from './LoaderCore.ts';

interface LoaderProviderProps {
  children: ReactNode;
}

export const LoaderProvider: React.FC<LoaderProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingComplete, setLoadingComplete] = useState<boolean>(true);

  const startLoading = () => {
    setLoading(true);
    setLoadingComplete(false);
  };

  const stopLoading = () => {
    // Add a slight delay so the user can enjoy the loading experience gracefully
    setTimeout(() => {
      setLoading(false);
      setTimeout(() => setLoadingComplete(true), 700); // Matches the CSS transition duration
    }, 500);
  };

  // Automatically start loader on initial paint
  useEffect(() => {
    startLoading();
    // Simulate initial loading time
    const timer = setTimeout(() => {
      stopLoading();
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Intercept anchor clicks and form submissions
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href]:not([download]):not([target="_blank"])') as HTMLAnchorElement;
      const button = target.closest('button[type="submit"]');

      if (anchor) {
        // Only trigger if it's an internal link
        const currentUrl = new URL(window.location.href);
        const targetUrl = new URL(anchor.href, window.location.href);

        // Don't trigger for hash links (#) on the same page unless we want a smooth transition
        if (targetUrl.origin === currentUrl.origin && targetUrl.pathname === currentUrl.pathname && targetUrl.hash) {
           // Skip loader for simple anchor scrolls
           return;
        }
        
        startLoading();
        // Since React Router might handle the navigation quickly, we stop it after a short delay
        setTimeout(() => stopLoading(), 800);
      } else if (button) {
        startLoading();
        setTimeout(() => stopLoading(), 800);
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, []);

  return (
    <LoaderContext.Provider value={{ loading, startLoading, stopLoading }}>
      {children}
      {!loadingComplete && <LuxuryLoader isVisible={loading} />}
    </LoaderContext.Provider>
  );
};

// Extracted Loader Component to keep the provider clean
const LuxuryLoader: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-[9999] transition-all duration-700 pointer-events-none 
        ${isVisible ? 'bg-white/80 dark:bg-black/90 backdrop-blur-md opacity-100' : 'bg-transparent backdrop-blur-none opacity-0'}`}
    >
      <div className="flex flex-col items-center">
        {/* Animated Initial/Logo Container */}
        <div className="relative flex items-center mb-8">
          <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg tracking-wider">
            K
          </div>
          
          <div className="relative mx-4">
            {/* Pulsing/Shining Central Element */}
            <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full relative overflow-hidden bg-gradient-to-br from-yellow-500/20 to-yellow-900/40 backdrop-blur-sm border border-yellow-500/30">
              
              {/* Central Glowing Orb */}
              <div className="w-8 h-8 md:w-10 md:h-10 bg-yellow-400 rounded-full animate-pulse shadow-[0_0_30px_rgba(234,179,8,0.8)]"></div>
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200/40 to-transparent transform -skew-x-12 -translate-x-full animate-shimmer"></div>
              
              {/* Floating Particles */}
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400/70 rounded-full animate-float delay-100"></div>
              <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-yellow-500/60 rounded-full animate-float delay-300"></div>
              <div className="absolute -top-4 left-4 w-2 h-2 bg-yellow-300/50 rounded-full animate-float delay-500"></div>
            </div>
            
            {/* Elegant Waves/Rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-28 h-28 md:w-32 md:h-32 border border-yellow-500/30 rounded-full animate-wave"></div>
              <div className="absolute w-36 h-36 md:w-40 md:h-40 border border-yellow-600/20 rounded-full animate-wave" style={{ animationDelay: '700ms' }}></div>
            </div>
          </div>
          
          <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent drop-shadow-lg tracking-wider">
            B
          </div>
        </div>

        {/* Text Container */}
        <div className="mt-4 text-center">
          <h3 className="text-xl font-bold tracking-widest text-gray-800 dark:text-gray-200 uppercase mb-3">
            Kadafi Ben
          </h3>
        </div>

        {/* Elegant Progress Bar */}
        <div className="mt-8 w-64 md:w-80 h-[8px] bg-gray-300 dark:bg-gray-800 rounded-full overflow-hidden relative">
          <div 
            className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600" 
            style={{ 
              width: isVisible ? '100%' : '0%', 
              transition: 'width 2s ease-in-out',
              animation: isVisible ? 'shimmer 2s infinite linear' : 'none'
            }}
          ></div>
        </div>

        {/* Background Ambient Particles (Optional for extreme luxury) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
           {/* Generating a few floating glowing orbs */}
          {[...Array(6)].map((_, i) => (
             <div 
               key={i}
               className="absolute rounded-full bg-yellow-500/10 dark:bg-yellow-400/10 blur-xl animate-float-slow"
               style={{
                 width: `${Math.random() * 100 + 50}px`,
                 height: `${Math.random() * 100 + 50}px`,
                 top: `${Math.random() * 100}%`,
                 left: `${Math.random() * 100}%`,
                 animationDelay: `${Math.random() * 5}s`
               }}
             />
          ))}
        </div>
      </div>
    </div>
  );
};
