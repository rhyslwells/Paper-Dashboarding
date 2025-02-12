// In src/components/ui/card.tsx
export const Card = ({ children, className }) => {
  return <div className={`card ${className}`}>{children}</div>;
};

export const CardHeader = ({ children }) => <div className="card-header">{children}</div>;
export const CardContent = ({ children }) => <div className="card-content">{children}</div>;
export const CardTitle = ({ children }) => <h3 className="card-title">{children}</h3>;
