export interface VoiceEvalPayload {
  codeSnippet: string;
  title: string;
  language: string;
  transcript: string;
  durationSeconds: number;
  targetKeywords?: string[];
}

export function analyzeVoiceExplanationLocally(payload: VoiceEvalPayload) {
  const { codeSnippet, title, transcript, durationSeconds, targetKeywords = [] } = payload;
  const cleanTranscript = (transcript || '').trim();
  const words = cleanTranscript.length > 0 ? cleanTranscript.split(/\s+/).filter(Boolean) : [];
  const wordCount = words.length;
  
  // Calculate WPM (Words Per Minute)
  const durationMinutes = Math.max(durationSeconds / 60, 0.1);
  const wpm = Math.round(wordCount / durationMinutes);

  let pacingStatus: 'Slow' | 'Optimal' | 'Fast' = 'Optimal';
  let pacingFeedback = 'Great verbal cadence! You maintained an optimal interview speed of 110-150 words per minute.';
  if (wpm < 85) {
    pacingStatus = 'Slow';
    pacingFeedback = 'A bit deliberate or cautious. Aim for ~120-140 words per minute to project confidence and keep listeners engaged.';
  } else if (wpm > 170) {
    pacingStatus = 'Fast';
    pacingFeedback = 'A bit fast! Slow down slightly and take intentional pauses at major milestones to ensure the interviewer follows your logic.';
  }

  // Key concept detection
  const lowerTranscript = cleanTranscript.toLowerCase();
  const foundKeywords: string[] = [];
  const missedKeywords: string[] = [];

  targetKeywords.forEach(kw => {
    if (lowerTranscript.includes(kw.toLowerCase())) {
      foundKeywords.push(kw);
    } else {
      missedKeywords.push(kw);
    }
  });

  // Calculate scores
  const keywordRatio = targetKeywords.length > 0 ? foundKeywords.length / targetKeywords.length : 0.7;
  const lengthBonus = Math.min(wordCount / 60, 1.0); // ideal explanation is 50-150 words
  
  const accuracyScore = Math.min(Math.round(40 + keywordRatio * 50 + lengthBonus * 10), 98);
  const clarityScore = Math.min(Math.round(45 + (pacingStatus === 'Optimal' ? 30 : 15) + (lengthBonus * 20)), 96);
  const overallScore = Math.round((accuracyScore * 0.55) + (clarityScore * 0.45));

  const strengths: string[] = [];
  const improvementTips: string[] = [];

  if (wordCount >= 30) {
    strengths.push('Good verbal elaboration—avoided one-word answers and walked through mechanics.');
  }
  if (foundKeywords.length > 0) {
    strengths.push(`Naturally integrated key domain vocabulary: "${foundKeywords.slice(0, 3).join('", "')}".`);
  }
  if (pacingStatus === 'Optimal') {
    strengths.push('Cadence was steady and easy to follow without feeling rushed.');
  }

  if (missedKeywords.length > 0) {
    improvementTips.push(`Consider explicitly mentioning concepts like "${missedKeywords.slice(0, 3).join('", "')}" to demonstrate deeper technical fluency.`);
  }
  if (wordCount < 40) {
    improvementTips.push('Elaborate slightly more: start with a 1-sentence executive summary, walk through key lines, and conclude with edge cases.');
  } else {
    improvementTips.push('Frame your explanation with the PREP method (Point, Reason, Example, Point) or STAR framework.');
  }
  if (!lowerTranscript.includes('because') && !lowerTranscript.includes('therefore') && !lowerTranscript.includes('means that')) {
    improvementTips.push('Use causal connector phrases like "because", "which guarantees that", and "consequently" to explain the engineering rationale.');
  }

  return {
    clarityScore,
    accuracyScore,
    overallScore,
    wordsPerMinute: wpm,
    wordCount,
    durationSeconds,
    pacingStatus,
    pacingFeedback,
    keyConceptsFound: foundKeywords,
    keyConceptsMissed: missedKeywords,
    strengths: strengths.length > 0 ? strengths : ['Clear attempt at verbalizing code logic out loud.'],
    improvementTips: improvementTips.length > 0 ? improvementTips : ['Keep practicing with timed recordings to polish delivery under pressure.'],
    summaryFeedback: `You delivered a ${wordCount}-word spoken explanation covering ${foundKeywords.length} of ${targetKeywords.length || 1} key technical markers. Your verbal pacing was ${pacingStatus.toLowerCase()} (${wpm} WPM).`
  };
}

