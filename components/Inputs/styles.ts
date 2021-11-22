import styled, { css } from 'styled-components'

export const InputBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const Container = styled.div`
  display: flex;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: var(--cian-solid);
  display: flex;
  align-items: center;
  font-family: 'Poppins', sans-serif !important;

  label {
    font-family: 'Poppins', sans-serif !important;
    letter-spacing: -1px;
    font-size: 0.95rem;
  }

  button {
    margin-right: -2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.35s ease-in-out;

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

  input {
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    padding: 0.75rem 1rem;
    font-weight: 500 !important;
    background: transparent;
    letter-spacing: -0.5px;
    border: 0;
    color: var(--cian-solid);
    border-bottom: 1px solid var(--cian-solid);
    font-family: 'Poppins', sans-serif !important;

    &::placeholder {
      color: var(--cian-solid);
      font-weight: 300;
    }
  }
`
