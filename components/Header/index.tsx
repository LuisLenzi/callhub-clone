import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { RiRefreshLine } from 'react-icons/ri'
import Button from '../Button'
import { Profile } from '../Profile'
import { Tooltips } from '../Tooltip'

import styles from './styles.module.scss'

interface ProfileInterface {
  id: number
  userName: string
  userFunction: string
  userEmail: string
  userImage: string
}

interface ProfileProps {
  profileObject: ProfileInterface
}

export default function Header({ profileObject }: ProfileProps) {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <Tooltips title="Menu" placement="bottom">
          <div>
            <Button name="menuButton" type="button">
              <AiOutlineMenu size={22} />
            </Button>
          </div>
        </Tooltips>
        <Tooltips title="Atualizar página" placement="bottom">
          <div>
            <Button name="refreshButton" type="button">
              <RiRefreshLine size={22} />
            </Button>
          </div>
        </Tooltips>
      </div>
      <div className={styles.right}>
        <Tooltips title="Menu" placement="bottom">
          <div>
            <Button name="menuButton" type="button">
              <AiOutlineMenu size={22} />
            </Button>
          </div>
        </Tooltips>
        <Tooltips title="Atualizar página" placement="bottom">
          <div>
            <Button name="refreshButton" type="button">
              <RiRefreshLine size={22} />
            </Button>
          </div>
        </Tooltips>
        <Profile profileObject={profileObject} />
      </div>
    </div>
  )
}
