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
    <div className="sticky top-4 z-50 mx-auto w-full max-w-[851px] px-3">
      <div
        className="bg-primary-gradient rounded-[100px] p-[1px]"
        style={{ background: 'var(--primary-gradient)' }}
      >
        <nav className="bg-background flex h-[66px] items-center justify-between rounded-[100px] px-3">
          <div className="flex items-center">
            <img src="/eden-finance-logo.svg" alt="Eden Finance" />
          </div>
          <div className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex items-center">
            <ThemeToggle />
            <Link
              href="https://app.edenfinance.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="rounded-[32px] px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:opacity-90"
                style={{
                  background:
                    'linear-gradient(90deg, #9A74EB 0%, #60449C 100%)',
                }}
              >
                Launch App
              </button>
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:bg-accent rounded-lg p-2 transition-colors duration-200 md:hidden"
            >
              {isMenuOpen ? (
                <X className="text-foreground h-5 w-5" />
              ) : (
                <Menu className="text-foreground h-5 w-5" />
              )}
            </button>
          </div>
        </nav>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="bg-card/95 border-border mt-2 overflow-hidden rounded-2xl border shadow-lg backdrop-blur-md md:hidden">
          <div className="space-y-2 p-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-muted-foreground hover:text-foreground hover:bg-accent block rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
