interface DiagonalLineProps {
    className?: string;
    height?: string;
    angle?: number;
    fullWidth?: boolean;  
    width?: string;
    style?: React.CSSProperties;
  }
  
  const DiagonalLine = ({ 
    className = "", 
    angle = 90,
    fullWidth = false,  
    width = "100%",
    style = {}
  }: DiagonalLineProps) => {
      if (fullWidth) {
        return (
          <>
            {/* Mobile version - responsive width to prevent horizontal scroll */}
            <div
              className={`absolute h-px left-1/3 block md:hidden ${className}`}
              style={{
                width: 'min(1000px, 177vw)',
                backgroundColor: '#000000',
                transform: `translateX(-50%) rotate(110deg)`,
                transformOrigin: "center",
                ...style
              }}
            />
            {/* Desktop version - original settings */}
            <div
              className={`absolute h-px left-1/2 hidden md:block ${className}`}
              style={{
                width,
                backgroundColor: '#000000',
                transform: `translateX(-50%) rotate(${angle}deg)`,
                transformOrigin: "center",
                ...style
              }}
            />
          </>
        );
      }
  };

  export default DiagonalLine;
  