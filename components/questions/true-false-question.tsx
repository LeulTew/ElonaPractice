"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface TrueFalseQuestionProps {
  question: {
    id: string
    content: string
    correct_answer: boolean
    explanation?: string
  }
  mode: 'PRACTICE' | 'EXAM'
  onAnswer: (answer: boolean, isCorrect: boolean) => void
}

export function TrueFalseQuestion({ question, mode, onAnswer }: TrueFalseQuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const correctAnswer = question.correct_answer

  // State reset should be handled by key prop in parent

  function handleSelect(answer: boolean) {
    if (submitted && mode === 'PRACTICE') return
    setSelectedAnswer(answer)
  }

  function handleSubmit() {
    if (selectedAnswer === null) return
    
    const isCorrect = selectedAnswer === correctAnswer
    setSubmitted(true)
    onAnswer(selectedAnswer, isCorrect)
  }

  return (
    <div className="space-y-6">
      <div className="text-xl font-medium text-foreground">
        {question.content}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {[true, false].map((option) => {
          const isSelected = selectedAnswer === option
          const isCorrect = correctAnswer === option
          
          let borderColor = "border-white/10"
          let bgColor = "bg-card"
          
          if (submitted && mode === 'PRACTICE') {
            if (isCorrect) {
              borderColor = "border-green-500"
              bgColor = "bg-green-500/10"
            } else if (isSelected && !isCorrect) {
              borderColor = "border-red-500"
              bgColor = "bg-red-500/10"
            }
          } else if (isSelected) {
            borderColor = "border-primary"
            bgColor = "bg-primary/10"
          }

          return (
            <motion.button
              key={option.toString()}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleSelect(option)}
              className={cn(
                "flex flex-col items-center justify-center rounded-2xl border-2 p-8 transition-all",
                borderColor,
                bgColor
              )}
            >
              <div className={cn(
                "mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 transition-colors",
                isSelected ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground"
              )}>
                {option ? <Check className="h-8 w-8" /> : <X className="h-8 w-8" />}
              </div>
              <span className="text-2xl font-bold text-foreground">
                {option ? "TRUE" : "FALSE"}
              </span>
            </motion.button>
          )
        })}
      </div>

      {!submitted && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleSubmit}
          disabled={selectedAnswer === null}
          className="mt-4 w-full rounded-xl bg-primary px-6 py-3 font-bold text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
        >
          Submit Answer
        </motion.button>
      )}

      {submitted && mode === 'PRACTICE' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl bg-muted p-4"
        >
          <p className="font-medium">Explanation:</p>
          <p className="text-muted-foreground">{question.explanation || "No explanation provided."}</p>
        </motion.div>
      )}
    </div>
  )
}
