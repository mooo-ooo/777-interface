import { useMemo, useEffect } from 'react'
import { useRouter } from 'next/router'
import { NextLinkFromReactRouter } from 'components/NextLink'
import { Menu as UikitMenu, Text } from '@pancakeswap/uikit'
import { useTranslation, languageList } from '@pancakeswap/localization'
import { NetworkSwitcher } from 'components/NetworkSwitcher'
import { Button } from 'components/Button'
import useTheme from 'hooks/useTheme'
import useToken from 'hooks/useToken'
import { useWeb3React } from '@pancakeswap/wagmi'
import { usePreviousValue } from '@pancakeswap/hooks'
import useLogin from 'hooks/useLogin'

import UserMenu from './UserMenu'
import { useMenuItems } from './hooks/useMenuItems'
import { getActiveMenuItem, getActiveSubMenuItem } from './utils'
import { footerLinks } from './config/footerConfig'

const Menu = (props) => {
  const { account } = useWeb3React()
  const { getParsedToken, removeToken } = useToken()
  const { isDark, setTheme } = useTheme()
  const previousAccount = usePreviousValue(account)
  const { currentLanguage, setLanguage, t } = useTranslation()
  const { pathname } = useRouter()

  const menuItems = useMenuItems()

  const activeMenuItem = getActiveMenuItem({ menuConfig: menuItems, pathname })
  const activeSubMenuItem = getActiveSubMenuItem({ menuItem: activeMenuItem, pathname })

  const toggleTheme = useMemo(() => {
    return () => setTheme(isDark ? 'light' : 'dark')
  }, [setTheme, isDark])

  useEffect(() => {
    const isChangedAccount = previousAccount && account && account !== previousAccount
    const isDisconnected = previousAccount && !account
    if (isDisconnected || isChangedAccount) {
      removeToken()
    }
  }, [account, removeToken, previousAccount])

  const getFooterLinks = useMemo(() => {
    return footerLinks(t)
  }, [t])

  const user = getParsedToken()

  const { signIn, isSignInloading } = useLogin()

  return (
    <>
      <UikitMenu
        linkComponent={(linkProps) => {
          return <NextLinkFromReactRouter to={linkProps.href} {...linkProps} prefetch={false} />
        }}
        rightSide={
          <>
            {user ? <Text mr="12px">{user.username}</Text> : account ? <Button isLoading={isSignInloading} variant="secondary" onClick={signIn}>Sign In</Button> : null}
            <NetworkSwitcher />
            <UserMenu />
          </>
        }
        isDark={isDark}
        toggleTheme={toggleTheme}
        currentLang={currentLanguage.code}
        langs={languageList}
        setLang={setLanguage}
        links={menuItems}
        subLinks={activeMenuItem?.hideSubNav || activeSubMenuItem?.hideSubNav ? [] : activeMenuItem?.items}
        footerLinks={getFooterLinks}
        activeItem={activeMenuItem?.href}
        activeSubItem={activeSubMenuItem?.href}
        buyCakeLabel={t('Buy CAKE')}
        {...props}
      />
    </>
  )
}

export default Menu
