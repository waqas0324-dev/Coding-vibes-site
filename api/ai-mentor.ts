// Vercel serverless function: POST /api/ai-mentor
// Coding Vibes AI Mentor — Gemini-powered tutor with local fallback
import { getGeminiClient, analyzeCodeLocally } from './_lib/mentor';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      message = '',
      code = '',
      language = 'html',
      lessonTitle = 'HTML Tutorial',
      imageBase64 = null,
      langPreference = 'en'
    } = req.body || {};

    const ai = getGeminiClient();

    // If no API key is set, use the robust local analyzer
    if (!ai) {
      const localResult = analyzeCodeLocally(message, code, language, langPreference);
      return res.status(200).json(localResult);
    }

    // Prepare prompt for Gemini
    const systemPrompt = `
You are "Coding Vibes AI Mentor", a friendly, patient, and world-class programming tutor for students learning web development (HTML, CSS, JavaScript, etc.).
The student is asking for help or encountering an error. They might provide a text question, a voice transcript, an image screenshot of an error/code, or code from their editor.

Current Student Context:
- Lesson / Topic: ${lessonTitle}
- Language: ${language}
- Student's Request: "${message || 'Please check my code for errors and help me fix it.'}"

Student's Current Code:
\`\`\`${language}
${code || '(No code provided yet)'}
\`\`\`

Instructions:
1. Determine what the student wants:
   - CRITICAL VISION REQUIREMENT: If an image or screenshot is attached, carefully analyze its visual elements (colors, background, buttons, display layout, fonts, numbers, operators). If the student asks to build something based on the image (e.g., calculator, UI component, page layout), generate the EXACT replica matching the visual style, colors, and layout shown in that image! Do NOT return a generic template.
   - If they are asking how to learn something or asking for guidance/roadmaps (e.g. "how we learn css", "how to learn html", "how to learn javascript", "how to learn python", "roadmap", or Urdu equivalents):
     * Set type: "guidance".
     * Provide an encouraging, step-by-step roadmap (Step 1, Step 2, Step 3, Step 4).
     * Provide actionLink with:
       - CSS: { "label": "Start Lesson 1: Introduction to CSS", "courseSlug": "css", "lessonSlug": "introduction-to-css" }
       - HTML: { "label": "Start Lesson 1: Introduction to HTML", "courseSlug": "html", "lessonSlug": "introduction-to-html" }
       - JavaScript: { "label": "Start Lesson 1: Introduction to JavaScript", "courseSlug": "javascript", "lessonSlug": "introduction-to-javascript" }
       - Python: { "label": "Start Lesson 1: Introduction to Python", "courseSlug": "python", "lessonSlug": "introduction-to-python" }
     * IMPORTANT: For "guidance" queries, DO NOT return any code, code blocks, or preview buttons. Set "fixedCode": "", "files": [], "hasLivePreview": false, "hasZipDownload": false.
   - If they are asking to build a project (e.g. "How to make a calculator", "Build a calculator", "Build to-do list", or an uploaded screenshot of a project/calculator):
     * Set type: "project".
     * Explain the 3 layers (HTML structure, CSS styling, JS logic).
     * Provide complete, functional files (index.html, style.css, script.js) in the "files" array with hasLivePreview: true and hasZipDownload: true.
   - If they provided code with bugs or unclosed tags:
     * Set type: "debug".
     * Identify line-by-line what is missing, why it matters, and provide the fully corrected code in fixedCode and files with hasLivePreview: true.
2. If langPreference is 'ur' or message is in Urdu, explain in warm, friendly, clear Urdu script. Otherwise use clear, beginner-friendly English.
3. Ensure high quality and avoid generic empty placeholders.

Respond ONLY with valid JSON conforming to this schema:
{
  "type": "debug" | "project" | "guidance" | "qa",
  "title": "Clear descriptive title",
  "errorIdentified": "Short one-sentence summary of the answer or bug",
  "explanation": "Clear, friendly, formatted explanation (supports markdown bullet points and bold tags)",
  "fixedCode": "Complete working code ready to run or apply (leave empty string if type is guidance)",
  "detailedIssues": [
    { "line": 1, "issue": "Short issue title", "explanation": "Why this happens", "suggestion": "How to fix" }
  ],
  "files": [
    { "name": "index.html", "content": "...", "language": "html" },
    { "name": "style.css", "content": "...", "language": "css" },
    { "name": "script.js", "content": "...", "language": "javascript" }
  ],
  "hasLivePreview": false,
  "hasZipDownload": false,
  "tips": ["Actionable tip 1", "Actionable tip 2"],
  "actionLink": {
    "label": "Start Lesson 1: Introduction to CSS",
    "courseSlug": "css",
    "lessonSlug": "introduction-to-css"
  }
}
`;

    const parts: any[] = [];

    if (imageBase64 && typeof imageBase64 === 'string') {
      const mimeMatch = imageBase64.match(/^data:(image\/[a-zA-Z0-9.+-]+);base64,/);
      const mimeType = mimeMatch ? mimeMatch[1] : 'image/png';
      const cleanBase64 = imageBase64.replace(/^data:image\/[a-zA-Z0-9.+-]+;base64,/, '');
      parts.push({ inlineData: { mimeType, data: cleanBase64 } });
    }

    parts.push({ text: systemPrompt });

    const candidateModels = ['gemini-3.1-flash-lite', 'gemini-flash-latest', 'gemini-3.8-flash'];
    let responseText = '';

    for (const modelName of candidateModels) {
      try {
        const geminiPromise = ai.models.generateContent({
          model: modelName,
          contents: { parts },
          config: { responseMimeType: 'application/json', temperature: 0.2 }
        });
        const timeoutPromise = new Promise((_, reject) =>
          setTimeout(() => reject(new Error(`Timeout with ${modelName}`)), 25000)
        );
        const response: any = await Promise.race([geminiPromise, timeoutPromise]);
        if (response && response.text) {
          responseText = response.text.trim();
          break;
        }
      } catch (err: any) {
        console.warn(`Gemini model ${modelName} failed:`, err.message || err);
      }
    }

    let parsedData;
    try {
      if (!responseText) throw new Error('Empty response from AI models');
      parsedData = JSON.parse(responseText);
    } catch {
      parsedData = analyzeCodeLocally(message, code, language, langPreference, imageBase64);
    }

    return res.status(200).json(parsedData);
  } catch (error: any) {
    console.error('AI Mentor Error:', error);
    const fallback = analyzeCodeLocally(
      req.body?.message || '',
      req.body?.code || '',
      req.body?.language || 'html',
      req.body?.langPreference || 'en',
      req.body?.imageBase64 || null
    );
    return res.status(200).json(fallback);
  }
}
