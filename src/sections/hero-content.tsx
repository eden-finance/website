'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FeatureData } from '~/types/stats'

interface HeroContentProps {
  features: FeatureData[] | null
}

// Animation variants for cleaner code
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const featureCardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

export const HeroContent = ({ features }: HeroContentProps) => {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="content relative z-10 mx-auto flex max-w-[1080px] flex-col items-center justify-center px-4 pt-9 sm:px-0 sm:pt-4"
    >
      <motion.div variants={itemVariants}>
        <Image
          src="/eden-frame.svg"
          alt="Eden Finance"
          width={350}
          height={180}
          className="mt-10 lg:mt-16"
        />
      </motion.div>

      <div className="flex max-w-[641px] flex-col items-center">
        <motion.h1 
          variants={itemVariants}
          className="text-foreground -mt-8 mb-4 text-center text-5xl font-bold sm:-mt-10 md:text-[64px] md:leading-[72px]"
        >
          Africa&apos;s Complete DeFi Ecosystem
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-muted-foreground text-center text-base leading-[32px] font-medium"
        >
          Lend, borrow, and invest across multiple pools from Nigerian money
          markets to government bonds and tokenized company shares.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:mt-4 sm:gap-6 md:flex-row"
        >
          <Link
            href="https://app.edenfinance.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="h-12 w-full rounded-[32px] px-6 font-medium text-[#60449C] transition-colors duration-200 hover:opacity-90 sm:w-auto dark:text-white"
              style={{
                background: 'var(--button-access-bg)',
              }}
            >
              Access Lending
            </motion.button>
          </Link>
          <Link
            href="https://vest.edenfinance.org/pools"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="h-12 w-full rounded-[32px] bg-[linear-gradient(90deg,_#9A74EB_0%,_#60449C_100%)] px-6 font-medium text-white transition-colors duration-200 hover:opacity-90 sm:w-auto"
            >
              Explore Pools
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Features Section or Error */}
      {features ? (
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid w-full max-w-[1080px] grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={featureCardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.0 + index * 0.1 }}
              whileHover={{ 
                y: -8, 
                transition: { duration: 0.2, ease: "easeOut" } 
              }}
              className="h-full rounded-[16px] p-[1px]"
              style={{ background: 'var(--primary-gradient)' }}
            >
              <div className="dark:bg-background flex h-full flex-col rounded-[16px] bg-[#F7F7f7] p-4 sm:p-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.3 }}
                >
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={48}
                    height={48}
                    className="mb-4 h-8 w-8 sm:mb-6 sm:h-12 sm:w-12"
                  />
                </motion.div>
                <motion.h3 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.3 + index * 0.1 }}
                  className="text-muted-foreground mb-1 text-xs font-medium sm:text-sm"
                >
                  {feature.title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                  className="bg-[linear-gradient(91.54deg,_#000000_-30.84%,_#9A74EB_126.52%)] bg-clip-text text-xl font-bold text-transparent sm:text-[28px] dark:bg-[linear-gradient(91.54deg,_#FFFFFF_-30.84%,_#9A74EB_126.52%)]"
                >
                  {feature.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <DataError />
      )}
    </motion.div>
  )
}

function DataError() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="mt-16 w-full max-w-[1080px] rounded-lg border border-red-200 bg-red-50 p-6 dark:border-red-800 dark:bg-red-950"
    >
      <div className="flex items-center gap-3">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 1.0 }}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 dark:bg-red-900"
        >
          <svg
            className="h-4 w-4 text-red-600 dark:text-red-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </motion.div>
        <div>
          <motion.h3 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="text-sm font-medium text-red-800 dark:text-red-200"
          >
            Unable to load analytics data
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-sm text-red-600 dark:text-red-400"
          >
            Please refresh the page or try again later
          </motion.p>
        </div>
      </div>
    </motion.div>
  )
}