"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface ShortAnswerQuestionProps {
  question: {
    id: string
    content: string
    image_url?: string
    correct_answer: string
    hint?: string
  }
  mode: 'PRACTICE' | 'EXAM'
  onAnswer: (answer: string, isCorrect: boolean) => void
}

export function ShortAnswerQuestion({ question, mode, onAnswer }: ShortAnswerQuestionProps) {
  const [answer, setAnswer] = useState("")
  const [showHint, setShowHint] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit() {
    if (!answer.trim()) return
    // For short answer, we can't auto-grade perfectly, so we'll mark it for manual review
    setSubmitted(true)
    onAnswer(answer, false) // Will be manually reviewed
  }

  return (
    <div className="space-y-6">
      {/* Question Content */}
      <div className="space-y-4">
        <p className="text-lg leading-relaxed">{question.content}</p>
        {question.image_url && (
          <img 
            src={question.image_url} 
            alt="Question diagram" 
            className="max-w-full h-auto rounded-xl"
          />
        )}
      </div>

      {/* Answer Textarea */}
      <textarea
        value={answer}
        onChange={(e) => !submitted && setAnswer(e.target.value)}
        disabled={submitted}
        placeholder="Type your answer here..."
        rows={6}
        className="w-full p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-indigo-500 focus:outline-none transition-colors resize-none"
      />

      {/* Hint Button (Practice Mode) */}
      {mode === 'PRACTICE' && question.hint && !submitted && (
        <button
          onClick={() => setShowHint(!showHint)}
          className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
        >
          {showHint ? 'Hide' : 'Show'} Hint
        </button>
      )}

      {/* Hint Display */}
      {showHint && question.hint && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800"
        >
          <p className="text-sm text-blue-900 dark:text-blue-100">💡 {question.hint}</p>
        </motion.div>
      )}

      {/* Submit Button */}
      {!submitted && (
        <button
          onClick={handleSubmit}
          disabled={!answer.trim()}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all"
        >
          Submit Answer
        </button>
      )}

      {/* Sample Answer (Practice Mode) */}
      {submitted && mode === 'PRACTICE' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800"
        >
          <p className="font-medium text-blue-900 dark:text-blue-100 mb-2">Sample Answer:</p>
          <p className="text-sm text-blue-800 dark:text-blue-200">{question.correct_answer}</p>
        </motion.div>
      )}

      {/* Manual Review Notice (Exam Mode) */}
      {submitted && mode === 'EXAM' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-xl bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800"
        >
          <p className="text-sm text-yellow-900 dark:text-yellow-100">
            ⏳ Your answer has been submitted and will be reviewed manually.
          </p>
        </motion.div>
      )}
    </div>
  )
}
