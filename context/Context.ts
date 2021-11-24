import { createContext } from 'react'

type ContextProps = {
  leftBarIsActive: boolean
  handleLeftBarActive: () => void
}

export const Context = createContext({} as ContextProps)
