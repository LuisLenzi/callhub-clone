import { Form } from '@unform/web'
import Head from 'next/head'
import Image from 'next/image'
import Button from '../../components/Button'
import Input from '../../components/Inputs'
import styles from './styles.module.scss'

import { BiRightArrowAlt } from 'react-icons/bi'
import { FiKey } from 'react-icons/fi'

import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    typeof window !== 'undefined' && import('@lottiefiles/lottie-player')
  }, [])

  function handleOnSubmit() {
    console.log('submit')
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Login | Callhub</title>
      </Head>

      <div className={styles.image}>
        <Image
          src={'/assets/png/devlean.png'}
          alt={'Logo completa'}
          width={150}
          height={25}
          objectFit={'contain'}
          quality={50}
        />
      </div>
      <main className={styles.main}>
        <section className={styles.left}>
          <lottie-player
            id="firstLottie"
            loop
            autoplay
            src="https://assets2.lottiefiles.com/packages/lf20_gbyxyhzy.json"
            style={{ width: '475px', height: '475px' }}
          />
        </section>
        <section className={styles.right}>
          <div className={styles.content}>
            <Image
              src={'/assets/png/logo192.png'}
              alt={'Logo completa'}
              width={50}
              height={50}
              objectFit={'contain'}
              quality={50}
            />
            <div className={styles.welcome}>
              <h2>Seja bem-vindo(a) ao</h2>
              <h1>Callhub</h1>
            </div>
            <Form className={styles.form} onSubmit={handleOnSubmit}>
              <Input name="email" type="default" label="E-mail" />
              <Input name="password" type="password" label="Senha" />
              <Button name="loginButton">
                Realizar Login <BiRightArrowAlt size={22} />
              </Button>
            </Form>
            <div className={styles.forgotPassword}>
              <Button name="forgotPasswordButton">
                Esqueci minha senha <FiKey size={16} />
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
