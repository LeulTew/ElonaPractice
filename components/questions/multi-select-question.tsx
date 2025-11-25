"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface MultiSelectQuestionProps {
  question: {
    id: string
    content: string
    options: string[]
    correct_answer: string[]
    explanation?: string
  }
  mode: 'PRACTICE' | 'EXAM'
  onAnswer: (answer: string[], isCorrect: boolean) => void
}

export function MultiSelectQuestion({ question, mode, onAnswer }: MultiSelectQuestionProps) {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)

  const options = question.options
  const correctAnswers = question.correct_answer

  // State reset should be handled by key prop in parent

  function toggleOption(option: string) {
    if (submitted && mode === 'PRACTICE') return

    setSelectedOptions(prev => {
      if (prev.includes(option)) {
        return prev.filter(o => o !== option)
      } else {
        return [...prev, option]
      }
    })
  }

  function handleSubmit() {
    if (selectedOptions.length === 0) return
    
    const isCorrect = 
      selectedOptions.length === correctAnswers.length &&
      selectedOptions.every(o => correctAnswers.includes(o))

    setSubmitted(true)
    onAnswer(selectedOptions, isCorrect)
  }

  return (
    <div className="space-y-6">
      <div className="text-xl font-medium text-foreground">
        {question.content}
        <span className="ml-2 text-sm text-muted-foreground">(Select all that apply)</span>
      </div>

      <div className="grid gap-3">
        {options.map((option, index) => {
          const isSelected = selectedOptions.includes(option)
          const isCorrect = correctAnswers.includes(option)
          
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
              key={index}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => toggleOption(option)}
              className={cn(
                "relative flex w-full items-center rounded-xl border p-4 text-left transition-all",
                borderColor,
                bgColor
              )}
            >
              <div className={cn(
                "mr-4 flex h-6 w-6 items-center justify-center rounded-md border transition-colors",
                isSelected ? "bg-primary border-primary text-primary-foreground" : "border-muted-foreground"
              )}>
                {isSelected && <Check className="h-4 w-4" />}
              </div>
              <span className="text-foreground">{option}</span>
            </motion.button>
          )
        })}
      </div>

      {!submitted && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleSubmit}
          disabled={selectedOptions.length === 0}
          className="mt-4 rounded-xl bg-primary px-6 py-2 font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
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
