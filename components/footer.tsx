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
    <footer className="border-t border-slate-200 bg-white py-8 mt-auto text-slate-700 dark:bg-[#050505] dark:border-[#1a1a1a] dark:text-slate-200">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold tracking-wide uppercase text-[#1C1917] dark:text-slate-100">Dev: Leul Tewodros Agonafer</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} Elona Practice.</p>
        </div>
        
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <a 
            href="https://www.linkedin.com/in/leul-t-agonafer-861bb3336/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-amber-600"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
          <a 
            href="https://t.me/fabbin" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-amber-600"
          >
            <span className="font-mono text-xs">@fabbin</span>
          </a>
          <a 
            href="mailto:leulman2@gmail.com"
            className="flex items-center gap-2 hover:text-amber-600"
          >
            <Mail className="h-4 w-4" />
            leulman2@gmail.com
          </a>
          <a 
            href="https://github.com/LeulTew"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-amber-600"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
