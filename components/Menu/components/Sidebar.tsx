import React, { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { Flex, Text } from 'rebass';
import { Button } from 'components/Button';
import { SidebarProps } from '../types'


const Sidebar: React.FC<SidebarProps> = (props) => {
  const [openDropdown, setOpenDrowdown] = useState<boolean>(false)
  const path = '/'
  const { menu, subMenu, isPushed, setIsPushed, languageList, selectedLang, setLang } = props
  return (
    <Wrapper isPushed={isPushed}>
      <Header >
        <ButtonBurger
          onClick={() => setIsPushed(false)}
          width="52px"
          height="44px"
          alt="bugger"
          src="/images/icons/burger.png"
        />
        <ButtonHeader>
          <Button variant="secondary">Sign In</Button>
          <Button variant="primary">Sign Up</Button>
        </ButtonHeader>
      </Header>
      <Body>
        {menu.map(m => (
          <ItemMenu key={m.label} href={m.href} active={m.href === path} onClick={() => setIsPushed(false)}>
            <Icon
              width="20px"
              height="20px"
              alt="bugger"
              src={`/images/icons/${m.href === path ? m.icon + '_active' : m.icon}.svg`}
            />
            <TextMenu ml={2} active={m.href === path}>{m.label}</TextMenu>
          </ItemMenu>
        ))}
        <Divide />
        {subMenu.map(sub => (
          <ItemMenu key={sub.label} href={sub.href} active={sub.href === path} onClick={() => setIsPushed(false)}>
            <Icon
              width="20px"
              height="20px"
              alt="bugger"
              src={`/images/icons/${sub.href === path ? sub.icon + '_active' : sub.icon}.svg`}
            />
            <TextMenu ml={2} active={sub.href === path}>{sub.label}</TextMenu>
          </ItemMenu>
        ))}
      </Body>
      <Telegram>
        @tester
      </Telegram>
      <Footer>
        <LangSelect onClick={() => setOpenDrowdown(!openDropdown)}>
          <Image width="28px" height="28px" alt="language" src={`/images/icons/${selectedLang.code}.png`} />
          <Text fontSize={1}>{selectedLang.language}</Text>
          <DropdownIcon width="10x" height="10px" alt="dropdown" src="/images/icons/arrow_down.svg" priority={openDropdown} />
        </LangSelect>
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
      </Footer>
    </Wrapper >
  )
}


const Wrapper = styled.div<{ isPushed: boolean }>`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 99;
  overflow: visible;
  width: 320px;
  height: 80vh;
  background: #272727;
  padding: 0;
  display: ${({ isPushed }) => isPushed ? 'block' : 'none'};
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  height: 68px;
  margin-bottom: 24px;
    padding: 14px 16px 14px 6px;
  width: 100%;
  flex-direction: row;
  background: #1d1d1d;
  justify-content: space-between;
`

const ButtonHeader = styled(Flex)`
  gap: 14px;
`

const ButtonBurger = styled(Image)`
  cursor: pointer;
`;

const Body = styled.div`
  height: calc(84vh - 180px);
`

const ItemMenu = styled.a<{ active: boolean }>`
  cursor: pointer;
  white-space: nowrap;
  position: relative;
  align-items: center;
  display: flex;
  padding: 12px 0 12px 26px;
  font-weight: bold;
  font-size: 18px;
  transition: .3s;

  &:hover {
    color: #ff004d;
  }

  &:before {
    display: ${({ active }) => active ? 'block' : 'none'};
    content: "";
    position: absolute;
    left: 0;
    top: 11px;
    width: 8px;
    height: 20px;
    background: #ff004d;
    box-shadow: 0 0 16px #ff004d;
  }
`

const Icon = styled(Image)`
  margin: 0 12px 0 0;
  transition: .3s;
  &:hover {
    color: #ff004d;
  }
`

const TextMenu = styled(Text) <{ active: boolean }>`
  color:  ${({ active }) => active ? '#ff004d' : '#ffffff'};
`

const Divide = styled.div`
  margin: 14px 0 24px 0;
  &:after {
    position: absolute;
    content: "";
    border-bottom: 1px solid #4b4b4b;
    width: 212px;
    left: 24px;
  }
`

const Telegram = styled.a`
  font-size: 18px;
  font-weight: bold;
  color: #aeaeae;
    background: #272727;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Footer = styled(Flex)`
  width: 100%;
  height: 40px;
  background: #1d1d1d;
  position: relative;
  bottom: -8px;
  justify-content: center;
`

const LangSelect = styled(Flex)`
  gap: 6px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const Dropdown = styled.div`
  left: 0;
  bottom: 100%;
  top: auto;
  box-shadow: none;
  width: 100%;
  position: absolute;
  min-width: 130px;
  box-shadow: 4px 1px 24px 8px rgb(255 0 76 / 50%);
  transform: translateX(0px) translateY(0px);
`

const DropdownIcon = styled(Image) <{ priority: boolean }>`
  transform: ${({ priority }) => `${priority ? null : 'rotateZ(180deg)'}`};
`

const DropdownItem = styled.div`
  position: relative;
  width: 100%;
  padding: 8px 24px 8px 24px;
  background: #1e1e1e;
`

const LangContent = styled(Flex)`
  margin-bottom: 12px !important;
  gap: 6px;
  align-items: center;
  cursor: pointer;
`

export default Sidebar