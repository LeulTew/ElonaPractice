"use client"

import { useState, useEffect } from "react"
import { QuestionCard } from "@/components/question-card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import questionsData from "@/lib/questions.json"

// Type definition matching the JSON structure
interface QuestionData {
  course: string
  sourceFile: string
  slideNumber: number
  content: string
  imageUrl?: string
}

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  if (!mounted) return null

  const currentQuestion: QuestionData = questionsData[currentIndex]
  const totalQuestions = questionsData.length

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalQuestions)
  }

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalQuestions) % totalQuestions)
  }

  // Map JSON data to component props
  const mappedQuestion = {
    id: `${currentIndex + 1}`,
    content: currentQuestion.content,
    image_url: currentQuestion.imageUrl,
    question_type: "OPEN", // Defaulting to OPEN for now as extracted from PPT
    options: []
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8 font-sans pb-20">
      <main className="max-w-4xl mx-auto space-y-8">
        <header className="text-center space-y-2 mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Elona Exam Practice</h1>
          <p className="text-muted-foreground">
            {currentQuestion.course} • Slide {currentQuestion.slideNumber}
          </p>
        </header>

        <div className="space-y-6">
          <QuestionCard 
            question={mappedQuestion} 
            courseName={currentQuestion.sourceFile.replace('.pptx', '')}
          />

          <div className="flex items-center justify-between max-w-3xl mx-auto pt-4">
            <Button 
              variant="outline" 
              onClick={handlePrevious}
              className="w-32"
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
            
            <span className="text-sm text-muted-foreground font-medium">
              {currentIndex + 1} / {totalQuestions}
            </span>

            <Button 
              variant="outline" 
              onClick={handleNext}
              className="w-32"
            >
              Next
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
