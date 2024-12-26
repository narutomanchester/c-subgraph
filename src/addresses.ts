import { Address, BigInt } from '@graphprotocol/graph-ts'

import { Multicall3 } from '../generated/BookManager/Multicall3'

const MULTICALL3_ADDRESS = '0xcA11bde05977b3631167028862bE2a173976CA11'
const MULTICALL3_FALLBACK_ADDRESS = '0xF9cda624FBC7e059355ce98a31693d299FACd963'
const ARBITRUM_SEPOLIA = BigInt.fromI32(421614)
const BASE = BigInt.fromI32(8453)
const BERA_TESTNET = BigInt.fromI32(80084)
const ZKSYNC_ERA = BigInt.fromI32(324)
const ZKSYNC_ERA_SEPOLIA = BigInt.fromI32(300)
const SONIC_TESTNET = BigInt.fromI32(57054)
const MANTLE_SEPOLIA = BigInt.fromI32(5003)

export function getChainId(): BigInt {
  
  // const multiCall = Multicall3.bind(Address.fromString(MULTICALL3_ADDRESS))
  // const chainId = multiCall.try_getChainId()
  // if (chainId.reverted) {
  //   const multiCallFallback = Multicall3.bind(
  //     Address.fromString(MULTICALL3_FALLBACK_ADDRESS),
  //   )
  //   const chainIdFallback = multiCallFallback.try_getChainId()
  //   if (chainIdFallback.reverted) {
  //     return BigInt.fromI32(0)
  //   } else {
  //     return chainIdFallback.value
  //   }
  // }
  return BigInt.fromI32(5003)
}

export function getControllerAddress(): string {
  const chainId = getChainId()
  if (chainId == ARBITRUM_SEPOLIA) {
    return '0x6e7CC9b243fdcD152939Df2E090EDcDcf5df7356'
  } else if (chainId == SONIC_TESTNET) {
    return '0xAEB670cDba6094C30cbA3c88DCBBA6F6d37F6032'
  }else if (chainId == BASE) {
    return '0xA694fDd88E7FEE1f5EBF878153B68ADb2ce6EbbF'
  } else if (chainId == BERA_TESTNET) {
    return '0x1A0E22870dE507c140B7C765a04fCCd429B8343F'
  } else if (chainId == ZKSYNC_ERA) {
    return '0x9aF80CC61AAd734604f139A53E22c56Cdbf9a158'
  } else if (chainId == ZKSYNC_ERA_SEPOLIA) {
    return '0xA253A7c6C26E0a6E7eAbaAbCD8b1cD43A2468c48'
  } else if (chainId == MANTLE_SEPOLIA) {
    return '0x46fbe4bf4dc4a862cdf13781D421546Ab378C113'
  } else {
    return '0x46fbe4bf4dc4a862cdf13781D421546Ab378C113'
  }
}

export function getRebalancerAddress(): string {
  const chainId = getChainId()
  if (chainId == ARBITRUM_SEPOLIA) {
    return '0x30b4e9215322B5d0c290249126bCf96C2Ca8e948'
  } else if (chainId == SONIC_TESTNET) {
    return '0x4e4dDa36B8bBA1b4aF776bA881347c17CDAC2085'
  } else if (chainId == BASE) {
    return '0x13f2Ff6Cc952f4181D6c316426e9CbdA957c6482'
  } else if (chainId == BERA_TESTNET) {
    return '0x7d06c636bA86BD1fc2C38B11F1e5701145CABc30'
  } else if (chainId == ZKSYNC_ERA) {
    return '0x9aF80CC61AAd734604f139A53E22c56Cdbf9a158'
  } else if (chainId == MANTLE_SEPOLIA) {
    return '0x1A0E22870dE507c140B7C765a04fCCd429B8343F'
  } else if (chainId == ZKSYNC_ERA_SEPOLIA) {
    return '0xA253A7c6C26E0a6E7eAbaAbCD8b1cD43A2468c48'
  } else {
    return '0x30b4e9215322B5d0c290249126bCf96C2Ca8e948'
  }
}

export function getSimpleOracleStrategyAddress(): string {
  const chainId = getChainId()
  if (chainId == ARBITRUM_SEPOLIA) {
    return '0x540488b54c8DE6e44Db7553c3A2C4ABEb09Fc69C'
  } else if (chainId == SONIC_TESTNET) {
    return '0x7a526046c6eAE6879bcB72E6022f72c15A824063'
  } else if (chainId == BASE) {
    return '0x284A7A4c8Bc2873EDCa149809C1CAaaf3C4ED6eb'
  } else if (chainId == BERA_TESTNET) {
    return '0x7d06c636bA86BD1fc2C38B11F1e5701145CABc30'
  } else if (chainId == MANTLE_SEPOLIA) {
    return '0x1A0E22870dE507c140B7C765a04fCCd429B8343F'
  } else if (chainId == ZKSYNC_ERA) {
    return '0x9aF80CC61AAd734604f139A53E22c56Cdbf9a158'
  } else if (chainId == ZKSYNC_ERA_SEPOLIA) {
    return '0xA253A7c6C26E0a6E7eAbaAbCD8b1cD43A2468c48'
  } else {
    return '0x540488b54c8DE6e44Db7553c3A2C4ABEb09Fc69C'
  }
}
