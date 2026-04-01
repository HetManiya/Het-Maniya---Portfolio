
import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, SKILLS, EDUCATION, EXPERIENCE } from "../constants";

const SYSTEM_INSTRUCTION = `
You are an AI assistant for Het Maniya's portfolio website. 
Your goal is to answer questions about Het Maniya based on his resume:
- Name: ${PERSONAL_INFO.name}
- Role: ${PERSONAL_INFO.role}
- Education: ${EDUCATION[0].degree} from ${EDUCATION[0].institute} (${EDUCATION[0].period})
- Skills: ${SKILLS.map(s => s.name).join(', ')}
- Experience: ${EXPERIENCE[0].role} at ${EXPERIENCE[0].company} (${EXPERIENCE[0].period})
- Contact: ${PERSONAL_INFO.email}, ${PERSONAL_INFO.phone}

Be professional, friendly, and concise. If you don't know the answer, politely suggest contacting Het directly via email.
`;

export async function askAssistant(prompt: string): Promise<string> {
  try {
    // Fix: Create a new GoogleGenAI instance right before making an API call to ensure it always uses the most up-to-date API key.
    // The key must be obtained exclusively from process.env.API_KEY as per the library guidelines.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    // Fix: Access the .text property directly as it is not a method in the GenerateContentResponse object.
    return response.text || "I'm sorry, I couldn't process that.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error: Unable to reach the assistant right now.";
  }
}
