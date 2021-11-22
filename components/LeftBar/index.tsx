import React from 'react'
import Button from '../Button'

import Image from 'next/image'

import styles from './styles.module.scss'

interface LeftBarProps {
  show?: boolean
}

export default function LeftBar({ show }: LeftBarProps) {
  return (
    <>
      {show && (
        <div className={styles.container}>
          <div>
            <Image
              src={'/assets/png/fulllogo.png'}
              alt={'Logo completa'}
              width={150}
              height={25}
              objectFit={'contain'}
              quality={50}
            />
          </div>
          <div>
            <div>
              <h3>Chamado</h3>
              <div>
                <Button>Minhas Ordens de Serviço</Button>
                <Button>Nova Ordem de Serviço</Button>
                <Button>Sugerir Desenvolvimento</Button>
              </div>
            </div>

            <div>
              <h3>Ajuda</h3>
              <div>
                <Button>Perguntas Frequentes</Button>
                <Button>Central de Ajuda</Button>
              </div>
            </div>

            <div>
              <h3>Analytics</h3>
              <div>
                <Button>Indicadores</Button>
              </div>
            </div>

            <div>
              <h3>Configurações</h3>
              <div>
                <Button>Ajustes</Button>
                <Button>{"TAG'S"}</Button>
                <Button>{"FAQ'S"}</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
