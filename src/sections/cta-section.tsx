import React from 'react'

const CTA = () => {
  return (
    <div className="flex items-center justify-center py-22 px-4 sm:px-0">
      <div className="relative mx-auto w-full max-w-7xl">
        {/* Main Gradient Container */}
        <div
          className="relative overflow-hidden rounded-[24px]"
          style={{
            background: 'linear-gradient(90deg, #8148FB 0%, #5734A4 100%)',
            height: '485px',
          }}
        >
          <div className="absolute inset-0 z-5 flex items-center justify-center">
            <img
              src="/dashboard.png"
              alt="Eden Finance Background"
              className="h-[390px] w-auto object-contain"
            />
          </div>

          {/* Half Ellipse Overlay */}
          {/* <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="relative flex flex-col items-center justify-center px-12 py-16"
              style={{
                width: 'min(90vw, 800px)',
                height: '280px',
                background: '#090909',
                borderRadius: '400px 400px 0 0',
                border: '1px solid transparent',
                backgroundImage: `
                  radial-gradient(42.68% 100% at 50.12% 0%, #9A74EB 0%, #161616 100%),
                  linear-gradient(#090909, #090909)
                `,
                backgroundOrigin: 'border-box',
                backgroundClip: 'content-box, border-box',
              }}
            >
              <div className="flex max-w-2xl flex-col items-center space-y-6 text-center">
                <div className="mb-2">
                  <img
                    src="/eden-frame.svg"
                    alt="Eden Finance"
                    className="h-16 w-auto"
                  />
                </div>
                <h2 className="text-3xl leading-tight font-bold text-white lg:text-4xl">
                  Start Building Your DeFi Portfolio Today
                </h2>
                <p className="max-w-xl text-lg leading-relaxed font-medium text-gray-300">
                  Whether you want to lend, borrow, or invest—Eden Finance gives
                  you everything you need.
                </p>
                <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                  <button className="rounded-[12px] bg-white px-8 py-4 font-bold text-[#8148FB] shadow-lg transition-all duration-200 hover:scale-105 hover:bg-gray-100">
                    Access Lending
                  </button>
                  <button className="rounded-[12px] border-2 border-white bg-transparent px-8 py-4 font-bold text-white transition-all duration-200 hover:scale-105 hover:bg-white hover:text-[#8148FB]">
                    Launch App
                  </button>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default CTA
