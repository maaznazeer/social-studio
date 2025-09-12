"use client";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { toZonedTime } from "date-fns-tz";

interface DynamicClockProps {
  city?: string;
  timezone?: string;
  className?: string;
  showSeconds?: boolean;
}

const DynamicClock = ({ 
  city = "NEW YORK CITY", 
  timezone = "America/New_York",
  className = "",
  showSeconds = false
}: DynamicClockProps) => {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const zonedTime = toZonedTime(now, timezone);
        const timeFormat = showSeconds ? "HH:mm:ss" : "HH:mm";
        const formattedTime = format(zonedTime, timeFormat);
        setCurrentTime(formattedTime);
      } catch (error) {
        // Fallback to local time if timezone fails
        const timeFormat = showSeconds ? "HH:mm:ss" : "HH:mm";
        const formattedTime = format(new Date(), timeFormat);
        setCurrentTime(formattedTime);
      }
    };

    // Update immediately
    updateTime();
    
    // Update every second for accurate timekeeping
    const interval = setInterval(updateTime, 1000);
    
    return () => clearInterval(interval);
  }, [timezone, showSeconds]);

  return (
    <div className={`font-satoshi text-[10px] tracking-wider whitespace-nowrap ${className}`}>
      <span className="text-primary font-medium">{city}</span>
      <span className="mx-2 text-text-muted">·</span>
      <span className="text-text-secondary">{currentTime}</span>
    </div>
  );
};

export default DynamicClock;