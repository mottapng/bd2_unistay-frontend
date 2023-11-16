"use client"

import React, { useEffect } from 'react'
import styles from './styles.module.scss'
import { Login } from './Login'
import { Register } from './Register'
import { Chat } from './Chat'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

export const Modal = ({ modal, setModal }) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const renderModal = () => {
    if (modal === 'login')
      return <Login setModal={setModal} />
    if (modal === 'register')
      return <Register setModal={setModal} />
    if (modal === 'chat')
      return <Chat handleClose={handleClose} />
  }

  const handleClose = () => {
    const nextSearchParams = new URLSearchParams(searchParams.toString())
    nextSearchParams.delete('chat')

    router.replace(`${pathname}?${nextSearchParams}`)

    setModal(null);
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modalInner}>
        {renderModal()}
      </div>
      <div className={styles.overlay} onClick={handleClose} />
    </div>
  )
}
