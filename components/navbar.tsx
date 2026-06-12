'use client'

import { Button } from '@/components/ui/button'

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-background/80 border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <span className="text-white font-bold text-lg">⚡</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Interview Arena</span>
        </div>
        
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
          Sign In
        </Button>
      </div>
    </nav>
  )
}
