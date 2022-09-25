import styled from 'styled-components'
import Image from 'next/future/image'
// import PageSection from 'components/PageSection'
import { useWeb3React } from '@pancakeswap/wagmi'
import useTheme from 'hooks/useTheme'
import { Box } from '@pancakeswap/uikit'
import { PageMeta } from 'components/Layout/Page'
import { useTranslation } from '@pancakeswap/localization'
import Card from 'components/Card'
import CardBox from 'components/CardBox'
import Container from 'components/Layout/Container'
import Row from 'components/Layout/Row'
import { AutoColumn } from 'components/Layout/Column'
import { Button } from 'components/Button'
// import { useActiveChainId } from 'hooks/useActiveChainId'
// import { ChainId } from '@pancakeswap/sdk'

const Home: React.FC<React.PropsWithChildren> = () => {
  // const { theme } = useTheme()
  // const { account } = useWeb3React()

  // const { t } = useTranslation()
  const categories = [
    {
      name: 'Sports',
      path: '/sport',
      image: '/images/home/sport.png',
    },
    {
      name: 'E-Sports',
      path: '/e-sport',
      image: '/images/home/esport.png',
    },
    {
      name: 'Casino',
      path: '/casino',
      image: '/images/home/casino.png',
    },
    {
      name: 'Aviator',
      path: '/aviator',
      image: '/images/home/aviator.png',
    },
  ]

  return (
    <>
      <PageMeta />
      <SectionOne>
        <Container>
          <Banner>
            <div className="banner-content">
              <h4>We love Sport / E-sport</h4>
              <h2>The best betting offer</h2>
              <h2>Bet on your favorite teams</h2>
              <Button className="btn-banner">Create Account</Button>
            </div>
            <img className="image-esport" src="/images/home/bg-gang.png" alt="esport" />
          </Banner>
        </Container>
      </SectionOne>

      <SectionTwo>
        <ContainerSectionTwo>
          <Row className="category">
            {categories.map((item) => (
              <AutoColumn key={item.name} className="section-two_box">
                <h2 className="section-two_title">{item.name}</h2>
                <CardBox>
                  <div className="section-two_body">
                    <Image src={item.image} alt={item.name} fill />
                  </div>
                </CardBox>
              </AutoColumn>
            ))}
          </Row>
        </ContainerSectionTwo>
      </SectionTwo>

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

const SectionOne = styled.div`
  width: 100%;
  height: 450px;
  position: relative;
  background-image: url(/images/home/banner-bg.jpg);
  background-repeat: no-repeat;
  background-size: auto 100%;

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
    height: 380px;
  }
`

const Banner = styled(Box)`
  position: relative;
  display: flex;
  height: 450px;

  .image-esport {
    position: absolute;
    right: 0px;
    left: 0px;
    z-index: 1;
    margin: auto;
    bottom: 0;
    height: auto;
    max-width: 100%;
  }

  .banner-content {
    align-content: center;
    z-index: 10;
    display: grid;
    h4 {
      margin-bottom: 24px;
      text-transform: uppercase;
      font-size: 16px;
      text-shadow: 0 0 32px hsl(0deg 0% 100% / 50%);
    }
    h2 {
      text-shadow: 0 0 32px hsl(0deg 0% 100% / 50%);
      font-size: 30px;
      font-weight: bold;
      margin-bottom: 16px;
    }
    .btn-banner {
      margin-top: 16px;
      height: 60px;
      width: max-content;
    }
  }

  ${({ theme }) => theme.mediaQueries.md} {
    height: 380px;
    .image-esport {
      left: 35%;
      max-width: 50%;
    }
  }
`

const SectionTwo = styled.div``

const ContainerSectionTwo = styled(Container)`
  padding: 0;
  margin-top: 48px;
  margin-bottom: 32px;
  .category {
    gap: 16px;
  }
  .section-two {
    &_title {
      font-size: 32px;
      text-transform: capitalize;
      margin-bottom: 12px;
    }
    &_box {
      width: 100%;
    }
    &_body {
      height: 136px;
    }
  }
`
