"use client"

import { useState, useEffect } from "react"
import { User, Mail, BookOpen, Trophy, Calendar, Settings } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { supabase } from "@/lib/supabase"

export default function ProfilePage() {
  const [stats, setStats] = useState({
    totalAttempts: 0,
    averageScore: 0,
    bestScore: 0,
    totalQuestions: 0
  })

  useEffect(() => {
    async function loadStats() {
      try {
        const { data: attempts } = await supabase
          .from('exam_attempts')
          .select('score, total_questions')
          .order('started_at', { ascending: false })

        if (attempts && attempts.length > 0) {
          const totalAttempts = attempts.length
          const avgScore = attempts.reduce((sum, a) => sum + (a.score || 0), 0) / totalAttempts
          const bestScore = Math.max(...attempts.map(a => a.score || 0))
          const totalQuestions = attempts.reduce((sum, a) => sum + (a.total_questions || 0), 0)

          setStats({
            totalAttempts,
            averageScore: Math.round(avgScore),
            bestScore,
            totalQuestions
          })
        }
      } catch (error) {
        console.error('Error fetching stats:', error)
      }
    }
    loadStats()
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground">
            Profile
          </h1>
          <p className="text-muted-foreground mt-2">Manage your account and view your progress</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <Card className="lg:col-span-1 p-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="w-12 h-12 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Elona Student</h2>
                <p className="text-sm text-muted-foreground flex items-center justify-center gap-2 mt-1">
                  <Mail className="w-4 h-4" />
                  student@elona.edu
                </p>
              </div>
              <Button variant="outline" className="w-full gap-2">
                <Settings className="w-4 h-4" />
                Edit Profile
              </Button>
            </div>
          </Card>

          {/* Stats Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card className="p-6 hover:border-primary/20 transition-colors">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-blue-500/10">
                  <BookOpen className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Attempts</p>
                  <p className="text-3xl font-bold">{stats.totalAttempts}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:border-primary/20 transition-colors">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-green-500/10">
                  <Trophy className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Best Score</p>
                  <p className="text-3xl font-bold">{stats.bestScore}%</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:border-primary/20 transition-colors">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-purple-500/10">
                  <Calendar className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Average Score</p>
                  <p className="text-3xl font-bold">{stats.averageScore}%</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:border-primary/20 transition-colors">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-amber-500/10">
                  <BookOpen className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Questions Answered</p>
                  <p className="text-3xl font-bold">{stats.totalQuestions}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
