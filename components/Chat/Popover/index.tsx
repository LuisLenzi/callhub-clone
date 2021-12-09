import { memo, useContext, useEffect, useState } from 'react'
import { Popover, Grow } from '@material-ui/core'

import io from 'socket.io-client'

import styles from './styles.module.scss'
import { Button } from '../../Button'

import { FiArrowLeft, FiGithub } from 'react-icons/fi'
import { BiSupport } from 'react-icons/bi'
import AutoTextArea from '../AutoTextArea'
import { chatApi } from '../../../services/chatApi'

import Image from 'next/image'
import Link from 'next/link'

import { MdOutlineWifiTetheringErrorRounded } from 'react-icons/md'
import { AuthContext } from '../../../context/Auth'

interface Message {
  id: string
  text: string
  user: {
    name: string
    avatar_url: string
  }
}

interface PopoverProps {
  id: string
  open: boolean
  onClose: () => void
  anchorEl: HTMLButtonElement | null
}

const messagesQueue: Message[] = []

const socket = io('https://callhub-api.herokuapp.com')
socket.on('new_message', (newMessage: Message) => {
  messagesQueue.push(newMessage)
})

function PopoverComponent({ id, open, onClose, anchorEl }: PopoverProps) {
  const [isConnected, setIsConnected] = useState(true)
  const [messages, setMessages] = useState<Message[]>([])

  const { user, signInUrl, signOut } = useContext(AuthContext)

  useEffect(() => {
    const timer = setInterval(() => {
      if (messagesQueue.length > 0) {
        setMessages((prevState) =>
          [messagesQueue[0], prevState[0], prevState[1]].filter(Boolean),
        )

        messagesQueue.shift()
      }
    }, 1000)
  }, [])

  useEffect(() => {
    chatApi
      .get('messages/last')
      .then((response) => {
        setMessages(response.data)
      })
      .catch((error) => {
        console.log(error)
        setIsConnected(false)
      })
  }, [])

  return (
    <div className={styles.container}>
      <Popover
        id={id}
        open={open}
        onClose={onClose}
        anchorEl={anchorEl}
        TransitionComponent={Grow}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <div className={styles.content}>
          <section className={styles.top}>
            <div>
              {user && (
                <Button type="button" name="backChat" onClick={signOut}>
                  <FiArrowLeft />
                </Button>
              )}
              <h1>Olá,</h1>
              <p>Converse com o suporte por aqui</p>
            </div>
          </section>
          {!user ? (
            <section className={styles.bottom}>
              <>
                <div className={styles.chatText}>
                  <BiSupport size={40} />
                  <h3>Chame um especialista</h3>
                  <p>Inicie uma conversa clicando no botão abaixo</p>
                </div>
                {isConnected ? (
                  <Link href={signInUrl} passHref>
                    <Button type="button" name="openChat">
                      Entrar pelo Github <FiGithub size={18} />
                    </Button>
                  </Link>
                ) : (
                  <p>
                    <MdOutlineWifiTetheringErrorRounded size={35} /> <br />
                    Sem conexão com o servidor
                  </p>
                )}
              </>
            </section>
          ) : (
            <div className={styles.messages}>
              {messages.map((message) => (
                <p
                  key={message.id}
                  className={
                    message?.user.name !== 'Luís Gustavo C. Lenzi'
                      ? styles.suport
                      : styles.autor
                  }
                >
                  <Image
                    src={message.user.avatar_url}
                    alt={'Logo completa'}
                    width={30}
                    height={30}
                    quality={80}
                    objectFit={'contain'}
                    className={styles.avatar}
                  />
                  {message.text}
                </p>
              ))}
            </div>
          )}
          {user && (
            <div className={styles.textarea}>
              <div className={styles.text}>
                <AutoTextArea />
              </div>
            </div>
          )}
        </div>
      </Popover>
    </div>
  )
}

export const PopOver = memo(PopoverComponent)
