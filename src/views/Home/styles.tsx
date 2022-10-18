import styled from 'styled-components'
import Container from 'components/Layout/Container'

export const Category = styled.div`
  background-image: url(/images/home/bg_line_home.png);
  background-repeat: no-repeat;
  background-position: 0 0;
`

export const ContainerSectionTwo = styled(Container)`
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

export const SectionThree = styled.div`
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

export const BannerSecondary = styled.div`
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

export const SectionPromotion = styled.div`
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

export const SectionFAQ = styled.div`
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
