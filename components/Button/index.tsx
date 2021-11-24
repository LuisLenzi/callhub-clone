import React, { ButtonHTMLAttributes, memo } from 'react'

import styles from './styles.module.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

function ButtonComponent({ name, type, children, ...rest }: ButtonProps) {
  return (
    <button className={styles.container} name={name} type={type} {...rest}>
      {children}
    </button>
  )
}

export const Button = memo(ButtonComponent)
