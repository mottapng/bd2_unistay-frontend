import React, { useState } from 'react'
import { getInitials } from '@/utils/getInitials'
import styles from './styles.module.scss'

import { FaRegBell } from 'react-icons/fa'
import { HiOutlineChatAlt2 } from 'react-icons/hi'
import Link from 'next/link'
import Image from 'next/image'

export const Profile = ({ setModal }) => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className={styles.avatarContainer}>
      {loggedIn ? (
        <>
          <FaRegBell color='#fff' fontSize='24px' cursor='pointer' />
          <HiOutlineChatAlt2 onClick={() => setModal('chat')} color='#fff' fontSize='28px' cursor='pointer' />
          <div className={styles.userInfo}>
            <p>Victor Motta</p>
            <span>victormotta7@gmail.com</span>
          </div>
          <a onClick={() => setIsPopupOpen(prev => !prev)} >
            <div className={styles.userAvatar}>
              {getInitials('Victor Motta')}
            </div>
          </a>
        </>
      ) : (
        <Image
          src='/userIcon.svg'
          width={32}
          height={32}
          style={{ cursor: 'pointer' }}
          alt={'Ícone de Usuário'}
          onClick={() => setIsPopupOpen(prev => !prev)}
        />
      )}
      <div
        className={`${styles.profilePopup} ${loggedIn && styles.logged} ${isPopupOpen && styles.open}`}
      >
        {loggedIn ? (
          <>
            <Link onClick={() => setIsPopupOpen(false)} href="/profile/1">Perfil</Link>
            <span onClick={() => { setIsPopupOpen(false); setLoggedIn(false) }}>Deslogar</span>
          </>
        ) :
          <>
            <span onClick={() => { setIsPopupOpen(false); setModal('login') }}>Logar</span>
            <span onClick={() => { setIsPopupOpen(false); setModal('register') }}>Registrar</span>
          </>
        }
      </div>
    </div>
  )
}
