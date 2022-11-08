import { get } from 'utils/http'
import { useWeb3React } from '@pancakeswap/wagmi'
import { Box, Grid, Flex } from '@pancakeswap/uikit'
import { PageMeta } from 'components/Layout/Page'
import Banner from 'components/Banner'
import { useEffect, useState } from 'react'
import Container from 'components/Layout/Container'
import CardGame from 'components/CardGame'
import Select from 'components/Select'
import SearchInput from 'components/SearchInput'
import { useRouter } from 'next/router'
import { StyledCategory } from './styles'
import { CATEGORIES } from './constants'
// import { useTranslation } from '@pancakeswap/localization'
// import { useActiveChainId } from 'hooks/useActiveChainId'
// import { ChainId } from '@pancakeswap/sdk'

const Sportsbook: React.FC<React.PropsWithChildren> = () => {
  const router = useRouter()
  const {
    query: { type },
  } = router

  const [games, setGames] = useState([])
  const { account } = useWeb3React()
  const [category, setCategory] = useState('slot')
  const [provider, setProvider] = useState('mee')
  const [search, setSearch] = useState('')
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

  const getData = async (value) => {
    const { parsedBody } = await get<{ data: [] }>(`https://97bet-api.cowswap.app/api/games?type=${value}&limit=30`)
    if (!parsedBody) return
    setGames(parsedBody.data)
  }

  useEffect(() => {
    getData(category)
  }, [category])

  useEffect(() => {
    getData(type)
  }, [type])

  return (
    <>
      <PageMeta />
      <Banner
        account={account}
        title="Loyalty and VIP Program"
        subTitle={['Accumulate Coinz', 'The more you play, the more you earn']}
      />
      <Container>
        <Flex justifyContent="center" mb={['4px', null, '8px']} mt={40}>
          <StyledCategory>
            {CATEGORIES.map((item) => (
              <Box
                key={item.label}
                className={`category-box ${category === item.id && 'active'}`}
                onClick={() => setCategory(item.id)}
              >
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
          gridTemplateColumns={['1fr', null, null, '24% 24% auto']}
          mb={['12px', null, '12px']}
        >
          <Select
            options={options}
            placeHolderText="Select collection"
            onOptionChange={(item) => setProvider(item.value)}
          />
          <Select
            options={options}
            placeHolderText="Select provider"
            onOptionChange={(item) => setProvider(item.value)}
          />
          <SearchInput onChange={(e) => setSearch(e.target.value)} />
        </Grid>
        <Box mb={24}>
          <Grid
            gridGap="24px"
            gridTemplateColumns={[
              'repeat(2, minmax(0, 1fr))',
              null,
              'repeat(3, minmax(0, 1fr))',
              'repeat(3, minmax(0, 1fr))',
              'repeat(6, minmax(0, 1fr))',
            ]}
          >
            {games.map((game) => (
              <CardGame key={game.slug} game={game} />
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  )
}

export default Sportsbook
