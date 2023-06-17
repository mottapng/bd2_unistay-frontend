'use client'
import React from 'react'
import styles from './styles.module.scss'
import { RepsList } from '@/components/RepsList'
import { MdArrowBack } from 'react-icons/md'
import Link from 'next/link'
import useSWR from "swr";
import { useSearchParams } from 'next/navigation';
import { Pagination } from '@/components/Pagination'

export const metadata = {
  title: 'Anúncios | UniStay',
  description: 'Encontre vagas em repúblicas pelo menor custo',
}

const Listings = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `http://localhost:5000/listings`,
    fetcher
  );

  const searchParams = useSearchParams();
  const page = searchParams.get('page');

  return (
    <section className={styles.listingsContainer}>
      <div className={styles.listingsInner}>
        <h1>
          <Link href="/"><MdArrowBack fontSize={38} /></Link>
          Lista de Repúblicas
        </h1>
        {data && <RepsList displayListings={9} data={data} />}
        <Pagination totalPages={3} currentPage={page} />
      </div>
    </section>
  )
}

export default Listings
