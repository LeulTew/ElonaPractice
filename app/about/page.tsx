import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            About Elona Practice
          </h1>
          <p className="text-xl text-muted-foreground">
            A modern, AI-enhanced platform for mastering Chemistry of Natural Products.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-card rounded-2xl p-8 border space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            Elona Practice was built to transform how students prepare for complex chemistry exams. 
            By combining rigorous, curriculum-aligned content with an intuitive, award-winning interface, 
            we aim to make learning efficient, engaging, and effective.
          </p>
        </div>

        {/* Developer Credits */}
        <div className="bg-card rounded-2xl p-8 border space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">Developer</h2>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex-1 space-y-2 text-center sm:text-left">
              <h3 className="text-xl font-medium text-foreground">Leul Tewodros</h3>
              <p className="text-muted-foreground">Full Stack Developer & UI/UX Designer</p>
              <p className="text-sm text-muted-foreground">
                Passionate about building educational tools that bridge the gap between technology and learning.
              </p>
            </div>
            
            <div className="flex gap-4">
              <Link 
                href="https://github.com/LeulTew" 
                target="_blank"
                className="p-3 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <Github className="w-6 h-6" />
              </Link>
              <Link 
                href="https://linkedin.com/in/leul-tewodros" 
                target="_blank"
                className="p-3 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link 
                href="mailto:leultewodros@gmail.com" 
                className="p-3 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <Mail className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-4 bg-card rounded-xl border">
            <span className="font-semibold text-foreground">Next.js 15</span>
          </div>
          <div className="p-4 bg-card rounded-xl border">
            <span className="font-semibold text-foreground">Supabase</span>
          </div>
          <div className="p-4 bg-card rounded-xl border">
            <span className="font-semibold text-foreground">Tailwind CSS</span>
          </div>
          <div className="p-4 bg-card rounded-xl border">
            <span className="font-semibold text-foreground">Framer Motion</span>
          </div>
        </div>
      </div>
    </div>
  )
}
