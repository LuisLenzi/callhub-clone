import { Badge } from '@material-ui/core'
import React, { useContext } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiSettings } from 'react-icons/fi'
import {
  MdClose,
  MdOutlineMenuOpen,
  MdOutlineNotificationsNone,
} from 'react-icons/md'
import { RiMenuUnfoldLine, RiRefreshLine } from 'react-icons/ri'
import { Context } from '../../context/Context'
import { Button } from '../Button'
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
  const { leftBarIsActive, handleLeftBarActive } = useContext(Context)

  return (
    <div className={leftBarIsActive ? styles.header : styles.fullWidth}>
      <div className={styles.left}>
        <Tooltips title="Menu" placement="bottom">
          <div>
            <Button
              onClick={handleLeftBarActive}
              name="menuButton"
              type="button"
            >
              <RiMenuUnfoldLine
                className={leftBarIsActive ? '' : styles.open}
                size={22}
              />
            </Button>
          </div>
        </Tooltips>
        <Tooltips title="Atualizar página" placement="bottom">
          <div className={styles.refreshButton}>
            <Button name="refreshButton" type="button">
              <RiRefreshLine size={22} />
            </Button>
          </div>
        </Tooltips>
      </div>
      <div className={styles.right}>
        <Tooltips title="Configurações" placement="bottom">
          <div>
            <Button name="settings" type="button">
              <FiSettings size={22} />
            </Button>
          </div>
        </Tooltips>
        <Tooltips title="Notificações" placement="bottom">
          <div>
            <Button name="refreshButton" type="button">
              <Badge color="warning" variant="dot">
                <MdOutlineNotificationsNone size={22} />
              </Badge>
            </Button>
          </div>
        </Tooltips>
        <Profile profileObject={profileObject} />
      </div>
    </div>
  )
}
