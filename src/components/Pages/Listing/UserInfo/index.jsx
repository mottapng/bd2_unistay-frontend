import React from 'react'
import { Rating } from './rating'
import styles from './styles.module.scss'
import { getInitials } from '@/utils/getInitials'

export const UserInfo = ({ data }) => {
  return (
    <div className={styles.userInfo}>
      <div className={styles.userAvatar}>
        {getInitials(data.users.name)}
      </div>
      <b className={styles.userName}>{data.users.name} |
        <div className={styles.userRating}>
          <Rating level={3.5} />
          <b>(10)</b>
        </div>
        · {data.address.city}, {data.address.uf}</b>
    </div>
  )
}
