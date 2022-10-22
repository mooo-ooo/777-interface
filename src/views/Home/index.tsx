import { useRouter } from 'next/router'
import Image from 'next/future/image'
import { get } from 'utils/http'
import { useWeb3React } from '@pancakeswap/wagmi'
import { Grid, Flex } from '@pancakeswap/uikit'
import { PageMeta } from 'components/Layout/Page'
import CardGame from 'components/CardGame'
import CardBox from 'components/CardBox'
import Container from 'components/Layout/Container'
import Banner from 'components/Banner'
import { Button } from 'components/Button'
import { useEffect, useState } from 'react'
import { GAMES, ESPORT_GAME } from './constant'
import { Category, ContainerSectionTwo, SectionThree, SectionPromotion, BannerSecondary, SectionFAQ } from './styles'
// import { useTranslation } from '@pancakeswap/localization'
// import { useActiveChainId } from 'hooks/useActiveChainId'
// import { ChainId } from '@pancakeswap/sdk'

const Home: React.FC<React.PropsWithChildren> = () => {
  const router = useRouter()
  const [games, setGames] = useState([])
  const [collapse, setCollapse] = useState()
  const { account } = useWeb3React()
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
      <Banner
        account={account}
        title="We love Sport / E-sport"
        subTitle={['The best betting offerz', 'Bet on your favorite teams']}
      />

      <Category>
        <>
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
                      <img src={item.image} alt={item.name} />
                    </div>
                  </CardBox>

                  <Button
                    variant="primary"
                    onClick={() => router.push(`/category${item.path}`)}
                    className="btn-category"
                  >
                    {item.button}
                  </Button>
                </Flex>
              ))}
            </Grid>
          </ContainerSectionTwo>
        </>

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
                  gridTemplateColumns={['repeat(2, minmax(0, 1fr))', null, null, 'repeat(3, minmax(0, 1fr))']}
                  className="section-three_right"
                >
                  {games.map((game) => (
                    <CardGame key={game.slug} game={game} />
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
                gridTemplateColumns={[
                  'repeat(2, minmax(0, 1fr))',
                  null,
                  'repeat(3, minmax(0, 1fr))',
                  'repeat(3, minmax(0, 1fr))',
                  'repeat(6, minmax(0, 1fr))',
                ]}
                className="section-three_right"
              >
                {games.map((game) => (
                  <CardGame key={game.slug} game={game} />
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
                <img key={item.name} src={item.image} alt={item.name} />
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
              gridTemplateColumns={[
                'repeat(2, minmax(0, 1fr))',
                null,
                'repeat(3, minmax(0, 1fr))',
                'repeat(3, minmax(0, 1fr))',
                'repeat(6, minmax(0, 1fr))',
              ]}
              className="section-banner_game"
            >
              {games.map((game) => (
                <CardGame key={game.slug} game={game} />
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
              <div key={item.label} className="faq_content">
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
