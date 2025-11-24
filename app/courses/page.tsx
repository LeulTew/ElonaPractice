"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FlaskConical } from "lucide-react"
import { ExamSelectionModal } from "@/components/exam-selection-modal"
import { supabase } from "@/lib/supabase"

interface Course {
  id: string
  title: string
  code: string
  description: string
  thumbnail_url?: string
}

export default function CoursesPage() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null)
  const [courses, setCourses] = useState<Course[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchCourses()
  }, [])

  async function fetchCourses() {
    const { data, error } = await supabase
      .from('courses')
      .select('*')
    
    if (data) {
      setCourses(data)
    }
    if (error) {
      console.error('Error fetching courses:', error)
    }
    setLoading(false)
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent"></div>
          <p className="mt-4 text-gray-600">Loading courses...</p>
        </div>
      </div>
    )
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
            Your Courses
          </h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            Select a course to start practicing
          </p>
        </motion.div>

        {/* Course Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              onClick={() => setSelectedCourse(course)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                {/* Icon */}
                <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 p-3">
                  <FlaskConical className="h-6 w-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  {course.code}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {course.description}
                </p>

                {/* Hover indicator */}
                <motion.div
                  className="mt-4 flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                >
                  Start practicing →
                </motion.div>
              </div>

              {/* Decorative element */}
              <motion.div
                className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Exam Selection Modal */}
      {selectedCourse && (
        <ExamSelectionModal
          course={selectedCourse}
          isOpen={!!selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}
    </div>
  )
}
