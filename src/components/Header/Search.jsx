import React from 'react'
import { RiSearchLine } from "react-icons/ri"
import styles from './styles.module.scss'
import Link from 'next/link'

export const Search = () => {
  return (
    <div className={styles.searchBar}>
      <input type="text" />
      <Link href='/listings/?page=1'>
        <RiSearchLine color='var(--purple-primary)' fontSize='24px' cursor='pointer' />
      </Link>
    </div>
  )
}
