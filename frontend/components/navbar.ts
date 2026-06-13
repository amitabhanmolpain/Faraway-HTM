'use client'

import { createElement, useEffect, useState } from 'react'
import Link from 'next/link'
import { Moon, Sun, Zap } from 'lucide-react'

import { useTheme } from '@/app/theme-provider'

interface NavbarProps {
  onSignInClick?: () => void
}

export function Navbar({ onSignInClick }: NavbarProps) {
  const [mounted, setMounted] = useState<boolean>(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const navBgColor = mounted ? (theme === 'dark' ? 'rgba(20, 15, 11, 0.78)' : 'rgba(255, 250, 243, 0.78)') : 'rgba(20, 15, 11, 0.78)'
  const navBorderColor = mounted ? (theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(150, 111, 81, 0.16)') : 'rgba(255, 255, 255, 0.1)'
  const textColor = mounted ? (theme === 'dark' ? '#f5f0e8' : '#241710') : '#f5f0e8'
  const linkColor = mounted ? (theme === 'dark' ? '#d3c8bc' : '#6e6257') : '#d3c8bc'
  const linkHoverColor = mounted ? (theme === 'dark' ? '#fff7ee' : '#241710') : '#fff7ee'
  const themeBgColor = mounted ? (theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 106, 42, 0.1)') : 'rgba(255, 255, 255, 0.08)'

  return createElement(
    'nav',
    { className: 'sticky top-0 z-50 w-full border-b backdrop-blur-xl transition-colors', style: { backgroundColor: navBgColor, borderColor: navBorderColor } },
    createElement(
      'div',
      { className: 'mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8' },
      createElement(
        'div',
        { className: 'flex items-center gap-2' },
        createElement('div', { className: 'flex h-8 w-8 items-center justify-center rounded-md text-lg font-bold transition-colors', style: { backgroundColor: '#ff4f00', color: '#fffefb' } }, createElement(Zap, { size: 18 })),
        createElement('span', { className: 'text-lg font-semibold transition-colors', style: { color: textColor } }, 'Interview Arena')
      ),
      createElement(
        'div',
        { className: 'flex items-center gap-8' },
        createElement(
          'div',
          { className: 'hidden gap-8 md:flex' },
          createElement(Link, { href: '#features', className: 'text-sm transition-colors', style: { color: linkColor }, onMouseEnter: (e) => { e.currentTarget.style.color = linkHoverColor }, onMouseLeave: (e) => { e.currentTarget.style.color = linkColor } }, 'Features'),
          createElement(Link, { href: '#how-it-works', className: 'text-sm transition-colors', style: { color: linkColor }, onMouseEnter: (e) => { e.currentTarget.style.color = linkHoverColor }, onMouseLeave: (e) => { e.currentTarget.style.color = linkColor } }, 'How it works')
        ),
        createElement('button', { onClick: toggleTheme, className: 'rounded-[8px] p-2 transition-colors', style: { backgroundColor: themeBgColor, color: '#ff4f00' }, title: 'Toggle theme', type: 'button' }, mounted && theme === 'dark' ? createElement(Sun, { size: 20 }) : createElement(Moon, { size: 20 })),
        createElement('button', { onClick: onSignInClick, className: 'rounded-[12px] px-6 py-3 text-sm font-semibold transition-colors', style: { backgroundColor: '#ff4f00', color: '#fffefb' }, onMouseEnter: (e) => { e.currentTarget.style.backgroundColor = '#e64500' }, onMouseLeave: (e) => { e.currentTarget.style.backgroundColor = '#ff4f00' }, type: 'button' }, 'Sign In')
      )
    )
  )
}
