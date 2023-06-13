'use client'
import React from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'
import { MdArrowBack } from 'react-icons/md'
import { UserPicture } from '@/components/Profile/UserPicture'
import { Input } from '@/components/Input'
import { UserListings } from '@/components/Profile/UserListings'

const UserProfile = ({ params }) => {
  return (
    <section className={styles.profileContainer}>
      <div className={styles.profileInner}>
        <h1>
          <Link href="/"><MdArrowBack fontSize={38} /></Link>
          Perfil e Anúncios
          <button>Editar Informações</button>
        </h1>
        <div className={styles.profileInfoContainer}>
          <UserPicture />
          <div className={styles.profileInfo}>
            <Input label="Nome do Usuário" type="text" placeholder="Nome do Usuário" required />
            <Input label="E-mail" type="email" placeholder="email@dominio.com" required />
            <Input label="Número do telefone" type="text" placeholder="(12) 34567-8910" required />
            <Input label="Data de nascimento" type="text" placeholder="00/00/0000" required />
            <Input label="Cidade" type="text" placeholder="Cidade do Usuário" required />
            <Input label="Estado" type="text" placeholder="UF" required />
          </div>
        </div>
        <UserListings />
      </div>
    </section>
  )
}

export default UserProfile