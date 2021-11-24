import { useContext, useEffect, useState } from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'

import { LeftBarApi, ProfileApi } from '../../services/api'

import LeftBar from '../../components/LeftBar'
import Header from '../../components/Header'
import { ChatButton } from '../../components/Chat'

import { Context } from '../../context/Context'

import styles from './styles.module.scss'
import Loading from '../../components/Loading'
interface LeftBarInterface {
  id: number
  title: string
  options: [
    {
      id: number
      icon: string
      option: string
    },
  ]
}

interface ProfileInterface {
  id: number
  userName: string
  userFunction: string
  userEmail: string
  userImage: string
}

interface LeftBarProps {
  leftBarObject: LeftBarInterface[]
  profileObject: ProfileInterface
}

export default function Home({ leftBarObject, profileObject }: LeftBarProps) {
  const [isLoading, setIsLoading] = useState(true)
  const { leftBarIsActive } = useContext(Context)

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
      <Head>
        <title>Dashboard | Callhub</title>
      </Head>

      <section className={styles.leftBar}>
        <LeftBar leftBarObject={leftBarObject} />
      </section>

      <ChatButton />

      <main className={leftBarIsActive ? styles.main : styles.fullWidth}>
        <Header profileObject={profileObject} />
        <section className={styles.content}></section>
      </main>

      <Loading show={isLoading} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const leftBarObject = await LeftBarApi()
  const profileObject = await ProfileApi()

  return {
    props: {
      leftBarObject,
      profileObject,
    },
  }
}
