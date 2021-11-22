import Head from 'next/head'
import styles from '../styles/styles.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Callhub | Uma tecnologia Devlean</title>
      </Head>

      <main className={styles.main}>
        <h3>Maintance</h3>
      </main>
    </div>
  )
}
