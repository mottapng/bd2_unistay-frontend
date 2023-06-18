'use client'
import React, { useState } from 'react'
import { RiSearchLine } from "react-icons/ri"
import styles from './styles.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export const Search = () => {
  const [value, setValue] = useState();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/listings/?page=1&q=${value ? value : ''}`);
  }

  const handleChange = (event) => {
    let value = event.target.value
    setValue(value);
  };

  return (
    <form className={styles.searchBar} onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
      <button style={{ backgroundColor: "#fff" }}>
        <RiSearchLine color='var(--purple-primary)' fontSize='24px' cursor='pointer' />
      </button>
    </form>
  )
}
