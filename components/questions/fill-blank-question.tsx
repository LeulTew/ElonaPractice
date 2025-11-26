
"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

import { Lightbulb, CheckCircle, XCircle } from "lucide-react"

interface FillBlankQuestionProps {
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

export function FillBlankQuestion({ question, mode, onAnswer }: FillBlankQuestionProps) {
  const [answer, setAnswer] = useState("")
  const [showHint, setShowHint] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit() {
    if (!answer.trim()) return
    const isCorrect = answer.trim().toLowerCase() === question.correct_answer.toLowerCase()
    setSubmitted(true)
    onAnswer(answer, isCorrect)
  }

  const isCorrect = submitted && answer.trim().toLowerCase() === question.correct_answer.toLowerCase()

  // Split content by ___ to create fill-in-the-blank
  const parts = question.content.split('___')

  return (
    <div className="space-y-6">
      {/* Question Content with Inline Input */}
      <div className="space-y-4">
        <div className="text-base md:text-lg leading-relaxed text-[#1C1917] dark:text-foreground">
          {parts.map((part, index) => (
            <span key={index}>
              {part}
              {index < parts.length - 1 && (
                <input
                  type="text"
                  value={answer}
                  onChange={(e) => !submitted && setAnswer(e.target.value)}
                  disabled={submitted}
                  className={`inline-block mx-2 px-3 py-1 min-w-[200px] border-b-2 bg-transparent focus:outline-none transition-colors ${
                    submitted
                      ? isCorrect
                        ? 'border-green-500 text-green-600'
                        : 'border-red-500 text-red-600'
                      : 'border-indigo-300 dark:border-indigo-600 focus:border-indigo-500'
                  }`}
                  placeholder="Type your answer..."
                />
              )}
            </span>
          ))}
        </div>

        {question.image_url && (
          <div className="relative w-full h-[260px] md:h-[300px] rounded-2xl overflow-hidden border border-slate-200">
            <Image 
              src={question.image_url} 
              alt="Question diagram" 
              fill
              className="object-contain"
            />
          </div>
        )}
      </div>

      {/* Hint Button (Practice Mode) */}
      {mode === 'PRACTICE' && question.hint && !submitted && (
        <button
          onClick={() => setShowHint(!showHint)}
          className="px-4 py-2 rounded-lg border border-slate-300 text-xs font-semibold uppercase tracking-wide text-slate-700 hover:border-amber-500 hover:text-amber-600"
        >
          {showHint ? 'Hide' : 'Show'} Hint
        </button>
      )}

      {/* Hint Display */}
      {showHint && question.hint && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-sm"
        >
          <div className="flex items-center gap-2 text-sm text-blue-900 dark:text-blue-100">
            <Lightbulb className="w-4 h-4" />
            <p>{question.hint}</p>
          </div>
        </motion.div>
      )}

      {/* Submit Button */}
      {!submitted && (
        <button
          onClick={handleSubmit}
          disabled={!answer.trim()}
          className="w-full py-3 rounded-xl bg-slate-900 text-white font-semibold uppercase tracking-wide hover:bg-amber-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Submit Answer
        </button>
      )}

      {/* Feedback */}
      {submitted && ( // Changed condition to just 'submitted' to show feedback in both modes if applicable
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-lg border ${
            isCorrect 
              ? 'bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-300' 
              : 'bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-300'
          }`}
        >
          <div className="flex items-center gap-2 font-medium">
            {isCorrect ? (
              <>
                <CheckCircle className="w-5 h-5" />
                <span>Correct!</span>
              </>
            ) : (
              <>
                <XCircle className="w-5 h-5" />
                <span>Incorrect. The answer is: {question.correct_answer}</span>
              </>
            )}
          </div>
        </motion.div>
      )}
    </div>
  )
}

