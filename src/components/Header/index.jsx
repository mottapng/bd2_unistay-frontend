'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import styles from './styles.module.scss'
import { Profile } from './Profile'
import { Search } from './Search'
import { Modal } from '../Modal'

export const Header = () => {
  const [modal, setModal] = useState()

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Link href='/' className={styles.logo}>UniStay</Link>
        <Search />
        <Profile setModal={setModal} />
      </div>
      {modal && <Modal modal={modal} setModal={setModal} />}
    </div>
  )
}
