'use client'

export function Features() {
  const features = [
    {
      icon: '🤖',
      title: 'Multi-Agent AI System',
      description: 'Experience interviews with diverse AI personas that simulate real interviewer behaviors and question styles.',
    },
    {
      icon: '🎮',
      title: 'Gamified Learning',
      description: 'Earn points, unlock achievements, and level up your interview skills through engaging gamified challenges.',
    },
    {
      icon: '⚡',
      title: 'Adaptive Difficulty',
      description: 'The system learns your weak areas and adjusts difficulty dynamically to maximize learning without overwhelming you.',
    },
    {
      icon: '📊',
      title: 'Real-Time Feedback',
      description: 'Get instant AI-powered feedback on your answers, body language, and communication to improve continuously.',
    },
    {
      icon: '🎯',
      title: 'Role-Specific Prep',
      description: 'Customize your interview prep for software engineering, product, design, and more with targeted question banks.',
    },
    {
      icon: '🏆',
      title: 'Progress Tracking',
      description: 'Visualize your improvement with detailed analytics and performance metrics across different interview categories.',
    },
  ]

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Designed for <span className="text-primary">Success</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interview Arena combines cutting-edge AI with game psychology to create the ultimate interview preparation experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
