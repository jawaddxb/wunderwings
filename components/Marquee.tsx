import React from 'react';

interface MarqueeProps {
  text: string;
  bgColor?: string;
  textColor?: string;
  direction?: 'left' | 'right';
  rotate?: boolean;
}

const Marquee: React.FC<MarqueeProps> = ({ 
  text, 
  bgColor = 'bg-black', 
  textColor = 'text-white',
  direction = 'left',
  rotate = false
}) => {
  return (
    <div className={`relative flex overflow-hidden py-6 border-y-4 border-black ${bgColor} ${rotate ? '-rotate-2 scale-105 z-10 shadow-lg' : ''}`}>
      <div className={`animate-marquee whitespace-nowrap flex flex-row ${direction === 'right' ? 'flex-row-reverse' : ''}`}>
        {[...Array(10)].map((_, i) => (
          <span key={i} className={`text-5xl md:text-7xl font-display uppercase mx-6 ${textColor} tracking-tight`}>
            {text} <span className="text-transparent text-outline mx-4 opacity-50">{text}</span>
          </span>
        ))}
      </div>
      <div className={`absolute top-0 py-6 animate-marquee2 whitespace-nowrap flex flex-row ${direction === 'right' ? 'flex-row-reverse' : ''} ml-[100%]`}>
         {[...Array(10)].map((_, i) => (
          <span key={i} className={`text-5xl md:text-7xl font-display uppercase mx-6 ${textColor} tracking-tight`}>
            {text} <span className="text-transparent text-outline mx-4 opacity-50">{text}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;