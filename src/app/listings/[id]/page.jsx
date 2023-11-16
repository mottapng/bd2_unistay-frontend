import React from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'
import { MdArrowBack } from 'react-icons/md'
import { UserInfo } from '@/components/Pages/Listing/UserInfo'
import { SideBar } from '@/components/Pages/Listing/SideBar'
import { ImagesSlider } from '@/components/Pages/Listing/ImagesSlider'
import { NumInfo } from '@/components/Pages/Listing/NumInfo'
import { BottomInfo } from '@/components/Pages/Listing/BottomInfo'
import { notFound } from 'next/navigation'

async function getData(listing_id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/listings/${listing_id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound()
  }

  return res.json();
}


export async function generateMetadata({ params }) {
  const data = await getData(params.id)

  return {
    title: `${data.name} | UniStay`,
    description: data.description,
  };
}

const Listing = async ({ params }) => {
  const data = await getData(params.id);

  return (
    <section className={styles.listingContainer}>
      <div className={styles.listingInner}>
        <div className={styles.listingInnerLeft}>
          <h1>
            <Link href="/listings?page=1"><MdArrowBack fontSize={38} /></Link>
            Lista de Anúncios
          </h1>
          <UserInfo data={data} />
          <ImagesSlider images={data.images} />
          <NumInfo data={data} />
          <BottomInfo data={data} />
        </div>
        <div className={styles.listingInnerRight}>
          <SideBar active={true} data={data} />
        </div>
      </div>
    </section>
  )
}

export default Listing