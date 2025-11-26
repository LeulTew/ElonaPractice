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
}

export default function Dashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalAttempts: 0,
    avgScore: 0,
    totalTimeMinutes: 0,
    questionsAnswered: 0,
  })
  useEffect(() => {
    async function fetchStats() {
      // Fetch user stats
      const { data: statsData } = await supabase
        .from('user_stats')
        .select('*')
        .single()

      if (statsData) {
        setStats({
          totalAttempts: statsData.total_attempts || 0,
          avgScore: Math.round(statsData.avg_score || 0),
          totalTimeMinutes: statsData.total_time_minutes || 0,
          questionsAnswered: statsData.questions_answered || 0,
        })
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
            value={`${Math.round(stats.totalTimeMinutes / 60)}h ${stats.totalTimeMinutes % 60}m`}
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
            <Card className="h-[300px] flex items-center justify-center text-muted-foreground border-dashed">
              <div className="text-center space-y-2">
                <Activity className="h-8 w-8 mx-auto opacity-50" />
                <p>No recent activity found</p>
                <Button variant="link" asChild>
                  <Link href="/courses">Start your first exam</Link>
                </Button>
              </div>
            </Card>
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
