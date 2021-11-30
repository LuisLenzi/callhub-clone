import styled, { css, keyframes } from 'styled-components'

interface ContainerProps {
  show: boolean
}

const appearAnimation = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

const disappearAnimation = keyframes`
  0% {
    opacity: 1;

    div {
      display: none;
      visibility: visible;
    }
  }

  100% {
    opacity: 0;
    
    div {
      display: none;
      visibility: hidden;
    }
  }
`

export const Container = styled.div<ContainerProps>`
  ${(props) =>
    props.show
      ? css`
          position: fixed;
          background: var(--white-solid);
          height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 2rem;
          z-index: 10;
          left: 0;
          top: 0;
          animation: ${disappearAnimation} 1s 2s linear;

          .box {
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            transition: all ease-in-out 2s;
            animation: ${appearAnimation} 2s linear;

            .image {
              position: absolute;
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              transition: all ease-in-out 2s;
            }
          }
        `
      : css`
          display: none;
          visibility: hidden;
        `}
`
