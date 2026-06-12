'use client'

import { useEffect, useState } from 'react'

import { useTheme } from '@/app/theme-provider'

export function Stats() {
  const { theme } = useTheme()
  const stats = [
    { value: '10K+', label: 'Active Learners' },
    { value: '2.5M+', label: 'Questions Practiced' },
    { value: '94%', label: 'Success Rate' },
    { value: '24/7', label: 'AI Available' },
  ]

  return (
    <section className="py-20 px-4 transition-colors" style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f8f4f0' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#ff4f00' }}>
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-medium transition-colors" style={{ color: theme === 'dark' ? '#a0a090' : '#605d52' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
