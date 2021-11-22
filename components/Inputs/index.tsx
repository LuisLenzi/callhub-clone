import React, { InputHTMLAttributes, useRef, useState } from 'react'

import { TextField } from '@material-ui/core'
import { IconButton } from '@material-ui/core'

import { Container } from './styles'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { styled } from '@material-ui/system'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  type: string
  label: string
}

export default function Input({ name, type, label }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isActive, setIsActive] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const togglePassword = () => {
    isActive ? setIsActive(false) : setIsActive(true)
    setShowPassword(!showPassword)
  }

  const InputStyles = styled(TextField)({
    '& label.Mui-focused': {
      color: 'var(--cian-solid)',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'var(--cian-solid)',
    },
    '& .MuiInputBase-root': {
      width: '100%',
    },
    label: {
      fontFamily: '"Poppins", sans-serif !important',
      letterSpacing: '-1px',
    },
    input: {
      outline: 'none',
      padding: '0.75rem 1rem',
      fontWeight: '500 !important',
      background: 'transparent',
      letterSpacing: '-0.5px',
      border: 0,
      color: 'var(--cian-solid)',
      borderBottom: '1px solid var(--cian-solid)',
      fontFamily: '"Poppins", sans-serif !important',
    },
  })

  return (
    <>
      {type === 'default' && (
        <Container>
          <InputStyles
            name={name}
            label={label}
            ref={inputRef}
            autoComplete="off"
            variant="standard"
          />
        </Container>
      )}

      {type === 'password' && (
        <Container>
          <InputStyles
            name={name}
            label={label}
            autoComplete="off"
            variant="standard"
            type={showPassword ? 'text' : 'password'}
          />
          <IconButton name="passwordView" onClick={togglePassword}>
            {!isActive ? (
              <FiEye cursor="pointer" size={18} />
            ) : (
              <FiEyeOff cursor="pointer" size={18} />
            )}
          </IconButton>
        </Container>
      )}
    </>
  )
}
