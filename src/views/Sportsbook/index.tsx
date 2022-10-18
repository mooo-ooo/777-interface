import { useRouter } from 'next/router'
import { get } from 'utils/http'
import { useWeb3React } from '@pancakeswap/wagmi'
import { Box, Grid, Flex } from '@pancakeswap/uikit'
import { PageMeta } from 'components/Layout/Page'
import Banner from 'components/Banner'
import { useEffect, useState } from 'react'
import Container from 'components/Layout/Container'
import { StyledCategory } from './styles'
import { CATEGORIES } from './constants'
// import { useTranslation } from '@pancakeswap/localization'
// import { useActiveChainId } from 'hooks/useActiveChainId'
// import { ChainId } from '@pancakeswap/sdk'

const Sportsbook: React.FC<React.PropsWithChildren> = (props) => {
  const [games, setGames] = useState([])
  const { account } = useWeb3React()
  // const { t } = useTranslation()

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
      <Container mt="40px">
        <Flex justifyContent="center">
          <StyledCategory>
            {CATEGORIES.map((item) => (
              <Box key={item.label} className="category-box active">
                <img src={item.image} alt={item.label} className="category-box_inactive" />
                <img src={item.hoverImage} alt={item.label} className="category-box_active" />
                <h4>{item.label}</h4>
              </Box>
            ))}
          </StyledCategory>
        </Flex>
      </Container>
    </>
  )
}

export default Sportsbook
