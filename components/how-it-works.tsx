'use client'

export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Choose Your Path',
      description: 'Select your interview role and experience level to get personalized preparation.',
    },
    {
      number: '02',
      title: 'Face AI Interviews',
      description: 'Practice with AI agents that challenge you with realistic interview scenarios.',
    },
    {
      number: '03',
      title: 'Get Instant Feedback',
      description: 'Receive detailed AI-powered analysis of your performance and areas to improve.',
    },
    {
      number: '04',
      title: 'Level Up & Unlock',
      description: 'Earn rewards, unlock achievements, and progress through increasingly challenging interviews.',
    },
  ]

  return (
    <section className="py-24 px-4 relative overflow-hidden" style={{ backgroundColor: '#fffefb' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-6" style={{ color: '#201515' }}>
            How Interview Arena Works
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#605d52' }}>
            A streamlined approach to interview preparation that keeps you engaged without burning you out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-24 left-full w-6 h-1" style={{ backgroundColor: '#c5c0b1' }}></div>
              )}

              <div className="relative p-8 rounded-[12px] h-full" style={{ backgroundColor: '#f8f4f0' }}>
                <div className="text-4xl font-semibold mb-4" style={{ color: '#c5c0b1' }}>{step.number}</div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#201515' }}>{step.title}</h3>
                <p className="leading-relaxed" style={{ color: '#605d52' }}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
