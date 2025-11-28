"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Clock, 
  Trophy, 
  Target, 
  ArrowRight, 
  Activity,
  PlayCircle,
  BarChart2
} from "lucide-react"
import { supabase } from "@/lib/supabase"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface DashboardStats {
  totalAttempts: number
  avgScore: number
  totalTimeMinutes: number
  questionsAnswered: number
  recentAttempts: Array<{
    id: string
    score: number
    total_points: number
    time_spent_seconds: number
    started_at: string
    mode: string
    exam_id: string
  }>
}

export default function Dashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalAttempts: 0,
    avgScore: 0,
    totalTimeMinutes: 0,
    questionsAnswered: 0,
    recentAttempts: []
  })
  useEffect(() => {
    async function fetchStats() {
      try {
        // Fetch all exam attempts for the user
        const { data: attempts, error: attemptsError } = await supabase
          .from('exam_attempts')
          .select('id, score, total_points, time_spent_seconds, started_at, mode, exam_id')
          .order('started_at', { ascending: false })
        
        if (attemptsError) {
          console.error('Failed to fetch exam attempts:', attemptsError)
          return
        }

        if (!attempts || attempts.length === 0) {
          setStats({
            totalAttempts: 0,
            avgScore: 0,
            totalTimeMinutes: 0,
            questionsAnswered: 0,
            recentAttempts: []
          })
          return
        }

        // Calculate stats from attempts
        const totalAttempts = attempts.length
        const totalTimeMinutes = Math.round(attempts.reduce((acc, curr) => acc + (curr.time_spent_seconds || 0), 0) / 60)
        
        // Calculate average score
        const totalScorePercentage = attempts.reduce((acc, curr) => {
          const percentage = curr.total_points ? (curr.score / curr.total_points) * 100 : 0
          return acc + percentage
        }, 0)
        const avgScore = Math.round(totalScorePercentage / totalAttempts)

        // Fetch total questions answered
        // We get the count of user_answers for these attempts
        const attemptIds = attempts.map(a => a.id)
        const { count: questionsAnswered, error: answersError } = await supabase
          .from('user_answers')
          .select('*', { count: 'exact', head: true })
          .in('attempt_id', attemptIds)

        if (answersError) {
          console.error('Failed to fetch answers count:', answersError)
        }

        setStats({
          totalAttempts,
          avgScore,
          totalTimeMinutes,
          questionsAnswered: questionsAnswered || 0,
          recentAttempts: attempts.slice(0, 3)
        })

      } catch (error) {
        console.error('Failed to fetch dashboard stats:', error)
      }
    }

    fetchStats()
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Welcome back, Elona
          </h1>
          <p className="text-muted-foreground text-lg">
            Ready to master your next exam?
          </p>
        </div>

        {/* Stats Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        >
          <StatsCard
            title="Average Score"
            value={`${stats.avgScore}%`}
            icon={Trophy}
            description="Across all attempts"
            color="text-primary"
          />
          <StatsCard
            title="Questions Answered"
            value={stats.questionsAnswered}
            icon={Target}
            description="Total practice questions"
            color="text-secondary-foreground"
          />
          <StatsCard
            title="Time Spent"
            value={`${Math.floor(stats.totalTimeMinutes / 60)}h ${stats.totalTimeMinutes % 60}m`}
            icon={Clock}
            description="Total study time"
            color="text-accent"
          />
          <StatsCard
            title="Total Attempts"
            value={stats.totalAttempts}
            icon={Activity}
            description="Completed sessions"
            color="text-foreground"
          />
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Quick Actions */}
          <motion.div 
            variants={item}
            initial="hidden"
            animate="show"
            className="space-y-4"
          >
            <h2 className="text-2xl font-semibold tracking-tight">Quick Actions</h2>
            <div className="grid gap-4">
              <Link href="/courses">
                <Card className="group cursor-pointer transition-all hover:bg-muted/50 hover:border-primary/50">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <PlayCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">Start Practice</h3>
                      <p className="text-sm text-muted-foreground">Resume where you left off or start new</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </CardContent>
                </Card>
              </Link>
              
              <Link href="/dashboard/analytics">
                <Card className="group cursor-pointer transition-all hover:bg-muted/50 hover:border-primary/50">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                      <BarChart2 className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg group-hover:text-secondary-foreground transition-colors">View Analytics</h3>
                      <p className="text-sm text-muted-foreground">Detailed breakdown of your performance</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-secondary-foreground transition-colors" />
                  </CardContent>
                </Card>
              </Link>
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div 
            variants={item}
            initial="hidden"
            animate="show"
            className="space-y-4"
          >
            <h2 className="text-2xl font-semibold tracking-tight">Recent Activity</h2>
            {stats.recentAttempts.length > 0 ? (
              <Card className="overflow-hidden">
                <div className="max-h-[400px] overflow-y-auto">
                  <div className="divide-y divide-border">
                    {stats.recentAttempts.map((attempt) => (
                      <Link 
                        key={attempt.id} 
                        href={`/exam/${attempt.exam_id}/results?attemptId=${attempt.id}`}
                        className="block"
                      >
                        <div className="p-4 hover:bg-muted/50 transition-all group cursor-pointer">
                          <div className="flex items-start gap-3 sm:gap-4">
                            {/* Icon */}
                            <div className={`flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full transition-transform group-hover:scale-110 ${
                              attempt.mode === 'EXAM' 
                                ? 'bg-gradient-to-br from-red-500/10 to-orange-500/10 text-red-600 dark:from-red-500/20 dark:to-orange-500/20' 
                                : 'bg-gradient-to-br from-blue-500/10 to-cyan-500/10 text-blue-600 dark:from-blue-500/20 dark:to-cyan-500/20'
                            }`}>
                              {attempt.mode === 'EXAM' ? <Trophy className="h-5 w-5 sm:h-6 sm:w-6" /> : <Activity className="h-5 w-5 sm:h-6 sm:w-6" />}
                            </div>
                            
                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-2">
                                <div className="flex-1 min-w-0">
                                  <p className="font-semibold text-sm sm:text-base truncate group-hover:text-primary transition-colors">
                                    {attempt.mode === 'EXAM' ? 'Exam Mode' : 'Practice Mode'}
                                  </p>
                                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mt-1">
                                    <p className="text-xs sm:text-sm text-muted-foreground">
                                      {new Date(attempt.started_at).toLocaleDateString('en-US', { 
                                        month: 'short', 
                                        day: 'numeric', 
                                        year: 'numeric' 
                                      })}
                                    </p>
                                    <span className="hidden sm:inline text-muted-foreground">•</span>
                                    <p className="text-xs sm:text-sm text-muted-foreground">
                                      {new Date(attempt.started_at).toLocaleTimeString('en-US', { 
                                        hour: '2-digit', 
                                        minute: '2-digit' 
                                      })}
                                    </p>
                                  </div>
                                </div>
                                
                                {/* Score Badge */}
                                <div className="flex flex-col items-end gap-1 shrink-0">
                                  <div className={`px-2.5 py-1 rounded-full text-xs sm:text-sm font-bold ${
                                    Math.round((attempt.score / attempt.total_points) * 100) >= 70
                                      ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                      : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                                  }`}>
                                    {Math.round((attempt.score / attempt.total_points) * 100)}%
                                  </div>
                                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                                    <Clock className="h-3 w-3" />
                                    {Math.floor(attempt.time_spent_seconds / 60)}m
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </Card>
            ) : (
              <Card className="h-[300px] flex items-center justify-center text-muted-foreground border-dashed">
                <div className="text-center space-y-2">
                  <Activity className="h-8 w-8 mx-auto opacity-50" />
                  <p>No recent activity found</p>
                  <Button variant="link" asChild>
                    <Link href="/courses">Start your first exam</Link>
                  </Button>
                </div>
              </Card>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

interface StatsCardProps {
  title: string
  value: string | number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any
  description: string
  color: string
}

function StatsCard({ title, value, icon: Icon, description, color }: StatsCardProps) {
  return (
    <Card className="overflow-hidden transition-colors hover:border-primary/20">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className={`h-4 w-4 ${color}`} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground mt-1">
          {description}
        </p>
      </CardContent>
    </Card>
  )
}
