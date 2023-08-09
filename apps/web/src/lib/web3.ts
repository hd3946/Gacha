import type { ChainId, ChainName, CurrencySymbol, NetworkName } from 'types/web3'

export const chainIdToNetworkName: Record<ChainId, NetworkName> = {
  1: 'Ethereum',
  5: 'Ethereum',
  137: 'Polygon',
  80001: 'Polygon',
  8217: 'Klaytn',
  1001: 'Klaytn'
}

export const chainIdToCurrencySymbol: Record<ChainId, CurrencySymbol> = {
  1: 'eth',
  5: 'eth',
  137: 'matic',
  80001: 'matic',
  8217: 'klay',
  1001: 'klay'
}

export const networkToChainName: Record<NetworkName, ChainName> = {
  Ethereum: 'ethereum',
  Polygon: 'polygon',
  Klaytn: 'klaytn'
}

export const activeChainId: Record<ChainName, ChainId> = {
  ethereum: process.env.NEXT_PUBLIC_ENV === 'development' ? (5 as const) : (1 as const),
  polygon: process.env.NEXT_PUBLIC_ENV === 'development' ? (80001 as const) : (137 as const),
  klaytn: process.env.NEXT_PUBLIC_ENV === 'development' ? (1001 as const) : (8217 as const)
}

export const supportChainId: ChainId[] = [1, 5, 137, 80001, 8217, 1001]
