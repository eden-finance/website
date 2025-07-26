import Image from 'next/image'

const Hero = () => {
  const features = [
    {
      title: 'Total Value Locked (TVL)',
      description: '100M+ cNGN',
      icon: '/tvl.svg',
    },
    {
      title: 'Active Pools',
      description: '2',
      icon: '/pools.svg',
    },
    {
      title: 'Min Investment',
      description: '1,000 cNGN',
      icon: '/users.svg',
    },
    {
      title: 'Average Pool Returns ',
      description: '20.5%',
      icon: '/avp.svg',
    },
  ]

  return (
    <div className="relative -mt-20 flex items-center justify-center overflow-hidden py-20">
      <Image
        src="/frame-2.svg"
        alt=""
        width={900}
        height={1100}
        className="pointer-events-none absolute top-[-130px] -left-40 z-0 h-[800px] w-[900px] sm:left-0 sm:h-[1100px]"
      />
      <Image
        src="/frame-1.svg"
        alt=""
        width={900}
        height={1100}
        className="pointer-events-none absolute top-[-130px] -right-40 z-0 h-[800px] w-[900px] sm:right-0 sm:h-[1100px]"
      />

      {/* Main content - positioned above vectors */}
      <div className="content relative z-10 mx-auto flex max-w-[1080px] flex-col items-center justify-center px-4 pt-9 sm:px-0 sm:pt-4">
        <Image
          src="/eden-frame.svg"
          alt="Eden Finance"
          width={350}
          height={180}
          className="mt-10 lg:mt-16"
        />
        <div className="flex max-w-[641px] flex-col items-center">
          <h1 className="text-foreground -mt-8 sm:-mt-10 mb-4 text-center text-5xl font-bold md:text-[64px] md:leading-[72px]">
            Africa&apos;s Complete DeFi Ecosystem
          </h1>
          <p className="text-muted-foreground text-center text-base leading-[32px] font-medium">
            Lend, borrow, and invest across multiple pools from Nigerian money
            markets to government bonds and tokenized company shares.
          </p>
          
          <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:mt-4 sm:gap-6 md:flex-row">
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
        <div className="mt-16 grid w-full max-w-[1080px] grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="h-full rounded-[16px] p-[1px]"
              style={{ background: 'var(--primary-gradient)' }}
            >
              <div className="dark:bg-background flex h-full flex-col rounded-[16px] bg-[#F7F7f7] p-4 sm:p-6">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={48}
                  height={48}
                  className="mb-4 h-8 w-8 sm:mb-6 sm:h-12 sm:w-12"
                />
                <h3 className="text-muted-foreground mb-1 text-xs font-medium sm:text-sm">
                  {feature.title}
                </h3>
                <p className="bg-[linear-gradient(91.54deg,_#000000_-30.84%,_#9A74EB_126.52%)] bg-clip-text text-xl font-bold text-transparent sm:text-[32px] dark:bg-[linear-gradient(91.54deg,_#FFFFFF_-30.84%,_#9A74EB_126.52%)]">
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
