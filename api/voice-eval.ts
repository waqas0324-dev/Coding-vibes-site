// Vercel serverless function: POST /api/voice-eval
// Technical Communication Voice Explainer Evaluator
import { getGeminiClient } from './_lib/mentor';
import { analyzeVoiceExplanationLocally } from './_lib/voice';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      codeSnippet = '',
      title = 'Code Snippet',
      language = 'javascript',
      transcript = '',
      durationSeconds = 30,
      targetKeywords = []
    } = req.body || {};

    const ai = getGeminiClient();

    if (!ai || !transcript || transcript.trim().length < 10) {
      const localResult = analyzeVoiceExplanationLocally({
        codeSnippet, title, language, transcript, durationSeconds, targetKeywords
      });
      return res.status(200).json(localResult);
    }

    const prompt = `
You are a Staff Software Engineer & Technical Interviewer at a top technology company.
The student has just recorded their voice explaining a code snippet out loud to practice their verbal technical communication skills.

Topic/Snippet Title: ${title}
Language: ${language}
Target Keywords: ${targetKeywords.join(', ')}

Code Snippet:
\`\`\`${language}
${codeSnippet}
\`\`\`

Spoken Transcript (User's actual words):
"${transcript}"

Recording Duration: ${durationSeconds} seconds

Evaluate the student's explanation based on:
1. Technical Accuracy: Did they correctly identify how the code works, data structures, control flow, and edge cases?
2. Communication Clarity & Structure: Did they start with a high-level summary before descending into line-by-line details? Was the explanation articulate?
3. Domain Terminology: Did they correctly use industry-standard terms?
4. Actionable Coaching: Provide 2-3 genuine strengths and 2-3 concrete tips to speak like a senior engineer.

Respond ONLY with valid JSON matching this exact structure:
{
  "clarityScore": 85,
  "accuracyScore": 90,
  "overallScore": 88,
  "wordsPerMinute": 120,
  "pacingStatus": "Optimal",
  "pacingFeedback": "Great natural cadence with clear pauses between thoughts.",
  "keyConceptsFound": ["closure", "lexical scope"],
  "keyConceptsMissed": ["garbage collection"],
  "strengths": ["Clearly explained the return value."],
  "improvementTips": ["Mention memory management."],
  "summaryFeedback": "Overall strong technical explanation.",
  "modelExplanation": "Here is how a senior engineer would explain this in 45 seconds: ..."
}
`;

    const modelsToTry = ['gemini-2.5-flash', 'gemini-1.5-flash'];
    let responseText = '';

    for (const modelName of modelsToTry) {
      try {
        const geminiPromise = ai.models.generateContent({
          model: modelName,
          contents: prompt,
          config: { temperature: 0.3, responseMimeType: 'application/json' }
        });
        const timeoutPromise = new Promise((_, reject) =>
          setTimeout(() => reject(new Error(`Timeout with ${modelName}`)), 25000)
        );
        const response: any = await Promise.race([geminiPromise, timeoutPromise]);
        if (response && response.text) {
          responseText = response.text;
          break;
        }
      } catch (err) {
        console.warn(`Voice eval model ${modelName} failed, falling back:`, err);
      }
    }

    if (!responseText) {
      return res.status(200).json(analyzeVoiceExplanationLocally({
        codeSnippet, title, language, transcript, durationSeconds, targetKeywords
      }));
    }

    const parsed = JSON.parse(responseText);
    const wordCount = transcript.trim().split(/\s+/).filter(Boolean).length;
    parsed.wordCount = wordCount;
    parsed.durationSeconds = durationSeconds;
    if (!parsed.wordsPerMinute) {
      parsed.wordsPerMinute = Math.round(wordCount / Math.max(durationSeconds / 60, 0.1));
    }

    return res.status(200).json(parsed);
  } catch (err) {
    console.error('Error in /api/voice-eval:', err);
    return res.status(200).json(analyzeVoiceExplanationLocally({
      codeSnippet: req.body?.codeSnippet || '',
      title: req.body?.title || 'Code Snippet',
      language: req.body?.language || 'javascript',
      transcript: req.body?.transcript || '',
      durationSeconds: req.body?.durationSeconds || 30,
      targetKeywords: req.body?.targetKeywords || []
    }));
  }
}
