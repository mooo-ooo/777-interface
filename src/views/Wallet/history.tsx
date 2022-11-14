import { useState } from 'react'
import { useRouter } from 'next/router'
import { PageMeta } from 'components/Layout/Page'
import Container from 'components/Layout/Container'
import Select from 'components/Select'
import CardBox from 'components/CardBox'
import { Flex, Grid, Box } from '@pancakeswap/uikit'
import { StyledWallet, StyledBox } from './styles'

const History: React.FC<React.PropsWithChildren> = () => {
  const router = useRouter()
  const { pathname } = router
  const [type, setType] = useState('')
  const list = ['deposit', 'withdraw', 'history']
  const options = [
    { label: 'Deposit', value: 'deposit' },
    { label: 'Withdraw', value: 'withdraw' },
  ]

  return (
    <>
      <PageMeta />
      <StyledWallet>
        <Container>
          <h1>Wallet</h1>
          <Flex className="feature-list">
            {list.map((item) => (
              <span
                key={item}
                className={pathname.includes(item) ? 'active' : undefined}
                onClick={() => router.push(item)}
                aria-hidden="true"
              >
                {item}
              </span>
            ))}
          </Flex>
          <StyledBox>
            <CardBox theme="secondary" hideSide>
              <Grid className="category-game" gridGap="16px" gridTemplateColumns="50% 50%">
                <Box className="withdraw-input-amount">
                  <h4>Transaction Type</h4>
                  <Select
                    options={options}
                    placeHolderText="Select Type"
                    onOptionChange={(item) => setType(item.value)}
                  />
                </Box>
                <Box className="withdraw-input-amount">
                  <h4>Period</h4>
                  <Select
                    options={options}
                    placeHolderText="Select collection"
                    onOptionChange={(item) => setType(item.value)}
                  />
                </Box>
              </Grid>
              <Box my={250} />
            </CardBox>
          </StyledBox>
          <Box pb={120} />
        </Container>
      </StyledWallet>
    </>
  )
}

export default History
