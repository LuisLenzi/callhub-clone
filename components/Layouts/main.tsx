import styles from './styles.module.scss'

import { ReactNode, useContext, useEffect, useState } from 'react'

import Header from '../Header'
import Loading from '../Loading'
import LeftBar from '../LeftBar'
import { ChatButton } from '../Chat'

import { Context } from '../../context/Context'

interface MainProps {
  children?: ReactNode
}

export default function Main({ children }: MainProps) {
  const [isLoading, setIsLoading] = useState(true)
  const {
    profileObjectData,
    leftBarObjectData,
    leftBarIsActive,
    notificationObjectData,
  } = useContext(Context)

  function handleSetIsLoading() {
    setIsLoading(false)
  }

  useEffect(() => {
    setTimeout(() => {
      handleSetIsLoading()
    }, 3000)
  }, [])

  return (
    <div className={styles.container}>
      <section className={styles.leftBar}>
        <LeftBar leftBarObject={leftBarObjectData} />
      </section>

      <ChatButton />

      <main className={leftBarIsActive ? styles.main : styles.fullWidth}>
        <Header
          profileObject={profileObjectData}
          notificationObject={notificationObjectData}
        />

        <section className={styles.content}>{children}</section>
      </main>

      <Loading show={isLoading} />
    </div>
  )
}
