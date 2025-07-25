import React from 'react'
import Link from 'next/link'
import { retrive_theme } from '~/actions/theme'

const CTA = async () => {
  const theme = await retrive_theme()

  // Determine if we should use light mode images
  const isLightMode =
    theme === 'light' ||
    (theme === 'system' &&
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: light)').matches)

  // Choose images based on theme
  const dashboardImage = isLightMode ? '/dashboard-light.png' : '/dashboard.png'
  const ellipseImage = isLightMode ? '/ellipse-light.svg' : '/ellipse.svg'

  return (
    <div className="flex items-center justify-center px-4 py-12 sm:px-0 sm:py-22">
      <div className="relative mx-auto w-[95%] max-w-7xl">
        <div
          className="relative h-[800px] w-full overflow-hidden rounded-[24px] sm:h-[700px] md:h-[550px]"
          style={{
            background: 'linear-gradient(90deg, #8148FB 0%, #5734A4 100%)',
          }}
        >
          <div className="absolute inset-0 -top-100 z-5 flex items-center justify-center sm:top-20">
            <img
              src={dashboardImage}
              alt="Eden Finance Background"
              className="h-[200px] w-[95%] max-w-[1200px] sm:h-[480px]"
            />
          </div>
          <div className="absolute inset-0 top-72 z-5 flex items-center justify-center">
            <img
              src={ellipseImage}
              alt="eden finance"
              className="max-w-[1200px]"
            />
          </div>
          <div className="absolute top-[calc(50%+100px)] left-1/2 z-10 mx-auto flex max-w-[434px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center text-center md:top-[calc(50%+72px)]">
            <img
              src="/eden-frame.svg"
              alt="Eden Finance"
              className="-mt-14 h-[140px] w-[240px]"
            />
            <h2 className="text-foreground -mt-8 text-[28px] font-bold sm:text-[32px]">
              Start Building Your DeFi Portfolio Today
            </h2>
            <p className="text-muted-foreground mb-4 text-sm font-bold">
              Whether you want to lend, borrow, or invest—Eden Finance gives you
              everything you need.
            </p>
            <div className="flex w-full flex-col items-center justify-center gap-4 sm:mt-4 md:flex-row">
              <button
                className="h-12 w-full rounded-[32px] px-6 font-medium text-[#60449C] transition-colors duration-200 hover:opacity-90 sm:w-1/2 dark:text-white"
                style={{
                  background: 'var(--button-access-bg)',
                }}
              >
                Access Lending
              </button>
              <Link
                href="https://vest.edenfinance.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-full items-center justify-center rounded-[32px] bg-[linear-gradient(90deg,_#9A74EB_0%,_#60449C_100%)] px-6 font-medium text-white transition-colors duration-200 hover:opacity-90 sm:w-1/2"
              >
                Launch App
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTA
