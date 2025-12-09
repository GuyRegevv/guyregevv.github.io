import React from 'react';

type PillProps = {
  color?: string;               // Accepts any valid CSS color string
  className?: string;           // For any extra tailwind or css classes
  children: React.ReactNode;
};

const Pill: React.FC<PillProps> = ({ color = '', className = 'bg-lemon', children }) => {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${className}`}
      style={{
        backgroundColor: color,
        color: 'black',
        boxShadow: `0 2px 8px 0 rgba(0,0,0,0.08)`,
        fontFamily: `'Inter Medium', system-ui, sans-serif`,
      }}
    >
      {children}
    </span>
  );
};

export default Pill;
