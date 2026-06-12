'use client'

export function Hero() {
  return (
    <section className="min-h-screen pt-32 flex items-center justify-center overflow-hidden relative" style={{ backgroundColor: '#fffefb' }}>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full" style={{ backgroundColor: '#f8f4f0' }}>
          <span className="text-sm font-medium" style={{ color: '#605d52' }}>AI-Powered Interview Mastery</span>
        </div>

        <h1 className="text-5xl sm:text-6xl font-semibold mb-6 leading-tight" style={{ color: '#201515' }}>
          Master Interviews Without Burnout
        </h1>

        <p className="text-xl sm:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed" style={{ color: '#605d52' }}>
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
            style={{ borderColor: '#201515', color: '#201515', backgroundColor: '#fffefb' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8f4f0'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fffefb'}
          >
            Watch Demo
          </button>
        </div>

        <div className="text-base" style={{ color: '#939084' }}>
          ✨ No credit card required • 🚀 Get started in seconds
        </div>
      </div>
    </section>
  )
}
