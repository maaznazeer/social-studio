"use client";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { toZonedTime } from "date-fns-tz";

interface DynamicClockProps {
  city?: string;
  timezone?: string;
  className?: string;
}

const DynamicClock = ({ 
  city = "NEW YORK CITY", 
  timezone = "America/New_York",
  className = ""
}: DynamicClockProps) => {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const zonedTime = toZonedTime(now, timezone);
        const formattedTime = format(zonedTime, "HH:mm");
        setCurrentTime(formattedTime);
      } catch (error) {
        // Fallback to local time if timezone fails
        const formattedTime = format(new Date(), "HH:mm");
        setCurrentTime(formattedTime);
      }
    };

    // Update immediately
    updateTime();
    
    // Update every minute
    const interval = setInterval(updateTime, 60000);
    
    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div className={`font-satoshi text-[10px] tracking-wider whitespace-nowrap ${className}`}>
      <span className="text-primary font-medium">{city}</span>
      <span className="mx-2 text-text-muted">·</span>
      <span className="text-text-secondary">{currentTime}</span>
    </div>
  );
};

export default DynamicClock;