"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

interface MCQQuestionProps {
  question: {
    id: string
    content: string
    image_url?: string
    options: string[]
    correct_answer: string
    hint?: string
  }
  mode: 'PRACTICE' | 'EXAM'
  onAnswer: (answer: string, isCorrect: boolean) => void
}

export function MCQQuestion({ question, mode, onAnswer }: MCQQuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showHint, setShowHint] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleSelect(option: string) {
    if (submitted && mode === 'EXAM') return
    setSelectedAnswer(option)
  }

  function handleSubmit() {
    if (!selectedAnswer) return
    const isCorrect = selectedAnswer === question.correct_answer
    setSubmitted(true)
    onAnswer(selectedAnswer, isCorrect)
  }

  const isCorrect = submitted && selectedAnswer === question.correct_answer

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

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === option
          const isThisCorrect = option === question.correct_answer
          const showCorrect = submitted && mode === 'PRACTICE'

          return (
            <motion.button
              key={index}
              whileHover={{ scale: submitted ? 1 : 1.01 }}
              whileTap={{ scale: submitted ? 1 : 0.99 }}
              onClick={() => handleSelect(option)}
              disabled={submitted && mode === 'EXAM'}
              className={`w-full text-left p-4 rounded-xl transition-all ${
                isSelected
                  ? showCorrect
                    ? isThisCorrect
                      ? 'bg-green-100 dark:bg-green-900/30 border-2 border-green-500'
                      : 'bg-red-100 dark:bg-red-900/30 border-2 border-red-500'
                    : 'bg-indigo-100 dark:bg-indigo-900/30 border-2 border-indigo-500'
                  : showCorrect && isThisCorrect
                  ? 'bg-green-50 dark:bg-green-900/20 border-2 border-green-400'
                  : 'bg-gray-50 dark:bg-gray-700/50 border-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="flex-1">{option}</span>
                {showCorrect && isThisCorrect && (
                  <Check className="h-5 w-5 text-green-600" />
                )}
              </div>
            </motion.button>
          )
        })}
      </div>

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
          disabled={!selectedAnswer}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all"
        >
          Submit Answer
        </button>
      )}

      {/* Feedback (Practice Mode) */}
      {submitted && mode === 'PRACTICE' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-xl ${
            isCorrect
              ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800'
              : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
          }`}
        >
          <p className={`font-medium ${isCorrect ? 'text-green-900 dark:text-green-100' : 'text-red-900 dark:text-red-100'}`}>
            {isCorrect ? '✅ Correct!' : '❌ Incorrect'}
          </p>
        </motion.div>
      )}
    </div>
  )
}
