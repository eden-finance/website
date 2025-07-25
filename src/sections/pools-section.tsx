import React from 'react'

interface PoolCardProps {
  id: number
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
  expectedReturn: string
  lockdownDuration: string
  investmentRange: string
  participants: string
}

const PoolsSection = () => {
  const poolsData = [
    {
      id: 1,
      title: 'Infrastructure Development',
      description:
        'Fund critical infrastructure projects with government backing and stable returns for long-term growth.',
      tags: [
        { label: 'Government', color: '#60449C', bgColor: '#60449C1A' },
        { label: 'High Risk', color: '#F87171', bgColor: '#F871711A' },
      ],
      tvlCurrent: '1,000',
      tvlTarget: '100,000',
      progress: 40,
      expectedReturn: '15%',
      lockdownDuration: '30 Days',
      investmentRange: '1,000 - 10,000',
      participants: '2,000',
    },
    {
      id: 2,
      title: 'Real Estate Tokenization',
      description:
        'Invest in fractional ownership of premium real estate properties across major metropolitan areas.',
      tags: [
        { label: 'Real Estate', color: '#3B82F6', bgColor: '#3B82F61A' },
        { label: 'Medium Risk', color: '#F59E0B', bgColor: '#F59E0B1A' },
      ],
      tvlCurrent: '25,000',
      tvlTarget: '500,000',
      progress: 60,
      expectedReturn: '12%',
      lockdownDuration: '90 Days',
      investmentRange: '5,000 - 50,000',
      participants: '1,250',
    },
    {
      id: 3,
      title: 'Green Energy Bonds',
      description:
        'Support renewable energy projects while earning sustainable returns from solar and wind initiatives.',
      tags: [
        { label: 'ESG', color: '#10B981', bgColor: '#10B9811A' },
        { label: 'Low Risk', color: '#6B7280', bgColor: '#6B72801A' },
      ],
      tvlCurrent: '75,000',
      tvlTarget: '200,000',
      progress: 75,
      expectedReturn: '8%',
      lockdownDuration: '180 Days',
      investmentRange: '2,500 - 25,000',
      participants: '3,500',
    },
    {
      id: 4,
      title: 'Tech Startup Fund',
      description:
        'Early-stage investments in promising fintech and blockchain startups with high growth potential.',
      tags: [
        { label: 'Technology', color: '#8B5CF6', bgColor: '#8B5CF61A' },
        { label: 'Very High Risk', color: '#EF4444', bgColor: '#EF44441A' },
      ],
      tvlCurrent: '15,000',
      tvlTarget: '300,000',
      progress: 25,
      expectedReturn: '25%',
      lockdownDuration: '365 Days',
      investmentRange: '10,000 - 100,000',
      participants: '750',
    },
    {
      id: 5,
      title: 'Stable Money Market',
      description:
        'Low-risk investment in government securities and high-grade corporate bonds for steady income.',
      tags: [
        { label: 'Stable', color: '#059669', bgColor: '#0596691A' },
        { label: 'Very Low Risk', color: '#6B7280', bgColor: '#6B72801A' },
      ],
      tvlCurrent: '180,000',
      tvlTarget: '250,000',
      progress: 90,
      expectedReturn: '5%',
      lockdownDuration: '60 Days',
      investmentRange: '500 - 5,000',
      participants: '8,500',
    },
  ]

  const triplePoolsData = [...poolsData, ...poolsData, ...poolsData]

  const PoolCard = ({ pool }: { pool: PoolCardProps }) => (
    <div className="pool-card bg-accent flex w-[340px] flex-shrink-0 flex-col rounded-[12px] px-6 py-6 sm:w-[410px] sm:py-10">
      <h1 className="text-foreground text-[20px] font-bold capitalize sm:text-[24px]">
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
              {pool.tvlCurrent} cngn/{pool.tvlTarget} cngn
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
                Expected Return
              </p>
              <p className="text-foreground font-bold">{pool.expectedReturn}</p>
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
              <p className="text-foreground font-bold">
                {pool.investmentRange}
              </p>
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
        <h1 className="text-foreground mb-2 text-center text-[32px] font-bold">
          Diverse Investment Opportunities in One Place
        </h1>
        <p className="text-muted-foreground mb-3 text-center text-sm leading-[20px] font-medium">
          From stable money markets to high-yield tokenized assets, explore
          multiple ways to grow your wealth, all within a single ecosystem
        </p>
      </div>

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
    </div>
  )
}

export default PoolsSection
