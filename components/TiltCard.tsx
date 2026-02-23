import React, { useRef, useState } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const TiltCard: React.FC<TiltCardProps> = ({ children, className = '', onClick }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');
  const [shadow, setShadow] = useState('');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    
    // Calculate rotation (max 10 degrees for subtle premium feel)
    const rotateX = (0.5 - y) * 10; 
    const rotateY = (x - 0.5) * 10;

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
    setShadow(`
      ${-rotateY * 2}px ${rotateX * 2}px 20px rgba(46, 190, 99, 0.15),
      0 20px 40px rgba(0,0,0,0.5)
    `);
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setShadow('');
  };

  return (
    <div 
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`transition-all duration-300 ease-out will-change-transform transform-style-3d ${className}`}
      style={{ 
        transform, 
        boxShadow: shadow ? shadow : undefined,
        transformStyle: 'preserve-3d'
      }}
    >
      {children}
    </div>
  );
};