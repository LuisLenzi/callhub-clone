import React, { ButtonHTMLAttributes, memo } from 'react'

import styles from './styles.module.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

import { Tooltips } from '../Tooltip'
import { HiOutlineChat } from 'react-icons/hi'

function ChatButtonComponent({ name, type, children, ...rest }: ButtonProps) {
  return (
    <Tooltips title="Chat" placement="left">
      <button className={styles.container} name={name} type={type} {...rest}>
        <HiOutlineChat size={28} />
      </button>
    </Tooltips>
  )
}

export const ChatButton = memo(ChatButtonComponent)
