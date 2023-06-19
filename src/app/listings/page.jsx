'use client'
import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { RepsList } from '@/components/RepsList'
import { MdArrowBack } from 'react-icons/md'
import Link from 'next/link'
import useSWR from "swr";
import { useSearchParams } from 'next/navigation';
import { Pagination } from '@/components/Pagination'

const Listings = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get('page');
  let search = searchParams.get('q');
  let request = 'https://unistay-api.onrender.com/listings';

  if (search) {
    request = `https://unistay-api.onrender.com/listings?search=${search}`
  }

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(request, fetcher);

  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 9;

  useEffect(() => {
    if (data) {
      const totalItems = data.length;
      const calculatedTotalPages = Math.ceil(totalItems / itemsPerPage);
      setTotalPages(calculatedTotalPages);
    }
  }, [data]);

  return (
    <section className={styles.listingsContainer}>
      <div className={styles.listingsInner}>
        <h1>
          <Link href="/"><MdArrowBack fontSize={38} /></Link>
          Lista de Repúblicas
        </h1>
        {data && <RepsList displayListings={9} data={data} page={page} />}
        {totalPages > 0 && <Pagination totalPages={totalPages} currentPage={page} q={search} />}
      </div>
    </section>
  )
}

export default Listings
