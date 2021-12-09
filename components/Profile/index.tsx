import React, { memo, useState } from 'react'

import { Button } from '../Button'
import Image from 'next/image'

import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md'

import styles from './styles.module.scss'
import { PopOver } from './Popover'

interface ProfileInterface {
  id: number
  userName: string
  userEmail: string
  userImage: string
  userFunction: string
}

interface ProfileProps {
  profileObject: ProfileInterface
}

export default function ProfileComponent({ profileObject }: ProfileProps) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const [openProfile, setOpenProfile] = useState(false)

  function handleOpenProfile(event: React.MouseEvent<HTMLButtonElement>) {
    if (openProfile) {
      setOpenProfile(false)
      setAnchorEl(null)
    } else {
      setAnchorEl(event.currentTarget)
      setOpenProfile(true)
    }
  }

  return (
    <div className={styles.container}>
      <Button name="profile" onClick={handleOpenProfile} type="button">
        <Image
          src={profileObject.userImage}
          alt={profileObject.userName}
          width={30}
          height={30}
          quality={30}
          objectFit={'contain'}
          className={styles.image}
        />
        Olá, {profileObject.userName}
        {openProfile ? (
          <MdOutlineKeyboardArrowDown size={20} />
        ) : (
          <MdOutlineKeyboardArrowRight size={20} />
        )}
      </Button>
      <PopOver
        id={'profile'}
        open={openProfile}
        anchorEl={anchorEl}
        onClose={() => setOpenProfile(false)}
        profileObject={profileObject}
      />
    </div>
  )
}

export const ProfileButton = memo(ProfileComponent)
