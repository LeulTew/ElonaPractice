"use client"

import { usePathname } from "next/navigation"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const pathname = usePathname()

  // Hide footer on exam pages to maintain immersive experience
  if (pathname?.startsWith("/exam/")) {
    return null
  }

  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm py-8 mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Elona Practice. All rights reserved.
        </div>
        
        <div className="flex items-center gap-6">
          <a 
            href="mailto:leul@example.com" 
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-4 w-4" />
            <span>Contact</span>
          </a>
          <a 
            href="https://linkedin.com/in/leul" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="h-4 w-4" />
            <span>LinkedIn</span>
          </a>
          <a 
            href="https://github.com/LeulTew" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
