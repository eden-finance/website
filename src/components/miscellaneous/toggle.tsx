'use client'

import type React from 'react'
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
      className="bg-secondary mr-4 flex h-9 w-9 items-center justify-center rounded-[8px]"
    >
      <img src="./theme-icon.svg" alt="" />
    </button>
  )
}
