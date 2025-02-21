// components/ui/card.tsx
import React from "react";

interface CardProps {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
  return <div className="p-4 border rounded-lg shadow-md">{children}</div>;
};

export const CardContent: React.FC<CardProps> = ({ children }) => {
  return <div className="p-4">{children}</div>;
};

export const CardHeader: React.FC<CardProps> = ({ children }) => {
  return <div className="text-xl font-bold">{children}</div>;
};

export const CardTitle: React.FC<CardProps> = ({ children }) => {
  return <h2 className="text-lg">{children}</h2>;
};

export const CardDescription: React.FC<CardProps> = ({ children }) => {
  return <p className="text-sm text-gray-500">{children}</p>;
};
