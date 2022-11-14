import { useState } from 'react'
import { useRouter } from 'next/router'
import { useWeb3React } from '@pancakeswap/wagmi'
import { PageMeta } from 'components/Layout/Page'
import Container from 'components/Layout/Container'
import CardBox from 'components/CardBox'
import { Button } from 'components/Button'
import { Flex, Grid, Box } from '@pancakeswap/uikit'
import Input from 'components/Input'
import { StyledWallet, StyledBox } from './styles'

const Deposit: React.FC<React.PropsWithChildren> = () => {
  const { account } = useWeb3React()
  const router = useRouter()
  const { pathname } = router
  const [select, setSelect] = useState('100')
  const list = ['deposit', 'withdraw', 'history']
  const amounts = ['50', '100', '300', '500']

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
              <h4>Choose or enter deposit amount</h4>
              <Grid gridGap="12px" gridTemplateColumns={['repeat(2, 1fr)', 'repeat(3, 1fr)', 'null', 'repeat(4, 1fr)']}>
                {amounts.map((item) => (
                  <Box key={item} className="box-btn-amount">
                    <Button
                      variant="secondary"
                      className="btn-amount"
                      active={select === item}
                      onClick={() => setSelect(item)}
                    >
                      {item}
                    </Button>
                  </Box>
                ))}
              </Grid>
              <Box className="deposit-input-amount">
                <Input placeholder="Deposit amount" onChange={(e) => setSelect(e.target.value)} initialValue={select} />
                <h3>BUSD</h3>
              </Box>
              <Box className="btn-submit">
                <Button variant="danger" disabled={!account}>
                  Deposit
                </Button>
              </Box>
              <Box className="description">
                <p>You may deposit from € 20 to € 10000. Commission - 0%</p>
                <p>
                  Making this deposit you hereby agree with our <span>TERMS AND CONDITIONS</span>
                </p>
                <Flex mt={12} justifyContent="center" alignItems="center">
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M15.1349 4.48207V10.1071C15.1349 10.5333 14.9677 10.9421 14.6702 11.2435C14.3727 11.5449 13.9692 11.7142 13.5485 11.7142H2.44356C2.02282 11.7142 1.61931 11.5449 1.3218 11.2435C1.02429 10.9421 0.857147 10.5333 0.857147 10.1071V4.48207C0.857147 4.26895 0.940717 4.06456 1.08947 3.91386C1.23823 3.76316 1.43998 3.6785 1.65035 3.6785C1.7601 3.65411 1.87376 3.65411 1.9835 3.6785L7.99602 6.89279L14.0244 3.6785C14.129 3.65631 14.2371 3.65631 14.3417 3.6785C14.552 3.6785 14.7538 3.76316 14.9026 3.91386C15.0513 4.06456 15.1349 4.26895 15.1349 4.48207ZM1.25375 1.76422L1.38066 1.89279L7.99602 5.10707L14.6431 1.89279H14.7383C14.8774 1.81578 14.9899 1.69754 15.0608 1.55392C15.1317 1.41029 15.1575 1.24815 15.1349 1.08922C15.1349 0.876096 15.0513 0.671704 14.9026 0.521005C14.7538 0.370306 14.552 0.285645 14.3417 0.285645H1.65035C1.43998 0.285645 1.23823 0.370306 1.08947 0.521005C0.940717 0.671704 0.857147 0.876096 0.857147 1.08922C0.859155 1.22705 0.896842 1.36194 0.96644 1.48039C1.03604 1.59884 1.13511 1.69671 1.25375 1.76422Z"
                      fill="white"
                    />
                  </svg>
                  <p>support@betkub.com</p>
                </Flex>
              </Box>
            </CardBox>
          </StyledBox>
          <Box pb={120} />
        </Container>
      </StyledWallet>
    </>
  )
}

export default Deposit
