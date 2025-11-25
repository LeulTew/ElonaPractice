"use client"

import { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Trophy, Clock, RotateCcw, Home, Target, CheckCircle2, XCircle } from "lucide-react"
import Link from "next/link"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export default function ResultsPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const attemptId = searchParams.get('attemptId')
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [attempt, setAttempt] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchAttempt() {
      const { data } = await supabase
        .from('exam_attempts')
        .select('*, exam:exams(*)')
        .eq('id', attemptId)
        .single()
      
      if (data) {
        setAttempt(data)
      }
      setLoading(false)
    }

    if (attemptId) {
      fetchAttempt()
    }
  }, [attemptId])
  
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    )
  }

  if (!attempt) return null

  const passed = attempt.score >= (attempt.exam?.passing_score || 70)
  const percentage = Math.round((attempt.score / attempt.total_points) * 100) || 0
  
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-3xl"
      >
        <Card className="relative overflow-hidden border-border p-12 text-center shadow-2xl">
          {/* Background Effects */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className={cn(
              "absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full blur-[100px] opacity-10",
              passed ? "bg-green-500" : "bg-red-500"
            )} />
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
              className={cn(
                "mx-auto mb-8 inline-flex h-32 w-32 items-center justify-center rounded-full shadow-lg",
                passed ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
              )}
            >
              <Trophy className="h-16 w-16" />
            </motion.div>

            <h1 className="mb-2 text-5xl font-bold tracking-tight">
              {passed ? 'Outstanding!' : 'Keep Going!'}
            </h1>
            
            <p className="mb-10 text-xl text-muted-foreground">
              {attempt.mode === 'EXAM' ? 'Exam Session Completed' : 'Practice Session Completed'}
            </p>

            {/* Score Display */}
            <div className="mb-12 flex items-center justify-center gap-12">
              <div className="text-center">
                <div className={cn(
                  "text-7xl font-bold",
                  passed ? "text-green-500" : "text-red-500"
                )}>
                  {percentage}%
                </div>
                <p className="mt-2 text-sm font-medium text-muted-foreground uppercase tracking-wider">Total Score</p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-4 md:grid-cols-3 mb-12">
              <div className="rounded-2xl bg-secondary/50 p-4 border border-border">
                <div className="flex flex-col items-center gap-2">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                    <Clock className="h-6 w-6" />
                  </div>
                  <span className="text-sm text-muted-foreground">Time Taken</span>
                  <span className="text-xl font-bold">
                    {Math.floor(attempt.time_spent_seconds / 60)}m {attempt.time_spent_seconds % 60}s
                  </span>
                </div>
              </div>
              <div className="rounded-2xl bg-secondary/50 p-4 border border-border">
                <div className="flex flex-col items-center gap-2">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-500">
                    <Target className="h-6 w-6" />
                  </div>
                  <span className="text-sm text-muted-foreground">Points</span>
                  <span className="text-xl font-bold">{attempt.score} / {attempt.total_points}</span>
                </div>
              </div>
              <div className="rounded-2xl bg-secondary/50 p-4 border border-border">
                <div className="flex flex-col items-center gap-2">
                  <div className={cn(
                    "p-2 rounded-lg",
                    passed ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
                  )}>
                    {passed ? <CheckCircle2 className="h-6 w-6" /> : <XCircle className="h-6 w-6" />}
                  </div>
                  <span className="text-sm text-muted-foreground">Status</span>
                  <span className="text-xl font-bold">{passed ? 'Passed' : 'Failed'}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" asChild className="w-full md:w-auto gap-2">
                <Link href="/courses">
                  <Home className="h-5 w-5" />
                  Back to Courses
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                onClick={() => router.back()}
                className="w-full md:w-auto gap-2"
              >
                <RotateCcw className="h-5 w-5" />
                Retake Exam
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}
