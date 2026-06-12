'use client'

import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="min-h-screen pt-20 flex items-center justify-center overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute top-20 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
          <span className="text-sm font-medium text-secondary-foreground">AI-Powered Interview Mastery</span>
        </div>

        <h1 className="text-5xl sm:text-7xl font-bold mb-6 leading-tight">
          Master Interviews{' '}
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Without Burnout
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Unlike overwhelming mock interview apps, Interview Arena uses multi-agent AI and gamification to keep you interview-ready while actually having fun.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base">
            Start Free Trial
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-secondary text-secondary-foreground hover:bg-secondary/5 font-semibold text-base"
          >
            Watch Demo
          </Button>
        </div>

        <div className="text-sm text-muted-foreground">
          ✨ No credit card required • 🚀 Get started in seconds
        </div>
      </div>
    </section>
  )
}
