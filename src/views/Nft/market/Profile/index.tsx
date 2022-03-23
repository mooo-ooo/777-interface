import { FC } from 'react'
import { useRouter } from 'next/router'
import { isAddress } from 'utils'
import { Flex, Text } from '@pancakeswap/uikit'
import Page from 'components/Layout/Page'
import { useTranslation } from 'contexts/Localization'
import styled from 'styled-components'
import MarketPageHeader from '../components/MarketPageHeader'
import ProfileHeader from './components/ProfileHeader'
import NoNftsImage from '../components/Activity/NoNftsImage'

const PageStyled = styled.div`
  background: url('/images/nfts/bg-02.png');
  min-height: calc(100vh - 267px);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
`

const NftProfile: FC = ({ children }) => {
  const accountAddress = useRouter().query.accountAddress as string
  const { t } = useTranslation()

  const invalidAddress = !accountAddress || isAddress(accountAddress) === false

  if (invalidAddress) {
    return (
      <>
        <MarketPageHeader position="relative">
          <ProfileHeader
            accountPath={accountAddress}
            profile={null}
            achievements={null}
            nftCollected={null}
            isAchievementsLoading={false}
            isNftLoading={false}
            isProfileLoading={false}
          />
        </MarketPageHeader>
        <PageStyled>
          <Page style={{ minHeight: 'auto' }}>
            <Flex p="24px" flexDirection="column" alignItems="center">
              <NoNftsImage />
              <Text textAlign="center" maxWidth="420px" pt="8px" bold>
                {t('Please enter a valid address, or connect your wallet to view your profile')}
              </Text>
            </Flex>
          </Page>
        </PageStyled>
      </>
    )
  }

  return (
    <PageStyled>
      <Page style={{ minHeight: 'auto' }}>{children}</Page>
    </PageStyled>
  )
}

export const NftProfileLayout: FC = ({ children }) => {
  return <NftProfile>{children}</NftProfile>
}

export default NftProfile
