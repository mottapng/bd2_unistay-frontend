import React, { useState } from 'react'
import { getInitials } from '@/utils/getInitials'
import styles from './styles.module.scss'

import { FaRegBell } from 'react-icons/fa'
import { HiOutlineChatAlt2 } from 'react-icons/hi'
import Link from 'next/link'
import Image from 'next/image'
import { useAuthContext } from '@/context/AuthProvider'

export const Profile = ({ setModal }) => {
  const { auth, setAuth } = useAuthContext();
  const [loggedIn, setLoggedIn] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className={styles.avatarContainer}>
      {auth.user ? (
        <>
          <HiOutlineChatAlt2 onClick={() => setModal('chat')} color='#fff' fontSize='28px' cursor='pointer' />
          <div className={styles.userInfo}>
            <p>{auth.name}</p>
            <span>{auth.email}</span>
          </div>
          <a onClick={() => setIsPopupOpen(prev => !prev)}>
            <div className={styles.userAvatar}>
              {getInitials(auth.name)}
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
        className={`${styles.profilePopup} ${auth.user && styles.logged} ${isPopupOpen && styles.open}`}
      >
        {auth.user ? (
          <>
            <Link onClick={() => setIsPopupOpen(false)} href={`/profile/${auth.user}`}>Perfil</Link>
            <span onClick={() => { setIsPopupOpen(false); setAuth({}) }}>Deslogar</span>
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
