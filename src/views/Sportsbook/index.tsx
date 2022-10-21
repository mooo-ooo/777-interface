import { useRouter } from 'next/router'
import { get } from 'utils/http'
import { useWeb3React } from '@pancakeswap/wagmi'
import { Box, Grid, Flex } from '@pancakeswap/uikit'
import { PageMeta } from 'components/Layout/Page'
import Banner from 'components/Banner'
import { useEffect, useState } from 'react'
import Container from 'components/Layout/Container'
import CardGame from 'components/CardGame'
import Select from 'components/Select'
import { Button } from 'components/Button'
import { StyledCategory } from './styles'
import { CATEGORIES } from './constants'
// import { useTranslation } from '@pancakeswap/localization'
// import { useActiveChainId } from 'hooks/useActiveChainId'
// import { ChainId } from '@pancakeswap/sdk'

const Sportsbook: React.FC<React.PropsWithChildren> = () => {
  const [games, setGames] = useState([])
  const { account } = useWeb3React()
  const [category, setCategory] = useState('popular')
  const [collection, setCollection] = useState()
  // const { t } = useTranslation()

  const options = [
    { label: 'High volatility', value: 'high_volatility' },
    { label: 'Win multiplier', value: 'win_multiplier' },
    { label: 'Tumbling reels', value: 'tumbling_reels' },
    { label: 'Pays both ways', value: 'pays_both_ways' },
    { label: 'Stacked-symbols', value: 'stacked_symbols' },
    { label: 'Pick bonus', value: 'pick_bonus' },
    { label: 'Megaways', value: 'megaways' },
  ]

  const getData = async () => {
    const { parsedBody } = await get<{ data: [] }>(`https://97bet-api.cowswap.app/api/games?type=slot&page=0&limit=30`)
    if (!parsedBody) return
    setGames(parsedBody.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <PageMeta />
      <Banner
        account={account}
        title="Loyalty and VIP Program"
        subTitle={['Accumulate Coinz', 'The more you play, the more you earn']}
      />
      <Container>
        <Flex justifyContent="center" mb={24} mt={40}>
          <StyledCategory>
            {CATEGORIES.map((item) => (
              <Box key={item.label} className={`category-box ${category === item.id && 'active'}`}>
                <img src={item.image} alt={item.label} className="category-box_inactive" />
                <img src={item.hoverImage} alt={item.label} className="category-box_active" />
                <h4>{item.label}</h4>
              </Box>
            ))}
          </StyledCategory>
        </Flex>
        <Grid
          className="category-game"
          gridGap="24px"
          gridTemplateColumns={['1fr', null, null, '23% 23% auto']}
          mb={['32px', null, '42px']}
        >
          <Select options={options} placeHolderText="Select collection" />
          <Select options={options} placeHolderText="Select provider" />
          <Select options={options} />
        </Grid>
        <Box mb={24}>
          <Grid
            gridGap="24px"
            gridTemplateColumns={['repeat(2, 1fr)', null, 'repeat(3, 1fr)', 'repeat(3, 1fr)', 'repeat(6, 1fr)']}
          >
            {games.map((game) => (
              <div>
                <CardGame game={game} />
              </div>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  )
}

export default Sportsbook
