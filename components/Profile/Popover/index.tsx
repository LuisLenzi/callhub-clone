import { memo } from 'react'
import { Popover } from '@material-ui/core'
import { Grow } from '@material-ui/core'

import Image from 'next/image'
import Link from 'next/link'

import styles from './styles.module.scss'
import { Button } from '../../Button'

import { MdOutlineAttachEmail } from 'react-icons/md'
import { AiOutlineLogout } from 'react-icons/ai'
import { HiOutlineExternalLink } from 'react-icons/hi'

interface ProfileInterface {
  id: number
  userName: string
  userEmail: string
  userImage: string
  userFunction: string
}

interface PopoverProps {
  id: string
  open: boolean
  onClose: () => void
  profileObject: ProfileInterface
  anchorEl: HTMLButtonElement | null
}

function PopoverComponent({
  id,
  open,
  onClose,
  anchorEl,
  profileObject,
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
          <h1>Perfil</h1>
          <section className={styles.userInformation}>
            <Image
              src={profileObject.userImage}
              alt={profileObject.userName}
              width={70}
              height={70}
              quality={100}
              objectFit={'contain'}
              className={styles.image}
            />
            <div className={styles.userData}>
              <h3>{profileObject.userName}</h3>
              <p>{profileObject.userFunction}</p>
              <div className={styles.userEmail}>
                <MdOutlineAttachEmail size={18} />
                <p>{profileObject.userEmail}</p>
              </div>
            </div>
          </section>
          <Link href={'/profile'} passHref>
            <section className={styles.profile}>
              <Button>
                <div>
                  <p>Acessar perfil</p>
                </div>
                <HiOutlineExternalLink size={25} />
              </Button>
            </section>
          </Link>
          <Link href={'/login'} passHref>
            <Button>
              Desconectar
              <AiOutlineLogout className={styles.disconnect} size={20} />
            </Button>
          </Link>
        </div>
      </Popover>
    </div>
  )
}

export const PopOver = memo(PopoverComponent)
