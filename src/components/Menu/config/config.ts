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
  {
    label: t('Marketplace'),
    href: `${nftsBaseUrl}/collections/${fishingGunAddress}`,
    icon: NftIcon,
    fillIcon: NftFillIcon,
    items: []
  },
  {
    label: t('Play Game'),
    href: 'https://demo.cryptokillshark.io',
    icon: NftIcon,
    fillIcon: NftFillIcon,
    items: []
  },
]

export default config
