'use client'

export function CTA() {
  return (
    <section className="py-24 px-4" style={{ backgroundColor: '#201515' }}>
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-[12px] p-12 md:p-16 overflow-hidden text-center">
          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl font-semibold mb-6" style={{ color: '#fffefb' }}>
              Ready to Ace Your Interview?
            </h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: '#c5c0b1' }}>
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
                style={{ borderColor: '#ff4f00', color: '#ff4f00', backgroundColor: '#201515' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2a2620'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#201515'}
              >
                Schedule Demo
              </button>
            </div>

            <p className="text-base mt-8" style={{ color: '#939084' }}>
              🎁 First 7 days free. No credit card required.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
