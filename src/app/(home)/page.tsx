import Image from 'next/image'
import React from 'react'
import DefiEcosystem from '~/sections/home/defi-ecosystem'
import HeroSection from '~/sections/home/hero-section'
import AlternativeStatsSection from '~/sections/home/stats-section'

const Page = () => {
  return (
    <>
      <HeroSection />
      <section className="relative overflow-hidden">
        <Image
          src="/noise_effect.webp"
          alt="noise effect"
          fill
          priority
          className="pointer-events-none fixed inset-0 z-50 h-dvh w-screen md:opacity-90"
        />
        <AlternativeStatsSection />
        <DefiEcosystem />
      </section>
      {/* <ThemeToggle /> */}
    </>
  )
}

export default Page
