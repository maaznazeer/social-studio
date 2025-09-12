"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface PinpointSectionProps {
  description: string;
  position: "left" | "right";
  className?: string;
}

const PinpointSection = ({
  description,
  position,
  className = ""
}: PinpointSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "-50px 0px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const slideVariant = {
    hidden: { 
      opacity: 0, 
      x: position === "left" ? -50 : 50,
      y: 20
    },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={slideVariant}
      className={`relative ${className}`}
    >
      <div className={`flex items-start gap-6 lg:gap-8 ${position === "right" ? "justify-start text-left" : "justify-start"} mb-8 md:mb-0`}>
        {/* Number */}
        {/* <div className={`font-satoshi text-[10px] text-text-secondary min-w-[2rem] flex-shrink-0`}>
          {number}.
        </div> */}
        
        {/* Content */}
        <div className={`flex-1 max-w-[280px] md:max-w-none`}>
          <p className="font-satoshi text-[10px] text-text-secondary leading-relaxed lg:leading-loose break-words hyphens-auto">
            {description.split('**').map((part, index) => 
              index % 2 === 1 ? (
                <strong key={index} className="font-bold">{part}</strong>
              ) : (
                part.split('\n').map((line, lineIndex) => (
                  <span key={lineIndex}>
                    {line.split('*').map((italicPart, italicIndex) => 
                      italicIndex % 2 === 1 ? (
                        <em key={italicIndex} className="italic">{italicPart}</em>
                      ) : (
                        italicPart
                      )
                    )}
                    {lineIndex < part.split('\n').length - 1 && <br />}
                  </span>
                ))
              )
            )}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default PinpointSection;