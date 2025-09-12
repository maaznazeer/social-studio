'use client';

import { motion } from "framer-motion";
import DynamicClock from "./DynamicClock";
import PinpointSection from "./PinpointSection";
import DiagonalLine from "./DiagonalLine";
import SocialFooter from "./SocialFooter";
import { ThemeToggle } from "../theme-toggle";

const LandingPage = () => {
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
          
            <div className="flex-1" />

      
            <div className="flex-1 flex justify-center md:justify-center justify-start">
              <DynamicClock />
            </div>

      
            <div className="flex-1 flex justify-end">
              <ThemeToggle />
            </div>
          </div>
        </motion.header>


      {/* Main Content */}
      <main className="relative pt-20">
       
        {/* Pinpoint Sections - Diagonal layout with equal vertical spacing */}
        <div className="container mx-auto px-10 md:px-0 lg:px-17 md:px-6 py-10 relative">
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

   
      </main>

      {/* Footer */}
      <SocialFooter />
    </div>
  );
};

export default LandingPage;