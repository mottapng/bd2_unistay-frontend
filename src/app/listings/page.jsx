'use client'
import React from 'react'
import styles from './styles.module.scss'
import { RepsList } from '@/components/RepsList'
import { MdArrowBack } from 'react-icons/md'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation';
import { Pagination } from '@/components/Pagination'

const Listings = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get('page');

  return (
    <section className={styles.listingsContainer}>
      <div className={styles.listingsInner}>
        <h1>
          <Link href="/"><MdArrowBack fontSize={38} /></Link>
          Lista de Repúblicas
        </h1>
        <RepsList displayListings={9} />
        <Pagination totalPages={3} currentPage={page} />
      </div>
    </section>
  )
}

export default Listings
