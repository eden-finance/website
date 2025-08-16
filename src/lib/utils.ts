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
    return Math.floor(num).toLocaleString()
  } else {
    return Math.floor(num).toString()
  }
}

export function weiToNumber(weiString: string): number {
  const wei = BigInt(weiString)
  const divisor = BigInt(10 ** 18)
  const result = Number(wei) / Number(divisor)
  return result
}

export const formatLockDuration = (seconds: number) => {
  if (!seconds || seconds === 0) return '0 minutes'

  const units = [
    { name: 'year', seconds: 365 * 24 * 60 * 60, plural: 'years' },
    { name: 'month', seconds: 30 * 24 * 60 * 60, plural: 'months' }, // Approximate month
    { name: 'day', seconds: 24 * 60 * 60, plural: 'days' },
    { name: 'hour', seconds: 60 * 60, plural: 'hours' },
    { name: 'minute', seconds: 60, plural: 'minutes' },
  ]

  const parts = []
  let remainingSeconds = seconds

  for (const unit of units) {
    const count = Math.floor(remainingSeconds / unit.seconds)
    if (count > 0) {
      parts.push(`${count} ${count === 1 ? unit.name : unit.plural}`)
      remainingSeconds -= count * unit.seconds
    }
  }

  // Join parts with commas and "and" before the last item
  if (parts.length === 0) return '0 minutes'
  if (parts.length === 1) return parts[0]

  const lastPart = parts.pop()
  return parts.join(', ') + ' and ' + lastPart
}
export const formatWeiToCNGN = (weiValue: string): string => {
  const value = parseFloat(weiValue) / 1e18
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value)
}

export const inDevEnvironment =
  !!process && process.env.NODE_ENV === 'development'
