import { Box } from '@pancakeswap/uikit'
import styled from 'styled-components'

export const StyledDeposit = styled.main`
  background-color: #151d24;
  background-image: url(/images/wallet/bg-wallet.jpg);
  position: relative;
  background-size: auto;
  background-position: top;
  background-repeat: no-repeat;
  flex: 1 0 auto;
  z-index: 10;

  h1 {
    padding: 28px 0;
    font-size: 48px;
    color: #fff;
    text-align: center;
    font-weight: 800;
    line-height: 1.25;
  }

  .feature-list {
    gap: 24px;
    justify-content: center;
    padding-bottom: 20px;

    span {
      text-transform: capitalize;
      text-shadow: 0 0 7px rgb(255 0 77 / 50%);
      font-size: 18px;
      color: #fff;
      display: block;
      font-weight: 900;
      line-height: 1.25;
      cursor: pointer;

      &.active {
        color: #ff004d;
      }
    }
  }
`

export const StyledBox = styled(Box)`
  margin: auto;
  max-width: 532px;
  position: relative;
  z-index: 20;

  &:before {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: transparent;
    background-image: linear-gradient(#00ffc2, #00ffc2), linear-gradient(#00ffc2, #00ffc2),
      linear-gradient(#00ffc2, #00ffc2), linear-gradient(#00ffc2, #00ffc2),
      linear-gradient(
        to top left,
        transparent calc(50% - 5px),
        #151d24 calc(50% - 3px),
        #151d24 calc(50% + 1px),
        #151d24 calc(50% + 2px)
      ),
      linear-gradient(#151d24, #151d24), linear-gradient(#151d24, #151d24);
    background-size: 3px 100%, 3px 100%, 100% 3px, 100% 4px, 28px 28px, 100% 100%, 100% 100%;
    background-position: 0 0, 100% -25px, 0 0, -25px calc(100% + 1px), 100% 100%, -25px 0, 100% -25px;
    background-repeat: no-repeat;
    content: '';
  }

  h4 {
    text-align: center;
    color: #fff;
    font-size: 14px;
    margin-bottom: 16px;
    text-align: left;
    font-weight: 700;
    text-transform: capitalize;
    line-height: 1.625;
    margin-bottom: 18px;
  }

  .box-btn-amount {
    text-align: center;
    margin: auto;
  }
  .btn-amount {
    width: 90px;
  }

  .input-amount {
    position: relative;
    padding: 20px 10px 0px 10px;

    h3 {
      position: absolute;
      right: 25px;
      top: 33px;
    }
  }

  .btn-submit {
    padding: 0px 10px;
    width: 300px;
    height: 60px;
    margin: auto;
  }

  .description {
    padding: 14px 20px;

    ${({ theme }) => theme.mediaQueries.md} {
      padding: 14px 55px;
    }

    p {
      color: #fff;
      font-size: 10px;
      line-height: 1.6;
      letter-spacing: 0.03em;
      display: block;
      font-weight: 500;

      span {
        color: #ffa800;
        cursor: pointer;
        position: relative;
        transition: 0.3s linear;
        text-decoration: underline;
      }
    }

    svg {
      margin-right: 6px;
    }
  }
`
