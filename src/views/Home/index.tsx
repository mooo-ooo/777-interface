import { useEffect } from 'react'
import { PageMeta } from 'components/Layout/Page'
import { useRouter } from 'next/router'
import { getFishingGunAddress } from 'utils/addressHelpers'

const fishingGunAddress = getFishingGunAddress()

export default function App() {
  const router = useRouter()
  useEffect(() => { 
    router.push(`/nfts/collections/${fishingGunAddress}`) 
  }, [router])

  return (
    null
  )
}
