import React, { useContext } from 'react'

import { FiSettings } from 'react-icons/fi'
import { RiMenuUnfoldLine } from 'react-icons/ri'

import {
  Context,
  ProfileInterface,
  NotificationInterface,
} from '../../context/Context'

import { Button } from '../Button'
import { Notification } from '../Notification'
import { ProfileButton } from '../Profile/ProfileButton'
import { Tooltips } from '../Tooltip'

import styles from './styles.module.scss'

interface HeaderProps {
  profileObject: ProfileInterface
  notificationObject: NotificationInterface[]
}

export default function Header({
  profileObject,
  notificationObject,
}: HeaderProps) {
  const { leftBarIsActive, handleLeftBarActive } = useContext(Context)

  return (
    <div className={leftBarIsActive ? styles.header : styles.fullWidth}>
      <div className={styles.left}>
        <Tooltips
          title={leftBarIsActive ? 'Ocultar Menu' : 'Visualizar Menu'}
          placement="right"
        >
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
      </div>
      <div className={styles.right}>
        <Tooltips title="Configurações" placement="bottom">
          <div>
            <Button name="settings" type="button">
              <FiSettings size={22} />
            </Button>
          </div>
        </Tooltips>
        {notificationObject && (
          <Notification notificationObject={notificationObject} />
        )}
        {profileObject && <ProfileButton profileObject={profileObject} />}
      </div>
    </div>
  )
}
