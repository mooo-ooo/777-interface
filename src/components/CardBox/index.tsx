import styled from 'styled-components'

const CardBox = (props: any): JSX.Element => {
  const { hideSide, theme = 'primary', hideBackground } = props
  const color = theme === 'primary' ? '#ff004d' : '#00ffc2'
  return (
    <StyledBox color={color} hideBackground={hideBackground}>
      <Left hide={hideSide} />
      <Right hide={hideSide} />
      <StyleBoxDetail>{props.children}</StyleBoxDetail>
    </StyledBox>
  )
}

const StyledBox = styled.div<{ color: string; hideBackground?: boolean }>`
  position: relative;
  display: flex;
  margin-bottom: 16px;
  max-width: 100%;
  max-height: 100%;
  padding: 27px 23px;
  background-image: linear-gradient(${({ color }) => color}, ${({ color }) => color}),
    linear-gradient(${({ color }) => color}, ${({ color }) => color}),
    linear-gradient(${({ color }) => color}, ${({ color }) => color}),
    linear-gradient(${({ color }) => color}, ${({ color }) => color}),
    linear-gradient(
      to top left,
      transparent calc(50% - 3px),
      ${({ color }) => color} calc(50% - 3px),
      ${({ color }) => color} calc(50% + 1px),
      transparent calc(50% + 1px)
    ),
    ${({ hideBackground }) =>
      hideBackground
        ? 'linear-gradient(114deg, rgba(255, 0, 77, 0.2), rgba(255, 0, 77, 0))'
        : 'linear-gradient(114deg, rgba(255, 0, 77, 0.2), rgba(255, 0, 77, 0)), url(/images/card/box_bg.svg);'}

  background-size: 3px 100%, 3px 100%, 100% 3px, 100% 4px, 20px 20px, 100% 100%, contain;
  background-position: 0 0, 100% -16px, 0 0, -16px calc(100% + 1px), 100% 100%, 100% 100%, 0 0;
  background-repeat: no-repeat;

  &:before {
    content: '';
    position: absolute;
    width: 88px;
    height: 20px;
    background-image: url(/images/card/highlight.svg);
    background-repeat: no-repeat;
    top: -1px;
    left: 28px;
    transform: scaleX(-1);
  }
  &:after {
    content: '';
    position: absolute;
    width: 88px;
    height: 20px;
    background-image: url(/images/card/highlight.svg);
    background-repeat: no-repeat;
    bottom: 28px;
    right: 4px;
  }
`

const Left = styled.div<{ hide: boolean }>`
  display: ${({ hide }) => (hide ? 'none' : 'block')};
  content: '';
  background-repeat: no-repeat;
  position: absolute;
  left: 0px;
  bottom: 0px;
  height: 90px;
  width: 7px;
  background-image: url('/images/card/left.svg');
  background-size: 7px 100%;
`

const Right = styled.div<{ hide: boolean }>`
  display: ${({ hide }) => (hide ? 'none' : 'block')};
  content: '';
  background-repeat: no-repeat;
  position: absolute;
  right: 0;
  top: 21px;
  height: 94px;
  width: 9px;
  background-image: url(/images/card/right.svg);
  background-size: 9px 100%;
`

const StyleBoxDetail = styled.div``
export default CardBox
