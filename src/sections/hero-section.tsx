const Hero = () => {
  const features = [
    {
      title: 'Total Value Locked (TVL)',
      description: 'cNGN 2.8B+',
      icon: '/tvl.svg',
    },
    {
      title: 'Active Pools',
      description: '120+',
      icon: '/pools.svg',
    },
    {
      title: 'Users',
      description: '15,000+',
      icon: '/users.svg',
    },
    {
      title: 'Average Pool Returns ',
      description: '12.5%',
      icon: '/avp.svg',
    },
  ]
  return (
    <div className="flex min-h-screen items-center justify-center pb-20">
      <div className="content mx-auto flex max-w-[1080px] flex-col items-center justify-center">
        <img src="/eden-frame.svg" alt="Eden Finance" className="" />
        <div className="flex max-w-[641px] flex-col items-center">
          <h1 className="text-foreground -mt-12 mb-4 text-center text-[64px] leading-[72px] font-bold">
            Africa's Complete DeFi Ecosystem
          </h1>
          <p className="text-muted-foreground text-center text-[20px] leading-[32px] font-medium">
            Lend, borrow, and invest across multiple pools from Nigerian money
            markets to government bonds and tokenized company shares.
          </p>
          <div className="mt-8 flex items-center justify-center gap-6">
            <button className="h-12 rounded-[32px] bg-[linear-gradient(90deg,_rgba(154,116,235,0.2)_0%,_rgba(96,68,156,0.2)_100%)] px-6 font-medium text-white transition-colors duration-200 hover:opacity-90">
              Access Lending
            </button>{' '}
            <button className="h-12 rounded-[32px] bg-[linear-gradient(90deg,_#9A74EB_0%,_#60449C_100%)] px-6 font-medium text-white transition-colors duration-200 hover:opacity-90">
              Explore Pools
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 grid w-full max-w-[1080px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-[16px] bg-[radial-gradient(42.68%_100%_at_50.12%_0%,#9A74EB_0%,#161616_100%)] p-[1px]"
            >
              <div className="bg-background flex flex-col rounded-[16px] p-6">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="mb-6 h-12 w-12"
                />
                <h3 className="text-muted-foreground mb-1 text-sm font-medium">
                  {feature.title}
                </h3>
                <p className="bg-[linear-gradient(91.54deg,_#FFFFFF_-30.84%,_#9A74EB_126.52%)] bg-clip-text text-[32px] font-bold text-transparent">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero
