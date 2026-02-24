import express from "express";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import { BUSINESS_INFO, PROGRAMS, FAQS } from "./constants";

const app = express();
const PORT = 3000;

// Securely store the API key on the server
const GEMINI_API_KEY = "AIzaSyCvE9r9g5-Hq32OwwpHLSkIqYsFmQdrxEs";
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

app.use(express.json());

const SYSTEM_INSTRUCTION = `
You are the official AI Assistant for ${BUSINESS_INFO.name}, a premium fitness facility in New Delhi.
Your role is to act as a knowledgeable, friendly, and professional gym representative.

**Gym Details:**
- **Name:** ${BUSINESS_INFO.name}
- **Address:** ${BUSINESS_INFO.address}
- **Phone:** ${BUSINESS_INFO.phoneDisplay}
- **Timings:** Weekdays: ${BUSINESS_INFO.timings.weekdays}, Sunday: ${BUSINESS_INFO.timings.sunday}
- **Rating:** ${BUSINESS_INFO.rating} stars (${BUSINESS_INFO.reviewCount} reviews)

**Training Programs:**
${PROGRAMS.map(p => `- ${p.title}: ${p.shortDescription}`).join('\n')}

**Key FAQs:**
${FAQS.map(f => `- Q: ${f.question} A: ${f.answer}`).join('\n')}

**IMPORTANT BEHAVIOR RULES:**
1. **Direct Answers:** Always answer the user's question directly.
2. **No Auto-Redirects:** Do NOT automatically redirect users to the manager or say "The best way is to speak with our manager" unless absolutely necessary (account changes, private matters).
3. **Human Support:** Only suggest calling/visiting if the user asks for human support or for pricing/membership specifics.
4. **Pricing:** Do NOT provide specific pricing information. If asked about price/cost/membership fees, politely explain that they should call or visit for the latest packages and offers.
5. **Tone:** Be friendly, professional, confident, natural, and conversational.
6. **Format:** Use bullet points for lists and emojis to make answers attractive.
7. **Length:** Keep responses under 200 words. Concise and clear.
8. **Accuracy:** Do not invent false information. If you don't know, say you will confirm with the team.

**Goal:** Function as a real gym representative, not just a message router.
`;

// API routes
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const chat = ai.chats.create({
      model: "gemini-3.1-pro-preview",
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history || [],
    });

    const result = await chat.sendMessage({ message });
    res.json({ text: result.text });
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    res.status(500).json({ error: "Failed to get response from AI" });
  }
});

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static("dist"));
    // SPA fallback for production
    app.get("*", (req, res) => {
      res.sendFile("dist/index.html", { root: "." });
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
