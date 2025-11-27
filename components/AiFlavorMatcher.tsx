import React, { useState } from 'react';
import { getFlavorRecommendation } from '../services/geminiService';
import { AiRecommendation } from '../types';
import Button from './Button';
import { Sparkles, Loader2, ArrowRight } from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const AiFlavorMatcher: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AiRecommendation | null>(null);

  const handleMatch = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setResult(null);
    const recommendation = await getFlavorRecommendation(prompt);
    setResult(recommendation);
    setLoading(false);
  };

  const chartData = result?.recommendedItem?.stats ? [
    { subject: 'Sweet', A: result.recommendedItem.stats.sweetness, fullMark: 100 },
    { subject: 'Spicy', A: result.recommendedItem.stats.spiciness, fullMark: 100 },
    { subject: 'Tangy', A: result.recommendedItem.stats.tanginess, fullMark: 100 },
    { subject: 'Crunch', A: result.recommendedItem.stats.crunch, fullMark: 100 },
    { subject: 'Messy', A: result.recommendedItem.stats.messiness, fullMark: 100 },
  ] : [];

  return (
    <section id="ai-matcher" className="py-24 bg-wunder-dark text-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
            <span className="bg-wunder-yellow text-black font-black font-sans text-sm tracking-widest uppercase px-4 py-2 rounded-full border-2 border-black inline-block mb-6 rotate-2 shadow-pop">
                Beta Feature
            </span>
            <h2 className="font-display text-5xl md:text-8xl uppercase leading-none mb-6 text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
                Wingman <span className="text-wunder-blue">AI</span>
            </h2>
            <p className="font-sans text-xl md:text-2xl max-w-2xl mx-auto text-gray-300 font-bold">
                Tell us your vibe. We'll pick your wing.
            </p>
        </div>

        {/* Input Area */}
        <div className="max-w-3xl mx-auto bg-wunder-blue p-3 rounded-[2rem] border-4 border-black shadow-pop mb-16 rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="bg-white rounded-[1.5rem] p-2 flex flex-col md:flex-row gap-2 border-2 border-black">
                <input 
                    type="text" 
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Describe your current mood..."
                    className="flex-grow p-4 font-sans text-xl font-bold text-black placeholder-gray-400 outline-none bg-transparent"
                    onKeyDown={(e) => e.key === 'Enter' && handleMatch()}
                />
                <Button 
                    onClick={handleMatch} 
                    disabled={loading}
                    variant="primary" 
                    className="whitespace-nowrap flex items-center justify-center gap-2 min-w-[180px]"
                >
                    {loading ? <Loader2 className="animate-spin" /> : <><Sparkles size={20} /> MATCH</>}
                </Button>
            </div>
        </div>

        {/* Results Area */}
        {result && result.recommendedItem && (
            <div className="max-w-5xl mx-auto bg-wunder-offwhite text-black border-4 border-black rounded-[3rem] shadow-pop hover:shadow-pop-hover p-8 md:p-12 animate-in fade-in slide-in-from-bottom-8 duration-500">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    
                    {/* Text Content */}
                    <div>
                        <div className="mb-6">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
                                <h3 className="font-sans font-black text-sm tracking-widest uppercase text-gray-500">Perfect Match Found</h3>
                            </div>
                            <h4 className="font-display text-5xl md:text-7xl uppercase leading-none mb-4 text-black">{result.recommendedItem.name}</h4>
                            <p className="font-sans text-2xl font-black italic text-wunder-red mb-6">"{result.funnyQuip}"</p>
                            <div className="bg-white border-3 border-black rounded-2xl p-6 mb-8 shadow-sm">
                                <p className="font-sans text-lg font-medium leading-relaxed">{result.reasoning}</p>
                            </div>
                        </div>
                        <Button className="w-full md:w-auto">
                            Add To Order <ArrowRight className="inline ml-2" />
                        </Button>
                    </div>

                    {/* Chart & Image */}
                    <div className="relative">
                         {/* Sticker decoration */}
                        <div className="absolute -top-6 -right-6 bg-wunder-yellow text-black font-display text-xl px-6 py-3 border-3 border-black rounded-full shadow-pop z-10 rotate-12">
                            100% Match
                        </div>
                        
                        <div className="bg-white border-4 border-black rounded-3xl p-6 aspect-square relative overflow-hidden shadow-inner">
                             <ResponsiveContainer width="100%" height="100%">
                                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={chartData}>
                                <PolarGrid stroke="#e5e5e5" />
                                <PolarAngleAxis dataKey="subject" tick={{ fill: 'black', fontSize: 12, fontFamily: 'Outfit', fontWeight: 900 }} />
                                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                                <Radar
                                    name="Flavor"
                                    dataKey="A"
                                    stroke="#bc2328"
                                    strokeWidth={4}
                                    fill="#bc2328"
                                    fillOpacity={0.4}
                                />
                                </RadarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        )}
      </div>
    </section>
  );
};

export default AiFlavorMatcher;