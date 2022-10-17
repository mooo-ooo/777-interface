import styled from 'styled-components'
import Image from 'next/future/image'
import { Flex, Button } from '@pancakeswap/uikit'

export interface IGame {
  thumbnail: string
  name: string
  provider: string
  gameId: string
  slug: string
  type: string
}

const CardGame: React.FC<React.PropsWithChildren<{ game: IGame }>> = ({ game }) => {
  const { thumbnail, name, provider, slug, gameId } = game
  const launchUrl = `/slots/${slug}`
  return (
    <BoxGame key={gameId + provider} flexDirection="column">
      <div className="layer-cover">
        <Image src={thumbnail} alt={name} fill className="section-three_game" />
        <div className="action">
          <Button as="a" href={launchUrl}>
            Play
          </Button>
        </div>
      </div>
      <Flex flexDirection="column" className="section-three_game-title" mt={12}>
        <h2>{name}</h2>
        <h4>{provider}</h4>
      </Flex>
    </BoxGame>
  )
}

export default CardGame

const BoxGame = styled(Flex)`
  position: relative;
  .action {
    display: none;
  }
  :hover {
    cursor: pointer;
    .action {
        transition: .3s ease-in-out;
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        top: 0px;
        align-content: center;
        align-items: center;
        justify-content: center;
        background: rgba(255,0,77,.75);
        flex-direction: column;
      }
    }
  }
  .section-three_game {
    object-fit: cover;
    position: relative !important;
    width: 100%;
    height: 100%;
    &-title {
      h2 {
        color: #fff;
        font-weight: 700;
        font-size: 14px;
        line-height: 1.2;
        margin-bottom: 4px;
        transition: 0.3s linear;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-transform: capitalize;
      }
      h4 {
        ont-weight: 500;
        font-size: 11px;
        line-height: 1.2;
        color: hsla(0, 0%, 100%, 0.6);
        max-width: 130px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
`
