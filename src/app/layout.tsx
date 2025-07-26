import 'styles'
import { cn } from '~/lib/utils'
import type { Metadata } from 'next'
import { ThemeProvider } from '~/provider/theme-provider'
import { retrive_theme } from '~/actions/theme'

export const metadata: Metadata = {
  title: 'Eden Finance | Africa\'s Premier DeFi Platform',
  description: 'Lend & Borrow, Stake on Eden Finance on Eden Finance - Africa\'s leading DeFi platform built on AssetChain. Secure yields, transparent transactions, low fees. Start earning today.',
  keywords: [
    'DeFi Africa',
    'AssetChain DeFi',
    'decentralized finance',
    'crypto lending',
    'yield farming',
    'DeFi staking',
    'blockchain finance',
    'Eden Finance',
    'African cryptocurrency',
    'DeFi platform'
  ],
  authors: [{ name: 'Eden Finance Team' }],
  creator: 'Eden Finance',
  publisher: 'Eden Finance',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://edenfinance.org'), 
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Eden Finance | Africa\'s Premier DeFi Platform',
    description: 'Lend & Borrow, Stake on Eden Finance - Africa\'s leading DeFi platform built on AssetChain.',
    url: 'https://edenfinance.org',
    siteName: 'Eden Finance',
    images: [
      {
        url: '/og-image.jpg', // compelling 1200x630 image
        width: 1200,
        height: 630,
        alt: 'Eden Finance - DeFi Platform on AssetChain'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eden Finance | Africa\'s Premier DeFi Platform',
    description: 'Lend & Borrow, Stake on Eden Finance - Africa\'s leading DeFi platform built on AssetChain.',
    images: ['/twitter-image.jpg'], // 1200x600 image
    creator: '@0xedenfi', 
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // verification: {
  //   google: '',
  // },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const theme = await retrive_theme()

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Structured Data for DeFi Platform */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              "name": "Eden Finance",
              "description": "Africa's leading DeFi platform built on AssetChain offering lending, staking, and trading services",
              "url": "https://edenfinance.org",
              "logo": "https://edenfinance.org/logo.png",
              "sameAs": [
                "https://twitter.com/0xedenfi",
                "https://t.me/eden_finance",
              ],
              "serviceType": ["Decentralized Finance", "Cryptocurrency Trading", "DeFi Lending", "Staking"],
              "areaServed": "Africa",
              "offers": {
                "@type": "Offer",
                "description": "DeFi services including lending, borrowing, staking, and trading on AssetChain"
              }
            })
          }}
        />
      </head>
      <body className={cn('scroll-smooth antialiased')}>
        <ThemeProvider defaultTheme={theme}>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}