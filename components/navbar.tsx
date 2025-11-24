import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { FlaskConical } from "lucide-react"

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center max-w-screen-2xl mx-auto px-4">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <FlaskConical className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">
              ElonaPractice
            </span>
          </Link>
          <div className="flex gap-6 md:gap-10">
            <Link
              href="/courses"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Courses
            </Link>
            <Link
              href="/about"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              About
            </Link>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <ModeToggle />
        </div>
      </div>
    </nav>
  )
}
