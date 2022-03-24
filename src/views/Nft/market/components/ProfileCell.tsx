import styled from 'styled-components'
import { Box, Flex, Text } from '@pancakeswap/uikit'
import truncateHash from 'utils/truncateHash'
import { NextLinkFromReactRouter } from 'components/NextLink'
import { nftsBaseUrl } from '../constants'

const StyledFlex = styled(Flex)`
  align-items: center;
  transition: opacity 200ms ease-in;
  &:hover {
    opacity: 0.5;
  }
`

const ProfileCell: React.FC<{ accountAddress: string }> = ({ accountAddress }) => {
  return (
    <NextLinkFromReactRouter to={`${nftsBaseUrl}/profile/${accountAddress}`}>
      <StyledFlex>
        <Box display="inline">
          <Text lineHeight="1.25">{truncateHash(accountAddress)}</Text>
        </Box>
      </StyledFlex>
    </NextLinkFromReactRouter>
  )
}

export default ProfileCell