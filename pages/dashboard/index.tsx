import Head from 'next/head'
import styles from './styles.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard | Callhub</title>
      </Head>

      <section>
        <h1>Left Bar</h1>
      </section>
      
      <main className={styles.main}>
        <header>
          <h3>Header</h3>
        </header>
        <section>
          <h1>Main</h1>
        </section>
      </main>
    </div>
  )
}
