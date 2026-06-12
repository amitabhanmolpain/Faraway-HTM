'use client'

import { Button } from '@/components/ui/button'

export function CTA() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl border border-border bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 p-12 md:p-16 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/20 rounded-full blur-3xl -z-10"></div>

          <div className="relative z-10 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Ready to Ace Your Interview?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of candidates who have transformed their interview preparation experience with Interview Arena.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base px-8">
                Get Started Free
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-secondary text-secondary-foreground hover:bg-secondary/5 font-semibold text-base px-8"
              >
                Schedule Demo
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              🎁 First 7 days free. No credit card required.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
