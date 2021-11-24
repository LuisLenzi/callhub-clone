import React, { useContext, useState } from 'react'
import { Button } from '../Button'

import Image from 'next/image'

import styles from './styles.module.scss'
import {
  AiOutlineCoffee,
  AiOutlineComment,
  AiOutlineFileAdd,
  AiOutlineFileText,
  AiOutlineInbox,
  AiOutlineRise,
} from 'react-icons/ai'
import { Context } from '../../context/Context'

interface LeftBarInterface {
  id: number
  title: string
  options: [
    {
      id: number
      icon: string
      option: string
    },
  ]
}

interface LeftBarProps {
  leftBarObject: LeftBarInterface[]
}

export default function LeftBarComponent({ leftBarObject }: LeftBarProps) {
  const { leftBarIsActive } = useContext(Context)
  const [currentButton, setCurrentButton] = useState(0)

  function handleClick(id: number) {
    currentButton !== id ? setCurrentButton(id) : setCurrentButton(0)
  }

  const activeButton = {
    background: 'var(--cian-solid)',
    color: 'var(--white-solid)',
  }

  function HandleValidateIcon({ option }: { option: string }) {
    switch (option) {
      case 'AiOutlineFileText':
        return <AiOutlineFileText size={20} />
      case 'AiOutlineFileAdd':
        return <AiOutlineFileAdd size={20} />
      case 'AiOutlineCoffee':
        return <AiOutlineCoffee size={20} />
      case 'AiOutlineComment':
        return <AiOutlineComment size={20} />
      case 'AiOutlineInbox':
        return <AiOutlineInbox size={20} />
      case 'AiOutlineRise':
        return <AiOutlineRise size={20} />
      default:
        break
    }
    return <></>
  }

  return (
    <>
      {leftBarIsActive && (
        <div className={styles.container}>
          <div className={styles.imageBox}>
            <h1>Callhub</h1>
          </div>
          <div className={styles.content}>
            {leftBarObject?.map((item) => {
              return (
                <div className={styles.item} key={item.id}>
                  <h3>{item.title.toUpperCase()}</h3>
                  <div>
                    {item.options.map((option) => {
                      return (
                        <Button
                          onClick={() => handleClick(option.id)}
                          key={option.id}
                          style={
                            currentButton === option.id ? activeButton : {}
                          }
                        >
                          {<HandleValidateIcon option={option.icon} />}
                          {option.option}
                        </Button>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
          <div className={styles.devlean}>
            <Image
              src={'/assets/png/devlean.png'}
              alt={'Logo completa'}
              width={80}
              height={10}
              quality={30}
              objectFit={'contain'}
            />
          </div>
        </div>
      )}
    </>
  )
}
