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
    <section className="py-24 px-4 relative" style={{ backgroundColor: '#f8f4f0' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-6" style={{ color: '#201515' }}>
            Designed for Success
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#605d52' }}>
            Interview Arena combines cutting-edge AI with game psychology to create the ultimate interview preparation experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-[12px] transition-all duration-300 overflow-hidden"
              style={{ backgroundColor: '#fffefb' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div className="relative z-10">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#201515' }}>{feature.title}</h3>
                <p className="leading-relaxed" style={{ color: '#605d52' }}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
