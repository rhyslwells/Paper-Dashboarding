import React from 'react';

export const Tabs = ({ children, value, onValueChange }: { children: React.ReactNode, value: string, onValueChange: (value: string) => void }) => (
  <div className="tabs">{children}</div>
);

export const TabsList = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={`tabs-list ${className}`}>{children}</div>
);

export const TabsTrigger = ({ value, children }: { value: string, children: React.ReactNode }) => (
  <button className="tabs-trigger" onClick={() => onValueChange(value)}>{children}</button>
);

export const TabsContent = ({ value, children }: { value: string, children: React.ReactNode }) => (
  <div className={`tabs-content ${value}`}>{children}</div>
);
