// src/components/ui/tabs.tsx
import React, { useState } from 'react';

export const Tabs = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="tabs">
      {children}
    </div>
  );
};

export const TabsList = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="tabs-list flex border-b">
      {children}
    </div>
  );
};

export const TabsTrigger = ({
  children,
  isActive,
  onClick,
}: {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`tabs-trigger px-4 py-2 text-sm font-medium ${
        isActive ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'
      }`}
    >
      {children}
    </button>
  );
};

export const TabsContent = ({
  children,
  isActive,
}: {
  children: React.ReactNode;
  isActive: boolean;
}) => {
  return isActive ? (
    <div className="tabs-content p-4">
      {children}
    </div>
  ) : null;
};
