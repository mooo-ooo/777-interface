import React from "react"
import styled from "styled-components"
import { space } from 'styled-system'
import { Text } from "rebass"
import { LinkProps } from "./types"

const getExternalLinkProps = (): { target: string; rel: string } => ({
  target: "_blank",
  rel: "noreferrer noopener",
});

const StyledLink = styled(Text)<LinkProps>`
  display: flex
  align-items: center
  width: fit-content
  &:hover {
    text-decoration: underline
  }
  ${space}
`

const Link: React.FC<LinkProps> = ({ external, ...props }) => {
  const internalProps = external ? getExternalLinkProps() : {}
  return <StyledLink as="a" bold {...internalProps} {...props} />
}

Link.defaultProps = {
  color: "primary",
}

export default Link