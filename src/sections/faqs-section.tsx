'use client'
import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'What is Eden Finance?',
      answer:
        'Eden Finance is a decentralized finance (DeFi) protocol that allows you to invest securely in Nigerian money markets using the cNGN stablecoin. It offers time-locked investment plans, competitive returns, and full transparency—powered by blockchain.',
    },
    {
      question: 'How does Eden Finance ensure security?',
      answer:
        'Eden Finance uses battle-tested smart contracts, multi-signature wallets, and regular security audits. All transactions are transparent and verifiable on the blockchain, giving you complete control over your investments.',
    },
    {
      question: 'What is cNGN and how does it work?',
      answer:
        "cNGN is a Nigerian Naira-backed stablecoin that maintains a 1:1 parity with the Nigerian Naira. It allows you to transact in familiar currency units while benefiting from blockchain technology's speed and transparency.",
    },
    {
      question: 'What are the minimum investment requirements?',
      answer:
        'The minimum investment varies by pool, starting from as low as 1,000 cNGN. Each investment pool has different minimum requirements, lock-up periods, and expected returns clearly displayed before you invest.',
    },
    {
      question: 'How are returns calculated and distributed?',
      answer:
        "Returns are calculated based on the performance of underlying assets in each pool. Interest is compounded and distributed according to each pool's schedule, typically daily or weekly, directly to your wallet.",
    },
    {
      question: 'Can I withdraw my funds before the lock-up period ends?',
      answer:
        'Most investment pools have fixed lock-up periods to ensure optimal returns. Early withdrawal may be possible in certain pools but could incur penalties. Check individual pool terms before investing.',
    },
    {
      question: 'How do I get started with Eden Finance?',
      answer:
        'Simply connect your Web3 wallet, deposit cNGN or convert your Naira to cNGN, choose an investment pool that matches your risk tolerance and timeline, and start earning returns on your investment.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="flex items-center justify-center px-4 py-12 sm:py-22 sm:px-0">
      <div className="mx-auto mb-10 flex max-w-[800px] flex-col items-center justify-center px-4 sm:px-0">
        <div className="mb-8 flex max-w-[488px] flex-col items-center justify-center">
          <h1 className="text-foreground mb-2 text-center text-[32px] font-bold">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground mb-3 text-center text-sm leading-[20px] font-medium">
            We've put together answers to the most common questions to help you
            make the most of your private inbox.
          </p>
        </div>

        <div className="w-full max-w-[700px] space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-border bg-primary overflow-hidden rounded-lg border"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="hover:bg-accent flex w-full items-center justify-between px-6 py-5 text-left transition-colors duration-200"
              >
                <span className="text-foreground text-base font-medium flex-1">
                  {faq.question}
                </span>
                <div className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-[#9A74EB]">
                  <ChevronDown
                    className={`h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0 text-white transition-transform duration-300 ease-in-out ${
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
