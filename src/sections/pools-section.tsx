import React from 'react'

// Types for the API response
interface PoolDetails {
  description?: string
  short_desc?: string
  logo_url?: string
  banner_url?: string
  strategy?: string
  risk_factors?: string[]
  benefit_points?: string[]
  whitepaper_url?: string
  terms_url?: string
  audit_report_url?: string
  website?: string
  twitter?: string
  discord?: string
  telegram?: string
  is_promoted: boolean
  promotion_ends: string | null
  tags?: string[]
}

interface Pool {
  id: string
  contract_address: string
  name: string
  symbol: string
  min_investment: string
  max_investment: string
  max_utilization: string
  lock_duration: number
  lock_duration_days: number
  is_active: boolean
  paused: boolean
  apy_bps: number
  apy_percent: string
  total_deposited_wei: string
  total_investors: number
  lp_token_address: string
  accepted_tokens: string[]
  details: PoolDetails
  utilization_rate: string
  created_at: string
  updated_at: string
}

interface PoolsApiResponse {
  data: Pool[]
  pagination: {
    page: number
    limit: number
    total: number
    prev_page: number
    next_page: number
    total_pages: number
  }
  filters: {
    categories: string[] | null
    risk_levels: string[] | null
    accepted_tokens: string[] | null
    apy_range: {
      min: string
      max: string
    }
  }
}

interface PoolCardProps {
  id: string
  title: string
  description: string
  tags: {
    label: string
    color: string
    bgColor: string
  }[]
  tvlCurrent: string
  tvlTarget: string
  progress: number
  apy: string
  lockdownDuration: string
  investmentRange: string
  participants: string
}

// Utility function to format large numbers
function formatNumber(num: number): string {
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

// Utility function to convert Wei to normal number
function weiToNumber(weiString: string): number {
  const wei = BigInt(weiString)
  const divisor = BigInt(10 ** 18)
  const result = Number(wei) / Number(divisor)
  return result
}

// Format lock duration
function formatLockDuration(days: number): string {
  if (days === 1) return '1 Day'
  if (days < 30) return `${days} Days`
  if (days === 30) return '1 Month'
  if (days < 365) {
    const months = Math.round(days / 30)
    return months === 1 ? '1 Month' : `${months} Months`
  }
  const years = Math.round(days / 365)
  return years === 1 ? '1 Year' : `${years} Years`
}

// Get tag styling
function getTagStyle(tag: string) {
  const tagLower = tag.toLowerCase()
  switch (tagLower) {
    case 'stable':
      return { color: '#00A65A', bgColor: '#00A65A20' }
    case 'yield':
      return { color: '#8959EE', bgColor: '#8959EE20' }
    case 'defi':
      return { color: '#3B82F6', bgColor: '#3B82F620' }
    case 'government':
      return { color: '#60449C', bgColor: '#60449C1A' }
    case 'real estate':
      return { color: '#3B82F6', bgColor: '#3B82F61A' }
    case 'esg':
      return { color: '#10B981', bgColor: '#10B9811A' }
    case 'technology':
      return { color: '#8B5CF6', bgColor: '#8B5CF61A' }
    default:
      return { color: '#6B7280', bgColor: '#6B72801A' }
  }
}

// Error component for failed data fetching
function DataError() {
  return (
    <div className="mx-auto mt-10 w-full max-w-[1080px] rounded-lg border border-red-200 bg-red-50 p-6 dark:border-red-800 dark:bg-red-950">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 dark:bg-red-900">
          <svg
            className="h-4 w-4 text-red-600 dark:text-red-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div>
          <h3 className="text-sm font-medium text-red-800 dark:text-red-200">
            Unable to load pools data
          </h3>
          <p className="text-sm text-red-600 dark:text-red-400">
            Please refresh the page or try again later
          </p>
        </div>
      </div>
    </div>
  )
}

// Convert Pool to PoolCardProps
function transformPoolData(pool: Pool): PoolCardProps {
  const tvlCurrentNumber = weiToNumber(pool.total_deposited_wei || '0')
  const tvlTargetNumber = weiToNumber(pool.max_utilization || '0')
  const minInvestment = parseFloat(pool.min_investment || '0')
  const maxInvestment = parseFloat(pool.max_investment || '0')

  // Calculate progress percentage
  const progress =
    tvlTargetNumber > 0
      ? Math.min((tvlCurrentNumber / tvlTargetNumber) * 100, 100)
      : 0

  // Generate tags from pool data
  const tags: { label: string; color: string; bgColor: string }[] = []

  if (pool.details?.tags) {
    pool.details.tags.forEach((tag) => {
      const style = getTagStyle(tag)
      tags.push({
        label: tag.charAt(0).toUpperCase() + tag.slice(1),
        color: style.color,
        bgColor: style.bgColor,
      })
    })
  }

  if (pool.is_active) {
    tags.push({
      label: 'Active',
      color: '#00A65A',
      bgColor: '#00A65A20',
    })
  }

  return {
    id: pool.id,
    title: pool.name,
    description:
      pool.details?.short_desc ||
      pool.details?.description ||
      'Investment pool with competitive returns',
    tags: tags.slice(0, 3),
    tvlCurrent: formatNumber(tvlCurrentNumber),
    tvlTarget: formatNumber(tvlTargetNumber),
    progress: Math.round(progress),
    apy: pool.apy_percent
      ? `${parseFloat(pool.apy_percent).toFixed(1)}%`
      : 'N/A',
    lockdownDuration: formatLockDuration(pool.lock_duration_days),
    investmentRange: `${formatNumber(minInvestment)} - ${formatNumber(maxInvestment)}`,
    participants: pool.total_investors.toString(),
  }
}

async function fetchPoolsData(): Promise<PoolCardProps[] | null> {
    const baseUrl = process.env.EDEN_BASE_URL || 'https://api.edenfinance.org/api/v1'
    const url = `${baseUrl}/pools`
    
    
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'chain-id': '42421',
      },
      next: { revalidate: 300 } 
    })
    
    if (!response.ok) {
      throw new Error(`HTTP error`)
    }
    
    const data: PoolsApiResponse = await response.json()
    
    if (!data.data || !Array.isArray(data.data)) {
      throw new Error('Invalid API response format')
    }
    
    return data.data.slice(0, 5).map(transformPoolData)
 
}


const PoolCard = ({ pool }: { pool: PoolCardProps }) => (
  <div className="pool-card bg-accent flex w-[340px] flex-shrink-0 flex-col rounded-[12px] px-6 py-6 sm:w-[410px] sm:py-10">
    <h1 className="text-foreground text-[20px] h-[72px] font-bold capitalize sm:text-[24px]">
      {pool.title}
    </h1>
    <p className="text-muted-foreground max-w-[331px] text-sm font-medium">
      {pool.description}
    </p>
    <div className="my-4 flex gap-2">
      {pool.tags.map((tag, index) => (
        <span
          key={index}
          className="rounded-[100px] border px-2 py-1.5 text-sm font-medium"
          style={{
            borderColor: tag.color,
            backgroundColor: tag.bgColor,
            color: tag.color,
          }}
        >
          {tag.label}
        </span>
      ))}
    </div>
    <div className="bg-background rounded-[8px]">
      <div className="progress flex flex-col rounded-[8px] border border-[#00A65A] p-5">
        <div className="text-foreground/80 flex items-center justify-between text-sm font-medium">
          <p>TVL Progress</p>
          <p>
            {pool.tvlCurrent} cNGN /{pool.tvlTarget} cNGN
          </p>
        </div>
        <div className="progress bar mt-2">
          <div className="bg-foreground/20 h-2 w-full rounded-full">
            <div
              className="h-2 rounded-full bg-[#00A65A]"
              style={{ width: `${pool.progress}%` }}
            ></div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-muted-foreground text-sm font-medium">
              APY
            </p>
            <p className="text-foreground font-bold">{pool.apy}</p>
          </div>
          <div className="flex w-1/2 flex-col gap-1">
            <p className="text-muted-foreground text-sm font-medium">
              Lockdown Duration
            </p>
            <p className="text-foreground text-sm font-bold">
              {pool.lockdownDuration}
            </p>
          </div>
        </div>
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-muted-foreground text-sm font-medium">
              Investment Range
            </p>
            <p className="text-foreground font-bold">{pool.investmentRange}</p>
          </div>
          <div className="flex w-1/2 flex-col justify-start gap-1">
            <p className="text-muted-foreground text-sm font-medium">
              Participants
            </p>
            <p className="text-foreground font-bold">{pool.participants}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const PoolsSection = async () => {
  const poolsData = await fetchPoolsData()

  // Create tripled array for infinite scroll if we have data
  const triplePoolsData = poolsData
    ? [...poolsData, ...poolsData]
    : []

  return (
    <div
      id="pools"
      className="flex flex-col items-center justify-center py-12 sm:py-22"
    >
      <div className="heading-tag text-foreground mb-3 flex items-center justify-center rounded-[32px] bg-[radial-gradient(42.68%_100%_at_50.12%_0%,#9A74EB_0%,#161616_100%)] p-[2px]">
        <div className="text-primary-foreground w-full rounded-[32px] px-6 py-3 text-sm font-medium dark:bg-[#150f21]">
          Pools
        </div>
      </div>
      <div className="mx-auto mb-10 flex max-w-[488px] flex-col items-center justify-center px-4 sm:px-0">
        <h1 className="text-foreground mb-2 text-center text-[24px] font-bold sm:text-[32px]">
          Diverse Investment Opportunities in One Place
        </h1>
        <p className="text-muted-foreground mb-3 text-center text-sm leading-[20px] font-medium">
          From stable money markets to high-yield tokenized assets, explore
          multiple ways to grow your wealth, all within a single ecosystem
        </p>
      </div>

      {/* Pools Display or Error */}
      {poolsData ? (
        <>
          {/* Infinite Slider Container */}
          <div className="mb-10 w-full overflow-hidden">
            <div className="animate-infinite-scroll flex w-fit gap-5">
              {triplePoolsData.map((pool, index) => (
                <PoolCard key={`${pool.id}-${index}`} pool={pool} />
              ))}
            </div>
          </div>
          <button className="mt-10 h-12 rounded-[32px] bg-[linear-gradient(90deg,_#9A74EB_0%,_#60449C_100%)] px-6 font-medium text-white transition-colors duration-200 hover:opacity-90">
            Explore All Pools
          </button>
        </>
      ) : (
        <DataError />
      )}
    </div>
  )
}

export default PoolsSection
