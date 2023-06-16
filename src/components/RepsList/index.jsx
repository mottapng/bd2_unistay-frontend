import React from 'react'
import { RepCard } from './RepCard'
import styles from './styles.module.scss'
import Link from 'next/link'

export const RepsList = ({ displayListings, data }) => {
  const dataToShow = data.slice(0, displayListings);

  return (
    <div className={styles.repsGrid}>
      {dataToShow.map((data, i) => (
        <Link href={`/listings/${data.id}`} key={i}>
          <RepCard data={data} />
        </Link>
      ))}
    </div>
  )
}