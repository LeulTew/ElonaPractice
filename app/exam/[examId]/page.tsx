"use client"

import React, { useState, useEffect, useCallback, Suspense } from "react"
import { useParams, useRouter, useSearchParams } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ChevronLeft, 
  ChevronRight, 
  Flag, 
  Clock, 
  Menu,
  CheckCircle2,
  Eye,
  AlertTriangle,
  X,
  ArrowUp,
  ArrowDown,
  ArrowRight,
  Bot,
  Copy,
  ExternalLink,
  Check
} from "lucide-react"
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { supabase } from "@/lib/supabase"
import { AIHelpButton } from "@/components/ui/ai-help-button"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { QuestionSidebar } from "./components/question-sidebar"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { ModeToggle } from "@/components/mode-toggle"

interface Question {
  id: string
  content: string
  question_type: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  correct_answer: any
  explanation?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  metadata?: any
  image_url?: string
  points: number
}

interface Exam {
  id: string
  title: string
  duration_minutes: number
  passing_score: number
}

export default function ExamPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-background"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" /></div>}>
      <ExamContent />
    </Suspense>
  )
}

function ExamContent() {
  const params = useParams()
  const searchParams = useSearchParams()
  const router = useRouter()
  const examId = params.examId as string
  const mode = searchParams.get('mode') as 'PRACTICE' | 'EXAM' || 'PRACTICE'

  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [answers, setAnswers] = useState<Record<string, any>>({})
  const [markedQuestions, setMarkedQuestions] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(false) // Default closed for mobile
  const [timeLeft, setTimeLeft] = useState<number>(0)
  const [examData, setExamData] = useState<Exam | null>(null)
  
  // New states
  const [showAnswer, setShowAnswer] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [showSubmitWarning, setShowSubmitWarning] = useState(false)
  const [showExitWarning, setShowExitWarning] = useState(false)
  const [showAIResponse, setShowAIResponse] = useState(false)
  const [aiResponse, setAiResponse] = useState('')
  const [copied, setCopied] = useState(false)

  // Navigation Guard
  useEffect(() => {
    if (mode === 'EXAM') {
      const handleBeforeUnload = (e: BeforeUnloadEvent) => {
        e.preventDefault()
        e.returnValue = ''
      }
      window.addEventListener('beforeunload', handleBeforeUnload)
      return () => window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [mode])

  useEffect(() => {
    // Open sidebar on desktop by default
    if (window.innerWidth >= 1024) {
      setSidebarOpen(true)
    }
    fetchExamData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [examId])

  useEffect(() => {
    if (examData && mode === 'EXAM' && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer)
            submitExam()
            return 0
          }
          return prev - 1
        })
      }, 1000)
      return () => clearInterval(timer)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [examData, mode, timeLeft])

  // Reset local states when question changes
  useEffect(() => {
    setShowAnswer(false)
    setShowHint(false)
  }, [currentQuestionIndex])

  const fetchExamData = useCallback(async () => {
    try {
      // Fetch exam details
      const { data: exam } = await supabase
        .from('exams')
        .select('*')
        .eq('id', examId)
        .single()

      if (exam) {
        setExamData(exam)
        setTimeLeft(exam.duration_minutes * 60)
      }

      // Fetch questions
      const { data: questionsData } = await supabase
        .from('questions')
        .select('*')
        .eq('exam_id', examId)
        .order('order_index', { ascending: true }) // Strict ordering

      if (questionsData) {
        console.log('Fetched questions:', questionsData.length, 'for exam:', examId)
        setQuestions(questionsData)
      } else {
        console.warn('No questions data returned for exam:', examId)
      }
    } catch (error) {
      console.error('Error fetching exam:', error)
    } finally {
      setLoading(false)
    }
  }, [examId])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleAnswer(answer: any) {
    const currentQuestion = questions[currentQuestionIndex]
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: answer
    }))
  }

  function toggleMark() {
    const currentQuestion = questions[currentQuestionIndex]
    setMarkedQuestions(prev => 
      prev.includes(currentQuestion.id)
        ? prev.filter(id => id !== currentQuestion.id)
        : [...prev, currentQuestion.id]
    )
  }

  function handleExit() {
    if (mode === 'EXAM') {
      setShowExitWarning(true)
    } else {
      router.push('/courses')
    }
  }

  function confirmExit() {
    router.push('/courses')
  }

  const copyToClipboard = () => {
    const currentQuestion = questions[currentQuestionIndex]
    const text = `Question: ${currentQuestion.content}\nOptions: ${Array.isArray(currentQuestion.options) ? currentQuestion.options.join(', ') : JSON.stringify(currentQuestion.options)}\nCorrect Answer: ${JSON.stringify(currentQuestion.correct_answer)}\nExplanation: ${currentQuestion.explanation}`
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const submitExam = useCallback(async () => {
    // Calculate score
    let score = 0
    let totalPoints = 0
    
    questions.forEach(q => {
      totalPoints += q.points
      const userAnswer = answers[q.id]
      const correctAnswer = q.correct_answer

      // Enhanced scoring logic
      let isCorrect = false
      if (Array.isArray(correctAnswer)) {
        // Multi-select or array based
        if (Array.isArray(userAnswer) && 
            userAnswer.length === correctAnswer.length && 
            userAnswer.every(val => correctAnswer.includes(val))) {
          isCorrect = true
        }
      } else if (typeof correctAnswer === 'string') {
        // String based (MCQ, Fill blank, etc)
        if (typeof userAnswer === 'string' && 
            userAnswer.trim().toLowerCase() === correctAnswer.trim().toLowerCase()) {
          isCorrect = true
        }
      } else {
        // Fallback for objects/other
        if (JSON.stringify(userAnswer) === JSON.stringify(correctAnswer)) {
          isCorrect = true
        }
      }

      if (isCorrect) {
        score += q.points
      }
    })

    // Save attempt
    try {
      // Try to save with answers first
      const { data: attempt, error } = await supabase
        .from('exam_attempts')
        .insert({
          exam_id: examId,
          mode,
          score,
          total_points: totalPoints,
          status: 'COMPLETED',
          time_spent_seconds: ((examData?.duration_minutes || 60) * 60) - timeLeft,
          answers: answers // Save user answers
        })
        .select()
        .single()

      if (error) throw error
      if (attempt) {
        router.push(`/exam/${examId}/results?attemptId=${attempt.id}`)
      }
    } catch (err) {
      console.warn('Failed to save with answers, trying without...', err)
      // Fallback: Save without answers (if column missing)
      const { data: attempt } = await supabase
        .from('exam_attempts')
        .insert({
          exam_id: examId,
          mode,
          score,
          total_points: totalPoints,
          status: 'COMPLETED',
          time_spent_seconds: ((examData?.duration_minutes || 60) * 60) - timeLeft
        })
        .select()
        .single()

      if (attempt) {
        router.push(`/exam/${examId}/results?attemptId=${attempt.id}`)
      }
    }
  }, [questions, answers, examId, mode, examData, timeLeft, router])

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="text-muted-foreground animate-pulse">Loading exam...</p>
        </div>
      </div>
    )
  }

  const currentQuestion = questions[currentQuestionIndex]
  const progress = ((Object.keys(answers).length) / questions.length) * 100
  const isLastQuestion = currentQuestionIndex === questions.length - 1

  const navigationControls = (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
        disabled={currentQuestionIndex === 0}
        className="gap-2 rounded-xl h-9 md:h-10 px-4 md:px-6 text-sm md:text-base"
      >
        <ChevronLeft className="h-4 w-4" />
        Previous
      </Button>

      <Button
        size="sm"
        onClick={() => {
          if (isLastQuestion) {
            if (mode === 'EXAM') {
              setShowSubmitWarning(true)
            } else {
              submitExam()
            }
          } else {
            setCurrentQuestionIndex(prev => Math.min(questions.length - 1, prev + 1))
          }
        }}
        className="gap-2 rounded-xl h-9 md:h-10 px-4 md:px-6 text-sm md:text-base"
      >
        {isLastQuestion ? "Finish" : "Next"}
        {!isLastQuestion && <ChevronRight className="h-4 w-4" />}
      </Button>
    </>
  )

  // Guard against undefined currentQuestion
  if (!currentQuestion) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="text-muted-foreground animate-pulse">Loading questions...</p>
        </div>
      </div>
    )
  }

  // Helper to check correctness for input feedback
  const isInputCorrect = (userVal: string, correctVal: string) => {
    if (!userVal) return false
    return userVal.trim().toLowerCase() === correctVal.trim().toLowerCase()
  }

  return (
    <div className="flex flex-col w-full bg-background overflow-hidden min-h-screen">
      {/* Mobile Backdrop */}
      {sidebarOpen && (
        <div 
          data-testid="sidebar-backdrop"
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex flex-1 w-full">
        {/* Sidebar */}
        <QuestionSidebar
          questions={questions}
          currentQuestionIndex={currentQuestionIndex}
          answers={answers}
          markedQuestions={markedQuestions}
          onSelectQuestion={setCurrentQuestionIndex}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          mobileOffset={mode === 'PRACTICE'}
        />

        {/* Main Content Wrapper */}
        <div
          className={cn(
            "flex-1 flex flex-col h-full min-w-0 relative overflow-hidden",
            mode === 'PRACTICE' && 'lg:h-screen'
          )}
        >
        {/* Top Bar - Fixed Height */}
        <header className="h-16 shrink-0 border-b border-border bg-card flex items-center justify-between px-4 md:px-6 z-10">
          <div className="flex items-center gap-4 min-w-0">
            <Button
              variant="ghost"
              size="icon"
                aria-label="Toggle sidebar"
                onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <div className="min-w-0">
              <h1 className="font-bold text-lg truncate">
                {examData?.title}
              </h1>
              <div className="flex items-center gap-2 text-xs text-muted-foreground whitespace-nowrap">
                <span className={cn(
                  "px-2 py-0.5 rounded-full font-medium",
                  mode === 'EXAM' ? "bg-red-500/10 text-red-500" : "bg-green-500/10 text-green-500"
                )}>
                  {mode === 'EXAM' ? 'Exam Mode' : 'Practice Mode'}
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline">{questions.length} Questions</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 md:gap-6 shrink-0">
            {mode === 'EXAM' && (
              <div className="flex items-center gap-2 font-mono text-lg font-medium">
                <Clock className={cn(
                  "h-5 w-5",
                  timeLeft < 300 ? "text-red-500 animate-pulse" : "text-primary"
                )} />
                <span className={timeLeft < 300 ? "text-red-500" : ""}>
                  {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
                </span>
              </div>
            )}
            
            <div className="w-32 hidden lg:block">
              <div className="flex justify-between text-xs mb-1 text-muted-foreground">
                <span>Progress</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            <div className="flex items-center gap-2">
              <ModeToggle />
              <Button 
                variant="ghost"
                onClick={handleExit}
                size="sm"
                className="text-muted-foreground hover:bg-red-600 hover:text-white transition-colors"
              >
                Exit
              </Button>
              <Button 
                onClick={() => mode === 'EXAM' ? setShowSubmitWarning(true) : submitExam()} 
                size="sm" 
                className="gap-2"
              >
                <CheckCircle2 className="h-4 w-4" />
                <span className="hidden sm:inline">Finish</span>
              </Button>
            </div>
          </div>
        </header>

        {/* Question Area - Scrollable */}
        <main className={cn(
          "flex-1 overflow-y-auto md:overflow-visible",
          mode === 'EXAM' ? "p-4 md:p-6 lg:p-10" : "p-4 md:p-8 lg:p-12",
          mode === 'PRACTICE' ? 'pb-32 md:pb-0' : ''
        )}>
          <div className={cn(
            "max-w-4xl mx-auto space-y-8",
            mode === 'EXAM' ? 'pb-0' : 'pb-0'
          )}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                {/* Question Type Badge */}
                <div className="mb-6 flex justify-center">
                  <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                    {currentQuestion.question_type?.replace(/_/g, ' ')}
                  </span>
                </div>

                <Card className={cn(
                  "border border-border rounded-2xl",
                  "md:max-h-none",
                  mode === 'EXAM' ? "p-6 md:p-8" : "p-8 md:p-12"
                )}>
                  <div className="flex justify-between items-start mb-8">
                    <div className="space-y-1">
                      <span className="text-4xl font-bold font-mono text-amber-500 block mb-2">
                        {String(currentQuestionIndex + 1).padStart(2, '0')}
                      </span>
                      <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">
                        Question {currentQuestionIndex + 1} of {questions.length}
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={toggleMark}
                      className={cn(
                        "gap-2 rounded-xl",
                        markedQuestions.includes(currentQuestion.id) 
                          ? "text-amber-500 hover:text-amber-600 bg-amber-50" 
                          : "text-slate-400 hover:text-slate-600"
                      )}
                    >
                      <Flag className="h-4 w-4" />
                      <span className="hidden sm:inline">
                        {markedQuestions.includes(currentQuestion.id) ? "Marked" : "Mark"}
                      </span>
                    </Button>
                  </div>



                  {/* Question Content with Markdown */}
                  <div className="prose dark:prose-invert max-w-none mb-8">
                    {currentQuestion.question_type === 'FILL_BLANK' ? (
                      <div className="text-lg leading-relaxed font-medium">
                        {currentQuestion.content.split('______').map((part: string, i: number, arr: string[]) => (
                          <React.Fragment key={i}>
                            <span>{part}</span>
                            {i < arr.length - 1 && (
                              <div className="inline-block relative mx-2 align-middle">
                                <Input
                                  className={cn(
                                    "inline-flex h-8 text-center border-b-2 border-t-0 border-x-0 rounded-none px-1 focus-visible:ring-0 focus-visible:border-primary bg-transparent transition-all min-w-[120px]",
                                    showAnswer && isInputCorrect(answers[currentQuestion.id], currentQuestion.correct_answer) && "border-green-500 text-green-600",
                                    showAnswer && !isInputCorrect(answers[currentQuestion.id], currentQuestion.correct_answer) && "border-red-500 text-red-600"
                                  )}
                                  style={{ 
                                    width: `${Math.max(120, (answers[currentQuestion.id]?.length || 0) * 12)}px`
                                  }}
                                  value={answers[currentQuestion.id] || ''}
                                  onChange={(e) => handleAnswer(e.target.value)}
                                  disabled={showAnswer}
                                  placeholder="Type answer..."
                                />
                                {showAnswer && (
                                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-popover text-popover-foreground text-xs px-2 py-1 rounded border z-10">
                                    {currentQuestion.correct_answer}
                                  </div>
                                )}
                              </div>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    ) : (
                      <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                        {currentQuestion.content}
                      </ReactMarkdown>
                    )}
                  </div>

                  {/* Dynamic Answer Area based on Type */}
                  {/* Dynamic Answer Area based on Type */}
                  <div className="space-y-4">
                    {/* MCQ & Multi-Select & True/False & Label Diagram */}
                    {['MCQ', 'MULTI_SELECT', 'TRUE_FALSE'].includes(currentQuestion.question_type) && (
                      <div className={cn(
                        "grid gap-6",
                        currentQuestion.metadata?.image_url ? "lg:grid-cols-2" : "grid-cols-1"
                      )}>
                        {/* Image Column for Diagram Questions */}
                        {currentQuestion.metadata?.image_url && (
                          <div className="rounded-xl overflow-hidden border border-border bg-muted/30 flex items-center justify-center p-4 h-fit relative min-h-[200px]">
                            <Image 
                              src={currentQuestion.metadata.image_url} 
                              alt="Question Diagram" 
                              width={800}
                              height={400}
                              className="w-full h-auto object-contain"
                              priority
                            />
                          </div>
                        )}

                        {/* Options Column */}
                        <div className="space-y-3">
                          {currentQuestion.options?.map((option: string, idx: number) => {
                            const isSelected = Array.isArray(answers[currentQuestion.id]) 
                              ? answers[currentQuestion.id].includes(option)
                              : answers[currentQuestion.id] === option
                              
                            const isCorrect = Array.isArray(currentQuestion.correct_answer)
                              ? currentQuestion.correct_answer.includes(option)
                              : currentQuestion.correct_answer === option
                              


                            return (
                              <div
                                key={idx}
                                onClick={() => {
                                  if (!showAnswer) {
                                    if (currentQuestion.question_type === 'MULTI_SELECT') {
                                      const current = answers[currentQuestion.id] || []
                                      const next = current.includes(option)
                                        ? current.filter((i: string) => i !== option)
                                        : [...current, option]
                                      handleAnswer(next)
                                    } else {
                                      handleAnswer(option)
                                    }
                                  }
                                }}
                                className={cn(
                                  "flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all",
                                  showAnswer && isCorrect ? "border-green-500 bg-green-500/10" : "",
                                  !showAnswer && isSelected ? "border-primary bg-primary/5 shadow-sm" : "",
                                  !showAnswer && !isSelected ? "border-border bg-card hover:border-primary/30" : ""
                                )}
                              >
                                <div className={cn(
                                  "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-colors mr-4",
                                  showAnswer && isCorrect ? "border-green-500 bg-green-500 text-white" : "",
                                  !showAnswer && isSelected ? "border-primary bg-primary text-primary-foreground" : "",
                                  !showAnswer && !isSelected ? "border-muted-foreground/30" : ""
                                )}>
                                  {(isSelected || (showAnswer && isCorrect)) && <div className="h-2 w-2 rounded-full bg-white" />}
                                </div>
                                <span className="text-base">{option}</span>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    )}

                    {/* Fill in Blank */}


                    {/* Short Answer / Case Study / Identify Error */}
                    {(() => {
                      const type = currentQuestion.question_type?.trim().toUpperCase()
                      // Explicitly check for text-based types OR fallback if not handled by others
                      const isTextQuestion = ['SHORT_ANSWER', 'CASE_STUDY', 'IDENTIFY_ERROR'].includes(type) || 
                                           !['MCQ', 'MULTI_SELECT', 'TRUE_FALSE', 'MATCHING', 'ORDER_SEQUENCE'].includes(type)
                      
                      if (isTextQuestion) {
                        console.log('Rendering Text Input for type:', type)
                      }
                      return isTextQuestion
                    })() && (
                      <div className="relative space-y-3">
                        <label className="block text-sm font-medium text-foreground">
                          Your Answer:
                        </label>
                        <Textarea
                          placeholder="Type your detailed explanation or answer here..."
                          value={answers[currentQuestion.id] || ''}
                          onChange={(e) => handleAnswer(e.target.value)}
                          disabled={showAnswer}
                          className={cn(
                            "min-h-[200px] text-base",
                            showAnswer && "border-primary bg-muted/50"
                          )}
                        />
                        {showAnswer && (
                          <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-2 border-green-500/50">
                            <p className="text-sm font-bold mb-2 text-green-900 dark:text-green-100">Sample Answer / Key Points:</p>
                            <p className="text-sm text-green-800 dark:text-green-200 whitespace-pre-wrap">{currentQuestion.correct_answer || "No answer key available."}</p>
                          </div>
                        )}
                      </div>
                    )}
                    
                    {/* Matching */}
                    {currentQuestion.question_type === 'MATCHING' && currentQuestion.metadata?.real_type !== 'ORDER_SEQUENCE' && (
                       <MatchingQuestion 
                         question={currentQuestion} 
                         answer={answers[currentQuestion.id] || {}} 
                         onAnswer={handleAnswer}
                         showAnswer={showAnswer}
                       />
                    )}

                    {/* Order Sequence */}
                    {(currentQuestion.question_type === 'ORDER_SEQUENCE' || currentQuestion.metadata?.real_type === 'ORDER_SEQUENCE') && (
                      <OrderSequenceQuestion
                        question={currentQuestion}
                        answer={answers[currentQuestion.id]}
                        onAnswer={handleAnswer}
                        showAnswer={showAnswer}
                      />
                    )}
                  </div>

                  {/* Practice Mode Actions */}
                  {mode === 'PRACTICE' && (
                    <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4 pt-6 border-t border-border">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setShowAnswer(!showAnswer)}
                        className="gap-2 rounded-lg text-xs sm:text-sm md:text-base h-9 sm:h-10 md:h-11 px-3 sm:px-4 md:px-6"
                      >
                        <Eye className="h-4 w-4" />
                        {showAnswer ? "Hide Answer" : "Show Answer"}
                      </Button>
                      <AIHelpButton 
                        questionId={currentQuestion.id}
                        questionText={currentQuestion.content}
                        imageUrl={currentQuestion.metadata?.image_url}
                        options={Array.isArray(currentQuestion.options) ? currentQuestion.options : null}
                        userAnswer={answers[currentQuestion.id]}
                        onAIResponse={(response) => {
                          setAiResponse(response)
                          setShowAIResponse(true)
                        }}
                      />
                      
                      <div className="relative">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setShowHint(!showHint)}
                          className="text-muted-foreground text-[11px] sm:text-xs md:text-sm tracking-wide uppercase h-8 sm:h-9"
                        >
                          Show Hint
                        </Button>
                        {showHint && (
                          <div className="absolute bottom-full left-0 mb-2 w-72 p-4 rounded-lg bg-popover border border-border text-sm z-20">
                            <p className="font-medium mb-1">Hint:</p>
                            <p className="text-muted-foreground">
                              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                              {currentQuestion.metadata?.hint || (currentQuestion as any).hint || "No hint available for this question."}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </Card>
              </motion.div>
            </AnimatePresence>

            {mode === 'PRACTICE' && (
              <div className="sticky bottom-0 hidden w-full lg:block bg-background/95 backdrop-blur border-t border-border px-4 lg:px-0 py-4">
                <div className="flex items-center justify-between gap-4">
                  {navigationControls}
                </div>
              </div>
            )}
          </div>
        </main>

        {mode === 'PRACTICE' && (
          <div className="fixed inset-x-0 bottom-0 bg-background/95 backdrop-blur border-t border-border px-4 py-4 lg:hidden z-40">
            <div className="mx-auto flex w-full max-w-4xl items-center justify-between gap-3">
              {navigationControls}
            </div>
          </div>
        )}
        {/* Submission Warning Modal */}
        <AnimatePresence>
          {showSubmitWarning && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowSubmitWarning(false)}
                data-testid="submit-warning-overlay"
                className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
              />
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="w-full max-w-md rounded-2xl bg-card border border-border p-6"
                >
                  <div className="flex items-center gap-4 mb-4 text-yellow-500">
                    <AlertTriangle className="h-8 w-8" />
                    <h3 className="text-xl font-bold text-foreground">Submit Exam?</h3>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <p className="text-muted-foreground">
                      You are about to submit your exam. Please confirm you want to proceed.
                    </p>
                    <div className="bg-secondary/50 rounded-lg p-4 space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Questions Answered:</span>
                        <span className="font-medium">{Object.keys(answers).length} / {questions.length}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Time Remaining:</span>
                        <span className="font-medium">{Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}</span>
                      </div>
                    </div>

                    <div className="flex gap-3 justify-end">
                      <Button variant="outline" onClick={() => setShowSubmitWarning(false)}>
                        Cancel
                      </Button>
                      <Button onClick={submitExam} className="bg-primary hover:bg-primary/90">
                        Confirm Submit
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>

        {/* AI Response Modal */}
        <AnimatePresence>
          {showAIResponse && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowAIResponse(false)}
                data-testid="ai-response-overlay"
                className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
              />
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  className="w-full max-w-lg rounded-2xl bg-card border border-indigo-200 p-6"
                >
                  <div className="flex items-center gap-4 mb-4 text-indigo-600">
                    <Bot className="h-8 w-8" />
                    <h3 className="text-xl font-bold text-foreground">AI Assistant</h3>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Button variant="outline" size="sm" onClick={copyToClipboard} className="gap-2">
                        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        {copied ? "Copied!" : "Copy Context"}
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => { copyToClipboard(); window.open('https://grok.com', '_blank'); }} className="gap-2">
                        <ExternalLink className="h-4 w-4" /> Grok
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => { copyToClipboard(); window.open('https://chat.openai.com', '_blank'); }} className="gap-2">
                        <ExternalLink className="h-4 w-4" /> ChatGPT
                      </Button>
                    </div>

                    {false ? (
                      <div className="flex flex-col items-center py-8 gap-4">
                        <div className="h-8 w-8 animate-spin rounded-full border-4 border-indigo-500 border-t-transparent" />
                        <p className="text-sm text-muted-foreground animate-pulse">Analyzing question...</p>
                      </div>
                    ) : (
                      <div className="bg-indigo-50/50 dark:bg-indigo-950/20 rounded-lg p-4 text-sm leading-relaxed">
                        <ReactMarkdown>{aiResponse}</ReactMarkdown>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-end">
                    <Button onClick={() => setShowAIResponse(false)} className="bg-indigo-600 hover:bg-indigo-700 text-white">
                      Close
                    </Button>
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>

        {/* Exit Warning Modal */}
        <AnimatePresence>
          {showExitWarning && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowExitWarning(false)}
                data-testid="exit-warning-overlay"
                className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
              />
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="w-full max-w-md rounded-2xl bg-card border border-border p-6"
                >
                  <div className="flex items-center gap-4 mb-4 text-destructive">
                    <AlertTriangle className="h-8 w-8" />
                    <h3 className="text-xl font-bold text-foreground">Exit Exam?</h3>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <p className="text-muted-foreground">
                      Are you sure you want to exit? Your progress will be lost.
                    </p>
                  </div>

                  <div className="flex gap-3 justify-end">
                    <Button variant="ghost" onClick={() => setShowExitWarning(false)}>
                      Cancel
                    </Button>
                    <Button onClick={confirmExit} variant="destructive">
                      Exit Exam
                    </Button>
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>

    {mode === 'EXAM' && (
      <footer className="h-16 shrink-0 border-t border-border bg-card flex items-center px-4 pt-0 pb-0 z-20 w-full">
        <div className="mx-auto flex w-full max-w-4xl items-center justify-between gap-3 md:gap-4 pt-0 pb-0">
          {navigationControls}
        </div>
      </footer>
    )}
  </div>
  )
}

interface MatchingQuestionProps {
  question: Question
  answer: Record<string, string>
  onAnswer: (answer: Record<string, string>) => void
  showAnswer: boolean
}

function MatchingQuestion({ question, answer, onAnswer, showAnswer }: MatchingQuestionProps) {
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null)
  const [shuffledRight] = useState<string[]>(() => {
    if (question.options) {
      const rights = (question.options as { right: string }[]).map((o) => o.right)
      return [...rights].sort(() => Math.random() - 0.5)
    }
    return []
  })

  const handleLeftClick = (left: string) => {
    if (showAnswer) return
    setSelectedLeft(left)
  }

  const handleRightClick = (right: string) => {
    if (showAnswer || !selectedLeft) return
    const newAnswer = { ...answer, [selectedLeft]: right }
    onAnswer(newAnswer)
    setSelectedLeft(null)
  }

  const handleRemovePair = (left: string) => {
    if (showAnswer) return
    const newAnswer = { ...answer }
    delete newAnswer[left]
    onAnswer(newAnswer)
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <h3 className="font-medium text-muted-foreground text-center mb-2">Items</h3>
          {question.options?.map((opt: { left: string, right: string }, idx: number) => {
            const isMatched = answer[opt.left] !== undefined
            const isSelected = selectedLeft === opt.left
            return (
              <div
                key={idx}
                onClick={() => !isMatched && handleLeftClick(opt.left)}
                className={cn(
                  "p-4 rounded-lg border-2 transition-all cursor-pointer relative",
                  isSelected ? "border-primary bg-primary/10" : "border-border bg-card",
                  isMatched ? "border-green-500/50 bg-green-500/5 opacity-50" : "hover:border-primary/50",
                  showAnswer && "cursor-default"
                )}
              >
                {opt.left}
                {isMatched && !showAnswer && (
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    <span className="text-xs bg-background px-2 py-1 rounded border shadow-sm max-w-[100px] truncate">
                      {answer[opt.left]}
                    </span>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation()
                        handleRemovePair(opt.left)
                      }}
                      aria-label={`Remove match for ${opt.left}`}
                      className="p-1 hover:bg-red-100 rounded-full text-red-500"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="space-y-3">
          <h3 className="font-medium text-muted-foreground text-center mb-2">Matches</h3>
          {shuffledRight.map((right: string, idx: number) => {
            const isMatched = Object.values(answer).includes(right)
            return (
              <div
                key={idx}
                onClick={() => handleRightClick(right)}
                className={cn(
                  "p-4 rounded-lg border-2 transition-all cursor-pointer",
                  selectedLeft && !isMatched ? "border-primary border-dashed bg-primary/5 animate-pulse" : "border-border bg-card",
                  isMatched ? "opacity-50 cursor-default" : "hover:border-primary/50",
                  showAnswer && "cursor-default"
                )}
              >
                {right}
              </div>
            )
          })}
        </div>
      </div>

      {showAnswer && question.correct_answer && typeof question.correct_answer === 'object' && (
        <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
          <h4 className="font-bold text-green-600 mb-2">Correct Matches:</h4>
          <div className="grid grid-cols-1 gap-2">
            {Object.entries(question.correct_answer).map(([left, right]) => (
              <div key={left} className="flex items-center gap-2 text-sm">
                <span className="font-medium">{left}</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
                <span>{right as string}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

interface OrderSequenceProps {
  question: Question
  answer: string[]
  onAnswer: (answer: string[]) => void
  showAnswer: boolean
}

function OrderSequenceQuestion({ question, answer, onAnswer, showAnswer }: OrderSequenceProps) {
  const [items, setItems] = useState<string[]>(() => {
    if (answer && answer.length > 0) return answer
    if (question.options) return [...question.options].sort(() => Math.random() - 0.5)
    return []
  })

  const moveItem = (index: number, direction: 'up' | 'down') => {
    if (showAnswer) return
    const newItems = [...items]
    if (direction === 'up' && index > 0) {
      [newItems[index], newItems[index - 1]] = [newItems[index - 1], newItems[index]]
    } else if (direction === 'down' && index < newItems.length - 1) {
      [newItems[index], newItems[index + 1]] = [newItems[index + 1], newItems[index]]
    }
    setItems(newItems)
    onAnswer(newItems)
  }

  const isCorrectOrder = JSON.stringify(items) === JSON.stringify(question.correct_answer)

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        {items.map((item, idx) => (
          <div 
            key={`${item}-${idx}`}
            className={cn(
              "flex items-center gap-4 p-4 rounded-lg border-2 bg-card transition-all",
              showAnswer 
                ? (question.correct_answer[idx] === item ? "border-green-500 bg-green-500/5" : "border-red-500 bg-red-500/5")
                : "border-border"
            )}
          >
            <div className="flex flex-col gap-1">
              <button
                onClick={() => moveItem(idx, 'up')}
                disabled={idx === 0 || showAnswer}
                aria-label={`Move ${item} up`}
                className="p-1 hover:bg-muted rounded disabled:opacity-30"
              >
                <ArrowUp className="h-4 w-4" />
              </button>
              <button
                onClick={() => moveItem(idx, 'down')}
                disabled={idx === items.length - 1 || showAnswer}
                aria-label={`Move ${item} down`}
                className="p-1 hover:bg-muted rounded disabled:opacity-30"
              >
                <ArrowDown className="h-4 w-4" />
              </button>
            </div>
            <div data-testid="order-item-label" className="flex-1 font-medium">{item}</div>
            <div className="text-2xl font-bold text-muted-foreground/20">
              {idx + 1}
            </div>
          </div>
        ))}
      </div>

      {showAnswer && !isCorrectOrder && (
        <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
          <h4 className="font-bold text-green-600 mb-2">Correct Order:</h4>
          <ol className="list-decimal list-inside space-y-1">
            {(question.correct_answer as string[]).map((item) => (
              <li key={item} className="text-sm">{item}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  )
}
