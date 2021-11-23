import Head from 'next/head'
import { GetStaticProps } from 'next'
import LeftBar from '../../components/LeftBar'
import { LeftBarApi, ProfileApi } from '../../services/api'

import styles from './styles.module.scss'
import Header from '../../components/Header'

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
  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard | Callhub</title>
      </Head>

      <section className={styles.leftBar}>
        <LeftBar leftBarObject={leftBarObject} />
      </section>

      <main className={styles.main}>
        <Header profileObject={profileObject} />
        <section className={styles.content}>
          <h1>Dashboard</h1>
          <div>
            <p>dasdp</p>
          </div>
        </section>
      </main>
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
