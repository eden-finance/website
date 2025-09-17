'use client'
import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'What is Eden Finance?',
      answer:
        'Eden Finance is a decentralized finance (DeFi) ecosystem built on AssetChain. It offers two core products: EdenVest for fixed-term investments in cNGN, and Eden Lend for overcollateralized borrowing and lending. Together, they provide secure, transparent, and accessible financial services.',
    },
    {
      question: 'How does Eden Finance ensure security?',
      answer:
        'Eden Finance uses battle-tested smart contracts, multi-signature governance, and regular audits. All transactions are transparent and verifiable on-chain. Critical operations like protocol upgrades, treasury management, and emergency stops are managed via multisig for maximum safety.',
    },
    {
      question: 'What is cNGN and how does it work?',
      answer:
        'cNGN is a Nigerian Naira-backed stablecoin that maintains a 1:1 parity with the naira. It powers the Eden ecosystem, enabling users to invest, lend, and borrow in familiar currency units while benefiting from blockchain’s speed, security, and transparency.',
    },
    {
      question: 'What are the minimum investment requirements on EdenVest?',
      answer:
        'The minimum investment varies by pool, starting from as low as 1,000 cNGN. Each investment pool has its own requirements, lock-up periods, and APY rates, which are displayed before you invest.',
    },
    {
      question: 'How are returns calculated and distributed on EdenVest?',
      answer:
        'Returns are based on the APY and lock duration of each pool. At maturity, you withdraw your principal plus earned returns directly to your wallet. Pools may also deduct a small protocol tax to sustain Eden Finance operations.',
    },
    {
      question: 'Can I withdraw my EdenVest funds before the lock-up period ends?',
      answer:
        'Most pools are fixed-term to guarantee yield. Early withdrawal may be restricted or subject to penalties. Always review the pool terms before investing.',
    },
    {
      question: 'How do I get started with EdenVest?',
      answer:
        'Connect your Web3 wallet, deposit or swap into cNGN, choose an investment pool that matches your goals, and confirm your investment. You’ll receive LP tokens and an NFT that represents your position.',
    },
    {
      question: 'What is Eden Lend?',
      answer:
        'Eden Lend is Eden Finance’s lending and borrowing protocol. You can supply assets like cNGN to earn yield, or borrow assets against your supplied collateral. It uses an overcollateralized model to ensure protocol solvency.',
    },
    {
      question: 'How does borrowing work on Eden Lend?',
      answer:
        'To borrow, you must first deposit collateral (e.g., cNGN or other supported assets). The maximum amount you can borrow depends on the collateral factor of your asset. If the value of your collateral falls below the required threshold, your position may be liquidated.',
    },
    {
      question: 'What are collateral factors and liquidation?',
      answer:
        'Each asset has a collateral factor that determines how much you can borrow against it. For example, a collateral factor of 75% means you can borrow up to 75% of the value of your collateral. If your collateral value falls too low due to market changes, liquidators can repay part of your debt in exchange for a discount on your collateral.',
    },
    {
      question: 'How do I earn by lending on Eden Lend?',
      answer:
        'When you supply assets to Eden Lend, you earn interest paid by borrowers. The rate adjusts algorithmically based on pool utilization. The more your assets are borrowed, the higher your yield.',
    },
    {
      question: 'Can I use my EdenVest LP tokens in Eden Lend?',
      answer:
        'Yes. LP tokens earned from EdenVest can be used as collateral in Eden Lend. This unlocks additional liquidity, allowing you to borrow while your investment continues to earn yield.',
    },
    {
      question: 'How do I get started with Eden Lend?',
      answer:
        'Connect your wallet, deposit cNGN or another supported token into Eden Lend, and choose whether to supply, borrow, or both. The dashboard will show your available borrow limits, interest rates, and health factor in real time.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="flex items-center justify-center px-4 py-12 sm:px-0 sm:py-22">
      <div className="mx-auto mb-10 flex max-w-[800px] flex-col items-center justify-center">
        <div className="mb-8 flex max-w-[488px] flex-col items-center justify-center">
          <h1 className="text-foreground mb-2 text-center text-[24px] sm:text-[32px] font-bold">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground mb-3 text-center text-sm leading-[20px] font-medium">
            We&apos;ve put together answers to the most common questions to help
            you make the most of your private inbox.
          </p>
        </div>

        <div className="w-full max-w-[700px] space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-primary overflow-hidden rounded-lg">
              <button
                onClick={() => toggleFAQ(index)}
                className="hover:bg-accent flex w-full items-center justify-between px-6 py-5 text-left transition-colors duration-200"
              >
                <span className="text-foreground flex-1 text-base font-medium">
                  {faq.question}
                </span>
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#9A74EB] sm:h-6 sm:w-6">
                  <ChevronDown
                    className={`h-3 w-3 flex-shrink-0 text-white transition-transform duration-300 ease-in-out sm:h-4 sm:w-4 ${
                      openIndex === index ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </div>
              </button>

              <div
                className={`overflow-hidden px-6 transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 pb-5 opacity-100'
                    : 'max-h-0 pb-0 opacity-0'
                }`}
              >
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQs
