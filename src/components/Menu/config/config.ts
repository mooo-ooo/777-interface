import {
  MenuItemsType,
  NftIcon,
  NftFillIcon,
} from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { nftsBaseUrl } from 'views/Nft/market/constants'
import { getFishingGunAddress } from 'utils/addressHelpers'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const fishingGunAddress = getFishingGunAddress()

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  // {
  //   label: t('Earn'),
  //   href: '/farms',
  //   icon: EarnIcon,
  //   fillIcon: EarnFillIcon,
  //   items: [
  //     {
  //       label: t('Farms'),
  //       href: '/farms',
  //     },
  //     {
  //       label: t('Pools'),
  //       href: '/pools',
  //     },
  //   ],
  // },
  // {
  //   label: t('Win'),
  //   href: '/prediction',
  //   icon: TrophyIcon,
  //   fillIcon: TrophyFillIcon,
  //   items: [
  //     {
  //       label: t('Trading Competition'),
  //       href: '/competition',
  //     },
  //     {
  //       label: t('Prediction (BETA)'),
  //       href: '/prediction',
  //     },
  //     {
  //       label: t('Lottery'),
  //       href: '/lottery',
  //     },
  //   ],
  // },
  {
    label: t('Marketplace'),
    href: `${nftsBaseUrl}/collections/${fishingGunAddress}`,
    icon: NftIcon,
    fillIcon: NftFillIcon,
    items: []
  },
  {
    label: t('Play Game'),
    href: '/game',
    icon: NftIcon,
    fillIcon: NftFillIcon,
    items: []
  },
]

export default config
