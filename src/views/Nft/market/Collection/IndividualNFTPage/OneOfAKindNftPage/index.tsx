import styled from 'styled-components'
import { Flex, Box } from '@pancakeswap/uikit'
import { IPFS_GATEWAY } from 'config'
import Page from 'components/Layout/Page'
import { useGetCollection } from 'state/nftMarket/hooks'
import PageLoader from 'components/Loader/PageLoader'
import MainNFTCard from './MainNFTCard'
import { TwoColumnsContainer } from '../shared/styles'
import DetailsCard from '../shared/DetailsCard'
import MoreFromThisCollection from '../shared/MoreFromThisCollection'
import ActivityCard from './ActivityCard'
import { useCompleteNft } from '../../../hooks/useCompleteNft'

interface IndividualNFTPageProps {
  collectionAddress: string
  tokenId: string
}

const OwnerActivityContainer = styled(Flex)`
  gap: 22px;
`

const IndividualNFTPage: React.FC<IndividualNFTPageProps> = ({ collectionAddress, tokenId }) => {
  const collection = useGetCollection(collectionAddress)
  const {
    combinedNft: nft,
    isOwn: isOwnNft,
    isProfilePic,
    refetch,
  } = useCompleteNft(collectionAddress, tokenId)

  if (!nft || !collection) {
    // Normally we already show a 404 page here if no nft, just put this checking here for safety.

    // For now this if is used to show loading spinner while we're getting the data
    return <PageLoader />
  }

  return (
    <Page>
      <MainNFTCard nft={nft} isOwnNft={isOwnNft} nftIsProfilePic={isProfilePic} onSuccess={refetch} />
      <TwoColumnsContainer flexDirection={['column', 'column', 'row']}>
        <WithBackground>
          <Flex flexDirection="column" width="100%">
            <DetailsCard contractAddress={collectionAddress} ipfsJson={`${IPFS_GATEWAY}/${nft.hash}`} />
          </Flex>
        </WithBackground>
        <WithBackground>
          <OwnerActivityContainer flexDirection="column" width="100%">
            <ActivityCard nft={nft} />
          </OwnerActivityContainer>
        </WithBackground>
      </TwoColumnsContainer>
      <MoreFromThisCollection collectionAddress={collectionAddress} currentTokenName={nft.name} />
    </Page>
  )
}

const WithBackground = styled(Box)`
  background: rgba(28,30,54,.4);
  border-radius: 12px;
`

export default IndividualNFTPage
