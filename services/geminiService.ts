import { GoogleGenAI, Type } from "@google/genai";
import { MenuItem, AiRecommendation } from "../types";
import { MENU_ITEMS } from "../constants";

// Initialize Gemini Client
// The API key is obtained from process.env.API_KEY which is injected by the environment.
const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

const systemInstruction = `
You are the "Head Wingman" at WunderWings, a funky, brutalist, high-energy chicken wing joint.
Your job is to recommend ONE specific menu item from our list based on the user's mood or request.
You should be high-energy, slightly cheeky, and very confident. Use slang like "boss", "fam", "flavor bomb".
Do not hallucinate menu items. Only choose from the provided list.

Menu Items Context:
${JSON.stringify(MENU_ITEMS.map(item => ({ id: item.id, name: item.name, description: item.description, stats: item.stats })))}
`;

export const getFlavorRecommendation = async (userPrompt: string): Promise<AiRecommendation> => {
  try {
    const model = 'gemini-2.5-flash';
    
    const response = await ai.models.generateContent({
      model: model,
      contents: userPrompt,
      config: {
        systemInstruction: systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
            type: Type.OBJECT,
            properties: {
                recommendedItemId: { type: Type.STRING, description: "The ID of the recommended menu item" },
                reasoning: { type: Type.STRING, description: "Why this fits the user's mood" },
                funnyQuip: { type: Type.STRING, description: "A short, funny one-liner about the choice" }
            },
            required: ["recommendedItemId", "reasoning", "funnyQuip"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");

    const data = JSON.parse(text);
    const recommendedItem = MENU_ITEMS.find(item => item.id === data.recommendedItemId) || MENU_ITEMS[0];

    return {
      recommendedItem,
      reasoning: data.reasoning,
      funnyQuip: data.funnyQuip
    };

  } catch (error) {
    console.error("Gemini Error:", error);
    // Fallback if API fails
    return {
      recommendedItem: MENU_ITEMS[0],
      reasoning: "Our AI brain froze from a brain freeze (too much slushie?), but you can't go wrong with the classic.",
      funnyQuip: "Classic never fails."
    };
  }
};