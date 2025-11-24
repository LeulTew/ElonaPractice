"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Bot, Copy, ExternalLink } from "lucide-react"

interface AIHelpButtonProps {
  questionText: string
  imageUrl?: string | null
}

export function AIHelpButton({ questionText, imageUrl }: AIHelpButtonProps) {
  const [loading, setLoading] = useState(false)

  const handleAskAI = async () => {
    setLoading(true)
    try {
      // Construct the prompt
      let prompt = `Can you help me with this chemistry question?\n\n${questionText}`
      if (imageUrl) {
        prompt += `\n\n[Image: ${imageUrl}]`
      }

      // Copy to clipboard
      await navigator.clipboard.writeText(prompt)
      
      // Notify user (using alert for now, can be upgraded to toast)
      alert("Question copied to clipboard! Paste it into the chat.")

      // Open ChatGPT (or Grok)
      // Attempt to pre-fill query for ChatGPT (unreliable but worth a shot)
      const encodedPrompt = encodeURIComponent(prompt)
      const chatgptUrl = `https://chatgpt.com/?q=${encodedPrompt}`
      
      window.open(chatgptUrl, "_blank")
    } catch (error) {
      console.error("Failed to copy or open AI:", error)
      alert("Something went wrong. Please try manually copying the question.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button 
      onClick={handleAskAI} 
      variant="outline" 
      className="gap-2 text-indigo-600 border-indigo-200 hover:bg-indigo-50 dark:text-indigo-400 dark:border-indigo-800 dark:hover:bg-indigo-950"
      disabled={loading}
    >
      {loading ? (
        <span className="animate-spin">⏳</span>
      ) : (
        <Bot className="w-4 h-4" />
      )}
      Ask AI
    </Button>
  )
}
