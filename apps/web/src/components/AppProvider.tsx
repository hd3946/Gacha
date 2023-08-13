import { goerli, klaytn, polygon, polygonMumbai } from '@wagmi/core/chains'
import { publicProvider } from '@wagmi/core/providers/public'
import { Chain, WagmiConfig, configureChains, createConfig, mainnet } from 'wagmi'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'

const klaytnBaobab = {
  id: 1001,
  name: 'Baobab Testnet',
  network: 'baobab',
  nativeCurrency: {
    decimals: 18,
    name: 'KLAY',
    symbol: 'KLAY'
  },
  rpcUrls: {
    public: { http: ['https://api.baobab.klaytn.net:8651'] },
    default: { http: ['https://api.baobab.klaytn.net:8651'] }
  },
  blockExplorers: {
    default: { name: 'Klaytnscope', url: 'https://baobab.scope.klaytn.com/' }
  }
} as const satisfies Chain

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, goerli, polygon, polygonMumbai, klaytn, klaytnBaobab],
  [publicProvider()]
)

const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'wagmi'
      }
    })
  ],
  publicClient,
  webSocketPublicClient
})

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <WagmiConfig config={config}>{children}</WagmiConfig>
}

export default AppProvider
