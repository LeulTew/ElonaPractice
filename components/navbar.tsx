"use client"

import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import { LayoutDashboard, BookOpen, Info, User } from "lucide-react"
import { ModeToggle } from "./mode-toggle"

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Courses", href: "/courses", icon: BookOpen },
  { name: "About", href: "/about", icon: Info },
  { name: "Profile", href: "/profile", icon: User },
]

export function Navbar() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const mode = searchParams.get('mode')

  // Hide Navbar in Exam Mode to prevent accidental exit
  if (pathname?.startsWith('/exam/') && mode === 'EXAM') {
    return null
  }

  return (
    <nav className="border-b border-slate-200 bg-white text-slate-900 dark:bg-[#050505] dark:text-slate-100 dark:border-[#1a1a1a]">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500 text-[#1C1917]">
              <BookOpen className="h-5 w-5" />
            </div>
            <span>
              Elona <span className="text-amber-500">Practice</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-amber-500/20 text-amber-600"
                      : "text-slate-500 hover:text-slate-900 hover:bg-amber-500/10 dark:text-slate-300 dark:hover:text-white"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.name}
                </Link>
              )
            })}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}
