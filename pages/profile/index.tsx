import { useContext, useEffect } from 'react'

import Head from 'next/head'

import Main from '../../components/Layouts/main'

import { Context } from '../../context/Context'

import styles from './styles.module.scss'
import { FiFacebook, FiInstagram, FiShare } from 'react-icons/fi'
import { Tooltips } from '../../components/Tooltip'
import { HiOutlineMail } from 'react-icons/hi'
import { BiSupport } from 'react-icons/bi'
import { AiOutlineCoffee, AiOutlineStar } from 'react-icons/ai'
import { RiMapPinUserLine } from 'react-icons/ri'
import Input from '../../components/Inputs'

export default function Profile() {
  const { profileObjectData, handleCurrentPage } = useContext(Context)

  useEffect(() => {
    handleCurrentPage('Perfil')
  }, [handleCurrentPage])

  return (
    <Main>
      <Head>
        <title>Perfil | Callhub</title>
      </Head>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.profileContainer}>
            <div className={styles.image} />
            <div
              className={styles.profileImage}
              style={{
                background: `url(${profileObjectData?.userImage}) no-repeat center center`,
              }}
            />
            <div className={styles.information}>
              <div className={styles.function}>
                <div>
                  <BiSupport size={25} />
                  <h1>500</h1>
                  <h4>Chamados</h4>
                </div>
                <div>
                  <AiOutlineCoffee size={25} />
                  <h1>Desenvolvimento</h1>
                  <h4>Função</h4>
                </div>
                <div>
                  <AiOutlineStar size={25} />
                  <h1>9.3</h1>
                  <h4>Avaliação Média</h4>
                </div>
              </div>
              <div className={styles.socialMedia}>
                <Tooltips title={'E-mail'} placement={'top'}>
                  <div>
                    <HiOutlineMail size={18} />
                  </div>
                </Tooltips>
                <Tooltips title={'Facebook'} placement={'top'}>
                  <div>
                    <FiFacebook size={18} />
                  </div>
                </Tooltips>
                <Tooltips title={'Instagram'} placement={'top'}>
                  <div>
                    <FiInstagram size={18} />
                  </div>
                </Tooltips>
              </div>
            </div>
          </div>
          <div className={styles.userInfo}>
            <div className={styles.left}>
              <div className={styles.message}>
                <BiSupport size={40} />
                <h1>Suporte</h1>
                <h4>
                  Suportes podem participar do chamado, ou seja, prestar
                  manutenção nos mesmos, criar chamados e encaminha-los a outro
                  usuário de suporte ou administrador que bem entender.
                </h4>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.userData}>
                <RiMapPinUserLine size={40} />
                <h1>Informações</h1>
                <div>
                  <h1>Nome</h1>
                  <h4>Augusto Pereira</h4>
                </div>
                <div>
                  <h1>E-mail</h1>
                  <h4>augusto.pereira@devlean.com.br</h4>
                </div>
                <div>
                  <h1>Empresa</h1>
                  <h4>Devlean</h4>
                </div>
                <div>
                  <h1>Nível de Acesso</h1>
                  <h4>Suporte</h4>
                </div>
                <div>
                  <h1>Senha</h1>
                  <h4>***********</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  )
}
