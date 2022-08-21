import React, { useState } from "react"
import Image from 'next/image'
import styled from "styled-components"
import { Flex } from 'rebass'
import Overlay from "components/Overlay/Overlay"
import { useTranslation } from 'contexts/Localization'
import Device from 'components/Device'
import { languageList } from 'config/localization/languages'
import config, { MENU_HEIGHT, SIDEBAR_WIDTH_FULL } from './config'
import Panel from "./components/Panel"

const Menu: React.FC<{ children: React.ReactNode, isMobile: boolean }> = ({
  isMobile,
  children,
}) => {
  const { currentLanguage, setLanguage, t } = useTranslation()
  const [isPushed, setIsPushed] = useState<boolean>(false)
  const [showMenu, setShowMenu] = useState(true)
  const menuConfig = config(t)

  // Find the home link if provided
  const homeLink = menuConfig.find((link) => link.label === "Home")

  return (
    <Wrapper>
      <StyledNav showMenu={showMenu}>
        <MenuBody alignItems="center">
          <ButtonBurger onClick={() => setIsPushed(prev => !prev)} width="52px" height="44px" alt="bugger" src="/images/icons/burger.png" />
          {menuConfig.map(menu => 
            <TextMenu key={menu.label} href={menu.href}>{menu.label}</TextMenu>
          )}
        </MenuBody>
        <Logo width="160px" height="30px" alt="logo" src="/images/icons/logo.svg" />
      </StyledNav>
      <BodyWrapper>
        {isPushed && <Panel
          isPushed={isPushed}
          isMobile={isMobile}
          showMenu={showMenu}
          langs={languageList}
          setLang={setLanguage}
          currentLang={currentLanguage}
          pushNav={setIsPushed}
          links={menuConfig}
        />}
        <Inner isPushed={isPushed} showMenu={showMenu}>
          {children}
        </Inner>
        <MobileOnlyOverlay show={isPushed} onClick={() => setIsPushed(false)} role="presentation" />
      </BodyWrapper>
    </Wrapper>
  )
}

const MenuDevice: React.FC<{ children: React.ReactNode }> = (props) => <Device>
  {({ isMobile }: { isMobile: boolean }) =>
    <Menu {...props} isMobile={isMobile} />
  }
</Device>

export default MenuDevice

const ButtonBurger = styled(Image)`
  cursor: pointer;
`

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledNav = styled.nav<{ showMenu: boolean }>`
  position: fixed;
  top: ${({ showMenu }) => (showMenu ? 0 : `-${MENU_HEIGHT}px`)};
  left: 0;
  transition: top 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
  padding-right: 16px;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  background-color: #1d1d1d;
  border-bottom: solid 2px rgba(133, 133, 133, 0.1);
  z-index: 20;
  transform: translate3d(0, 0, 0);
`;

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
`;

const Inner = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  flex-grow: 1;
  margin-top: ${({ showMenu }) => (showMenu ? `${MENU_HEIGHT}px` : 0)};
  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate3d(0, 0, 0);
  max-width: 100%;
  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : 0}px`};
    max-width: ${({ isPushed }) => `calc(100% - ${isPushed ? SIDEBAR_WIDTH_FULL : 0}px)`};
  }
`;

const MobileOnlyOverlay = styled(Overlay)`
  position: fixed;
  height: 100%;
  ${({ theme }) => theme.mediaQueries.sm} {
    display: none;
  }
`;

const MenuBody = styled(Flex)`
  gap: 16px;
`

const Logo = styled(Image)`
cursor: pointer;

`

const TextMenu = styled.a`
  position: relative;
  color: #fff;
  transition: .3s linear;
  font-size: 14px;

  &:before {
    position: absolute;
    opacity: 0;
    right: -16px;
    top: -14px;
    background-position: bottom 0 right 0;
    content: "";
    height: 36px;
    width: 65px;
    background-image: url("images/icons/menu.svg");
    background-repeat: no-repeat;
    transition: .3s linear;
  }
  &:after {
    position: absolute;
    opacity: 0;
    left: -16px;
    bottom: -16px;
    background-position: top 0 left 0;
    transform: matrix(-1,0,0,1,0,0);
    content: "";
    height: 36px;
    width: 65px;
    background-image: url("images/icons/menu.svg");
    transition: .3s linear;
  }
  background-repeat: no-repeat;
  &:hover,:focus {
    color: #ff004d;
    text-shadow: 0 0 16px #ff004d;
    &:before {
      opacity: 1;
      transform: translateY(-6px);
    }
    &::after {
      opacity: 1;
      transform: matrix(-1,0,0,1,0,0) translateY(6px)
    }
  }
`