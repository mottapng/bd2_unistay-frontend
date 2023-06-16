import React from 'react'
import styles from './styles.module.scss'
import { RepsList } from '@/components/RepsList/'
import Link from 'next/link'

export const ListSection = ({ data }) => {
  return (
    <section className={styles.listContainer}>
      <div className={styles.listInner}>
        <div className={styles.listHead}>
          <h1>Lista De Repúblicas</h1>
          <Link href="/listings/?page=1">Ver Tudo</Link>
        </div>
        <RepsList displayListings={6} data={data} />
      </div>
    </section>
  )
}
