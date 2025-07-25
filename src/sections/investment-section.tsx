import React from 'react'

const Investment = () => {
  const investment = [
    {
      icon: '/access.svg',
      title: 'Multi-Asset Access',
      description:
        'Deposit your preferred token and let our system handle the rest automatic swapping ensures you can invest without worrying about manual conversions or extra steps.',
    },
    {
      icon: '/diversified-pools.svg',
      title: 'Diversified Pools',
      description:
        'Access a wide spectrum of investment options, from low-risk money markets and secure government bonds to innovative tokenized corporate assets all in one place.',
    },
    {
      icon: '/utility.svg',
      title: 'LP Token Utility',
      description:
        'Turn your portfolio into an active asset. use your investment tokens as collateral across our ecosystem to unlock borrowing, increase liquidity, and amplify your returns.',
    },
  ]
  return (
    <div id="security" className="mx-auto max-w-[1259px] px-4 py-22 sm:px-0">
      <div className="mx-auto mb-10 flex max-w-[488px] flex-col items-center justify-center">
        <h1 className="text-foreground mb-2 text-center text-2xl font-bold md:text-[32px]">
          Simple, Secure, and Rewarding Investments, Built for You
        </h1>
        <p className="text-muted-foreground mb-3 text-center text-sm leading-[20px] font-medium">
          Everything you expect from a smart investment—secure contracts, real
          returns, and complete transparency.
        </p>
      </div>
      <div className="mx-auto mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {investment.map((item, index) => (
          <div
            key={`${index}`}
            className="mx-auto w-full rounded-[16px] p-px"
            style={{ background: 'var(--primary-gradient)' }}
          >
            <div className="bg-background flex h-full w-full flex-col items-start space-y-4 rounded-[16px] p-6 md:p-8">
              <img src={item.icon} alt={item.title} />
              <h3 className="text-foreground text-lg leading-[28px] font-bold md:text-xl">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-[20px] font-medium">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 flex flex-col lg:flex-row lg:items-start lg:justify-between">
        <div className="bg-background flex max-w-[420px] flex-col items-start space-y-4 rounded-[16px] p-6 md:p-8">
          <img src={'/leaf.svg'} alt={'DeFi'} />
          <h3 className="text-foreground text-lg leading-[28px] font-bold md:text-xl">
            Complete DeFi Suite
          </h3>
          <p className="text-muted-foreground text-sm leading-[20px] font-medium">
            Experience the full power of DeFi with a complete suite that
            combines lending, borrowing, and structured investments
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center lg:mt-0 lg:flex-row lg:items-end">
          <img
            src={'/eden-cta.png'}
            alt={'Eden Finance'}
            className="h-[250px] w-auto md:h-[300px] lg:h-[388px]"
          />
          <div className="mt-6 flex max-w-[440px] flex-col items-center space-y-4 lg:mt-0 lg:ml-6 lg:items-start lg:justify-end lg:pb-8">
            <div className="flex flex-col items-center space-y-4 lg:items-start">
              <p className="text-muted-foreground text-center text-sm leading-[20px] font-medium lg:text-left">
                Designed to help you maximize returns while maintaining full
                transparency and security at every step
              </p>
              <button className="h-12 rounded-[32px] bg-[linear-gradient(90deg,_#9A74EB_0%,_#60449C_100%)] px-6 font-medium text-white transition-colors duration-200 hover:opacity-90">
                Start Investing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Investment
