import Link from 'next/link'
import React from 'react'
import styles from './styles.module.scss'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div>
          <Link href='/' className={styles.logo}>UniStay</Link>
          <span>© UniStay. 2023</span>
        </div>
        <div>
          <FaTwitter fontSize="20px" color="#62646a" cursor="pointer" />
          <FaFacebook fontSize="20px" color="#62646a" cursor="pointer" />
          <FaInstagram fontSize="20px" color="#62646a" cursor="pointer" />
        </div>
      </div>
    </footer>
  )
}