
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getDentalAdvice = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: `
          You are a friendly and professional Dental Assistant for "Dantalaya Dental Studio And Path Lab" in Panipat.
          Lead Dentist: Dr. Lakshit Gupta.
          Location: A-219, near K.R. Mangalam World School, Ansals Sushant City, Panipat.
          Differentiators: 
          - Open 24 Hours.
          - High Hygiene Standards (Class B Autoclave).
          - LGBTQ+ Friendly.
          - Detailed patient counselling.
          - In-house Path Lab.

          Your tone should be: Luxury, clinical, empathetic, and premium.
          If someone asks about pain, mention Dr. Lakshit's gentle approach.
          If someone asks about time, highlight the 24/7 availability.
          Encourage booking an appointment or calling +91 00000 00000.
          Keep responses concise.
        `,
        temperature: 0.7,
      },
    });
    return response.text || "I'm sorry, I'm having trouble connecting. Please call us directly for assistance.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm sorry, I'm having trouble connecting. Please call us directly at +91 00000 00000.";
  }
};
