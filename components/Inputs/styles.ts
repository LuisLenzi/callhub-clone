import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  height: 3.25rem;
  display: flex;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: var(--cian-solid);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Poppins', sans-serif !important;
  border-bottom: 1px solid var(--cian-solid);
  transition: all 0.35s ease-in-out;

  &:hover {
    transition: all 0.35s ease-in-out;
    border-bottom: 3px solid var(--cian-solid);
  }

  div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;

    input {
      flex: 1;
      height: 100%;
      padding: 0.25rem 0.5rem;
      margin-bottom: 0.5rem;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      font-weight: 500 !important;
      background: transparent;
      letter-spacing: -0.5px;
      border: 0;
      color: var(--black-solid);
      font-family: 'Poppins', sans-serif !important;
      transition: all 0.35s ease-in-out;

      &::placeholder {
        font-family: 'Poppins', sans-serif !important;
        letter-spacing: -1px;
        font-size: 0.95rem;
        color: var(--black-solid);
        font-weight: 300;
      }
    }

    button {
      width: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.35s ease-in-out;
      padding: 0.5rem;
      margin-bottom: 0.5rem;

      svg {
        cursor: pointer;
        transition: all 0.35s ease-in-out;

        path {
          cursor: pointer;
        }
      }

      :hover {
        color: var(--cian-solid);
      }
    }
  }

  .blur {
    transform: translateX(-42.5%) translateY(-15%);
    font-size: 0.75rem;
  }
`

export const Label = styled.div`
  font-family: 'Poppins', sans-serif !important;
  letter-spacing: -1px;
  font-size: 0.95rem;
  color: var(--cian-solid);
  font-weight: 300;
  transform: translateX(-37.5%) translateY(150%);
  line-height: 0.95rem;
  transition: all 0.35s ease-in-out;
`
