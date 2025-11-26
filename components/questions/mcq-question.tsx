"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, CheckCircle, XCircle, Lightbulb } from "lucide-react"
import Image from "next/image"

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
        <p className="text-base md:text-lg leading-relaxed text-[#1C1917] dark:text-foreground font-medium">
          {question.content}
        </p>
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
              className={`w-full text-left p-4 rounded-2xl transition-colors border ${
                isSelected
                  ? showCorrect
                    ? isThisCorrect
                      ? 'bg-green-50 border-green-500 ring-4 ring-green-500/20'
                      : 'bg-red-50 border-red-500 ring-4 ring-red-500/20'
                    : 'bg-amber-50 border-amber-500 ring-4 ring-amber-500/30'
                  : showCorrect && isThisCorrect
                  ? 'bg-green-50 border-green-500'
                  : 'bg-white border-slate-200 hover:border-amber-400'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="flex-1 font-medium text-slate-700">{option}</span>
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
          className="px-4 py-2 rounded-lg border border-slate-300 text-sm uppercase tracking-wide text-slate-700 font-semibold hover:border-amber-500 hover:text-amber-600 transition-colors"
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
          <div className="flex items-center gap-2 text-sm text-blue-900">
            <Lightbulb className="w-4 h-4 text-blue-500" />
            <p>{question.hint}</p>
          </div>
        </motion.div>
      )}

      {/* Submit Button */}
      {!submitted && (
        <button
          onClick={handleSubmit}
          disabled={!selectedAnswer}
          className="w-full py-4 rounded-xl bg-slate-900 text-white font-semibold text-base uppercase tracking-wide hover:bg-amber-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Submit Answer
        </button>
      )}

      {/* Feedback */}
      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-xl ${
            isCorrect
              ? 'bg-green-50 border border-green-200'
              : 'bg-red-50 border border-red-200'
          }`}
        >
          <div className="flex items-center gap-2 font-medium font-mono">
            {isCorrect ? (
              <>
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="text-green-900 text-lg">CORRECT</span>
              </>
            ) : (
              <>
                <XCircle className="w-6 h-6 text-red-600" />
                <span className="text-red-900 text-lg">INCORRECT</span>
              </>
            )}
          </div>
        </motion.div>
      )}
    </div>
  )
}
