import { Form } from '@unform/web'

import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Router from 'next/router'

import { Button } from '../../components/Button'
import Input from '../../components/Inputs'
import styles from './styles.module.scss'

import { BiRightArrowAlt, BiLeftArrowAlt } from 'react-icons/bi'

import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    typeof window !== 'undefined' && import('@lottiefiles/lottie-player')
  }, [])

  function handleOnSubmit() {
    Router.push('/dashboard')
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Esqueci a Senha | Callhub</title>
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
              <h2>Não se preocupe,</h2>
              <p>Nós iremos te enviar uma mensagem em seu</p>
              <h1>E-mail</h1>
            </div>
            <Form className={styles.form} onSubmit={handleOnSubmit}>
              <Input name="email" type="default" label="E-mail" />
              <Button type="button" name="loginButton">
                Enviar mensagem <BiRightArrowAlt size={22} />
              </Button>
            </Form>
            <div className={styles.backToLogin}>
              <Link href={'/login'} passHref>
                <Button type="button" name="backToLogin">
                  <BiLeftArrowAlt size={22} /> Voltar para o Login
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section className={styles.right}>
          <lottie-player
            id="firstLottie"
            loop
            autoplay
            speed={0.75}
            src="https://assets5.lottiefiles.com/packages/lf20_bz5y4quo.json"
            style={{ width: '475px', height: '475px' }}
          />
        </section>
      </main>
    </div>
  )
}
