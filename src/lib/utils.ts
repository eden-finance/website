import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNumber(num: number): string {
  if (num >= 1_000_000_000) {
    const billions = num / 1_000_000_000
    return billions % 1 === 0 ? `${billions}B` : `${billions.toFixed(1)}B`
  } else if (num >= 1_000_000) {
    const millions = num / 1_000_000
    return millions % 1 === 0 ? `${millions}M` : `${millions.toFixed(1)}M`
  } else if (num >= 1_000) {
    return num.toLocaleString()
  } else {
    return num.toString()
  }
}

export function weiToNumber(weiString: string): number {
  const wei = BigInt(weiString)
  const divisor = BigInt(10 ** 18)
  const result = Number(wei) / Number(divisor)
  return result
}

export const inDevEnvironment =
  !!process && process.env.NODE_ENV === 'development'
