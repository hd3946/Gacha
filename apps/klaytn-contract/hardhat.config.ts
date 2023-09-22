import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import '@typechain/hardhat'
import 'dotenv/config'
import { HardhatUserConfig, task } from 'hardhat/config'

import 'hardhat-deploy'

// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }
})

// 더 자세한 설정법은 https://hardhat.org/config/ 에서 확인해주세요.
const config: HardhatUserConfig = {
  solidity: '0.8.19',
  networks: {
    klaytn: {
      url: process.env.KLAYTN_URL || '',
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    }
    // mainnet: {
    //   url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
    //   accounts: [process.env.ADMIN || "", process.env.DEPOSITOR || ""],
    //   chainId: 1,
    // },
    // ropsten: {
    //   url: `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`,
    //   accounts: [process.env.ADMIN || "", process.env.DEPOSITOR || ""],
    //   chainId: 3,
    // },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: 'USD'
  }
}

export default config
