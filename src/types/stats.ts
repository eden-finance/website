export interface ApiResponse {
  data: {
    tvl_wei: string
    net_flows: {
      '24h': string
      '7d': string
      '30d': string
    }
    active_pools: number
    total_investors: number
    avg_apy_bps_tvl_weighted: number
    avg_lock_days_tvl_weighted: number
  }
  message: string
  status: boolean
}

export interface FeatureData {
  title: string
  description: string
  icon: string
}
