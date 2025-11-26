"use client"

import { useEffect, useState, Suspense } from "react"
import { useRouter, useSearchParams, useParams } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, ArrowLeft, ArrowRight, Download } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"

interface Question {
  id: string
  content: string
  question_type: string
  options: string[] | null
  correct_answer: string | string[] | Record<string, unknown>
  explanation: string
  order_index: number
  points: number
  metadata?: Record<string, unknown>
}

interface ExamAttempt {
  id: string
  score: number
  total_points: number
  answers: Record<string, unknown>
}



export default function ReviewPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-background"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" /></div>}>
      <ReviewContent />
    </Suspense>
  )
}

function ReviewContent() {
  const router = useRouter()
  const params = useParams()
  const searchParams = useSearchParams()
  const attemptId = searchParams.get('attemptId')
  const examId = params.examId as string

  const [attempt, setAttempt] = useState<ExamAttempt | null>(null)
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch attempt
        const { data: attemptData, error: attemptError } = await supabase
          .from('exam_attempts')
          .select('*')
          .eq('id', attemptId)
          .single()

        if (attemptError) throw attemptError
        setAttempt(attemptData)

        // Fetch questions
        const { data: questionsData, error: questionsError } = await supabase
          .from('questions')
          .select('*')
          .eq('exam_id', examId)
          .order('order_index', { ascending: true })

        if (questionsError) throw questionsError
        setQuestions(questionsData || [])
      } catch (error) {
        console.error('Error fetching review data:', error)
      } finally {
        setLoading(false)
      }
    }

    if (attemptId && examId) {
      fetchData()
    }
  }, [attemptId, examId])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    )
  }

  if (!attempt || questions.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-background">
        <h1 className="text-2xl font-bold">Review data not found</h1>
        <Button onClick={() => router.push('/dashboard')}>Return to Dashboard</Button>
      </div>
    )
  }

  const currentQuestion = questions[currentIndex]
  const userAnswer = attempt.answers?.[currentQuestion.id]
  const isCorrect = checkAnswer(currentQuestion, userAnswer)

  function checkAnswer(question: Question, answer: unknown) {
    if (!answer) return false
    const correct = question.correct_answer
    
    if (Array.isArray(correct) && Array.isArray(answer)) {
      return answer.length === correct.length && 
             answer.every((val: unknown) => correct.includes(val as string))
    }
    if (typeof correct === 'string' && typeof answer === 'string') {
      return answer.trim().toLowerCase() === correct.trim().toLowerCase()
    }
    return JSON.stringify(answer) === JSON.stringify(correct)
  }

  function renderAnswer(answer: unknown): React.ReactNode {
    if (answer === null || answer === undefined) return 'No answer provided'
    if (Array.isArray(answer)) return answer.join(', ')
    if (typeof answer === 'object') return JSON.stringify(answer)
    return String(answer)
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur sticky top-0 z-10 print:hidden">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => router.back()}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <h1 className="font-semibold text-lg hidden md:block">Exam Review</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" onClick={handlePrint} className="gap-2">
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Download PDF</span>
            </Button>
            <div className="text-sm text-muted-foreground hidden sm:block">
              Question {currentIndex + 1} of {questions.length}
            </div>
            <div className={`px-3 py-1 rounded-full text-sm font-medium ${
              isCorrect ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 
              'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
            }`}>
              {isCorrect ? 'Correct' : 'Incorrect'}
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 print:hidden">
          <div className="max-w-4xl mx-auto space-y-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="p-6 md:p-8 shadow-lg border-border/50">
                {/* Question Content */}
                <div className="prose dark:prose-invert max-w-none mb-8">
                  <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                    {currentQuestion.content}
                  </ReactMarkdown>
                  {typeof currentQuestion.metadata?.image_url === 'string' && (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img 
                      src={currentQuestion.metadata.image_url} 
                      alt="Question Diagram" 
                      className="mt-4 rounded-lg max-h-96 object-contain"
                    />
                  )}
                </div>

                {/* Answer Section */}
                <div className="space-y-6">
                  {/* User Answer */}
                  <div className={`p-4 rounded-lg border-2 ${
                    isCorrect ? 'border-green-500/50 bg-green-50 dark:bg-green-900/10' : 
                    'border-red-500/50 bg-red-50 dark:bg-red-900/10'
                  }`}>
                    <p className="text-sm font-medium mb-2">Your Answer:</p>
                    <div className="text-lg font-medium">
                      {renderAnswer(userAnswer)}
                    </div>
                  </div>

                  {/* Correct Answer (if wrong) */}
                  {!isCorrect && (
                    <div className="p-4 rounded-lg border-2 border-green-500/50 bg-green-50 dark:bg-green-900/10">
                      <p className="text-sm font-medium mb-2 text-green-700 dark:text-green-400">Correct Answer:</p>
                      <div className="text-lg font-medium">
                        {renderAnswer(currentQuestion.correct_answer)}
                      </div>
                    </div>
                  )}

                  {/* Explanation */}
                  <div className="bg-secondary/30 rounded-lg p-6 mt-8">
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Explanation
                    </h3>
                    <div className="prose dark:prose-invert text-sm">
                      <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                        {currentQuestion.explanation || "No explanation available."}
                      </ReactMarkdown>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-4">
            <Button
              variant="outline"
              onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
              disabled={currentIndex === 0}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            
            {currentIndex < questions.length - 1 ? (
              <Button
                onClick={() => setCurrentIndex(prev => Math.min(questions.length - 1, prev + 1))}
              >
                Next
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button
                onClick={() => router.push(`/exam/${examId}/results?attemptId=${attemptId}`)}
                variant="secondary"
              >
                Back to Results
              </Button>
            )}
          </div>
        </div>
        </main>

        {/* Sidebar */}
        <aside className="w-80 border-l border-border bg-card/30 hidden xl:block overflow-y-auto p-6 print:hidden">
          <h3 className="font-semibold mb-4">Questions</h3>
          <div className="grid grid-cols-5 gap-2">
            {questions.map((q, idx) => {
              const qAnswer = attempt?.answers?.[q.id]
              const qCorrect = checkAnswer(q, qAnswer)
              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`aspect-square rounded-lg flex items-center justify-center text-sm font-medium transition-colors ${
                    currentIndex === idx ? 'ring-2 ring-primary ring-offset-2' : ''
                  } ${
                    qCorrect 
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-900/50' 
                      : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/50'
                  }`}
                >
                  {idx + 1}
                </button>
              )
            })}
          </div>
        </aside>
      </div>

      {/* Print View */}
      <div className="hidden print:block p-8 space-y-12 bg-white text-black">
        <div className="text-center mb-8 border-b pb-8">
          <h1 className="text-3xl font-bold mb-2">Exam Result Report</h1>
          <p className="text-gray-600">Score: {attempt?.score} / {attempt?.total_points} ({Math.round(((attempt?.score || 0) / (attempt?.total_points || 1)) * 100)}%)</p>
        </div>
        
        {questions.map((q, idx) => {
          const qAnswer = attempt.answers?.[q.id]
          const qCorrect = checkAnswer(q, qAnswer)
          return (
            <div key={q.id} className="break-inside-avoid">
              <div className="flex items-start gap-4 mb-4">
                <span className="font-bold text-lg text-gray-500">Q{idx + 1}.</span>
                <div className="flex-1 prose max-w-none">
                  <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                    {q.content}
                  </ReactMarkdown>
                  {typeof q.metadata?.image_url === 'string' && (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img 
                      src={q.metadata.image_url} 
                      alt="Diagram" 
                      className="mt-4 max-h-64 object-contain"
                    />
                  )}
                </div>
              </div>

              <div className="ml-10 space-y-4">
                <div className={`p-3 rounded border ${qCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
                  <p className="text-xs font-bold uppercase mb-1 text-gray-500">Your Answer:</p>
                  <div className="font-medium">
                    {renderAnswer(qAnswer)}
                  </div>
                </div>

                {!qCorrect && (
                  <div className="p-3 rounded border border-green-200 bg-green-50">
                    <p className="text-xs font-bold uppercase mb-1 text-green-700">Correct Answer:</p>
                    <div className="font-medium">
                      {renderAnswer(q.correct_answer)}
                    </div>
                  </div>
                )}
              </div>
              <hr className="my-8 border-gray-200" />
            </div>
          )
        })}
      </div>
    </div>
  )
}
