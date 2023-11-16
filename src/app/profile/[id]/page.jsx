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
  try {
    const [userInfoResponse, userListingsResponse] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`, {
        cache: "no-store",
      }),
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/listings/user/${id}`, {
        cache: "no-store",
      }),
    ]);

    if (!userInfoResponse.ok && !userListingsResponse.ok) {
      return notFound();
    }

    const userInfoData = await userInfoResponse.json();
    const userListingsData = await userListingsResponse.json();

    return { userInfoData, userListingsData };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}


export async function generateMetadata({ params }) {
  const { userInfoData } = await getData(params.id)

  return {
    title: `${userInfoData.name} | UniStay`
  };
}

const UserProfile = async ({ params }) => {
  const { userInfoData, userListingsData } = await getData(params.id);

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
              defaultValue={userInfoData.name}
              type="text"
              placeholder="Nome do Usuário"
              required
              disabled
            />
            <Input
              label="E-mail"
              type="email"
              defaultValue={userInfoData.email}
              placeholder="email@dominio.com"
              required
              disabled
            />
            <Input
              label="Número do telefone"
              defaultValue={userInfoData.cellphone}
              type="text"
              placeholder="(12) 34567-8910"
              required
              disabled
            />
            <Input
              label="Data de nascimento"
              defaultValue={reformatDate(userInfoData.birth_date)}
              type="text"
              placeholder="00/00/0000"
              required
              disabled
            />
            <Input
              label="Cidade"
              type="text"
              defaultValue={userInfoData.country}
              placeholder="Cidade do Usuário"
              required
              disabled
            />
            <Input
              label="Estado"
              type="text"
              defaultValue={userInfoData.uf}
              placeholder="UF"
              required
              disabled
            />
          </div>
        </div>
        <UserListings listings={userListingsData} />
      </div>
    </section>
  )
}

export default UserProfile