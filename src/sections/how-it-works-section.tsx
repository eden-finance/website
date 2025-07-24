'use client'
import React, { useRef, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const HowItWorks = () => {
  const sliderRef = useRef<Slider>(null)
  const [activeSlide, setActiveSlide] = useState(0)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    arrows: false,
    beforeChange: (current: number, next: number) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }

  // Sample data - replace with your actual data
  const howItWorksData = [
    {
      step: 1,
      title: 'Choose Your Pool',
      description:
        'Explore diverse investment opportunities across money markets, government bonds, and tokenized corporate assets. Filter by APY, risk level, and duration to find the perfect match for your goals.',
      image: '/eden-pool.png',
    },
    {
      step: 2,
      title: 'Invest Any Token',
      description:
        'No need to swap manually. Deposit any supported token, and Eden converts it to the required asset using built-in swapping technology. This makes investing seamless, fast, and beginner-friendly.',
      image: '/eden-invest.png',
    },
    {
      step: 3,
      title: 'Earn and Utilize',
      description:
        "Once invested, you'll receive LP tokens that represent your position in the pool. These tokens can be used in multiple ways—hold them to earn yield or stake them for extra rewards",
      image: '/eden-earn.png',
    },
    {
      step: 4,
      title: 'Withdraw Anytime',
      description:
        'When your investment matures or you need funds, withdraw your principal and accumulated returns with a single click. For flexible pools, you can even withdraw early, subject to pool terms.',
      image: '/eden-withdraw.png',
    },
  ]

  const isActiveCard = (index: number) => {
    return activeSlide % howItWorksData.length === index
  }

  return (
    <div
      id="docs"
      className="flex flex-col items-center justify-center px-4 py-22 sm:px-0"
    >
      <div className="heading-tag text-foreground mb-3 flex items-center justify-center rounded-[32px] bg-[radial-gradient(42.68%_100%_at_50.12%_0%,#9A74EB_0%,#161616_100%)] p-[2px]">
        <div className="text-primary-foreground rounded-[32px] px-6 py-3 text-sm font-medium dark:bg-[#150f21]">
          How It Works
        </div>
      </div>
      <div className="mx-auto mb-14 flex max-w-[488px] flex-col items-center justify-center">
        <h1 className="text-foreground mb-2 text-center text-[32px] font-bold">
          How Eden finance Makes Investing Effortless
        </h1>
        <p className="text-muted-foreground mb-3 text-center text-sm leading-[20px] font-medium">
          From wallet connection to earning and withdrawal, our 4-step process
          makes secure investing simple, transparent, and fully automated.
        </p>
      </div>

      {/* Slider Container */}
      <div className="mt-10 w-full max-w-7xl">
        <Slider ref={sliderRef} {...settings}>
          {howItWorksData.map((item, index) => (
            <div key={index} className="">
              <div
                className={`h-[595px] rounded-2xl p-6 sm:mx-2 ${
                  isActiveCard(index)
                    ? 'bg-gradient-to-r from-[#7E48F3] to-[#513293] text-white'
                    : 'bg-popover text-foreground opacity-40'
                }`}
              >
                <div className="mb-4 h-full">
                  <div
                    className={`text-foreground mb-4 inline-flex items-center justify-center text-[24px] font-bold ${
                      isActiveCard(index) &&
                      'h-10 w-10 rounded-[8px] text-white'
                    }`}
                    style={
                      isActiveCard(index)
                        ? {
                            background:
                              'radial-gradient(154.81% 154.81% at 4.81% -35.58%, #7435FA 0%, #050505 100%)',
                          }
                        : {}
                    }
                  >
                    {item.step}
                  </div>
                  <h3 className="mb-3 text-[32px] font-bold">{item.title}</h3>
                  <p
                    className={`text-foreground mb-10 text-sm leading-relaxed ${isActiveCard(index) && 'text-white'} `}
                  >
                    {item.description}
                  </p>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`h-[320px] w-full object-cover  ${
                      isActiveCard(index) ? '' : 'grayscale'
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default HowItWorks
