import Image from 'next/image'
import { formatNumber, weiToNumber } from '~/lib/utils'
import { ApiResponse, FeatureData } from '~/types/stats'
import { HeroContent } from './hero-content'

async function fetchAnalyticsData(): Promise<FeatureData[] | null> {
  try {
    const response = await fetch(
      `${process.env.EDEN_BASE_URL}/analytics/overview`,
      {
        next: { revalidate: 300 },
      }
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data: ApiResponse = await response.json()

    if (!data.status) {
      throw new Error('API returned error status')
    }

    // Convert and format the data
    const tvlNumber = weiToNumber(data.data.tvl_wei)
    const formattedTvl = formatNumber(tvlNumber)
    const formattedApy = (data.data.avg_apy_bps_tvl_weighted / 100).toFixed(1)

    return [
      {
        title: 'Total Value Locked (TVL)',
        description: `${formattedTvl} cNGN`,
        icon: '/tvl.svg',
      },
      {
        title: 'Active Pools',
        description: data.data.active_pools.toString(),
        icon: '/pools.svg',
      },
      {
        title: 'Min Investment',
        description: '1,000 cNGN',
        icon: '/users.svg',
      },
      {
        title: 'Average Pool Returns',
        description: `${formattedApy}%`,
        icon: '/avp.svg',
      },
    ]
  } catch (error) {
    console.error('Error fetching analytics data:', error)
    return null
  }
}

const Hero = async () => {
  const features = await fetchAnalyticsData()

  return (
    <div className="relative -mt-20 flex items-center justify-center overflow-hidden py-20">
      {/* Background vectors - these stay static for better performance */}
      <Image
        src="/frame-2.svg"
        alt=""
        width={900}
        height={1100}
        className="pointer-events-none absolute top-[-130px] -left-40 z-0 h-[800px] w-[900px] sm:left-0 sm:h-[1100px]"
        priority
      />
      <Image
        src="/frame-1.svg"
        alt=""
        width={900}
        height={1100}
        className="pointer-events-none absolute top-[-130px] -right-40 z-0 h-[800px] w-[900px] sm:right-0 sm:h-[1100px]"
        priority
      />

      {/* Animated content */}
      <HeroContent features={features} />
    </div>
  )
}

export default Hero