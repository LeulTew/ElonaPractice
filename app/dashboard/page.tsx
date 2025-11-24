"use client"

import { motion } from "framer-motion"
import { BookOpen, Clock, TrendingUp, Award } from "lucide-react"
import Link from "next/link"

interface KPICardProps {
  title: string
  value: string | number
  icon: React.ReactNode
  gradient: string
  delay: number
}

function KPICard({ title, value, icon, gradient, delay }: KPICardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className={`relative overflow-hidden rounded-2xl p-6 ${gradient}`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-white/80">{title}</p>
          <p className="mt-2 text-3xl font-bold text-white">{value}</p>
        </div>
        <div className="rounded-xl bg-white/20 p-3 backdrop-blur-sm">
          {icon}
        </div>
      </div>
      <motion.div
        className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-white/10"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </motion.div>
  )
}

export default function Dashboard() {
  // TODO: Fetch real data from Supabase
  const stats = {
    totalExams: 12,
    avgScore: 85,
    timeSpent: 240, // minutes
    streak: 5
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-indigo-900/20">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Welcome back, Elona! 👋
          </h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            Ready to ace your exams?
          </p>
        </motion.div>

        {/* KPI Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <KPICard
            title="Exams Taken"
            value={stats.totalExams}
            icon={<BookOpen className="h-6 w-6 text-white" />}
            gradient="bg-gradient-to-br from-blue-500 to-cyan-500"
            delay={0.1}
          />
          <KPICard
            title="Average Score"
            value={`${stats.avgScore}%`}
            icon={<Award className="h-6 w-6 text-white" />}
            gradient="bg-gradient-to-br from-purple-500 to-pink-500"
            delay={0.2}
          />
          <KPICard
            title="Time Spent"
            value={`${Math.floor(stats.timeSpent / 60)}h ${stats.timeSpent % 60}m`}
            icon={<Clock className="h-6 w-6 text-white" />}
            gradient="bg-gradient-to-br from-orange-500 to-red-500"
            delay={0.3}
          />
          <KPICard
            title="Day Streak"
            value={`${stats.streak} days`}
            icon={<TrendingUp className="h-6 w-6 text-white" />}
            gradient="bg-gradient-to-br from-green-500 to-emerald-500"
            delay={0.4}
          />
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid gap-6 md:grid-cols-2 mb-8"
        >
          <Link href="/courses">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 p-8 cursor-pointer"
            >
              <h3 className="text-2xl font-bold text-white mb-2">Start Practicing</h3>
              <p className="text-white/80">Choose a course and begin your exam prep</p>
              <motion.div
                className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-white/10"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </Link>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-600 to-rose-600 p-8 cursor-pointer"
          >
            <h3 className="text-2xl font-bold text-white mb-2">View Progress</h3>
            <p className="text-white/80">Track your performance and improvement</p>
            <motion.div
              className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-white/10"
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="rounded-2xl bg-white dark:bg-gray-800 p-6"
        >
          <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {/* TODO: Map real activity data */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50">
              <div>
                <p className="font-medium">Chemistry - Chapter 1 Exam</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Score: 92%</p>
              </div>
              <p className="text-sm text-gray-500">2 hours ago</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
