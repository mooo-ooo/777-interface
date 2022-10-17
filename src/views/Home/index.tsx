import styled from 'styled-components'
import { useRouter } from 'next/router'
import Image from 'next/future/image'
import { get } from 'utils/http'
// import PageSection from 'components/PageSection'
// import { useWeb3React } from '@pancakeswap/wagmi'
// import useTheme from 'hooks/useTheme'
import { Box, Grid, Flex } from '@pancakeswap/uikit'
import { PageMeta } from 'components/Layout/Page'
import CardGame from 'components/CardGame'
// import { useTranslation } from '@pancakeswap/localization'
import CardBox from 'components/CardBox'
import Container from 'components/Layout/Container'
import { Button } from 'components/Button'
import { useEffect, useState } from 'react'
import { GAMES, ESPORT_GAME } from './constant'
// import { useActiveChainId } from 'hooks/useActiveChainId'
// import { ChainId } from '@pancakeswap/sdk'

const Home: React.FC<React.PropsWithChildren> = () => {
  const router = useRouter()
  const [games, setGames] = useState([])
  const [collapse, setCollapse] = useState()
  // const { theme } = useTheme()
  // const { account } = useWeb3React()

  // const { t } = useTranslation()

  const getData = async () => {
    const { parsedBody } = await get<{ data: [] }>(`https://97bet-api.cowswap.app/api/games?type=slot&page=0&limit=6`)
    if (!parsedBody) return
    setGames(parsedBody.data)
  }

  const faq = [
    {
      label: 'Can I withdraw my bonus funds?',
      content:
        'Our bonuses are sticky, which means that once the bonus is activated, it must be played in its entirety (reaching the wager) in order to withdraw. Of course, if the bonus has expired and your funds have been wagered at least once (in accordance with anti-money laundering regulations), you may proceed with a withdrawal.',
    },
    {
      label: 'Can i play on my mobile?',
      content:
        'Our site is totally "Responsive", which means that it adapts to all types of screens! So, you can bet and spin where you want, when you want.',
    },
    {
      label: 'How does the loyalty program work?',
      content: `It's very simple: the more you play, the more Coinz you get! Coinz allow you to become a VIP or to buy exclusive rewards in the shop.`,
    },
  ]

  const handleCollapse = (index) => {
    if (collapse === index) setCollapse(null)
    else setCollapse(index)
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
              {GAMES.map((item) => (
                <Flex key={item.name} flexDirection="column" className="section-two_box">
                  <h2 className="section-two_title">{item.name}</h2>
                  <CardBox background>
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
                  {games.map((game) => (
                    <CardGame game={game} />
                  ))}
                </Grid>
              </Flex>
            </Grid>
            <Grid gridGap="8px" gridTemplateColumns={['1fr', null, null, '1fr']} mt={4}>
              <Flex className="section-three_title" justifyContent="space-between" mb={16}>
                <Grid gridGap="8px" gridTemplateColumns={['1fr', null, null, '1fr 1fr']}>
                  <h2>Slots</h2>
                  <h4>5054 Games</h4>
                </Grid>
                <Button variant="secondary">See All</Button>
              </Flex>
              <Grid
                gridGap="32px"
                gridTemplateColumns={['repeat(2, 1fr)', null, 'repeat(3, 1fr)', 'repeat(3, 1fr)', 'repeat(6, 1fr)']}
                className="section-three_right"
              >
                {games.map((game) => (
                  <CardGame game={game} />
                ))}
              </Grid>
            </Grid>
          </Container>
        </SectionThree>
      </Category>

      <BannerSecondary>
        <Container>
          <div className="banner-content-second">
            <h4>E-SPORT</h4>
            <h2>Make bets on your favourite cybersport team</h2>
            <Button className="btn-banner-second" variant="danger">
              Create Account
            </Button>
            <Grid
              gridGap="24px"
              gridTemplateColumns={['repeat(2, 1fr)', null, null, 'repeat(6, 1fr)']}
              className="esport-game"
            >
              {ESPORT_GAME.map((item) => (
                <img src={item.image} alt={item.name} />
              ))}
              <Flex className="spot">
                <span />
                <span />
                <span />
              </Flex>
            </Grid>
          </div>
          <img className="image-esport-second" src="/images/home/bg_gang_second.png" alt="esport" />
        </Container>
      </BannerSecondary>

      <SectionPromotion>
        <Container>
          <Grid
            gridGap={['14px', null, null, '32px']}
            gridTemplateColumns={['1fr', null, null, 'repeat(2, 1fr)']}
            className="promotion"
          >
            <CardBox theme="secondary" hideSide>
              <div className="promotion-left">
                <Flex justifyContent="space-between" mb={16} className="promotion-left__title">
                  <Grid gridGap="8px" gridTemplateColumns={['1fr', null, null, '1fr 1fr']}>
                    <h2>PROMOTIONS</h2>
                  </Grid>
                  <Button variant="secondary">See All</Button>
                </Flex>
                <h2 className="promotion-left__name">Regular Promotions</h2>
                <div className="promotion-left__mystery-box">
                  <img src="/images/home/mystery_box.png" alt="mystery_box" />
                </div>
                <p className="promotion-left__content">
                  Get our different bonuses and go through our huge betting offer: Sport, E-sport and Casino
                </p>
                <Button variant="primary" className="promotion-left__btn-mystery-box">
                  Create Account
                </Button>
              </div>
            </CardBox>
            <Flex>
              <Grid gridGap="12px" gridTemplateColumns={['1fr', null, null, '1fr']} className="promotion-right">
                <CardBox hideBackground>
                  <Flex>
                    <img src="images/home/coin_game.svg" alt="coin_game" className="promotion-right__coin" />
                    <h2>Coinz</h2>
                  </Flex>
                  <p>
                    Get Coinz while playing and be rewarded with several advantages: climb the ladder of our VIP group
                    to get exclusive rewards or spend your Coinz in the shop!
                  </p>
                  <Flex className="promotion-right__discover">
                    <h4>Discover our vip group</h4>
                  </Flex>
                </CardBox>
                <CardBox hideBackground>
                  <Flex>
                    <img src="images/home/coin_shop.svg" alt="coin_game" className="promotion-right__coin" />
                    <h2>shop</h2>
                  </Flex>
                  <p>
                    On Casinozer, the more you participate the more you are rewarded! Spend your Coinz in our shop to
                    get Free spins or Bonus and enjoy!
                  </p>
                  <Flex className="promotion-right__discover" justifyContent="column">
                    <h4>Discover our shop</h4>
                  </Flex>
                </CardBox>
              </Grid>
            </Flex>
          </Grid>
          <Grid gridGap="8px" gridTemplateColumns={['1fr', null, null, '1fr']} mt={4}>
            <Flex className="section-banner_title" justifyContent="space-between" mb={16}>
              <Grid gridGap="8px" gridTemplateColumns={['1fr', null, null, '1fr 1fr']}>
                <h2>Table games</h2>
                <h4>140 Games</h4>
              </Grid>
              <Button variant="secondary">See All</Button>
            </Flex>
            <Grid
              gridGap="32px"
              gridTemplateColumns={['repeat(2, 1fr)', null, 'repeat(3, 1fr)', 'repeat(3, 1fr)', 'repeat(6, 1fr)']}
              className="section-banner_game"
            >
              {games.map((game) => (
                <CardGame game={game} />
              ))}
            </Grid>
          </Grid>
        </Container>
      </SectionPromotion>

      <SectionFAQ>
        <Container>
          <h2>FAQ</h2>
          <div className="faq">
            {faq.map((item, index) => (
              <div className="faq_content">
                <div className="faq_label" onClick={() => handleCollapse(index)} aria-hidden="true">
                  {item.label}
                </div>
                <div className={collapse === index ? 'faq_body open' : 'faq_body'}>
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </SectionFAQ>

      {/* <SectionFAQ>
        <Container />
      </SectionFAQ> */}

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
  background-size: ${({ theme }) => (theme.mediaQueries.md ? 'cover' : 'auto 100%')};
  background-position: 50%;

  &:after {
    position: absolute;
    bottom: 0px;
    width: 100%;
    content: '';
    height: 17px;
    background-image: url(/images/home/bottom.svg);
    background-position: bottom 0 center;
    background-size: ${({ theme }) => (theme.mediaQueries.md ? 'cover' : 'auto 100%')};
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

const BannerSecondary = styled.div`
  position: relative;
  height: 450px;
  padding: 45px 0;
  margin-bottom: 20px;
  background-image: url(/images/home/banner_second_bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-size: ${({ theme }) => (theme.mediaQueries.md ? 'cover' : 'auto 100%')};
  background-position: 50%;
  z-index: 1;

  &:before {
    position: absolute;
    top: 0px;
    width: 100%;
    background-repeat: no-repeat;
    content: '';
    height: 17px;
    background-image: url(/images/home/bottom.svg);
    background-position: top 0 center;
    transform: rotate(180deg);
    background-size: ${({ theme }) => (theme.mediaQueries.md ? 'cover' : 'auto 100%')};
  }
  &:after {
    position: absolute;
    bottom: 0px;
    width: 100%;
    content: '';
    height: 17px;
    background-image: url(/images/home/bottom.svg);
    background-position: bottom 0 center;
    background-size: ${({ theme }) => (theme.mediaQueries.md ? 'cover' : 'auto 100%')};
    z-index: 10;
  }
  .banner-content-second {
    z-index: 10;
    width: 100%;
    h4 {
      margin-bottom: 20px;
      text-transform: uppercase;
      font-size: 16px;
      text-shadow: 0 0 32px hsl(0deg 0% 100% / 50%);
    }
    h2 {
      max-width: 100%;
      margin-bottom: 60px;
      text-shadow: 0 0 32px hsl(0deg 0% 100% / 50%);
      font-size: 24px;
      text-align: center;
      z-index: 10;
      ${({ theme }) => theme.mediaQueries.md} {
        text-align: left;
        line-height: 66px;
        margin-bottom: 40px;
        font-size: 44px;
      }
    }
    .btn-banner-second {
      max-width: 300px;
      height: 60px;
      margin-bottom: 60px;
    }
    ${({ theme }) => theme.mediaQueries.md} {
      max-width: 52%;
    }
    .esport-game {
      .spot {
        display: none;
        align-items: center;
        ${({ theme }) => theme.mediaQueries.md} {
          display: flex;
        }
        span {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #fff;
          display: inline-block;
          margin-right: 8px;
          margin-bottom: 12px;
        }
      }
    }
  }
  .image-esport-second {
    position: absolute;
    right: 0px;
    left: 0px;
    z-index: -1;
    margin: auto;
    top: 50%;
    transform: translateY(-50%);
    height: auto;

    ${({ theme }) => theme.mediaQueries.md} {
      left: 35%;
      height: 90%;
      max-width: max-content;
    }
  }
`

const SectionPromotion = styled.div`
  margin-bottom: 90px;
  ${({ theme }) => theme.mediaQueries.md} {
    background-image: url(/images/home/bg_line_right.png);
    background-repeat: no-repeat;
    background-position: 100% 0;
  }
  .promotion {
    position: relative;
    &-left {
      margin: 12px;
      &__title {
        font-size: 14px;
        text-shadow: 0 0 32px hsl(0deg 0% 100% / 50%);
        text-transform: uppercase;
        h2 {
          font-weight: bold;
        }
        ${({ theme }) => theme.mediaQueries.md} {
          font-size: 16px;
        }
      }

      &__name {
        text-align: center;
        font-size: 48px;
        margin-bottom: 16px;
      }

      &__mystery-box {
        text-align: center;
        max-width: 100%;
        height: auto;
        margin-bottom: 22px;
      }

      &__content {
        margin-bottom: 20px;
        padding: 0px;
        font-weight: bold;
        color: #ffd600;
        font-size: 18px;
        text-align: center;
        line-height: 24px;
        ${({ theme }) => theme.mediaQueries.md} {
          font-size: 32px;
          line-height: 48px;
          padding: 0px 42px;
        }
      }

      &__btn-mystery-box {
        margin: auto;
        max-width: 190px;
        height 60px;
      }
    }

    &-right {
      position: relative;
      &__coin {
        height: 60px;
        width: 60px;
      }
      h2 {
        margin: 14px 14px 18px;
        font-size: 32px;
      }
      p {
        margin-bottom: 34px;
        font-size: 14px;
        line-height: 18px;
      }

      &__discover {
        position: absolute;
        bottom: 32px;
        left: 50%;
        transform: translateX(-50%);
        cursor: pointer;
        h4 {
          color: #ffd600;
          text-shadow: 0 0 20px rgb(255 214 0 / 20%);
          transition: .3s linear;
          font-size: 16px;
          &:hover {
            text-shadow: 0 0 12px #ffd600;
          }
        }
        &:before {
          content: "";
          margin: auto;
          width: 20px;
          height: 10px;
          left: 102%;
          background-image: url(/images/home/arrow.svg);
          position: absolute;
          top: 3px;
          bottom: 0px;
          transition: .3s linear; 
        }
        &:hover {
          &:before {
            filter: drop-shadow(0 0 4px #FFD600);
          }
        }
      }
    }
  }

  .section-banner {
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
    &_image {
      position: relative !important;
      width: 100%;
      height: 100%;
    }
  }
`

const SectionFAQ = styled.div`
  padding-bottom: 60px;

  h2 {
    margin: 32px 0 28px;
    font-size: 48px;
    font-weight: bold;
    text-align: center;
  }
  .faq {
    max-width: 1000px;
    margin: auto;
    &_content {
      border-bottom: 1px solid #aeaeae;
      background-color: transparent;
      position: relative;
    }

    &_label {
      padding: 24px 0;
      font-size: 18px;
      font-weight: 800;
      cursor: pointer;

      &:before {
        content: '';
        margin: auto;
        width: 28px;
        height: 28px;
        top: 14px;
        right: 14px;
        background-color: #fff;
        mask-image: url('/images/home/arrow_faq.svg');
        mask-repeat: no-repeat;
        mask-position: center;
        mask-size: 17px;
        transition: 0.3s linear;
        z-index: 1;
        cursor: pointer;
        position: absolute;
      }
    }
    &_body {
      display: none;
      p {
        padding-bottom: 15px;
        font-weight: 700;
        font-size: 14px;
        line-height: 25px;
      }
      &.open {
        display: block;
      }
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
