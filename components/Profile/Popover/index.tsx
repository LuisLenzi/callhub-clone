import { memo, useContext } from 'react'

import { Grow } from '@material-ui/core'
import { Popover } from '@material-ui/core'

import Image from 'next/image'
import Link from 'next/link'

import { Button } from '../../Button'

import { IoIosLogOut } from 'react-icons/io'
import { MdOutlineAttachEmail } from 'react-icons/md'
import { HiOutlineExternalLink } from 'react-icons/hi'

import styles from './styles.module.scss'

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
        anchorEl={anchorEl}
        TransitionComponent={Grow}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <div className={styles.content}>
          <section className={styles.profile}>
            <h1>Perfil</h1>
            <Link href={'/profile'} passHref>
              <Button>
                <p>Acessar perfil</p>
                <HiOutlineExternalLink size={18} />
              </Button>
            </Link>
          </section>
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
                <MdOutlineAttachEmail
                  size={16}
                  color={'var(--light-gray-500-solid)'}
                />
                <p>{profileObject.userEmail}</p>
              </div>
            </div>
          </section>
          <Link href={'/login'} passHref>
            <Button>
              Desconectar
              <IoIosLogOut className={styles.disconnect} size={20} />
            </Button>
          </Link>
        </div>
      </Popover>
    </div>
  )
}

export const PopOver = memo(PopoverComponent)
