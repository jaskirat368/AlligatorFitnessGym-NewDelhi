import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'outline-brand';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  // Base styles: Pill shape (rounded-full), bold text, smooth transition
  const baseStyles = "relative overflow-hidden inline-flex items-center justify-center px-8 py-3.5 font-bold tracking-wide rounded-full transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    // Primary: Gradient Green, White Text, Glow Effect
    primary: "bg-gradient-to-r from-brand-primary to-green-600 text-white shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:scale-105 border border-transparent",
    
    // Secondary: White bg, Green Text (Good for contrasting against dark sections)
    secondary: "bg-white text-gray-900 hover:text-brand-primary hover:bg-gray-100 shadow-md border border-transparent",
    
    // Outline: Transparent bg, White Border. 
    // Hover: Background turns White, Text turns Dark Gray (High Contrast)
    outline: "bg-transparent text-white border-2 border-white/80 hover:bg-white hover:text-gray-900 hover:border-white shadow-[0_0_15px_rgba(0,0,0,0)] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]",

    // Outline Brand: Green Border, Green Text.
    // Hover: Background turns Green, Text turns White.
    'outline-brand': "bg-transparent text-brand-primary border-2 border-brand-primary/80 hover:bg-brand-primary hover:text-white hover:border-brand-primary shadow-[0_0_15px_rgba(46,190,99,0)] hover:shadow-[0_0_20px_rgba(46,190,99,0.4)]"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};