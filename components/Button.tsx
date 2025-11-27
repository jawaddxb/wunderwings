import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "font-sans font-black uppercase tracking-wide transition-all duration-200 border-3 border-black rounded-full flex items-center justify-center transform hover:-translate-y-1 active:translate-x-0 active:translate-y-0";
  
  // Updated Primary to use new Blue (#92cfd5) with Black text for visibility
  const variants = {
    primary: "bg-wunder-blue text-black shadow-pop hover:shadow-pop-hover active:shadow-pop-active",
    secondary: "bg-wunder-yellow text-black shadow-pop hover:shadow-pop-hover active:shadow-pop-active",
    white: "bg-white text-black shadow-pop hover:shadow-pop-hover active:shadow-pop-active",
    outline: "bg-transparent text-black border-black hover:bg-black hover:text-white"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm border-2",
    md: "px-8 py-3 text-lg border-3",
    lg: "px-10 py-4 text-xl md:text-2xl border-4"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;