'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const ProductsSection = () => {
  const [activeTab, setActiveTab] = useState('lending')

  const lendingBorrowingData = [
    {
      icon: '/earnings.svg',
      title: 'Maximize Your Earnings',
      description:
        'Put your idle assets to work and earn industry-leading returns with rates you can trust. Transparent, competitive, and designed to maximize your growth.',
    },
    {
      icon: '/liquidity.svg',
      title: 'Liquidity Without Selling',
      description:
        'Unlock liquidity whenever you need it, all without selling your existing investments. Keep your positions intact while borrowing securely.',
    },
    {
      icon: '/visibility.svg',
      title: 'Full Visibility, Zero Surprises',
      description:
        'Stay in control with complete transparency. Monitor collateral health scores, track performance, and manage risk using real-time, verifiable data.',
    },
  ]

  const multiPoolData = [
    {
      icon: '/earnings.svg',
      title: 'Diversified Portfolio Management',
      description:
        'Spread your investments across multiple asset classes and risk profiles. Our intelligent allocation system optimizes your portfolio for maximum returns while minimizing exposure.',
    },
    {
      icon: '/liquidity.svg',
      title: 'Risk-Adjusted Returns',
      description:
        'Smart algorithms automatically balance high-yield opportunities with stable investments. Get the best of both worlds with our adaptive risk management system.',
    },
    {
      icon: '/visibility.svg',
      title: 'Real-Time Performance Analytics',
      description:
        'Track your multi-pool investments with comprehensive analytics. Monitor individual pool performance, compare returns, and make data-driven investment decisions.',
    },
  ]

  const currentData =
    activeTab === 'lending' ? lendingBorrowingData : multiPoolData

  return (
    <div
      id="lending"
      className="flex flex-col items-center justify-center px-4 py-12 sm:px-0 sm:py-22"
    >
      <div className="mx-auto mb-10 flex max-w-[488px] flex-col items-center justify-center">
        <h1 className="text-foreground mb-2 max-w-[365px] text-center text-[24px] font-bold sm:text-[32px]">
          One Ecosystem, Two Powerful Products
        </h1>
        <p className="text-muted-foreground mb-3 text-center text-sm leading-[20px] font-medium">
          Everything you expect from a smart investment—secure contracts, real
          returns, and complete transparency.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="mb-4 sm:mb-12 flex items-center justify-center">
        <div
          className="rounded-[12px] p-px"
          style={{ background: 'var(--primary-gradient)' }}
        >
          <div className="bg-background flex rounded-[12px] p-2">
            <button
              onClick={() => setActiveTab('lending')}
              className={`rounded-[8px] px-6 py-3 text-sm font-medium transition-all duration-200 ${
                activeTab === 'lending'
                  ? 'bg-foreground/10 text-foreground'
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              Lending & Borrowing
            </button>
            <button
              onClick={() => setActiveTab('multipool')}
              className={`rounded-[8px] px-6 py-3 text-sm font-medium transition-all duration-200 ${
                activeTab === 'multipool'
                  ? 'bg-foreground/10 text-foreground'
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              Multi-pool Investment
            </button>
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {currentData.map((item, index) => (
          <div
            key={`${activeTab}-${index}`}
            className="w-full rounded-[16px] p-px"
            style={{ background: 'var(--primary-gradient)' }}
          >
            <div className="bg-primary dark:bg-background flex h-full w-full flex-col items-start space-y-4 rounded-[16px] p-8">
              <Image src={item.icon} alt={item.title} width={40} height={40} />
              <h3 className="text-foreground text-xl leading-[28px] font-bold">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-[20px] font-medium">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductsSection
