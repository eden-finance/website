import React from 'react'

const HowItWorks = () => {
  return (
    <div className="flex items-center justify-center py-16">
      <div className="heading-tag text-foreground mb-3 flex items-center justify-center rounded-[32px] bg-[radial-gradient(42.68%_100%_at_50.12%_0%,#9A74EB_0%,#161616_100%)] p-[2px]">
        <div className="rounded-[32px] bg-[#150f21] px-6 py-3 text-sm font-medium">
          How It Works
        </div>

      </div>
      <div className="mx-auto mb-10 flex max-w-[488px] flex-col items-center justify-center">
        <h1 className="text-foreground mb-2 text-center text-[32px] font-bold">
          Diverse Investment Opportunities in One Place
        </h1>
        <p className="text-muted-foreground mb-3 text-center text-sm leading-[20px] font-medium">
          From stable money markets to high-yield tokenized assets, explore
          multiple ways to grow your wealth, all within a single ecosystem
        </p>
      </div>
    </div>
  )
}

export default HowItWorks
