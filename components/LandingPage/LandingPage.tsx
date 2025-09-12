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
      number: 1,
      title: "WELCOME.",
      description: "Thanks for being here.",
      position: "left" as const
    },
    {
      number: 2,
      title: "SOCIAL-LIGHT STUDIO.",
      description: "is a multidimensional power-through-home giving new life to ancient structures. Rooted in black and indigenous visions. Convergence of legacy, future, all lost with time; anticipating reinventence.",
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
        {/* Hero Section */}
        {/* <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="min-h-[50vh] flex items-center justify-center relative"
        > */}
          {/* Main Logo */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.6, 
              ease: [0.16, 1, 0.3, 1] 
            }}
            className="text-center z-10 relative"
          >
            {/* Main text with subtle gradient */}
            {/* <motion.h1 
              className="font-satoshi text-[10px] font-bold tracking-wider relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: 'linear-gradient(135deg, hsl(var(--color-text-primary)), hsl(var(--color-text-secondary)))',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              <motion.span
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: 'linear',
                  delay: 1.5
                }}
              >
                SOCIAL-LIGHT.
              </motion.span>
            </motion.h1> */}

            {/* STUDIO with elegant reveal */}
            {/* <motion.h2 
              className="font-satoshi text-[10px] font-medium text-text-secondary tracking-widest mt-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              STUDIO.
            </motion.h2> */}
            
            {/* Elegant animated underline */}
            {/* <motion.div
              className="relative mx-auto mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.6 }}
            >
              <motion.div
                className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"
                initial={{ width: 0 }}
                animate={{ width: "200px" }}
                transition={{ duration: 1.2, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.div>

            {/* Subtle floating elements */}
            {/* <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[
                { x: -150, y: -50, delay: 2.5 },
                { x: 150, y: -30, delay: 3.0 },
                { x: -100, y: 60, delay: 3.5 },
                { x: 120, y: 40, delay: 4.0 }
              ].map((particle, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-primary rounded-full opacity-20"
                  initial={{ 
                    x: particle.x, 
                    y: particle.y,
                    opacity: 0,
                    scale: 0
                  }}
                  animate={{ 
                    y: [particle.y, particle.y - 20, particle.y],
                    opacity: [0, 0.4, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity, 
                    delay: particle.delay,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          {/* </motion.div> */} 

   
        {/* </motion.section> */} 

        {/* Pinpoint Sections - Diagonal layout with equal vertical spacing */}
        <div className="container mx-auto px-6 py-20 relative">
          {sections.map((section, index) => (
            <div 
              key={section.number} 
              className="relative h-[25vh] min-h-[300px] flex items-center"
            >
              <div className={`w-full ${section.position === "left" ? "text-left" : "text-right"}`}>
                <div className={`${section.position === "left" ? "ml-0 mr-auto" : "ml-auto mr-0"} max-w-md`}>
                  <PinpointSection
                    number={section.number}
                    title={section.title}
                    description={section.description}
                    position={section.position}
                  />
                </div>
              </div>
            </div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center pt-30"
          >
            <h2 className="font-bold text-lg text-text-secondary tracking-wide">
             SOCIAL-LIGHT STUDIO.
            </h2>
          </motion.div>
          {/* Diagonal line connecting sections 1 and 2 */}
          <DiagonalLine 
            className="absolute left-1/2 h-px"
            fullWidth
            angle={135}
            width="900px"
            style={{
              top: 'calc(25vh + 150px)', 
              transform: 'translateX(-50%) rotate(135deg)'
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