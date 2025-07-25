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
    <div className="relative -mt-20 flex items-center justify-center overflow-hidden py-20">
      {/* Vector decorations - positioned behind content */}
      <img
        src="/frame-2.svg"
        alt=""
        className="pointer-events-none absolute top-[-180px] left-0 z-0 h-[805px] w-[535px]"
      />
      <img
        src="/frame-1.svg"
        alt=""
        className="pointer-events-none absolute top-[-180px] right-0 z-0 h-[805px] w-[535px]"
      />

      {/* Main content - positioned above vectors */}
      <div className="content relative z-10 mx-auto flex max-w-[1080px] flex-col items-center justify-center px-4 sm:px-0">
        <img src="/eden-frame.svg" alt="Eden Finance" className="" />
        <div className="flex max-w-[641px] flex-col items-center">
          <h1 className="text-foreground -mt-12 mb-4 text-center text-5xl font-bold md:text-[64px] md:leading-[72px]">
            Africa&apos;s Complete DeFi Ecosystem
          </h1>
          <p className="text-muted-foreground text-center text-sm text-[20px] leading-[32px] font-medium sm:text-base">
            Lend, borrow, and invest across multiple pools from Nigerian money
            markets to government bonds and tokenized company shares.
          </p>
          <div className="mt-6 flex w-full flex-col items-center justify-center gap-4 sm:mt-4 sm:flex-row sm:gap-6">
            <button
              className="h-12 w-full rounded-[32px] px-6 font-medium text-[#60449C] transition-colors duration-200 hover:opacity-90 sm:w-auto dark:text-white"
              style={{
                background: 'var(--button-access-bg)',
              }}
            >
              Access Lending
            </button>
            <button className="h-12 w-full rounded-[32px] bg-[linear-gradient(90deg,_#9A74EB_0%,_#60449C_100%)] px-6 font-medium text-white transition-colors duration-200 hover:opacity-90 sm:w-auto">
              Explore Pools
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 grid w-full max-w-[1080px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-[16px] p-[1px]"
              style={{ background: 'var(--primary-gradient)' }}
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
                <p className="bg-[linear-gradient(91.54deg,_#000000_-30.84%,_#9A74EB_126.52%)] bg-clip-text text-[32px] font-bold text-transparent dark:bg-[linear-gradient(91.54deg,_#FFFFFF_-30.84%,_#9A74EB_126.52%)]">
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
