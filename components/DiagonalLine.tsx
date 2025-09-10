interface DiagonalLineProps {
    className?: string;
    height?: string;
    angle?: number;
  }
  
  const DiagonalLine = ({ 
    className = "", 
    height = "300px",
    angle = 45
  }: DiagonalLineProps) => {
    return (
      <div 
        className={`absolute w-px bg-line ${className}`}
        style={{
          height,
          transform: `rotate(${angle}deg)`,
          transformOrigin: "top"
        }}
      />
    );
  };
  
  export default DiagonalLine;