import PageLoader from 'components/Loader/PageLoader'
import { PageMeta } from 'components/Layout/Page'
import { useRouter } from 'next/router'
import { useGetCollection } from 'state/nftMarket/hooks'
import Header from './Header'
import Items from './Items'

const Collection = () => {
  const router = useRouter()
  const collectionAddress = router.query.collectionAddress as string
  const collection = useGetCollection(collectionAddress)

  if (!collection) {
    return <PageLoader />
  }

  return (
    <>
      <PageMeta />
      {/* <Header collection={collection} /> */}
      <Items />
    </>
  )
}

export default Collection
