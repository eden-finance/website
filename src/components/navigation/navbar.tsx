'use client'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from '../miscellaneous/toggle'
import Link from 'next/link'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Pools', href: '#pools' },
    { name: 'Lending', href: '#lending' },
    { name: 'Docs', href: '#docs' },
    { name: 'Security', href: '#security' },
  ]

  return (
    <div className="sticky top-4 z-50 mx-auto h-0 w-full max-w-[851px] rounded-[100px] bg-red-500 px-4">
      <div
        className="bg-primary-gradient rounded-[100px] p-[1px]"
        style={{ background: 'var(--primary-gradient)' }}
      >
        <nav className="bg-background flex h-[66px] items-center justify-between rounded-[100px] px-3">
          <div className="flex items-center">
            <img src="/eden-finance-logo.svg" alt="Eden Finance" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground group relative font-medium transition-all duration-300 ease-in-out hover:scale-105 hover:text-purple-400"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-purple-400 to-purple-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-1 sm:space-x-2">
            <ThemeToggle />
            <Link
              href="https://app.edenfinance.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="rounded-[32px] px-4 py-3 text-sm font-medium text-white transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-90 hover:shadow-lg sm:px-6"
                style={{
                  background:
                    'linear-gradient(90deg, #9A74EB 0%, #60449C 100%)',
                }}
              >
                Launch App
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:bg-accent rounded-lg p-2 transition-all duration-300 ease-in-out hover:scale-110 md:hidden"
            >
              <div className="relative h-5 w-5">
                <Menu
                  className={`text-foreground absolute h-5 w-5 transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                  }`}
                />
                <X
                  className={`text-foreground absolute h-5 w-5 transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu with Smooth Dropdown Animation */}
      <div
        className={`origin-top transform transition-all duration-300 ease-in-out md:hidden ${
          isMenuOpen
            ? 'translate-y-0 scale-y-100 opacity-100'
            : 'pointer-events-none -translate-y-2 scale-y-0 opacity-0'
        }`}
      >
        <div className="bg-card/95 border-border mt-2 overflow-hidden rounded-2xl border shadow-lg backdrop-blur-md">
          <div className="space-y-1 p-4">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-muted-foreground hover:text-foreground hover:bg-accent group relative block transform rounded-lg px-4 py-3 text-sm font-medium transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-sm"
                style={{
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
                }}
              >
                {link.name}
                <span className="absolute bottom-2 left-4 h-0.5 w-0 bg-gradient-to-r from-purple-400 to-purple-600 transition-all duration-300 ease-in-out group-hover:w-[calc(100%-2rem)]"></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
