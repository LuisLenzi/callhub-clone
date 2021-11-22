import Head from 'next/head'
import styles from './styles.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard | Callhub</title>
      </Head>

      <main className={styles.main}>
        <h3>Hello</h3>
      </main>
    </div>
  )
}
