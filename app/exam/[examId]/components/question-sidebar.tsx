"use client"

import { motion } from "framer-motion"
import { Flag } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

interface SidebarQuestion {
  id: string
  question_type: string
  originalIndex?: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

interface QuestionSidebarProps {
  questions: SidebarQuestion[]
  currentQuestionIndex: number
  answers: Record<string, unknown>
  markedQuestions: string[]
  onSelectQuestion: (index: number) => void
  isOpen: boolean
}

export function QuestionSidebar({
  questions,
  currentQuestionIndex,
  answers,
  markedQuestions,
  onSelectQuestion,
  isOpen
}: QuestionSidebarProps) {
  // Group questions by type
  const groupedQuestions = questions.reduce((acc, question, index) => {
    const type = question.question_type || "Other"
    // Format type for display (e.g., MULTI_SELECT -> Multi Select)
    const displayType = type.replace(/_/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())
    
    if (!acc[displayType]) {
      acc[displayType] = []
    }
    acc[displayType].push({ ...question, originalIndex: index })
    return acc
  }, {} as Record<string, SidebarQuestion[]>)

  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ 
        width: isOpen ? 320 : 0,
        opacity: isOpen ? 1 : 0
      }}
      className="fixed md:relative z-40 h-[calc(100vh-4rem)] border-r border-border bg-card overflow-hidden flex flex-col"
    >
      <div className="p-4 border-b border-border">
        <h3 className="font-semibold text-lg">Question Navigator</h3>
        <div className="flex gap-4 mt-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span>Answered</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-yellow-500" />
            <span>Marked</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-muted" />
            <span>Unseen</span>
          </div>
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-4 space-y-6">
          {Object.entries(groupedQuestions).map(([category, categoryQuestions]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-2">
                {category}
              </h4>
              <div className="grid grid-cols-5 gap-2">
                {(categoryQuestions as SidebarQuestion[]).map((q) => {
                  const isAnswered = answers[q.id] !== undefined
                  const isMarked = markedQuestions.includes(q.id)
                  const isCurrent = currentQuestionIndex === q.originalIndex

                  return (
                    <button
                      key={q.id}
                      onClick={() => onSelectQuestion(q.originalIndex || 0)}
                      className={cn(
                        "relative flex h-10 w-10 items-center justify-center rounded-lg text-sm font-medium transition-all hover:scale-105",
                        isCurrent 
                          ? "ring-2 ring-primary ring-offset-2 ring-offset-background z-10" 
                          : "",
                        isMarked
                          ? "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border border-yellow-500/50"
                          : isAnswered
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                      )}
                    >
                      {(q.originalIndex ?? 0) + 1}
                      {isMarked && (
                        <div className="absolute -top-1 -right-1">
                          <Flag className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                        </div>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </motion.div>
  )
}
