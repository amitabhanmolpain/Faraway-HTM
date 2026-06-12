'use client'

import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-canvas" style={{ borderColor: '#c5c0b1' }}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md flex items-center justify-center font-bold text-lg" style={{ backgroundColor: '#ff4f00', color: '#fffefb' }}>
            ⚡
          </div>
          <span className="text-lg font-semibold" style={{ color: '#201515' }}>Interview Arena</span>
        </div>
        
        <div className="flex items-center gap-8">
          <div className="hidden gap-8 md:flex">
            <Link href="#features" className="text-sm transition-colors" style={{ color: '#605d52' }} onMouseEnter={(e) => e.currentTarget.style.color = '#201515'} onMouseLeave={(e) => e.currentTarget.style.color = '#605d52'}>
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm transition-colors" style={{ color: '#605d52' }} onMouseEnter={(e) => e.currentTarget.style.color = '#201515'} onMouseLeave={(e) => e.currentTarget.style.color = '#605d52'}>
              How it works
            </Link>
          </div>
          <button className="rounded-[12px] px-6 py-3 text-sm font-semibold transition-colors" style={{ backgroundColor: '#ff4f00', color: '#fffefb' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e64500'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ff4f00'}>
            Sign In
          </button>
        </div>
      </div>
    </nav>
  )
}
