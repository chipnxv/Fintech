// components/ui/button.tsx
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "ghost" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, className, variant }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} ${variant === "secondary" ? "bg-gray-200" : "bg-transparent"}`}
    >
      {children}
    </button>
  );
};
