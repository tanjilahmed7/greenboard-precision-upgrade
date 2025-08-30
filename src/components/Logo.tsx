interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "white";
}

const Logo = ({ className = "", size = "md", variant = "default" }: LogoProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16"
  };
  
  const isWhite = variant === "white";

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg
        viewBox="0 0 120 120"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Circular Background */}
        <circle
          cx="60"
          cy="60"
          r="58"
          fill={isWhite ? "white" : "hsl(var(--primary))"}
          stroke={isWhite ? "rgba(255,255,255,0.8)" : "hsl(var(--primary-light))"}
          strokeWidth="2"
        />
        
        {/* Tree/Leaf Icon */}
        <g transform="translate(60, 30)">
          {/* Main trunk */}
          <rect
            x="-2"
            y="35"
            width="4"
            height="25"
            fill={isWhite ? "hsl(var(--primary))" : "hsl(var(--primary-foreground))"}
            rx="2"
          />
          
          {/* Leaves/Branches */}
          <path
            d="M-15 15 Q-20 5 -15 0 Q-10 5 -5 10 Q0 5 5 10 Q10 5 15 0 Q20 5 15 15 Q10 20 5 25 Q0 30 -5 25 Q-10 20 -15 15 Z"
            fill={isWhite ? "hsl(var(--primary))" : "hsl(var(--primary-foreground))"}
            opacity="0.9"
          />
          
          {/* Central leaf detail */}
          <path
            d="M-8 18 Q0 12 8 18 Q0 25 -8 18 Z"
            fill={isWhite ? "white" : "hsl(var(--primary))"}
            opacity="0.3"
          />
          
          {/* Side branches */}
          <ellipse
            cx="-12"
            cy="20"
            rx="6"
            ry="8"
            fill={isWhite ? "hsl(var(--primary))" : "hsl(var(--primary-foreground))"}
            opacity="0.7"
            transform="rotate(-30)"
          />
          <ellipse
            cx="12"
            cy="20"
            rx="6"
            ry="8"
            fill={isWhite ? "hsl(var(--primary))" : "hsl(var(--primary-foreground))"}
            opacity="0.7"
            transform="rotate(30)"
          />
        </g>
        
        {/* Text: GREEN BOARD */}
        <g transform="translate(60, 85)">
          <text
            x="0"
            y="0"
            textAnchor="middle"
            fontSize="10"
            fontWeight="bold"
            fill={isWhite ? "hsl(var(--primary))" : "hsl(var(--primary-foreground))"}
            fontFamily="system-ui, -apple-system, sans-serif"
            letterSpacing="0.5px"
          >
            GREEN BOARD
          </text>
        </g>
      </svg>
    </div>
  );
};

export default Logo;