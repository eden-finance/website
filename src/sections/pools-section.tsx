import Link from 'next/link'
import React from 'react'
import PoolCard from '~/components/cards/pool-card'

export interface Pool {
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
  details: {
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

async function fetchPoolsData(): Promise<Pool[] | null> {
  const baseUrl =
    process.env.EDEN_BASE_URL
  const url = `${baseUrl}/pools`

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'chain-id': '42420',
    },
    next: { revalidate: 300 },
  })
  
  if (!response.ok) {
    console.log("failed to fetch pools. HTTP error", response)
    return []
    // throw new Error(`HTTP error`)
  }

  const data: PoolsApiResponse = await response.json()

  if (!data.data || !Array.isArray(data.data)) {
    console.log("failed to fetch pools: Invalid API response format",data)

    return []
    // throw new Error('Invalid API response format')
  }
  return data.data.slice(0, 5)
  // .map(transformPoolData)
}

const PoolsSection = async () => {
  const poolsData = await fetchPoolsData()

  const triplePoolsData = poolsData ? [...poolsData] : []

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
            <div className="mx-auto mb-10 flex max-w-[488px] flex-col items-center justify-center px-4 sm:px-0">
              {triplePoolsData.map((pool, index) => (
                <PoolCard key={`${pool.id}-${index}`} pool={pool} />
              ))}
            </div>
          </div>
          <Link
            href={`https://vest.edenfinance.org/pools/`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              // onClick={handleViewDetails}
              className="mt-10 h-12 rounded-[32px] bg-[linear-gradient(90deg,_#9A74EB_0%,_#60449C_100%)] px-6 font-medium text-white transition-colors duration-200 hover:opacity-90"
            >
              Explore All Pools
            </button>
          </Link>
        </>
      ) : (
        <DataError />
      )}
    </div>
  )
}

export default PoolsSection
