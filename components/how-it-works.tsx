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
    <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-secondary/5 rounded-3xl mx-4 md:mx-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            How Interview Arena <span className="text-accent">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A streamlined approach to interview preparation that keeps you engaged without burning you out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-24 left-full w-6 h-1 bg-gradient-to-r from-primary/30 to-transparent"></div>
              )}

              <div className="relative p-6 rounded-2xl border border-border bg-card h-full">
                <div className="text-4xl font-bold text-primary/20 mb-2">{step.number}</div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
