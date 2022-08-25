import React, { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { Flex, Text } from 'rebass';
import Overlay from 'components/Overlay/Overlay';
import { useTranslation } from 'contexts/Localization';
import Device from 'components/Device';
import { languageList, languages } from 'config/localization/languages';
import useToken from 'hooks/useToken';
import config, { subMenu, MENU_HEIGHT, SIDEBAR_WIDTH_FULL } from './config';
import Panel from './components/Panel';
import UserProfile from './components/UserProfile';
import Sidebar from './components/Sidebar';
import { Button } from 'components/Button';

const Menu: React.FC<{ children: React.ReactNode; isMobile: boolean }> = ({ isMobile, children }) => {
  const { token, setToken, removeToken, getParsedToken } = useToken();
  const [openDropdown, setOpenDrowdown] = useState<boolean>(false)
  const [lang, setLang] = useState<string>('en-US')
  const { currentLanguage, setLanguage, t } = useTranslation();
  const [isPushed, setIsPushed] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState(true);
  const menuConfig = config(t);
  const subMenuConfig = subMenu(t)
  const selectedLang = languages[lang as keyof typeof languages]

  // Find the home link if provided
  const homeLink = menuConfig.find((link) => link.label === 'Home');

  return (
    <Wrapper>
      <StyledNav showMenu={showMenu}>
        {!isMobile ?
          <>
            <MenuBody alignItems="center">
              <ButtonBurger
                onClick={() => setIsPushed((prev) => !prev)}
                width="52px"
                height="44px"
                alt="bugger"
                src="/images/icons/burger.png"
              />
              {menuConfig.map((menu) => (
                <TextMenu key={menu.label} href={menu.href}>
                  {menu.label}
                </TextMenu>
              ))}
            </MenuBody>
            <Logo width="160px" height="30px" alt="logo" src="/images/icons/logo.svg" />
          </>
          :
          <MenuBody alignItems="center">
            <ButtonBurger
              onClick={() => setIsPushed((prev) => !prev)}
              width="52px"
              height="44px"
              alt="bugger"
              src="/images/icons/burger.png"
            />
            <Logo width="160px" height="30px" alt="logo" src="/images/icons/logo.svg" />
          </MenuBody>
        }
        {token ? (
          <UserProfile user={getParsedToken()} />
        ) : (
          !isMobile &&
          <ButtonBody>
            <Button variant="secondary">Sign In</Button>
            <Button variant="primary">Sign Up</Button>
            <LangBody onClick={() => setOpenDrowdown(!openDropdown)}>
              <Image width="28px" height="28px" alt="language" src={`/images/icons/${selectedLang.code}.png`} />
              <Text fontSize={1}>{selectedLang.language}</Text>
              <DropdownIcon width="10x" height="10px" alt="dropdown" src="/images/icons/arrow_down.svg" priority={openDropdown} />
            </LangBody>
            {openDropdown &&
              <Dropdown>
                <DropdownItem>
                  {languageList.map((item: any) =>
                    <LangContent key={item.code} onClick={() => { setLang(item.locale); setOpenDrowdown(!openDropdown) }}>
                      <Image width="28px" height="28px" alt="language" src={`/images/icons/${item.code}.png`} />
                      <Text fontSize={1}>{item.language}</Text>
                    </LangContent>
                  )}
                </DropdownItem>
              </Dropdown>
            }
          </ButtonBody>

        )}
      </StyledNav>
      <BodyWrapper>
        {/* {isPushed && (
          <Panel
            isPushed={isPushed}
            isMobile={isMobile}
            showMenu={showMenu}
            langs={languageList}
            setLang={setLanguage}
            currentLang={currentLanguage}
            pushNav={setIsPushed}
            links={menuConfig}
          />
        )} */}
        <Sidebar menu={menuConfig} subMenu={subMenuConfig} isPushed={isPushed} setIsPushed={setIsPushed}/>
        <Inner isPushed={isPushed} showMenu={showMenu} >
          {children}
        </Inner>
        <MobileOnlyOverlay show={isPushed} onClick={() => setIsPushed(false)} role="presentation" />
      </BodyWrapper>
    </Wrapper>
  );
};

const MenuDevice: React.FC<{ children: React.ReactNode }> = (props) => (
  <Device>{({ isMobile }: { isMobile: boolean }) => <Menu {...props} isMobile={isMobile} />}</Device>
);

export default MenuDevice;

const ButtonBurger = styled(Image)`
    cursor: pointer;
`;

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

const Logo = styled(Image)`

`

const MenuBody = styled(Flex)`
    gap: 32px;
`;

const ButtonBody = styled(Flex)`
    gap: 16px;
`;

const LangBody = styled(Flex)`
  gap: 6px;
  align-items: center;
  cursor: pointer;
`

const TextMenu = styled.a`
  position: relative;
  color: #fff;
  transition: 0.3s linear;
  font-size: 14px;
  font-weight: bold;

  &:before,
  &:after {
      content: '';
      height: 36px;
      width: 65px;
      position: absolute;
      opacity: 0;
      transition: 0.3s linear;
      background-image: url('images/icons/hover_menu.svg');
      background-repeat: no-repeat;
  }
  &:before {
      right: -16px;
      top: -14px;
      background-position: bottom 0 right 0;
  }
  &:after {
      left: -16px;
      bottom: -16px;
      background-position: top 0 left 0;
      transform: matrix(-1, 0, 0, 1, 0, 0);
  }
  &:hover,
  &:focus {
      color: #ff004d;
      text-shadow: 0 0 16px #ff004d;
      &:before {
          opacity: 1;
          transform: translateY(-6px);
      }
      &:after {
          opacity: 1;
          transform: matrix(-1, 0, 0, 1, 0, 0) translateY(6px);
      }
  }
`;

const Dropdown = styled.div`
  transform: translateX(0px) translateY(0px);
  position: absolute;
  top: 71px;
  right: 5px;
  min-width: 130px;
  box-shadow: 0 8px 12px 3px rgb(255 0 76 / 50%);
  z-index: 30;

  &:before {
    content: "";
    position: absolute;
    top: -5px;
    height: 6px;
    background: #1e1e1e;
    width: 100%;
  }
`

const DropdownIcon = styled(Image) <{ priority: boolean }>`
  transform: ${({ priority }) => `${priority ? 'rotateZ(180deg)' : null}`};
`

const DropdownItem = styled.div`
  position: relative;
  width: 100%;
  padding: 8px 24px 8px 24px;
  background-color: #1d1d1d;
`

const LangContent = styled(Flex)`
  margin-bottom: 12px !important;
  gap: 6px;
  align-items: center;
  cursor: pointer;
`