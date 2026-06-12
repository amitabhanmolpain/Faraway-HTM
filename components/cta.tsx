'use client'

import { useEffect, useState } from 'react'

import { Gift } from 'lucide-react'
import { useTheme } from '@/app/theme-provider'

export function CTA() {
  const { theme } = useTheme()

  return (
    <section className="py-24 px-4 transition-colors" style={{ backgroundColor: theme === 'dark' ? '#1a1a1a' : '#201515' }}>
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-[12px] p-12 md:p-16 overflow-hidden text-center">
          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl font-semibold mb-6 transition-colors" style={{ color: theme === 'dark' ? '#f5f5f0' : '#fffefb' }}>
              Ready to Ace Your Interview?
            </h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto transition-colors" style={{ color: theme === 'dark' ? '#d0d0c5' : '#c5c0b1' }}>
              Join thousands of candidates who have transformed their interview preparation experience with Interview Arena.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="rounded-[12px] px-8 py-4 text-lg font-semibold transition-colors"
                style={{ backgroundColor: '#ff4f00', color: '#fffefb' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e64500'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ff4f00'}
              >
                Get Started Free
              </button>
              <button 
                className="rounded-[12px] px-8 py-4 text-lg font-semibold border-2 transition-colors"
                style={{ borderColor: '#ff4f00', color: '#ff4f00', backgroundColor: theme === 'dark' ? '#1a1a1a' : '#201515' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme === 'dark' ? '#2a2a2a' : '#2a2620'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = theme === 'dark' ? '#1a1a1a' : '#201515'}
              >
                Schedule Demo
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-base mt-8 transition-colors" style={{ color: theme === 'dark' ? '#939084' : '#939084' }}>
              <Gift size={18} />
              <span>First 7 days free. No credit card required.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
