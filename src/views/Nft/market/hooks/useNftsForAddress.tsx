import isEmpty from 'lodash/isEmpty'
import { useGetCollections } from 'state/nftMarket/hooks'
import { getCompleteAccountNftData } from 'state/nftMarket/helpers'
import { isAddress } from 'utils'
import useSWR from 'swr'
import { FetchStatus } from 'config/constants/types'
import { laggyMiddleware } from 'hooks/useSWRContract'

const useNftsForAddress = (account: string) => {
  const { data: collections } = useGetCollections()

  const { status, data, mutate } = useSWR(
    !isEmpty(collections) && isAddress(account) ? [account, 'userNfts'] : null,
    async () => getCompleteAccountNftData(account, collections),
    { use: [laggyMiddleware] },
  )

  return { nfts: data ?? [], isLoading: status !== FetchStatus.Fetched, refresh: mutate }
}

export default useNftsForAddress
