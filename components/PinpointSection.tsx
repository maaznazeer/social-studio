"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface PinpointSectionProps {
  number: number;
  title: string;
  description: string;
  position: "left" | "right";
  className?: string;
}

const PinpointSection = ({
  number,
  title,
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
      <div className={`flex items-start gap-6 lg:gap-8 ${position === "right" ? "justify-end text-right" : "justify-start"}`}>
        {/* Number */}
        <div className={`font-satoshi text-[10px] text-text-secondary min-w-[2rem] flex-shrink-0 ${position === "right" ? "order-2" : ""}`}>
          {number}.
        </div>
        
        {/* Content */}
        <div className={`flex-1 ${position === "right" ? "order-1" : ""}`}>
          <h3 className="font-satoshi text-[10px] font-medium text-primary mb-3 lg:mb-4 tracking-wide">
            {title}
          </h3>
          <p className="font-satoshi text-[10px] text-text-secondary leading-relaxed lg:leading-loose">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default PinpointSection;