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
        <div
          className={`absolute h-px left-1/2 hidden md:block ${className}`}
          style={{
            width,
            backgroundColor: 'hsl(var(--color-line-accent))',
            transform: `translateX(-50%) rotate(${angle}deg)`,
            transformOrigin: "center",
            ...style
          }}
        />
      );
    }
  };

  export default DiagonalLine;
  