import React from "react"
import styled from "styled-components"
import { useRouter } from 'next/router'
import Accordion from "./Accordion"
import { MenuEntry, LinkLabel } from "./MenuEntry"
import MenuLink from "./MenuLink"
import { PanelProps, PushedProps } from "../types"

interface Props extends PanelProps, PushedProps {
  isMobile: boolean
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: 5px;
  padding: 8px;
  margin: 8px;
  background-color: #fcf6d5;
  background: #fcf6d5;
  background-color: rgba(252,246,213,0.7);
  background: linear-gradient(-45deg,rgba(252,246,213,0.8) 33.33%, rgba(25,50,47,0.1) 33.33%, rgba(25,50,47,0.1) 50%, rgba(252,246,213,0.8) 50%, rgba(252,246,213,0.8) 83.33%, rgba(25,50,47,0.1) 83.33%, rgba(25,50,47,0.1) 100% );
  background-size: 4px 4px;
  box-shadow: 2px 3px 1rem rgb(25 50 48 / 20%);
`

const StyledIcon = styled.img`
  margin-right: 8px;
  width: 30px
`

const PanelBody: React.FC<Props> = ({ isPushed, pushNav, isMobile, links }) => {
  const { pathname } = useRouter()

  // Close the menu when a user clicks a link on mobile
  const handleClick = isMobile ? () => pushNav(false) : undefined

  return (
    <Container>
      {links.map((entry) => {
        const calloutClass = entry.calloutClass ? entry.calloutClass : undefined

        if (entry.items) {
          const itemsMatchIndex = entry.items.findIndex((item) => item.href === pathname)
          const initialOpenState = entry.initialOpenState === true ? entry.initialOpenState : itemsMatchIndex >= 0

          return (
            <Accordion
              key={entry.href}
              isPushed={isPushed}
              pushNav={pushNav}
              label={entry.label}
              initialOpenState={initialOpenState}
              className={calloutClass}
              isActive={entry.items.some((item) => item.href === pathname)}
            >
              {isPushed &&
                entry.items.map((item) => (
                  <MenuEntry key={item.href} secondary isActive={item.href === pathname} onClick={handleClick}>
                    <MenuLink href={item.href}>
                      <LinkLabel isPushed={isPushed}>{item.label}</LinkLabel>
                    </MenuLink>
                  </MenuEntry>
                ))}
            </Accordion>
          )
        }
        return (
          <MenuEntry key={entry.href} isActive={entry.href === pathname} className={calloutClass}>
            <MenuLink href={entry.href} target={entry.target} onClick={handleClick}>
              <LinkLabel isPushed={isPushed}>{entry.label}</LinkLabel>
            </MenuLink>
          </MenuEntry>
        )
      })}
    </Container>
  )
}

export default PanelBody