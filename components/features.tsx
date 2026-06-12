'use client'

import { useEffect, useState } from 'react'

import { Bot, Gamepad2, Zap, BarChart3, Target, Trophy } from 'lucide-react'
import { useTheme } from '@/app/theme-provider'

export function Features() {
  const { theme } = useTheme()
  
  const features = [
    {
      icon: <Bot size={32} />,
      title: 'Multi-Agent AI System',
      description: 'Experience interviews with diverse AI personas that simulate real interviewer behaviors and question styles.',
    },
    {
      icon: <Gamepad2 size={32} />,
      title: 'Gamified Learning',
      description: 'Earn points, unlock achievements, and level up your interview skills through engaging gamified challenges.',
    },
    {
      icon: <Zap size={32} />,
      title: 'Adaptive Difficulty',
      description: 'The system learns your weak areas and adjusts difficulty dynamically to maximize learning without overwhelming you.',
    },
    {
      icon: <BarChart3 size={32} />,
      title: 'Real-Time Feedback',
      description: 'Get instant AI-powered feedback on your answers, body language, and communication to improve continuously.',
    },
    {
      icon: <Target size={32} />,
      title: 'Role-Specific Prep',
      description: 'Customize your interview prep for software engineering, product, design, and more with targeted question banks.',
    },
    {
      icon: <Trophy size={32} />,
      title: 'Progress Tracking',
      description: 'Visualize your improvement with detailed analytics and performance metrics across different interview categories.',
    },
  ]

  return (
    <section className="py-24 px-4 relative transition-colors" style={{ backgroundColor: theme === 'dark' ? '#1a1a1a' : '#f8f4f0' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-6 transition-colors" style={{ color: theme === 'dark' ? '#f5f5f0' : '#201515' }}>
            Designed for Success
          </h2>
          <p className="text-lg max-w-2xl mx-auto transition-colors" style={{ color: theme === 'dark' ? '#d0d0c5' : '#605d52' }}>
            Interview Arena combines cutting-edge AI with game psychology to create the ultimate interview preparation experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-[12px] transition-all duration-300 overflow-hidden"
              style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#fffefb' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div className="relative z-10">
                <div className="mb-4 transition-colors" style={{ color: '#ff4f00' }}>{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 transition-colors" style={{ color: theme === 'dark' ? '#f5f5f0' : '#201515' }}>{feature.title}</h3>
                <p className="leading-relaxed transition-colors" style={{ color: theme === 'dark' ? '#d0d0c5' : '#605d52' }}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
