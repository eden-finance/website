'use client'

import type React from 'react'
import Image from 'next/image'
import { useTheme } from '~/provider/theme-provider'

export function ThemeToggle() {
  const { toggleTheme } = useTheme()

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    toggleTheme({ x: e.clientX, y: e.clientY })
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Toggle theme"
      className="bg-secondary mr-2 sm:mr-4 flex h-9 w-9 items-center justify-center rounded-[8px]"
    >
      <Image 
        src="/theme-icon.svg" 
        alt="Theme toggle icon" 
        width={20} 
        height={20} 
      />
    </button>
  )
}