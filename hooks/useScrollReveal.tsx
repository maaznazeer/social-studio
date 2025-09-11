'use client';

import { useState, useEffect } from 'react';

export const useScrollReveal = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Calculate total scrollable distance
      const maxScroll = documentHeight - windowHeight;
      
      // Calculate scroll progress (0 to 1)
      const progress = Math.min(1, Math.max(0, scrollTop / maxScroll));
      setScrollProgress(progress);
      
      // Footer becomes visible when user has scrolled 70% of the page
      setIsFooterVisible(progress > 0.7);
    };

    // Initial calculation
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Calculate how much of the footer should be revealed based on scroll
  const getFooterRevealProgress = () => {
    if (!isFooterVisible) return 0;
    
    // Start revealing when footer becomes visible (70% scroll)
    // Full reveal at 100% scroll
    const revealStart = 0.7;
    const revealEnd = 1.0;
    
    if (scrollProgress < revealStart) return 0;
    if (scrollProgress >= revealEnd) return 1;
    
    // Calculate reveal progress between start and end
    const revealProgress = (scrollProgress - revealStart) / (revealEnd - revealStart);
    
    // Apply easing for smoother reveal
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
    return easeOutCubic(revealProgress);
  };

  return {
    scrollProgress,
    isFooterVisible,
    footerRevealProgress: getFooterRevealProgress()
  };
};
