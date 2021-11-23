import React, { ButtonHTMLAttributes } from 'react'

import styles from './styles.module.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ name, type, children, ...rest }: ButtonProps) {
  return (
    <button className={styles.container} name={name} type={type} {...rest}>
      {children}
    </button>
  )
}
