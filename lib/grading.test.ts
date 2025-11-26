import { describe, it, expect, vi } from 'vitest'
import { calculateScore, fuzzyMatch, saveExamAttempt } from './grading'

describe('Grading Utils', () => {
  describe('calculateScore', () => {
    it('should calculate correct score and percentage for all correct answers', () => {
      const answers = [
        { questionId: '1', answer: 'A', isCorrect: true, points: 10 },
        { questionId: '2', answer: 'B', isCorrect: true, points: 5 },
      ]
      const result = calculateScore(answers, 15)
      expect(result).toEqual({ score: 15, percentage: 100 })
    })

    it('should calculate correct score and percentage for mixed answers', () => {
      const answers = [
        { questionId: '1', answer: 'A', isCorrect: true, points: 10 },
        { questionId: '2', answer: 'B', isCorrect: false, points: 5 },
      ]
      const result = calculateScore(answers, 15)
      expect(result).toEqual({ score: 10, percentage: 67 }) // 10/15 = 66.66... -> 67
    })

    it('should handle zero total points', () => {
      const answers: { questionId: string; answer: string; isCorrect: boolean; points: number }[] = []
      const result = calculateScore(answers, 0)
      expect(result).toEqual({ score: 0, percentage: 0 })
    })

    it('should handle empty answers', () => {
      const result = calculateScore([], 10)
      expect(result).toEqual({ score: 0, percentage: 0 })
    })
  })

  describe('fuzzyMatch', () => {
    it('should match exact strings', () => {
      expect(fuzzyMatch('hello', 'hello')).toBe(true)
    })

    it('should match case insensitive', () => {
      expect(fuzzyMatch('Hello', 'hello')).toBe(true)
    })

    it('should ignore whitespace', () => {
      expect(fuzzyMatch('  hello  ', 'hello')).toBe(true)
    })

    it('should ignore punctuation', () => {
      expect(fuzzyMatch('hello!', 'hello')).toBe(true)
      expect(fuzzyMatch('hello.', 'hello')).toBe(true)
      expect(fuzzyMatch('hello, world', 'hello world')).toBe(true)
    })

    it('should not match different strings', () => {
      expect(fuzzyMatch('hello', 'world')).toBe(false)
    })
  })

  describe('saveExamAttempt', () => {
    it('should log attempt details (mock implementation)', async () => {
      const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
      await saveExamAttempt('exam-1', 'PRACTICE', [], 10, 10, 60)
      expect(consoleSpy).toHaveBeenCalledWith('Saving exam attempt:', expect.any(Object))
      consoleSpy.mockRestore()
    })
  })
})
