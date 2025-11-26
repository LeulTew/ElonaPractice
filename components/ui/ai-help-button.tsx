"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Bot, Loader2, Copy, ExternalLink, Sparkles, Check } from "lucide-react"
import { Modal } from "@/components/ui/modal"

interface AIHelpButtonProps {
  questionId: string
  questionText: string
  imageUrl?: string | null
  options?: string[] | null
  userAnswer?: unknown
  onAIResponse?: (response: string) => void
}

export function AIHelpButton({ 
  questionId, 
  questionText, 
  imageUrl, 
  options, 
  userAnswer,
  onAIResponse 
}: AIHelpButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [aiResponse, setAiResponse] = useState<string | null>(null)
  const [copySuccess, setCopySuccess] = useState(false)

  const generatePrompt = () => {
    let prompt = `Can you help me with this chemistry question?\n\nQuestion: ${questionText}`
    if (options && options.length > 0) {
      prompt += `\nOptions: ${options.join(', ')}`
    }
    if (imageUrl) {
      // Note: Image URL included for reference
      prompt += `\n\n[Note: This question includes a diagram/image. Please visit the original question to view it, or I can describe it if needed.]`
      prompt += `\nImage URL: ${imageUrl}`
    }
    if (userAnswer) {
      prompt += `\n\nMy Answer: ${JSON.stringify(userAnswer)}`
    }
    return prompt
  }

  const handleOpen = async () => {
    setIsOpen(true)
    if (!aiResponse) {
      setLoading(true)
      try {
        // Call Internal API
        const res = await fetch('/api/ai-assist', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            questionId,
            questionContent: questionText,
            imageUrl,
            options,
            userAnswer,
            type: 'explain'
          })
        })
        const data = await res.json()
        const responseText = data.message || data.error || "No response generated."
        setAiResponse(responseText)
        if (onAIResponse) onAIResponse(responseText)
      } catch (error) {
        console.error("AI Help Error:", error)
        setAiResponse("Failed to get AI help. Please try external models.")
      } finally {
        setLoading(false)
      }
    }
  }

  const copyPrompt = async () => {
    try {
      const prompt = generatePrompt()
      await navigator.clipboard.writeText(prompt)
      setCopySuccess(true)
      setTimeout(() => setCopySuccess(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
      alert('Failed to copy to clipboard. Please try again.')
    }
  }

  const openExternalAI = async (url: string, useQueryParam = false) => {
    try {
      const prompt = generatePrompt()
      
      // Copy to clipboard first
      try {
        await navigator.clipboard.writeText(prompt)
        setCopySuccess(true)
        setTimeout(() => setCopySuccess(false), 2000)
      } catch (clipErr) {
        console.warn('Clipboard copy failed:', clipErr)
      }
      
      // Then open URL
      let finalUrl = url
      if (useQueryParam) {
        finalUrl = `${url}?q=${encodeURIComponent(prompt)}`
      }
      
      window.open(finalUrl, "_blank")
    } catch (err) {
      console.error('Failed to open external AI:', err)
    }
  }

  return (
    <>
      <Button 
        onClick={handleOpen} 
        variant="outline" 
        size="sm"
        className="gap-2 text-indigo-600 border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 dark:text-indigo-400 dark:border-indigo-800 dark:hover:bg-indigo-950"
      >
        <Sparkles className="w-4 h-4" />
        <span className="hidden sm:inline">Ask AI</span>
      </Button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="AI Assistant">
        <div className="space-y-6">
          {/* Internal AI Response */}
          <div className="space-y-2">
            <h4 className="font-medium flex items-center gap-2">
              <Bot className="w-4 h-4 text-indigo-500" />
              Elona AI
            </h4>
            <div className="p-4 rounded-lg bg-muted/50 text-sm leading-relaxed min-h-[100px]">
              {loading ? (
                <div className="flex items-center justify-center h-full py-8">
                  <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
                </div>
              ) : (
                <p className="whitespace-pre-wrap">{aiResponse}</p>
              )}
            </div>
          </div>

          <div className="border-t pt-4 space-y-4">
            <h4 className="font-medium text-sm text-muted-foreground">Try External Models (Context Copied)</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button 
                variant="outline" 
                className="justify-start gap-2" 
                onClick={() => openExternalAI("https://chatgpt.com/", true)}
              >
                <ExternalLink className="w-4 h-4" />
                ChatGPT
              </Button>
              <Button 
                variant="outline" 
                className="justify-start gap-2" 
                onClick={() => openExternalAI("https://grok.com/")}
              >
                <ExternalLink className="w-4 h-4" />
                Grok
              </Button>
              <Button 
                variant="outline" 
                className="justify-start gap-2" 
                onClick={() => openExternalAI("https://gemini.google.com/")}
              >
                <ExternalLink className="w-4 h-4" />
                Gemini
              </Button>
              <Button 
                variant="secondary" 
                className="justify-start gap-2" 
                onClick={copyPrompt}
              >
                {copySuccess ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                {copySuccess ? 'Copied!' : 'Copy Prompt Only'}
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}
