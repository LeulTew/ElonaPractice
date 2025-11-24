"use client"

import { AIHelpButton } from "@/components/ui/ai-help-button"

export default function Home() {
  // Mock data for demonstration
  const mockQuestion = {
    id: "1",
    content: "Which of the following is a characteristic of enantiomers?",
    options: [
      "They have different boiling points",
      "They rotate plane-polarized light in opposite directions",
      "They have different solubilities in achiral solvents",
      "They react identically with chiral reagents"
    ],
    correct_answer: "They rotate plane-polarized light in opposite directions"
  }

  return (
    <div className="min-h-screen bg-background p-8 font-sans">
      <main className="max-w-2xl mx-auto space-y-8">
        <header className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Elona Exam Practice</h1>
          <p className="text-muted-foreground">Chemistry of Natural Product (CNP)</p>
        </header>

        <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6 space-y-6">
          <div className="space-y-4">
            <div className="flex justify-between items-start gap-4">
              <h2 className="text-lg font-medium leading-none">Question 1</h2>
              <AIHelpButton questionText={mockQuestion.content} />
            </div>
            
            <p className="text-lg">{mockQuestion.content}</p>
            
            <div className="grid gap-3">
              {mockQuestion.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-3 rounded-lg border p-4 hover:bg-accent cursor-pointer transition-colors">
                  <div className="h-4 w-4 rounded-full border border-primary" />
                  <span>{option}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
