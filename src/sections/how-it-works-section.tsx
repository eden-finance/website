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
    autoplaySpeed: 2000,
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
      icon: '🔗',
      title: 'Connect Your Wallet',
      description:
        'Securely link your crypto wallet to our platform with industry-standard encryption and protection.',
      image: '/api/placeholder/300/200',
    },
    {
      icon: '💰',
      title: 'Choose Investment Pool',
      description:
        'Select from our curated investment pools with different risk levels and expected returns.',
      image: '/api/placeholder/300/200',
    },
    {
      icon: '🚀',
      title: 'Start Earning',
      description:
        'Your funds are automatically deployed across diversified DeFi protocols to maximize returns.',
      image: '/api/placeholder/300/200',
    },
    {
      icon: '📊',
      title: 'Track & Withdraw',
      description:
        'Monitor your earnings in real-time and withdraw your funds anytime with no lock-up periods.',
      image: '/api/placeholder/300/200',
    },
  ]

  const isActiveCard = (index: number) => {
    return activeSlide % howItWorksData.length === index
  }

  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="heading-tag text-foreground mb-3 flex items-center justify-center rounded-[32px] bg-[radial-gradient(42.68%_100%_at_50.12%_0%,#9A74EB_0%,#161616_100%)] p-[2px]">
        <div className="rounded-[32px] bg-[#150f21] px-6 py-3 text-sm font-medium">
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
      <div className="w-full max-w-7xl px-4 mt-10">
        <Slider ref={sliderRef} {...settings}>
          {howItWorksData.map((item, index) => (
            <div key={index} className="px-3">
              <div
                className={`rounded-2xl p-6 text-white transition-all duration-300 ease-in-out ${
                  isActiveCard(index)
                    ? 'bg-gradient-to-r from-[#7E48F3] to-[#513293]'
                    : 'bg-[#070707]'
                }`}
              >
                {/* Card Content */}
                <div className="mb-4">
                  <div className="mb-4 text-4xl">{item.icon}</div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="mb-4 h-48 w-full rounded-lg object-cover"
                  />
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-300">
                    {item.description}
                  </p>
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
