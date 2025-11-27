import React from 'react';
import { MenuItem } from '../types';
import { Flame, Plus } from 'lucide-react';
import Button from './Button';

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  return (
    <div className="group relative bg-white border-3 border-black rounded-3xl overflow-hidden shadow-pop hover:shadow-pop-hover hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
      
      {/* Floating Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2 items-start">
        {item.spiceLevel > 3 && (
            <span className="bg-wunder-red text-white font-sans font-black uppercase px-3 py-1 text-sm border-2 border-black rounded-full shadow-sm rotate-[-2deg]">
                Hot AF
            </span>
        )}
        {item.tags.map((tag, idx) => (
            <span key={tag} className={`bg-wunder-yellow text-black font-sans font-black uppercase px-3 py-1 text-sm border-2 border-black rounded-full shadow-sm ${idx % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}>
                {tag}
            </span>
        ))}
      </div>

      {/* Image Container - Rounded inner */}
      <div className="p-4 pb-0 h-64">
        <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-black relative bg-gray-100">
             <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={(e) => {
                // Fallback to a high-quality wing image if the specific asset isn't found
                e.currentTarget.src = "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=800&q=80";
                e.currentTarget.onerror = null;
            }}
            />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
            <h3 className="font-display text-2xl leading-none uppercase text-black">{item.name}</h3>
        </div>
        
        {/* Spice Meter */}
        <div className="flex items-center gap-1 mb-3 bg-gray-100 w-fit px-2 py-1 rounded-full border border-gray-300">
            <span className="text-xs font-bold mr-1 uppercase">Heat:</span>
            {[...Array(5)].map((_, i) => (
                <Flame 
                    key={i} 
                    size={16} 
                    className={i < item.spiceLevel ? "fill-wunder-red text-wunder-red" : "text-gray-300"} 
                />
            ))}
        </div>

        <p className="font-sans text-gray-600 font-medium mb-6 leading-tight flex-grow">{item.description}</p>
        
        <div className="flex justify-between items-center mt-auto">
            <span className="font-display text-2xl">£{item.price.toFixed(2)}</span>
            <button className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-wunder-red transition-colors active:scale-95">
                <Plus size={24} />
            </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;