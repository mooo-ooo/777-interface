import styled from 'styled-components'
// import PageSection from 'components/PageSection'
import { useWeb3React } from '@pancakeswap/wagmi'
import useTheme from 'hooks/useTheme'
import { Box } from '@pancakeswap/uikit'
import { PageMeta } from 'components/Layout/Page'
import { useTranslation } from '@pancakeswap/localization'
import Card from 'components/Card'
import CardBox from 'components/CardBox'
// import { useActiveChainId } from 'hooks/useActiveChainId'
// import { ChainId } from '@pancakeswap/sdk'

const Home: React.FC<React.PropsWithChildren> = () => {
  // const { theme } = useTheme()
  // const { account } = useWeb3React()

  // const { t } = useTranslation()

  return (
    <>
      <PageMeta />
      <Banner>
        <Box className="bg" height="inherit" />
        <img className="esport" src="/images/home/bg-gang.png" alt="esport" />
      </Banner>
      {/* <CardBox /> */}
      {/* <PageSection
        background="url(/images/bg-lines-mainLeft.png)"
        innerProps={{ style: { margin: '0', width: '100%' } }}
        index={2}
        hasCurvedDivider={false}
      /> */}
    </>
  )
}

export default Home

const Banner = styled(Box)`
  height: 450px;
  position: relative;
  .bg {
    width: 100%;
    background-image: url(/images/home/banner-bg.jpg);
    background-repeat: no-repeat;
    background-size: auto 100%;
  }
  .esport {
    position: absolute;
    right: 0px;
    left: 0px;
    z-index: 10;
    margin: auto;
    bottom: 0;
    height: auto;
    max-width: 380px;
  }
  &:after {
    position: absolute;
    bottom: 0px;
    width: 100%;
    content: '';
    height: 17px;
    background-image: url(/images/home/bottom.svg);
    background-position: bottom 0 center;
    background-size: auto 100%;
    z-index: 10;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    .esport {
      left: 35%;
      max-width: max-content;
    }
  }
`
