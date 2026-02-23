import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number; // seconds
  duration?: number; // seconds
  className?: string;
  threshold?: number;
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  width = '100%', 
  direction = 'up', 
  delay = 0,
  duration = 0.8,
  className = '',
  threshold = 0.1
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Trigger animation once
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  const getInitialTransform = () => {
    switch (direction) {
      case 'up': return 'translateY(50px)';
      case 'down': return 'translateY(-50px)';
      case 'left': return 'translateX(-50px)';
      case 'right': return 'translateX(50px)';
      case 'none': return 'none';
      default: return 'translateY(50px)';
    }
  };

  return (
    <div 
      ref={ref} 
      className={className}
      style={{ width }}
    >
      <div
        style={{
          transform: isVisible ? 'translate(0, 0)' : getInitialTransform(),
          opacity: isVisible ? 1 : 0,
          transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s cubic-bezier(0.2, 0.8, 0.2, 1) ${delay}s`,
          willChange: 'opacity, transform',
          height: '100%' // Ensure inner div fills container height for grid items
        }}
      >
        {children}
      </div>
    </div>
  );
};