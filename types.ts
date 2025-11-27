export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  spiceLevel: number; // 1-5
  image: string;
  tags: string[];
  stats: {
    sweetness: number;
    spiciness: number;
    tanginess: number;
    crunch: number;
    messiness: number;
  };
}

export interface FlavorProfile {
  sweetness: number;
  spiciness: number;
  tanginess: number;
  crunch: number;
  messiness: number;
}

export interface AiRecommendation {
  recommendedItem: MenuItem | null;
  reasoning: string;
  funnyQuip: string;
}