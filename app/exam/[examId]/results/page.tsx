"use client"

import { useEffect, useState, Suspense } from "react"
import { useRouter, useSearchParams, useParams } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, XCircle, Clock, Trophy, ArrowRight, RotateCcw } from "lucide-react"
import { motion } from "framer-motion"

interface ExamAttempt {
  id: string
  score: number
  total_points: number
  time_spent_seconds: number
  created_at: string
  answers: Record<string, unknown>
}

export default function ResultsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-background"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" /></div>}>
      <ResultsContent />
    </Suspense>
  )
}

function ResultsContent() {
  const router = useRouter()
  const params = useParams()
  const searchParams = useSearchParams()
  const attemptId = searchParams.get('attemptId')
  const examId = params.examId as string

  const [attempt, setAttempt] = useState<ExamAttempt | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchAttempt() {
      try {
        const { data, error } = await supabase
          .from('exam_attempts')
          .select('*')
          .eq('id', attemptId)
          .single()

        if (error) throw error
        setAttempt(data)
      } catch (error) {
        console.error('Error fetching attempt:', error)
      } finally {
        setLoading(false)
      }
    }

    if (attemptId) {
      fetchAttempt()
    }
  }, [attemptId])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    )
  }

  if (!attempt) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-background">
        <h1 className="text-2xl font-bold">Result not found</h1>
        <Button onClick={() => router.push('/dashboard')}>Return to Dashboard</Button>
      </div>
    )
  }

  const percentage = Math.round((attempt.score / attempt.total_points) * 100) || 0
  const minutes = Math.floor(attempt.time_spent_seconds / 60)
  const seconds = attempt.time_spent_seconds % 60

  return (
    <div className="min-h-screen bg-background p-4 md:p-8 flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl w-full space-y-8"
      >
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold bg-linear-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            Exam Completed!
          </h1>
          <p className="text-muted-foreground">Here is how you performed</p>
        </div>

        <Card className="p-8 border-border bg-card/50 backdrop-blur">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Score */}
            <div className="flex flex-col items-center p-4 bg-secondary/20 rounded-xl">
              <Trophy className="w-8 h-8 text-yellow-500 mb-2" />
              <span className="text-sm text-muted-foreground">Score</span>
              <span className="text-3xl font-bold">{percentage}%</span>
              <span className="text-xs text-muted-foreground">{attempt.score} / {attempt.total_points} pts</span>
            </div>

            {/* Time */}
            <div className="flex flex-col items-center p-4 bg-secondary/20 rounded-xl">
              <Clock className="w-8 h-8 text-blue-500 mb-2" />
              <span className="text-sm text-muted-foreground">Time Taken</span>
              <span className="text-3xl font-bold">{minutes}m {seconds}s</span>
            </div>

            {/* Status */}
            <div className="flex flex-col items-center p-4 bg-secondary/20 rounded-xl">
              {percentage >= 70 ? (
                <CheckCircle className="w-8 h-8 text-green-500 mb-2" />
              ) : (
                <XCircle className="w-8 h-8 text-red-500 mb-2" />
              )}
              <span className="text-sm text-muted-foreground">Status</span>
              <span className={`text-3xl font-bold ${percentage >= 70 ? 'text-green-500' : 'text-red-500'}`}>
                {percentage >= 70 ? 'Passed' : 'Failed'}
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => router.push('/dashboard')}
              className="gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Back to Dashboard
            </Button>
            <Button 
              size="lg" 
              onClick={() => router.push(`/exam/${examId}/review?attemptId=${attemptId}`)}
              className="gap-2 bg-indigo-600 hover:bg-indigo-700 text-white"
            >
              Review Answers
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}
