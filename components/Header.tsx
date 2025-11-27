import React, { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import Button from './Button';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 px-4">
      <div className="max-w-7xl mx-auto bg-white border-3 border-black rounded-full shadow-pop px-6 py-3 flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer group" onClick={() => window.scrollTo(0,0)}>
             <img 
                src="/logo.png" 
                alt="WunderWings Logo" 
                className="h-10 md:h-14 w-auto object-contain group-hover:-rotate-2 transition-transform duration-300 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                onError={(e) => {
                    // Fallback if image is missing
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
             />
             {/* Fallback Text if Image Fails */}
             <span className="hidden font-display text-3xl md:text-4xl text-wunder-red tracking-tighter text-outline-sm">
                WUNDERWINGS
             </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-2 items-center">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                className="font-sans font-bold text-lg text-black hover:bg-gray-100 px-4 py-2 rounded-full transition-colors uppercase"
              >
                {link.label}
              </a>
            ))}
            <div className="pl-2">
              <Button variant="primary" size="sm" className="gap-2">
                <ShoppingBag size={18} />
                Order
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
             <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-black p-2 hover:bg-gray-100 rounded-full transition-colors"
             >
               {isOpen ? <X size={24} /> : <Menu size={24} />}
             </button>
          </div>
      </div>

      {/* Mobile Nav Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 bg-wunder-dark rounded-3xl border-3 border-black p-6 shadow-pop-hover animate-in slide-in-from-top-4">
          <div className="flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                className="font-display text-3xl text-white hover:text-wunder-yellow uppercase"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
             <Button variant="primary" size="md" className="w-full mt-4 justify-center">
              Order Delivery
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;