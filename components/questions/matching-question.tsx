"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface MatchingQuestionProps {
  question: {
    id: string
    content: string
    metadata?: {
      pairs?: { left: string, right: string }[]
    }
  }
  mode: 'PRACTICE' | 'EXAM'
  onAnswer: (answer: Record<string, string>, isCorrect: boolean) => void
}

export function MatchingQuestion({ question, mode, onAnswer }: MatchingQuestionProps) {
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null)
  const [matches, setMatches] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  
  const correctPairs = question.metadata?.pairs || []
  const leftItems = correctPairs.map((p: { left: string }) => p.left)
  const rightItems = correctPairs.map((p: { right: string }) => p.right).sort(() => Math.random() - 0.5)

  // State reset should be handled by key prop in parent

  function handleLeftClick(item: string) {
    if (submitted && mode === 'PRACTICE') return
    if (matches[item]) {
      // Unmatch
      const newMatches = { ...matches }
      delete newMatches[item]
      setMatches(newMatches)
    } else {
      setSelectedLeft(item)
    }
  }

  function handleRightClick(item: string) {
    if (submitted && mode === 'PRACTICE') return
    if (!selectedLeft) return

    // Check if right item is already matched
    const isRightMatched = Object.values(matches).includes(item)
    if (isRightMatched) return

    setMatches(prev => ({
      ...prev,
      [selectedLeft]: item
    }))
    setSelectedLeft(null)
  }

  function handleSubmit() {
    if (Object.keys(matches).length !== leftItems.length) return

    let correctCount = 0
    correctPairs.forEach((p: { left: string, right: string }) => {
      if (matches[p.left] === p.right) correctCount++
    })

    const isCorrect = correctCount === leftItems.length
    setSubmitted(true)
    onAnswer(matches, isCorrect)
  }

  return (
    <div className="space-y-6">
      <div className="text-xl font-medium text-foreground">
        {question.content}
        <span className="ml-2 text-sm text-muted-foreground">(Match the pairs)</span>
      </div>

      <div className="flex justify-between gap-8">
        {/* Left Column */}
        <div className="flex-1 space-y-4">
          {leftItems.map((item: string) => {
            const isSelected = selectedLeft === item
            const isMatched = !!matches[item]
            
            let borderColor = "border-white/10"
            let bgColor = "bg-card"
            
            if (submitted && mode === 'PRACTICE') {
               const correctRight = correctPairs.find((p: { left: string, right: string }) => p.left === item)?.right
               if (matches[item] === correctRight) {
                 borderColor = "border-green-500"
                 bgColor = "bg-green-500/10"
               } else {
                 borderColor = "border-red-500"
                 bgColor = "bg-red-500/10"
               }
            } else if (isSelected) {
              borderColor = "border-primary"
              bgColor = "bg-primary/10"
            } else if (isMatched) {
              borderColor = "border-primary/50"
              bgColor = "bg-primary/5"
            }

            return (
              <motion.button
                key={item}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleLeftClick(item)}
                className={cn(
                  "w-full rounded-xl border p-4 text-left transition-all",
                  borderColor,
                  bgColor
                )}
              >
                {item}
              </motion.button>
            )
          })}
        </div>

        {/* Right Column */}
        <div className="flex-1 space-y-4">
          {rightItems.map((item: string) => {
            const isMatched = Object.values(matches).includes(item)
            
            let borderColor = "border-white/10"
            let bgColor = "bg-card"
            
            if (submitted && mode === 'PRACTICE') {
               // Find which left item matched this right item
               const left = Object.keys(matches).find(key => matches[key] === item)
               const correctRight = correctPairs.find((p: { left: string, right: string }) => p.left === left)?.right
               
               if (item === correctRight) {
                 borderColor = "border-green-500"
                 bgColor = "bg-green-500/10"
               } else {
                 borderColor = "border-red-500"
                 bgColor = "bg-red-500/10"
               }
            } else if (isMatched) {
              borderColor = "border-primary/50"
              bgColor = "bg-primary/5"
            }

            return (
              <motion.button
                key={item}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleRightClick(item)}
                className={cn(
                  "w-full rounded-xl border p-4 text-left transition-all",
                  borderColor,
                  bgColor
                )}
              >
                {item}
              </motion.button>
            )
          })}
        </div>
      </div>

      {!submitted && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleSubmit}
          disabled={Object.keys(matches).length !== leftItems.length}
          className="mt-4 w-full rounded-xl bg-primary px-6 py-3 font-bold text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
        >
          Submit Answer
        </motion.button>
      )}
    </div>
  )
}
