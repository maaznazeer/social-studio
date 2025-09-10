'use client';

import { motion } from "framer-motion";
import DynamicClock from "./DynamicClock";
import PinpointSection from "./PinpointSection";
import DiagonalLine from "./DiagonalLine";
import SocialFooter from "./SocialFooter";
import { ThemeToggle } from "./theme-toggle";

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
    },
    {
      number: 3,
      title: "About Sol.",
      description: "I am equal parts thinker, feeler, doer. Made of still waters and fiery drumming. I dance to shape the air. I move mountains when in mission.",
      position: "left" as const
    },
    {
      number: 4,
      title: "take note: please be advised,",
      description: "at the moment, I am not actively engaging new ideas. Though if interested in external thoughts, feedback, collaboration or adventure by a listening heart and mind, send a brief intro. If it inspires action from me, you will hear from me. Anything offered will be few of cost. For an open flow of ideas, I encourage mutual folks. As such, please keep it light.",
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
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-line"
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <DynamicClock />
          <div className="flex items-center gap-4">
            <div className="font-mono text-xs text-text-muted">
              more me: sol@social-light.studio
            </div>
            <ThemeToggle />
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="relative pt-20">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="min-h-[50vh] flex items-center justify-center relative"
        >
          {/* Main Logo */}
          <motion.div
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
            <motion.h1 
              className="font-mono text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider relative"
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
            </motion.h1>

            {/* STUDIO with elegant reveal */}
            <motion.h2 
              className="font-mono text-2xl md:text-3xl lg:text-4xl font-medium text-text-secondary tracking-widest mt-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              STUDIO.
            </motion.h2>
            
            {/* Elegant animated underline */}
            <motion.div
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
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
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
          </motion.div>

          {/* Diagonal lines for visual interest */}
          <DiagonalLine 
            className="left-1/4 top-20"
            height="200px"
            angle={35}
          />
          <DiagonalLine 
            className="right-1/3 top-40"
            height="150px"
            angle={-25}
          />
        </motion.section>

        {/* Pinpoint Sections - Diagonal layout with equal vertical spacing */}
        <div className="container mx-auto px-6 py-20">
          {sections.map((section, index) => (
            <div 
              key={section.number} 
              className="relative h-[25vh] min-h-[300px] flex items-center"
            >
              {/* Add subtle diagonal lines between sections */}
              {index < sections.length - 1 && (
                <DiagonalLine 
                  className={`${section.position === "left" ? "right-1/4" : "left-1/4"} bottom-[-4rem]`}
                  height="120px"
                  angle={section.position === "left" ? 25 : -25}
                />
              )}
              
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
        </div>

        {/* Studio Info Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="py-20 border-t border-line mt-20"
        >
          <div className="container mx-auto px-6 text-center">
            <p className="font-mono text-sm text-text-muted">
              A multidimensional power-through-home giving new life to ancient structures
            </p>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <SocialFooter />
    </div>
  );
};

export default LandingPage;