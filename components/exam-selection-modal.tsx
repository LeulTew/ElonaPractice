"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Clock, BookOpen, Zap } from "lucide-react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"

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
    if (isOpen) {
      fetchExams()
    }
  }, [isOpen, course.id])

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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-hidden rounded-3xl bg-white dark:bg-gray-800"
            >
              {/* Header */}
              <div className="relative bg-gradient-to-br from-indigo-600 to-purple-600 p-6">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 rounded-full bg-white/20 p-2 hover:bg-white/30 transition-colors"
                >
                  <X className="h-5 w-5 text-white" />
                </button>
                <h2 className="text-2xl font-bold text-white">{course.title}</h2>
                <p className="text-white/80 mt-1">{course.code}</p>
              </div>

              {/* Mode Toggle */}
              <div className="p-6 border-b dark:border-gray-700">
                <div className="flex gap-2 p-1 bg-gray-100 dark:bg-gray-700 rounded-xl">
                  <button
                    onClick={() => setMode('PRACTICE')}
                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
                      mode === 'PRACTICE'
                        ? 'bg-white dark:bg-gray-600 text-indigo-600 dark:text-indigo-400 shadow-sm'
                        : 'text-gray-600 dark:text-gray-400'
                    }`}
                  >
                    <Zap className="inline h-4 w-4 mr-2" />
                    Practice Mode
                  </button>
                  <button
                    onClick={() => setMode('EXAM')}
                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
                      mode === 'EXAM'
                        ? 'bg-white dark:bg-gray-600 text-indigo-600 dark:text-indigo-400 shadow-sm'
                        : 'text-gray-600 dark:text-gray-400'
                    }`}
                  >
                    <Clock className="inline h-4 w-4 mr-2" />
                    Exam Mode
                  </button>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                  {mode === 'PRACTICE' 
                    ? '✨ Practice with hints and instant feedback'
                    : '⏱️ Timed exam with grading at the end'}
                </p>
              </div>

              {/* Exam List */}
              <div className="p-6 overflow-y-auto max-h-96">
                {loading ? (
                  <div className="text-center py-8 text-gray-500">Loading exams...</div>
                ) : exams.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">No exams available yet</div>
                ) : (
                  <div className="space-y-3">
                    {exams.map((exam, index) => (
                      <motion.button
                        key={exam.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => startExam(exam.id)}
                        className="w-full text-left p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 dark:hover:from-indigo-900/20 dark:hover:to-purple-900/20 transition-all group"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="font-semibold group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                              {exam.title}
                            </h3>
                            {exam.description && (
                              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                {exam.description}
                              </p>
                            )}
                            <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {exam.duration_minutes} min
                              </span>
                              <span className="flex items-center gap-1">
                                <BookOpen className="h-3 w-3" />
                                Pass: {exam.passing_score}%
                              </span>
                            </div>
                          </div>
                          <div className="ml-4 text-indigo-600 dark:text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity">
                            →
                          </div>
                        </div>
                      </motion.button>
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
