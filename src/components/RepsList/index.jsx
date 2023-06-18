import React from 'react'
import { RepCard } from './RepCard'
import styles from './styles.module.scss'
import Link from 'next/link'

export const RepsList = ({ displayListings, data, page }) => {
  const countData = displayListings * page
  const dataToShow = data.slice(countData - displayListings, countData);

  return (
    <div className={styles.repsGrid}>
      {dataToShow.map((data, i) => (
        <Link href={`/listings/${data.listing_id}`} key={i}>
          <RepCard data={data} />
        </Link>
      ))}
    </div>
  )
}