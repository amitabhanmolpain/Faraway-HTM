'use client'

import { createElement, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { HowItWorks } from '@/components/how-it-works'
import { Stats } from '@/components/stats'
import { CTA } from '@/components/cta'
import { Footer } from '@/components/footer'
import { AuthModal } from '@/components/auth-modal'
import { OnboardingFlow, type OnboardingData } from '@/components/onboarding-flow'
import { useTheme } from '@/app/theme-provider'
import { type AuthUser } from '@/lib/auth'

export default function Home() {
  const router = useRouter()
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false)
  const [isOnboardingOpen, setIsOnboardingOpen] = useState<boolean>(false)
  const [mounted, setMounted] = useState<boolean>(false)
  const [userName, setUserName] = useState<string>('')
  const [authUser, setAuthUser] = useState<AuthUser | null>(null)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSignInClick = (): void => setIsAuthModalOpen(true)
  const handleCloseAuthModal = (): void => setIsAuthModalOpen(false)
  const handleAuthSuccess = (userData: AuthUser): void => {
    setUserName(userData.name)
    setAuthUser(userData)
    setIsOnboardingOpen(true)
  }

  const handleOnboardingComplete = (data: OnboardingData): void => {
    const userOnboardingData = {
      id: authUser?.id || '',
      email: authUser?.email || '',
      name: userName,
      goal: data.goal,
      userType: data.userType,
      problems: data.problems,
    }
    try {
      localStorage.setItem('userOnboardingData', JSON.stringify(userOnboardingData))
    } catch (e) {
      console.error('Failed to save userOnboardingData to localStorage:', e)
    }
    setIsOnboardingOpen(false)
    router.push('/dashboard')
  }

  const handleOnboardingSkip = (): void => {
    setIsOnboardingOpen(false)
    const userOnboardingData = {
      id: authUser?.id || '',
      email: authUser?.email || '',
      name: userName,
      goal: 'Not specified',
      userType: 'Not specified',
      problems: [],
    }
    try {
      localStorage.setItem('userOnboardingData', JSON.stringify(userOnboardingData))
    } catch (e) {
      console.error('Failed to save userOnboardingData to localStorage:', e)
    }
    router.push('/dashboard')
  }

  const pageBackground = theme === 'dark'
    ? 'radial-gradient(circle at top left, rgba(255, 106, 42, 0.22), transparent 28%), radial-gradient(circle at top right, rgba(255, 210, 162, 0.12), transparent 24%), linear-gradient(180deg, #140f0b 0%, #1a1410 52%, #120d0a 100%)'
    : 'radial-gradient(circle at top left, rgba(255, 142, 82, 0.22), transparent 28%), radial-gradient(circle at top right, rgba(255, 206, 156, 0.35), transparent 24%), linear-gradient(180deg, #fffaf3 0%, #fff2e5 50%, #ffe2c8 100%)'

  const shell = createElement(
    'main',
    { className: 'min-h-screen', style: { background: pageBackground } },
    createElement(Navbar, { onSignInClick: handleSignInClick }),
    createElement(Hero, { onStartClick: handleSignInClick }),
    createElement(Stats, null),
    createElement(Features, null),
    createElement(HowItWorks, null),
    createElement(CTA, { onStartClick: handleSignInClick }),
    createElement(Footer, null),
    createElement(AuthModal, { isOpen: isAuthModalOpen, onClose: handleCloseAuthModal, theme, onAuthSuccess: handleAuthSuccess }),
    createElement(OnboardingFlow, { isOpen: isOnboardingOpen, onComplete: handleOnboardingComplete, onSkip: handleOnboardingSkip }),
  )

  if (!mounted) return shell
  return shell
}
