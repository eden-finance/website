'use client'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Investment = () => {
  const investment = [
    {
      icon: '/access.svg',
      title: 'Multi-Asset Access',
      description:
        'Deposit your preferred token and let our system handle the rest automatic swapping ensures you can invest without worrying about manual conversions or extra steps.',
    },
    {
      icon: '/diversified-pools.svg',
      title: 'Diversified Pools',
      description:
        'Access a wide spectrum of investment options, from low-risk money markets and secure government bonds to innovative tokenized corporate assets all in one place.',
    },
    {
      icon: '/utility.svg',
      title: 'LP Token Utility',
      description:
        'Turn your portfolio into an active asset. use your investment tokens as collateral across our ecosystem to unlock borrowing, increase liquidity, and amplify your returns.',
    },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <div
      id="security"
      className="mx-auto max-w-[1259px] px-4 py-12 sm:px-0 sm:py-22"
    >
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-10 flex max-w-[488px] flex-col items-center justify-center"
      >
        <h1 className="text-foreground mb-2 text-center text-[24px] font-bold sm:text-[32px]">
          Simple, Secure, and Rewarding Investments, Built for You
        </h1>
        <p className="text-muted-foreground mb-3 text-center text-sm leading-[20px] font-medium">
          Everything you expect from a smart investment—secure contracts, real
          returns, and complete transparency.
        </p>
      </motion.div>

      {/* Investment Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="mx-auto mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {investment.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{
              y: -8,
              transition: { duration: 0.2, ease: 'easeOut' },
            }}
            className="mx-auto w-full rounded-[16px] p-px"
            style={{ background: 'var(--primary-gradient)' }}
          >
            <div className="bg-background flex h-full w-full flex-col items-start space-y-4 rounded-[16px] p-6 md:p-8">
              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  delay: 0.3 + index * 0.1,
                  duration: 0.4,
                  type: 'spring',
                  stiffness: 200,
                }}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={48}
                  height={48}
                />
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                className="text-foreground text-lg leading-[28px] font-bold md:text-xl"
              >
                {item.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                className="text-muted-foreground text-sm leading-[20px] font-medium"
              >
                {item.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Section with DeFi Suite and CTA */}
      <div className="mt-10 flex flex-col lg:flex-row lg:items-start lg:justify-between">
        {/* DeFi Suite Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{
            y: -5,
            transition: { duration: 0.2 },
          }}
          className="bg-background flex max-w-[420px] flex-col items-start space-y-4 rounded-[16px] p-6 md:p-8"
        >
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.4,
              type: 'spring',
              stiffness: 200,
            }}
          >
            <Image src={'/leaf.svg'} alt={'DeFi'} width={48} height={48} />
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="text-foreground text-lg leading-[28px] font-bold md:text-xl"
          >
            Complete DeFi Suite
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="text-muted-foreground text-sm leading-[20px] font-medium"
          >
            Experience the full power of DeFi with a complete suite that
            combines lending, borrowing, and structured investments
          </motion.p>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-col items-center lg:mt-0 lg:flex-row lg:items-end"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
          >
            <Image
              src={'/eden-cta.png'}
              alt={'Eden Finance'}
              width={400}
              height={388}
              className="h-[250px] w-auto md:h-[300px] lg:h-[388px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-6 flex max-w-[440px] flex-col items-center space-y-4 lg:mt-0 lg:ml-6 lg:items-start lg:justify-end lg:pb-8"
          >
            <div className="flex flex-col items-center space-y-4 lg:items-start">
              <p className="text-muted-foreground text-center text-sm leading-[20px] font-medium lg:text-left">
                Designed to help you maximize returns while maintaining full
                transparency and security at every step
              </p>
              <Link
                href="https://vest.edenfinance.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="h-12 rounded-[32px] bg-[linear-gradient(90deg,_#9A74EB_0%,_#60449C_100%)] px-6 font-medium text-white transition-colors duration-200 hover:opacity-90"
                >
                  Start Investing
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Investment
