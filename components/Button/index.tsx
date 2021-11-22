import React, { ButtonHTMLAttributes } from 'react'

import styles from './styles.module.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ name, children, ...rest }: ButtonProps) {
  return (
    <button name={name} className={styles.container} type="submit" {...rest}>
      {children}
    </button>
  )
}
