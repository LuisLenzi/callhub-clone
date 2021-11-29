import { useContext } from 'react'

import Head from 'next/head'

import { Context } from '../../context/Context'

import Main from '../../components/Layouts/main'

import CoinsAPI from '../../services/coins'

import styles from './styles.module.scss'
import { GetStaticProps } from 'next'
import { AiOutlineDollarCircle, AiOutlineEuroCircle } from 'react-icons/ai'
import { RiBitCoinLine } from 'react-icons/ri'

export default function Dashboard({ coins }: any) {
  const { profileObjectData } = useContext(Context)

  return (
    <Main>
      <Head>
        <title>Dashboard | Callhub</title>
      </Head>

      <div className={styles.container}>
        <div className={styles.welcome}>
          <div className={styles.left}>
            <h1>Hey {profileObjectData?.userName}</h1>
            <h3>Seja bem vindo(a) ao Callhub</h3>
          </div>
          <div className={styles.right} />
        </div>
        <div className={styles.coins}>
          <div className={styles.left}>
            <AiOutlineDollarCircle className={styles.icon} size={40} />
            <h3>Dólar - Real</h3>
            <div>
              <h1>R$ {coins.USDBRL.high}</h1>
              <h3>R$ {coins.USDBRL.low}</h3>
              <p>Porcentagem {coins.USDBRL.pctChange}%</p>
            </div>
          </div>
          <div className={styles.middle}>
            <AiOutlineEuroCircle className={styles.icon} size={40} />
            <h3>Euro - Real</h3>
            <div>
              <h1>R$ {coins.EURBRL.high}</h1>
              <h3>R$ {coins.EURBRL.low}</h3>
              <p>Porcentagem {coins.EURBRL.pctChange}%</p>
            </div>
          </div>
          <div className={styles.right}>
            <RiBitCoinLine className={styles.icon} size={40} />
            <h3>Bitcoin - Real</h3>
            <div>
              <h1>R$ {coins.BTCBRL.high}</h1>
              <h3>R$ {coins.BTCBRL.low}</h3>
              <p>Porcentagem {coins.BTCBRL.pctChange}%</p>
            </div>
          </div>
        </div>
        <div className={styles.welcome}>
          <div className={styles.left}>
            <h1>Hey {profileObjectData?.userName}</h1>
            <h3>Seja bem vindo(a) ao Callhub</h3>
          </div>
          <div className={styles.right} />
        </div>
        <div className={styles.welcome}>
          <div className={styles.left}>
            <h1>Hey {profileObjectData?.userName}</h1>
            <h3>Seja bem vindo(a) ao Callhub</h3>
          </div>
          <div className={styles.right} />
        </div>
      </div>
    </Main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const coins = await CoinsAPI.get('USD-BRL,EUR-BRL,BTC-BRL')

  return {
    props: {
      coins: coins.data,
    },
  }
}
