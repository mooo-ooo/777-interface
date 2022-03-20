import { useMemo } from 'react'
import { CardBody, Flex, Text } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { useBNBBusdPrice } from 'hooks/useBUSDPrice'
import PreviewImage from './PreviewImage'
import { CollectibleCardProps } from './types'
import NFTMedia from '../NFTMedia'
import { CostLabel } from './styles'

const CollectibleCardBody: React.FC<CollectibleCardProps> = ({ nft, nftLocation, currentAskPrice, isUserNft }) => {
  const { name, attributes } = nft
  const bnbBusdPrice = useBNBBusdPrice()
  
  const type = useMemo(() => {
    const { value } = attributes.find(({ traitType }) => traitType === "Type") || { value: 'common'}
    return String(value).toLowerCase()
  }, [attributes])

  return (
    <NftCard p="8px" type={type}>
      <NFTMedia as={PreviewImage} nft={nft} height={320} width={320} mb="8px" borderRadius="8px" />
      <Flex className="name" justifyContent="center" width="100%" flexDirection="column" alignItems="center" height="42px">
        {currentAskPrice && <CostLabel cost={currentAskPrice} bnbBusdPrice={bnbBusdPrice} />}
        <Text as="p" fontSize={currentAskPrice ? "11px" : "16px"} fontFamily="shark-game">
          {name}
        </Text>
      </Flex>
      {/* <Flex alignItems="center" justifyContent="space-between">
        {nft.collectionName && (
          <Text fontSize="12px" color="textSubtle" mb="8px">
            {nft.collectionName}
          </Text>
        )}
        {nftLocation && <LocationTag nftLocation={nftLocation} />}
      </Flex> */}
      {/* <Box borderTop="1px solid" borderTopColor="cardBorder" pt="8px">
        {isPancakeBunny && (
          <LowestPriceMetaRow lowestPrice={lowestPrice} isFetching={isFetching} bnbBusdPrice={bnbBusdPrice} />
        )}
        {currentAskPrice && (
          <MetaRow title={isUserNft ? t('Your price') : t('Asking price')}>
            <CostLabel cost={currentAskPrice} bnbBusdPrice={bnbBusdPrice} />
          </MetaRow>
        )}
      </Box> */}
    </NftCard>
  )
}

const NftCard = styled(CardBody)<{type: string}>`
  background: ${({ type }) => `url('/images/nfts/${type}.png')`};
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  padding: 0px;
  aspect-ratio: 2/2.4;
  .name {
    position: absolute;
    bottom: 42px;
  }
`

export default CollectibleCardBody
