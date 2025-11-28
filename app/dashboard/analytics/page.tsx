"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Target, Activity, TrendingUp } from "lucide-react"
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart as RechartsBarChart,
  Bar
} from "recharts"

interface ExamAttempt {
  id: string
  score: number
  total_points: number
  time_spent_seconds: number
  started_at: string
}

interface AnalyticsData {
  attempts: ExamAttempt[]
  kpis: {
    totalAttempts: number
    avgScore: number
    totalTimeMinutes: number
    questionsAnswered: number
    bestScore: number
  }
  charts: {
    scoreHistory: { attempt: number; score: number; date: string }[]
    timeDistribution: { range: string; count: number }[]
  }
}

export default function AnalyticsPage() {
  const [mode, setMode] = useState<"PRACTICE" | "EXAM">("PRACTICE")
  const [data, setData] = useState<AnalyticsData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      try {
        // Fetch attempts for the selected mode
        const { data: attempts, error } = await supabase
          .from('exam_attempts')
          .select('*')
          .eq('mode', mode)
          .order('started_at', { ascending: true })

        if (error) throw error

        if (!attempts || attempts.length === 0) {
          setData({
            attempts: [],
            kpis: { totalAttempts: 0, avgScore: 0, totalTimeMinutes: 0, questionsAnswered: 0, bestScore: 0 },
            charts: { scoreHistory: [], timeDistribution: [] }
          })
          setLoading(false)
          return
        }

        // Calculate KPIs
        const totalAttempts = attempts.length
        const totalTimeMinutes = Math.floor(attempts.reduce((acc, curr) => acc + (curr.time_spent_seconds || 0), 0) / 60)
        
        const scores = attempts.map(a => a.total_points ? (a.score / a.total_points) * 100 : 0)
        const avgScore = Math.round(scores.reduce((acc, curr) => acc + curr, 0) / totalAttempts)
        const bestScore = Math.round(Math.max(...scores))

        // Fetch questions answered count (approximate based on attempts for now to save bandwidth, or fetch properly)
        // For accurate count we'd need to query user_answers, but let's do a quick count if possible or separate query
        // Let's do a separate query for accuracy as per dashboard
        const attemptIds = attempts.map(a => a.id)
        const { data: answersData, error: answersError } = await supabase
          .from('user_answers')
          .select('question_id, user_answer')
          .in('attempt_id', attemptIds)

        if (answersError) throw answersError

        const answersMap: Record<string, unknown> = {}
        answersData?.forEach((a: { question_id: string; user_answer: unknown }) => {
          answersMap[a.question_id] = a.user_answer
        })
        const questionsAnswered = Object.keys(answersMap).length

        // Prepare Chart Data
        const scoreHistory = attempts.map((a: ExamAttempt, index: number) => ({
          attempt: index + 1,
          score: a.total_points ? Math.round((a.score / a.total_points) * 100) : 0,
          date: new Date(a.started_at).toLocaleDateString()
        }))

        // Time distribution (group by ranges: <10m, 10-30m, 30-60m, >60m)
        const timeRanges = { "<10m": 0, "10-30m": 0, "30-60m": 0, ">60m": 0 }
        attempts.forEach((a: ExamAttempt) => {
          const mins = (a.time_spent_seconds || 0) / 60
          if (mins < 10) timeRanges["<10m"]++
          else if (mins < 30) timeRanges["10-30m"]++
          else if (mins < 60) timeRanges["30-60m"]++
          else timeRanges[">60m"]++
        })
        const timeDistribution = Object.entries(timeRanges).map(([range, count]) => ({ range, count }))

        setData({
          attempts,
          kpis: {
            totalAttempts,
            avgScore,
            totalTimeMinutes,
            questionsAnswered: questionsAnswered || 0,
            bestScore
          },
          charts: {
            scoreHistory,
            timeDistribution
          }
        })

      } catch (error) {
        console.error("Error fetching analytics:", JSON.stringify(error, null, 2))
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [mode])

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground">Analytics</h1>
            <p className="text-muted-foreground text-lg">Track your performance and progress</p>
          </div>
          
          <Tabs value={mode} onValueChange={(v: string) => setMode(v as "PRACTICE" | "EXAM")} className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="PRACTICE">Practice Mode</TabsTrigger>
              <TabsTrigger value="EXAM">Exam Mode</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
          </div>
        ) : !data || data.attempts.length === 0 ? (
           <Card className="h-[300px] flex items-center justify-center text-muted-foreground border-dashed">
            <div className="text-center space-y-2">
              <Activity className="h-8 w-8 mx-auto opacity-50" />
              <p>No data available for {mode.toLowerCase()} mode</p>
            </div>
          </Card>
        ) : (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* KPI Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <KpiCard
                title="Total Attempts"
                value={data.kpis.totalAttempts}
                icon={Target}
                description="Sessions completed"
                color="text-blue-500"
              />
              <KpiCard
                title="Average Score"
                value={`${data.kpis.avgScore}%`}
                icon={TrendingUp}
                description={`Best: ${data.kpis.bestScore}%`}
                color="text-green-500"
              />
              <KpiCard
                title="Time Spent"
                value={`${Math.floor(data.kpis.totalTimeMinutes / 60)}h ${data.kpis.totalTimeMinutes % 60}m`}
                icon={Clock}
                description="Total study time"
                color="text-amber-500"
              />
              <KpiCard
                title="Questions"
                value={data.kpis.questionsAnswered}
                icon={Activity}
                description="Total answered"
                color="text-purple-500"
              />
            </div>

            {/* Charts Grid */}
            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Score History
                  </CardTitle>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data.charts.scoreHistory}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" opacity={0.1} />
                      <XAxis dataKey="attempt" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                      <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}%`} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: 'var(--card)', borderRadius: '8px', border: '1px solid var(--border)' }}
                        itemStyle={{ color: 'var(--foreground)' }}
                      />
                      <Line type="monotone" dataKey="score" stroke="var(--primary)" strokeWidth={2} dot={{ r: 4, fill: "var(--primary)" }} activeDot={{ r: 6 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Time Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsBarChart data={data.charts.timeDistribution}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" opacity={0.1} />
                      <XAxis dataKey="range" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                      <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: 'var(--card)', borderRadius: '8px', border: '1px solid var(--border)' }}
                        itemStyle={{ color: 'var(--foreground)' }}
                        cursor={{ fill: 'var(--muted)', opacity: 0.2 }}
                      />
                      <Bar dataKey="count" fill="var(--primary)" radius={[4, 4, 0, 0]} />
                    </RechartsBarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function KpiCard({ title, value, icon: Icon, description, color }: { title: string; value: string | number; icon: React.ElementType; description: string; color: string }) {
  return (
    <Card className="overflow-hidden hover:border-primary/20 transition-colors">
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
