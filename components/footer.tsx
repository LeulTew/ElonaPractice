"use client"

import { usePathname } from "next/navigation"
import { Github, Linkedin, Mail } from "lucide-react"

function TelegramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4 fill-current"
    >
      <path d="M21.543 2.497a1.11 1.11 0 0 0-1.158-.089L2.28 11.07a.75.75 0 0 0 .093 1.381l4.605 1.582 1.833 5.802a.75.75 0 0 0 1.274.302l2.651-2.966 4.243 3.022a.75.75 0 0 0 1.176-.45l3.25-15.5a1.11 1.11 0 0 0-.562-1.247Z" />
    </svg>
  )
}

export function Footer() {
  const pathname = usePathname()

  // Hide footer on exam pages to maintain immersive experience
  if (pathname?.startsWith("/exam/")) {
    return null
  }

  return (
    <footer className="border-t border-slate-200 bg-white mt-auto text-slate-700 dark:bg-[#050505] dark:border-[#1a1a1a] dark:text-slate-200 pt-8 pb-28 md:pb-12">
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
            <TelegramIcon />
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
