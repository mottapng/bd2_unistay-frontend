import React from 'react'
import { Rating } from './rating'
import styles from './styles.module.scss'
import { getInitials } from '@/utils/getInitials'

export const UserInfo = () => {
  return (
    <div className={styles.userInfo}>
      <div className={styles.userAvatar}>
        {getInitials('Victor Motta')}
      </div>
      <b className={styles.userName}>Claudio Silva |
        <div className={styles.userRating}>
          <Rating level={3.5} />
          <b>(10)</b>
        </div>
        · Cornélio Procópio, PR</b>
    </div>
  )
}
