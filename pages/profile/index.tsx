import Head from 'next/head'
import Main from '../../components/Layouts/main'
import styles from './styles.module.scss'

export default function Profile() {
  return (
    <Main>
      <Head>
        <title>Perfil | Callhub</title>
      </Head>

      <div className={styles.container}>
        <h1>Profile</h1>
      </div>
    </Main>
  )
}
