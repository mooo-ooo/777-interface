import { useWeb3React } from '@web3-react/core'
import { useRouter } from 'next/router'
import { NftProfileLayout } from 'views/Nft/market/Profile'
import { Text } from '@pancakeswap/uikit'
import UnconnectedProfileNfts from 'views/Nft/market/Profile/components/UnconnectedProfileNfts'
import UserNfts from 'views/Nft/market/Profile/components/UserNfts'
import useNftsForAddress from 'views/Nft/market/hooks/useNftsForAddress'

const NftProfilePage = () => {
  const { account } = useWeb3React()
  const accountAddress = useRouter().query.accountAddress as string
  const isConnectedProfile = account?.toLowerCase() === accountAddress?.toLowerCase()

  const {
    nfts,
    isLoading: isNftLoading,
    refresh: refreshUserNfts,
  } = useNftsForAddress(accountAddress)

  return (
    <>
      <Text mb="32px" fontFamily="shark-game" fontSize="26px" color="#F40F82" textTransform="uppercase">NFT Gun cards</Text>
      {isConnectedProfile ? (
        <UserNfts
          nfts={nfts}
          isLoading={isNftLoading}
          onSuccessSale={refreshUserNfts}
          onSuccessEditProfile={null}
        />
      ) : (
        <UnconnectedProfileNfts nfts={nfts} isLoading={isNftLoading} />
      )}
    </>
  )
}

NftProfilePage.Layout = NftProfileLayout

export default NftProfilePage
