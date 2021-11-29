import '../styles/globals.scss'

import type { AppProps } from 'next/app'

import {
  Context,
  LeftBarInterface,
  NotificationInterface,
  ProfileInterface,
} from '../context/Context'

import { useEffect, useState } from 'react'
import { LeftBarApi, NotificationApi, ProfileApi } from '../services/api'

interface DataProps {
  profileObjectData: ProfileInterface
  leftBarObjectData: LeftBarInterface[]
  notificationObjectData: NotificationInterface[]
}

export default function App({ Component, pageProps }: AppProps) {
  const [data, setData] = useState({} as DataProps)

  useEffect(() => {
    typeof window !== 'undefined' && import('@lottiefiles/lottie-player')
    async function getData() {
      const profileObjectData = await ProfileApi()
      const leftBarObjectData = await LeftBarApi()
      const notificationObjectData = await NotificationApi()

      setData({ profileObjectData, leftBarObjectData, notificationObjectData })
    }

    getData()
  }, [])

  const [leftBarIsActive, setLeftBarIsActive] = useState(true)

  function handleLeftBarActive() {
    leftBarIsActive ? setLeftBarIsActive(false) : setLeftBarIsActive(true)
  }

  return (
    <Context.Provider
      value={{
        leftBarIsActive,
        profileObjectData: data.profileObjectData,
        leftBarObjectData: data.leftBarObjectData,
        notificationObjectData: data.notificationObjectData,
        handleLeftBarActive,
      }}
    >
      <Component {...pageProps} />
    </Context.Provider>
  )
}
