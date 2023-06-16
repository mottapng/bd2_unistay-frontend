'use client'
import React from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'
import { MdArrowBack } from 'react-icons/md'
import { UserInfo } from '@/components/Pages/Listing/UserInfo'
import { SideBar } from '@/components/Pages/Listing/SideBar'
import { ImagesSlider } from '@/components/Pages/Listing/ImagesSlider'
import { NumInfo } from '@/components/Pages/Listing/NumInfo'
import { BottomInfo } from '@/components/Pages/Listing/BottomInfo'

const Listing = async ({ params }) => {
  const rep = {
    id: 9,
    name: 'República 03',
    photos: ['https://images.pexels.com/photos/2187304/pexels-photo-2187304.jpeg?auto=compress&cs=tinysrgb&w=1600', 'https://images.pexels.com/photos/4588041/pexels-photo-4588041.jpeg?auto=compress&cs=tinysrgb&w=1600', 'https://images.pexels.com/photos/9956248/pexels-photo-9956248.jpeg?auto=compress&cs=tinysrgb&w=1600'],
    type: 'Quarto Privado',
    price: 1300,
    numBedrooms: 2,
    numBathrooms: 3,
    numGarage: 1,
    desc: "A Claudinhos house é uma republica deslumbrante e espaçosa com piscina e banheira de hidromassagem!  com total luxo por dentro e incrível espaço exterior para desfrutar enquanto relaxa com a família e os amigos. A área de estar externa, que inclui piscina, spa em cachoeira, mirante com cozinha completa de verão, incluindo muitos assentos no bar ou mesa de jantar ao ar livre.",
    street: 'Av. XV de Novembro',
    num: 213,
    city: "Cornélio Procópio",
    state: "PR",
    cep: "86300-000"
  }

  return (
    <section className={styles.listingContainer}>
      <div className={styles.listingInner}>
        <div className={styles.listingInnerLeft}>
          <h1>
            <Link href="/listings?page=1"><MdArrowBack fontSize={38} /></Link>
            Lista de Repúblicas
          </h1>
          <UserInfo />
          <ImagesSlider images={rep.photos} />
          <NumInfo data={rep} />
          <BottomInfo data={rep} />
        </div>
        <div className={styles.listingInnerRight}>
          <SideBar active={true} />
        </div>
      </div>
    </section>
  )
}

export default Listing