'use client';

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import DynamicClock from "./DynamicClock";
import PinpointSection from "./PinpointSection";
import DiagonalLine from "./DiagonalLine";
import SocialFooter from "./SocialFooter";
import { ThemeToggle } from "../theme-toggle";

const LandingPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [screenSize, setScreenSize] = useState<'mobile' | 'lg' | 'xl' | '2xl'>('mobile');

  const sections = [
    {

      description: "1. **WELCOME.** Thanks for being here.",
      position: "left" as const
    },
    {

      description: "2. **SOCIAL-LIGHT. STUDIO.** is a multidimensional power-through-home giving new life to ancient structures. Rooted in Black and Indigenous visions. Convergence of legacy. future. all lost with time *anticipating remembrance*. \n Led by **Sol**(ange) Inoa.",
      position: "right" as const
    }
  ];

  // Scroll animation effect and screen size detection
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 1024) { // lg breakpoint
        setScreenSize('mobile');
      } else if (width < 1280) { // xl breakpoint
        setScreenSize('lg');
      } else if (width < 1536) { // 2xl breakpoint
        setScreenSize('xl');
      } else {
        setScreenSize('2xl');
      }
    };

    // Set initial screen size
    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Clock */}
      <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          // className="fixed top-0 left-0 right-0 z-50  backdrop-blur-sm border-b border-line"
        >
          <div className="container mx-auto px-6 py-4 flex items-center">
          
            {/* <div className="flex-1" /> */}

      
            <div className="flex-1 flex justify-center md:justify-center">
              <DynamicClock />
            </div>

      
            {/* <div className="flex-1 flex justify-end">
              <ThemeToggle />
            </div> */}
          </div>
        </motion.header>


      {/* Main Content */}
      <main 
        className="relative pt-20 z-10 bg-white transition-transform duration-300 ease-out min-h-[100vh] xl:min-h-[100vh] ease-in-out"
        style={{
          transform: `translateY(${-scrollY * (screenSize === 'mobile' ? 13 : screenSize === 'lg' ? 2.5 : screenSize === 'xl' ? 2.5 : 9)}px)`,
        }}
      >
       
        {/* Pinpoint Sections - Diagonal layout with equal vertical spacing */}
        <div className="container mx-auto px-10 md:px-0 lg:px-17 md:px-6 py-10 relative z-100">
          {/* Point 1 - WELCOME */}
          <div className="relative h-[20vh] md:h-[30vh] min-h-[180px] md:min-h-[250px] flex items-start pt-15 md:pt-38 mb-8 md:mb-0">
            <div className="w-full text-left">
              <div className="md:ml-40 mr-auto max-w-md">
                <PinpointSection
                  description={sections[0].description}
                  position={sections[0].position}
                />
              </div>
            </div>
          </div>
          
          {/* Point 2 - SOCIAL-LIGHT. STUDIO. */}
          <div className="relative h-[20vh] md:h-[30vh] min-h-[180px] md:min-h-[250px] flex items-end pb-0 ml-15 md:ml-0 md:pb-8 mb-8 md:mb-0">
            <div className="w-full text-right">
              <div className="ml-10 md:ml-auto mr-0 max-w-md">
                <PinpointSection
                  description={sections[1].description}
                  position={sections[1].position}
                />
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center pt-30"
          >
            <h2 className="font-bold text-[10px] text-text-secondary tracking-wide">
             SOCIAL-LIGHT. STUDIO.
            </h2>
          </motion.div>
          {/* Diagonal line connecting sections 1 and 2 */}
          <DiagonalLine 
            className="absolute left-1/2 h-px"
            fullWidth
            angle={135}
            width="1000px"
            style={{
              top: '45%', 

              transform: 'translateX(-55%) translateY(-45%) rotate(145deg)'
            }}
          />
        </div>
        <div className="w-[80%] h-px bg-black mx-auto"></div>
      </main>

      {/* Footer */}
      <SocialFooter />
    </div>
  );
};

export default LandingPage;