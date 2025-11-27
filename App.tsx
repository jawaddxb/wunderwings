import React from 'react';
import Header from './components/Header';
import Marquee from './components/Marquee';
import MenuCard from './components/MenuCard';
import AiFlavorMatcher from './components/AiFlavorMatcher';
import Button from './components/Button';
import { MENU_ITEMS } from './constants';
import { ArrowDown, Star, MapPin } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-wunder-red text-black font-sans selection:bg-wunder-blue selection:text-black">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 px-4 overflow-hidden min-h-[85vh] flex flex-col justify-center">
        
        {/* Left Hero Image - Replaced local asset with Unsplash "Card" */}
        <div className="hidden xl:block absolute top-1/2 -translate-y-1/2 left-[5%] w-[20vw] max-w-xs z-0 pointer-events-none animate-float-left">
            <div className="bg-white p-3 pb-8 border-4 border-black shadow-pop rotate-[-6deg]">
                <img 
                    src="https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=600&q=80" 
                    alt="Delicious Wings" 
                    className="w-full h-auto aspect-square object-cover border-2 border-black grayscale-[20%]" 
                />
            </div>
        </div>

        {/* Right Hero Image - Replaced local asset with Unsplash "Card" */}
        <div className="hidden xl:block absolute top-1/2 -translate-y-1/2 right-[5%] w-[20vw] max-w-xs z-0 pointer-events-none animate-float-right">
             <div className="bg-white p-3 pb-8 border-4 border-black shadow-pop rotate-[6deg]">
                <img 
                    src="https://images.unsplash.com/photo-1527477396000-6489d10605b9?auto=format&fit=crop&w=600&q=80" 
                    alt="BBQ Wings" 
                    className="w-full h-auto aspect-square object-cover border-2 border-black grayscale-[20%]" 
                />
            </div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
            {/* Floating Elements */}
            <Star className="absolute top-0 left-10 md:left-40 w-12 h-12 text-wunder-blue fill-wunder-blue animate-spin-slow duration-700 hidden md:block" />
            <Star className="absolute bottom-20 right-10 md:right-40 w-16 h-16 text-black fill-black animate-bounce hidden md:block" />

            <div className="inline-block bg-white border-3 border-black px-6 py-2 rounded-full font-black uppercase tracking-widest mb-6 shadow-pop rotate-[-2deg]">
                Est. 2024 Dubai
            </div>
            
            <h1 className="font-display text-[5rem] md:text-[11rem] uppercase leading-[0.8] tracking-tighter mb-8 drop-shadow-[6px_6px_0_rgba(0,0,0,0.5)] text-white">
                Wicked<br /> 
                <span className="text-wunder-blue text-outline shadow-none">Good</span><br/>
                Wings
            </h1>
            
            <p className="font-sans text-xl md:text-3xl font-bold mb-10 max-w-2xl mx-auto leading-tight text-white drop-shadow-md">
                High energy flavor. No apologies. <br/> best chicken in Dubai.
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <Button variant="primary" size="lg">Order Now</Button>
                <Button variant="white" size="lg">View Menu</Button>
            </div>
        </div>
      </section>

      <Marquee text="FRESH FLAVOR BOMB" rotate={true} bgColor="bg-black" textColor="text-wunder-blue" />

      {/* Intro Text / About */}
      <section id="about" className="py-24 px-4 bg-white rounded-t-[3rem] -mt-10 relative z-20 border-t-4 border-black">
        <div className="max-w-5xl mx-auto text-center">
            <h2 className="font-display text-5xl md:text-7xl uppercase mb-8 leading-none">
                Not Your Average <br/><span className="text-wunder-red">Wing Joint</span>
            </h2>
            <div className="bg-wunder-offwhite p-8 md:p-12 rounded-[2rem] border-3 border-black shadow-pop transform rotate-1">
                <p className="font-sans text-xl md:text-3xl font-bold text-black leading-relaxed">
                    We believe in wings that punch you in the face with flavor. 
                    London attitude. World inspired. Wings that slap with flavour - 
                    crispy, juicy, and loaded with flavors from Seoul, Dubai, Brooklyn, Kingston, and beyond!
                </p>
            </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section id="menu" className="py-24 px-4 bg-wunder-offwhite">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="bg-black text-white px-3 py-1 rounded-full font-bold uppercase text-sm">Menu</span>
                    </div>
                    <h2 className="font-display text-6xl md:text-8xl uppercase leading-none">The <span className="text-wunder-red">Goods</span></h2>
                </div>
                <div className="hidden md:block">
                    <Button variant="outline">Download PDF</Button>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {MENU_ITEMS.map((item) => (
                    <MenuCard key={item.id} item={item} />
                ))}
            </div>
            
            <div className="mt-16 text-center md:hidden">
                <Button variant="outline" className="w-full">Download PDF</Button>
            </div>
        </div>
      </section>

      <Marquee text="EAT • SLEEP • WING • REPEAT •" direction="right" bgColor="bg-wunder-yellow" textColor="text-black" />

      {/* AI Feature */}
      <AiFlavorMatcher />

      {/* Find Your Wunder Section */}
      <section id="community" className="py-24 px-4 bg-wunder-yellow text-black border-y-4 border-black relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-10 left-10 opacity-20 pointer-events-none">
           <MapPin size={120} className="rotate-12" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-20 pointer-events-none">
           <Star size={120} className="-rotate-12" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-block bg-white px-4 py-1 rounded-full border-2 border-black font-black uppercase text-sm mb-6 rotate-2 shadow-sm">
                Community
            </div>
            <h2 className="font-display text-5xl md:text-8xl uppercase mb-10 leading-[0.9] drop-shadow-sm">
                Find Your <br/><span className="text-white text-outline shadow-none">#Wunder</span>
            </h2>
            
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border-4 border-black shadow-pop transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <p className="font-sans text-xl md:text-2xl font-bold leading-relaxed mb-8">
                    Dubai isn’t just big malls and big nights - it’s the tiny side streets, the hidden cafés, the late-night spots that hit different. 
                    <br/><br/>
                    <span className="text-wunder-red bg-wunder-offwhite px-2 rounded-lg">Find Your #Wunder</span> is how we bring all of that together. From the places that make you #Wunderstruck to the little things that make life here #Wunderful, this is the community built by the people who actually live it.
                    <br/><br/>
                    We turn your discoveries into flavour drops, collabs, features, and city-wide campaigns shaped by real locals, not marketing teams.
                </p>
                
                <div className="bg-wunder-blue border-3 border-black rounded-2xl p-6 md:p-8 transform rotate-1">
                    <p className="font-display text-2xl md:text-4xl uppercase text-black leading-none">
                        Show us your #Wunder. <br/>
                        We’ll bring the wings. You bring the city.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* Locations / Footer */}
      <footer id="locations" className="bg-black text-white pt-24 pb-12 relative z-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
            <div>
                <h3 className="font-display text-4xl text-wunder-blue mb-8 uppercase">Find Us</h3>
                <ul className="space-y-6 font-sans text-lg">
                    <li>
                        <a 
                            href="https://maps.app.goo.gl/uVuV9b4cSCEN6XtA7" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex flex-col p-4 border-2 border-gray-800 rounded-2xl hover:border-wunder-blue transition-colors cursor-pointer group"
                        >
                            <span className="font-black text-2xl group-hover:text-wunder-blue">WunderWings Dubai</span>
                            <span className="text-gray-400">Get Directions</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <h3 className="font-display text-4xl text-wunder-blue mb-8 uppercase">Open Times</h3>
                <ul className="space-y-4 font-sans text-xl font-bold text-white">
                    <li className="flex justify-between border-b-2 border-gray-800 pb-4"><span>Mon - Thu</span> <span>12pm - 10pm</span></li>
                    <li className="flex justify-between border-b-2 border-gray-800 pb-4"><span>Fri - Sat</span> <span>12pm - 12am</span></li>
                    <li className="flex justify-between border-b-2 border-gray-800 pb-4"><span>Sun</span> <span>12pm - 9pm</span></li>
                </ul>
            </div>
            <div>
                <h3 className="font-display text-4xl text-wunder-blue mb-8 uppercase">The Club</h3>
                <div className="bg-wunder-dark p-6 rounded-3xl border-2 border-gray-800">
                     <p className="font-sans text-xl font-bold mb-4">Join for secret menu items & drops.</p>
                     <div className="flex flex-col gap-3">
                         <input type="email" placeholder="YOUR EMAIL" className="bg-black border-2 border-gray-700 p-4 rounded-xl text-white outline-none focus:border-wunder-blue font-bold placeholder-gray-600" />
                         <button className="bg-wunder-blue text-black px-4 py-4 rounded-xl font-black border-2 border-wunder-blue uppercase hover:bg-white hover:border-white transition-colors">Sign Up</button>
                     </div>
                </div>
            </div>
        </div>
        <div className="text-center font-sans font-bold text-gray-500 text-sm">
            © {new Date().getFullYear()} WunderWings Dubai.
        </div>
      </footer>
    </div>
  );
};

export default App;