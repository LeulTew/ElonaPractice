"use client"

import { useState, useEffect } from "react"
import { useParams, useSearchParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Clock, ChevronLeft, ChevronRight, CheckCircle } from "lucide-react"
import { supabase } from "@/lib/supabase"
import { MCQQuestion } from "@/components/questions/mcq-question"
import { FillBlankQuestion } from "@/components/questions/fill-blank-question"
import { ShortAnswerQuestion } from "@/components/questions/short-answer-question"
import { calculateScore } from "@/lib/grading"

interface Question {
  id: string
  content: string
  image_url?: string
  question_type: 'MCQ' | 'FILL_BLANK' | 'SHORT_ANSWER'
  options: string[]
  correct_answer: string
  hint?: string
  points: number
}

export default function ExamPage() {
  const params = useParams()
  const searchParams = useSearchParams()
  const router = useRouter()
  
  const examId = params.examId as string
  const mode = (searchParams.get('mode') || 'PRACTICE') as 'PRACTICE' | 'EXAM'
  
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<Map<string, { answer: string; isCorrect: boolean }>>(new Map())
  const [timeLeft, setTimeLeft] = useState(3600) // 60 minutes default
  const [loading, setLoading] = useState(true)
  const [examTitle, setExamTitle] = useState("")

  useEffect(() => {
    fetchExam()
  }, [examId])

  // Timer for exam mode
  useEffect(() => {
    if (mode === 'EXAM' && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            handleFinish()
            return 0
          }
          return prev - 1
        })
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [mode, timeLeft])

  async function fetchExam() {
    setLoading(true)
    
    // Fetch exam details
    const { data: examData } = await supabase
      .from('exams')
      .select('*')
      .eq('id', examId)
      .single()

    if (examData) {
      setExamTitle(examData.title)
      setTimeLeft(examData.duration_minutes * 60)
    }

    // Fetch questions
    const { data: questionsData } = await supabase
      .from('questions')
      .select('*')
      .eq('exam_id', examId)
      .order('order_index')

    if (questionsData) {
      setQuestions(questionsData)
    }
    
    setLoading(false)
  }

  function handleAnswer(questionId: string, answer: string, isCorrect: boolean) {
    setAnswers(new Map(answers.set(questionId, { answer, isCorrect })))
  }

  function handleNext() {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  function handlePrevious() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  function handleFinish() {
    const totalPoints = questions.reduce((sum, q) => sum + q.points, 0)
    const userAnswers = Array.from(answers.entries()).map(([questionId, data]) => {
      const question = questions.find(q => q.id === questionId)!
      return {
        questionId,
        answer: data.answer,
        isCorrect: data.isCorrect,
        points: question.points,
        pointsEarned: data.isCorrect ? question.points : 0
      }
    })

    const { score, percentage } = calculateScore(userAnswers, totalPoints)
    
    // Navigate to results
    router.push(`/exam/${examId}/results?score=${percentage}&mode=${mode}`)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent"></div>
          <p className="mt-4 text-gray-600">Loading exam...</p>
        </div>
      </div>
    )
  }

  if (questions.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">No questions found for this exam.</p>
        </div>
      </div>
    )
  }

  const currentQuestion = questions[currentIndex]
  const progress = ((currentIndex + 1) / questions.length) * 100
  const answeredCount = answers.size

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-indigo-900/20">
      <div className="mx-auto max-w-4xl px-4 py-8">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">{examTitle}</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {mode === 'PRACTICE' ? '✨ Practice Mode' : '⏱️ Exam Mode'}
            </p>
          </div>
          
          {mode === 'EXAM' && (
            <div className="flex items-center gap-2 rounded-xl bg-white dark:bg-gray-800 px-4 py-2">
              <Clock className="h-5 w-5 text-indigo-600" />
              <span className="font-mono text-lg font-bold">{formatTime(timeLeft)}</span>
            </div>
          )}
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-400">
              Question {currentIndex + 1} of {questions.length}
            </span>
            <span className="text-gray-600 dark:text-gray-400">
              {answeredCount} / {questions.length} answered
            </span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
            <motion.div
              className="h-full bg-gradient-to-r from-indigo-600 to-purple-600"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Question */}
        <motion.div
          key={currentQuestion.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="mb-6 rounded-2xl bg-white dark:bg-gray-800 p-6"
        >
          {currentQuestion.question_type === 'MCQ' && (
            <MCQQuestion
              question={currentQuestion}
              mode={mode}
              onAnswer={(answer, isCorrect) => handleAnswer(currentQuestion.id, answer, isCorrect)}
            />
          )}
          {currentQuestion.question_type === 'FILL_BLANK' && (
            <FillBlankQuestion
              question={currentQuestion}
              mode={mode}
              onAnswer={(answer, isCorrect) => handleAnswer(currentQuestion.id, answer, isCorrect)}
            />
          )}
          {currentQuestion.question_type === 'SHORT_ANSWER' && (
            <ShortAnswerQuestion
              question={currentQuestion}
              mode={mode}
              onAnswer={(answer, isCorrect) => handleAnswer(currentQuestion.id, answer, isCorrect)}
            />
          )}
        </motion.div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="flex items-center gap-2 rounded-xl bg-white dark:bg-gray-800 px-6 py-3 font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all"
          >
            <ChevronLeft className="h-5 w-5" />
            Previous
          </button>

          {currentIndex === questions.length - 1 ? (
            <button
              onClick={handleFinish}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-3 font-medium text-white hover:shadow-lg transition-all"
            >
              <CheckCircle className="h-5 w-5" />
              Finish Exam
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 font-medium text-white hover:shadow-lg transition-all"
            >
              Next
              <ChevronRight className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
