"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Trophy, Clock, RotateCcw, Home } from "lucide-react"
import Link from "next/link"

export default function ResultsPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  
  const score = parseInt(searchParams.get('score') || '0')
  const mode = searchParams.get('mode') || 'PRACTICE'
  
  const passed = score >= 70
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-indigo-900/20 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl"
      >
        {/* Score Card */}
        <div className="mb-6 overflow-hidden rounded-3xl bg-white dark:bg-gray-800 p-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className={`mx-auto mb-6 inline-flex h-24 w-24 items-center justify-center rounded-full ${
              passed
                ? 'bg-gradient-to-br from-green-500 to-emerald-500'
                : 'bg-gradient-to-br from-orange-500 to-red-500'
            }`}
          >
            <Trophy className="h-12 w-12 text-white" />
          </motion.div>

          <h1 className="mb-2 text-4xl font-bold">
            {passed ? '🎉 Congratulations!' : '📚 Keep Practicing!'}
          </h1>
          
          <p className="mb-6 text-gray-600 dark:text-gray-400">
            {mode === 'EXAM' ? 'Exam Complete' : 'Practice Session Complete'}
          </p>

          <div className="mb-8">
            <div className="text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {score}%
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {passed ? 'You passed!' : `You need ${70 - score}% more to pass`}
            </p>
          </div>

          {/* Stats */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-gray-50 dark:bg-gray-700/50 p-4">
              <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400">
                <Clock className="h-5 w-5" />
                <span className="text-sm">Time Spent</span>
              </div>
              <p className="mt-2 text-2xl font-bold">--:--</p>
            </div>
            <div className="rounded-xl bg-gray-50 dark:bg-gray-700/50 p-4">
              <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400">
                <Trophy className="h-5 w-5" />
                <span className="text-sm">Status</span>
              </div>
              <p className="mt-2 text-2xl font-bold">{passed ? 'Passed' : 'Failed'}</p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/courses">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-white dark:bg-gray-800 px-6 py-4 font-medium hover:shadow-lg transition-all"
            >
              <Home className="h-5 w-5" />
              Back to Courses
            </motion.button>
          </Link>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => router.back()}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4 font-medium text-white hover:shadow-lg transition-all"
          >
            <RotateCcw className="h-5 w-5" />
            Retake Exam
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}
