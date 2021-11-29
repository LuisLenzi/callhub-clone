import { memo } from 'react'
import { Popover } from '@material-ui/core'
import { Grow } from '@material-ui/core'

import Image from 'next/image'

import styles from './styles.module.scss'
import { Button } from '../../Button'

import { HiOutlineExternalLink } from 'react-icons/hi'

interface NotificationInterface {
  id: number
  userImage: string
  userOwner: string
  description: string
  label: string
}

interface PopoverProps {
  id: string
  open: boolean
  onClose: () => void
  notificationObject: NotificationInterface[]
  anchorEl: HTMLButtonElement | null
}

function PopoverComponent({
  id,
  open,
  onClose,
  anchorEl,
  notificationObject,
}: PopoverProps) {
  return (
    <div className={styles.container}>
      <Popover
        id={id}
        open={open}
        onClose={onClose}
        TransitionComponent={Grow}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <div className={styles.content}>
          <section className={styles.notification}>
            <h1>Notificações</h1>
            <Button>
              <p>Acessar notificações</p>
              <HiOutlineExternalLink size={18} />
            </Button>
          </section>
          {notificationObject.slice(0, 3).map((notification) => (
            <section
              className={styles.notificationInformation}
              key={notification.id}
            >
              <Image
                src={notification.userImage}
                alt={notification.userOwner}
                width={70}
                height={70}
                quality={100}
                objectFit={'contain'}
                className={styles.image}
              />
              <div className={styles.notificationData}>
                <h3>{notification.userOwner}</h3>
                <p>{notification.description}</p>
                <div>
                  <label
                    className={
                      notification.label === 'Dev'
                        ? styles.dev
                        : notification.label === 'Erro'
                        ? styles.error
                        : styles.warning
                    }
                  >
                    {notification.label}
                  </label>
                  <Button>
                    <p>Visualizar</p>
                    <HiOutlineExternalLink size={18} />
                  </Button>
                </div>
              </div>
            </section>
          ))}
        </div>
      </Popover>
    </div>
  )
}

export const PopOver = memo(PopoverComponent)
