import HeroSection from '~/sections/hero-section'
import PoolsSection from '~/sections/pools-section'
import ProductsSection from '~/sections/products-section'
import CTA from '~/sections/cta-section'
import HowItWorks from '~/sections/how-it-works-section'
import Investment from '~/sections/investment-section'
import FAQS from '~/sections/faqs-section'

const Page = () => {
  return (
    <>
      <HeroSection />
      <PoolsSection />
      <ProductsSection />
      <CTA />
      <HowItWorks />
      <Investment />
      <FAQS />
    </>
  )
}

export default Page
