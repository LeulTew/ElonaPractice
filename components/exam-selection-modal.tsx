"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Zap, Clock, Sparkles, Timer, BookOpen, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { Card } from "@/components/ui/card"

interface Course {
  id: string
  title: string
  code: string
  description: string
}

interface Exam {
  id: string
  title: string
  description: string
  chapter_number: number | null
  duration_minutes: number
  passing_score: number
}

interface ExamSelectionModalProps {
  course: Course
  isOpen: boolean
  onClose: () => void
}

export function ExamSelectionModal({ course, isOpen, onClose }: ExamSelectionModalProps) {
  const router = useRouter()
  const [exams, setExams] = useState<Exam[]>([])
  const [mode, setMode] = useState<'PRACTICE' | 'EXAM'>('PRACTICE')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchExams() {
      setLoading(true)
      const { data, error } = await supabase
        .from('exams')
        .select('*')
        .eq('course_id', course.id)
        .order('chapter_number', { ascending: true, nullsFirst: false })

      if (!error && data) {
        setExams(data)
      }
      setLoading(false)
    }

    if (isOpen) {
      fetchExams()
    }
  }, [isOpen, course.id])

  function startExam(examId: string) {
    router.push(`/exam/${examId}?mode=${mode}`)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-hidden rounded-3xl bg-card border border-border"
            >
              {/* Header */}
              <div className="relative p-6 border-b border-border">
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 rounded-full p-2 hover:bg-secondary transition-colors"
                >
                  <X className="h-5 w-5 text-muted-foreground" />
                </button>
                <h2 className="text-2xl font-bold">{course.title}</h2>
                <p className="text-muted-foreground mt-1 font-mono text-sm">{course.code}</p>
              </div>

              {/* Mode Toggle */}
              <div className="p-6 border-b border-border bg-secondary/20">
                <div className="flex gap-2 p-1 bg-secondary rounded-xl">
                  <button
                    onClick={() => setMode('PRACTICE')}
                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                      mode === 'PRACTICE'
                        ? 'bg-background text-primary border border-primary/30'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Zap className="h-4 w-4" />
                    <span className="text-[13px] sm:text-sm">Practice Mode</span>
                  </button>
                  <button
                    onClick={() => setMode('EXAM')}
                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                      mode === 'EXAM'
                        ? 'bg-background text-primary border border-primary/30'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Clock className="h-4 w-4" />
                    <span className="text-[13px] sm:text-sm">Exam Mode</span>
                  </button>
                </div>
                <p className="text-sm text-muted-foreground mt-4 text-center flex items-center justify-center gap-2">
                  {mode === 'PRACTICE' 
                    ? <><Sparkles className="w-4 h-4 text-yellow-500" /> Practice with hints, instant feedback, and unlimited time</>
                    : <><Timer className="w-4 h-4 text-red-500" /> Timed exam simulation with final grading and analytics</>}
                </p>
              </div>

              {/* Exam List */}
              <div className="p-6 overflow-y-auto max-h-[400px]">
                {loading ? (
                  <div className="flex flex-col items-center justify-center py-12 gap-4">
                    <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                    <p className="text-muted-foreground">Loading exams...</p>
                  </div>
                ) : exams.length === 0 ? (
                  <div className="text-center py-12 text-muted-foreground">
                    No exams available for this course yet.
                  </div>
                ) : (
                  <div className="space-y-3">
                    {exams.map((exam, index) => (
                      <motion.div
                        key={exam.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Card 
                          onClick={() => startExam(exam.id)}
                          className="group cursor-pointer hover:border-primary/50 transition-colors"
                        >
                          <div className="p-4 flex items-center justify-between">
                            <div className="flex-1">
                              <h3 className="font-semibold group-hover:text-primary transition-colors">
                                {exam.title}
                              </h3>
                              {exam.description && (
                                <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
                                  {exam.description}
                                </p>
                              )}
                              <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground font-medium">
                                <span className="flex items-center gap-1 bg-secondary px-2 py-1 rounded-md">
                                  <Clock className="h-3 w-3" />
                                  {exam.duration_minutes} min
                                </span>
                                <span className="flex items-center gap-1 bg-secondary px-2 py-1 rounded-md">
                                  <BookOpen className="h-3 w-3" />
                                  Pass: {exam.passing_score}%
                                </span>
                              </div>
                            </div>
                            <div className="ml-4 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1">
                              <ArrowRight className="h-4 w-4" />
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
