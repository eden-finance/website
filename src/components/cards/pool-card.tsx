'use client'
import { useState } from 'react'

import { Pool } from '~/sections/pools-section'
import { formatLockDuration, formatWeiToCNGN } from '~/lib/utils'
import { InfoTooltip } from '../ui/infoToolTip'

export const EDEN_APP_URL = 'https://app.vest.edenfinance.org/'

interface PoolCardProps {
  pool: Pool
}

const PoolCard = ({ pool }: PoolCardProps) => {
  const [bannerError, setBannerError] = useState(false)
  const [logoError, setLogoError] = useState(false)

  const formatCurrency = (amount: string) => {
    const num = parseFloat(amount || '0')
    return num.toLocaleString()
  }

  const getInvestmentRange = () => {
    const min = formatCurrency(pool.min_investment)
    const max = formatCurrency(pool.max_investment)
    return `${min} - ${max}`
  }

  // Get the banner image with fallback
  const getBannerImage = () => {
    if (bannerError || !pool.details?.banner_url) {
      return './banner.jpg'
    }
    return pool.details.banner_url
  }

  // Get the logo image with fallback
  const getLogoImage = () => {
    if (logoError || !pool.details?.logo_url) {
      return './naija.png'
    }
    return pool.details.logo_url
  }

  // Navigation functions
  const handleViewDetails = () => {
    window.open(
      `${EDEN_APP_URL}pools/${pool.id}`,
      '_blank',
      'noopener,noreferrer'
    )
  }

  const handleInvestNow = () => {
    if (pool.is_active) {
      window.open(
        `${EDEN_APP_URL}pools/${pool.id}`,
        '_blank',
        'noopener,noreferrer'
      )
    }
  }

  const getTags = () => {
    const tags = []

    if (pool.details?.tags) {
      pool.details.tags.forEach((tag) => {
        tags.push({
          label: tag.charAt(0).toUpperCase() + tag.slice(1),
          color:
            tag === 'stable'
              ? '#00A65A'
              : tag === 'yield'
                ? '#8959EE'
                : tag === 'defi'
                  ? '#3B82F6'
                  : '#6B7280',
          bgColor:
            tag === 'stable'
              ? '#00A65A20'
              : tag === 'yield'
                ? '#8959EE20'
                : tag === 'defi'
                  ? '#3B82F620'
                  : '#6B728020',
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

    return tags.slice(0, 3)
  }

  const tags = getTags()

  // Truncate title to maximum of 6 words or 40 characters, whichever is shorter
  const truncateTitle = (title: string) => {
    const words = title.split(' ')
    if (words.length > 6) {
      return words.slice(0, 6).join(' ') + '...'
    }
    if (title.length > 40) {
      return title.substring(0, 37) + '...'
    }
    return title
  }

  // Truncate description to maximum of 15 words or 100 characters
  const truncateDescription = (desc: string) => {
    if (!desc) return ''
    const words = desc.split(' ')
    if (words.length > 15) {
      return words.slice(0, 15).join(' ') + '...'
    }
    if (desc.length > 100) {
      return desc.substring(0, 97) + '...'
    }
    return desc
  }

  return (
    <div className="pool-card bg-accent flex h-full w-[320px] flex-shrink-0 flex-col overflow-hidden rounded-[12px] sm:w-[420px]">
      {/* Banner Section */}
      <div className="relative h-24 w-full sm:h-32">
        <img
          src={getBannerImage()}
          alt={`${pool.name} banner`}
          className="h-full w-full object-cover"
          onError={() => setBannerError(true)}
        />
        {/* Logo positioned half in banner, half in content */}
        <div className="absolute -bottom-6 left-4 sm:left-6">
          <div className="h-12 w-12 overflow-hidden rounded-lg bg-white p-1 shadow-lg sm:h-16 sm:w-16 dark:bg-[#030303]">
            <img
              src={getLogoImage()}
              alt={`${pool.name} logo`}
              className="h-full w-full rounded-md object-cover"
              onError={() => setLogoError(true)}
            />
          </div>
        </div>
      </div>

      {/* Content Section with top padding for logo space */}
      <div className="flex flex-1 flex-col px-4 py-6 pt-6 sm:px-6 sm:py-8 sm:pt-8">
        {/* Header Section - Fixed height */}
        <div className="mb-4 flex-none">
          <h1
            className="text-foreground flex h-[54px] items-start text-[18px] leading-tight font-bold capitalize sm:h-[72px] sm:text-[24px]"
            title={pool.name} // Show full title on hover
          >
            {truncateTitle(pool.name)}
          </h1>
          <p
            className="text-muted-foreground flex max-w-[331px] items-start overflow-hidden text-xs leading-tight font-medium sm:text-sm"
            title={pool.details?.short_desc || pool.details?.description}
          >
            {truncateDescription(
              pool.details?.short_desc || pool.details?.description || ''
            )}
          </p>
        </div>

        {/* Tags Section - Fixed height */}
        <div className="mb-4 h-[40px] flex-none">
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-[100px] border px-2 py-1.5 text-xs font-medium whitespace-nowrap sm:text-sm"
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
          )}
        </div>

        {/* Content Section - Flexible height */}
        <div className="flex flex-1 flex-col">
          <div className="bg-background flex-1 rounded-[8px]">
            <div className="progress flex flex-col rounded-[8px] border border-[#00A65A] p-3 sm:p-5">
              <div className="text-foreground/80 flex items-center justify-between text-sm font-medium">
                <p>TVL Progress</p>
                <p className="text-right">
                  {formatWeiToCNGN(pool?.total_deposited_wei)} /{' '}
                  {formatWeiToCNGN(pool?.max_utilization)} cNGN
                </p>
              </div>
              <div className="progress bar mt-2">
                <div className="bg-foreground/20 relative h-2 w-full overflow-hidden rounded-full">
                  <div
                    className="absolute top-0 left-0 h-full rounded-full bg-[#00A65A] transition-all duration-300 ease-in-out"
                    style={{ width: `${pool?.utilization_rate}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="px-3 py-3 text-sm sm:p-4">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <p className="text-muted-foreground flex items-center gap-1 font-medium">
                    Utilization Rate
                    <InfoTooltip
                      message={
                        <>
                          Percentage of the pool's available funds currently
                          invested. Higher rates mean most of the pool's
                          liquidity is in use.
                        </>
                      }
                    />
                  </p>
                  <p className="text-foreground font-bold">
                    {(() => {
                      if (!pool.utilization_rate) return '0%'

                      const util = parseFloat(pool.utilization_rate)
                      if (util === 0) return '0%'
                      if (util > 0 && util < 0.01) return '0.01%'
                      return `${util.toFixed(2)}%`
                    })()}
                  </p>
                </div>
                <div className="flex w-1/2 flex-col gap-1">
                  <p className="text-muted-foreground flex items-center gap-1 font-medium">
                    Lock Duration
                    <InfoTooltip
                      message={
                        <>
                          Funds remain locked for the selected term. You can
                          withdraw principal + returns after maturity.
                        </>
                      }
                    />
                  </p>
                  <p className="text-foreground font-bold">
                    {formatLockDuration(pool.lock_duration)}
                  </p>
                </div>
              </div>

              <div className="mb-4 flex items-start justify-between">
                <div className="flex flex-col gap-1">
                  <p className="text-muted-foreground flex items-center gap-1 font-medium">
                    Investment Range
                    <InfoTooltip
                      message={
                        <>
                          Minimum and maximum amount you can invest in this pool
                          (denominated in cNGN).
                        </>
                      }
                    />
                  </p>
                  <p className="text-foreground font-bold">
                    {getInvestmentRange()} cNGN
                  </p>
                </div>
              </div>

              <div className="flex items-start justify-between">
                <div className="flex w-1/2 flex-col justify-start gap-1">
                  <p className="text-muted-foreground flex items-center gap-1 font-medium">
                    Participants
                    <InfoTooltip
                      message={
                        <>
                          Number of unique investors currently holding active
                          positions in this pool.
                        </>
                      }
                    />
                  </p>
                  <p className="text-foreground font-bold">
                    {pool.total_investors}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section - Fixed height */}
        <div className="mt-auto flex flex-none items-center justify-between pt-4">
          <button
            onClick={handleViewDetails}
            className="bg-muted text-muted-foreground hover:bg-muted/80 rounded-full px-4 py-3 text-sm font-medium transition-colors sm:px-6"
          >
            View Details
          </button>
          <button
            onClick={handleInvestNow}
            disabled={!pool.is_active}
            className="rounded-full bg-gradient-to-r from-[#8959EE] to-[#503290] px-4 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 sm:px-6"
          >
            {pool.is_active ? 'Invest Now' : 'Inactive'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default PoolCard
