import { createContext } from 'react'

export interface LeftBarInterface {
  id: number
  title: string
  options: {
    id: number
    icon: string
    option: string
  }[]
}

export interface NotificationInterface {
  id: number
  label: string
  userImage: string
  userOwner: string
  description: string
}

export interface ProfileInterface {
  id: number
  userName: string
  userEmail: string
  userImage: string
  userFunction: string
}

type ContextProps = {
  currentPage: string
  leftBarIsActive: boolean
  profileObjectData: ProfileInterface
  leftBarObjectData: LeftBarInterface[]
  notificationObjectData: NotificationInterface[]
  handleLeftBarActive: () => void
  handleCurrentPage: (page: string) => void
}

export const Context = createContext({} as ContextProps)
