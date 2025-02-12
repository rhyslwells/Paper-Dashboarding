// src/components/ui/card.tsx
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return (
    <div className={`bg-white shadow-md rounded-lg p-4 ${className}`}>
      {children}
    </div>
  );
};

interface CardHeaderProps {
  children: React.ReactNode;
}

const CardHeader = ({ children }: CardHeaderProps) => {
  return (
    <div className="border-b mb-4 pb-2">
      {children}
    </div>
  );
};

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

const CardTitle = ({ children, className }: CardTitleProps) => {
  return (
    <h2 className={`text-xl font-semibold ${className}`}>
      {children}
    </h2>
  );
};

interface CardContentProps {
  children: React.ReactNode;
}

const CardContent = ({ children }: CardContentProps) => {
  return (
    <div className="text-sm text-gray-600">
      {children}
    </div>
  );
};

export { Card, CardHeader, CardTitle, CardContent };
