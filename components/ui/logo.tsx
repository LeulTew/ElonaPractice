import { FlaskConical } from "lucide-react"

export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 group ${className}`}>
      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/20 transition-all group-hover:shadow-primary/40 group-hover:scale-105">
        <FlaskConical className="w-6 h-6 text-white" />
        <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 group-hover:to-primary transition-all duration-300">
        Elona<span className="text-primary">Practice</span>
      </span>
    </div>
  )
}
