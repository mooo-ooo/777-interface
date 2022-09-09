import styled from 'styled-components'
import PageSection from 'components/PageSection'
import { useWeb3React } from '@pancakeswap/wagmi'
import useTheme from 'hooks/useTheme'
import { Box } from '@pancakeswap/uikit'
import { PageMeta } from 'components/Layout/Page'
import { useTranslation } from '@pancakeswap/localization'
import { useActiveChainId } from 'hooks/useActiveChainId'
import { ChainId } from '@pancakeswap/sdk'


const Home: React.FC<React.PropsWithChildren> = () => {
  const { theme } = useTheme()
  const { account } = useWeb3React()

  const { t } = useTranslation()

  return (
    <>
      <PageMeta />
      <Banner>
        <img className="bg" src="/images/home/banner-bg.jpg" alt="bg"/>
        <img className='esport' src="/images/home/banner-esport.jpg" alt="esport"/>
        <img className='bottom' src="/images/home/bottom.svg" alt="bottom"/>
      </Banner>
      {/* <PageSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        index={2}
        hasCurvedDivider={false}
      >
        
      </PageSection> */}
    </>
  )
}

export default Home

const Banner = styled(Box)`
  height: 500px;
  position: relative;
  .bg {
    height: 500px;
    width: 100%;
  }
  .esport {
    position: absolute;
    left: 45%;
    z-index: 2;
    bottom: 0;
    height: 100%;
  }
  .bottom {
    position: absolute;
    bottom: 0;
    z-index: 2;
    right: 0;
    width: 100%;
  }
`