import React from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'
import { MdArrowBack } from 'react-icons/md'
import { UserPicture } from '@/components/Pages/Profile/UserPicture'
import { Input } from '@/components/Input'
import { UserListings } from '@/components/Pages/Profile/UserListings'
import { notFound } from "next/navigation";
import { reformatDate } from '@/utils/masks'

async function getData(id) {
  const res = await fetch(`http://localhost:5000/users/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound()
  }

  return res.json();
}


export async function generateMetadata({ params }) {

  const user = await getData(params.id)
  console.log(user)
  return {
    title: `${user.name} | UniStay`
  };
}

const UserProfile = async ({ params }) => {
  const data = await getData(params.id);

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
            <Input
              label="Nome do Usuário"
              defaultValue={data.name}
              type="text"
              placeholder="Nome do Usuário"
              required
              disabled
            />
            <Input
              label="E-mail"
              type="email"
              defaultValue={data.email}
              placeholder="email@dominio.com"
              required
              disabled
            />
            <Input
              label="Número do telefone"
              defaultValue={data.cellphone}
              type="text"
              placeholder="(12) 34567-8910"
              required
              disabled
            />
            <Input
              label="Data de nascimento"
              defaultValue={reformatDate(data.birth_date)}
              type="text"
              placeholder="00/00/0000"
              required
              disabled
            />
            <Input
              label="Cidade"
              type="text"
              defaultValue={data.country}
              placeholder="Cidade do Usuário"
              required
              disabled
            />
            <Input
              label="Estado"
              type="text"
              defaultValue={data.uf}
              placeholder="UF"
              required
              disabled
            />
          </div>
        </div>
        <UserListings />
      </div>
    </section>
  )
}

export default UserProfile