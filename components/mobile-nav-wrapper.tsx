"use client"

import { usePathname, useRouter } from "next/navigation"
import { LimelightNav, NavItem } from "@/components/ui/limelight-nav"
import { Home, Compass, User, Info } from "lucide-react"

export function MobileNavWrapper() {
  const pathname = usePathname()
  const router = useRouter()

  const navItems: NavItem[] = [
    { 
      id: 'home', 
      icon: <Home />, 
      label: 'Home', 
      onClick: () => router.push('/dashboard') 
    },
    { 
      id: 'explore', 
      icon: <Compass />, 
      label: 'Courses', 
      onClick: () => router.push('/courses') 
    },
    { 
      id: 'about', 
      icon: <Info />, 
      label: 'About', 
      onClick: () => router.push('/about') 
    },
    { 
      id: 'profile', 
      icon: <User />, 
      label: 'Profile', 
      onClick: () => router.push('/profile')
    },
  ]

  const activeIndex = (() => {
    if (pathname === '/dashboard') return 0
    if (pathname === '/courses') return 1
    if (pathname === '/about') return 2
    if (pathname === '/profile') return 3
    return -1
  })()

  // Hide on exam pages
  if (pathname?.startsWith('/exam/')) {
    return null
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden flex justify-center">
      <LimelightNav 
        key={pathname} // Force re-render on route change
        items={navItems}
        defaultActiveIndex={activeIndex}
        className="bg-background/90 backdrop-blur border"
      />
    </div>
  )
}
