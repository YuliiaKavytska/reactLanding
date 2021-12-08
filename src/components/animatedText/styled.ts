import styled, { keyframes } from 'styled-components'

const showAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100px) skewX(10deg) skewY(10deg) rotateZ(30deg);
    filter: blur(10px);
  }
  25% {
    opacity: 1;
    transform: translateY(0) skewX(0) skewY(0) rotateZ(0);
    filter: blur(0);
  }
  100% {
    opacity: 1;
    transform: translateY(0) skewX(0) skewY(0) rotateZ(0);
    filter: blur(0);
`

export const Word = styled.span<{ index: number }>`
  display: inline-block;
  margin-right: 15px;
  animation: ${showAnimation} 10s;

  &:nth-child(${({ index }) => index + 1}) {
    animation-delay: ${({ index }) => (index + 1) / 15}s;
  }
`
