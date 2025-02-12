// src/components/ui/card.tsx
import React from 'react';

export const Card = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`card shadow-lg rounded-lg bg-white p-4 ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="card-header border-b pb-2 mb-4">
    <h3 className="text-xl font-semibold">{children}</h3>
  </div>
);

export const CardContent = ({ children }: { children: React.ReactNode }) => (
  <div className="card-content">
    <p>{children}</p>
  </div>
);

export const CardFooter = ({ children }: { children: React.ReactNode }) => (
  <div className="card-footer mt-4 border-t pt-4">
    {children}
  </div>
);

export const CardTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-lg font-semibold">{children}</h2>
);
