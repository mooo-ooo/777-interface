
import React from 'react'
import styled from 'styled-components'
import { Box, BoxProps } from 'rebass'
import Menu from '../Menu'

const Container: React.FC<BoxProps> = ({ children, ...props }) => (
  <Box px={['16px', '24px']} mx="auto" {...props}>
    {children}
  </Box>
)

const Page: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
  return (
    <Menu>
      <StyledPage {...props}>
        {children}
      </StyledPage>
    </Menu>
  )
}

export default Page

const StyledPage = styled(Container)`
  min-height: calc(100vh - 64px);
  padding-bottom: 16px;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding-bottom: 24px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    padding-bottom: 32px;
  }
`