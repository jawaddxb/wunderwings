import { MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // SPICE LEVEL 1 (Least Hot)
  {
    id: 'brooklyn-garlic-parm',
    name: "Brooklyn Garlic Parm",
    description: "Roasted garlic butter, parmesan snow, italian herbs. All of the flavor, none of the heat.",
    price: 45, // approx converted to AED/generic pricing
    spiceLevel: 1,
    image: "https://images.unsplash.com/photo-1642686375024-52641fee6087?q=80&w=800&auto=format&fit=crop", 
    tags: ["Mild", "Cheesy"],
    stats: { sweetness: 10, spiciness: 0, tanginess: 30, crunch: 60, messiness: 50 }
  },
  {
    id: 'toronto-honey-garlic',
    name: "Toronto Honey Garlic",
    description: "Sticky, sweet, and savoury. The 6ix staple that hits the spot every single time.",
    price: 45,
    spiceLevel: 1,
    image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=800&q=80",
    tags: ["Sticky", "Sweet"],
    stats: { sweetness: 90, spiciness: 5, tanginess: 40, crunch: 80, messiness: 90 }
  },
  {
    id: 'tokyo-teriyaki',
    name: "Tokyo Teriyaki",
    description: "Umami bomb. Soy, ginger, and mirin glaze. Sweet, salty, and sophisticated.",
    price: 48,
    spiceLevel: 1,
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80",
    tags: ["Umami", "Glazed"],
    stats: { sweetness: 70, spiciness: 10, tanginess: 40, crunch: 70, messiness: 80 }
  },
  
  // SPICE LEVEL 2
  {
    id: 'texas-bbq',
    name: "Texas BBQ",
    description: "Hickory smoked, bourbon infused BBQ sauce. Deep, rich, and darker than your ex's heart.",
    price: 48,
    spiceLevel: 2,
    image: "https://images.unsplash.com/photo-1527477396000-6489d10605b9?auto=format&fit=crop&w=800&q=80",
    tags: ["Smokey", "Rich"],
    stats: { sweetness: 60, spiciness: 20, tanginess: 50, crunch: 40, messiness: 90 }
  },
  {
    id: 'cape-town-lemon-pepper',
    name: "Cape Town Lemon Pepper",
    description: "Zesty lemon peel, cracked black pepper. Crisp, clean, and fresher than fresh.",
    price: 45,
    spiceLevel: 2,
    image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=800&q=80",
    tags: ["Zesty", "Dry Rub"],
    stats: { sweetness: 0, spiciness: 25, tanginess: 90, crunch: 90, messiness: 20 }
  },
  {
    id: 'thai-sweet-chilli',
    name: "Thai Sweet Chilli",
    description: "The perfect balance. Sticky sweet start with a gentle chilli kick finish.",
    price: 45,
    spiceLevel: 2,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
    tags: ["Sticky", "Balanced"],
    stats: { sweetness: 85, spiciness: 30, tanginess: 50, crunch: 75, messiness: 95 }
  },

  // SPICE LEVEL 3
  {
    id: 'korea-classic',
    name: "Korea Classic",
    description: "The G.O.A.T. Double fried, glazed in gochujang, garlic, and soy. Seoul food.",
    price: 52,
    spiceLevel: 3,
    image: "https://images.unsplash.com/photo-1558985250-27a406d64cb3?auto=format&fit=crop&w=800&q=80",
    tags: ["Best Seller", "Gochujang"],
    stats: { sweetness: 40, spiciness: 50, tanginess: 40, crunch: 100, messiness: 85 }
  },
  {
    id: 'london-smoky-heat',
    name: "London Smoky Heat",
    description: "Chipotle meets city grit. Smokey, moody, with a creeping heat that lingers.",
    price: 48,
    spiceLevel: 3,
    image: "https://images.unsplash.com/photo-1632558610116-c94709d5d678?auto=format&fit=crop&w=800&q=80",
    tags: ["Smokey", "Chipotle"],
    stats: { sweetness: 30, spiciness: 55, tanginess: 40, crunch: 60, messiness: 70 }
  },
  {
    id: 'kingston-sweet-jerk',
    name: "Kingston Sweet Jerk",
    description: "Caribbean vibes. Scotch bonnet, allspice, thyme. Sweet heat that makes you dance.",
    price: 50,
    spiceLevel: 3,
    image: "https://images.unsplash.com/photo-1541544537156-2150d0363d13?auto=format&fit=crop&w=800&q=80",
    tags: ["Jerk", "Aromatic"],
    stats: { sweetness: 50, spiciness: 60, tanginess: 60, crunch: 50, messiness: 80 }
  },

  // SPICE LEVEL 4
  {
    id: 'lahore-tikka',
    name: "Lahore Tikka",
    description: "Tandoori spices, yoghurt marinade, char-grilled taste. A curry house explosion on a wing.",
    price: 50,
    spiceLevel: 4,
    image: "https://images.unsplash.com/photo-1628294895950-98052523e036?auto=format&fit=crop&w=800&q=80",
    tags: ["Spiced", "Charred"],
    stats: { sweetness: 10, spiciness: 70, tanginess: 50, crunch: 65, messiness: 60 }
  },
  {
    id: 'new-york-buffalo',
    name: "New York Buffalo",
    description: "The original. Frank's RedHot, butter, vinegar. Sour, spicy, legendary.",
    price: 48,
    spiceLevel: 4,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    tags: ["Classic", "Sour"],
    stats: { sweetness: 0, spiciness: 75, tanginess: 90, crunch: 50, messiness: 80 }
  },
  {
    id: 'la-sriracha',
    name: "L.A Sriracha",
    description: "Garlic chilli heat. Bright, vinegary, and hip. The cool kid of hot sauces.",
    price: 48,
    spiceLevel: 4,
    image: "https://images.unsplash.com/photo-1555554317-766af7d53b95?auto=format&fit=crop&w=800&q=80",
    tags: ["Garlic", "Hip"],
    stats: { sweetness: 30, spiciness: 75, tanginess: 70, crunch: 60, messiness: 70 }
  },

  // SPICE LEVEL 5 (Hot AF)
  {
    id: 'mexico-mango-hab',
    name: "Mexico Mango Hab",
    description: "Tropical sweetness followed by a habanero uppercut. Don't let the mango fool you.",
    price: 52,
    spiceLevel: 5,
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=80",
    tags: ["Fruity", "Deceptive"],
    stats: { sweetness: 80, spiciness: 90, tanginess: 60, crunch: 70, messiness: 90 }
  },
  {
    id: 'sylhet-naga-ripper',
    name: "Sylhet Naga Ripper",
    description: "Ghost chilli madness. Pure pain, pure euphoria. Sign the waiver in your mind.",
    price: 55,
    spiceLevel: 5,
    image: "https://images.unsplash.com/photo-1519623286303-4c6192c140cb?auto=format&fit=crop&w=800&q=80",
    tags: ["Extreme", "Danger"],
    stats: { sweetness: 10, spiciness: 100, tanginess: 20, crunch: 60, messiness: 50 }
  }
];

export const NAV_LINKS = [
  { label: 'Menu', href: '#menu' },
  { label: 'Flavor Matcher', href: '#ai-matcher' },
  { label: 'Locations', href: '#locations' },
  { label: 'About', href: '#about' },
];