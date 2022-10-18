import styled from 'styled-components'
import Container from 'components/Layout/Container'
import { Box, Button } from '@pancakeswap/uikit'

export interface IBanner {
  title: string
  subTitle: string[]
  account: string
}

const Banner: React.FC<React.PropsWithChildren<IBanner>> = ({ title, account, subTitle }) => {
  return (
    <BoxBanner>
      <Container>
        <StyledBanner>
          <div className="banner-content">
            <h4>{title}</h4>
            <h2>{subTitle[0]}</h2>
            <h2>{subTitle[1]}</h2>
            <Button className="btn-banner">{account ? 'Get Bonus' : 'Create Account'}</Button>
          </div>
          <img className="image-esport" src="/images/home/bg-gang.png" alt="esport" />
        </StyledBanner>
      </Container>
    </BoxBanner>
  )
}

const BoxBanner = styled.div`
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

const StyledBanner = styled(Box)`
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

export default Banner
