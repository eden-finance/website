'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '~/lib/utils'

interface FAQItem {
  question: string
  answer: string
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqItems: FAQItem[] = [
    {
      question: 'What is Eden Finance?',
      answer:
        'Eden Finance is a decentralised non-custodial liquidity protocol where users can participate as suppliers or borrowers. Suppliers provide liquidity to the market while earning interest, and borrowers can access liquidity by providing collateral that exceeds the borrowed amount.',
    },
    {
      question: 'Where are supplied tokens stored?',
      answer:
        'Supplied tokens are stored in publicly accessible smart contracts that enable over collateralised borrowing according to governance-approved parameters.',
    },
    {
      question: 'Do I need a wallet to interact with Eden Finance?',
      answer:
        'Yes, you need a wallet on the corresponding network you want such as hardware wallet, browser extension, mobile wallet, multi signature wallets',
    },
    {
      question: 'How do I supply',
      answer:
        'Browse to the "supply" section and click on "supply" for the asset you want to supply. Select the amount you would like to supply and submit your transaction.',
    },
    {
      question: 'What is staking',
      answer:
        'Staking consists of supplying supported tokens within the protocol Safety Module. The purpose of staking is to act as a mitigation tool in case of a shortfall event. As an incentive for this, Safety Module stakers will receive Safety Incentives.',
    },
    {
      question: 'How much would I pay in interest?',
      answer:
        'The interest rate you pay for borrowing assets depends on the supply and demand ratio of the asset and interest rate curve parameters determined by Aave Governance.',
    },
  ]

  return (
    <div className="w-full px-4 py-20 sm:px-6 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mx-auto max-w-3xl text-base text-gray-400 sm:text-lg">
            Eden Finance offers significant advantages over traditional DeFi
            protocols, combining AI-enhanced security with cross-chain
            optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-gray-800 pb-6">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between text-left focus:outline-none"
              >
                <h3 className="text-lg font-medium">{item.question}</h3>
                <Plus
                  className={cn(
                    'h-5 w-5 transition-transform duration-200',
                    openIndex === index ? 'rotate-45' : ''
                  )}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
