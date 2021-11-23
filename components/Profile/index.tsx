import React, { memo } from 'react'

import Button from '../Button'
import Image from 'next/image'

import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

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

export default function ProfileComponent({ profileObject }: ProfileProps) {
  return (
    <div className={styles.container}>
      <Button name="profile" type="button">
        <Image
          src={'/assets/png/logo192.png'}
          alt={profileObject.userName}
          width={80}
          height={10}
          quality={30}
          objectFit={'contain'}
        />
        <h1>Olá, {profileObject.userName}</h1>
        <MdOutlineKeyboardArrowDown />
      </Button>
    </div>
  )
}

export const Profile = memo(ProfileComponent)
