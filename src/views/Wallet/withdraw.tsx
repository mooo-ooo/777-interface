import { useState } from 'react'
import { useWeb3React } from '@pancakeswap/wagmi'
import { useRouter } from 'next/router'
import { PageMeta } from 'components/Layout/Page'
import Container from 'components/Layout/Container'
import CardBox from 'components/CardBox'
import { Button } from 'components/Button'
import { Flex, Grid, Box } from '@pancakeswap/uikit'
import Input from 'components/Input'
import { StyledWallet, StyledRefresh, StyledBox } from './styles'

const Deposit: React.FC<React.PropsWithChildren> = () => {
  const { account } = useWeb3React()
  const router = useRouter()
  const { pathname } = router
  const [balance, setBalance] = useState('0')
  const [select, setSelect] = useState('100')
  const [email, setEmail] = useState('')
  const list = ['deposit', 'withdraw', 'history']

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
              <Box className="withdraw-input-amount">
                <h4>Available For Withdrawal</h4>
                <Grid className="category-game" gridGap="16px" gridTemplateColumns="87% 13%">
                  <Input
                    initialValue={`${balance} BUSD`}
                    onChange={(e) => setBalance(`${e.target.value} BUSD`)}
                    disabled
                  />
                  <StyledRefresh>
                    <svg width="18" height="20" viewBox="0 0 18 20" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.9755 5.57379C13.3794 3.97769 11.2572 3.09867 8.99998 3.09867H7.76103L9.74959 1.10523L8.64162 0L4.76873 3.88238L8.59107 7.76863L9.70681 6.67125L7.73217 4.66359H8.99998C12.7968 4.66359 15.8857 7.7525 15.8857 11.5493C15.8857 15.3462 12.7968 18.4351 8.99998 18.4351C5.20318 18.4351 2.11424 15.3461 2.11424 11.5492V10.7667L0.549316 10.7669V11.5493C0.549316 13.8066 1.42834 15.9287 3.02447 17.5248C4.62057 19.121 6.74275 20 8.99998 20C11.2572 20 13.3794 19.121 14.9755 17.5248C16.5716 15.9287 17.4506 13.8066 17.4506 11.5493C17.4506 9.29211 16.5716 7.16992 14.9755 5.57379Z" />
                    </svg>
                  </StyledRefresh>
                </Grid>
              </Box>
              <Box className="withdraw-input-amount">
                <h4>Withdrawal Amount:</h4>
                <Input placeholder="Deposit amount" onChange={(e) => setSelect(e.target.value)} initialValue={select} />
                <h3>BUSD</h3>
              </Box>
              <Box className="withdraw-input-amount">
                <h4>Email</h4>
                <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} initialValue={email} />
              </Box>
              <Box className="btn-submit">
                <Button variant="danger" disabled={!account}>
                  Withdraw
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
