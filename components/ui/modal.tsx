"use client"

import { X } from "lucide-react"
import { useEffect } from "react"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  title?: string
}

export function Modal({ isOpen, onClose, children, title }: ModalProps) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-100 flex sm:items-center items-end justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-background sm:rounded-xl rounded-t-xl border w-full sm:max-w-lg max-w-full overflow-hidden animate-in fade-in sm:zoom-in-95 slide-in-from-bottom-4 duration-200">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="font-semibold">{title || 'Modal'}</h3>
          <button onClick={onClose} className="p-1 hover:bg-muted rounded-full transition-colors" aria-label="Close">
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="p-4 sm:max-h-[80vh] max-h-[90vh] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  )
}
