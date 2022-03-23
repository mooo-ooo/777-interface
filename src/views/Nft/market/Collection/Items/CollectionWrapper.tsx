import { createPortal } from 'react-dom'
import { Box } from '@pancakeswap/uikit'
import { Collection } from 'state/nftMarket/types'
import Container from 'components/Layout/Container'
import ScrollButton from 'components/ScrollToTopButton'
import styled from 'styled-components'
import Filters from './Filters'
import CollectionNfts from './CollectionNfts'

interface CollectionWrapperProps {
  collection: Collection
}

const PageStyled = styled.div`
  background: url('/images/nfts/bg-02.png');
  min-height: calc(100vh - 267px);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
`

const CollectionWrapper: React.FC<CollectionWrapperProps> = ({ collection }) => {
  return (
    <PageStyled>
      <Box py="32px" >
        <Container px={[0, null, '24px']}>
          <Filters collection={collection} />
        </Container>
        <Container>
          <CollectionNfts collection={collection} />
        </Container>
        {createPortal(<ScrollButton />, document.body)}
      </Box>
    </PageStyled>
  )
}

export default CollectionWrapper
