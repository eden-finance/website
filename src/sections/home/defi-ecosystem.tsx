import React from 'react'
import { Link, Zap, Globe, Shield, Coins, BarChart3 } from 'lucide-react'

const DefiEcosystem = () => {
  return (
    <div className="container mx-auto w-full px-4 py-16 dark:bg-black">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-4xl font-bold">AI-Enhanced DeFi Ecosystem</h2>
        <p className="text-muted-foreground mx-auto max-w-3xl">
          Eden Finance combines cutting-edge AI technology with DeFi primitives
          to create a more secure, efficient, and accessible financial
          ecosystem.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <div className="border-border bg-card rounded-xl border p-6 shadow-sm transition-all hover:shadow-md">
          <div className="bg-primary/10 text-primary mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg">
            <Link className="h-6 w-6" />
          </div>
          <h3 className="mb-2 text-xl font-semibold">Yield-Bearing aUSD</h3>
          <p className="text-card-foreground/80">
            Mint aUSD by depositing stablecoins and automatically earn yield
            through lending strategies and cross-chain protocols.
          </p>
        </div>

        {/* Card 2 */}
        <div className="border-border bg-card rounded-xl border p-6 shadow-sm transition-all hover:shadow-md">
          <div className="bg-primary/10 text-primary mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg">
            <BarChart3 className="h-6 w-6" />
          </div>
          <h3 className="mb-2 text-xl font-semibold">
            AI-Enhanced Risk Management
          </h3>
          <p className="text-card-foreground/80">
            Proprietary AI algorithms monitor loan health, assess
            creditworthiness, and adjust collateral requirements dynamically.
          </p>
        </div>

        {/* Card 3 */}
        <div className="border-border bg-card rounded-xl border p-6 shadow-sm transition-all hover:shadow-md">
          <div className="bg-primary/10 text-primary mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg">
            <Coins className="h-6 w-6" />
          </div>
          <h3 className="mb-2 text-xl font-semibold">
            Decentralized Lending & Borrowing
          </h3>
          <p className="text-card-foreground/80">
            Access efficient lending and borrowing services with smart
            contract-controlled liquidations to protect lenders.
          </p>
        </div>

        {/* Card 4 */}
        <div className="border-border bg-card rounded-xl border p-6 shadow-sm transition-all hover:shadow-md">
          <div className="bg-primary/10 text-primary mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg">
            <Zap className="h-6 w-6" />
          </div>
          <h3 className="mb-2 text-xl font-semibold">
            Low & Fast Transactions
          </h3>
          <p className="text-card-foreground/80">
            Built on AssetChain&apos;s scalable infrastructure with gas fees as
            low as $0.00004 per transaction.
          </p>
        </div>

        {/* Card 5 */}
        <div className="border-border bg-card rounded-xl border p-6 shadow-sm transition-all hover:shadow-md">
          <div className="bg-primary/10 text-primary mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg">
            <Globe className="h-6 w-6" />
          </div>
          <h3 className="mb-2 text-xl font-semibold">
            Cross-Chain Integration
          </h3>
          <p className="text-card-foreground/80">
            Leverage multi-chain protocols to route assets for maximum yield,
            with users staking in optimized vaults for the best returns.
          </p>
        </div>

        {/* Card 6 */}
        <div className="border-border bg-card rounded-xl border p-6 shadow-sm transition-all hover:shadow-md">
          <div className="bg-primary/10 text-primary mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg">
            <Shield className="h-6 w-6" />
          </div>
          <h3 className="mb-2 text-xl font-semibold">AI-Enhanced Security</h3>
          <p className="text-card-foreground/80">
            Advanced multi-signature security measures protect funds and prevent
            smart contract exploits for maximum safety.
          </p>
        </div>
      </div>
    </div>
  )
}

export default DefiEcosystem
