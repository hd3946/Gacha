export type NetworkName = 'Ethereum' | 'Polygon' | 'Klaytn'

export type ChainName = 'ethereum' | 'polygon' | 'klaytn'

export type EthChainId = 1 | 5
export type PolygonChainId = 137 | 80001
export type KlaytnChainId = 8217 | 1001

export type ChainId = EthChainId | PolygonChainId | KlaytnChainId

export type EthAddress = `0x${string}`

export type CurrencySymbol = 'eth' | 'matic' | 'klay'

export type RequestAddWalletParams = {
  chain: NetworkName
  address: EthAddress
  sign: EthAddress
}

export type Wallet = {
  address: EthAddress
  chain: NetworkName
  seq_user: number
  seq_wallet: number
  status: 'normal'
}

export type WalletData = {
  wallets: Wallet[]
}
