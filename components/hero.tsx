'use client'

import { useEffect, useState } from 'react'

import { Sparkles, Rocket } from 'lucide-react'
import { useTheme } from '@/app/theme-provider'

export function Hero() {
  const { theme } = useTheme()

  return (
    <section className="min-h-screen pt-32 flex items-center justify-center overflow-hidden relative transition-colors" style={{ backgroundColor: theme === 'dark' ? '#1a1a1a' : '#fffefb' }}>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full transition-colors" style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f8f4f0' }}>
          <span className="text-sm font-medium transition-colors" style={{ color: theme === 'dark' ? '#a0a090' : '#605d52' }}>AI-Powered Interview Mastery</span>
        </div>

        <h1 className="text-5xl sm:text-6xl font-semibold mb-6 leading-tight transition-colors" style={{ color: theme === 'dark' ? '#f5f5f0' : '#201515' }}>
          Master Interviews Without Burnout
        </h1>

        <p className="text-xl sm:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed transition-colors" style={{ color: theme === 'dark' ? '#d0d0c5' : '#605d52' }}>
          Unlike overwhelming mock interview apps, Interview Arena uses multi-agent AI and gamification to keep you interview-ready while actually having fun.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button 
            className="rounded-[12px] px-8 py-4 text-lg font-semibold transition-colors"
            style={{ backgroundColor: '#ff4f00', color: '#fffefb' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e64500'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ff4f00'}
          >
            Start Free Trial
          </button>
          <button 
            className="rounded-[12px] px-8 py-4 text-lg font-semibold border-2 transition-colors"
            style={{ 
              borderColor: theme === 'dark' ? '#d0d0c5' : '#201515',
              color: theme === 'dark' ? '#d0d0c5' : '#201515',
              backgroundColor: theme === 'dark' ? '#2a2a2a' : '#fffefb'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme === 'dark' ? '#36342e' : '#f8f4f0'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = theme === 'dark' ? '#2a2a2a' : '#fffefb'}
          >
            Watch Demo
          </button>
        </div>

        <div className="flex items-center justify-center gap-4 text-base transition-colors" style={{ color: theme === 'dark' ? '#939084' : '#939084' }}>
          <div className="flex items-center gap-1">
            <Sparkles size={16} />
            <span>No credit card required</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Rocket size={16} />
            <span>Get started in seconds</span>
          </div>
        </div>
      </div>
    </section>
  )
}
