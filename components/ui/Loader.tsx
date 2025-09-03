import React from "react";

interface LoaderProps {
  size?: "sm" | "md" | "lg";
  color?: string;
  className?: string;
}

const Loader: React.FC<LoaderProps> = ({
  size = "md",
  color = "#8B0000",
  className = "",
}) => {
  const sizeClasses = {
    sm: "w-2 h-2",
    md: "w-3 h-3",
    lg: "w-4 h-4",
  };

  const containerClasses = {
    sm: "gap-1",
    md: "gap-2",
    lg: "gap-3",
  };

  return (
    <div
      className={`flex items-center justify-center ${containerClasses[size]} ${className}`}
    >
      <div
        className={`${sizeClasses[size]} rounded-full font-bold animate-bounce`}
        style={{
          backgroundColor: color,
          animationDelay: "0ms",
          animationDuration: "1.4s",
        }}
      />
      <div
        className={`${sizeClasses[size]} rounded-full font-bold animate-bounce`}
        style={{
          backgroundColor: color,
          animationDelay: "0.2s",
          animationDuration: "1.4s",
        }}
      />
      <div
        className={`${sizeClasses[size]} rounded-full font-bold animate-bounce`}
        style={{
          backgroundColor: color,
          animationDelay: "0.4s",
          animationDuration: "1.4s",
        }}
      />
    </div>
  );
};

export default Loader;
