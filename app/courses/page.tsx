"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FlaskConical, ArrowRight } from "lucide-react"
import { ExamSelectionModal } from "@/components/exam-selection-modal"
import { supabase } from "@/lib/supabase"
import { Card, CardContent } from "@/components/ui/card"

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

    fetchCourses()
  }, [])

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="text-muted-foreground animate-pulse">Loading courses...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-2"
        >
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Available Courses
          </h1>
          <p className="text-xl text-muted-foreground">
            Select a course to start your mastery journey.
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
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedCourse(course)}
            >
              <Card className="group relative cursor-pointer overflow-hidden h-full transition-all hover:shadow-lg hover:border-primary/50">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <FlaskConical className="h-7 w-7" />
                  </div>

                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-sm font-mono text-muted-foreground mb-4">
                    {course.code}
                  </p>
                  <p className="text-muted-foreground mb-8 flex-grow">
                    {course.description}
                  </p>

                  <div className="flex items-center gap-2 text-primary font-semibold group-hover:translate-x-1 transition-transform">
                    Start Practicing <ArrowRight className="w-5 h-5" />
                  </div>
                </CardContent>
              </Card>
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
