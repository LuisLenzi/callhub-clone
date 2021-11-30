import React, { useContext } from 'react'

import { Breadcrumbs } from '@material-ui/core'
import Link from 'next/link'

import styles from './styles.module.scss'
import { Context } from '../../context/Context'
import { sectorDictionary } from './dictionary'

export default function Breadcrumb() {
  const { currentPage } = useContext(Context)

  return (
    <div className={styles.breadcrumb}>
      {currentPage !== 'Dashboard' && (
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Link href="/dashboard" passHref>
            <h4>Dashboard</h4>
          </Link>
          <Link href={`/${sectorDictionary[currentPage]}`} passHref>
            <h4 className={styles.active}>{currentPage}</h4>
          </Link>
        </Breadcrumbs>
      )}
      <h1>{currentPage}</h1>
    </div>
  )
}
