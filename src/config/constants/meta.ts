import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'CryptoShark',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by CryptoShark), NFTs, and more, on a platform you can trust.',
  image: 'https://cryptokillShark.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('CryptoShark')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('CryptoShark')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('CryptoShark')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('CryptoShark')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('CryptoShark')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('CryptoShark')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('CryptoShark')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('CryptoShark')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('CryptoShark')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('CryptoShark')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('CryptoShark')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('CryptoShark')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('CryptoShark')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('CryptoShark')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('CryptoShark')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('CryptoShark')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('CryptoShark')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('CryptoShark')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('CryptoShark Info & Analytics')}`,
        description: 'View statistics for CryptoShark exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('CryptoShark Info & Analytics')}`,
        description: 'View statistics for CryptoShark exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('CryptoShark Info & Analytics')}`,
        description: 'View statistics for CryptoShark exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('CryptoShark')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('CryptoShark')}`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | ${t('CryptoShark')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | ${t('CryptoShark')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('CryptoShark')}`,
      }
    default:
      return null
  }
}
