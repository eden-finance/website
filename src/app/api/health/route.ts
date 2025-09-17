import { NextResponse } from 'next/server'
export const runtime = 'nodejs'
export async function GET() {

function getApiBase() {
    // Server (SSR/Route handlers): read at runtime
    if (typeof window === 'undefined') {
      return (
        process.env.EDEN_BASE_URL || process.env.NEXT_PUBLIC_EDEN_BASE_URL || ''
      )
    }
    // Client: only public vars exist
    return process.env.NEXT_PUBLIC_EDEN_BASE_URL || ''
  }
  return NextResponse.json({
    ok: true,
    time: new Date().toISOString(),
    node: process.version,
    url: getApiBase()
  })
}
