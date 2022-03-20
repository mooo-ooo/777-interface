import { getFishingGunAddress } from 'utils/addressHelpers'
import { Collection } from 'state/nftMarket/types'

const fishingGunAddress = getFishingGunAddress()

const sharkCollections: Record<string, Collection> = {
  [fishingGunAddress]: {
    name: 'Fishing Gun',
    address: fishingGunAddress,
  }
}

export default sharkCollections
