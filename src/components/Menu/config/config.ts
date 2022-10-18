import { MenuItemsType, SwapIcon, SwapFillIcon } from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'
import { DropdownMenuItems } from '@pancakeswap/uikit/src/components/DropdownMenu/types'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean; image?: string } & {
  items?: ConfigMenuDropDownItemsType[]
}

const addMenuItemSupported = (item, chainId) => {
  if (!chainId || !item.supportChainIds) {
    return item
  }
  if (item.supportChainIds?.includes(chainId)) {
    return item
  }
  return {
    ...item,
    disabled: true,
  }
}

const config: (t: ContextApi['t'], isDark: boolean, languageCode?: string, chainId?: number) => ConfigMenuItemsType[] =
  (t, isDark, languageCode, chainId) =>
    [
      {
        label: t('Sportsbook'),
        icon: SwapIcon,
        fillIcon: SwapFillIcon,
        href: '/sportsbook',
        showItemsOnMobile: false,
        items: [].map((item) => addMenuItemSupported(item, chainId)),
      },
      {
        label: t('Live Casino'),
        icon: SwapIcon,
        fillIcon: SwapFillIcon,
        href: '/live-casino',
        showItemsOnMobile: false,
        items: [].map((item) => addMenuItemSupported(item, chainId)),
      },
      {
        label: t('Slot'),
        icon: SwapIcon,
        fillIcon: SwapFillIcon,
        href: '/slot',
        showItemsOnMobile: false,
        items: [].map((item) => addMenuItemSupported(item, chainId)),
      },
      {
        label: t('E-sport'),
        icon: SwapIcon,
        fillIcon: SwapFillIcon,
        href: '/e-sport',
        showItemsOnMobile: false,
        items: [].map((item) => addMenuItemSupported(item, chainId)),
      },
    ].map((item) => addMenuItemSupported(item, chainId))

export default config
