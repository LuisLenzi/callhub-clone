import React, { InputHTMLAttributes, useRef, useState } from 'react'

import { IconButton } from '@material-ui/core'

import { Container, Label } from './styles'
import { FiEye, FiEyeOff } from 'react-icons/fi'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  type?: string
  label: string
}

export default function Input({ name, type, label }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [blur, setBlur] = useState(false)
  const [value, setValue] = useState('')
  const [isActive, setIsActive] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const togglePassword = () => {
    isActive ? setIsActive(false) : setIsActive(true)
    setShowPassword(!showPassword)
  }

  function handleApplyBlur() {
    setBlur(true)
  }

  function handleDisableBlur() {
    setBlur(false)
  }

  return (
    <>
      <Container
        style={{ borderBottom: `${blur ? '3px solid var(--cian-solid)' : ''}` }}
      >
        <Label className={blur || value ? 'blur' : ''}>{label}</Label>
        <div>
          <input
            name={name}
            value={value}
            ref={inputRef}
            autoComplete="off"
            type={type === 'password' && !showPassword ? 'password' : 'text'}
            onClick={handleApplyBlur}
            onBlur={handleDisableBlur}
            onChange={(event) => setValue(event.target.value)}
          />
          {type === 'password' && (
            <IconButton
              type="button"
              name="passwordView"
              onClick={togglePassword}
              aria-label="toggle password visibility"
            >
              <div>
                {!isActive ? (
                  <FiEye cursor="pointer" size={18} />
                ) : (
                  <FiEyeOff cursor="pointer" size={18} />
                )}
              </div>
            </IconButton>
          )}
        </div>
      </Container>
    </>
  )
}
