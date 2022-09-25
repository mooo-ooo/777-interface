import styled from 'styled-components'
import { useRouter } from 'next/router'
import Image from 'next/future/image'
import { get } from 'utils/http'
// import PageSection from 'components/PageSection'
// import { useWeb3React } from '@pancakeswap/wagmi'
// import useTheme from 'hooks/useTheme'
import { Box, Grid, Flex } from '@pancakeswap/uikit'
import { PageMeta } from 'components/Layout/Page'
// import { useTranslation } from '@pancakeswap/localization'
import CardBox from 'components/CardBox'
import Container from 'components/Layout/Container'
import { Button } from 'components/Button'
import { useEffect, useState } from 'react'
// import { useActiveChainId } from 'hooks/useActiveChainId'
// import { ChainId } from '@pancakeswap/sdk'

const Home: React.FC<React.PropsWithChildren> = () => {
  const router = useRouter()
  const [games, setGames] = useState([])
  // const { theme } = useTheme()
  // const { account } = useWeb3React()

  // const { t } = useTranslation()
  const categories = [
    {
      name: 'Sports',
      path: '/sportsbook',
      image: '/images/home/sport.png',
      button: 'Make Bet',
    },
    {
      name: 'E-Sports',
      path: '/e-sport',
      image: '/images/home/esport.png',
      button: 'Bet Now',
    },
    {
      name: 'Casino',
      path: '/casino',
      image: '/images/home/casino.png',
      button: 'Play Games',
    },
    {
      name: 'Aviator',
      path: '/aviator',
      image: '/images/home/aviator.png',
      button: 'Fly Now',
    },
  ]

  const getData = async () => {
    const { parsedBody } = await get<{ data: [] }>(`https://97bet-api.cowswap.app/api/games?type=slot&page=0&limit=6`)
    if (!parsedBody) return
    setGames(parsedBody.data)
  }

  useEffect(() => {
    getData()
  }, [])

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

      <Category>
        <SectionTwo>
          <ContainerSectionTwo my={['24px', null, null, '48px']}>
            <Grid
              className="category-game"
              gridGap="16px"
              gridTemplateColumns={['repeat(2, 1fr)', null, null, 'repeat(4, 1fr)']}
            >
              {categories.map((item) => (
                <Flex key={item.name} flexDirection="column" className="section-two_box">
                  <h2 className="section-two_title">{item.name}</h2>
                  <CardBox>
                    <div className="section-two_body">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
                      />
                    </div>
                  </CardBox>

                  <Button variant="primary" onClick={() => router.push(item.path)} className="btn-category">
                    {item.button}
                  </Button>
                </Flex>
              ))}
            </Grid>
          </ContainerSectionTwo>
        </SectionTwo>

        <SectionThree>
          <Container my={['24px', null, null, '48px']}>
            <Grid gridGap="32px" gridTemplateColumns={['1fr', '1fr', '1fr', '35% auto']} className="section-three">
              <Flex flexDirection="column" className="section-three_left">
                <Flex className="section-three_title" justifyContent="space-between" mb={16}>
                  <Grid gridGap="8px" gridTemplateColumns={['1fr', null, null, '1fr 1fr']}>
                    <h2>Live Сasino</h2>
                    <h4>344 Games</h4>
                  </Grid>
                  <Button variant="secondary">See All</Button>
                </Flex>
                <div className="layer-cover">
                  <Image className="section-three_image" src="/images/home/section-3.jpeg" fill />
                </div>
              </Flex>
              <Flex flexDirection="column">
                <Flex className="section-three_title" justifyContent="space-between" mb={16}>
                  <Grid gridGap="8px" gridTemplateColumns={['1fr', null, null, '1fr 1fr']}>
                    <h2>Top Games</h2>
                    <h4>13 Games</h4>
                  </Grid>
                  <Button variant="secondary">See All</Button>
                </Flex>
                <Grid
                  gridGap="32px"
                  gridTemplateColumns={['repeat(2, 1fr)', null, null, 'repeat(3, 1fr)']}
                  className="section-three_right"
                >
                  {games.map((item) => (
                    <BoxGame key={item.gameId} flexDirection="column">
                      <div className="layer-cover">
                        <Image src={item.thumbnail} alt={item.name} fill className="section-three_game" />
                      </div>
                      <Flex flexDirection="column" className="section-three_game-title" mt={12}>
                        <h2>{item.name}</h2>
                        <h4>{item.group}</h4>
                      </Flex>
                    </BoxGame>
                  ))}
                </Grid>
              </Flex>
            </Grid>
          </Container>
        </SectionThree>
      </Category>

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
  height: 420px;
  position: relative;
  background-image: url(/images/home/banner-bg.jpg);
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: 50%;

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
  ${({ theme }) => theme.mediaQueries.lg} {
    height: 450px;
  }
`

const Banner = styled(Box)`
  position: relative;
  display: flex;
  height: 420px;

  .image-esport {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
    margin: auto;
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
      text-align: center;
      margin: auto;
      ${({ theme }) => theme.mediaQueries.md} {
        margin: 0;
        margin-top: 16px;
      }
    }
  }

  ${({ theme }) => theme.mediaQueries.md} {
    height: 450px;
    .image-esport {
      left: 35%;
      max-width: max-content;
      height: auto;
    }
  }
`

const Category = styled.div`
  background-image: url(/images/home/bg_line_home.png);
  background-repeat: no-repeat;
  background-position: 0 0;
`

const SectionTwo = styled.div``

const ContainerSectionTwo = styled(Container)`
  margin-top: 48px;
  margin-bottom: 32px;
  .category-game {
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
      .btn-category {
        height: 44px;
        width: max-content;
        margin: auto;
      }
    }
    &_body {
      height: 94px;

      img {
        max-width: fit-content;
        left: 0;
        right: 0;
        margin: auto;
      }
      ${({ theme }) => theme.mediaQueries.md} {
        height: 136px;
      }
    }
  }
`

const SectionThree = styled.div`
  .section-three {
    &_title {
      h2 {
        font-size: 24px;
        line-height: 1.2;
        ${({ theme }) => theme.mediaQueries.lg} {
          font-size: 32px;
        }
      }
      h4 {
        color: #ff004d;
        font-size: 12px;
        align-items: center;
        display: flex;
        ${({ theme }) => theme.mediaQueries.lg} {
          margin-top: 16px;
        }
      }
    }

    &_box {
      height: 464px;
      ${({ theme }) => theme.mediaQueries.lg} {
        height: 505px;
      }
    }

    &_image {
      position: relative !important;
      width: 100%;
      height: 100%;
    }
  }
`

const BoxGame = styled(Flex)`
  .section-three_game {
    object-fit: cover;
    position: relative !important;
    width: 100%;
    height: 100%;
    &-title {
      h2 {
        color: #fff;
        font-weight: 700;
        font-size: 14px;
        line-height: 1.2;
        margin-bottom: 4px;
        transition: 0.3s linear;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-transform: capitalize;
      }
      h4 {
        ont-weight: 500;
        font-size: 11px;
        line-height: 1.2;
        color: hsla(0, 0%, 100%, 0.6);
        max-width: 130px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
`
