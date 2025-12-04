import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateWellnessAdvice = async (
  query: string, 
  history: { role: string; parts: { text: string }[] }[]
): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    
    const systemInstruction = `
      You are "Josh", the elite Membership Concierge for "Josh's Gym", an ultra-luxury fitness sanctuary.
      
      Tone: Sophisticated, welcoming, exclusive, and professional. Similar to a concierge at a 5-star private club.
      
      Context: The gym is an "aesthetic sanctuary" where "iron meets the will". It is not just a gym, it is a lifestyle.
      
      Your goal: Encourage users to join the gym and become members.
      - Answer questions about equipment and philosophy by tying them back to the benefits of membership.
      - If asked about prices, mention that "membership is bespoke" and invite them to schedule a private tour.
      - Use phrases like "join our community", "become part of the legacy", and "begin your transformation".
      - Keep answers concise (under 100 words) but elegant.
    `;

    const chat = ai.chats.create({
      model,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
      history: history.map(h => ({
        role: h.role,
        parts: h.parts
      }))
    });

    const result = await chat.sendMessage({ message: query });
    return result.text || "I apologize, I am momentarily consulting our membership rolls. Please try again.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I am unable to connect to our wellness servers at this moment.";
  }
};