import { useContext, useEffect } from 'react'

import Head from 'next/head'
import Image from 'next/image'

import { Context } from '../../context/Context'

import Main from '../../components/Layouts/main'

import CoinsAPI from '../../services/coins'

import styles from './styles.module.scss'
import { GetStaticProps } from 'next'
import { AiOutlineDollarCircle, AiOutlineEuroCircle } from 'react-icons/ai'
import { RiBitCoinLine } from 'react-icons/ri'

export default function Dashboard({ coins }: any) {
  const { profileObjectData, handleCurrentPage } = useContext(Context)

  useEffect(() => {
    handleCurrentPage('Dashboard')
  }, [handleCurrentPage])

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
          <div className={styles.imageBox}>
            <Image
              src={'/assets/png/mockup.jpg'}
              alt={'Graph'}
              width={1000}
              height={300}
              quality={50}
              objectFit={'cover'}
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.coins}>
          <div className={styles.coin}>
            <div className={styles.content}>
              <AiOutlineDollarCircle className={styles.icon} size={40} />
              <h3>Dólar - Real</h3>
              <div>
                <h1>R$ {coins.USDBRL.high}</h1>
                <h3>R$ {coins.USDBRL.low}</h3>
                <p>Porcentagem {coins.USDBRL.pctChange}%</p>
              </div>
            </div>
          </div>
          <div className={styles.coin}>
            <div className={styles.content}>
              <AiOutlineEuroCircle className={styles.icon} size={40} />
              <h3>Euro - Real</h3>
              <div>
                <h1>R$ {coins.EURBRL.high}</h1>
                <h3>R$ {coins.EURBRL.low}</h3>
                <p>Porcentagem {coins.EURBRL.pctChange}%</p>
              </div>
            </div>
          </div>
          <div className={styles.coin}>
            <div className={styles.content}>
              <RiBitCoinLine className={styles.icon} size={40} />
              <h3>Bitcoin - Real</h3>
              <div>
                <h1>R$ {coins.BTCBRL.high}</h1>
                <h3>R$ {coins.BTCBRL.low}</h3>
                <p>Porcentagem {coins.BTCBRL.pctChange}%</p>
              </div>
            </div>
          </div>
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
