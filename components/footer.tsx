'use client'

import { useEffect, useState } from 'react'

import { Zap } from 'lucide-react'
import { useTheme } from '@/app/theme-provider'

export function Footer() {
  const { theme } = useTheme()

  return (
    <footer className="py-16 px-4 transition-colors" style={{ backgroundColor: theme === 'dark' ? '#1a1a1a' : '#201515' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-md flex items-center justify-center font-bold text-sm" style={{ backgroundColor: '#ff4f00', color: '#fffefb' }}>
                <Zap size={14} />
              </div>
              <span className="font-semibold transition-colors" style={{ color: theme === 'dark' ? '#f5f5f0' : '#fffefb' }}>Interview Arena</span>
            </div>
            <p className="text-sm transition-colors" style={{ color: theme === 'dark' ? '#a0a090' : '#939084' }}>Gamified AI-powered interview preparation.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 transition-colors" style={{ color: theme === 'dark' ? '#f5f5f0' : '#fffefb' }}>Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="transition" style={{ color: theme === 'dark' ? '#a0a090' : '#939084' }} onMouseEnter={(e) => e.currentTarget.style.color = theme === 'dark' ? '#d0d0c5' : '#c5c0b1'} onMouseLeave={(e) => e.currentTarget.style.color = theme === 'dark' ? '#a0a090' : '#939084'}>Features</a></li>
              <li><a href="#" className="transition" style={{ color: theme === 'dark' ? '#a0a090' : '#939084' }} onMouseEnter={(e) => e.currentTarget.style.color = theme === 'dark' ? '#d0d0c5' : '#c5c0b1'} onMouseLeave={(e) => e.currentTarget.style.color = theme === 'dark' ? '#a0a090' : '#939084'}>Pricing</a></li>
              <li><a href="#" className="transition" style={{ color: theme === 'dark' ? '#a0a090' : '#939084' }} onMouseEnter={(e) => e.currentTarget.style.color = theme === 'dark' ? '#d0d0c5' : '#c5c0b1'} onMouseLeave={(e) => e.currentTarget.style.color = theme === 'dark' ? '#a0a090' : '#939084'}>Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 transition-colors" style={{ color: theme === 'dark' ? '#f5f5f0' : '#fffefb' }}>Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="transition" style={{ color: theme === 'dark' ? '#a0a090' : '#939084' }} onMouseEnter={(e) => e.currentTarget.style.color = theme === 'dark' ? '#d0d0c5' : '#c5c0b1'} onMouseLeave={(e) => e.currentTarget.style.color = theme === 'dark' ? '#a0a090' : '#939084'}>About</a></li>
              <li><a href="#" className="transition" style={{ color: theme === 'dark' ? '#a0a090' : '#939084' }} onMouseEnter={(e) => e.currentTarget.style.color = theme === 'dark' ? '#d0d0c5' : '#c5c0b1'} onMouseLeave={(e) => e.currentTarget.style.color = theme === 'dark' ? '#a0a090' : '#939084'}>Careers</a></li>
              <li><a href="#" className="transition" style={{ color: theme === 'dark' ? '#a0a090' : '#939084' }} onMouseEnter={(e) => e.currentTarget.style.color = theme === 'dark' ? '#d0d0c5' : '#c5c0b1'} onMouseLeave={(e) => e.currentTarget.style.color = theme === 'dark' ? '#a0a090' : '#939084'}>Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 transition-colors" style={{ color: theme === 'dark' ? '#f5f5f0' : '#fffefb' }}>Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="transition" style={{ color: theme === 'dark' ? '#a0a090' : '#939084' }} onMouseEnter={(e) => e.currentTarget.style.color = theme === 'dark' ? '#d0d0c5' : '#c5c0b1'} onMouseLeave={(e) => e.currentTarget.style.color = theme === 'dark' ? '#a0a090' : '#939084'}>Privacy</a></li>
              <li><a href="#" className="transition" style={{ color: theme === 'dark' ? '#a0a090' : '#939084' }} onMouseEnter={(e) => e.currentTarget.style.color = theme === 'dark' ? '#d0d0c5' : '#c5c0b1'} onMouseLeave={(e) => e.currentTarget.style.color = theme === 'dark' ? '#a0a090' : '#939084'}>Terms</a></li>
              <li><a href="#" className="transition" style={{ color: theme === 'dark' ? '#a0a090' : '#939084' }} onMouseEnter={(e) => e.currentTarget.style.color = theme === 'dark' ? '#d0d0c5' : '#c5c0b1'} onMouseLeave={(e) => e.currentTarget.style.color = theme === 'dark' ? '#a0a090' : '#939084'}>Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-sm transition-colors" style={{ color: theme === 'dark' ? '#a0a090' : '#939084', borderTop: `1px solid ${theme === 'dark' ? '#2a2a2a' : '#2f2a26'}` }}>
          <p>&copy; 2026 Interview Arena. All rights reserved.</p>
          <div className="flex gap-6 mt-6 sm:mt-0">
            <a href="#" className="transition" style={{ color: theme === 'dark' ? '#a0a090' : '#939084' }} onMouseEnter={(e) => e.currentTarget.style.color = theme === 'dark' ? '#d0d0c5' : '#c5c0b1'} onMouseLeave={(e) => e.currentTarget.style.color = theme === 'dark' ? '#a0a090' : '#939084'}>𝕏</a>
            <a href="#" className="transition" style={{ color: theme === 'dark' ? '#a0a090' : '#939084' }} onMouseEnter={(e) => e.currentTarget.style.color = theme === 'dark' ? '#d0d0c5' : '#c5c0b1'} onMouseLeave={(e) => e.currentTarget.style.color = theme === 'dark' ? '#a0a090' : '#939084'}>LinkedIn</a>
            <a href="#" className="transition" style={{ color: theme === 'dark' ? '#a0a090' : '#939084' }} onMouseEnter={(e) => e.currentTarget.style.color = theme === 'dark' ? '#d0d0c5' : '#c5c0b1'} onMouseLeave={(e) => e.currentTarget.style.color = theme === 'dark' ? '#a0a090' : '#939084'}>Discord</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
