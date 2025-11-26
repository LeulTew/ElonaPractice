"use client"

import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AIHelpButton } from "@/components/ui/ai-help-button"
import { Badge } from "@/components/ui/badge"

interface QuestionCardProps {
  question: {
    id: string
    content: string
    image_url?: string | null
    question_type: string
    options?: string[] | null
  }
  courseName?: string
}

export function QuestionCard({ question, courseName }: QuestionCardProps) {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
        <div className="space-y-1">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {courseName || "Question"}
          </CardTitle>
          <Badge variant="secondary" className="text-xs">
            {question.question_type}
          </Badge>
        </div>
        <AIHelpButton 
          questionId={question.id}
          questionText={question.content} 
          imageUrl={question.image_url} 
        />
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-lg font-medium leading-relaxed whitespace-pre-wrap">
          {question.content}
        </p>
        
        {question.image_url && (
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden border bg-muted/50">
            <Image
              src={question.image_url}
              alt="Question diagram"
              fill
              className="object-contain"
            />
          </div>
        )}

        {question.options && question.options.length > 0 && (
          <div className="grid gap-3 pt-4">
            {question.options.map((option, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-3 rounded-lg border p-4 hover:bg-accent cursor-pointer transition-colors"
              >
                <div className="h-4 w-4 rounded-full border border-primary" />
                <span>{option}</span>
              </div>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="text-xs text-muted-foreground">
        ID: {question.id}
      </CardFooter>
    </Card>
  )
}
