export function calculateScore(
  userAnswers: Array<{ questionId: string; answer: string; isCorrect: boolean; points: number }>,
  totalPoints: number
): { score: number; percentage: number } {
  const pointsEarned = userAnswers.reduce((sum, answer) => {
    return sum + (answer.isCorrect ? answer.points : 0)
  }, 0)

  const percentage = totalPoints > 0 ? Math.round((pointsEarned / totalPoints) * 100) : 0

  return {
    score: pointsEarned,
    percentage
  }
}

export function fuzzyMatch(userAnswer: string, correctAnswer: string): boolean {
  const normalize = (str: string) => str.trim().toLowerCase().replace(/[^\w\s]/g, '')
  return normalize(userAnswer) === normalize(correctAnswer)
}

export async function saveExamAttempt(
  examId: string,
  mode: 'PRACTICE' | 'EXAM',
  answers: Array<{ questionId: string; answer: string; isCorrect: boolean; pointsEarned: number }>,
  score: number,
  totalPoints: number,
  timeSpentSeconds: number
) {
  // TODO: Implement Supabase save
  console.log('Saving exam attempt:', {
    examId,
    mode,
    answers,
    score,
    totalPoints,
    timeSpentSeconds
  })
}
